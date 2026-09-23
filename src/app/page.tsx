import Link from "next/link";
import { featuredProjects } from "@/data/projects";
import { skillGroups } from "@/data/skills";
import { PageContainer } from "@/components/layout/page-container";
import { ProjectGrid } from "@/components/projects/project-grid";
import { SectionHeading } from "@/components/ui/section-heading";

export default function Home() {
  return (
    <PageContainer>
      <section className="hero">
        <div className="shell hero-grid">
          <div>
            <p className="eyebrow">Software engineering · UniEVANGÉLICA</p>
            <h1>Gabriel Weidlich <span>Santos.</span></h1>
            <div className="hero-actions">
              <Link className="button" href="/projects">Explore projects <span aria-hidden="true">↗</span></Link>
              <Link className="button secondary" href="/contact">Get in touch</Link>
            </div>
          </div>
          <div>
            <p className="hero-copy">Software Engineering student focused on Python, backend development, AI, LLMs, RAG, and the craft of building reliable software.</p>
            <p className="hero-status">Currently learning, building, and documenting the work.</p>
          </div>
        </div>
      </section>
      <section className="content-section">
        <div className="shell">
          <SectionHeading eyebrow="Selected work" title="Projects with a point of view." />
          <ProjectGrid projects={featuredProjects} />
          <div className="hero-actions"><Link className="button secondary" href="/projects">View all projects <span aria-hidden="true">↗</span></Link></div>
        </div>
      </section>
      <section className="content-section">
        <div className="shell split-section">
          <div><SectionHeading eyebrow="Technical focus" title="Learning by making." /><p className="muted-copy">A growing body of work across backend systems, applied AI, and software engineering fundamentals.</p></div>
          <div className="skill-groups">
            {skillGroups.map((group) => <div className="skill-group" key={group.label}><h3>{group.label}</h3><ul className="skill-list">{group.items.map((skill) => <li key={skill}>{skill}</li>)}</ul></div>)}
          </div>
        </div>
      </section>
    </PageContainer>
  );
}
