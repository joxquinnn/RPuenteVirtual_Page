export type Program = {
  id: string
  name: string
  host: string
  schedule: string
  days: string
  description: string
  image: string
  live: boolean
  accent: 'red' | 'navy' | 'burgundy'
}

export const programs: Program[] = [
  {
    id: 'programa-01',
    name: 'El Grito Ranchero con Óscar',
    host: 'Óscar Miranda',
    schedule: '21:00 — 23:00',
    days: 'Lunes a Martes',
    description: 'El primer bloque de la jornada con noticias, música y compañía.',
    image: '/images/program-01.svg',
    live: true,
    accent: 'red',
  },
  {
    id: 'programa-02',
    name: 'Deportes Araucanía',
    host: 'Óscar Miranda',
    schedule: '20:30 — 22:00',
    days: 'Miércoles',
    description: 'Transmisión en vivo con la audiencia e invitados del día.',
    image: '/images/program-02.svg',
    live: false,
    accent: 'navy',
  },
  {
    id: 'programa-03',
    name: 'El Grito Ranchero con Óscar',
    host: 'Óscar Miranda',
    schedule: '15:00 — 17:00',
    days: 'Lunes a Viernes',
    description: 'Segmentos, entrevistas y la playlist de la tarde.',
    image: '/images/program-03.svg',
    live: false,
    accent: 'burgundy',
  },
  {
    id: 'programa-04',
    name: 'Deportes Araucanía',
    host: 'Óscar Miranda',
    schedule: 'Todo el Día',
    days: 'Sadado a Domingo',
    description: 'La franja nocturna con sesiones y conversación.',
    image: '/images/program-04.svg',
    live: false,
    accent: 'red',
  },
]
