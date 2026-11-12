import { useState } from 'react'
import { programs, type Host } from '../types/programs'
import styles from '../styles/Program.module.css'

/** "A", "A y B", "A, B y C" */
function joinNames(names: string[]) {
  if (names.length <= 1) return names[0] ?? ''
  return `${names.slice(0, -1).join(', ')} y ${names[names.length - 1]}`
}

function initials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join('')
    .toUpperCase()
}

function HostAvatar({ host }: { host: Host }) {
  const [failed, setFailed] = useState(false)

  if (!host.image || failed) {
    return (
      <span className={`${styles.avatar} ${styles.avatarFallback}`} aria-hidden="true">
        {initials(host.name)}
      </span>
    )
  }

  return (
    <img
      className={styles.avatar}
      src={host.image}
      alt=""
      loading="lazy"
      onError={() => setFailed(true)}
    />
  )
}

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
            const hostNames = joinNames(program.hosts.map((host) => host.name))
            const hostsLabel = program.hosts.length > 1 ? 'Conducen' : 'Conduce'

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
                      <span className={styles.host}>{hostNames}</span>
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
                      <div className={styles.panelContent}>
                        <p className={styles.description}>{program.description}</p>

                        <div className={styles.hostsBlock}>
                          <span className={styles.metaLabel}>{hostsLabel}</span>
                          <ul className={styles.hostList}>
                            {program.hosts.map((host) => (
                              <li className={styles.hostCard} key={host.name}>
                                <HostAvatar host={host} />
                                <span className={styles.hostName}>{host.name}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <dl className={styles.metaList}>
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