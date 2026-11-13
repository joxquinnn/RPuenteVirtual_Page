export type Sponsor = {
  id: string
  name: string
  image: string
  /** Tamaño real de la imagen (evita saltos de layout mientras carga). */
  width: number
  height: number
}

// Las imágenes van en: public/images/sponsors/
// El orden es el del carrusel; se alternan colores para que no queden banners parecidos juntos.
export const sponsors: Sponsor[] = [
  { id: 'calafa-sports', name: 'Calafa Sports', image: '/images/sponsors/calafa-sports.webp', width: 1600, height: 235 },
  { id: 'carnes-don-hector', name: 'Carnes Don Héctor', image: '/images/sponsors/carnes-don-hector.webp', width: 1600, height: 167 },
  { id: 'servitec', name: 'Servitec', image: '/images/sponsors/servitec.webp', width: 1600, height: 250 },
  { id: 'panaderia-san-cristobal', name: 'Panadería San Cristóbal', image: '/images/sponsors/panaderia-san-cristobal.webp', width: 1600, height: 192 },
  { id: 'mirident', name: 'Clínica Dental Mirident', image: '/images/sponsors/mirident.webp', width: 1600, height: 202 },
  { id: 'la-ballica', name: 'La Ballica', image: '/images/sponsors/la-ballica.webp', width: 1600, height: 181 },
  { id: 'cute-woman-studio', name: 'Cute Woman Studio', image: '/images/sponsors/cute-woman-studio.webp', width: 1600, height: 240 },
  { id: 'el-gitano', name: 'El Gitano', image: '/images/sponsors/el-gitano.webp', width: 1600, height: 180 },
  { id: 'jkd-studio', name: 'JKD Studio', image: '/images/sponsors/jkd-studio.webp', width: 1600, height: 217 },
  { id: 'grupo-del-valle', name: 'Grupo del Valle', image: '/images/sponsors/grupo-del-valle.webp', width: 1600, height: 178 },
  { id: 'leo-sport', name: 'Leo Sport', image: '/images/sponsors/leo-sport.webp', width: 1536, height: 312 },
  { id: 'toledo-servicios-funerarios', name: 'Toledo Servicios Funerarios', image: '/images/sponsors/toledo-servicios-funerarios.webp', width: 1600, height: 216 },
  { id: 'cesar-sepulveda', name: 'César Sepúlveda, Alcalde', image: '/images/sponsors/cesar-sepulveda.webp', width: 1600, height: 302 },
  { id: 'pescaderia-del-sur', name: 'Pescadería del Sur', image: '/images/sponsors/pescaderia-del-sur.webp', width: 1600, height: 172 },
  { id: 'transura', name: 'Transura Limitada', image: '/images/sponsors/transura.webp', width: 1340, height: 249 },
]
