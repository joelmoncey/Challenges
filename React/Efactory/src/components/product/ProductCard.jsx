// src/components/product/ProductCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useCartStore } from '../../store/cartStore';

const ProductCard = ({ product }) => {
  const { title, price, rating, image, category } = product;
  
  // Pull the addToCart function from our Zustand store
  const addToCart = useCartStore((state) => state.addToCart);

  const handleAddToCart = () => {
    addToCart(product);
    // Optional: Add a toast notification here later!
    console.log(`Added ${title} to global cart store!`);
  };

  return (
    <div className="flex flex-col bg-[#FFFFFF] rounded-xl shadow-sm border border-[#9575CD]/30 overflow-hidden hover:shadow-lg transition-shadow duration-300">
      
      <Link to={`/product/${product.id}`} className="relative aspect-[4/3] w-full overflow-hidden bg-[#F3F4F6] group">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-in-out"
          />
          <span className="absolute top-3 left-3 bg-[#FFFFFF]/90 backdrop-blur-sm px-2 py-1 text-xs font-semibold text-[#4B5563] rounded shadow-sm">
            {category}
          </span>
      </Link>

      <div className="p-5 flex flex-col flex-grow">
        <Link to={`/product/${product.id}`} className="text-lg font-semibold text-[#111827] mb-1 line-clamp-1 hover:text-[#673AB7] transition-colors cursor-pointer">
          {title}
        </Link>

        <div className="flex items-center mb-4">
          <div className="flex items-center text-[#FFB300]">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
          <span className="ml-1.5 text-sm text-[#4B5563] font-medium">{rating}</span>
        </div>

        <div className="mt-auto flex items-center justify-between">
          <span className="text-xl font-bold text-[#111827]">
            ${price.toFixed(2)}
          </span>
          
          <button 
            // Trigger our handleAddToCart function on click
            onClick={handleAddToCart}
            className="flex items-center justify-center px-4 py-2 bg-[#00BFA5] text-[#FFFFFF] text-sm font-medium rounded-lg hover:bg-[#008573] transition-colors focus:outline-none focus:ring-2 focus:ring-[#00BFA5] focus:ring-offset-2"
          >
            <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;