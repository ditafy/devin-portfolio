import {
  AboutSection,
  ContactSection,
  EducationSection,
  ExtracurricularsSection,
  HeroSection,
  OpeningScreen,
  ProjectsSection,
  SkillsSection,
} from "@/components/portfolio";

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
        <ContactSection />
      </div>
    </main>
  );
}
