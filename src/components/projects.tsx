"use client";

import Link from "next/link";
import Image from "@/components/image";

import styles from "./projects.module.scss";

import { allProjects } from "@/data/projects";

const Projects = () => {
  return (
    <div className={styles.projects}>
      <div className={styles.projects__list}>
        {allProjects.map((project) => (
          <div className={styles.projects__list_item} key={project.id}>
            <Link href={`/projects/${project.id}`}>
              {project.imageUrl && <Image src={project.imageUrl} alt={`Main image for ${project.title}`} width={800} height={400} className={undefined} />}
              <p>{project.tags}</p>
              <h2>{project.title}</h2>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
