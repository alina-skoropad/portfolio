"use client";

import React, { useMemo, useRef } from "react";
import Image from "@/components/common/image";
import Link from "next/link";
import { motion, Variants, useScroll, useTransform, useReducedMotion } from "framer-motion";
import dynamic from "next/dynamic";
import type { GalleryContentBlock, ProjectData } from "@/data/ProjectsList";

import styles from "./project.module.scss";

const MyCarousel = dynamic(() => import("@/components/carousel/carousel"), {
  ssr: false,
});

type ProjectDetailsProps = {
  project: ProjectData;
  nextProject: ProjectData;
};

const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
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
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  },
};

export default function ProjectDetails({ project, nextProject }: ProjectDetailsProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(heroScroll, [0, 1], ["0%", "20%"]);
  const heroScale = useTransform(heroScroll, [0, 1], [1, 1.06]);

  const galleryContent = useMemo<GalleryContentBlock[]>(() => {
    if (project.galleryContent) return project.galleryContent;

    return (project.galleryImages ?? []).flatMap((image, index) => {
      const blocks: GalleryContentBlock[] = [{ type: "image", ...image }];

      if (index === project.additionalPosition && project.additionalImages) {
        blocks.push({ type: "carousel" });
      }

      return blocks;
    });
  }, [
    project.galleryContent,
    project.galleryImages,
    project.additionalPosition,
    project.additionalImages,
  ]);

  return (
    <div className={styles.project__container}>
      {project.imageUrl && (
        <div
  className={styles.project__hero}
  ref={heroRef}
  style={{ viewTransitionName: `project-img-${project.id}` }}
>
          <motion.div
            className={styles.project__hero_inner}
            style={
              prefersReducedMotion
                ? undefined
                : { y: heroY, scale: heroScale }
            }
          >
            <Image
              src={project.imageUrl}
              alt={`Main image for ${project.title}`}
              width={2560}
              height={900}
              priority
              sizes="100vw"
            />
          </motion.div>
        </div>
      )}

      <motion.div
        className={styles.project__description}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
      >
        <h2>{project.description}</h2>
        <p>{project.process}</p>
      </motion.div>

      <div
        className={`${styles.project__details} ${
          project.galleryContent ? styles["project__details--with-story"] : ""
        }`}
      >
        <motion.div
          className={`${styles["project__details-item"]} ${styles["project__details-item--contr"]}`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <h3>My role</h3>
          <p>{project.role}</p>
          {project.contribution.items.length > 0 && (
            <motion.ul
              className={styles.project__contribution}
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {project.contribution.items.map((item) => (
                <motion.li
                  key={item}
                  className={styles["project__contribution-item"]}
                  variants={listItemAnimation}
                >
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          )}
        </motion.div>

        <motion.div
          className={styles["project__details-item"]}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <h3>Timeline</h3>
          <p>{project.timeline}</p>
        </motion.div>

        {project.link && (
          <motion.div
            className={styles.project__action}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.project__link} ${
                project.colorClass ? styles[project.colorClass] : ""
              }`}
            >
              <span>{project.button ?? "Visit"}</span>
            </a>
          </motion.div>
        )}
      </div>

      {galleryContent.length > 0 && (
        <div className={styles.project__gallery}>
          {project.galleryContent && (
            <motion.p
              className={styles["project__gallery-label"]}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
            >
              Project highlights
            </motion.p>
          )}
          {galleryContent.map((block, index) => {
            const key = `${block.type}-${index}`;

            if (block.type === "carousel") {
              const carouselImages = block.images ?? project.additionalImages;
              return carouselImages
                ? (
                  <div key={key} className={styles.project__carousel}>
                    <MyCarousel images={carouselImages} />
                  </div>
                )
                : null;
            }

            if (block.type === "note") {
              return (
                <p key={key} className={styles.project__note}>
                  {block.text}
                </p>
              );
            }

            if (block.type === "text") {
              return (
                <motion.section
                  key={key}
                  className={styles.project__story}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={fadeInUp}
                >
                  <h2>{block.heading}</h2>
                  <p>{block.text}</p>
                </motion.section>
              );
            }

            return (
              <motion.figure
                key={key}
                className={styles.project__image}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-120px" }}
                variants={{
                  hidden: { opacity: 0, y: 50, scale: 0.98 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
                  },
                }}
              >
                <div className={styles.project__image_wrapper}>
                  <Image
                    src={block.src}
                    alt={block.alt}
                    width={2560}
                    height={900}
                    className={block.className ? styles[block.className] : undefined}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 100vw"
                  />
                </div>
                {block.figcaption && <figcaption>{block.figcaption}</figcaption>}
              </motion.figure>
            );
          })}
        </div>
      )}

      <motion.div
        className={styles.project__navigation}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
      >
        <Link href={`/projects/${nextProject.id}`} className={styles["project__link-next"]}>
          <h2>Next Project: {nextProject.title}</h2>
        </Link>
      </motion.div>
    </div>
  );
}