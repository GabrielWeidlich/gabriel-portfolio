import { PageContainer } from "@/components/layout/page-container";
import { ProjectGrid } from "@/components/projects/project-grid";
import { projects } from "@/data/projects";

export const metadata = { title: "Projects" };

export default function ProjectsPage() {
  return <PageContainer><div className="shell"><section className="page-intro"><p className="eyebrow">Archive / 08 projects</p><h1>Selected work.</h1><p>A growing collection of projects across AI, backend development, APIs, and software engineering.</p></section><section className="content-section"><ProjectGrid projects={projects} /></section></div></PageContainer>;
}