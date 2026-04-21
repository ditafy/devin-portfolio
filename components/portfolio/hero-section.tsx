export function HeroSection() {
  return (
    <section id="hero" className="border-b border-border scroll-mt-24">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-16 sm:px-8 sm:py-20 lg:grid-cols-[minmax(0,1.4fr)_minmax(280px,0.8fr)] lg:px-12">
        <div className="space-y-6">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted">
            Hero
          </p>
          <h2 className="max-w-3xl text-4xl font-semibold tracking-tight text-text sm:text-5xl">
            Introduce yourself with one clear headline and a short supporting
            summary.
          </h2>
          <p className="max-w-2xl text-lg leading-8 text-muted">
            This is the main entry point for your portfolio. Replace this copy
            with your role, focus, and the kind of problems you like solving.
          </p>
        </div>

        <div className="rounded-3xl border border-border bg-card p-6">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted">
            Quick info
          </p>
          <dl className="mt-6 space-y-4 text-sm text-muted">
            <div className="flex items-center justify-between gap-4 border-b border-border pb-4">
              <dt>Location</dt>
              <dd className="text-text">Your city</dd>
            </div>
            <div className="flex items-center justify-between gap-4 border-b border-border pb-4">
              <dt>Focus</dt>
              <dd className="text-text">Your discipline</dd>
            </div>
            <div className="flex items-center justify-between gap-4">
              <dt>Status</dt>
              <dd className="text-text">Available</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
