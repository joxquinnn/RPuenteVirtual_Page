import { DAY_ORDER, STATION_TIMEZONE, type Day, type Program } from '../types/programs'

const MIN_DAY = 24 * 60
const MIN_WEEK = MIN_DAY * 7

const DAY_NAMES: Record<Day, string> = {
  lun: 'Lunes',
  mar: 'Martes',
  mie: 'Miércoles',
  jue: 'Jueves',
  vie: 'Viernes',
  sab: 'Sábado',
  dom: 'Domingo',
}

const WEEKDAY_INDEX: Record<string, number> = {
  Mon: 0,
  Tue: 1,
  Wed: 2,
  Thu: 3,
  Fri: 4,
  Sat: 5,
  Sun: 6,
}

const stationClock = new Intl.DateTimeFormat('en-US', {
  timeZone: STATION_TIMEZONE,
  weekday: 'short',
  hour: '2-digit',
  minute: '2-digit',
  hourCycle: 'h23',
})

/** Minutos transcurridos desde el lunes 00:00, en la hora de la radio (no la del navegador). */
export function stationMinutesOfWeek(date: Date): number {
  const parts = stationClock.formatToParts(date)
  const value = (type: string) => parts.find((part) => part.type === type)?.value ?? '0'

  const day = WEEKDAY_INDEX[value('weekday')] ?? 0
  const hour = Number(value('hour')) % 24
  const minute = Number(value('minute'))

  return day * MIN_DAY + hour * 60 + minute
}

function toMinutes(time: string): number {
  const [hours, minutes] = time.split(':').map(Number)
  return hours * 60 + (minutes || 0)
}

type Window = { start: number; end: number }

/** Una ventana (inicio/fin en minutos de la semana) por cada día en que se emite el programa. */
function windowsOf(program: Program): Window[] {
  const startMin = program.allDay ? 0 : toMinutes(program.start ?? '00:00')
  let endMin = program.allDay ? MIN_DAY : toMinutes(program.end ?? '24:00')
  if (endMin <= startMin) endMin += MIN_DAY // termina después de medianoche

  return program.days.map((day) => {
    const base = DAY_ORDER.indexOf(day) * MIN_DAY
    return { start: base + startMin, end: base + endMin }
  })
}

function isLive(program: Program, nowMin: number): boolean {
  return windowsOf(program).some(
    (w) =>
      (nowMin >= w.start && nowMin < w.end) ||
      // semana siguiente: cubre programas que cruzan de domingo a lunes
      (nowMin + MIN_WEEK >= w.start && nowMin + MIN_WEEK < w.end),
  )
}

function minutesUntilStart(program: Program, nowMin: number): number {
  return Math.min(
    ...windowsOf(program).map((w) => (((w.start - nowMin) % MIN_WEEK) + MIN_WEEK) % MIN_WEEK),
  )
}

export type ProgramStatus = {
  /** Programa que está al aire ahora mismo (null si no hay ninguno). */
  liveId: string | null
  /** Próximo programa en comenzar (se usa cuando no hay ninguno en vivo). */
  nextId: string | null
}

export function getProgramStatus(programs: Program[], date: Date): ProgramStatus {
  const nowMin = stationMinutesOfWeek(date)

  const live = programs.filter((program) => isLive(program, nowMin))
  // Si coinciden, un programa con horario fijo gana sobre uno de "todo el día".
  const liveProgram = live.find((program) => !program.allDay) ?? live[0] ?? null

  let nextProgram: Program | null = null
  let best = Infinity
  for (const program of programs) {
    if (program === liveProgram || live.includes(program)) continue
    const wait = minutesUntilStart(program, nowMin)
    if (wait < best) {
      best = wait
      nextProgram = program
    }
  }

  return { liveId: liveProgram?.id ?? null, nextId: nextProgram?.id ?? null }
}

/** [lun, mar] → "Lunes a Martes" · [mie] → "Miércoles" · [lun, mie, vie] → "Lunes, Miércoles y Viernes" */
export function formatDays(days: Day[]): string {
  const indexes = [...new Set(days.map((day) => DAY_ORDER.indexOf(day)))].sort((a, b) => a - b)
  if (indexes.length === 7) return 'Todos los días'

  const runs: number[][] = []
  for (const index of indexes) {
    const last = runs[runs.length - 1]
    if (last && index === last[last.length - 1] + 1) last.push(index)
    else runs.push([index])
  }

  const parts = runs.map((run) =>
    run.length === 1
      ? DAY_NAMES[DAY_ORDER[run[0]]]
      : `${DAY_NAMES[DAY_ORDER[run[0]]]} a ${DAY_NAMES[DAY_ORDER[run[run.length - 1]]]}`,
  )

  if (parts.length <= 1) return parts[0] ?? ''
  return `${parts.slice(0, -1).join(', ')} y ${parts[parts.length - 1]}`
}

export function formatSchedule(program: Program): string {
  return program.allDay ? 'Todo el Día' : `${program.start} — ${program.end}`
}