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
  }, [openIndex, hasGallery, closeModal, goNext, goPrev])

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
          {items.map((item, index) => {
            const itemImages = getImages(item)
            const cover = itemImages[0]
            return (
              <article className={styles.newsCard} key={item.id}>
                <button
                  type="button"
                  className={styles.cardButton}
                  onClick={() => openModal(index)}
                  ref={(element) => {
                    triggerRefs.current[index] = element
                  }}
                  aria-label={`Ver detalle de la publicación: ${item.title}`}
                >
                  <span
                    className={styles.imageWrap}
                    style={{ '--bg-image': `url("${cover}")` } as CSSProperties}
                  >
                    <img src={cover} alt={item.title} loading="lazy" />

                    {itemImages.length > 1 && (
                      <span
                        className={styles.galleryBadge}
                        aria-label={`${itemImages.length} imágenes`}
                      >
                        <svg viewBox="0 0 24 24" aria-hidden="true">
                          <rect x="3" y="5" width="18" height="14" rx="2" />
                          <circle cx="8.5" cy="10" r="1.5" />
                          <path d="m21 16-5-5-8 8" />
                        </svg>
                        1/{itemImages.length}
                      </span>
                    )}

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
                    <span className={styles.cardTitle}>{item.title.trim()}</span>
                    <span className={styles.cardExcerpt}>{item.excerpt}</span>
                    <span className={styles.cardCta}>
                      Leer más
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M5 12h14M13 6l6 6-6 6" />
                      </svg>
                    </span>
                  </span>
                </button>
              </article>
            )
          })}
        </div>
      </div>

      {current && (
        <div
          className={styles.overlay}
          role="dialog"
          aria-modal="true"
          aria-label={current.title.trim()}
          onClick={(event) => {
            if (event.target === event.currentTarget) closeModal()
          }}
        >
          <div className={styles.modal}>
            <button
              type="button"
              className={styles.close}
              onClick={closeModal}
              ref={closeButtonRef}
              aria-label="Cerrar"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6 6l12 12M18 6 6 18" />
              </svg>
            </button>

            {/* Columna izquierda: visual / carrusel */}
            <div
              className={styles.modalVisual}
              style={{ '--bg-image': `url("${images[imageIndex]}")` } as CSSProperties}
            >
              <img
                className={styles.modalImage}
                src={images[imageIndex]}
                alt={`${current.title.trim()}${hasGallery ? ` (${imageIndex + 1} de ${images.length})` : ''}`}
              />

              {hasGallery && (
                <>
                  <button
                    type="button"
                    className={`${styles.control} ${styles.controlPrev}`}
                    onClick={goPrev}
                    aria-label="Imagen anterior"
                  >
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M15 5 8 12l7 7" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    className={`${styles.control} ${styles.controlNext}`}
                    onClick={goNext}
                    aria-label="Imagen siguiente"
                  >
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="m9 5 7 7-7 7" />
                    </svg>
                  </button>
                  <span className={styles.counter} aria-live="polite">
                    {imageIndex + 1} / {images.length}
                  </span>
                </>
              )}
            </div>

            {/* Columna derecha: información con scroll propio */}
            <div className={styles.modalInfo}>
              <div className={styles.cardTop}>
                <span className={styles.cardTag}>{current.tag}</span>
                <span className={styles.cardDate}>{current.date}</span>
              </div>
              <h3 className={styles.modalTitle}>{current.title.trim()}</h3>
              <p className={styles.modalDescription}>{current.excerpt}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}