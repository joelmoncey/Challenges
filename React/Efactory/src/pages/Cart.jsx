import React from 'react';
import { Link } from 'react-router-dom';
import { useCartStore } from '../store/cartStore';
import { FaTrash, FaArrowRight } from 'react-icons/fa6';

const Cart = () => {
  // Access state and actions from Zustand store
  const cartItems = useCartStore((state) => state.cartItems);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const getTotalPrice = useCartStore((state) => state.getTotalPrice);
  
  // We can reuse addToCart to increase quantity, but for a full implementation, 
  // you might want to add specific increase/decrease actions to your store later.

  const subtotal = getTotalPrice();
  const shipping = subtotal > 100 ? 0 : 10.00; // Free shipping over $100
  const tax = subtotal * 0.08; // 8% estimated tax
  const total = subtotal + shipping + tax;

  // Render Empty State if cart is empty
  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
        <div className="text-center">
          <svg className="mx-auto h-24 w-24 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Your cart is empty</h2>
          <p className="mt-2 text-gray-500">Looks like you haven't added anything to your cart yet.</p>
          <div className="mt-6">
            <Link
              to="/shop"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 shadow-sm transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Render populated cart
  return (
    <div className="min-h-screen bg-gray-50 pt-12 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 mb-10">Shopping Cart</h1>

        <div className="lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start">
          
          {/* Cart Items List */}
          <section className="lg:col-span-7">
            <ul className="border-t border-b border-gray-200 divide-y divide-gray-200">
              {cartItems.map((item) => (
                <li key={item.id} className="flex py-6 sm:py-10">
                  
                  {/* Product Image */}
                  <div className="flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-24 h-24 rounded-md object-center object-cover sm:w-32 sm:h-32 border border-gray-200"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="ml-4 flex-1 flex flex-col justify-between sm:ml-6">
                    <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                      <div>
                        <div className="flex justify-between">
                          <h3 className="text-sm">
                            <Link to={`/product/${item.id}`} className="font-medium text-gray-700 hover:text-gray-800">
                              {item.title}
                            </Link>
                          </h3>
                        </div>
                        <p className="mt-1 text-sm text-gray-500">{item.category}</p>
                        <p className="mt-1 text-sm font-medium text-gray-900">${item.price.toFixed(2)}</p>
                      </div>

                      <div className="mt-4 sm:mt-0 sm:pr-9 flex items-center">
                        <span className="text-gray-500 text-sm">Qty: {item.quantity}</span>
                        
                        {/* Remove Button */}
                        <div className="absolute top-0 right-0 sm:relative sm:ml-auto">
                          <button
                            type="button"
                            onClick={() => removeFromCart(item.id)}
                            className="-m-2 p-2 inline-flex text-gray-400 hover:text-red-500 transition-colors"
                          >
                            <span className="sr-only">Remove</span>
                            <FaTrash className="h-5 w-5" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                </li>
              ))}
            </ul>
          </section>

          {/* Order Summary */}
          <section className="mt-16 bg-white rounded-lg border border-gray-200 px-4 py-6 sm:p-6 lg:p-8 lg:mt-0 lg:col-span-5 shadow-sm">
            <h2 className="text-lg font-medium text-gray-900 mb-6">Order summary</h2>

            <dl className="space-y-4 text-sm text-gray-600">
              <div className="flex items-center justify-between">
                <dt>Subtotal</dt>
                <dd className="font-medium text-gray-900">${subtotal.toFixed(2)}</dd>
              </div>
              <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                <dt className="flex items-center">
                  <span>Shipping estimate</span>
                </dt>
                <dd className="font-medium text-gray-900">
                  {shipping === 0 ? <span className="text-green-600 font-semibold">Free</span> : `$${shipping.toFixed(2)}`}
                </dd>
              </div>
              <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                <dt className="flex">
                  <span>Tax estimate</span>
                </dt>
                <dd className="font-medium text-gray-900">${tax.toFixed(2)}</dd>
              </div>
              <div className="flex items-center justify-between border-t border-gray-200 pt-4 text-base font-bold text-gray-900">
                <dt>Order total</dt>
                <dd>${total.toFixed(2)}</dd>
              </div>
            </dl>

            <div className="mt-8">
              <Link
                to="/checkout"
                className="w-full flex items-center justify-center px-4 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-orange-600 hover:bg-orange-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
              >
                Checkout <FaArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            
            <div className="mt-6 text-center text-sm text-gray-500">
              <p>
                or{' '}
                <Link to="/shop" className="text-blue-600 font-medium hover:text-blue-500 transition-colors">
                  Continue Shopping<span aria-hidden="true"> &rarr;</span>
                </Link>
              </p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default Cart;