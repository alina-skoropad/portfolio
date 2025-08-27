import Link from 'next/link';

import styles from "./navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <Link className={styles.nav__logo} href="/">
        A<span>lina</span> S<span>koropad</span>
        <span className={styles['nav__logo--position']}>Web Designer, HTML/CSS Developer</span>
      </Link>
      <Link className={styles.nav__link} href="mailto:alina.skoropad@gmail.com">
        Contact
      </Link>
    </nav>
  );
};

export default Navbar;