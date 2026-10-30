export type SocialLink = {
  id: string
  label: string
  href: string
  icon: 'instagram' | 'facebook' | 'youtube' | 'tiktok' | 'x'
}

export const station = {
  name: 'Radio Puente Virtual',
  slogan: 'El medio que nos une',
  email: '',
  address: 'Dirección por confirmar',
  scheduleNote: 'Emisión continua con programación en vivo.',
}

export const socialLinks: SocialLink[] = [
  {
    id: 'instagram',
    label: 'Instagram',
    href: '',
    icon: 'instagram',
  },
  {
    id: 'facebook',
    label: 'Facebook',
    href: '',
    icon: 'facebook',
  },
  {
    id: 'youtube',
    label: 'YouTube',
    href: '',
    icon: 'youtube',
  },
  {
    id: 'tiktok',
    label: 'TikTok',
    href: '',
    icon: 'tiktok',
  },
  {
    id: 'x',
    label: 'X',
    href: '',
    icon: 'x',
  },
]

export const navLinks = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'noticias', label: 'Noticias' },
  { id: 'programacion', label: 'Programación' },
  { id: 'contacto', label: 'Contacto' },
  { id: 'patrocinadores', label: 'Patrocinadores' },
]
