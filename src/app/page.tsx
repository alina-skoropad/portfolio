"use client";

import {useState} from "react";
import {motion, AnimatePresence} from "framer-motion";
import styles from "./page.module.scss";
import Projects from "@/components/projects/projects";

export default function Home() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const toggleFilter = (tag: string) => {
    setActiveFilter((prev) => (prev === tag ? null : tag));
  };

  return (
    <div className={styles.page}>
      <section className={styles.main}>
        <motion.div className={styles.hero} initial={{opacity: 0, y: 30}} animate={{opacity: 1, y: 0}} transition={{duration: 0.8, ease: [0.16, 1, 0.3, 1]}}>
          <h1 className={styles.hero__title}>
            I connect{" "}
            <button type="button" onClick={() => toggleFilter("Design")} className={`${styles.hero__tag} ${activeFilter === "Design" ? styles.active : ""}`}>
              Design
            </button>{" "}
            and{" "}
            <button type="button" onClick={() => toggleFilter("Code")} className={`${styles.hero__tag} ${activeFilter === "Code" ? styles.active : ""}`}>
              Code
            </button>{" "}
            through{" "}
            <button type="button" onClick={() => toggleFilter("Branding")} className={`${styles.hero__tag} ${activeFilter === "Branding" ? styles.active : ""}`}>
              Branding
            </button>{" "}
            and{" "}
            <button type="button" onClick={() => toggleFilter("Marketing")} className={`${styles.hero__tag} ${activeFilter === "Marketing" ? styles.active : ""}`}>
              Marketing
            </button>{" "}
            to create{" "}
            <button type="button" onClick={() => toggleFilter("Web")} className={`${styles.hero__tag} ${activeFilter === "Web" ? styles.active : ""}`}>
              Web
            </button>{" "}
            and{" "}
            <button type="button" onClick={() => toggleFilter("App")} className={`${styles.hero__tag} ${activeFilter === "App" ? styles.active : ""}`}>
              Mobile
            </button>{" "}
            products for both{" "}
            <button type="button" onClick={() => toggleFilter("B2B")} className={`${styles.hero__tag} ${activeFilter === "B2B" ? styles.active : ""}`}>
              B2B
            </button>{" "}
            and{" "}
            <button type="button" onClick={() => toggleFilter("B2C")} className={`${styles.hero__tag} ${activeFilter === "B2C" ? styles.active : ""}`}>
              B2C
            </button>
            , including{" "}
            <button type="button" onClick={() => toggleFilter("Dashboard")} className={`${styles.hero__tag} ${activeFilter === "Dashboard" ? styles.active : ""}`}>
              Dashboards
            </button>{" "}
            and{" "}
            <button type="button" onClick={() => toggleFilter("Admin")} className={`${styles.hero__tag} ${activeFilter === "Admin" ? styles.active : ""}`}>
              Admin interfaces
            </button>
            .
          </h1>

          <AnimatePresence>
            {activeFilter && (
              <motion.div className={styles.hero__reset} initial={{opacity: 0, y: -10}} animate={{opacity: 1, y: 0}} exit={{opacity: 0, y: -10}}>
                <span>
                  Showing: <strong>{activeFilter}</strong>
                </span>
                <button type="button" onClick={() => setActiveFilter(null)}>
                  ✕ Clear filter
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        <div className={styles.main__projects}>
          <Projects activeFilter={activeFilter} />
        </div>
      </section>
    </div>
  );
}
