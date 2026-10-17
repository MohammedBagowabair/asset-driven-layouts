import { schedule } from "./data";
import { Eyebrow, Reveal } from "./Reveal";

export function Program() {
  return (
    <section id="program" className="bg-earth py-24 text-primary-foreground md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <Reveal className="grid gap-6 md:grid-cols-12">
          <div className="md:col-span-7">
            <Eyebrow className="text-sand">The retreat journey</Eyebrow>
            <h2 className="mt-6 text-4xl md:text-6xl">Your days, <em>gently unfolding.</em></h2>
          </div>
          <p className="self-end text-sand/80 md:col-span-5">Five days, one unhurried rhythm: practice in the morning, space in the afternoon, gathering around the table each evening.</p>
        </Reveal>
        <ol className="mt-16 md:mt-20">
          {schedule.map((d, i) => (
            <Reveal as="li" key={d.day} className="grid gap-6 border-t border-sand/25 py-10 md:grid-cols-12 md:gap-10">
              <div className="flex items-baseline gap-4 md:col-span-4 md:block">
                <span className="font-serif text-5xl italic text-terracotta md:text-6xl">0{i + 1}</span>
                <div className="md:mt-3">
                  <h3 className="text-3xl">{d.day}, {d.date}</h3>
                  <p className="eyebrow mt-2 text-sand/70">{d.title}</p>
                </div>
              </div>
              <dl className="md:col-span-8">
                {d.items.map(([t, a]) => (
                  <div key={t + a} className="grid grid-cols-[7rem_1fr] gap-4 border-b border-sand/15 py-3 last:border-0 sm:grid-cols-[9rem_1fr]">
                    <dt className="text-sm tracking-wider text-sand/70 tabular-nums">{t}</dt>
                    <dd className="font-serif text-xl">{a}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          ))}
        </ol>
        <p className="mt-6 border-t border-sand/25 pt-6 text-sm text-sand/70">The program may change slightly. Participation in all activities is voluntary — join what serves you.</p>
      </div>
    </section>
  );
}
