import { PageContainer } from "@/components/layout/page-container";
import { experience } from "@/data/experience";

export const metadata = { title: "Experience" };

export default function ExperiencePage() {
  return (
    <PageContainer>
      <div className="shell">
        <section className="page-intro">
          <p className="eyebrow">Experience / education</p>
          <h1>Where the work is grounded.</h1>
          <p>My path from practical IT support to software engineering.</p>
        </section>
        <section className="content-section">
          <div className="experience-list">
            {experience.map((item, index) => (
              <article className="experience-item" key={item.organization}>
                <div className="experience-marker" aria-hidden="true"><span>{String(index + 1).padStart(2, "0")}</span></div>
                <div className="experience-content">
                  <div className="experience-heading">
                    <div><h2>{item.title}</h2><p className="experience-organization">{item.organization}</p></div>
                    {item.period ? <time>{item.period}</time> : null}
                  </div>
                  <ul className="experience-bullets">{item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section className="career-direction">
          <p className="eyebrow">Career direction</p>
          <p>My professional experience started in IT support and computer maintenance, where I developed practical troubleshooting and problem-solving skills. I am now focused on software engineering, particularly backend development, Python, and AI-powered systems.</p>
        </section>
      </div>
    </PageContainer>
  );
}