import { useParams } from 'react-router';
import type { IProduct } from 'src/@types';
import DOMPurify from 'dompurify';

interface ProductPage {
  products: IProduct[];
}

const ProductPage = ({ products }: ProductPage) => {
  const slug = useParams();
  const product = products.find((prod) => prod.slug === slug.slug);
  console.log(product);
  const description = { __html: DOMPurify.sanitize(product?.description) };
  return (
    <article>
      <h1>{product?.title}</h1>
      <img src={product?.image} alt="" />
      {/* biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation> */}
      <div dangerouslySetInnerHTML={description} />
      <p>{product?.price}€</p>
    </article>
  );
};

export default ProductPage;
