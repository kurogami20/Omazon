import Button from '@components/Button/Button';
import type { IProduct } from 'src/@types';

interface ProductProps {
  product: IProduct;
}

const Product = ({ product }: ProductProps) => {
  return (
    <article className="product">
      <a href={product.slug}>
        <div className="container">
          <img src={product.image} alt={product.title} />
        </div>
        <div className="details">
          <h3 className="title">{product.title}</h3>
          <div className="price">{product.price} €</div>
          <Button text="Ajouter au panier" />
        </div>
      </a>
    </article>
  );
};

export default Product;
