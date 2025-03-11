import { NavLink } from 'react-router';
import type { IProduct } from 'src/@types';
import ProductCard from '@components/Product/Product';
interface SearchResultProps {
  result: IProduct[];
}

const SearchResult = ({ result }: SearchResultProps) => {
  return (
    <ul className="products">
        {result[0]?(  result.map((product) => (
        <li key={product.id}>
          <NavLink to={`/articles/${product.slug}`}>
            <ProductCard product={product} />
          </NavLink>
        </li>
      ))):"Il n'existe aucun produits correspondant à votre recherche."}
    </ul>
  );
};

export default SearchResult;
