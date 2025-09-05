"use client";

import React, {useMemo} from "react";
import Image from "@/components/image";
import Link from "next/link";
import {useScrollAnimation} from "@/hooks/useScrollAnimation";

import styles from "./project.module.scss";
import MyCarousel from "@/components/carousel";

type ImageObject = {
  src: string;
  alt: string;
  className?: string;
  figcaption?: string;
};

type Project = {
  id: string;
  title: string;
  description: string;
  contribution: string;
  timeline: string;
  imageUrl: string;
  link?: string;
  button?: string;
  colorClass?: string;
  galleryImages?: ImageObject[];
  additionalPosition?: number;
  additionalImages?: ImageObject[];
};

type ProjectDetailsProps = {
  project: Project;
  nextProject: Project;
};

export default function ProjectDetails({project, nextProject}: ProjectDetailsProps) {
  useScrollAnimation();

  const additionalCarousel = useMemo(() => {
    return project.additionalImages ? <MyCarousel images={project.additionalImages} /> : null;
  }, [project.additionalImages]);

  return (
    <div className={styles.project__container}>
      {project.imageUrl && (
        <div className={`${styles.project__hero} animate-on-scroll`}>
          <Image src={project.imageUrl} alt={`Main image for ${project.title}`} width={1600} height={900} priority />
        </div>
      )}

      <div className={`${styles.project__description} animate-on-scroll`}>
        <h2>{project.description}</h2>
        {project.link ? (
          <a href={project.link} target="_blank" rel="noopener noreferrer" className={`${styles.project__link} ${project.colorClass ? styles[project.colorClass] : ""}`}>
            <span>{project.button ?? "Visit"}</span>
          </a>
        ) : (
          <span className={styles.project__prototype}>Prototype</span>
        )}
      </div>

      <div className={styles.project__details}>
        <div className={`${styles.project__details_item} ${styles["project__details_item--contr"]} animate-on-scroll`}>
          <h3>CONTRIBUTION</h3>
          <p>{project.contribution}</p>
        </div>
        <div className={`${styles.project__details_item} animate-on-scroll`}>
          <h3>TIMELINE</h3>
          <p>{project.timeline}</p>
        </div>
      </div>

      {project.galleryImages && (
        <div className={styles.project__gallery}>
          {project.galleryImages?.map((img, index) => (
            <div key={index}>
              <figure className={`${styles.project__image} animate-on-scroll`}>
                <Image src={img.src} alt={img.alt} width={1600} height={900} className={img.className ? styles[img.className] : undefined} />
                {img.figcaption && <figcaption>{img.figcaption}</figcaption>}
              </figure>
              {index === project.additionalPosition && additionalCarousel}
            </div>
          ))}
        </div>
      )}

      <div className={`${styles.project__navigation} animate-on-scroll`}>
        <Link href={`/projects/${nextProject.id}`} className={styles.project__link_next}>
          <h2>Next Project: {nextProject.title}</h2>
        </Link>
      </div>
    </div>
  );
}
