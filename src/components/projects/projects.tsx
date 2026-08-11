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
}

const Projects = ({ activeFilter }: ProjectsProps) => {
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
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project: Project, index: number) => (
            <motion.div
              className={styles.projects__list_item}
              key={project.id}
              layout="position"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link href={`/projects/${project.id}`}>
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
                <h2>{project.title}</h2>
                <p>
                  {project.tags.map((tag, index) => (
                    <span key={index} className={styles.projects__list_item_tag}>
                      {tag}
                    </span>
                  ))}
                </p>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Projects;