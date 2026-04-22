type ContentSectionProps = {
  description: string;
};

export function ContentSection({ description }: ContentSectionProps) {
  return (
    <div className="rounded-3xl border border-border bg-card p-6 sm:p-8">
      <p className="max-w-2xl text-base leading-7 text-muted">
        {description}
      </p>
    </div>
  );
}
