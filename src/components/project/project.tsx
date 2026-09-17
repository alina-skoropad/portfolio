"use client";

import React, { useMemo } from "react";
import Image from "@/components/common/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import dynamic from "next/dynamic";

import styles from "./project.module.scss";

const MyCarousel = dynamic(() => import("@/components/carousel/carousel"), {
  ssr: false,
});

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
  process: string;
  role: string;
  contribution: {
    items: string[];
  };
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

const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const listItemAnimation: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function ProjectDetails({ project, nextProject }: ProjectDetailsProps) {
  const additionalCarousel = useMemo(() => {
    return project.additionalImages ? <MyCarousel images={project.additionalImages} /> : null;
  }, [project.additionalImages]);

  return (
    <div className={styles.project__container}>
      {project.imageUrl && (
        <motion.div className={styles.project__hero} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}>
          <Image 
            src={project.imageUrl} 
            alt={`Main image for ${project.title}`} 
            width={2560} 
            height={900} 
            priority
            sizes="100vw"
          />
        </motion.div>
      )}

      <motion.div className={styles.project__description} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}>
        <h2>{project.description}</h2>
        <p>{project.process}</p>
      </motion.div>

      <div className={styles.project__details}>
        <motion.div className={`${styles["project__details-item"]} ${styles["project__details-item--contr"]}`} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}>
          <h3>My role</h3>
          <p>{project.role}</p>
          <motion.ul className={styles.project__contribution} variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {project.contribution.items.map((item) => (
              <motion.li key={item} className={styles["project__contribution-item"]} variants={listItemAnimation}>
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.div className={styles["project__details-item"]} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}>
          <h3>Timeline</h3>
          <p>{project.timeline}</p>
        </motion.div>

        {project.link && (
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className={`${styles.project__link} ${project.colorClass ? styles[project.colorClass] : ""}`}>
              <span>{project.button ?? "Visit"}</span>
            </a>
          </motion.div>
        )}
      </div>

      {project.galleryImages && (
        <div className={styles.project__gallery}>
          {project.galleryImages.map((img, index) => (
            <React.Fragment key={img.src}>
              <motion.figure className={styles.project__image} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}>
                <Image 
                  src={img.src} 
                  alt={img.alt} 
                  width={2560} 
                  height={900} 
                  className={img.className ? styles[img.className] : undefined} 
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1280px"
                />
                {img.figcaption && <figcaption>{img.figcaption}</figcaption>}
              </motion.figure>
              {index === project.additionalPosition && additionalCarousel}
            </React.Fragment>
          ))}
        </div>
      )}

      <motion.div className={styles.project__navigation} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}>
        <Link href={`/projects/${nextProject.id}`} className={styles["project__link-next"]}>
          <h2>Next Project: {nextProject.title}</h2>
        </Link>
      </motion.div>
    </div>
  );
}