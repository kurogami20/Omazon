import './App.scss';

import Footer from '@components/Footer/Footer';
import Header from '@components/Header/Header';
import HomePage from '@pages/HomePage/HomePage';
import type { ICategory, IProduct } from './@types';
import cateFetch from './services/categories';
import prodFetch from './services/products';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router';

export default function App() {
  const [categoryTab, setCategoryTab] = useState<ICategory[]>([]);
  const [productTab, setProductTab] = useState<IProduct[]>([]);
  useEffect(() => {
    async function getCategory() {
      const categories = await cateFetch.all();
      const products = await prodFetch.all();
      setCategoryTab(categories);
      setProductTab(products);
    }
    getCategory();
  }, []);
  return (
    <div className="app">
      <Header categories={categoryTab} products={productTab} />

      <main className="main">
        <Routes>
          <Route
            path="/"
            element={
              <HomePage categories={categoryTab} products={productTab} />
            }
          />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
