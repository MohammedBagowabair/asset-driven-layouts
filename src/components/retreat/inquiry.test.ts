import { describe, it, expect } from "vitest";
import { validateInquiry } from "./inquiry";

const ok = { name: "Anna Muster", email: "anna@example.com", room: "Single Room", guests: "1", message: "", consent: true };

describe("validateInquiry", () => {
  it("accepts a complete inquiry", () => expect(validateInquiry(ok)).toEqual({}));
  it("rejects invalid email", () => expect(validateInquiry({ ...ok, email: "anna@" }).email).toBeTruthy());
  it("requires consent", () => expect(validateInquiry({ ...ok, consent: false }).consent).toBeTruthy());
  it("requires a known room", () => expect(validateInquiry({ ...ok, room: "" }).room).toBeTruthy());
});
