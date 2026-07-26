import { GetProjects } from "@/lib/db/db-getter";
import { projectType } from "@/lib/db/db-types";
import ProjectCard from "./project-card";

export default function ProjectsList(props: { type: projectType }) {
  const { type } = props;
  const projects = GetProjects(type);

  return (
    <>
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </>
  );
}
