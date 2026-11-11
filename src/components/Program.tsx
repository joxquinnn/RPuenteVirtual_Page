import { useState } from 'react'
import { programs } from '../types/programs'
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

        <ol className={styles.timeline}>
          {programs.map((program) => {
            const expanded = expandedId === program.id
            const panelId = `panel-${program.id}`

            return (
              <li
                className={`${styles.item} ${styles[program.accent] ?? ''} ${
                  expanded ? styles.expanded : ''
                } ${program.live ? styles.live : ''}`}
                key={program.id}
              >
                <span className={styles.node} aria-hidden="true">
                  <span className={styles.nodeCore} />
                </span>

                <button
                  type="button"
                  className={styles.itemHeader}
                  onClick={() => toggleAccordion(program.id)}
                  aria-expanded={expanded}
                  aria-controls={panelId}
                >
                  <span className={styles.headerMain}>
                    <span className={styles.titleRow}>
                      <span className={styles.name}>{program.name}</span>

                      <span className={styles.schedulePill}>{program.schedule}</span>

                      {program.live && (
                        <span className={styles.liveBadge}>
                          <span className={styles.liveDot} aria-hidden="true" />
                          En vivo
                        </span>
                      )}
                    </span>

                    <span className={styles.subline}>
                      <span className={styles.host}>{program.host}</span>
                      <span className={styles.sublineDivider} aria-hidden="true" />
                      <span className={styles.days}>{program.days}</span>
                    </span>
                  </span>

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
                    <div className={styles.panelBody}>
                      <img
                        className={styles.avatar}
                        src={program.image}
                        alt={`Retrato de ${program.name}`}
                        loading="lazy"
                      />

                      <div className={styles.panelContent}>
                      <p className={styles.description}>{program.description}</p>

                      <dl className={styles.metaList}>
                        <div className={styles.metaItem}>
                          <dt className={styles.metaLabel}>Conduce</dt>
                          <dd className={styles.metaValue}>{program.host}</dd>
                        </div>
                        <div className={styles.metaItem}>
                          <dt className={styles.metaLabel}>Días</dt>
                          <dd className={styles.metaValue}>{program.days}</dd>
                        </div>
                        <div className={styles.metaItem}>
                          <dt className={styles.metaLabel}>Horario</dt>
                          <dd className={styles.metaValue}>{program.schedule}</dd>
                        </div>
                      </dl>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
