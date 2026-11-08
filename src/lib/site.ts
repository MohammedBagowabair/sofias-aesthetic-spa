export const site = {
  name: "Sofia's Aesthetic Spa",
  phoneDisplay: "+65 8766 6949",
  phoneTel: "+6587666949",
  address: "810 Geylang Road, #01-115 City Plaza, Singapore 409286",
  maps: "https://www.google.com/maps/place/Sofia's+Aesthetic+Spa/@1.3148178,103.8934089,17z",
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
    image: "/gallery/studio-glow.jpg",
    imageAlt: "A calm face with a soft glow during a facial",
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
    image: "/gallery/studio-brows.jpg",
    imageAlt: "A soft portrait with a rested expression",
  },
  {
    name: "Eyebag Treatment",
    blurb: "Look fresher around the eyes.",
    promo: 388,
    was: 588,
    image: "/gallery/studio-eyes.jpg",
    imageAlt: "Close view of closed eyes and smooth skin",
  },
  {
    name: "HiRF Treatment",
    blurb: "Radio-frequency face lift with a lifted look right after the session. A step on from HIFU.",
    promo: 388,
    was: 800,
    image: "/gallery/studio-lift.jpg",
    imageAlt: "A radiofrequency handpiece used along the cheek",
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
    image: "/gallery/studio-hands.jpg",
    imageAlt: "A facial along the jaw and neck",
  },
];

export const studio = [
  { src: "/gallery/shop.jpg", alt: "Sofia's Secret storefront at City Plaza, unit 01-115", caption: "The shop" },
  { src: "/gallery/laser.jpg", alt: "Treatment in the spa room, with the laser and the bed", caption: "The room" },
  { src: "/gallery/studio-glow.jpg", alt: "Woman resting with a pink headband and glowing skin", caption: "Glow" },
  { src: "/gallery/studio-cups.jpg", alt: "Glass cupping cups styled with linen and a blush towel", caption: "Cupping" },
  { src: "/gallery/studio-lift.jpg", alt: "Radiofrequency treatment beside a navy curtain", caption: "Lift" },
  { src: "/gallery/studio-eyes.jpg", alt: "Close portrait of closed eyes", caption: "Eyes" },
  { src: "/gallery/studio-brows.jpg", alt: "Portrait with shaped brows and a quiet smile", caption: "Brows" },
  { src: "/gallery/studio-hands.jpg", alt: "Hands resting along the jaw during a facial", caption: "Facial" },
  { src: "/gallery/studio-still.jpg", alt: "Rose, linen, and a glass dropper on marble", caption: "Still life" },
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
