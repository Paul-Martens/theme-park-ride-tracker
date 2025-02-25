import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './App.tsx';

import './main.css';

const container = document.getElementById('react-app')!;

createRoot(container).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
