export type NewsItem = {
  id: string
  title: string
  excerpt: string
  image: string
  date: string
  tag: string
}

export const news: NewsItem[] = [
  {
    id: 'noticia-01',
    title: 'Publicación destacada de la semana',
    excerpt: 'Una selección de las noticias y comunicados más importantes de la semana en Radio Puente Virtual.',
    image: '/images/news-placeholder.svg',
    date: '2025-03-10',
    tag: 'Destacado',
  },
  {
    id: 'noticia-02',
    title: 'Nueva programación en Radio Puente Virtual',
    excerpt: 'Anunciamos los nuevos espacios, horarios y programas que forman parte de la próxima temporada.',
    image: '/images/news-placeholder.svg',
    date: '2025-03-06',
    tag: 'Programación',
  },
  {
    id: 'noticia-03',
    title: 'Flyer de la próxima emisión en vivo',
    excerpt: 'Todo listo para la próxima transmisión en vivo, con la comunidad y los invitados de siempre.',
    image: '/images/news-placeholder.svg',
    date: '2025-02-28',
    tag: 'En vivo',
  },
  {
    id: 'noticia-04',
    title: 'Agenda cultural e invitaciones',
    excerpt: 'Resumen de las actividades, encuentros y eventos que agenda la emisora para este mes.',
    image: '/images/news-placeholder.svg',
    date: '2025-02-20',
    tag: 'Agenda',
  },
  {
    id: 'noticia-05',
    title: 'Calendario de contenidos del mes',
    excerpt: 'Publicamos el calendario con los contenidos y segmentos que nos acompañan cada mes.',
    image: '/images/news-placeholder.svg',
    date: '2025-02-14',
    tag: 'Calendario',
  },
  {
    id: 'noticia-06',
    title: 'Aniversario de la emisora',
    excerpt: 'Celebramos un año más de Radio Puente Virtual junto a quienes nos escuchan.',
    image: '/images/news-placeholder.svg',
    date: '2025-02-02',
    tag: 'Aniversario',
  },
]
