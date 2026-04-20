type ContentSectionProps = {
  description: string;
};

export function ContentSection({ description }: ContentSectionProps) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
      <p className="max-w-2xl text-base leading-7 text-slate-600">
        {description}
      </p>
    </div>
  );
}
