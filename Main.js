import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Main.css';

const Main = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get('https://api.escuelajs.co/api/v1/products')
      .then(response => {
        setProducts(response.data.slice(1, 11));
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to load products. Please try again later.');
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading && <div className="loading">Loading...</div>}
      {error && <div className="error-message">{error}</div>}
      <div className="product-grid">
        {products.map(product => (
          <div className="product-card" key={product.id}>
            <img src={product.images[0]} alt={product.title} />
            <h3 className="product-title">{product.title}</h3>
            <p className="product-price">${product.price.toFixed(2)}</p>
            <p className="product-description">
              {product.description.substring(0, 100)}...
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;
