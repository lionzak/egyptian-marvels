
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
    id: 'giza',
    name: 'Giza Pyramids',
    x: '25%',
    y: '35%',
    description: 'The Great Pyramid of Giza is the oldest and largest of the three pyramids in the Giza pyramid complex. Built as a tomb for the Fourth Dynasty Egyptian pharaoh Khufu, it was constructed over a 20-year period concluding around 2560 BC.',
    image: 'https://images.unsplash.com/photo-1539650116574-75c0c6d04e82?w=400&h=300&fit=crop',
    category: 'Ancient Wonder'
  },
  {
    id: 'alexandria',
    name: 'Alexandria',
    x: '42.41%',
    y: '7%',
    description: 'Founded by Alexander the Great in 331 BC, Alexandria was the capital of ancient Egypt and home to the famous Library of Alexandria. Today it remains Egypt\'s second-largest city and major Mediterranean port.',
    image: 'https://images.unsplash.com/photo-1580418827493-f2b22c0a76cb?w=400&h=300&fit=crop',
    category: 'Historic City'
  },
  {
    id: 'luxor',
    name: 'Luxor',
    x: '58.65%',
    y: '61%',
    description: 'Known as the world\'s greatest open-air museum, Luxor contains the ruins of the ancient Egyptian city of Thebes. Home to the Valley of the Kings, Karnak Temple, and Luxor Temple.',
    image: 'https://images.unsplash.com/photo-1594736797933-d0ea5b4b3a71?w=400&h=300&fit=crop',
    category: 'Archaeological Site'
  },
  {
    id: 'aswan',
    name: 'Aswan',
    x: '68%',
    y: '95%',
    description: 'Egypt\'s southernmost city, famous for the Aswan High Dam, the Unfinished Obelisk, and as the gateway to Abu Simbel. Known for its beautiful Nile scenery and Nubian culture.',
    image: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?w=400&h=300&fit=crop',
    category: 'Modern City'
  },
  {
    id: 'abu-simbel',
    name: 'Abu Simbel',
    x: '65%',
    y: '100%',
    description: 'Two massive rock temples originally carved out of the mountainside during the reign of Pharaoh Ramesses II. The temples were relocated in their entirety in 1968 to avoid submersion during the creation of Lake Nasser.',
    image: 'https://images.unsplash.com/photo-1539650116574-75c0c6d04e82?w=400&h=300&fit=crop',
    category: 'Ancient Temple'
  },
  {
    id: 'cairo',
    name: 'Cairo',
    x: '35%',
    y: '40%',
    description: 'The capital and largest city of Egypt, known as "The City of a Thousand Minarets." Home to Islamic Cairo, the Egyptian Museum, and the nearby Giza pyramid complex.',
    image: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=300&fit=crop',
    category: 'Capital City'
  },
  {
    id: 'saqqara',
    name: 'Saqqara',
    x: '28%',
    y: '38%',
    description: 'An ancient burial ground serving as the necropolis for the ancient Egyptian capital of Memphis. Famous for the Step Pyramid of Djoser, considered the world\'s oldest complete stone building complex.',
    image: 'https://images.unsplash.com/photo-1604928562853-e1be6a0c3a48?w=400&h=300&fit=crop',
    category: 'Necropolis'
  },
  {
    id: 'dahshur',
    name: 'Dahshur',
    x: '30%',
    y: '45%',
    description: 'Royal necropolis located south of Cairo, famous for the Bent Pyramid and the Red Pyramid built during the reign of Pharaoh Sneferu, marking important developments in pyramid construction.',
    image: 'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=400&h=300&fit=crop',
    category: 'Pyramid Complex'
  },
  {
    id: 'edfu',
    name: 'Edfu',
    x: '70%',
    y: '85%',
    description: 'Home to the Temple of Horus, one of the best-preserved temples in Egypt. The temple was built during the Ptolemaic period and is dedicated to the falcon god Horus.',
    image: 'https://images.unsplash.com/photo-1553913861-c0fddf2d193c?w=400&h=300&fit=crop',
    category: 'Ancient Temple'
  },
  {
    id: 'kom-ombo',
    name: 'Kom Ombo',
    x: '72%',
    y: '88%',
    description: 'Famous for its unique double temple dedicated to both Sobek (the crocodile god) and Horus (the falcon god). The temple dates to the Ptolemaic period.',
    image: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=300&fit=crop',
    category: 'Double Temple'
  }
];
