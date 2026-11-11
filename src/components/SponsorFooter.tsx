import { sponsors } from '../types/sponsors'
import styles from '../styles/SponsorFooter.module.css'

export default function SponsorFooter() {
  return (
    <section className={styles.section} id="patrocinadores">
      <div className={styles.inner}>
        <span className={styles.eyebrow}>Patrocinadores</span>
        <h2 className={styles.title}>Gracias a quienes nos acompañan</h2>
      </div>

      <div className={styles.viewport}>
        <div className={styles.track}>
          {[...sponsors, ...sponsors].map((sponsor, index) => (
            <img
              key={`${sponsor.id}-${index}`}
              className={styles.logo}
              src={sponsor.image}
              alt={index < sponsors.length ? sponsor.name : ''}
              loading="lazy"
              aria-hidden={index >= sponsors.length}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
