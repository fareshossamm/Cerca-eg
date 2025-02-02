import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import './Products.css';
import img1 from './IMGS/G3.webp'; 
import img2 from './IMGS/p2.webp'; 
import img3 from './IMGS/G5.webp'; 
import img4 from './IMGS/p4.webp'; 
import img5 from './IMGS/p5_1.webp'; 
import img6 from './IMGS/P6_1.webp'; 
import img7 from './IMGS/white2.webp'; 
import img8 from './IMGS/blue4.webp'; 
import img9 from './IMGS/gray double.webp'; 
import img10 from './IMGS/gray1.webp'; 

const productsData = [
  { id: 7, name: 'White Slogan', type: 'Print', oldPrice: 'EGP 1000', price: 'EGP 750', img: img7 },
  { id: 8, name: 'Blue Horizon Hoodie', type: 'Print', oldPrice: 'EGP 1000', price: 'EGP 750', img: img8 },
  { id: 9, name: 'Cerca Culture', type: 'Print', oldPrice: 'EGP 1000', price: 'EGP 750', img: img9, isOutOfStock: true },
  { id: 10, name: 'Street', type: 'Print', oldPrice: 'EGP 1000', price: 'EGP 750', img: img10 },
  { id: 1, name: 'Cerca Starlight', type: 'Print', oldPrice: 'EGP 1100', price: 'EGP 850', img: img1 },
  { id: 2, name: 'Starry Night', type: 'Print', oldPrice: 'EGP 1100', price: 'EGP 850', img: img2 },
  { id: 3, name: 'Cerca White Lines', type: 'Print', oldPrice: 'EGP 1100', price: 'EGP 850', img: img3 },
  { id: 4, name: 'Simple Edge', type: 'Basic', oldPrice: 'EGP 1000', price: 'EGP 750', img: img4 },
  { id: 5, name: 'Simple Edge', type: 'Basic', oldPrice: 'EGP 1000', price: 'EGP 750', img: img5 },
  { id: 6, name: 'Simple Edge', type: 'Basic', oldPrice: 'EGP 1000', price: 'EGP 750', img: img6 },
];

function Products() {
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const filteredProducts = filter === 'All' 
    ? productsData 
    : productsData.filter(product => product.type === filter);

  return (
    <div className="products-section">
      <h2 className="products-title" data-aos="fade-down">Our Collection</h2>
      
      {/* Filter Buttons */}
      <div className="filter-buttons" data-aos="fade-up">
        {['All', 'Basic', 'Print'].map((type) => (
          <button 
            key={type} 
            onClick={() => setFilter(type)}
            className={filter === type ? 'active-filter' : ''}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="products-grid">
        {filteredProducts.map((product) => (
          <div 
            key={product.id} 
            className={`product-card ${product.isOutOfStock ? 'out-of-stock' : ''}`}
            data-aos="fade-up"
          >
            {product.isOutOfStock && <div className="badges">Out of Stock</div>}
            <Link to={`/product/${product.id}`} className="product-link">
              <img src={product.img} alt={product.name} className="product-img" />
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-price">
                  <span className="old-price">{product.oldPrice}</span>
                  <span className="new-price">{product.price}</span>
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
