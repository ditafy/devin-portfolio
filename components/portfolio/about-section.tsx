import Image from "next/image";

const hobbyItems = [
  "Convincing myself leg day is optional",
  "Rearranging my gym schedule like it’s a production deployment",
  "Believing “just one quick fix” will only take five minutes",
] as const;

function AboutBlock({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-1 pt-6 sm:pt-7">
      <div className="flex items-center gap-4">
        <h3 className="text-2xl font-semibold tracking-tight text-text">
          {title}
        </h3>
      </div>
      {children}
    </section>
  );
}

export function AboutSection() {
  return (
    <section id="about" className="py-16 scroll-mt-24 sm:py-20">
      <div className="space-y-10 sm:space-y-12">
        <div className="max-w-3xl space-y-4">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
            About Me
          </p>
          <h2 className="text-4xl font-semibold tracking-tight text-text sm:text-5xl md:text-6xl">
            Hey, I&apos;m Devin
          </h2>
          <p className="max-w-2xl text-base leading-8 text-muted sm:text-lg">
            I build things, solve problems, meet people, stay active and repeat.
          </p>
        </div>

        <div className="grid gap-10 xl:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] xl:gap-16">
          <div className="space-y-5 xl:mt-4">
            <div className="overflow-hidden rounded-[2rem] border border-border bg-card">
              <div className="relative aspect-[4/5]">
                <Image src="/DSC_2837.JPG" alt="Profile photo" fill className="object-cover"/> 
                <div className="flex h-full items-end">
                  <div className="space-y-3">
                    <div className="h-3 w-24 rounded-full bg-border/80" />
                    <div className="h-3 w-36 rounded-full bg-border/60" />
                    <div className="h-3 w-20 rounded-full bg-border/50" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <AboutBlock title="Who I am">
              <div className="space-y-4 text-base leading-8 text-muted sm:text-lg">
                <p>
                  Software engineer by habit, data scientist by training, and permanently curious by default.
                </p>
              </div>
            </AboutBlock>

            <AboutBlock title="Beyond the keyboard">
              <div className="space-y-4 text-base leading-8 text-muted sm:text-lg">
                <p>
                  Outside of code, I spend a lot of time in the gym, play basketball, baseball, tennis, and swim whenever I can.
                </p>
                <p>
                  I also enjoy building communities, which explains how I somehow ended up running career events for 500+ students.
                </p>
              </div>
            </AboutBlock>

            <AboutBlock title="Things I probably spend too much time on">
              <ul className="grid gap-x-8 gap-y-3 text-base leading-8 text-muted sm:text-lg">
                {hobbyItems.map((item, index) => (
                  <li key={`${item}-${index}`} className="flex items-start gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </AboutBlock>
          </div>
        </div>
      </div>
    </section>
  );
}
