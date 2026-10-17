import { MapPin, CalendarDays, Sparkles } from "lucide-react";
import { images } from "./data";

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden text-on-image">
      <img src={images.hero} alt="Woman meditating on a stone terrace overlooking Mallorcan hills at sunset" width={1920} height={1088} fetchPriority="high" className="absolute inset-0 h-full w-full object-cover object-[70%_center]" />
      <div className="absolute inset-0 bg-gradient-to-t from-overlay/85 via-overlay/35 to-overlay/30 md:bg-gradient-to-r md:from-overlay/70 md:via-overlay/25 md:to-transparent" aria-hidden />
      <div className="relative mx-auto w-full max-w-7xl px-5 pb-14 pt-32 md:px-10 md:pb-20">
        <div className="max-w-2xl">
          <p className="eyebrow mb-6 opacity-90">4 days of yoga, creativity &amp; wellbeing</p>
          <h1 className="text-[clamp(4rem,13vw,10rem)] leading-[0.85] font-light italic">Autumn Rise</h1>
          <p className="mt-5 font-serif text-2xl md:text-3xl">A Yoga &amp; Wellbeing Retreat in Mallorca</p>
          <p className="mt-6 max-w-lg text-base leading-relaxed opacity-90 md:text-lg">
            Slow down, reconnect with yourself, and welcome the softer side of autumn. Four days of mindful movement, creative exploration, nourishing food, and moments of stillness under the Mediterranean sun.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#experience" className="btn-solid">Explore the Retreat</a>
            <a href="#program" className="btn-outline">Discover the Program</a>
          </div>
        </div>
        <ul className="mt-12 grid gap-4 border-t border-on-image/30 pt-6 text-sm tracking-wide sm:grid-cols-3 md:mt-16">
          <li className="flex items-center gap-3"><MapPin className="h-4 w-4 opacity-70" aria-hidden />Mallorca, Spain</li>
          <li className="flex items-center gap-3"><CalendarDays className="h-4 w-4 opacity-70" aria-hidden />5–9 November 2026</li>
          <li className="flex items-center gap-3"><Sparkles className="h-4 w-4 opacity-70" aria-hidden />Yoga, pottery &amp; sound healing</li>
        </ul>
      </div>
    </section>
  );
}
