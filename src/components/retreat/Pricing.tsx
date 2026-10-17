import { Eyebrow, Reveal } from "./Reveal";

const rooms = [
  { name: "Shared Double Room", price: "1,400", note: "Two separate single beds, shared with one other guest." },
  { name: "Single Room", price: "1,600", note: "A private room of your own for the full retreat." },
];
const included = ["Four nights of accommodation", "Daily vegan breakfast and dinner", "Retreat activities and scheduled sessions", "Tourist tax"];

export function Pricing() {
  return (
    <section id="pricing" className="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-36">
      <Reveal className="text-center">
        <Eyebrow>Your place at Autumn Rise</Eyebrow>
        <h2 className="mt-6 text-4xl md:text-6xl">Make room for <em>something different.</em></h2>
      </Reveal>
      <div className="mt-16 grid gap-px bg-border md:grid-cols-2">
        {rooms.map((r, i) => (
          <Reveal key={r.name} delay={i * 120} className="flex flex-col bg-card p-8 md:p-14">
            <h3 className="text-3xl">{r.name}</h3>
            <p className="mt-6 flex items-baseline gap-2"><span className="eyebrow text-muted-foreground">CHF</span><span className="font-serif text-6xl md:text-7xl">{r.price}</span></p>
            <p className="text-sm text-muted-foreground">per person</p>
            <p className="mt-6 text-muted-foreground">{r.note}</p>
          </Reveal>
        ))}
      </div>
      <Reveal className="mt-14 grid gap-10 md:grid-cols-2 md:gap-16">
        <div>
          <h3 className="eyebrow text-olive">Included</h3>
          <ul className="mt-5 space-y-3">{included.map((x) => <li key={x} className="flex gap-3"><span className="mt-2.5 h-px w-5 shrink-0 bg-terracotta" aria-hidden />{x}</li>)}</ul>
        </div>
        <div>
          <h3 className="eyebrow text-olive">Not included</h3>
          <p className="mt-5 leading-relaxed text-muted-foreground">Flights, local transportation, lunches, snacks, additional drinks, excursions, massages, treatments, and personal insurance.</p>
          <p className="mt-4 text-sm text-muted-foreground">The shared double room uses separate single beds.</p>
        </div>
      </Reveal>
      <div className="mt-14 flex flex-col items-center gap-5 text-center">
        <a href="#inquiry" className="btn-solid">Enquire About Availability</a>
        <p className="max-w-lg text-xs text-muted-foreground">Prices and dates are sample content for demonstration and must be verified before any real-world use.</p>
      </div>
    </section>
  );
}
