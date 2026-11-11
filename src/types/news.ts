export type NewsItem = {
  id: string
  title: string
  excerpt: string
  image: string
  images?: string[]
  date: string
  tag: string
}

export const news: NewsItem[] = [
  {
    id: 'noticia-01',
    title: ' ¡NUEVA IMPERIAL PRESENTE EN EL SUDAMERICANO DE CANOTAJE 2026!',
    excerpt: `🥊🔥 ¡CINCO IMPERIALINOS SE PREPARAN PARA DAR LA PELEA EN IMPERIUM!

Con orgullo, cinco representantes del Team Farías llevarán el nombre de Nueva Imperial hasta Renca, donde serán parte del Campeonato Metropolitano de Boxeo Imperium.
Se trata de Juan Salazar, Silvana Burgos, Agustín Rifo y los hermanos; Esteban Ramirez y Gabriel Ramirez. Son cuatro boxeadores y una representante femenina que se encuentran entrenando intensamente, preparándose para enfrentar este desafío. Nos cuentan que se sienten bien, están con muchas ganas y esperan protagonizar grandes combates sobre el ring. 💪
El Campeonato Metropolitano de Boxeo Imperium reunirá a exponentes del boxeo en el Nuevo Gimnasio Municipal de Renca Poniente, en una jornada que promete intensos combates. La competencia busca destacar el talento de los deportistas y el trabajo de clubes y escuelas, convirtiéndose en una importante instancia para el desarrollo y la proyección del boxeo.
Además, agradecieron el apoyo del municipio de Nueva Imperial por facilitar la movilización para poder participar en esta importante competencia.

¡Mucho éxito a nuestros cinco deportistas! Que sea una gran experiencia y que dejen bien representada a nuestra comuna. 🥊

📲 Puente Virtual | Somos el medio que nos une. `,
    image: '/images/PUBLI-1/Publicidad-1A.png',
    images: [
      '/images/PUBLI-1/Publicidad-1A.png',
      '/images/PUBLI-1/Publicidad-1B.png',
      '/images/PUBLI-1/Publicidad-1C.png',
      '/images/PUBLI-1/Publicidad-1D.png',
      '/images/PUBLI-1/Publicidad-1E.png',
      '/images/PUBLI-1/Publicidad-1F.png',
    ],
    date: '2026-05-11',
    tag: 'Destacado',
  },
  {
    id: 'noticia-02',
    title: '¡GRAN FINAL REGIONAL JUVENIL!',
    excerpt: `⚽ ¡GRAN FINAL REGIONAL JUVENIL!
¡La gloria regional se juega en casa! 🔥
La escuadra de Nueva Imperial se enfrenta a Victoria en la gran final del Campeonato Regional de La Araucanía, donde el resultado parcial es 0-1 en favor de la visita
Es momento de llenar el estadio y apoyar el sueño añde estos jóvenes.
📲 Sigue a Puente Virtual en nuestras redes sociales y acompáñanos en la cobertura de esta gran final.`,
    image: '/images/PUBLI-2/Publicidad-2A.jpg',
    date: '2026-10-20',
    tag: 'Deportes',
  },
  {
    id: 'noticia-03',
    title: 'PROGRAMACION FINALES FIN DE SEMANA',
    excerpt: `📺⚽ ¡FIN DE SEMANA DE FINALES JUNTO A PUENTE VIRTUAL! 🔥🏆

🏆 SÁBADO | SUPER LIGA REGIONAL FEMENINA
Viviremos una jornada decisiva con el partido por el tercer lugar y la gran final, donde conoceremos a las nuevas campeonas. ⚽👑

🔥 DOMINGO | FINAL REGIONAL JUVENIL
Viajaremos hasta la ciudad de Victoria para acompañar a la Selección Juvenil de Nueva Imperial, que disputará el partido de ida de la gran final regional.

📺 ¡SINTONÍZANOS EN YOUTUBE!
Conéctate desde tu celular, computador o Smart TV y disfruta de toda la emoción del fútbol regional con la calidad de las transmisiones de Puente Virtual.

❤️ ¡TÚ TAMBIÉN ERES PARTE DE ESTO!
Nos apoyas muchísimo siguiendo nuestras redes sociales, compartiendo las transmisiones e invitando a más personas a sumarse a esta comunidad.

🎙️ PUENTE VIRTUAL, EL MEDIO QUE NOS UNE.`,
    image: '/images/PUBLI-3/Publicidad-3A.jpg',
    date: '2026-10-23',
    tag: 'Programación',
  },
]