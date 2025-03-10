import omazonLogoLight from '@assets/images/omazon-light.svg';
import CartIcon from '@assets/icons/cart.svg?react';
import MenuIcon from '@assets/icons/menu.svg?react';
import './Header.scss';

// import categories from '@data/categories';
// import products from '@data/products';
import SearchBar from '@components/SearchBar/SearchBar';
import type { ICategory, IProduct } from 'src/@types';
import { NavLink } from 'react-router';

interface HeaderProps {
  categories: ICategory[];
  products: IProduct[];
}

export default function Header({ categories, products }: HeaderProps) {
  return (
    <header className="header">
      <a href="/" className="logo">
        <img src={omazonLogoLight} alt="Logo Omazon" />
      </a>

      <div className="search">
        <SearchBar categories={categories} products={products} />
      </div>

      <nav className="d-contents">
        <ul className="d-contents">
          <li className="connect">
            <div>Bonjour, identifiez-vous</div>
            <span className="bold">Compte et listes</span>
          </li>

          <li className="cart">
            <a href="#" className="cart-link">
              <span className="cart-count">0</span>
              <CartIcon className="cart-icon" />
              <span className="cart-text bold">Panier</span>
            </a>
          </li>
        </ul>
      </nav>

      <ul className="categories">
        <li>
          <NavLink to={'/categories'} className="all-categories">
            <MenuIcon className="menu-icon" />
            <span>Toutes les catégories</span>{' '}
          </NavLink>
        </li>

        {categories.map((category) => (
          <li key={category.id}>
            <NavLink to={category.slug}>{category.title} </NavLink>
          </li>
        ))}
      </ul>
    </header>
  );
}
