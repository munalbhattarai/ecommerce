import React from 'react';
import './FeaturedProducts.css';
import dennim from '../assets/dennim.webp';
import snekers from '../assets/snekers.webp';
import bag from '../assets/bag.webp';

const products = [
  { id: 1, name: 'Denim Jacket', price: '$49.99', img : dennim , alt :'Jacket' },
  { id: 2, name: 'Sneakers', price: '$89.99', img: snekers , alt :'snekers' },
  { id: 3, name: 'Handbag', price: '$69.99', img : bag , alt :'bag' },
];

const FeaturedProducts = () => {
  return (
    <section className="featured">
      <h2>Featured Products</h2>
      <div className="product-grid">
        {products.map(product => (
          <div className="product-card" key={product.id}>
            <img src={product.img} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
