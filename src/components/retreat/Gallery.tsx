import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { gallery } from "./data";
import { Eyebrow, Reveal } from "./Reveal";

const layout = [
  "col-span-2 md:col-span-5 md:row-span-2 aspect-[4/5] md:aspect-auto",
  "col-span-2 md:col-span-7 aspect-[16/9]",
  "col-span-1 md:col-span-3 aspect-[3/4]",
  "col-span-1 md:col-span-4 aspect-[3/4] md:aspect-[4/3]",
  "col-span-2 md:col-span-4 aspect-[4/3]",
  "col-span-1 md:col-span-4 aspect-square md:aspect-[4/3]",
  "col-span-1 md:col-span-4 aspect-square md:aspect-[4/3]",
];

export function Gallery() {
  const [index, setIndex] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const lastTrigger = useRef<HTMLElement | null>(null);
  const n = gallery.length;
  const close = useCallback(() => { setIndex(null); lastTrigger.current?.focus(); }, []);
  const step = useCallback((d: number) => setIndex((i) => (i === null ? i : (i + d + n) % n)), [n]);

  useEffect(() => {
    if (index === null) return;
    closeRef.current?.focus();
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [index, close, step]);

  return (
    <section aria-labelledby="gallery-title" className="bg-secondary py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <Reveal className="mb-12 flex flex-col justify-between gap-6 md:mb-16 md:flex-row md:items-end">
          <div>
            <Eyebrow>The experience</Eyebrow>
            <h2 id="gallery-title" className="mt-5 text-4xl md:text-6xl">Moments, <em>gathered slowly.</em></h2>
          </div>
          <p className="max-w-sm text-muted-foreground">Morning practice beneath the olives, clay between your fingers, quiet afternoons by the water.</p>
        </Reveal>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-12 md:gap-5">
          {gallery.map((img, i) => (
            <button key={i} type="button" onClick={(e) => { lastTrigger.current = e.currentTarget; setIndex(i); }}
              className={`img-zoom group relative block ${layout[i]}`} aria-label={`Open image: ${img.alt}`}>
              <img src={img.src} alt={img.alt} width={img.w} height={img.h} loading="lazy" className="h-full w-full object-cover" />
              <span className="absolute inset-0 bg-overlay/0 transition-colors duration-500 group-hover:bg-overlay/15" aria-hidden />
            </button>
          ))}
        </div>
      </div>

      {index !== null && (
        <div role="dialog" aria-modal="true" aria-label="Image viewer" className="fixed inset-0 z-[60] flex items-center justify-center bg-overlay/95 p-4 text-on-image animate-in fade-in" onClick={close}>
          <figure className="relative max-h-full max-w-6xl" onClick={(e) => e.stopPropagation()}>
            <img src={gallery[index].src} alt={gallery[index].alt} className="max-h-[80vh] w-auto object-contain" />
            <figcaption className="mt-4 flex justify-between gap-4 text-sm opacity-80">
              <span>{gallery[index].alt}</span><span>{index + 1} / {n}</span>
            </figcaption>
          </figure>
          <button ref={closeRef} type="button" onClick={close} aria-label="Close image viewer" className="absolute right-4 top-4 p-3 hover:opacity-70"><X className="h-7 w-7" /></button>
          <button type="button" onClick={(e) => { e.stopPropagation(); step(-1); }} aria-label="Previous image" className="absolute left-2 top-1/2 -translate-y-1/2 p-3 hover:opacity-70 md:left-6"><ChevronLeft className="h-8 w-8" /></button>
          <button type="button" onClick={(e) => { e.stopPropagation(); step(1); }} aria-label="Next image" className="absolute right-2 top-1/2 -translate-y-1/2 p-3 hover:opacity-70 md:right-6"><ChevronRight className="h-8 w-8" /></button>
        </div>
      )}
    </section>
  );
}
