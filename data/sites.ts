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
    x: "49%",
    y: "18%",
    description:
      "Home of the Great Pyramid and the Sphinx — Giza is where ancient ambition touched the sky and left behind wonders for eternity.",
    image: "/images/giza.avif",
    category: "Pyramid Complex",
  },
  {
    id: "alexandria",
    name: "Alexandria",
    x: "38.8%",
    y: "6%",
    description:
      "Where the ancient world met the sea — Alexandria was once the crown jewel of the Mediterranean, home to the legendary Great Library and the towering Pharos Lighthouse.",
    image: "/images/alex.webp",
    category: "Historic City",
  },
  {
    id: "luxor",
    name: "Luxor",
    x: "62.9%",
    y: "60%",
    description:
      "Known as the world's greatest open-air museum, Luxor contains the ruins of the ancient Egyptian city of Thebes. Home to the Valley of the  , Karnak Temple, and Luxor Temple.",
    image: "/images/luxor.webp",
    category: "Archaeological Site",
  },

  {
    id: "abu-simbel",
    name: "Abu Simbel",
    x: "53.7%",
    y: "91.4%",
    description:
      "Guarded by four giant statues of Ramses II, Abu Simbel is a marvel of ancient engineering — and modern rescue — carved into the cliffs of Nubia.",

    image: "/images/abu-simble.webp",
    category: "Rock-Cut Temple",
  },
  {
    id: "valley of king",
    name: "Valley of the Kings",
    x: "50.75%",
    y: "60%",
    description:
      "A sacred resting place of pharaohs — from Tutankhamun to Ramses — hidden beneath the desert hills of Luxor’s west bank.",

    image: "/images/kings.avif",
    category: "Royal Necropolis",
  },
  {
    id: "philea",
    name: "Philea",
    x: "64%",
    y: "83.5%",
    description:
      "An island of mystery and devotion — Philae Temple rises from the Nile, echoing with tales of the goddess Isis and ancient love.",

    image: "/images/philea.webp",
    category: "Island Temple",
  },
  {
    id: "moses-mount",
    name: "Mount Sinai",
    x: "72%",
    y: "32%",
    description:
      "Also known as Moses' Mount, this is the place where, according to tradition, Moses received the Ten Commandments. It is a sacred mountain for Heavenly religions, and a destination for pilgrims and travelers seeking reflection and peace.",

    image: "/images/moses.webp",
    category: "Sacred Mountain",
  },
];
