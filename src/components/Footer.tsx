import styles from '../styles/Footer.module.css';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      {/* 2. SECCIÓN DARK: Se muestra siempre */}
      <div className={styles.darkBar}>
        <div className={styles.container}>
          <div className={styles.darkBarContent}>
            <div className={styles.copyrightGroup}>
              <p>
                © 2025 <span className={styles.whiteText}>JKDStudio</span>
              </p>
              <div className={styles.dotSeparator}></div>
              <p className={styles.legalText}>Todos los derechos reservados</p>
            </div>

            <div className={styles.developerBox}>
              <div className={styles.devLabel}>
                <span className={styles.line}></span>
                <span className={styles.text}>Diseñado &amp; Desarrollado por</span>
              </div>
              <a
                href="https://jkdstudio.cl"
                className={styles.devLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                JKDStudio <span className={styles.accent}></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
