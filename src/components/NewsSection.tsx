import { useCallback, useEffect, useRef, useState } from 'react'
import type { CSSProperties } from 'react'
import { news } from '../types/news'
import type { NewsItem } from '../types/news'
import styles from '../styles/NewsSection.module.css'

const FALLBACK_IMAGE = '/images/news-placeholder.svg'

// Si el item define `images`, se usan todas; si no, se usa la imagen única `image`.
function getImages(item: NewsItem): string[] {
  if (item.images && item.images.length > 0) return item.images
  return [item.image || FALLBACK_IMAGE]
}

export default function NewsSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [imageIndex, setImageIndex] = useState(0)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const triggerRefs = useRef<(HTMLButtonElement | null)[]>([])

  const items = news
  const current = openIndex !== null ? items[openIndex] : null
  const images = current ? getImages(current) : []
  const hasGallery = images.length > 1

  const openModal = (index: number) => {
    setImageIndex(0)
    setOpenIndex(index)
  }

  const closeModal = useCallback(() => {
    setOpenIndex((currentIndex) => {
      if (currentIndex !== null) {
        triggerRefs.current[currentIndex]?.focus()
      }
      return null
    })
  }, [])

  const goPrev = useCallback(() => {
    setImageIndex((i) => (i - 1 + images.length) % images.length)
  }, [images.length])

  const goNext = useCallback(() => {
    setImageIndex((i) => (i + 1) % images.length)
  }, [images.length])

  useEffect(() => {
    if (openIndex === null) return
    closeButtonRef.current?.focus()

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        closeModal()
      }
      if (!hasGallery) return
      if (event.key === 'ArrowRight') {
        event.preventDefault()
        goNext()
      }
      if (event.key === 'ArrowLeft') {
        event.preventDefault()
        goPrev()
      }
    }

    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [lightbox, closeLightbox])

  const current = lightbox !== null ? news[lightbox] : null

  return (
    <section className={styles.section} id="noticias">
      <div className={styles.inner}>
        <header className={styles.header}>
          <div>
            <span className={styles.eyebrow}>Actualidad de la emisora</span>
            <h2 className={styles.title}>Noticias y publicaciones</h2>
          </div>
          <p className={styles.subtitle}>
            Flyers, convocatorias y anuncios de la programación reciente.
          </p>
        </header>

        <div className={styles.newsContainer}>
          {news.map((item, index) => (
            <article className={styles.newsCard} key={item.id}>
                <button
                      type="button"
                      className={styles.cardButton}
                      onClick={() => setLightbox(index)}
                      ref={(element) => {
                        triggerRefs.current[index] = element
                      }}
                      aria-label={`Ampliar publicación: ${item.title}`}
                >
                      <span className={styles.imageWrap}>
                        <img
                          src={item.image || FALLBACK_IMAGE}
                          alt={item.title}
                          loading="lazy"
                        />
                        <span className={styles.zoom} aria-hidden="true">
                          <svg viewBox="0 0 24 24">
                            <circle cx="11" cy="11" r="6" />
                            <path d="M20 20l-4.5-4.5M11 8v6M8 11h6" />
                          </svg>
                        </span>
                      </span>

                      <span className={styles.cardBody}>
                        <span className={styles.cardTop}>
                          <span className={styles.cardTag}>{item.tag}</span>
                          <span className={styles.cardDate}>{item.date}</span>
                        </span>
                        <span className={styles.cardTitle}>{item.title}</span>
                        <span className={styles.cardExcerpt}>{item.excerpt}</span>
                      </span>
            </button>
            </article>
          ))}
        </div>
      </div>

      {current && (
        <div
          className={styles.overlay}
          role="dialog"
          aria-modal="true"
          aria-label={current.title}
          onClick={(event) => {
            if (event.target === event.currentTarget) closeLightbox()
          }}
        >
          <div className={styles.modal}>
            <button
              type="button"
              className={styles.close}
              onClick={closeLightbox}
              ref={closeButtonRef}
              aria-label="Cerrar"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6 6l12 12M18 6 6 18" />
              </svg>
            </button>

            <img
              className={styles.modalImage}
              src={current.image || FALLBACK_IMAGE}
              alt={current.title}
            />

            <div className={styles.modalFooter}>
              <div>
                <span className={styles.cardTag}>{current.tag}</span>
                <p className={styles.modalTitle}>{current.title}</p>
              </div>
              <div className={styles.modalNav}>
                <button
                  type="button"
                  className={styles.control}
                  onClick={() =>
                    setLightbox((index) =>
                      index === null ? index : (index - 1 + news.length) % news.length,
                    )
                  }
                  aria-label="Publicación anterior"
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M15 5 8 12l7 7" />
                  </svg>
                </button>
                <button
                  type="button"
                  className={styles.control}
                  onClick={() =>
                    setLightbox((index) => (index === null ? index : (index + 1) % news.length))
                  }
                  aria-label="Publicación siguiente"
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="m9 5 7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
