import type { ICategory } from 'src/@types';
import CategoryCard from '@components/category/category';
import './CategoriesPage.scss';

interface CategoriesPageProps {
  categories: ICategory[];
}

const CategoriesPage = ({ categories }: CategoriesPageProps) => {
  return (
    <div className="cat">
      <section>
        <h2>Toutes les catégories</h2>

        <ul className="categories">
          {categories.map((category) => (
            <li key={category.id}>
              
              <CategoryCard category={category} />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default CategoriesPage;
