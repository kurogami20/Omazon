import './App.scss';

import Footer from '@components/Footer/Footer';
import Header from '@components/Header/Header';
import HomePage from '@pages/HomePage/HomePage';

export default function App() {
  return (
    <div className="app">
      <Header />

      <main className="main">
        <HomePage />
      </main>

      <Footer />
    </div>
  );
}
