const educationEntries = [
  {
    dates: "09/2024 - 08/2026",
    degree: "Master of Data Science and Decisions",
    institution: "UNSW Sydney",
    details: [
      ["Academic", "WAM: 75 (Distinction)"],
      ["Specialization", "Computational Data Science and Decisions"],
      ["Research Focus", "Multi-agent systems and LLM reliability"],
      ["Relevant Coursework", "Machine Learning, Data Structure and Algorithm, Database System"],
    ],
  },
  {
    dates: "09/2020 - 07/2024",
    degree: "Bachelor of Science",
    institution: "NJUST, Nanjing, China",
    details: [
      ["Major", "Mathematics"],
      ["GPA", "85+ (High Distinction)"],
      ["Awards", "Academic Merit Scholarship (Top 15% of cohort)"],
      ["Achievement", "Admitted through Gaokao ranking in the top 5%"],
    ],
  },
] as const;

export function EducationSection() {
  return (
    <section id="education" className="py-16 scroll-mt-24 sm:py-20">
      <div className="space-y-10 sm:space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-4xl font-semibold tracking-tight text-text sm:text-5xl md:text-6xl">
            Education
          </h2>
        </div>

        <div className="space-y-12 sm:space-y-16">
          {educationEntries.map((entry, index) => (
            <article
              key={`${entry.degree}-${index}`}
              className="grid gap-6 md:grid-cols-[220px_48px_minmax(0,1fr)] md:gap-8"
            >
              <div className="space-y-3 md:pt-1">
                <p className="text-xl font-medium tracking-tight text-accent">
                  {entry.dates}
                </p>
              </div>

              <div className="relative hidden md:block">
                <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-[linear-gradient(180deg,var(--accent-border),rgba(107,141,181,0.18))]" />
                <div className="absolute left-1/2 top-3 h-6 w-6 -translate-x-1/2 rounded-full border border-[var(--accent-border)] bg-[var(--accent-surface-strong)] shadow-[0_0_0_8px_rgba(107,141,181,0.08)]">
                  <div className="absolute left-1/2 top-1/2 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent" />
                </div>
              </div>

              <div className="space-y-5 md:pt-1">
                <div className="space-y-2">
                  <h3 className="text-3xl font-semibold tracking-tight text-text">
                    {entry.degree}
                  </h3>
                  <p className="text-xl tracking-tight text-accent">
                    {entry.institution}
                  </p>
                </div>

                <div className="border-t border-border pt-5">
                  <dl className="space-y-5">
                    {entry.details.map(([label, value]) => (
                      <div
                        key={`${entry.degree}-${label}`}
                        className="grid gap-2 sm:grid-cols-[180px_minmax(0,1fr)] sm:gap-8"
                      >
                        <dt className="text-base text-muted">{label}</dt>
                        <dd className="text-base leading-8 text-text">
                          {value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
