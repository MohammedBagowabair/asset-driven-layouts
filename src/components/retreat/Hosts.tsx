import { hosts } from "./data";
import { Eyebrow, Reveal } from "./Reveal";

export function Hosts() {
  return (
    <section id="hosts" className="bg-secondary py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <Reveal className="max-w-2xl">
          <Eyebrow>Meet your guides</Eyebrow>
          <h2 className="mt-6 text-4xl md:text-6xl">People who make <em>space for you.</em></h2>
        </Reveal>
        <ul className="mt-16 grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {hosts.map((h, i) => (
            <Reveal as="li" key={h.name} delay={i * 100} className={i % 2 === 1 ? "lg:mt-16" : ""}>
              <div className="img-zoom">
                <img src={h.img} alt={`Portrait of ${h.name}, ${h.role.toLowerCase()}`} width={768} height={960} loading="lazy" className="aspect-[4/5] w-full object-cover grayscale-[25%] transition duration-700 hover:grayscale-0" />
              </div>
              <h3 className="mt-6 text-3xl">{h.name}</h3>
              <p className="eyebrow mt-2 text-terracotta">{h.role}</p>
              <p className="mt-4 text-muted-foreground">{h.bio}</p>
            </Reveal>
          ))}
        </ul>
        <p className="mt-14 text-sm text-muted-foreground">Profiles are demonstration copy and not verified biographies.</p>
      </div>
    </section>
  );
}
