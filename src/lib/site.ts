export const site = {
  name: "Sofia's Aesthetic Spa",
  phoneDisplay: "+65 8766 6949",
  phoneTel: "+6587666949",
  whatsapp(treatment?: string) {
    const text = treatment
      ? `Hi Sofia's Aesthetic Spa, I would like to book ${treatment}.`
      : "Hi Sofia's Aesthetic Spa, I would like to book an appointment.";
    return `https://wa.me/6587666949?text=${encodeURIComponent(text)}`;
  },
};

export type Treatment = {
  name: string;
  blurb: string;
  promo: number;
  was: number;
  image?: string;
  imageAlt?: string;
};

export const treatments: Treatment[] = [
  {
    name: "Traditional Cupping",
    blurb: "Limited period only. Get booked today.",
    promo: 99,
    was: 180,
    image: "/gallery/cupping.jpg",
    imageAlt: "Traditional cupping cups on the back",
  },
  {
    name: "Skin Brightening",
    blurb: "Brighten the face, underarms, or bikini line.",
    promo: 99,
    was: 188,
  },
  {
    name: "Rejuran Skin Booster",
    blurb: "Glow with Rejuran today.",
    promo: 388,
    was: 688,
    image: "/gallery/glow.jpg",
    imageAlt: "Client resting during a facial glow treatment",
  },
  {
    name: "Pigmentation & Melasma",
    blurb: "Laser for pigmentation and melasma. Results can show from the first or second session.",
    promo: 150,
    was: 288,
    image: "/gallery/laser.jpg",
    imageAlt: "Laser handpiece used beside the face",
  },
  {
    name: "Wrinkletox",
    blurb: "Soften fine lines.",
    promo: 250,
    was: 500,
  },
  {
    name: "Eyebag Treatment",
    blurb: "Look fresher around the eyes.",
    promo: 388,
    was: 588,
  },
  {
    name: "HiRF Treatment",
    blurb: "Radio-frequency face lift with a lifted look right after the session. A step on from HIFU.",
    promo: 388,
    was: 800,
  },
  {
    name: "Rejuran Glow",
    blurb: "A signature Rejuran treatment for a natural glow.",
    promo: 388,
    was: 600,
    image: "/gallery/profile.jpg",
    imageAlt: "Close portrait after a glow facial",
  },
  {
    name: "Syringoma Treatment",
    blurb: "Even out small bumps on the face.",
    promo: 188,
    was: 388,
    image: "/gallery/milia.jpg",
    imageAlt: "Close view of small facial bumps",
  },
  {
    name: "Eyebrow Embroidery",
    blurb: "Brows that stay put, so you can skip drawing them in.",
    promo: 188,
    was: 688,
    image: "/gallery/brows.jpg",
    imageAlt: "Client with shaped embroidered brows",
  },
  {
    name: "Acne Scar",
    blurb: "Gold microneedling for acne scars.",
    promo: 188,
    was: 388,
    image: "/gallery/cheek.jpg",
    imageAlt: "Close view of cheek texture",
  },
  {
    name: "Milia & Skin Tags",
    blurb: "Removal across the full face or neck.",
    promo: 188,
    was: 388,
  },
];

export const gallery = [
  { src: "/gallery/profile.jpg", alt: "Side portrait after a facial", caption: "Glow facial" },
  { src: "/gallery/cupping.jpg", alt: "Cupping session", caption: "Cupping" },
  { src: "/gallery/treatment.jpg", alt: "Facial device treatment", caption: "In treatment" },
  { src: "/gallery/brows.jpg", alt: "Brow embroidery result", caption: "Brows" },
  { src: "/gallery/headband.jpg", alt: "Client during a facial", caption: "Skin session" },
  { src: "/gallery/laser.jpg", alt: "Laser treatment", caption: "Laser" },
  { src: "/gallery/complexion.jpg", alt: "Complexion close-up", caption: "Complexion" },
  { src: "/gallery/glow.jpg", alt: "Client after a brightening facial", caption: "Brightening" },
];

export function sgd(amount: number) {
  return `SGD ${amount}`;
}

export function withBase(path: string) {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  if (!base || !path.startsWith("/")) return path;
  return `${base}${path}`;
}
