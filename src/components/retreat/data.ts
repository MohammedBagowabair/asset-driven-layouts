import hero from "@/assets/hero.jpg";
import clay from "@/assets/clay.jpg";
import room from "@/assets/room.jpg";
import venue from "@/assets/venue.jpg";
import sound from "@/assets/sound.jpg";
import landscape from "@/assets/landscape.jpg";
import yogaGroup from "@/assets/yoga-group.jpg";
import relax from "@/assets/relax.jpg";
import rahel from "@/assets/host-rahel.jpg";
import aylin from "@/assets/host-aylin.jpg";
import lisa from "@/assets/host-lisa.jpg";
import danielle from "@/assets/host-danielle.jpg";

export const images = { hero, clay, room, venue, sound, landscape, yogaGroup, relax };

export const navLinks = [
  { id: "experience", label: "Experience" },
  { id: "venue", label: "Venue" },
  { id: "program", label: "Program" },
  { id: "hosts", label: "Hosts" },
  { id: "pricing", label: "Pricing" },
] as const;

export type GalleryImage = { src: string; alt: string; w: number; h: number };

export const gallery: GalleryImage[] = [
  { src: yogaGroup, alt: "Small group practising yoga on a wooden deck beneath olive trees", w: 896, h: 1152 },
  { src: landscape, alt: "Mallorcan countryside with olive groves and mountains at dusk", w: 1920, h: 1088 },
  { src: clay, alt: "Hands shaping terracotta clay on a pottery wheel", w: 896, h: 1152 },
  { src: room, alt: "Boutique hotel room with stone walls and two single beds", w: 1152, h: 896 },
  { src: relax, alt: "Linen lounger with a book and herbal tea beside a stone pool", w: 1152, h: 896 },
  { src: sound, alt: "Sound healer playing singing bowls in a candlelit room", w: 1152, h: 896 },
  { src: hero, alt: "Woman meditating on a stone terrace at sunset", w: 1920, h: 1088 },
];

export const schedule = [
  { day: "Thursday", date: "5 November", title: "Arrival", items: [
    ["14:00", "Check-in"], ["17:00", "Welcome and introductions"], ["18:00", "Dinner"], ["Evening", "Walk, journaling, and meditation"],
  ]},
  { day: "Friday", date: "6 November", title: "Create", items: [
    ["08:00", "Morning yoga"], ["09:30", "Breakfast"], ["11:00–13:00", "Pottery workshop"], ["Afternoon", "Free time and personal relaxation"], ["17:00", "Evening yoga"], ["19:00", "Dinner"],
  ]},
  { day: "Saturday", date: "7 November", title: "Listen", items: [
    ["08:00", "Morning yoga"], ["09:30", "Breakfast"], ["Daytime", "Relaxation and optional excursions"], ["17:00", "Sound healing"], ["19:00", "Dinner"],
  ]},
  { day: "Sunday", date: "8 November", title: "Rest", items: [
    ["08:00", "Morning yoga"], ["09:30", "Breakfast"], ["Daytime", "Personal time, reading, and conversation"], ["17:00", "Evening yoga and closing circle"], ["19:00", "Dinner"],
  ]},
  { day: "Monday", date: "9 November", title: "Departure", items: [
    ["From 08:30", "Breakfast"], ["By 10:00", "Check-out and departure"],
  ]},
] as const;

export const hosts = [
  { name: "Rahel", role: "Yoga teacher", img: rahel, bio: "Specialises in mindful movement and balance, guiding practices that feel steady, unhurried and kind to the body." },
  { name: "Aylin", role: "Yoga teacher", img: aylin, bio: "Combines flowing Vinyasa with restorative Yin, balancing energy in the morning with softness in the evening." },
  { name: "Lisa", role: "Local artist · Pottery", img: lisa, bio: "Leads a hands-on pottery workshop, inviting you to slow down and let the clay set the pace." },
  { name: "Danielle", role: "Sound healing", img: danielle, bio: "Offers a restorative sound journey with singing bowls and gong to close the day in deep stillness." },
];
