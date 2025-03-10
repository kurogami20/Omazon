import { ITag } from "src/@types";

export default [
  {
    id: 1,
    type: 'choice',
    text: "Choix d'Omazon",
  },
  {
    id: 2,
    type: 'new',
    text: 'Nouveauté',
  },
  {
    id: 3,
    type: 'best-seller',
    text: 'N°1 des ventes',
  },
  {
    id: 4,
    type: 'flash',
    text: 'Vente flash',
  },
] satisfies ITag[];
