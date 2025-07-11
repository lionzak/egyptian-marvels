// Site interface
export interface Site {
  id: string;
  name: string;
  x: string; // Percentage like '42%'
  y: string; // Percentage like '60%'
  description: string;
  image: string;
  category: string;
}

// Egypt historical sites data with accurate positioning based on the map
export const egyptianSites: Site[] = [
  {
    id: "giza",
    name: "Giza",
    x: "49.27%",
    y: "19%",
    description:
      "Home of the Great Pyramid and the Sphinx — Giza is where ancient ambition touched the sky and left behind wonders for eternity.",
    image:
      "/images/giza.webp",
    category: "Pyramid Complex",
  },
  {
    id: "alexandria",
    name: "Alexandria",
    x: "42.41%",
    y: "7%",
    description:
      "Where the ancient world met the sea — Alexandria was once the crown jewel of the Mediterranean, home to the legendary Great Library and the towering Pharos Lighthouse.",
    image:
      "https://images.unsplash.com/photo-1580418827493-f2b22c0a76cb?w=400&h=300&fit=crop",
    category: "Historic City",
  },
  {
    id: "luxor",
    name: "Luxor",
    x: "58.65%",
    y: "61%",
    description:
      "Known as the world's greatest open-air museum, Luxor contains the ruins of the ancient Egyptian city of Thebes. Home to the Valley of the  , Karnak Temple, and Luxor Temple.",
    image: "/images/luxor.webp",
    category: "Archaeological Site",
  },

  {
    id: "abu-simbel",
    name: "Abu Simbel",
    x: "52.5%",
    y: "92.4%",
    description:
      "Guarded by four giant statues of Ramses II, Abu Simbel is a marvel of ancient engineering — and modern rescue — carved into the cliffs of Nubia.",

    image: "/images/abu-simble.webp",
    category: "Rock-Cut Temple",
  },
  {
    id: "valley of king",
    name: "Valley of the Kings",
    x: "50.75%",
    y: "61%",
    description:
      "A sacred resting place of pharaohs — from Tutankhamun to Ramses — hidden beneath the desert hills of Luxor’s west bank.",

    image: "/images/kings.avif",
    category: "Royal Necropolis",
  },
  {
    id: "philea",
    name: "Philea",
    x: "59.55%",
    y: "84.4%",
    description:
      "An island of mystery and devotion — Philae Temple rises from the Nile, echoing with tales of the goddess Isis and ancient love.",

    image: "/images/philea.webp",
    category: "Island Temple",
  },
];
