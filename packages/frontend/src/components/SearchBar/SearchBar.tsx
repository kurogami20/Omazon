import MagnifyingGlassIcon from '@assets/icons/magnifying-glass.svg?react';
import type { ICategory, IProduct } from 'src/@types';
import './SearchBar.scss';
import { FormEvent, useState } from 'react';
import { NavLink } from 'react-router';
interface SearchBarProps {
  categories: ICategory[];
  products: IProduct[];
  search: React.Dispatch<React.SetStateAction<IProduct[]>>;
}

export default function SearchBar({
  categories,
  products,
  search,
}: SearchBarProps) {
  const [searchText, setSearchText] = useState('');
  const filteredSearch = products.filter((product) =>
    product.title.toLowerCase().includes(searchText.toLowerCase()),
  );

  const hidden = searchText ? 'results' : 'results hidden';

  function searchSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const productFiltered = products.filter((product) =>
      product.title.toLowerCase().includes(searchText.toLowerCase()),
    );
    if (productFiltered) {
      search(productFiltered);
      document.querySelector('#category_home')?.classList.add('hidden');
    }
    // event.currentTarget.reset();
  }

  return (
    <form
      className="search-bar"
      onSubmit={(event) => {
        searchSubmit(event);
      }}
    >
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
          }}
        />

        {/* TODO : retirer la classe 'hidden' pour voir apparaitre les résultats, puis faire fonctionner la barre de recherche */}
        <ul className={hidden}>
          {filteredSearch.map((prod) => (
            <li
              className="result"
              key={prod.slug}
              onClick={() => {
                setSearchText('');
              }}
            >
              <MagnifyingGlassIcon className="magnifying-glass-icon small" />
              <span>
                {' '}
                <NavLink to={`articles/${prod.slug}`}>{prod.title}</NavLink>
              </span>
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
