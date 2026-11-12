export type Host = {
  name: string
  image?: string
}

export type Program = {
  id: string
  name: string
  hosts: Host[]
  schedule: string
  days: string
  description: string
  live: boolean
  accent: 'red' | 'navy' | 'burgundy'
}

export const programs: Program[] = [
  {
    id: 'programa-01',
    name: 'El Grito Ranchero con Óscar',
    hosts: [{ name: 'Óscar Miranda', image: '/images/program-01.svg' }],
    schedule: '21:00 — 23:00',
    days: 'Lunes a Martes',
    description: 'El primer bloque de la jornada con noticias, música y compañía.',
    live: true,
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
    schedule: '20:30 — 22:00',
    days: 'Miércoles',
    description: 'Transmisión en vivo con la audiencia e invitados del día.',
    live: false,
    accent: 'navy',
  },
  {
    id: 'programa-03',
    name: 'El Grito Ranchero con Óscar',
    hosts: [{ name: 'Óscar Miranda', image: '/images/program-03.svg' }],
    schedule: '15:00 — 17:00',
    days: 'Lunes a Viernes',
    description: 'Segmentos, entrevistas y la playlist de la tarde.',
    live: false,
    accent: 'burgundy',
  },
  {
    id: 'programa-04',
    name: 'Deportes Araucanía',
    hosts: [{ name: 'Óscar Miranda', image: '/images/program-04.svg' }],
    schedule: 'Todo el Día',
    days: 'Sábado a Domingo',
    description: 'La franja nocturna con sesiones y conversación.',
    live: false,
    accent: 'red',
  },
]