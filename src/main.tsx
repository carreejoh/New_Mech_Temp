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

const setFavicon = (url: string, type = "image/png") => {
  let link = document.querySelector("link[rel~='icon']") as HTMLLinkElement | null;

  if (!link) {
    link = document.createElement("link");
    link.rel = "icon";
    document.head.appendChild(link);
  }

  link.type = type;
  link.href = url;
};

setFavicon("/brand_imgs/browser_logo.png");

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
