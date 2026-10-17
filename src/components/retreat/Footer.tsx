import { navLinks } from "./data";

// Replace with real profiles before launch.
const socials = [
  { label: "Instagram", href: "https://www.instagram.com/" },
  { label: "Facebook", href: "https://www.facebook.com/" },
];

export function Footer() {
  return (
    <footer className="bg-earth px-5 pb-10 pt-20 text-sand md:px-10">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="font-serif text-3xl tracking-[0.3em] text-primary-foreground">AUTUMN RISE</p>
          <p className="mt-4 max-w-sm text-sand/75">Four days of yoga, creativity and wellbeing in a quiet Mallorcan village.</p>
        </div>
        <nav aria-label="Footer" className="md:col-span-3">
          <p className="eyebrow text-sand/60">Explore</p>
          <ul className="mt-4 space-y-2">{navLinks.map((l) => <li key={l.id}><a href={`#${l.id}`} className="hover:text-primary-foreground">{l.label}</a></li>)}</ul>
        </nav>
        <div className="md:col-span-4">
          <p className="eyebrow text-sand/60">Contact</p>
          <a href="mailto:hello@example.com" className="mt-4 block hover:text-primary-foreground">hello@example.com <span className="text-sand/60">(demo address)</span></a>
          <ul className="mt-4 flex gap-6">{socials.map((s) => <li key={s.label}><a href={s.href} target="_blank" rel="noreferrer" className="hover:text-primary-foreground">{s.label}</a></li>)}</ul>
          <p className="mt-2 text-xs text-sand/60">Social links are placeholders.</p>
        </div>
      </div>
      <p className="mx-auto mt-16 max-w-7xl border-t border-sand/20 pt-6 text-xs text-sand/60">© 2026 Autumn Rise — a demonstration concept. Not affiliated with any existing retreat or venue.</p>
    </footer>
  );
}
