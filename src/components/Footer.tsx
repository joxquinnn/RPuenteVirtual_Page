import styles from '../styles/Footer.module.css';

export const Footer = () => {

    return (
        <footer className={styles.footer}>
            {/* 2. SECCIÓN DARK: Se muestra siempre */}
            <div className={styles.darkBar}>
                <div className={styles.container}>
                    <div className={styles.darkBarContent}>
                        <div className={styles.copyrightGroup}>
                            <p>© 2026 <span className={styles.whiteText}>JKDStudio</span></p>
                            <div className={styles.dotSeparator}></div>
                            <p className={styles.legalText}>Todos los derechos reservados</p>
                        </div>

                        <div className={styles.developerBox}>
                            <div className={styles.devLabel}>
                                <span className={styles.line}></span>
                                <span className={styles.text}>Diseñado & Desarrollado por</span>
                            </div>
                            <a href="https://jkdstudio.vercel.app" className={styles.devLink}>
                                JKDStudio <span className={styles.accent}></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};