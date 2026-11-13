import { useEffect, useState } from 'react'
import { programs, type Host } from '../types/programs'
import { formatDays, formatSchedule, getProgramStatus } from '../types/programSchedule'
import styles from '../styles/Program.module.css'

/** Hora actual, refrescada cada 30 s para que el "En vivo" cambie solo cuando empieza/termina un programa. */
function useNow(intervalMs = 30_000) {
  const [now, setNow] = useState(() => new Date())

  useEffect(() => {
    const timer = window.setInterval(() => setNow(new Date()), intervalMs)
    return () => window.clearInterval(timer)
  }, [intervalMs])

  return now
}

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
  const now = useNow()
  const { liveId, nextId } = getProgramStatus(programs, now)

  // Se despliega el que está al aire; si no hay ninguno, el próximo en comenzar.
  const autoExpandId = liveId ?? nextId

  // Elección manual del oyente, atada al programa en vivo con el que se hizo.
  // Cuando el programa en vivo cambia, `forId` deja de coincidir y se vuelve al automático
  // (se calcula al renderizar, sin useEffect ni setState extra).
  const [manual, setManual] = useState<{ forId: string | null; id: string | null } | null>(null)
  const expandedId = manual && manual.forId === autoExpandId ? manual.id : autoExpandId

  const toggleAccordion = (id: string) => {
    setManual({ forId: autoExpandId, id: expandedId === id ? null : id })
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
            const isLive = program.id === liveId
            const panelId = `panel-${program.id}`
            const hostNames = joinNames(program.hosts.map((host) => host.name))
            const hostsLabel = program.hosts.length > 1 ? 'Conducen' : 'Conduce'

            return (
              <li
                className={`${styles.item} ${styles[program.accent] ?? ''} ${
                  expanded ? styles.expanded : ''
                } ${isLive ? styles.live : ''}`}
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

                      <span className={styles.schedulePill}>{formatSchedule(program)}</span>

                      {isLive && (
                        <span className={styles.liveBadge}>
                          <span className={styles.liveDot} aria-hidden="true" />
                          En vivo
                        </span>
                      )}
                    </span>

                    <span className={styles.subline}>
                      <span className={styles.host}>{hostNames}</span>
                      <span className={styles.sublineDivider} aria-hidden="true" />
                      <span className={styles.days}>{formatDays(program.days)}</span>
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
                            <dd className={styles.metaValue}>{formatDays(program.days)}</dd>
                          </div>
                          <div className={styles.metaItem}>
                            <dt className={styles.metaLabel}>Horario</dt>
                            <dd className={styles.metaValue}>{formatSchedule(program)}</dd>
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