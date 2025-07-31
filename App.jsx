import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProductsGrid from './components/ProductsGrid';
import ProductDetail from './components/ProductDetail';

function App() {
  return (
    <Routes>
      <Route path="/" element={<ProductsGrid />} />
      <Route path="/product/:id" element={<ProductDetail />} />
    </Routes>
  );
}

export default App;
