import {
  AboutSection,
  ContentSection,
  EducationSection,
  ExtracurricularsSection,
  HeroSection,
  OpeningScreen,
  ProjectsSection,
  SectionShell,
  SkillsSection,
} from "@/components/portfolio";

const portfolioSections = [
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
        <EducationSection />
        <AboutSection />
        <ExtracurricularsSection />
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
