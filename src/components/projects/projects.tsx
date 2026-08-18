"use client";

import Link from "next/link";
import Image from "@/components/common/image";
import { motion, AnimatePresence } from "framer-motion";
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
  const filteredProjects = activeFilter
    ? ProjectsList.filter((project: Project) =>
        project.tags.some(
          (tag) => tag.toLowerCase() === activeFilter.toLowerCase()
        )
      )
    : ProjectsList;

  return (
    <div className={styles.projects}>
      <div className={styles.projects__list}>
        <AnimatePresence mode="wait">
          {filteredProjects.map((project: Project, index: number) => (
            <motion.div
              className={styles.projects__list_item}
              key={project.id}
              initial={{ opacity: 0, scale: 0.96, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 15 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                href={`/projects/${project.id}`}
                className={styles.projects__card_link}
              >
                <div className={styles.projects__list_img}>
                  {project.imageUrl && (
                    <Image
                      src={project.imageUrl}
                      alt={`Main image for ${project.title}`}
                      width={2560}
                      height={800}
                      sizes="(max-width: 768px) 100vw, 100vw"
                      priority={index < 2}
                    />
                  )}
                </div>
                <h2>
                  {project.title}
                </h2>
              </Link>

              <div className={styles.projects__tags_wrapper}>
                {project.tags.map((tag, tagIndex) => {
                  const isActive =
                    activeFilter?.toLowerCase() === tag.toLowerCase();
                  return (
                    <button
                      key={tagIndex}
                      type="button"
                      className={`${styles.projects__list_item_tag} ${
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
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Projects;