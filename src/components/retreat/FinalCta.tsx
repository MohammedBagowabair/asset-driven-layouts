import { images } from "./data";
import { Reveal } from "./Reveal";

export function FinalCta() {
  return (
    <section className="relative flex min-h-[80svh] items-center justify-center overflow-hidden px-5 py-24 text-center text-on-image">
      <img src={images.landscape} alt="Mallorcan hills and olive groves glowing at dusk" width={1920} height={1088} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-overlay/50" aria-hidden />
      <Reveal className="relative max-w-3xl">
        <h2 className="text-4xl leading-tight md:text-7xl">Give yourself a few days to return to <em>what matters.</em></h2>
        <p className="mt-6 font-serif text-xl italic md:text-2xl">Move gently. Create freely. Rest deeply.</p>
        <a href="#inquiry" className="btn-outline mt-10">Start Your Inquiry</a>
      </Reveal>
    </section>
  );
}
