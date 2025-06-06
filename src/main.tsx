// main.tsx or index.tsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import { clientConfig } from './client-config.ts';

// Set theme, title, tab img
document.documentElement.setAttribute('data-theme', clientConfig.daisy_theme);
document.title = clientConfig.short_name || "Default Title";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
