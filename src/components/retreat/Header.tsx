import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "./data";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [open]);

  const solid = scrolled || open;

  return (
    <header className={cn("fixed inset-x-0 top-0 z-50 transition-all duration-500", solid ? "bg-background/95 text-foreground shadow-[0_1px_0_var(--border)] backdrop-blur" : "bg-transparent text-on-image")}>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-20 md:px-10">
        <a href="#top" className="font-serif text-xl tracking-[0.3em] md:text-2xl" onClick={() => setOpen(false)}>AUTUMN RISE</a>
        <nav aria-label="Main" className="hidden items-center gap-8 lg:flex">
          {navLinks.map((l) => (
            <a key={l.id} href={`#${l.id}`} className="eyebrow opacity-90 transition-opacity hover:opacity-60">{l.label}</a>
          ))}
          <a href="#inquiry" className={cn(solid ? "btn-solid" : "btn-outline", "min-h-11")}>Reserve Your Place</a>
        </nav>
        <button type="button" className="-mr-2 p-2 lg:hidden" aria-expanded={open} aria-controls="mobile-nav" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen((o) => !o)}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      <div id="mobile-nav" hidden={!open} className="h-[calc(100dvh-4rem)] overflow-y-auto bg-background px-6 pb-10 pt-6 lg:hidden">
        <nav aria-label="Mobile" className="flex flex-col">
          {navLinks.map((l) => (
            <a key={l.id} href={`#${l.id}`} onClick={() => setOpen(false)} className="border-b py-5 font-serif text-3xl">{l.label}</a>
          ))}
          <a href="#inquiry" onClick={() => setOpen(false)} className="btn-solid mt-8 w-full">Reserve Your Place</a>
        </nav>
      </div>
    </header>
  );
}
