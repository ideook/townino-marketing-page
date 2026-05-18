import {
  AccessTable,
  Callout,
  FeatureShowcase,
  Footer,
  IconCard,
  ResourceCard,
  Section,
  TokenGrid,
  TopBar,
  TrustQuote,
} from "@/components/daybreak-system";

const cards = [
  {
    icon: "scan",
    title: "Focus the page",
    text: "Keep the first screen direct, then let proof, product detail, and conversion sections carry the page.",
  },
  {
    icon: "shield",
    title: "Ship common blocks",
    text: "Use one token set for typography, surfaces, borders, buttons, tables, and repeated marketing sections.",
  },
  {
    icon: "check",
    title: "Verify in browser",
    text: "Treat the design system as a rendered product, with screenshots and layout checks before reuse.",
  },
] as const;

const resources = [
  {
    tone: "blue",
    title: "Product Narrative",
    label: "Messaging",
    date: "May 18, 2026",
  },
  {
    tone: "orange",
    title: "Launch Checklist",
    label: "Operations",
    date: "May 18, 2026",
  },
  {
    tone: "green",
    title: "Customer Story",
    label: "Growth",
    date: "May 18, 2026",
  },
] as const;

export default function Home() {
  return (
    <>
      <TopBar />
      <main>
        <Section className="intro-section">
          <p className="eyebrow">Design system preview</p>
          <h1>Open, quiet, editorial marketing blocks for Townino.</h1>
          <div className="article-copy">
            <p>
              This page distills the Daybreak reference into a small set of
              reusable primitives: centered editorial sections, thin bordered
              cards, compact pills, restrained tables, visual resource cards,
              and low-friction calls to action.
            </p>
            <p>
              The system intentionally stays modest. It avoids a large component
              framework and keeps the core styling in a single global stylesheet
              so the marketing page can move quickly.
            </p>
          </div>
        </Section>

        <Section title="Core style tokens">
          <TokenGrid />
        </Section>

        <Section title="How to use these blocks">
          <div className="icon-grid">
            {cards.map((card) => (
              <IconCard key={card.title} {...card} />
            ))}
          </div>
        </Section>

        <FeatureShowcase />
        <AccessTable />
        <TrustQuote />

        <Section title="Explore reusable resource cards" className="resource-section">
          <div className="resource-grid">
            {resources.map((resource) => (
              <ResourceCard key={resource.title} {...resource} />
            ))}
          </div>
        </Section>

        <Callout />
      </main>
      <Footer />
    </>
  );
}
