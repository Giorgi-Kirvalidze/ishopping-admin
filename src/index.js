import ReactDOM from 'react-dom/client';
import React from 'react';
import Admin from './Admin';
import { BrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Layout>
      <Admin />
    </Layout>
  </BrowserRouter>
);
