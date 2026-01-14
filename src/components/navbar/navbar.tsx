import Link from 'next/link';
import styles from "./navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link className={styles['navbar__logo']} href="/">
        A<span className={styles['navbar__logo-name-part']}>lina</span> S<span className={styles['navbar__logo-name-part']}>koropad</span>
        <span className={styles['navbar__logo-position']}>UI/UX Designer, UI Developer</span>
      </Link>
      <Link className={styles['navbar__link']} href="mailto:alina.skoropad@gmail.com">
        Contact
      </Link>
    </nav>
  );
};

export default Navbar;