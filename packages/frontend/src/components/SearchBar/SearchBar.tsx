import MagnifyingGlassIcon from "@assets/icons/magnifying-glass.svg?react"
import type { ICategory } from "src/@types"
import "./SearchBar.scss"

export default function SearchBar({ categories }: SearchBarProps) {
  return (
    <form className="search-bar">
      <select>
        <option>Toutes nos catégories</option>
        {categories.map(category => <option key={category.id}>{category.title}</option>)}
      </select>

      <div className="container">
        <input type="text" placeholder="Rechercher sur Omazon" />
        
        {/* TODO : retirer la classe 'hidden' pour voir apparaitre les résultats, puis faire fonctionner la barre de recherche */}
        <ul className="results hidden">
          <li className="result">
            <MagnifyingGlassIcon className="magnifying-glass-icon small" />
            <span>Résultat 1</span>
          </li>

          <li className="result">
            <MagnifyingGlassIcon className="magnifying-glass-icon small" />
            <span>Résultat 2</span>
          </li>
        </ul>

      </div>


      <button type="submit">
        <MagnifyingGlassIcon className="magnifying-glass-icon" />
        <span className="sr-only">Rechercher</span>
      </button>

    </form>
  )
}

interface SearchBarProps {
  categories: ICategory[];
}
