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
  if (document.querySelector('#tag')) {
    document.querySelector('#tag').style.color = '#FF9900';
  }
  return (
    <article>
      <h1>{product?.title}</h1>

      <strong>Catégorie: {product?.category?.title}</strong>
      <img src={product?.image} alt="" />
      <strong id="tag">{product?.tag?.text} </strong>
      {/* biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation> */}
      <div dangerouslySetInnerHTML={description} />
      <strong>{product?.price}€</strong>
    </article>
  );
};

export default ProductPage;
