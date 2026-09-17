"use client";

import Link from "next/link";
import Image from "@/components/common/image";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
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
            key={project.id}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              key={`${project.id}-${filterVersion}`}
              initial={filterVersion > 0 ? { opacity: 0, scale: 0.97, y: 8 } : false}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                href={`/projects/${project.id}`}
                className={styles["projects__card_link"]}
              >
                <div className={styles["projects__list_img"]}>
                  {project.imageUrl && (
                    <Image
                      src={project.imageUrl}
                      alt={`Main image for ${project.title}`}
                      width={2560}
                      height={800}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
                      priority={index < 2}
                    />
                  )}
                </div>
                <h2>{project.title}</h2>
              </Link>

              <div className={styles["projects__tags_wrapper"]}>
                {project.tags.map((tag, tagIndex) => {
                  const isActive =
                    activeFilter?.toLowerCase() === tag.toLowerCase();
                  return (
                    <button
                      key={tagIndex}
                      type="button"
                      aria-pressed={isActive}
                      className={`${styles["projects__list_item_tag"]} ${
                        isActive ? styles.active : ""
                      }`}
                      onClick={() => onSelectFilter?.(tag)}
                    >
                      {tag}
                    </button>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;