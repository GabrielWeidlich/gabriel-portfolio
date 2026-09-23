import Link from "next/link";
import type { Project } from "@/data/projects";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className="project-card">
      <div className="project-card-topline">
        <span className="project-index">0{index + 1}</span>
        <span className="project-category">{project.category}</span>
      </div>
      <h3>{project.name}</h3>
      <p>{project.summary}</p>
      <div className="project-card-footer">
        <Link href={`/projects/${project.slug}`}>View project <span aria-hidden="true">↗</span></Link>
        {project.repositoryUrl ? <a href={project.repositoryUrl} target="_blank" rel="noreferrer">Repository</a> : null}
      </div>
    </article>
  );
}