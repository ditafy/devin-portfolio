const timelineEntries = [
  {
    year: "2025",
    title: "Deputy Head of Career Planning Department",
    organization: "UNSW Chinese Student Association",
    tags: ["15+ Events", "500+ participants"],
  },
  {
    year: "2026",
    title: "Secretary",
    organization: "UNSW Chinese Student Association",
    tags: ["250+ Subcoms", "1k+ Members", "150+ Events"],
  },
  {
    year: "2024 - 2026",
    title: "Retail Associate",
    organization: "NewsXpress Royal Randwick",
    tags: ["Communication", "Time management", "Crisis Handling", "Perseverance"],
  },
] as const;

const narrativeBlocks = [
  {
    title: "From organizing events to building communities",
    intro:'',
    bullets: [
      "Planned and executed 15+ career events, from networking to industry talks and resume workshops",
      "Liaised with 20+ companies and alumni to build meaningful opportunities for students",
    ],
  },
  {
    title: "From events to systems",
    intro:'',
    bullets: [
      "Managed internal operations and cross department coordination across a 250+ subcommittee member organization",
      "Supported 150+ events annually by standardizing workflows, documentation and communication",
    ],
  },
  {
    title: "What I’ve learned",
    intro:
      "Leadership isn't about being the loudest person in the room. It's about creating the structure, trust and environment for others to do their best work.",
    bullets: [],
  },
] as const;

function TimelineCard({
  year,
  title,
  organization,
  tags,
}: (typeof timelineEntries)[number]) {
  return (
    <article className="rounded-[1.75rem] border border-border bg-card px-5 py-5 sm:px-6 sm:py-6">
      <div className="flex gap-4">

        <div className="min-w-0 space-y-3">
          <p className="text-xl font-medium tracking-tight text-accent">{year}</p>
          <div className="space-y-1.5">
            <h3 className="text-2xl font-semibold tracking-tight text-text sm:text-[2rem] sm:leading-[1.2]">
              {title}
            </h3>
            <p className="text-lg text-accent">{organization}</p>
          </div>

          <div className="flex flex-wrap gap-2 pt-1">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-xl border border-border bg-surface/70 px-3 py-2 text-sm text-text"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

function NarrativeBlock({
  title,
  intro,
  bullets,
}: (typeof narrativeBlocks)[number]) {
  return (
    <section className="space-y-4 border-t border-border pt-6 first:border-t-0 first:pt-0">
      <div className="flex items-start gap-4">
        <div className="space-y-3">
          <h3 className="text-2xl font-semibold tracking-tight text-text">
            {title}
          </h3>
          <p className="max-w-2xl text-base leading-8 text-muted sm:text-lg">
            {intro}
          </p>
          {bullets.length ? (
            <ul className="space-y-3 pt-1 text-base leading-8 text-muted sm:text-lg">
              {bullets.map((bullet, index) => (
                <li key={`${title}-${index}`} className="flex items-start gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                  />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </section>
  );
}

export function ExtracurricularsSection() {
  return (
    <section id="extracurriculars" className="py-16 scroll-mt-24 sm:py-20">
      <div className="space-y-10 sm:space-y-12">
        <div className="max-w-3xl space-y-4">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
            Extracurriculars
          </p>
          <h2 className="text-4xl font-semibold tracking-tight text-text sm:text-5xl md:text-6xl">
            When I'm not coding
          </h2>
        </div>

        <div className="grid gap-10 xl:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] xl:gap-16">
          <div className="relative space-y-8 pl-10 sm:pl-12">
            <div className="absolute bottom-0 left-4 top-1 w-px bg-[linear-gradient(180deg,var(--accent-border),rgba(107,141,181,0.18))] sm:left-5" />
            {timelineEntries.map((entry, index) => (
              <div key={`${entry.title}-${index}`} className="relative">
                <div className="absolute left-[-1.625rem] top-7 h-5 w-5 rounded-full border-2 border-accent bg-bg shadow-[0_0_0_4px_rgba(107,141,181,0.10)] sm:left-[-1.875rem]" />
                <TimelineCard {...entry} />
              </div>
            ))}
          </div>

          <div className="space-y-6 pt-1">
            {narrativeBlocks.map((block) => (
              <NarrativeBlock key={block.title} {...block} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
