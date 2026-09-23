import type { ReactNode } from "react";

export function CaseStudySection({ number, title, children }: { number: string; title: string; children: ReactNode }) {
  return (
    <section className="case-study-section">
      <div className="case-study-label"><span>{number}</span><h2>{title}</h2></div>
      <div className="case-study-content">{children}</div>
    </section>
  );
}

export function RagPipeline() {
  const steps = [
    ["01", "Repository URL", "HTTPS GitHub or GitLab URL"],
    ["02", "Repository cloner", "Validates the host and performs a shallow clone"],
    ["03", "File processing", "Loads supported files from the temporary clone"],
    ["04", "Chunking", "Splits source files into token-sized chunks"],
    ["05", "Embeddings", "Ollama nomic-embed-text creates vectors"],
    ["06", "Qdrant", "Stores chunks in a repository-isolated collection"],
    ["07", "Retrieval", "Searches relevant chunks for a question"],
    ["08", "Answer", "Ollama qwen2.5-coder:7b uses context and history"],
  ];

  return <div className="rag-pipeline" aria-label="Repo RAG Assistant processing pipeline">{steps.map(([number, title, description], index) => <div className="pipeline-step" key={number}><span className="pipeline-number">{number}</span><div><strong>{title}</strong><p>{description}</p></div>{index < steps.length - 1 ? <span className="pipeline-arrow" aria-hidden="true">↓</span> : null}</div>)}</div>;
}

export function ArchitectureDiagram() {
  return (
    <div className="architecture-diagram" aria-label="MentorIA system architecture">
      <div className="architecture-node architecture-user">User</div>
      <div className="architecture-connector" aria-hidden="true">↓</div>
      <div className="architecture-node architecture-frontend">Next.js frontend</div>
      <div className="architecture-connector" aria-hidden="true">↓</div>
      <div className="architecture-node architecture-api">FastAPI API</div>
      <div className="architecture-branches">
        <div><span>PostgreSQL</span><small>Relational persistence</small></div>
        <div><span>Qdrant</span><small>Vector search</small></div>
        <div><span>AI worker</span><small>Async ingestion</small></div>
        <div><span>LLM providers</span><small>Model integrations</small></div>
        <div><span>Pagar.me</span><small>Payment gateway</small></div>
      </div>
    </div>
  );
}

export function FeatureGrid({ features }: { features: Array<{ title: string; items: string[] }> }) {
  return <div className="feature-grid">{features.map((feature) => <div className="feature-block" key={feature.title}><h3>{feature.title}</h3><ul className="case-study-list">{feature.items.map((item) => <li key={item}>{item}</li>)}</ul></div>)}</div>;
}

export function RagPipelineMentor() {
  const steps = [
    ["01", "Knowledge source", "XLSX or CSV files in the data directory"],
    ["02", "Ingestion", "Seeder or upload flow creates a knowledge base"],
    ["03", "Processing", "Loaders and tokenization prepare the content"],
    ["04", "Embeddings", "Configured embedding provider creates vectors"],
    ["05", "Qdrant", "Vectors and knowledge chunks are persisted"],
    ["06", "Retrieval", "Semantic search and reranking select context"],
    ["07", "LLM", "Configured provider receives the relevant context"],
    ["08", "Response", "The chat flow returns the generated answer"],
  ];

  return <div className="rag-pipeline" aria-label="MentorIA RAG processing pipeline">{steps.map(([number, title, description], index) => <div className="pipeline-step" key={number}><span className="pipeline-number">{number}</span><div><strong>{title}</strong><p>{description}</p></div>{index < steps.length - 1 ? <span className="pipeline-arrow" aria-hidden="true">↓</span> : null}</div>)}</div>;
}

export function CrawlerFlow() {
  const steps = [
    ["01", "News sources", "G1, CNN Brasil, Portal 6 and Terra"],
    ["02", "Browser automation", "Pyppeteer connects to the Browserless Chrome container"],
    ["03", "Link collection", "Source-specific CSS selectors collect article URLs"],
    ["04", "Content extraction", "Title and article content are read from each page"],
    ["05", "PostgreSQL", "News records store the title, summary, link and timestamps"],
  ];

  return <div className="rag-pipeline crawler-flow" aria-label="News-Finder-Crawler processing flow">{steps.map(([number, title, description], index) => <div className="pipeline-step" key={number}><span className="pipeline-number">{number}</span><div><strong>{title}</strong><p>{description}</p></div>{index < steps.length - 1 ? <span className="pipeline-arrow" aria-hidden="true">↓</span> : null}</div>)}</div>;
}

export function BibleChatFlow() {
  const steps = [
    ["01", "User", "The user types a biblical question in the Next.js chat UI"],
    ["02", "Frontend", "The browser sends the question and the session ID to the API"],
    ["03", "Backend API", "ASP.NET Core validates the request and prepares the prompt"],
    ["04", "Conversation history", "The server loads the current session's prior messages"],
    ["05", "Gemini", "The API sends the system prompt, history and current question to Gemini 1.5 Flash"],
    ["06", "Response", "The model answer is returned to the frontend and rendered as markdown"],
  ];

  return <div className="rag-pipeline" aria-label="Bible-Chat-IA processing flow">{steps.map(([number, title, description], index) => <div className="pipeline-step" key={number}><span className="pipeline-number">{number}</span><div><strong>{title}</strong><p>{description}</p></div>{index < steps.length - 1 ? <span className="pipeline-arrow" aria-hidden="true">↓</span> : null}</div>)}</div>;
}

export function NodeNotesFlow() {
  const steps = [
    ["01", "User", "Interacts with the application through standard HTTP requests from the browser"],
    ["02", "Routing & Auth", "Express routes handle requests while Passport.js manages user sessions and authentication"],
    ["03", "Controllers", "Process the business logic and validate data before persistence"],
    ["04", "Database", "Mongoose communicates with MongoDB to store and retrieve user and notes data"],
    ["05", "Views", "Express-Handlebars templates are rendered dynamically with the requested data"],
    ["06", "Response", "The fully rendered HTML page is sent back to the user's browser"],
  ];

  return <div className="rag-pipeline" aria-label="NodeNotes processing flow">{steps.map(([number, title, description], index) => <div className="pipeline-step" key={number}><span className="pipeline-number">{number}</span><div><strong>{title}</strong><p>{description}</p></div>{index < steps.length - 1 ? <span className="pipeline-arrow" aria-hidden="true">↓</span> : null}</div>)}</div>;
}