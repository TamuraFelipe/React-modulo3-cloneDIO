import React from 'react';
import ReactDOM from 'react-dom/client';

import { Router } from './routes';

import { GlobalStyles } from './styles/GlobalStyles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <Router />
  </React.StrictMode>
);
