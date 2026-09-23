import { contacts } from "@/data/contacts";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-inner">
        <p>Gabriel Weidlich Santos</p>
        <p>Software engineering student · UniEVANGÉLICA</p>
        <nav className="footer-links" aria-label="Contact links">
          {contacts.filter((contact) => ["LinkedIn", "Personal GitHub", "Email"].includes(contact.label)).map((contact) => (
            <a href={contact.href} key={contact.label} aria-label={`${contact.label}: ${contact.name}`} {...(contact.external ? { target: "_blank", rel: "noreferrer" } : {})}>
              {contact.label === "Personal GitHub" ? "GitHub" : contact.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}