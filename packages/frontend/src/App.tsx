import './App.scss';

import Footer from '@components/Footer/Footer';
import Header from '@components/Header/Header';
import HomePage from '@pages/HomePage/HomePage';
import type { ICategory, IProduct } from './@types';
import cateFetch from './services/categories';
import prodFetch from './services/products';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router';
import CategoriesPage from '@pages/CategoriesPage/CategoriesPage';
import ProductPage from '@pages/ProductPage/ProductPage';
import CategoryPage from '@pages/categoryPage/CategoryPage';
import NotFound from '@pages/NotFound/NotFound';
import SearchResultPage from '@pages/SearchResultPage/SearchResultPage';

export default function App() {
  const [categoryTab, setCategoryTab] = useState<ICategory[]>([]);
  const [productTab, setProductTab] = useState<IProduct[]>([]);
  const [productSearched, setProductSearched] = useState<IProduct[]>([]);
  useEffect(() => {
    async function getCategory() {
      const categories = await cateFetch.all();
      const products = await prodFetch.all();
      setCategoryTab(categories);
      setProductTab(products);
      setProductSearched(products);
    }
    getCategory();
  }, []);
  return (
    <div className="app">
      <Header
        categories={categoryTab}
        products={productTab}
        search={setProductSearched}
      />

      <main className="main">
        <Routes>
          <Route
            path="/"
            element={
              <HomePage categories={categoryTab} products={productSearched} />
            }
          />

          <Route
            path="/articles/:slug"
            element={<ProductPage products={productTab} />}
          />
          <Route
            path="/category/:slug"
            element={
              <CategoryPage products={productTab} categories={categoryTab} />
            }
          />

          <Route
            path="/categories"
            element={<CategoriesPage categories={categoryTab} />}
          />
          <Route
            path="/search"
            element={<SearchResultPage result={productSearched} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
