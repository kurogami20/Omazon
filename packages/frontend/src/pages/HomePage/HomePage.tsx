import categories from "@data/categories";
import products from "@data/products";
import CategoryCard from "@components/category/category";
import ProductCard from "@components/Product/Product";
import "./HomePage.scss";

export default function HomePage() {
  return (
    <div className="home">
      <section>
        <h2>Catégories à l'honneur</h2>

        <ul className="categories">
          {categories.slice(0, 5).map((category) => (
            <li key={category.id}>
              <CategoryCard category={category} />
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Tous nos produits</h2>

        <ul className="products">
          {products.map((product) => (
            <li key={product.id}>
             <ProductCard product={product} />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
