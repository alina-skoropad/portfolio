import Link from "next/link";
import styles from "./footer.module.scss";

const Footer = () => {
  const currentYear = new Date().getFullYear(); 

  return (
    <footer className={styles.footer}>
      <nav className={styles['footer__social']}>
        <Link className={styles['footer__social-link']} href="https://www.linkedin.com/in/alina-skoropad-06788737b/" target="_blank" rel="noopener noreferrer">
          Linkedin
        </Link>
        <span className={styles['footer__social-separator']}>/</span>
        <Link className={styles['footer__social-link']} href="https://dribbble.com/vovne" target="_blank" rel="noopener noreferrer">
          Dribbble
        </Link>
      </nav>

      <div className={styles['footer__copyright']}>Alina Skoropad © {currentYear}</div>
    </footer>
  );
};

export default Footer;