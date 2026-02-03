import styles from "./page.module.scss";

import Projects from "@/components/projects/projects";

export default function Home() {
  return (
    <div className={styles.page}>
      <section className={styles.main}>
        <h1 className={styles.main__title}>
          <span>Design.</span> <span>Development.</span> <span>Minimalism.</span> <span>Simplicity.</span>
        </h1>
        <div className={styles.main__projects}>
          <Projects />
        </div>
      </section>
    </div>
  );
}
