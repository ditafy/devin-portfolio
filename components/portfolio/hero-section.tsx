export function HeroSection() {
  return (
    <section id="hero" className="scroll-mt-24">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-16 sm:px-8 sm:py-20 lg:grid-cols-[minmax(0,1.4fr)_minmax(280px,0.8fr)] lg:px-12">
        <div className="space-y-6">
          <h2 className="max-w-3xl text-4xl font-semibold tracking-tight text-text sm:text-5xl">
            Software, data, and systems.
          </h2>
          <p className="max-w-2xl text-lg leading-8 text-muted">
            I&apos;m currently studying Data Science at UNSW, building projects
            at the intersection of software, AI, and real-world problem
            solving.
          </p>
          <p className="max-w-2xl text-lg leading-8 text-muted">
            From LLM-based systems to workflow automation tools, I focus on
            creating things that are not only functional, but genuinely useful.
          </p>
        </div>

        <div className="rounded-3xl border border-border bg-card p-6">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted">
            Quick info
          </p>
          <dl className="mt-6 space-y-4 text-sm text-muted">
            <div className="flex items-center justify-between gap-4 border-b border-border pb-4">
              <dt>Based in</dt>
              <dd className="text-right text-text">Sydney, Australia</dd>
            </div>
            <div className="flex items-center justify-between gap-4 border-b border-border pb-4">
              <dt>Study</dt>
              <dd className="text-right text-text">
                Master of Data Science, UNSW
              </dd>
            </div>
            <div className="flex items-center justify-between gap-4 border-b border-border pb-4">
              <dt>Focus</dt>
              <dd className="text-right text-text">
                Software Engineering / Data / AI Systems
              </dd>
            </div>
            <div className="flex items-center justify-between gap-4">
              <dt>Status</dt>
              <dd className="text-right text-text">
                Open to relocation across Australia
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
