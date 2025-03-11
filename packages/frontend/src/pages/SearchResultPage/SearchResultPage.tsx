import { NavLink } from 'react-router';
import type { IProduct } from 'src/@types';
import ProductCard from '@components/Product/Product';
interface SearchResultProps {
  result: IProduct[];
}

const SearchResult = ({ result }: SearchResultProps) => {
  return (
    <ul className="products">
      {result.map((product) => (
        <li key={product.id}>
          <NavLink to={`/articles/${product.slug}`}>
            <ProductCard product={product} />
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default SearchResult;
