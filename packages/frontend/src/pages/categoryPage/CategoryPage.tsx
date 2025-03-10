import { NavLink, useParams } from 'react-router';
import type { ICategory, IProduct } from 'src/@types';
import ProductCard from '@components/Product/Product';
import './CategoryPage.scss';
interface CategoryPageProps {
  categories: ICategory[];
  products: IProduct[];
}

const CategoryPage = ({ categories, products }: CategoryPageProps) => {
  const slug = useParams().slug;
  const category = categories.find((cate) => cate.slug === slug);
  const productFromCategory = products.filter(
    (prod) => prod.category?.slug === slug,
  );
  return (
    <div>
      <section className="category_header">
        <img src={category?.image} alt="" />
        <h2>{category?.title}</h2>
      </section>
      <section>
        {productFromCategory[0] ? (
          <>
            <h2>Tous les produits de {category?.title} </h2>
            <ul className="products">
              {productFromCategory.map((product) => (
                <li key={product.id}>
                  <NavLink to={`/articles/${product.slug}`}>
                    <ProductCard product={product} />
                  </NavLink>
                </li>
              ))}
            </ul>
          </>
        ) : (
          <p>Pas encore d'articles</p>
        )}
      </section>
    </div>
  );
};

export default CategoryPage;
