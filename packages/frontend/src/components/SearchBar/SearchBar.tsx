import MagnifyingGlassIcon from '@assets/icons/magnifying-glass.svg?react';
import type { ICategory, IProduct } from 'src/@types';
import './SearchBar.scss';
import { useEffect, useState } from 'react';
import cateFetch from '../../services/categories';
interface SearchBarProps {
  categories: ICategory[];
  products: IProduct[];
}

export default function SearchBar({ categories, products }: SearchBarProps) {
  const [searchText, setSearchText] = useState('');
  const filteredSearch = products.filter((product) =>
    product.title.toLowerCase().includes(searchText.toLowerCase()),
  );

  return (
    <form className="search-bar">
      <select>
        <option>Toutes nos catégories</option>
        {categories.map((category) => (
          <option key={category.id}>{category.title}</option>
        ))}
      </select>

      <div className="container ">
        <input
          id="searchText"
          type="text"
          placeholder="Rechercher sur Omazon"
          value={searchText}
          onChange={(event) => {
            setSearchText(event.currentTarget.value);
            const container = event.currentTarget.closest('.container');
            const ulElm = container?.querySelector('ul');
            console.log(ulElm);
            if (!filteredSearch) {
              ulElm?.classList.add('hidden');
            } else {
              ulElm?.classList.remove('hidden');
            }
          }}
        />

        {/* TODO : retirer la classe 'hidden' pour voir apparaitre les résultats, puis faire fonctionner la barre de recherche */}
        <ul className="results hidden">
          {filteredSearch.map((prod) => (
            <li className="result" key={prod.slug}>
              <MagnifyingGlassIcon className="magnifying-glass-icon small" />
              <span>{prod.title}</span>
            </li>
          ))}
        </ul>
      </div>
      <button type="submit">
        <MagnifyingGlassIcon className="magnifying-glass-icon" />
        <span className="sr-only">Rechercher</span>
      </button>
    </form>
  );
}
