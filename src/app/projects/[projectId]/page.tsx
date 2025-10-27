import { notFound } from "next/navigation";
import { ProjectsList } from "@/data/ProjectsList";
import ProjectDetails from "@/components/project/project"; 

type ProjectDetailsPageProps = {
  params: Promise<{ projectId: string }>;
};

export async function generateStaticParams() {
  return ProjectsList.map((project) => ({
    projectId: project.id,
  }));
}

export default async function ProjectDetailsPage({ params }: ProjectDetailsPageProps) {
  const { projectId } = await params;
  const project = ProjectsList.find((p) => p.id === projectId);

  if (!project) {
    notFound();
  }

  const currentProjectIndex = ProjectsList.indexOf(project);
  const nextProject = ProjectsList[(currentProjectIndex + 1) % ProjectsList.length];


  return <ProjectDetails project={project} nextProject={nextProject} />;
}