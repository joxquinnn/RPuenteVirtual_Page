import type { CSSProperties } from 'react'
import { sponsors } from '../types/sponsors'
import styles from '../styles/SponsorFooter.module.css'

// Segundos por banner: mantiene una velocidad constante aunque agregues o quites patrocinadores.
const SECONDS_PER_SPONSOR = 7

export default function SponsorFooter() {
  const trackStyle = {
    '--marquee-duration': `${sponsors.length * SECONDS_PER_SPONSOR}s`,
  } as CSSProperties

  return (
    <section className={styles.section} id="patrocinadores">
      <div className={styles.inner}>
        <span className={styles.eyebrow}>Patrocinadores</span>
        <h2 className={styles.title}>Gracias a quienes nos acompañan</h2>
      </div>

      <div className={styles.viewport}>
        <div className={styles.track} style={trackStyle}>
          {[...sponsors, ...sponsors].map((sponsor, index) => (
            <img
              key={`${sponsor.id}-${index}`}
              className={styles.logo}
              src={sponsor.image}
              width={sponsor.width}
              height={sponsor.height}
              alt={index < sponsors.length ? sponsor.name : ''}
              decoding="async"
              draggable={false}
              aria-hidden={index >= sponsors.length}
            />
          ))}
        </div>
      </div>
    </section>
  )
}