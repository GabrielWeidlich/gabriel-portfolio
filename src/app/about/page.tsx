import { PageContainer } from "@/components/layout/page-container";
import { skillGroups } from "@/data/skills";

export const metadata = { title: "About" };

export default function AboutPage() {
    return (
        <PageContainer>
            <div className="shell">
                <section className="page-intro">
                    <p className="eyebrow">About Gabriel</p>
                    <h1>Engineering in progress.</h1>
                    <p>
                        I&apos;m a Software Engineering student at UniEVANGÉLICA, focused on building practical software and continuously improving my understanding of backend development and intelligent systems.

                        My current focus is Python, backend development, LLMs and RAG. I&apos;ve also worked with C#/.NET, Node.js, React, TypeScript, databases and Docker across academic and personal projects.

                        I enjoy understanding how systems work beyond the interface — from APIs and databases to authentication, infrastructure and AI-powered features.
                    </p>
                </section>

                <section className="content-section">
                    <div className="split-section">


                        <div className="skill-groups">
                            {skillGroups.map((group) => (
                                <div className="skill-group" key={group.label}>
                                    <h2>{group.label}</h2>
                                    <ul className="skill-list">
                                        {group.items.map((skill) => <li key={skill}>{skill}</li>)}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </PageContainer>
    );
}