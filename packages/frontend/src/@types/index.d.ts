export interface ITag {
  id: number;
  type: string;
  text: string;
}

export interface ICategory {
  id: number;
  title: string;
  slug: string;
  image: string;
}

export interface IProduct {
  id: number;
  title: string;
  slug: string;
  price: number;
  image: string;
  description: string;
  categoryId: number;
  tagId: number;
  tag?: ITag;
  category?: ICategory;
}
