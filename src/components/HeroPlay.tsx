import { station } from '../types/station'
import styles from '../styles/HeroPlay.module.css'

export default function HeroPlay() {
  return (
    <section className={styles.hero} id="inicio">
      <div className={styles.pattern} aria-hidden="true" />
      <div className={styles.patternAlt} aria-hidden="true" />

      <div className={styles.inner}>
        <div className={styles.topline}>
          <span className={styles.eyebrow}>Radio online</span>
          <span className={styles.eyebrowDivider} aria-hidden="true" />
          <span className={styles.eyebrow}>Emisión continua</span>
        </div>

        <h1 className={styles.title}>
          <span className={styles.radio}>Radio</span>
          <span className={styles.puente}>Puente</span>
          <span className={styles.virtual}>Virtual</span>
        </h1>

        <p className={styles.slogan}>{station.slogan}</p>
      </div>

      <div className={styles.scrollHint} aria-hidden="true">
        <span />
      </div>
    </section>
  )
}
