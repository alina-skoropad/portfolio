"use client";

import { useMemo, useState, useRef } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import styles from "./page.module.scss";
import Projects from "@/components/projects/projects";
import { ProjectsList } from "@/data/ProjectsList";

type HeroSegment =
  | { type: "text"; text: string }
  | { type: "tag"; label: string; filter: string };

const heroSegments: HeroSegment[] = [
  { type: "text", text: "I connect " },
  { type: "tag", label: "Design", filter: "Design" },
  { type: "text", text: " and " },
  { type: "tag", label: "Code", filter: "Code" },
  { type: "text", text: " through " },
  { type: "tag", label: "Branding", filter: "Branding" },
  { type: "text", text: " and " },
  { type: "tag", label: "Marketing", filter: "Marketing" },
  { type: "text", text: " to create " },
  { type: "tag", label: "Web", filter: "Web" },
  { type: "text", text: " and " },
  { type: "tag", label: "Mobile", filter: "App" },
  { type: "text", text: " products for both " },
  { type: "tag", label: "B2B", filter: "B2B" },
  { type: "text", text: " and " },
  { type: "tag", label: "B2C", filter: "B2C" },
  { type: "text", text: ", including " },
  { type: "tag", label: "Dashboards", filter: "Dashboard" },
  { type: "text", text: " and " },
  { type: "tag", label: "Admin interfaces", filter: "Admin" },
  { type: "text", text: "." },
];

const staggerContainer: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.028, delayChildren: 0.1 },
  },
};

const segmentAnimation: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Home() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const projectsSectionRef = useRef<HTMLDivElement>(null);

  const toggleFilter = (tag: string) => {
    setActiveFilter((prev) => {
      const nextFilter = prev === tag ? null : tag;

      // Авто-скролл до списку проектів на мобільних при активації фільтра
      if (nextFilter && window.innerWidth <= 768 && projectsSectionRef.current) {
        setTimeout(() => {
          projectsSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 150);
      }

      return nextFilter;
    });
  };

  const filteredCount = useMemo(() => {
    if (!activeFilter) return null;
    return ProjectsList.filter((project) =>
      project.tags.some((tag: string) => tag.toLowerCase() === activeFilter.toLowerCase())
    ).length;
  }, [activeFilter]);

  return (
    <div className={styles.page}>
      <section className={styles.main}>
        <div className={styles.hero}>
          <motion.h1 className={styles.hero__title} variants={staggerContainer} initial="hidden" animate="visible">
            {heroSegments.map((segment, index) => {
              const segmentKey = `hero-${index}-${segment.type}`;

              return segment.type === "text" ? (
                <motion.span
                  key={segmentKey}
                  variants={segmentAnimation}
                  style={{ display: "inline-block", whiteSpace: "pre" }}
                >
                  {segment.text}
                </motion.span>
              ) : (
                <motion.button
                  key={segmentKey}
                  type="button"
                  variants={segmentAnimation}
                  onClick={() => toggleFilter(segment.filter)}
                  className={`${styles.hero__tag} ${activeFilter === segment.filter ? styles.active : ""}`}
                >
                  {segment.label}
                </motion.button>
              );
            })}
          </motion.h1>

          <AnimatePresence>
            {activeFilter && (
              <motion.div
                className={styles.hero__reset}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                <span>
                  Showing: <strong>{activeFilter}</strong>
                  {filteredCount !== null && <span className={styles.hero__count}> · {filteredCount}</span>}
                </span>
                <button type="button" onClick={() => setActiveFilter(null)}>
                  ✕ Clear filter
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className={styles.main__projects} ref={projectsSectionRef}>
          <Projects activeFilter={activeFilter} onSelectFilter={toggleFilter} />
        </div>
      </section>
    </div>
  );
}