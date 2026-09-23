import { PageContainer } from "@/components/layout/page-container";
import { contacts } from "@/data/contacts";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <PageContainer>
      <div className="shell">
        <section className="page-intro">
          <p className="eyebrow">Open channels</p>
          <h1>Let&apos;s connect.</h1>
          <p>Interested in my work or want to get in touch? Feel free to reach out through any of the channels below.</p>
          <div className="contact-links">
            {contacts.map((contact) => (
              <a className="contact-link" href={contact.href} key={contact.label} {...(contact.external ? { target: "_blank", rel: "noreferrer" } : {})}>
                <span className="contact-icon" aria-hidden="true">{contact.icon}</span>
                <span>{contact.label}</span>
                <strong>{contact.name} <span aria-hidden="true">↗</span></strong>
              </a>
            ))}
          </div>
        </section>
      </div>
    </PageContainer>
  );
}