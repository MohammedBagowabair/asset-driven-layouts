import { useState, type FormEvent } from "react";
import { ROOMS, submitInquiry, validateInquiry, type Inquiry, type InquiryErrors } from "./inquiry";
import { Eyebrow, Reveal } from "./Reveal";

const initial: Inquiry = { name: "", email: "", room: "", guests: "1", message: "", consent: false };
const field = "mt-2 w-full border-0 border-b border-input bg-transparent px-0 py-3 text-lg outline-none transition-colors focus:border-terracotta focus-visible:outline-none aria-[invalid=true]:border-destructive";

export function InquiryForm() {
  const [v, setV] = useState(initial);
  const [errors, setErrors] = useState<InquiryErrors>({});
  const [done, setDone] = useState(false);
  const set = <K extends keyof Inquiry>(k: K, val: Inquiry[K]) => setV((p) => ({ ...p, [k]: val }));

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    const errs = validateInquiry(v);
    setErrors(errs);
    const first = Object.keys(errs)[0];
    if (first) { document.getElementById(`f-${first}`)?.focus(); return; }
    await submitInquiry(v);
    setDone(true);
  }

  const err = (k: keyof Inquiry) => errors[k] && <p id={`e-${k}`} role="alert" className="mt-2 text-sm text-destructive">{errors[k]}</p>;
  const a = (k: keyof Inquiry) => ({ id: `f-${k}`, "aria-invalid": !!errors[k], "aria-describedby": errors[k] ? `e-${k}` : undefined });

  return (
    <section id="inquiry" className="bg-sand py-24 md:py-36">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-12 md:px-10">
        <Reveal className="md:col-span-5">
          <Eyebrow>Enquire</Eyebrow>
          <h2 className="mt-6 text-4xl md:text-6xl">Begin with a <em>simple hello.</em></h2>
          <p className="mt-6 text-muted-foreground">Tell us a little about yourself and your preferred room. This is a demonstration form — nothing is sent or stored.</p>
        </Reveal>
        <div className="md:col-span-7">
          {done ? (
            <div role="status" className="border border-olive/40 bg-card p-10">
              <h3 className="text-4xl">Thank you, {v.name.split(" ")[0]}.</h3>
              <p className="mt-4 text-muted-foreground">Your details passed validation. As this is a demonstration concept, <strong>no inquiry has actually been sent</strong> and nothing was stored.</p>
              <button type="button" className="btn-outline mt-8" onClick={() => { setV(initial); setDone(false); }}>Start a new inquiry</button>
            </div>
          ) : (
            <form noValidate onSubmit={onSubmit} className="grid gap-8 sm:grid-cols-2">
              <div className="sm:col-span-2"><label htmlFor="f-name" className="eyebrow">Full name *</label><input {...a("name")} autoComplete="name" className={field} value={v.name} onChange={(e) => set("name", e.target.value)} />{err("name")}</div>
              <div className="sm:col-span-2"><label htmlFor="f-email" className="eyebrow">Email address *</label><input {...a("email")} type="email" autoComplete="email" className={field} value={v.email} onChange={(e) => set("email", e.target.value)} />{err("email")}</div>
              <div><label htmlFor="f-room" className="eyebrow">Preferred room *</label>
                <select {...a("room")} className={field} value={v.room} onChange={(e) => set("room", e.target.value)}>
                  <option value="">Select…</option>{ROOMS.map((r) => <option key={r}>{r}</option>)}
                </select>{err("room")}</div>
              <div><label htmlFor="f-guests" className="eyebrow">Number of guests *</label>
                <select {...a("guests")} className={field} value={v.guests} onChange={(e) => set("guests", e.target.value)}>
                  <option value="1">1</option><option value="2">2</option>
                </select>{err("guests")}</div>
              <div className="sm:col-span-2"><label htmlFor="f-message" className="eyebrow">Message</label><textarea {...a("message")} rows={4} className={field} value={v.message} onChange={(e) => set("message", e.target.value)} />{err("message")}</div>
              <div className="sm:col-span-2">
                <label className="flex items-start gap-3 text-sm">
                  <input {...a("consent")} type="checkbox" className="mt-1 h-5 w-5 accent-olive" checked={v.consent} onChange={(e) => set("consent", e.target.checked)} />
                  <span>I agree that my details may be used to respond to this inquiry. *</span>
                </label>{err("consent")}
              </div>
              <div className="sm:col-span-2"><button type="submit" className="btn-solid w-full sm:w-auto">Send Inquiry</button></div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
