import styles from "./page.module.scss";

import Projects from "@/components/projects";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.main__title}>
          Hello! I'm Alina<span>, a Web Designer and an HTML/CSS developer</span>. I am passionate about both design and development. I strive to create clean, user-friendly, and timeless digital experiences that truly work. My focus on minimalism and simplicity enables me to design solutions that are both elegant and functional.
        </h1>
        <div className={styles.main__projects}>
          <h3 className={styles.main__subtitle}>recent works</h3>
          <Projects />
        </div>
      </main>
    </div>
  );
}
