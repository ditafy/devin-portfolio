export function OpeningScreen() {
  return (
    <section className="relative overflow-hidden bg-bg">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(148,163,184,0.20)_0%,rgba(148,163,184,0.10)_18%,transparent_44%)]" />

      <div className="relative mx-auto grid min-h-screen w-full max-w-6xl grid-rows-[minmax(4rem,1fr)_auto_minmax(8rem,1.2fr)] px-6 py-8 sm:grid-rows-[minmax(5rem,1fr)_auto_minmax(8rem,1.35fr)] sm:px-8 sm:py-10 lg:px-12">
        <div className="row-start-2 mx-auto max-w-4xl text-center">
          <h1 className="text-balance text-5xl font-medium leading-[1.12] tracking-[-0.03em] text-text sm:text-6xl lg:text-7xl">
            <span>I turn ideas into systems.</span>
            <br />
            <span>Sometimes they even work on the first try.</span>
          </h1>
        </div>

        <div className="row-start-3 mt-10 grid items-end gap-6 sm:mt-12 sm:grid-cols-3">
          <div className="hidden sm:block" />

          <a
            href="#hero"
            aria-label="Scroll to hero section"
            className="flex items-center self-end justify-self-center text-muted hover:text-accent"
          >
            <span aria-hidden="true" className="opening-arrow text-lg leading-none">
              ↓
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
