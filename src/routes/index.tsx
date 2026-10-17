import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/retreat/Header";
import { Hero } from "@/components/retreat/Hero";
import { Intro } from "@/components/retreat/Intro";
import { Gallery } from "@/components/retreat/Gallery";
import { Venue } from "@/components/retreat/Venue";
import { Program } from "@/components/retreat/Program";
import { Testimonial } from "@/components/retreat/Testimonial";
import { Hosts } from "@/components/retreat/Hosts";
import { Pricing } from "@/components/retreat/Pricing";
import { InquiryForm } from "@/components/retreat/InquiryForm";
import { FinalCta } from "@/components/retreat/FinalCta";
import { Footer } from "@/components/retreat/Footer";

const title = "Autumn Rise — Yoga & Wellbeing Retreat in Mallorca (Demo)";
const description = "Four days of yoga, pottery and sound healing in a quiet Mallorcan village, 5–9 November 2026. A demonstration concept.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <a href="#experience" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:bg-background focus:p-3">Skip to content</a>
      <Header />
      <main>
        <Hero />
        <Intro />
        <Gallery />
        <Venue />
        <Program />
        <Testimonial />
        <Hosts />
        <Pricing />
        <InquiryForm />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
