import type { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  className?: string;
  title?: string;
};

type IconCardProps = {
  icon: "scan" | "shield" | "check";
  title: string;
  text: string;
};

type ResourceCardProps = {
  date: string;
  label: string;
  title: string;
  tone: "blue" | "orange" | "green";
};

const icons: Record<IconCardProps["icon"], ReactNode> = {
  scan: (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M7 3H5a2 2 0 0 0-2 2v2" />
      <path d="M17 3h2a2 2 0 0 1 2 2v2" />
      <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
      <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
      <path d="M8 12h8" />
    </svg>
  ),
  shield: (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M12 3 5 6v5c0 5 3.5 8.5 7 10 3.5-1.5 7-5 7-10V6l-7-3Z" />
    </svg>
  ),
  check: (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="8" />
      <path d="m8.5 12.5 2.2 2.2 4.8-5.4" />
    </svg>
  ),
};

export function TopBar() {
  return (
    <header className="topbar">
      <a className="brand" href="/">
        Townino
      </a>
      <nav aria-label="Main navigation">
        <a href="#tokens">Tokens</a>
        <a href="#components">Components</a>
        <a href="#resources">Resources</a>
      </nav>
      <a className="button button-dark" href="#callout">
        Request review
      </a>
    </header>
  );
}

export function Section({ children, className = "", title }: SectionProps) {
  return (
    <section
      className={`section ${className}`}
      id={title === "Core style tokens" ? "tokens" : undefined}
    >
      <div className="container">
        {title ? <h2>{title}</h2> : null}
        {children}
      </div>
    </section>
  );
}

export function TokenGrid() {
  return (
    <div className="token-grid" aria-label="Design tokens">
      <div className="token-card">
        <span className="swatch swatch-ink" />
        <strong>Ink</strong>
        <p>Primary text, high-contrast buttons, and table headers.</p>
      </div>
      <div className="token-card">
        <span className="swatch swatch-surface" />
        <strong>Surface</strong>
        <p>Muted page bands, CTA panels, and product mock backgrounds.</p>
      </div>
      <div className="token-card">
        <span className="swatch swatch-line" />
        <strong>Line</strong>
        <p>Thin card borders, table rules, and rail dividers.</p>
      </div>
      <div className="token-card">
        <span className="swatch swatch-sky" />
        <strong>Daybreak accent</strong>
        <p>Soft image fields and resource thumbnails.</p>
      </div>
    </div>
  );
}

export function IconCard({ icon, title, text }: IconCardProps) {
  return (
    <article className="icon-card" id={title === "Ship common blocks" ? "components" : undefined}>
      <span className="line-icon">{icons[icon]}</span>
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}

export function FeatureShowcase() {
  return (
    <section className="feature-band">
      <div className="container feature-container">
        <h2>Deploy product clarity inside every page</h2>
        <div className="feature-layout">
          <aside className="feature-rail" aria-label="Feature examples">
            <div className="rail-item rail-item-active">
              <h3>Clarify the offer</h3>
              <p>Lead with the one decision visitors need to make next.</p>
            </div>
            <div className="rail-link">Reduce support questions</div>
            <div className="rail-link">Guide conversion paths</div>
          </aside>

          <div className="product-visual" aria-label="Product visual preview">
            <div className="mock-window">
              <div className="window-controls" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              <div className="mock-content">
                <p>Reviewing page structure and marketing workflow</p>
                <div className="mock-lines">
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AccessTable() {
  return (
    <section className="section">
      <div className="container narrow-center">
        <h2>Choose the right level of reuse</h2>
        <p>
          Start with the smallest primitives, then compose the marketing page
          section by section.
        </p>
        <div className="button-row">
          <a className="button button-dark" href="#callout">
            Request page review
          </a>
          <a className="button button-soft" href="#resources">
            View resources
          </a>
        </div>
        <div className="table-wrap" role="region" aria-label="Reuse levels">
          <table>
            <thead>
              <tr>
                <th>Layer</th>
                <th>What changes</th>
                <th>Use cases</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Tokens</td>
                <td>Typography, spacing, colors, borders, and radii.</td>
                <td>Any section or page foundation.</td>
              </tr>
              <tr>
                <td>Primitives</td>
                <td>Buttons, cards, chips, tables, and layout containers.</td>
                <td>Fast marketing page assembly.</td>
              </tr>
              <tr>
                <td>Sections</td>
                <td>Feature panels, quotes, resources, CTAs, and footer groups.</td>
                <td>Launch pages and campaign variants.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export function TrustQuote() {
  const brands = ["Cloud", "Cities", "Teams", "Ops", "Finance", "Health"];

  return (
    <section className="quote-band">
      <div className="container quote-container">
        <h2>Trusted patterns for focused marketing pages</h2>
        <div className="chip-list" aria-label="Partner categories">
          {brands.map((brand, index) => (
            <span className={index === 0 ? "chip chip-active" : "chip"} key={brand}>
              {brand}
            </span>
          ))}
        </div>
        <blockquote>
          "The strongest page systems feel almost invisible: clear hierarchy,
          quiet components, and enough visual detail to make each section worth
          reading."
        </blockquote>
        <p className="quote-credit">Townino design note</p>
      </div>
    </section>
  );
}

export function ResourceCard({ date, label, title, tone }: ResourceCardProps) {
  return (
    <article className="resource-card" id={tone === "blue" ? "resources" : undefined}>
      <div className={`resource-art resource-art-${tone}`}>
        <span>{title}</span>
      </div>
      <h3>{title}</h3>
      <p>
        <strong>{label}</strong>
        <span>{date}</span>
      </p>
    </article>
  );
}

export function Callout() {
  return (
    <section className="section" id="callout">
      <div className="container">
        <div className="callout">
          <h2>Prepare the Townino marketing page</h2>
          <p>
            Use these primitives as the baseline for upcoming product, customer,
            and launch pages.
          </p>
          <a className="button button-soft" href="#tokens">
            Back to tokens
          </a>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <h3>Product</h3>
          <a href="/">Overview</a>
          <a href="/">Use cases</a>
          <a href="/">Roadmap</a>
        </div>
        <div>
          <h3>Company</h3>
          <a href="/">About</a>
          <a href="/">Stories</a>
          <a href="/">Contact</a>
        </div>
        <div>
          <h3>Resources</h3>
          <a href="/">Docs</a>
          <a href="/">Design system</a>
          <a href="/">Launch notes</a>
        </div>
        <div>
          <h3>More</h3>
          <a href="/">News</a>
          <a href="/">Support</a>
          <a href="/">Privacy</a>
        </div>
      </div>
    </footer>
  );
}
