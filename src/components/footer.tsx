import Link from "next/link";

import styles from "./footer.module.scss";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <nav className={styles.footer__social}>
        <Link className={styles.footer__social_link} href="https://www.linkedin.com/in/alina-skoropad-06788737b/" target="_blank" rel="noopener noreferrer">
          Linkedin
        </Link>
        <span>/</span>
        <Link className={styles.footer__social_link} href="https://www.instagram.com/alina_skoropad/" target="_blank" rel="noopener noreferrer">
          Instagram
        </Link>
      </nav>

      <div>
        Alina Skoropad © {currentYear}
      </div>
    </footer>
  );
};

export default Footer;
