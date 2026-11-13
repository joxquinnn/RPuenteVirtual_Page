export type Host = {
  name: string
  image?: string
}

export type Day = 'lun' | 'mar' | 'mie' | 'jue' | 'vie' | 'sab' | 'dom'

export const DAY_ORDER: Day[] = ['lun', 'mar', 'mie', 'jue', 'vie', 'sab', 'dom']

export const STATION_TIMEZONE = 'America/Santiago'

export type Program = {
  id: string
  name: string
  hosts: Host[]
  days: Day[]
  start?: string
  end?: string
  allDay?: boolean
  description: string
  accent: 'red' | 'navy' | 'burgundy'
}

export const programs: Program[] = [
  {
    id: 'programa-01',
    name: 'El Grito Ranchero con Óscar',
    hosts: [{ name: 'Óscar Miranda', image: '/images/program-01.svg' }],
    days: ['lun', 'mar'],
    start: '21:00',
    end: '23:00',
    description: 'El primer bloque de la jornada con noticias, música y compañía.',
    accent: 'red',
  },
  {
    id: 'programa-02',
    name: 'Deportes Araucanía',
    hosts: [
      { name: 'Óscar Andrés Miranda', image: '/images/program-02.svg' },
      { name: 'Óscar Vergara', image: '/images/program-02.svg' },
      { name: 'Marianne Silva', image: '/images/program-02.svg' },
    ],
    days: ['mie'],
    start: '20:30',
    end: '22:00',
    description: 'Transmisión en vivo con la audiencia e invitados del día.',
    accent: 'navy',
  },
  {
    id: 'programa-03',
    name: 'El Grito Ranchero con Óscar',
    hosts: [{ name: 'Óscar Miranda', image: '/images/program-03.svg' }],
    days: ['lun', 'mar', 'mie', 'jue', 'vie'],
    start: '15:00',
    end: '17:00',
    description: 'Segmentos, entrevistas y la playlist de la tarde.',
    accent: 'burgundy',
  },
  {
    id: 'programa-04',
    name: 'Deportes Araucanía',
    hosts: [{ name: 'Óscar Miranda', image: '/images/program-04.svg' }],
    days: ['sab', 'dom'],
    allDay: true,
    description: 'La franja nocturna con sesiones y conversación.',
    accent: 'red',
  },
]