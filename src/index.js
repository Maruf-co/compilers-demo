import 'bulma/css/bulma.css';
import './styles.css';

import React from 'react';
import { createRoot } from 'react-dom/client';

import { QueryClient, QueryClientProvider } from 'react-query';

import App from './App';

const el = document.getElementById('root');

const root = createRoot(el);

const queryClient = new QueryClient();

root.render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);
