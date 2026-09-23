export type Project = {
  slug: string;
  name: string;
  summary: string;
  category: string;
  repositoryUrl?: string;
  featured: boolean;
};

export const projects: Project[] = [
    { slug: "mentoria", name: "MentorIA", summary: "An academic AI/RAG platform developed as a Software Engineering final course project.", category: "AI / RAG", repositoryUrl: "https://github.com/UniPFC/MentorIA", featured: true },
  { slug: "repo-rag-assistant", name: "Repo RAG Assistant", summary: "A local AI assistant that indexes software repositories and answers questions using retrieval-augmented generation.", category: "AI / RAG", repositoryUrl: "https://github.com/GabrielWeidlich/repo-rag-assistant", featured: true },
  { slug: "news-finder-crawler", name: "News-Finder-Crawler", summary: "A Python crawler that collects news links and content from multiple websites and stores the results in PostgreSQL.", category: "Automation / Web Scraping", repositoryUrl: "https://github.com/GabrielWeidlich/news-finder-crawler", featured: true },
  { slug: "bible-chat-ia", name: "Bible-Chat-IA", summary: "A full-stack Bible chat application that sends questions to Gemini with session-based conversation history in a .NET API and Next.js frontend.", category: "AI / Full Stack", repositoryUrl: "https://github.com/GabrielWeidlich/Bible-Chat-IA", featured: false },
  { slug: "nodenotes", name: "NodeNotes", summary: "A Node.js MVC application built as a learning project, using Express, Handlebars, and Sequelize.", category: "Node.js / Full Stack", repositoryUrl: "https://github.com/GabrielWeidlich/NodeNotes", featured: false },
  { slug: "pokeapi-project", name: "PokeAPI-Project", summary: "An API integration project built as a learning exercise, consuming the public PokeAPI to list and display Pokémon data.", category: "Web Development", repositoryUrl: "https://github.com/GabrielWeidlich/PokeAPI-Project", featured: false },
];

export const featuredProjects = projects.filter((project) => project.featured);

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}