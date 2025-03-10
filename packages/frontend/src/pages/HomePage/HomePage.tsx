import categories from "@data/categories";
import products from "@data/products";
import Button from "@components/Button/Button";
import "./HomePage.scss";

export default function HomePage() {
  return (
    <div className="home">
      <section>
        <h2>Catégories à l'honneur</h2>

        <ul className="categories">
          {categories.slice(0, 5).map((category) => (
            <li key={category.id}>
              {/* TODO : extraire ce lien <a> et le CSS associé dans un composant CategoryCard.tsx */}
              <a href="#" className="category">
                <div className="container">
                  <img src={category.image} alt={category.title} />
                </div>
                <h3>{category.title}</h3>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Tous nos produits</h2>

        <ul className="products">
          {products.map((product) => (
            <li key={product.id}>
              {/* TODO : extraire cet <article> et le CSS associé dans un composant ProductCard.tsx */}
              <article className="product">
                <div className="container">
                  <img src={product.image} alt={product.title} />
                </div>
                <div className="details">
                  <h3 className="title">{product.title}</h3>
                  <div className="price">{product.price} €</div>
                  <Button text="Ajouter au panier" />
                </div>
              </article>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
