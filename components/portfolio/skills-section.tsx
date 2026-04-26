const skillCategories = [
  {
    title: "Programming",
    items: ["Python", "C/C++", "SQL", "JavaScript", "R"],
  },
  {
    title: "Backend & System",
    items: ["FastAPI", "Rest APIs", "Data Structure", "Algorithms", "Git", "System Design"],
  },
  {
    title: "Data & AI",
    items: ["Machine Learning", "NLP", "LLMs", "Multi-Agent System", "PyTorch", "Data Analysis", "Statistical Modelling"],
  },
  {
    title: "Databases & Big Data",
    items: ["MySQL", "PostgreSQL", "Spark", "Data Pipeline"],
  },
  {
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML", "CSS"],
  },
  {
    title: "Tools & Workflow",
    items: ["CI/CD Pipelines", "Docker", "Git", "GitHub"],
  },
] as const;

export function SkillsSection() {
  return (
    <section id="skills" className="py-16 scroll-mt-24 sm:py-20">
      <div className="space-y-10 sm:space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-4xl font-semibold tracking-tight text-text sm:text-5xl md:text-6xl">
            Skills
          </h2>
        </div>


        <div className="grid gap-x-10 gap-y-12 md:grid-cols-2 xl:grid-cols-3">
          {skillCategories.map((category) => (
            <article key={category.title} className="space-y-5">
              <h3 className="text-2xl font-semibold tracking-tight text-text">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-x-5 gap-y-3">
                {category.items.map((item, index) => (
                  <span
                    key={`${category.title}-${index}`}
                    className="inline-flex items-center gap-2 text-base text-muted"
                  >
                    <span
                      aria-hidden="true"
                      className="h-1.5 w-1.5 rounded-full bg-accent"
                    />
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
