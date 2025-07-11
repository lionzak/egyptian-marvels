export interface Site {
  id: string
  name: string
  x: string // Use percentage like '42%'
  y: string // Use percentage like '60%'
  description: string
  url: string
}

export const historicalSites: Site[] = [
  {
    id: 'giza',
    name: 'Giza',
    x: '54.95%',
    y: '19.50%',
    description: 'Home of the Great Pyramids and the Sphinx.',
    url: '/models/giza_pyramid.glb',
  },
  {
    id: 'luxor',
    name: 'Luxor',
    x: '68.50%',
    y: '63.33%',
    description: 'Location of the Valley of the Kings and Karnak Temple.',
    url: '/models/luxor_mask.glb',
  },
  {
    id: 'memphis',
    name: 'Memphis',
    x: '58%',
    y: '13%',
    description: 'The ancient capital of Egypt during the Old Kingdom.',
    url: '/models/memphis_statue.glb',
  },
]
