import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProductsGrid from './components/ProductsGrid';
import ProductDetails from './components/ProductDetail';

function App() {
  return (
    <Routes>
      <Route path="/" element={<ProductsGrid />} />
      <Route path="/product/:id" element={<ProductDetails />} />
    </Routes>
  );
}

export default App;
