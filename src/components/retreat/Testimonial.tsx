import { Reveal } from "./Reveal";

export function Testimonial() {
  return (
    <section aria-label="Testimonial" className="px-5 py-24 md:py-36">
      <Reveal as="figure" className="mx-auto max-w-4xl text-center">
        <span className="block font-serif text-[8rem] leading-[0.5] text-terracotta" aria-hidden>“</span>
        <blockquote className="mt-6 font-serif text-3xl leading-snug italic md:text-5xl">
          An unforgettable few days to slow down, reconnect, and return home feeling refreshed.
        </blockquote>
        <figcaption className="eyebrow mt-10 text-muted-foreground">Demo testimonial</figcaption>
      </Reveal>
    </section>
  );
}
