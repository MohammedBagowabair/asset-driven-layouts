import { images } from "./data";
import { Eyebrow, Reveal } from "./Reveal";

const highlights = [
  ["Mindful Movement", "Daily yoga and moments of conscious breathing."],
  ["Creative Exploration", "A hands-on pottery workshop designed to spark creativity."],
  ["Deep Restoration", "Sound healing, nourishing meals, and time to simply be."],
];

export function Intro() {
  return (
    <section id="experience" className="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-36">
      <div className="grid gap-14 md:grid-cols-12 md:gap-10">
        <Reveal className="md:col-span-7 md:pr-10">
          <Eyebrow>Your time to reset</Eyebrow>
          <h2 className="mt-6 text-4xl leading-[1.05] md:text-6xl">Four days to slow down, reconnect, and <em>feel inspired.</em></h2>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Step away from everyday routines and rediscover the pleasure of moving gently, creating with your hands, and sharing meaningful moments. This intimate retreat brings together yoga, mindfulness, pottery, and sound healing in a peaceful Mallorcan setting.
          </p>
          <ol className="mt-14 space-y-8">
            {highlights.map(([t, d], i) => (
              <li key={t} className="grid grid-cols-[3rem_1fr] gap-4 border-t pt-6">
                <span className="font-serif text-2xl italic text-terracotta">0{i + 1}</span>
                <div><h3 className="text-2xl">{t}</h3><p className="mt-1 text-muted-foreground">{d}</p></div>
              </li>
            ))}
          </ol>
        </Reveal>
        <div className="relative md:col-span-5">
          <Reveal className="img-zoom md:mt-24">
            <img src={images.yogaGroup} alt="Guests practising yoga outdoors beneath olive trees" width={896} height={1152} loading="lazy" className="aspect-[4/5] w-full object-cover" />
          </Reveal>
          <Reveal delay={150} className="img-zoom ml-auto -mt-16 w-3/5 border-8 border-background md:-ml-24 md:mr-auto md:w-2/3">
            <img src={images.clay} alt="Hands shaping clay on a wheel" width={896} height={1152} loading="lazy" className="aspect-[4/5] w-full object-cover" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
