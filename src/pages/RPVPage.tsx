import ContactSection from '../components/ContactSection'
import { Footer } from '../components/Footer';
import HeroPlay from '../components/HeroPlay'
import Navbar from '../components/Navbar'
import NewsSection from '../components/NewsSection'
import PlayerBar from '../components/PlayerBar'
import Program from '../components/Program'
import SponsorFooter from '../components/SponsorFooter'
import styles from '../styles/RPVPage.module.css'

export default function RPVPage() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <HeroPlay />
        <NewsSection />
        <Program />
        <ContactSection />
        <SponsorFooter />
        <Footer />
      </main>
      <PlayerBar />
    </>
  )
}
