import { images } from "./data";
import { Eyebrow, Reveal } from "./Reveal";

const highlights = [
  "Boutique hotel in a traditional stone townhouse",
  "Quiet village setting away from tourist routes",
  "Shared double rooms with separate single beds, or single rooms",
  "Garden courtyard and pool for slow afternoons",
  "Daily vegan breakfast and dinner",
];

export function Venue() {
  return (
    <section id="venue" className="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-36">
      <div className="grid items-start gap-12 md:grid-cols-12 md:gap-16">
        <Reveal className="img-zoom md:col-span-6">
          <img src={images.venue} alt="Stone facade of a Mallorcan village hotel with bougainvillea" width={1152} height={1408} loading="lazy" className="aspect-[4/5] w-full object-cover" />
        </Reveal>
        <div className="md:col-span-6 md:pt-10">
          <Reveal>
            <Eyebrow>Your home in Mallorca</Eyebrow>
            <h2 className="mt-6 text-4xl leading-[1.05] md:text-6xl">A peaceful hideaway at <em>Hotel Curolla</em></h2>
            <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
              Discover the quiet charm of Maria de la Salut, a traditional Mallorcan village away from the busiest tourist routes. Thoughtful interiors, local character, and a welcoming atmosphere create the perfect setting for a few days of rest and reconnection.
            </p>
            <ul className="mt-10 divide-y border-y">
              {highlights.map((h) => (
                <li key={h} className="flex gap-4 py-4"><span className="mt-2.5 h-px w-6 shrink-0 bg-terracotta" aria-hidden />{h}</li>
              ))}
            </ul>
          </Reveal>
          <div className="mt-10 grid grid-cols-2 gap-4">
            <Reveal className="img-zoom"><img src={images.room} alt="Guest room with stone wall and linen bedding" width={1152} height={896} loading="lazy" className="aspect-[4/3] w-full object-cover" /></Reveal>
            <Reveal delay={120} className="img-zoom"><img src={images.relax} alt="Lounger beside the hotel pool" width={1152} height={896} loading="lazy" className="aspect-[4/3] w-full object-cover" /></Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
