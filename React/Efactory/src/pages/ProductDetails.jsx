import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { useCartStore } from '../store/cartStore';
import Navbar from '../components/layout/Navbar';
import { useToast } from '../components/ui/Toast';

const ProductDetails = () => {
  // 1. Extract the dynamic ID from the URL (e.g., /product/3 -> id = "3")
  const { id } = useParams();

  // 2. Find the product in our data array. 
  // (Note: useParams returns a string, so we convert it to a Number to match our data)
  const product = products.find((p) => p.id === Number(id));

  // Access our Zustand store action
  const addToCart = useCartStore((state) => state.addToCart);
  const { showToast } = useToast();

  // If the user types a random ID that doesn't exist, show an error state
  if (!product) {
    return (
     
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Product Not Found</h2>
        <p className="text-gray-500 mb-8">We couldn't find the product you're looking for.</p>
        <Link to="/shop" className="text-blue-600 hover:underline">
          &larr; Back to Shop
        </Link>
      </div>
    );
  }

  // If product is found, render the page
  return (
    <>
    <Navbar/>
    <div className="bg-white min-h-screen">
      <div className="pt-6 pb-16 sm:pb-24">
        
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <ol className="flex items-center space-x-2 text-sm text-gray-500">
            <li><Link to="/" className="hover:text-gray-900">Home</Link></li>
            <li><span className="mx-2">/</span></li>
            <li><Link to="/shop" className="hover:text-gray-900">Shop</Link></li>
            <li><span className="mx-2">/</span></li>
            <li className="text-gray-900 font-medium">{product.category}</li>
          </ol>
        </nav>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16">
            
            {/* ================= LEFT: Large Image ================= */}
            <div className="flex-col-reverse lg:flex-row lg:flex">
              <div className="w-full aspect-square rounded-2xl overflow-hidden bg-gray-100 shadow-lg">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-center object-cover"
                />
              </div>
            </div>

            {/* ================= RIGHT: Product Info ================= */}
            <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
              
              {/* Title */}
              <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                {product.title}
              </h1>

              {/* Price */}
              <div className="mt-4">
                <h2 className="sr-only">Product information</h2>
                <p className="text-3xl font-bold text-gray-900">${product.price.toFixed(2)}</p>
              </div>

              {/* Rating */}
              <div className="mt-4">
                <h3 className="sr-only">Reviews</h3>
                <div className="flex items-center">
                  <div className="flex items-center text-yellow-400">
                    <svg className="h-5 w-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <span className="ml-2 text-sm text-gray-600">{product.rating} out of 5 stars</span>
                </div>
              </div>

              {/* Description */}
              <div className="mt-6">
                <h3 className="sr-only">Description</h3>
                <div className="text-base text-gray-700 space-y-6">
                  <p>{product.description}</p>
                </div>
              </div>

              {/* Add to Cart Form / Button */}
              <div className="mt-10">
                <button
                  type="button"
                  onClick={() => {
                    addToCart(product);
                    showToast(`${product.title} added to your cart.`, 'success');
                  }}
                  className="w-full bg-orange-600 border border-transparent rounded-lg py-4 px-8 flex items-center justify-center text-lg font-medium text-white hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 shadow-md transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  Add to Cart
                </button>
              </div>

              {/* Extras (Shipping info, guarantees) */}
              <div className="mt-8 border-t border-gray-200 pt-8">
                <div className="flex items-center text-sm text-gray-500 space-x-6">
                  <span className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    In stock & ready to ship
                  </span>
                  <span className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                    Free shipping over $100
                  </span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default ProductDetails;