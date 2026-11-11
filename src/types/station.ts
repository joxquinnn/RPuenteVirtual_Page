export type SocialLink = {
  id: string
  label: string
  href: string
  icon: 'instagram' | 'facebook' | 'youtube' | 'tiktok' | 'x'
}

export const station = {
  name: 'Radio Puente Virtual',
  slogan: 'El medio que nos une',
  email: 'radiopuentevirtual@gmail.com',
  address: 'Dirección por confirmar',
  scheduleNote: '+569 7863 6686',
}

export const socialLinks: SocialLink[] = [
  {
    id: 'instagram',
    label: 'Instagram',
    href: 'https://www.instagram.com/puentevirtualdeportes/',
    icon: 'instagram',
  },
  {
    id: 'facebook',
    label: 'Facebook',
    href: 'https://www.facebook.com/p/Radio-Puente-Virtual-61552443606762/?locale=es_LA',
    icon: 'facebook',
  },
  {
    id: 'youtube',
    label: 'YouTube',
    href: 'https://www.youtube.com/@RadioPuenteVirtual-g9x',
    icon: 'youtube',
  },
  {
    id: 'tiktok',
    label: 'TikTok',
    href: 'https://www.tiktok.com/@radiopuentevirtual',
    icon: 'tiktok',
  },
]

export const navLinks = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'noticias', label: 'Noticias' },
  { id: 'programacion', label: 'Programación' },
  { id: 'contacto', label: 'Contacto' },
  { id: 'patrocinadores', label: 'Patrocinadores' },
]
