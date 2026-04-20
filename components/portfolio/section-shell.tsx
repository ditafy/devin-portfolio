import type { ReactNode } from "react";

type SectionShellProps = {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
};

export function SectionShell({
  id,
  eyebrow,
  title,
  children,
}: SectionShellProps) {
  return (
    <section
      id={id}
      className="border-t border-slate-200 py-16 scroll-mt-24 sm:py-20"
    >
      <div className="grid gap-8 md:grid-cols-[220px_minmax(0,1fr)] md:gap-12">
        <div className="space-y-3">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
            {eyebrow}
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
            {title}
          </h2>
        </div>

        <div>{children}</div>
      </div>
    </section>
  );
}
