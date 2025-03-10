import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App.tsx';
import './assets/styles/index.scss';
import { BrowserRouter } from 'react-router';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('No root element found in index.html');
}

createRoot(rootElement).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
