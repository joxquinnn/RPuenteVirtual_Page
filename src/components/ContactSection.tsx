import { socialLinks, station } from '../types/station'
import styles from '../styles/ContactSection.module.css'

const icons: Record<string, string> = {
  instagram:
    'M12 2.2c3.2 0 3.6 0 4.85.07 1.17.05 1.8.25 2.23.42.56.22.96.48 1.38.9.42.42.68.82.9 1.38.17.42.37 1.06.42 2.23.06 1.25.07 1.65.07 4.85s-.01 3.6-.07 4.85c-.05 1.17-.25 1.8-.42 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.17-1.06.37-2.23.42-1.25.06-1.65.07-4.85.07s-3.6-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.42a3.8 3.8 0 0 1-1.38-.9 3.8 3.8 0 0 1-.9-1.38c-.17-.42-.37-1.06-.42-2.23C2.21 15.6 2.2 15.2 2.2 12s.01-3.6.07-4.85c.05-1.17.25-1.8.42-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.17 1.06-.37 2.23-.42C8.4 2.21 8.8 2.2 12 2.2Zm0 1.8c-3.13 0-3.5.01-4.73.07-.94.04-1.45.2-1.79.33-.45.18-.77.39-1.11.73-.34.34-.55.66-.73 1.11-.13.34-.29.85-.33 1.79C3.25 9.52 3.24 9.9 3.24 12s.01 2.48.07 3.71c.04.94.2 1.45.33 1.79.18.45.39.77.73 1.11.34.34.66.55 1.11.73.34.13.85.29 1.79.33 1.23.06 1.6.07 4.73.07s3.5-.01 4.73-.07c.94-.04 1.45-.2 1.79-.33.45-.18.77-.39 1.11-.73.34-.34.55-.66.73-1.11.13-.34.29-.85.33-1.79.06-1.23.07-1.6.07-3.71s-.01-2.48-.07-3.71c-.04-.94-.2-1.45-.33-1.79a2.98 2.98 0 0 0-.73-1.11 2.98 2.98 0 0 0-1.11-.73c-.34-.13-.85-.29-1.79-.33C15.5 4.01 15.13 4 12 4Zm0 3.06a4.94 4.94 0 1 1 0 9.88 4.94 4.94 0 0 1 0-9.88Zm0 1.8a3.14 3.14 0 1 0 0 6.28 3.14 3.14 0 0 0 0-6.28Zm5.14-3.2a1.15 1.15 0 1 1-2.31 0 1.15 1.15 0 0 1 2.31 0Z',
  facebook:
    'M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.52 1.5-3.91 3.77-3.91 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.78-1.63 1.57v1.89h2.78l-.45 2.91h-2.33V22c4.78-.76 8.44-4.92 8.44-9.94Z',
  youtube:
    'M21.6 7.2a2.5 2.5 0 0 0-1.76-1.77C18.25 5 12 5 12 5s-6.25 0-7.84.43A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.76 1.77C5.75 19 12 19 12 19s6.25 0 7.84-.43a2.5 2.5 0 0 0 1.76-1.77A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8ZM10 15.02V8.98L15.2 12 10 15.02Z',
  tiktok:
    'M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 1 1-1.84-2.48V9.77a5.68 5.68 0 1 0 4.93 5.66V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3a4.28 4.28 0 0 1-3.24-1.48Z',
  x: 'M17.53 3h3.06l-6.69 7.64L21.75 21h-6.16l-4.83-6.3L5.24 21H2.17l7.15-8.17L2.25 3h6.32l4.36 5.77L17.53 3Zm-1.08 16.17h1.7L7.62 4.74H5.8l10.65 14.43Z',
}

export default function ContactSection() {
  const email = station.email

  return (
    <section className={styles.section} id="contacto">
      <div className={styles.inner}>
        <div className={styles.split}>
          <div className={styles.left}>
            <span className={styles.eyebrow}>Contacto</span>
            <h2 className={styles.headline}>
              Conecta
              <br />
              con nosotros
            </h2>
            <p className={styles.kicker}>La cabina está abierta</p>
            <p className={styles.text}>
              ¿Quieres comunicarte con nosotros? ¡Envíanos un correo! Cuéntanos
              tus propuestas, ideas y proyectos: te leemos.
            </p>

            <a className={styles.emailButton} href={`mailto:${email}`}>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M3 6.5h18v11H3z" />
                <path d="m3.5 7 8.5 6 8.5-6" />
              </svg>
              Enviar correo a la emisora
            </a>
          </div>

          <div className={styles.right}>
            <article className={styles.card}>
              <h3 className={styles.cardTitle}>Redes sociales</h3>
              <p className={styles.cardHint}>Síguenos y escribe en directo</p>
              <ul className={styles.socials}>
                {socialLinks.map((link) => (
                  <li key={link.id}>
                    <a
                      className={styles.socialCard}
                      href={link.href || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path d={icons[link.icon]} />
                      </svg>
                      <span>{link.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </article>

            <article className={styles.card}>
              <h3 className={styles.cardTitle}>La emisora</h3>
              <p className={styles.cardHint}>Datos de Radio Puente Virtual</p>
              <ul className={styles.infoList}>
                <li className={styles.infoItem}>
                  <span className={styles.infoLabel}>Dirección</span>
                  <span className={styles.infoValue}>{station.address}</span>
                </li>
                <li className={styles.infoItem}>
                  <span className={styles.infoLabel}>Correo</span>
                  <span className={styles.infoValue}>
                    {email || 'radiopuentevirtual@gmail.com'}
                  </span>
                </li>
                <li className={styles.infoItem}>
                  <span className={styles.infoLabel}>Teléfono</span>
                  <span className={styles.infoValue}>{station.scheduleNote}</span>
                </li>
              </ul>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
