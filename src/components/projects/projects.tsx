"use client";

import Link from "next/link";
import Image from "@/components/common/image";
import { motion } from "framer-motion";
import { useState, useRef, useEffect, Fragment } from "react";
import styles from "./projects.module.scss";
import { ProjectsList } from "@/data/ProjectsList";

type Project = {
  id: string;
  title: string;
  tags: string[];
  imageUrl: string;
};

interface ProjectsProps {
  activeFilter?: string | null;
  onSelectFilter?: (tag: string) => void;
}

const Projects = ({ activeFilter, onSelectFilter }: ProjectsProps) => {
  const [filterVersion, setFilterVersion] = useState(0);
  const prevFilterRef = useRef(activeFilter);

  useEffect(() => {
    if (prevFilterRef.current !== activeFilter) {
      prevFilterRef.current = activeFilter;
      setFilterVersion((v) => v + 1);
    }
  }, [activeFilter]);

  const filteredProjects = activeFilter
    ? ProjectsList.filter((project: Project) =>
        project.tags.some(
          (tag) => tag.toLowerCase() === activeFilter.toLowerCase()
        )
      )
    : ProjectsList;

  return (
    <div className={styles.projects}>
      <div className={styles["projects__list"]}>
        {filteredProjects.map((project: Project, index: number) => (
          <motion.div
            layout
            className={styles["projects__list_item"]}
            key={`${project.id}-${filterVersion}`}
            initial={
              filterVersion > 0 ? { opacity: 0, scale: 0.97, y: 8 } : false
            }
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link
              href={`/projects/${project.id}`}
              className={styles["projects__card_link"]}
            >
              <div
  className={styles["projects__list_img"]}
  style={{ viewTransitionName: `project-img-${project.id}` }}
>
                {project.imageUrl && (
                  <Image
                    src={project.imageUrl}
                    alt={`Main image for ${project.title}`}
                    width={2560}
                    height={800}
                    sizes={
                      index === 0 || index === 3 || index === 4 || index === 7
                        ? "100vw"
                        : "(max-width: 800px) 100vw, 50vw"
                    }
                    priority={index < 2}
                  />
                )}
              </div>

              <h2>{project.title}</h2>
            </Link>

            <div
              className={styles["projects__tags_wrapper"]}
              role="group"
              aria-label={`Filter by tags for ${project.title}`}
            >
              {project.tags.map((tag, tagIndex) => {
                const isActive =
                  activeFilter?.toLowerCase() === tag.toLowerCase();

                return (
                  <Fragment key={`${project.id}-${tag}`}>
                    <button
                      type="button"
                      aria-pressed={isActive}
                      className={`${styles["projects__list_item_tag"]} ${
                        isActive ? styles.active : ""
                      }`}
                      onClick={() => onSelectFilter?.(tag)}
                    >
                      {tag}
                    </button>
                    {tagIndex < project.tags.length - 1 && (
                      <span
                        className={styles["projects__tag_separator"]}
                        aria-hidden="true"
                      >
                        ·
                      </span>
                    )}
                  </Fragment>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;