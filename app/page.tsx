import {
  ContentSection,
  HeroSection,
  OpeningScreen,
  SectionShell,
} from "@/components/portfolio";

const portfolioSections = [
  {
    id: "projects",
    eyebrow: "Selected work",
    title: "Projects",
    description:
      "Use this section to highlight a few strongest projects with clear outcomes, responsibilities, and links.",
  },
  {
    id: "about",
    eyebrow: "Background",
    title: "About",
    description:
      "Add a short personal summary that explains who you are, what you focus on, and what kind of work you enjoy.",
  },
  {
    id: "skills",
    eyebrow: "Capabilities",
    title: "Skills",
    description:
      "List your core tools, technical strengths, and areas where you can contribute immediately.",
  },
  {
    id: "extracurriculars",
    eyebrow: "Beyond coursework",
    title: "Extracurriculars",
    description:
      "Reserve this space for leadership, clubs, volunteering, competitions, or independent initiatives.",
  },
  {
    id: "contact",
    eyebrow: "Get in touch",
    title: "Contact",
    description:
      "Add your preferred contact details, location, and any links you want recruiters or collaborators to use.",
  },
] as const;

export default function Home() {
  return (
    <main className="text-text">
      <OpeningScreen />
      <HeroSection />

      <div className="mx-auto flex w-full max-w-6xl flex-col px-6 pb-16 sm:px-8 lg:px-12">
        {portfolioSections.map((section) => (
          <SectionShell
            key={section.id}
            id={section.id}
            eyebrow={section.eyebrow}
            title={section.title}
          >
            <ContentSection description={section.description} />
          </SectionShell>
        ))}
      </div>
    </main>
  );
}
