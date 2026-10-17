export type Inquiry = { name: string; email: string; room: string; guests: string; message: string; consent: boolean };
export type InquiryErrors = Partial<Record<keyof Inquiry, string>>;

export const ROOMS = ["Shared Double Room", "Single Room"] as const;

export function validateInquiry(v: Inquiry): InquiryErrors {
  const e: InquiryErrors = {};
  if (v.name.trim().length < 2) e.name = "Please enter your full name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim())) e.email = "Please enter a valid email address.";
  if (!ROOMS.includes(v.room as (typeof ROOMS)[number])) e.room = "Please choose a room type.";
  const g = Number(v.guests);
  if (!Number.isInteger(g) || g < 1 || g > 2) e.guests = "Please choose 1 or 2 guests.";
  if (v.message.length > 1000) e.message = "Please keep your message under 1000 characters.";
  if (!v.consent) e.consent = "Please confirm consent so we can respond.";
  return e;
}

/** Placeholder: connect an email service or booking backend here. */
export async function submitInquiry(_v: Inquiry): Promise<{ demo: true }> {
  return { demo: true };
}
