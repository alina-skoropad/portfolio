"use client";

import { Fragment, useMemo, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./page.module.scss";
import Projects from "@/components/projects/projects";
import { ProjectsList } from "@/data/ProjectsList";

type TagVariant = "serif-italic" | "mono-badge";

type HeroSegment =
  | { type: "text"; text: string; noSpaceAfter?: boolean }
  | {
      type: "tag";
      label: string;
      filter: string;
      variant: TagVariant;
      suffix?: string;
      noSpaceAfter?: boolean;
    };

const heroSegments: HeroSegment[] = [
  { type: "text", text: "I connect" },
  { type: "tag", label: "Design", filter: "Design", variant: "serif-italic" },
  { type: "text", text: "and" },
  { type: "tag", label: "Code", filter: "Code", variant: "mono-badge" },
  { type: "text", text: "through" },
  { type: "tag", label: "Branding", filter: "Branding", variant: "serif-italic" },
  { type: "text", text: "and" },
  { type: "tag", label: "MARKETING", filter: "Marketing", variant: "mono-badge" },
  { type: "text", text: "to create" },
  { type: "tag", label: "Web", filter: "Web", variant: "serif-italic" },
  { type: "text", text: "and" },
  { type: "tag", label: "Mobile", filter: "App", variant: "serif-italic" },
  { type: "text", text: "products for both" },
  { type: "tag", label: "B2B", filter: "B2B", variant: "mono-badge" },
  { type: "text", text: "and" },
  {
    type: "tag",
    label: "B2C",
    filter: "B2C",
    variant: "mono-badge",
    suffix: ",",
  },
  { type: "text", text: "including" },
  { type: "tag", label: "Dashboards", filter: "Dashboard", variant: "serif-italic" },
  { type: "text", text: "and" },
  {
    type: "tag",
    label: "ADMIN INTERFACES",
    filter: "Admin",
    variant: "mono-badge",
    noSpaceAfter: true,
  },
  { type: "text", text: "." },
];

export default function Home() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const projectsSectionRef = useRef<HTMLDivElement>(null);

  const toggleFilter = (tag: string) => {
    setActiveFilter((prev) => {
      const nextFilter = prev === tag ? null : tag;

      if (nextFilter && window.innerWidth <= 768 && projectsSectionRef.current) {
        setTimeout(() => {
          projectsSectionRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 150);
      }

      return nextFilter;
    });
  };

  const filteredCount = useMemo(() => {
    if (!activeFilter) return null;
    return ProjectsList.filter((project) =>
      project.tags.some(
        (tag: string) => tag.toLowerCase() === activeFilter.toLowerCase()
      )
    ).length;
  }, [activeFilter]);

  return (
    <div className={styles.page}>
      <section className={styles.main}>
        <div className={styles.hero}>
          <h1 className={styles.hero__title}>
            {heroSegments.map((segment, index) => {
              const segmentKey = `hero-${index}-${segment.type}`;
              const isSelected =
                segment.type === "tag" && activeFilter === segment.filter;
              const tagButton =
                segment.type === "tag" ? (
                  <button
                    type="button"
                    aria-pressed={isSelected}
                    onClick={() => toggleFilter(segment.filter)}
                    className={`${styles.hero__tag} ${
                      styles[`hero__tag--${segment.variant}`]
                    } ${isSelected ? styles.active : ""}`}
                  >
                    {segment.label}
                  </button>
                ) : null;

              return (
                <Fragment key={segmentKey}>
                  {segment.type === "text" ? (
                    <span className={styles.hero__word}>{segment.text}</span>
                  ) : segment.suffix ? (
                    <span className={styles.hero__tagGroup}>
                      {tagButton}
                      <span className={styles.hero__tagSuffix}>
                        {segment.suffix}
                      </span>
                    </span>
                  ) : (
                    tagButton
                  )}
                  {index < heroSegments.length - 1 && !segment.noSpaceAfter
                    ? " "
                    : null}
                </Fragment>
              );
            })}
          </h1>

          <div aria-live="polite">
            <AnimatePresence>
              {activeFilter && (
                <motion.div
                  className={styles.hero__reset}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                >
                  <span>
                    Showing: <strong>{activeFilter}</strong>
                    {filteredCount !== null && (
                      <span className={styles.hero__count}> · {filteredCount}</span>
                    )}
                  </span>
                  <button type="button" onClick={() => setActiveFilter(null)}>
                    Clear filter
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className={styles.main__projects} ref={projectsSectionRef}>
          <Projects activeFilter={activeFilter} onSelectFilter={toggleFilter} />
        </div>
      </section>
    </div>
  );
}