import { useEffect, useRef, useState } from 'react'
import { STREAM_URL } from '../types/stream'
import { station } from '../types/station'
import styles from '../styles/PlayerBar.module.css'

const BAR_COUNT = 48

function Visualizer({ active }: { active: boolean }) {
  const [heights, setHeights] = useState<number[]>(() =>
    Array.from({ length: BAR_COUNT }, (_, index) => 10 + ((index * 31) % 38)),
  )

  useEffect(() => {
    if (!active) return
    let frame = 0
    const timer = window.setInterval(() => {
      frame += 1
      setHeights((current) =>
        current.map((_, index) => {
          const wave = Math.sin((frame + index * 3) / 6) * 0.5 + 0.5
          const jitter = Math.sin((frame * 1.7 + index * 11) / 9) * 0.5 + 0.5
          return 12 + (wave * 0.6 + jitter * 0.4) * 80
        }),
      )
    }, 110)
    return () => window.clearInterval(timer)
  }, [active])

  return (
    <div className={styles.visualizer} aria-hidden="true">
      {heights.map((height, index) => (
        <span
          key={index}
          className={styles.bar}
          style={{ height: `${height}%`, animationDelay: `${(index % 14) * 0.07}s` }}
        />
      ))}
    </div>
  )
}

export default function PlayerBar() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [playing, setPlaying] = useState(false)
  const [notice, setNotice] = useState(false)
  const ready = Boolean(STREAM_URL)

  const toggle = async () => {
    if (!ready) {
      setNotice(true)
      return
    }
    const audio = audioRef.current
    if (!audio) return
    if (playing) {
      audio.pause()
      setPlaying(false)
    } else {
      try {
        await audio.play()
        setPlaying(true)
      } catch {
        setPlaying(false)
      }
    }
  }

  return (
    <div className={styles.playerBar} role="region" aria-label="Reproductor de Radio Puente Virtual">
      <div className={styles.inner}>
        <div className={styles.identity}>
          <span className={styles.mark} aria-hidden="true">
            <svg viewBox="0 0 40 40">
              <circle cx="20" cy="20" r="17" fill="none" stroke="currentColor" strokeWidth="1.6" opacity="0.45" />
              <circle cx="20" cy="20" r="11" fill="none" stroke="currentColor" strokeWidth="1.6" opacity="0.75" />
              <circle cx="20" cy="20" r="5" fill="currentColor" />
            </svg>
          </span>
          <span className={styles.identityText}>
            <span className={styles.stationName}>{station.name}</span>
            <span className={styles.liveBadge}>
              <span className={styles.liveDot} data-active={playing} aria-hidden="true" />
              {playing ? 'Transmitiendo en vivo' : 'En vivo 24/7'}
            </span>
          </span>
        </div>

        <Visualizer active={playing} />

        <div className={styles.controls}>
          <button
            type="button"
            className={styles.playButton}
            onClick={toggle}
            aria-pressed={playing}
            aria-label={playing ? 'Pausar la transmisión' : 'Reproducir la transmisión'}
          >
            {playing ? (
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect x="6" y="5" width="4" height="14" rx="1.4" />
                <rect x="14" y="5" width="4" height="14" rx="1.4" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8 5.2v13.6a1 1 0 0 0 1.53.85l10.2-6.8a1 1 0 0 0 0-1.7L9.53 4.35A1 1 0 0 0 8 5.2Z" />
              </svg>
            )}
          </button>

          <span className={styles.volume} aria-hidden="true">
            <svg viewBox="0 0 24 24">
              <path d="M4 9v6h4l5 4V5L8 9H4Z" />
            </svg>
            <span className={styles.volumeTrack}>
              <span className={styles.volumeFill} />
            </span>
          </span>
        </div>
      </div>

      {notice && !ready && (
        <p className={styles.notice} role="status">
          El reproductor está listo: la señal de streaming se habilitará en cuanto
          se configure la URL de emisión.
        </p>
      )}

      {ready && <audio ref={audioRef} src={STREAM_URL} preload="none" />}
    </div>
  )
}
