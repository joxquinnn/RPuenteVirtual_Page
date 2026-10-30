import { useEffect, useState } from 'react'
import logoNavbar from '../constants/logo_Navbar.png'
import { navLinks, station } from '../data/station'
import styles from '../styles/Navbar.module.css'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('inicio')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter((el): el is HTMLElement => Boolean(el))

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActive(visible.target.id)
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: [0, 0.25, 0.5, 1] },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const goTo = (id: string) => {
    setOpen(false)
    const target = document.getElementById(id)
    if (!target) return
    target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <a
          className={styles.brand}
          href="#inicio"
          onClick={(event) => {
            event.preventDefault()
            goTo('inicio')
          }}
        >
          <img
            className={styles.brandLogo}
            src={logoNavbar}
            alt={station.name}
            width={548}
            height={456}
          />
        </a>

        <nav className={styles.links} aria-label="Navegación principal">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`${styles.link} ${active === link.id ? styles.linkActive : ''}`}
              onClick={(event) => {
                event.preventDefault()
                goTo(link.id)
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className={`${styles.toggle} ${open ? styles.toggleOpen : ''}`}
          aria-expanded={open}
          aria-controls="menu-movil"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div
        id="menu-movil"
        className={`${styles.mobileMenu} ${open ? styles.mobileMenuOpen : ''}`}
        hidden={!open}
      >
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className={`${styles.mobileLink} ${active === link.id ? styles.mobileLinkActive : ''}`}
            onClick={(event) => {
              event.preventDefault()
              goTo(link.id)
            }}
          >
            {link.label}
          </a>
        ))}
      </div>
    </header>
  )
}
