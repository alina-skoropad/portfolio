import ProjectDetails from "@/components/project/project";
import { ProjectsList } from "@/data/ProjectsList";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{
    projectId: string;
  }>;
}

export async function generateStaticParams() {
  return ProjectsList.map((project) => ({
    projectId: project.id,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { projectId } = await params;
  const project = ProjectsList.find((p) => p.id === projectId);

  if (!project) return {};

  return {
    title: `${project.title} | Portfolio`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [{ url: project.imageUrl }],
    },
  };
}

export default async function ProjectDetailsPage({ params }: PageProps) {
  const { projectId } = await params;

  const currentIndex = ProjectsList.findIndex((p) => p.id === projectId);

  if (currentIndex === -1) {
    notFound();
  }

  const project = ProjectsList[currentIndex];
  const nextProject = ProjectsList[(currentIndex + 1) % ProjectsList.length];

  return <ProjectDetails project={project} nextProject={nextProject} />;
}