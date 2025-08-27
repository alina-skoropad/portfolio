import {notFound} from "next/navigation";
import Image from "@/components/image";
import Link from "next/link"; 

import styles from "./project.module.scss";

import { allProjects } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{ projectId: string }>;
};

export async function generateStaticParams() {
  return allProjects.map((project) => ({
    projectId: project.id,
  }));
}

export default async function ProjectDetailsPage({ params }: ProjectPageProps) {
  const { projectId } = await params;
  const projectIndex = allProjects.findIndex((p) => p.id === projectId);
  const project = allProjects[projectIndex];

  if (!project) {
    notFound();
  }

  const nextProjectIndex = (projectIndex + 1) % allProjects.length;
  const nextProjectId = allProjects[nextProjectIndex].id;
  const nextProjectTitle = allProjects[nextProjectIndex].title;

  return (
    <div className={styles.project__container}>
      {project.imageUrl && (
        <div className={styles.project__hero}>
          <Image src={project.imageUrl} alt={`Main image for ${project.title}`} width={1600} height={900} className={undefined} />
        </div>
      )}
      <div className={styles.project__description}>
        <h2>{project.description}</h2>
        {project.link ? (
          <a href={project.link} target="_blank" rel="noopener noreferrer" className={`${styles.project__link} ${project.colorClass ? styles[project.colorClass] : ""}`}>
            <span>{project.button}</span>
          </a>
        ) : (
          <span className={styles.project__prototype}>Prototype</span>
        )}
      </div>

      <div className={styles.project__details}>
        <div className={`${styles.project__details_item} ${styles["project__details_item--contr"]}`}>
          <h3>CONTRIBUTION</h3>
          <p>{project.contribution}</p>
        </div>
        <div className={styles.project__details_item}>
          <h3>TIMELINE</h3>
          <p>{project.timeline}</p>
        </div>
      </div>

      <div className={styles.project__gallery}>
        {project.galleryImages &&
          project.galleryImages.map((img, index) => (
            <div key={index}>
              <figure className={styles.project__image}>
                <Image src={img.src} alt={img.alt} width={1600} height={900} className={img.className ? styles[img.className] : undefined} />
                {img.figcaption && <figcaption>{img.figcaption}</figcaption>}
              </figure>
              {index === project.additionalPosition && project.additionalImages && (
                <div className={styles.project__additional}>
                  {project.additionalImages.map((img, number) => (
                    <figure key={number} className={styles.project__additional_image}>
                      <Image src={img.src} alt={img.alt} width={1600} height={900} className={undefined} />
                    </figure>
                  ))}
                </div>
              )}
            </div>
          ))}
      </div>

      <div className={styles.project__navigation}>
        <Link href={`/projects/${nextProjectId}`} className={styles.project__link_next}>
          <h2>Next Project: {nextProjectTitle}</h2>
        </Link>
      </div>
    </div>
  );
}
