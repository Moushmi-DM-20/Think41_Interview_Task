// src/components/ProductsGrid.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api';
import './style.css'; // create CSS for grid layout

function ProductsGrid() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get('/products')
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="grid-container">
      {products.map(product => (
        <Link key={product.id} to={`/product/${product.id}`} className="product-card">
          <h3>{product.name}</h3>
          <p>₹{product.price}</p>
          <p>{product.category}</p>
        </Link>
      ))}
    </div>
  );
}

export default ProductsGrid;
