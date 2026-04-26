import {
  ContentSection,
  HeroSection,
  OpeningScreen,
  ProjectsSection,
  SectionShell,
  SkillsSection,
} from "@/components/portfolio";

const portfolioSections = [
  {
    id: "education",
    eyebrow: "Academic background",
    title: "Education",
    description:
      "Outline your degree, institution, relevant coursework, and any academic highlights worth surfacing.",
  },
  {
    id: "about",
    eyebrow: "Background",
    title: "About Me",
    description:
      "Add a short personal summary that explains who you are, what you focus on, and what kind of work you enjoy.",
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
        <ProjectsSection />
        <SkillsSection />
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
