"use client";

import Link from "next/link";
import Image from "@/components/common/image";
import {useScrollAnimation} from "@/hooks/useScrollAnimation";

import styles from "./projects.module.scss";

import {ProjectsList} from "@/data/ProjectsList";

type Project = {
  id: string;
  title: string;
  tags: string[];
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
              <div className={styles.projects__list_img}>{project.imageUrl && <Image src={project.imageUrl} alt={`Main image for ${project.title}`} width={2560} height={800} sizes="(max-width: 768px) 100vw, 50vw" className={undefined} />}</div>
              <h2>{project.title}</h2>
               <p>
                {project.tags.map((tag, index) => (
                  <span key={index} className={styles.projects__list_item_tag}>
                    {tag}
                  </span>
                ))}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
