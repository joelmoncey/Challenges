import React from 'react';
import ProductCard from '../components/product/ProductCard';
import { products } from '../data/products';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#F3F4F6]">
      
       
       
        <Navbar />
      

      <main className="flex-grow">
        
        {/* ================= HERO SECTION ================= */}
        <section className="relative bg-[#F3F4F6] overflow-hidden">
          {/* Decorative Background Blob */}
          <div className="hidden lg:block absolute top-0 right-0 -mr-20 -mt-20 opacity-50">
            <svg width="600" height="600" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="#9575CD" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,81.3,-46.3C90.8,-33.5,96.8,-18,95.4,-3.1C94,11.8,85.2,26.1,75.3,38.5C65.4,50.9,54.4,61.4,41.7,69.5C29,77.6,14.5,83.3,-0.6,84.3C-15.7,85.3,-31.4,81.6,-44.6,73.4C-57.8,65.2,-68.5,52.5,-76.4,38.5C-84.3,24.5,-89.4,9.2,-88.4,-5.7C-87.4,-20.6,-80.3,-35.1,-70.5,-46.8C-60.7,-58.5,-48.2,-67.4,-34.9,-75.1C-21.6,-82.8,-10.8,-89.3,2.3,-93.1C15.4,-96.9,30.6,-83.6,44.7,-76.4Z" transform="translate(100 100)" />
            </svg>
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="relative z-10 pb-8 bg-[#F3F4F6] sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
              
              <div className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                <div className="sm:text-center lg:text-left">
                  
                  {/* Badge */}
                  <span className="inline-flex items-center rounded-full bg-[#33D0B8] px-3 py-1 text-sm font-semibold text-[#512DA8] mb-6">
                    New Arrivals 2026
                  </span>

                  {/* Main Headline */}
                  <h1 className="text-4xl tracking-tight font-extrabold text-[#111827] sm:text-5xl md:text-6xl">
                    <span className="block xl:inline">Upgrade your tech</span>{' '}
                    <span className="block text-[#673AB7] xl:inline">for the season</span>
                  </h1>
                  
                  {/* Subtext */}
                  <p className="mt-3 text-base text-[#4B5563] sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                    Discover our latest collection featuring premium electronics, modern accessories, and gear guaranteed to elevate your workflow. Free shipping on orders over $100.
                  </p>
                  
                  {/* CTA Buttons */}
                  <div className="mt-5 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:justify-center lg:justify-start">
                    <div className="w-full rounded-md shadow sm:w-auto">
                      <button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-[#FFFFFF] bg-[#00BFA5] hover:bg-[#008573] transition duration-150 ease-in-out md:py-4 md:text-lg">
                        Shop Now
                      </button>
                    </div>
                    <div className="w-full sm:w-auto">
                      <button className="w-full flex items-center justify-center px-8 py-3 border border-[#9575CD] text-base font-medium rounded-md text-[#4B5563] bg-[#FFFFFF] hover:bg-[#F3F4F6] transition duration-150 ease-in-out md:py-4 md:text-lg">
                        View Lookbook
                      </button>
                    </div>
                  </div>
                  
                  {/* Trust Indicators */}
                  <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 border-t border-[#9575CD] pt-8 text-sm text-[#4B5563] lg:justify-start">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-[#00BFA5] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                      Free Returns
                    </div>
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-[#00BFA5] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                      Secure Checkout
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <img
              className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full shadow-xl"
              src="https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
              alt="Modern workspace setup"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#F3F4F6] to-transparent lg:from-transparent"></div>
          </div>
        </section>


        {/* ================= PRODUCT GRID SECTION ================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          
          {/* Section Header */}
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-3xl font-extrabold text-[#111827] tracking-tight">
              Featured Products
            </h2>
            <a href="/shop" className="text-[#673AB7] hover:text-[#512DA8] font-medium hidden sm:block">
              View all products &rarr;
            </a>
          </div>

          {/* Grid mapping through the products.js data */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Mobile view all link */}
          <div className="mt-10 sm:hidden">
            <a href="/shop" className="block w-full text-center px-4 py-3 border border-[#9575CD] shadow-sm text-sm font-medium rounded-md text-[#4B5563] bg-[#FFFFFF] hover:bg-[#F3F4F6]">
              View all products
            </a>
          </div>

        </section>
        
      </main>

      
        <Footer />
    
      
    </div>
  );
};

export default Home;