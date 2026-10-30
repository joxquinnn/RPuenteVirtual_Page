import { useState } from 'react'
import { programs } from '../data/programs'
import styles from '../styles/Program.module.css'

export default function Program() {
  const liveProgram = programs.find((program) => program.live) ?? programs[0]
  const [expandedId, setExpandedId] = useState<string | null>(liveProgram.id)

  const toggleAccordion = (id: string) => {
    setExpandedId((current) => (current === id ? null : id))
  }

  return (
    <section className={styles.section} id="programacion">
      <div className={styles.inner}>
        <header className={styles.sectionHeader}>
          <span className={styles.eyebrow}>La agenda de la emisora</span>
          <h2 className={styles.title}>Programación</h2>
        </header>

        <div className={styles.accordion}>
          {programs.map((program) => {
            const expanded = expandedId === program.id
            const panelId = `panel-${program.id}`

            return (
              <article
                className={`${styles.item} ${styles[program.accent] ?? ''} ${
                  expanded ? styles.expanded : ''
                } ${program.live ? styles.live : ''}`}
                key={program.id}
              >
                <button
                  type="button"
                  className={styles.itemHeader}
                  onClick={() => toggleAccordion(program.id)}
                  aria-expanded={expanded}
                  aria-controls={panelId}
                >
                  <span className={styles.schedule}>
                    <span className={styles.scheduleTime}>{program.schedule}</span>
                    <span className={styles.scheduleDays}>{program.days}</span>
                  </span>

                  <span className={styles.headerText}>
                    <span className={styles.name}>{program.name}</span>
                    <span className={styles.host}>{program.host}</span>
                  </span>

                  {program.live && (
                    <span className={styles.liveBadge}>
                      <span className={styles.liveDot} aria-hidden="true" />
                      En vivo
                    </span>
                  )}

                  <span className={styles.chevron} aria-hidden="true">
                    <svg viewBox="0 0 24 24">
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </span>
                </button>

                <div
                  id={panelId}
                  className={`${styles.panel} ${expanded ? styles.panelOpen : ''}`}
                >
                  <div className={styles.panelInner}>
                    <p className={styles.description}>{program.description}</p>
                    <ul className={styles.metaList}>
                      <li className={styles.metaItem}>
                        <span className={styles.metaLabel}>Horario</span>
                        <span className={styles.metaValue}>{program.schedule}</span>
                      </li>
                      <li className={styles.metaItem}>
                        <span className={styles.metaLabel}>Días</span>
                        <span className={styles.metaValue}>{program.days}</span>
                      </li>
                      <li className={styles.metaItem}>
                        <span className={styles.metaLabel}>Conduce</span>
                        <span className={styles.metaValue}>{program.host}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
