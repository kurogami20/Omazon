import { NavLink } from 'react-router';
import type { ICategory } from 'src/@types';

interface CategoryProps {
  category: ICategory;
}

const Category = ({ category }: CategoryProps) => {
  return (
    <NavLink to={`category/${category.slug}`} className="category">
      <div className="container">
        <img src={category.image} alt={category.title} />
      </div>
      <h3>{category.title}</h3>
    </NavLink>
  );
};

export default Category;
