export type Program = {
  id: string
  name: string
  host: string
  schedule: string
  days: string
  description: string
  live: boolean
  accent: 'red' | 'navy' | 'burgundy'
}

export const programs: Program[] = [
  {
    id: 'programa-01',
    name: 'Espacio matutino',
    host: 'Nombre del conductor',
    schedule: '08:00 — 10:00',
    days: 'Lunes a Viernes',
    description: 'El primer bloque de la jornada con noticias, música y compañía.',
    live: true,
    accent: 'red',
  },
  {
    id: 'programa-02',
    name: 'Mediodía en vivo',
    host: 'Nombre del conductor',
    schedule: '12:00 — 14:00',
    days: 'Lunes a Viernes',
    description: 'Transmisión en vivo con la audiencia e invitados del día.',
    live: false,
    accent: 'navy',
  },
  {
    id: 'programa-03',
    name: 'La tarde estéreo',
    host: 'Nombre del conductor',
    schedule: '15:00 — 17:00',
    days: 'Lunes a Viernes',
    description: 'Segmentos, entrevistas y la playlist de la tarde.',
    live: false,
    accent: 'burgundy',
  },
  {
    id: 'programa-04',
    name: 'Noche RPV',
    host: 'Nombre del conductor',
    schedule: '20:00 — 22:00',
    days: 'Martes a Viernes',
    description: 'La franja nocturna con sesiones y conversación.',
    live: false,
    accent: 'red',
  },
  {
    id: 'programa-05',
    name: 'Fin de semana',
    host: 'Nombre del conductor',
    schedule: '10:00 — 13:00',
    days: 'Sábado y Domingo',
    description: 'Encuentro de la comunidad para cerrar la semana.',
    live: false,
    accent: 'navy',
  },
]
