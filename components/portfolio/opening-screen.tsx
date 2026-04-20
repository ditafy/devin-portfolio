const sectionLinks = [
  { label: "Hero", href: "#hero" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Extracurriculars", href: "#extracurriculars" },
  { label: "Contact", href: "#contact" },
] as const;

export function OpeningScreen() {
  return (
    <section className="border-b border-slate-200">
      <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-between px-6 py-10 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between gap-4 text-sm text-slate-500">
          <span>Portfolio</span>
          <span>Base structure</span>
        </div>

        <div className="max-w-3xl space-y-6 py-16">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
            Opening screen
          </p>
          <h1 className="text-5xl font-semibold tracking-tight text-slate-900 sm:text-6xl">
            A simple one-page portfolio scaffold.
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-slate-600">
            The structure is in place for content-first iteration: vertical
            sections, reusable wrappers, and room to grow without forcing a
            design system too early.
          </p>
        </div>

        <nav aria-label="Section navigation" className="flex flex-wrap gap-3 pb-2">
          {sectionLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-700 transition hover:border-slate-300 hover:text-slate-900"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </section>
  );
}
