import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug, projects } from "@/data/projects";
import { PageContainer } from "@/components/layout/page-container";
import { ArchitectureDiagram, BibleChatFlow, CaseStudySection, CrawlerFlow, FeatureGrid, RagPipeline, RagPipelineMentor, NodeNotesFlow } from "@/components/projects/case-study-section";

const mentorFeatures = [
  { title: "AI & RAG", items: ["Multi-provider LLM integration", "Qdrant vector search", "XLSX/CSV knowledge-base ingestion", "Embeddings and semantic retrieval"] },
  { title: "Authentication & security", items: ["JWT authentication and token revocation", "Rate limiting and brute-force protection", "Two-factor authentication", "Password-strength validation"] },
  { title: "SaaS & payments", items: ["Subscription plans", "Pagar.me v5 integration", "Hosted checkout links", "Payment webhook processing"] },
  { title: "Privacy-oriented features", items: ["Cookie consent", "User data export", "Confirmed account deletion", "PostgreSQL and Qdrant deletion flows"] },
  { title: "Frontend", items: ["Responsive Next.js dashboard", "Dark mode", "Authentication and protected routes", "Chat, upload and account-management flows"] },
];

export function generateStaticParams() { return projects.map((project) => ({ slug: project.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (slug === "mentoria") return { title: "MentorIA | Gabriel Weidlich Santos", description: "A technical case study of MentorIA, an academic AI/RAG platform built with a containerized backend, vector search, authentication and LLM integrations." };
  if (slug === "news-finder-crawler") return { title: "News-Finder-Crawler | Gabriel Weidlich Santos", description: "A compact technical overview of a Python news crawler using Pyppeteer, Browserless, Docker and PostgreSQL." };
  if (slug === "bible-chat-ia") return { title: "Bible-Chat-IA | Gabriel Weidlich Santos", description: "A full-stack Bible chat application with a .NET API, Next.js frontend, session-based conversation history and Gemini integration." };
  if (slug === "nodenotes") return { title: "NodeNotes | Gabriel Weidlich Santos", description: "A Node.js and Express MVC application built as a learning project for backend development with MongoDB and Handlebars." };
  if (slug === "pokeapi-project") return { title: "PokeAPI-Project | Gabriel Weidlich Santos", description: "A frontend application built as a learning project, integrating with the public PokeAPI to fetch and display Pokémon data." };
  return undefined;
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();
  if (project.slug !== "repo-rag-assistant") {
    if (project.slug === "mentoria") {
      return <PageContainer><div className="shell case-study">
        <section className="case-study-hero"><Link className="back-link" href="/projects">← Back to projects</Link><p className="eyebrow">Technical case study · AI / RAG · PFC II</p><h1>MentorIA<span>.</span></h1><p className="case-study-lede">An AI/RAG platform developed as a Software Engineering final course project within the UniPFC organization. Built collaboratively as a team project around knowledge ingestion, semantic retrieval, intelligent chat and SaaS-oriented workflows.</p><a className="button" href={project.repositoryUrl} target="_blank" rel="noreferrer">View on GitHub <span aria-hidden="true">↗</span></a></section>

        <CaseStudySection number="01" title="Overview"><p>MentorIA is the evolution and consolidation of an advanced Retrieval-Augmented Generation application integrated into a SaaS-oriented ecosystem. The repository implements knowledge-base ingestion, semantic vector processing, intelligent chat, persistent application data, authentication and subscription/payment-related flows.</p></CaseStudySection>
        <CaseStudySection number="02" title="Key features"><FeatureGrid features={mentorFeatures} /></CaseStudySection>
        <CaseStudySection number="03" title="Architecture"><ArchitectureDiagram /><p className="case-study-note">The repository is orchestrated with Docker Compose. The current stack includes a Next.js web container, a FastAPI API, an internal AI worker, PostgreSQL, Qdrant, Pagar.me integration and a scheduled backup service.</p></CaseStudySection>
        <CaseStudySection number="04" title="AI / RAG pipeline"><RagPipelineMentor /><p className="case-study-note">The repository also contains query expansion, contextual-query and reranking modules in the RAG implementation.</p></CaseStudySection>
        <CaseStudySection number="05" title="Security"><ul className="case-study-list"><li>JWT authentication with cookie-based token handling and token/session control.</li><li>Token revocation and security-cache support.</li><li>Rate limiting and failed-login protection.</li><li>Two-factor authentication using `pyotp` and QR-code generation.</li><li>Password hashing with `bcrypt` and password-strength checks with `zxcvbn`.</li><li>Optional secure cookies and HTTPS enforcement with HSTS-related middleware.</li></ul></CaseStudySection>
        <CaseStudySection number="06" title="Data & privacy"><p>Privacy-oriented features include cookie consent, JSON export of user data, account deletion with email confirmation, and deletion across PostgreSQL and Qdrant. The repository also implements read-only behavior for chats associated with restricted or deleted knowledge bases.</p></CaseStudySection>
        <CaseStudySection number="07" title="My contribution"><p>This was a collaborative academic project developed by the UniPFC team. As one of the authors, I contributed significantly to authentication, security and backup-related functionality.</p><p className="case-study-note">Specific ownership by file or commit is not stated consistently enough in the repository to attribute individual implementation details beyond these contribution areas.</p></CaseStudySection>
        <CaseStudySection number="08" title="Technology stack"><ul className="case-study-list"><li>Python 3.12, FastAPI and Uvicorn</li><li>Next.js 14, React 18, TypeScript and Tailwind CSS</li><li>PostgreSQL 15 with SQLAlchemy and Alembic</li><li>Qdrant for vector storage and semantic search</li><li>LLM and embedding integrations with OpenAI, Hugging Face/local models, Gemini and Anthropic</li><li>Docker Compose, uv and GitHub Actions</li><li>Pytest, pytest-asyncio, coverage, Ruff and Mypy</li></ul></CaseStudySection>
        <CaseStudySection number="09" title="Technical challenges / decisions"><ul className="case-study-list"><li>Coordinate relational persistence and vector data across PostgreSQL and Qdrant.</li><li>Move ingestion work into an asynchronous AI worker while exposing job state to the application.</li><li>Support multiple model providers through provider abstractions.</li><li>Keep authentication, payment webhooks and privacy-related deletion flows inside the same application lifecycle.</li><li>Run the application stack and scheduled backup process through Docker Compose.</li></ul></CaseStudySection>
        <CaseStudySection number="10" title="What I learned"><p>This project demonstrates practical work with backend architecture, RAG integration, vector databases, authentication and security, persistent data modeling, Dockerized development, external service integrations and collaborative software delivery.</p></CaseStudySection>
        <CaseStudySection number="11" title="Repository"><a className="repository-link" href={project.repositoryUrl} target="_blank" rel="noreferrer">github.com/UniPFC/MentorIA <span aria-hidden="true">↗</span></a></CaseStudySection>
      </div></PageContainer>;
    }
    if (project.slug === "news-finder-crawler") {
      return <PageContainer><div className="shell case-study compact-case-study">
        <section className="case-study-hero"><Link className="back-link" href="/projects">← Back to projects</Link><p className="eyebrow">Automation / Web Scraping</p><h1>News-Finder-<br /><span>Crawler.</span></h1><p className="case-study-lede">A Python web crawler for collecting and processing news from multiple online sources.</p><a className="button" href={project.repositoryUrl} target="_blank" rel="noreferrer">View on GitHub <span aria-hidden="true">↗</span></a></section>

        <CaseStudySection number="01" title="Overview"><p>News-Finder-Crawler automates the collection of news links and article content from G1, CNN Brasil, Portal 6 and Terra. The extracted title, content and source link are persisted as news records in PostgreSQL.</p></CaseStudySection>
        <CaseStudySection number="02" title="How it works"><CrawlerFlow /></CaseStudySection>
        <CaseStudySection number="03" title="Sources"><div className="source-list"><span>G1</span><span>CNN Brasil</span><span>Portal 6</span><span>Terra</span></div></CaseStudySection>
        <CaseStudySection number="04" title="Technical approach"><p>Each source has its own strategy and CSS selectors for finding article links and extracting the title and content. A `StrategyManager` runs all source strategies, aggregates their results and passes them to the persistence layer. Pyppeteer connects to the Browserless Chrome service defined in Docker Compose.</p></CaseStudySection>
        <CaseStudySection number="05" title="Tech stack"><div className="tech-badges"><span>Python 3.13</span><span>Pyppeteer</span><span>PostgreSQL</span><span>SQLAlchemy</span><span>Docker</span><span>Browserless Chrome</span><span>Alembic</span></div></CaseStudySection>
        <CaseStudySection number="06" title="What this project demonstrates"><p>Web scraping with browser automation, source-specific extraction strategies, structured data persistence and a Dockerized crawler environment.</p></CaseStudySection>
        <CaseStudySection number="07" title="Repository"><a className="repository-link" href={project.repositoryUrl} target="_blank" rel="noreferrer">github.com/GabrielWeidlich/news-finder-crawler <span aria-hidden="true">↗</span></a></CaseStudySection>
      </div></PageContainer>;
    }
    if (project.slug === "bible-chat-ia") {
      return <PageContainer><div className="shell case-study">
        <section className="case-study-hero"><Link className="back-link" href="/projects">← Back to projects</Link><p className="eyebrow">AI / Full Stack</p><h1>Bible-Chat-IA<span>.</span></h1><p className="case-study-lede">A full-stack Bible chat application where a Next.js interface sends questions to a .NET API and receives contextual answers from Gemini.</p><a className="button" href={project.repositoryUrl} target="_blank" rel="noreferrer">View on GitHub <span aria-hidden="true">↗</span></a></section>

        <CaseStudySection number="01" title="Overview"><p>Bible-Chat-IA is a compact full-stack AI application for asking biblical questions through a chat interface. The frontend collects user input, the API validates the request and session state, and the backend sends the latest conversation history plus a system prompt to Gemini for a generated response.</p></CaseStudySection>
        <CaseStudySection number="02" title="How it works"><BibleChatFlow /></CaseStudySection>
        <CaseStudySection number="03" title="Features"><FeatureGrid features={[
          { title: "Chat experience", items: ["Question input in the frontend", "Markdown-rendered responses", "Session-based conversation continuity", "Frontend error handling for failed requests"] },
          { title: "Backend API", items: ["Minimal ASP.NET Core API", "POST /explicar endpoint", "Request validation for empty questions", "Swagger enabled in development"] },
          { title: "AI integration", items: ["Gemini 1.5 Flash integration", "System prompt focused on biblical interpretation", "Conversation history included in the request payload", "Gemini API key loaded from environment variables"] },
          { title: "Local setup", items: ["Docker Compose for frontend and API", "Environment-based configuration", "CORS policy for localhost:3000", "Next.js app wired to the API via NEXT_PUBLIC_API_URL"] },
        ]} /></CaseStudySection>
        <CaseStudySection number="04" title="My contribution"><p>The repository available here is centered on the API, the frontend chat UX, and the session-aware Gemini call flow. My contribution, as visible in the code, is the end-to-end chat experience and the backend integration that keeps conversational context through a session ID rather than a broader authentication or backup system.</p></CaseStudySection>
        <CaseStudySection number="05" title="Security"><ul className="case-study-list"><li>The API accepts a session identifier through the `X-Session-Id` header and stores chat history in memory for each session.</li><li>CORS is limited to `http://localhost:3000` in the application configuration.</li><li>The backend validates empty input before calling the model.</li><li>The checked repository does not include authentication, JWTs, password hashing, authorization rules, or protected routes.</li></ul></CaseStudySection>
        <CaseStudySection number="06" title="Data & persistence"><p>The repository uses an in-memory chat history service (`InMemoryChatHistoryService`) backed by a `ConcurrentDictionary` keyed by session ID. There is no database-backed persistence, no backup process, and no recovery workflow in the verified codebase.</p></CaseStudySection>
        <CaseStudySection number="07" title="Technology stack"><ul className="case-study-list"><li>.NET 8 and ASP.NET Core minimal API</li><li>C# with `DotNetEnv` for environment variables and `Swashbuckle` for Swagger</li><li>Next.js 15 with React 19 and TypeScript</li><li>Axios and `react-markdown` on the frontend</li><li>Google Gemini 1.5 Flash via the Generative Language API</li><li>Docker Compose for local orchestration</li></ul></CaseStudySection>
        <CaseStudySection number="08" title="Technical decisions"><ul className="case-study-list"><li>Use a session ID instead of storing chat history in a database to keep the project lightweight and local.</li><li>Send the full conversation history to Gemini together with a system prompt to keep answers context-aware.</li><li>Keep the frontend and backend separated behind a CORS policy and a single API URL configuration.</li><li>Use a minimal API layer with Swagger enabled only in development.</li></ul></CaseStudySection>
        <CaseStudySection number="09" title="What I learned"><p>This project demonstrates practical work with external AI model integration, full-stack API communication, light session management, and containerized local development using a .NET backend and a Next.js frontend.</p></CaseStudySection>
        <CaseStudySection number="10" title="Repository"><a className="repository-link" href={project.repositoryUrl} target="_blank" rel="noreferrer">github.com/GabrielWeidlich/Bible-Chat-IA <span aria-hidden="true">↗</span></a></CaseStudySection>
      </div></PageContainer>;
    }
    if (project.slug === "nodenotes") {
      return <PageContainer><div className="shell case-study">
        <section className="case-study-hero"><Link className="back-link" href="/projects">← Back to projects</Link><p className="eyebrow">Node.js / Full Stack · Learning Project</p><h1>NodeNotes<span>.</span></h1><p className="case-study-lede">A Node.js MVC application built primarily as a learning project to understand backend fundamentals, routing, templating, and database integrations.</p><a className="button" href={project.repositoryUrl} target="_blank" rel="noreferrer">View on GitHub <span aria-hidden="true">↗</span></a></section>

        <CaseStudySection number="01" title="Overview"><p>NodeNotes is a monolithic full-stack application that allows users to create, read, update, and delete notes. It was developed as a hands-on learning experience for Node.js backend development, exploring the MVC architecture, authentication flows, and database connections.</p></CaseStudySection>
        <CaseStudySection number="02" title="How it works"><NodeNotesFlow /></CaseStudySection>
        <CaseStudySection number="03" title="Features"><FeatureGrid features={[
          { title: "User Authentication", items: ["Local strategy with Passport.js", "Password hashing with bcryptjs", "Session management using express-session", "Protected routes based on authentication state"] },
          { title: "Notes Management", items: ["Full CRUD operations for notes", "Association of notes to specific users", "Form validation and flash messaging"] },
          { title: "Frontend", items: ["Server-side rendered templates via Express-Handlebars", "Responsive HTML layouts", "Dynamic content injection based on user sessions"] },
        ]} /></CaseStudySection>
        <CaseStudySection number="04" title="Technology stack"><ul className="case-study-list"><li>Node.js with Express framework</li><li>Express-Handlebars for view templating</li><li>MongoDB with Mongoose ODM</li><li>Passport.js for authentication</li><li>Connect-flash for temporary user messages</li></ul></CaseStudySection>
        <CaseStudySection number="05" title="What I learned"><p>This project was fundamental in learning how traditional monolithic MVC applications work in Node.js. It provided practical experience with server-side rendering, session-based authentication, separating logic into routes and controllers, and working directly with a NoSQL database.</p></CaseStudySection>
        <CaseStudySection number="06" title="Repository"><a className="repository-link" href={project.repositoryUrl} target="_blank" rel="noreferrer">github.com/GabrielWeidlich/NodeNotes <span aria-hidden="true">↗</span></a></CaseStudySection>
      </div></PageContainer>;
    }
    if (project.slug === "pokeapi-project") {
      return <PageContainer><div className="shell case-study">
        <section className="case-study-hero"><Link className="back-link" href="/projects">← Back to projects</Link><p className="eyebrow">Web Development · Learning Project</p><h1>PokeAPI<br /><span>Project.</span></h1><p className="case-study-lede">A frontend application built as a learning exercise to explore API integration, state management, and component architecture by consuming the public PokeAPI.</p><a className="button" href={project.repositoryUrl} target="_blank" rel="noreferrer">View on GitHub <span aria-hidden="true">↗</span></a></section>

        <CaseStudySection number="01" title="Overview"><p>The PokeAPI-Project is a frontend application that interfaces with the public Pokémon API. It was created specifically as a learning project to practice fetching data, managing application state, and building user interfaces in Angular.</p></CaseStudySection>
        <CaseStudySection number="02" title="Features"><FeatureGrid features={[
          { title: "API Integration", items: ["RESTful API consumption", "Data fetching and pagination", "Error handling and loading states"] },
          { title: "User Interface", items: ["Responsive design", "Pokémon data visualization", "Search and filtering capabilities"] },
          { title: "Technical Focus", items: ["State management", "Component architecture", "Frontend routing"] },
        ]} /></CaseStudySection>
        <CaseStudySection number="03" title="Technology stack"><ul className="case-study-list"><li>Angular 19 and TypeScript</li><li>Ionic Framework components</li><li>REST API Integration (PokeAPI)</li></ul></CaseStudySection>
        <CaseStudySection number="04" title="What I learned"><p>This project served as a practical exercise in frontend development with Angular. It provided hands-on experience with asynchronous data fetching, handling external APIs, parsing JSON responses, and structuring a frontend application to effectively display dynamic data.</p></CaseStudySection>
        <CaseStudySection number="05" title="Repository"><a className="repository-link" href={project.repositoryUrl} target="_blank" rel="noreferrer">github.com/GabrielWeidlich/PokeAPI-Project <span aria-hidden="true">↗</span></a></CaseStudySection>
      </div></PageContainer>;
    }
    return <PageContainer><div className="shell"><section className="detail-panel"><Link className="back-link" href="/projects">← Back to projects</Link><p className="eyebrow" style={{ marginTop: 64 }}>{project.category}</p><h1>{project.name}</h1><p>{project.summary}</p><p>Technical details for this project will be added after they are verified from its source repository.</p></section></div></PageContainer>;
  }

  return <PageContainer><div className="shell case-study">
    <section className="case-study-hero"><Link className="back-link" href="/projects">← Back to projects</Link><p className="eyebrow">Technical case study · AI / RAG</p><h1>Repo RAG<br /><span>Assistant.</span></h1><p className="case-study-lede">A local AI assistant for asking questions about software repositories. It accepts a GitHub or GitLab HTTPS URL, indexes the source files, and answers questions using retrieval-augmented generation.</p><a className="button" href={project.repositoryUrl} target="_blank" rel="noreferrer">View repository <span aria-hidden="true">↗</span></a></section>

    <CaseStudySection number="01" title="Project overview"><p>The application provides a repository question-and-answer workflow built around a FastAPI backend and a Next.js frontend. A repository is indexed by URL, then queried through a `repository_id`.</p></CaseStudySection>
    <CaseStudySection number="02" title="Problem / purpose"><p>Software repositories contain the context needed to understand their own architecture, but that context is spread across source files. This project provides a local assistant that retrieves relevant repository content before generating an answer.</p></CaseStudySection>
    <CaseStudySection number="03" title="How it works"><RagPipeline /><p className="case-study-note">The indexing route is `POST /repositories/index`. Chat requests use `POST /chat`; streamed responses are available through `/chat/stream`. Conversation history is sent with each request and is not persisted by the backend.</p></CaseStudySection>
    <CaseStudySection number="04" title="Architecture / RAG pipeline"><div className="architecture-grid"><div><h3>Indexing</h3><p>The backend validates the repository host, performs a shallow clone into a managed temporary directory, loads supported files, chunks them, creates embeddings, and stores them in a Qdrant collection isolated by repository.</p></div><div><h3>Generation</h3><p>For a question, the system searches the repository&apos;s stored vectors and combines the retrieved context and supplied conversation history with the chat model.</p></div></div></CaseStudySection>
    <CaseStudySection number="05" title="Tech stack"><ul className="case-study-list"><li>Python with FastAPI, Pydantic, Uvicorn and HTTPX</li><li>Ollama with `nomic-embed-text` for embeddings</li><li>Ollama with `qwen2.5-coder:7b` for answer generation</li><li>Qdrant for vector storage and search</li><li>Next.js frontend with TypeScript</li><li>Docker Compose for the API, frontend and Qdrant services</li><li>Pytest for backend tests</li></ul></CaseStudySection>
    <CaseStudySection number="06" title="Important technical decisions"><ul className="case-study-list"><li>Accept only HTTPS repository URLs from the allowlisted GitHub and GitLab hosts.</li><li>Use shallow clones and backend-managed temporary directories for repository ingestion.</li><li>Use `repository_id` instead of exposing local filesystem paths to the chat workflow.</li><li>Keep vector collections repository-isolated.</li><li>Run the models locally through Ollama.</li><li>Expose streaming chat and retain conversation history in the request payload rather than backend persistence.</li></ul></CaseStudySection>
    <CaseStudySection number="07" title="Repository"><a className="repository-link" href={project.repositoryUrl} target="_blank" rel="noreferrer">github.com/GabrielWeidlich/repo-rag-assistant <span aria-hidden="true">↗</span></a></CaseStudySection>
  </div></PageContainer>;
}