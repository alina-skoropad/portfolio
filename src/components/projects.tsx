"use client";

import Link from "next/link";
import Image from "@/components/image";
import {useScrollAnimation} from "@/hooks/useScrollAnimation";

import styles from "./projects.module.scss";

import {ProjectsList} from "@/data/ProjectsList";

type Project = {
  id: string;
  title: string;
  tags: string;
  imageUrl: string;
};

const Projects = () => {
  useScrollAnimation();

  return (
    <div className={styles.projects}>
      <div className={styles.projects__list}>
        {ProjectsList.map((project: Project) => (
          <div className={`${styles.projects__list_item} animate-on-scroll`} key={project.id}>
            <Link href={`/projects/${project.id}`}>
              <div className={styles.projects__list_img}>{project.imageUrl && <Image src={project.imageUrl} alt={`Main image for ${project.title}`} width={800} height={400} className={undefined} />}</div>
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
