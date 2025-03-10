import { ICategory } from "src/@types";

export default [
  {
    id: 1,
    title: 'Animalerie',
    slug: 'animalerie',
    image:
      'http://localhost:3000/pictures/categories/animalerie.webp',
  },
  {
    id: 2,
    title: 'Beauté et parfum',
    slug: 'beaute-et-parfum',
    image:
      'http://localhost:3000/pictures/categories/beaute-et-parfum.webp',
  },
  {
    id: 3,
    title: 'Bricolage',
    slug: 'bricolage',
    image:
      'http://localhost:3000/pictures/categories/bricolage.webp',
  },
  {
    id: 4,
    title: 'Chaussures',
    slug: 'chaussures',
    image:
      'http://localhost:3000/pictures/categories/chaussures.webp',
  },
  {
    id: 5,
    title: 'Jardin',
    slug: 'jardin',
    image: 'http://localhost:3000/pictures/categories/jardin.webp',
  },
  {
    id: 6,
    title: 'Jeux et jouets',
    slug: 'jeux',
    image: 'http://localhost:3000/pictures/categories/jeux.webp',
  },
  {
    id: 7,
    title: 'Jeux vidéos',
    slug: 'jeux-videos',
    image:
      'http://localhost:3000/pictures/categories/jeux-videos.webp',
  },
  {
    id: 8,
    title: 'Livres',
    slug: 'livres',
    image: 'http://localhost:3000/pictures/categories/livres.webp',
  },
] satisfies ICategory[];
