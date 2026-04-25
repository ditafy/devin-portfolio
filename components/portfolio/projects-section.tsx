const featuredProjects = [
  {
    title: "AI Meeting Transcription & Summarization System",
    summary:
      "Built a full-stack meeting workflow that transforms raw audio into structured minutes, reducing manual note-taking effort by ~50% for student society operations.",
    problem:
      "Manual meeting notes were inconsistent, time-consuming, and difficult to standardize across student society operations.",
    solution:
      "Developed a full-stack pipeline that converts meeting audio into structured summaries with agenda, key decisions, action items.",
    impact:
      "Placeholder text for the measurable result, impact, or takeaway from the work.",
    tags: ["Python", "FastAPI", "Speech to Text", "NLP Pipeline", "REST API"],
    githubLink: 'https://github.com/ditafy/minutes-generator',
  },
  {
    title: "Multi-Agent Debate System for Misinformation Detection",
    summary:
      "A research project exploring how latent space disagreement between debating LLM agents relates to prediction errors in misinformation detection.",
    problem:
      "Multi-agent debate can improve reasoning, but incorrect predictions are still hard to detect before deployment.",
    solution:
      "Measured disagreement in agents’ final layer during debate and analyzed its relationship with final prediction errors.",
    impact:
      "Placeholder text for the measurable result, impact, or takeaway from the work.",
    tags: ["Python", "PyTorch", "LLMs", "Multi-Agent System", "Latent Space"],
    githubLink: 'https://github.com/ditafy/ed2d-latent-disagreement',
  },
] as const;

const supportingProjects = [
  {
    title: "NSW Opal Tap On/Off Usage Dashboard",
    summary:
      "Built an interactive dashboard analyzing Opal transport usage patterns across time, location, and transport modes in NSW.",
    tags: ["R", "Shiny", "Data Visualization"],
    linkLabel: "View project",
  },
  {
    title: "Route Planning System",
    summary:
      "Implemented a weighted directed graph and shortest path search system to optimize route planning across multiple locations and transport paths.",
    tags: ["C", "Data Structures", "Graph Theory"],
    linkLabel: "View project",
  },
  {
    title: "Portfolio Website",
    summary:
      "Designed and built a personal portfolio website with Next.js and Tailwind CSS to showcase projects, technical work, and professional experience.",
    tags: ["Next.js", "TypeScript", "Frontend"],
    linkLabel: "View project",
  },
] as const;

function FeaturedProjectCard({
  title,
  summary,
  problem,
  solution,
  tags,
  githubLink,
}: (typeof featuredProjects)[number]) {
  return (
    <article className="rounded-[2rem] border border-border bg-card p-6 sm:p-7">
      <div className="space-y-6">
        <div className="space-y-4">
          <div className="space-y-3">
            <h3 className="max-w-3xl text-2xl font-semibold tracking-tight text-text sm:text-[2rem] sm:leading-[1.2]">
              {title}
            </h3>
            <p className="max-w-4xl text-sm leading-7 text-muted sm:text-base">
              {summary}
            </p>
          </div>
        </div>

        <div className="grid gap-6 border-t border-border pt-6 md:grid-cols-2">
          <div className="space-y-2">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
              Problem
            </p>
            <p className="text-sm leading-7 text-muted">{problem}</p>
          </div>
          <div className="space-y-2 border-border md:border-l md:pl-6">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
              Solution
            </p>
            <p className="text-sm leading-7 text-muted">{solution}</p>
          </div>
        </div>

        <div className="space-y-3 border-t border-border pt-6">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
            Tech stack
          </p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border bg-surface/60 px-3 py-1.5 text-xs text-text"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
          <div className="inline-flex min-h-9 items-center gap-2 rounded-xl border border-border px-4 text-sm text-text transition-colors hover:border-[var(--accent-border)] hover:text-accent">
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <img src='/GitHub_Invertocat_White.png' alt='GitHub Icon' className="h-4 w-4"/>
          </div>
        </div>
      </div>
    </article>
  );
}

function SupportingProjectCard({
  title,
  summary,
  tags,
  linkLabel,
}: (typeof supportingProjects)[number]) {
  return (
    <article className="rounded-[1.75rem] border border-border bg-card p-5 sm:p-6">
      <div className="space-y-5">

        <div className="space-y-3">
          <h3 className="text-2xl font-semibold tracking-tight text-text">
            {title}
          </h3>
          <p className="text-sm leading-7 text-muted">{summary}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border bg-surface/60 px-3 py-1.5 text-xs text-text"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="py-16 scroll-mt-24 sm:py-20">
      <div className="space-y-8 sm:space-y-10">
        <div className="max-w-3xl space-y-4">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
            Selected work
          </p>
          <h2 className="text-4xl font-semibold tracking-tight text-text sm:text-5xl">
            Projects
          </h2>
          <p className="text-base leading-8 text-muted sm:text-lg">
            I build systems around AI, software engineering, 
            and practical problem solving, with a focus on reliability, 
            usability, and real world impact.
          </p>
        </div>

        <div className="grid gap-6 xl:grid-cols-2">
          {featuredProjects.map((project) => (
            <FeaturedProjectCard key={project.title} {...project} />
          ))}
        </div>

        <div className="space-y-5 pt-2">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
            More projects
          </p>
          <div className="grid gap-6 lg:grid-cols-3">
            {supportingProjects.map((project) => (
              <SupportingProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>

        <article className="rounded-[2rem] border border-border bg-card p-6 sm:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-start gap-5">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-border bg-surface/60 text-2xl text-text">
              <img src='/GitHub_Invertocat_White.png' alt='GitHub Icon' className="h-8 w-8"/>
              </div>
              <div className="max-w-3xl space-y-2">
                <h3 className="text-2xl font-semibold tracking-tight text-text">
                  More projects and experiments
                </h3>
                <p className="text-base leading-7 text-muted">
                  Experiments, research work, and the messy process behind the polished systems.
                </p>
              </div>
            </div>

            <a href="https://github.com/ditafy" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center rounded-xl border border-border px-5 text-sm text-text transition-colors hover:border-[var(--accent-border)] hover:text-accent">
              Visit GitHub
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}
