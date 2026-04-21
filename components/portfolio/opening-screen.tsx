export function OpeningScreen() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-bg">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(148,163,184,0.10),_transparent_45%)]" />

      <div className="relative mx-auto grid min-h-screen w-full max-w-6xl grid-rows-[minmax(4rem,1fr)_auto_minmax(8rem,1.2fr)] px-6 py-8 sm:grid-rows-[minmax(5rem,1fr)_auto_minmax(8rem,1.35fr)] sm:px-8 sm:py-10 lg:px-12">
        <div className="row-start-2 mx-auto max-w-4xl text-center">
          <h1 className="text-balance text-5xl font-semibold tracking-tight text-text sm:text-6xl lg:text-7xl">
            I turn ideas into systems. Sometimes they even work on the first
            try.
          </h1>
        </div>

        <div className="row-start-3 mt-10 grid items-end gap-6 sm:mt-12 sm:grid-cols-3">
          <div className="hidden sm:block" />

          <a
            href="#hero"
            className="flex flex-col items-center gap-2 self-end justify-self-center text-sm text-muted hover:text-accent"
          >
            <span>Scroll down</span>
            <span aria-hidden="true" className="text-lg leading-none">
              ↓
            </span>
          </a>

          <aside className="max-w-[15rem] justify-self-end rounded-2xl border border-border bg-card/90 px-4 py-3 text-right text-xs leading-5 text-muted backdrop-blur sm:max-w-xs sm:text-sm">
            <p>
              She is, fortunately, far more reliable than most engineers I have
              encountered.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
