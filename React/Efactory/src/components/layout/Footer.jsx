import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaTwitter, FaTiktok } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-[#673AB7] text-white">
      
      {/* ================= NEWSLETTER SECTION ================= */}
      <div className="border-b border-[#9575CD]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-extrabold tracking-tight">
                Join the drop.
              </h2>
              <p className="mt-3 max-w-3xl text-lg text-[#F3F4F6]">
                Subscribe to our newsletter to get early access to new releases, exclusive discounts, and insider news.
              </p>
            </div>
            <div className="mt-8 lg:mt-0 lg:w-1/2 lg:flex lg:justify-end">
              <form className="sm:flex w-full lg:max-w-md">
                <label htmlFor="email-address" className="sr-only">Email address</label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="w-full px-5 py-3 border border-transparent placeholder-gray-500 text-[#111827] bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#673AB7]"
                  placeholder="Enter your email"
                />
                <button
                  type="submit"
                  className="mt-3 w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#00BFA5] hover:bg-[#33D0B8] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#673AB7] sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0 transition-colors shadow-lg"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* ================= LINKS SECTION ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          
          {/* Column 1 */}
          <div>
            <h3 className="text-sm font-bold tracking-wider uppercase text-[#33D0B8]">Shop</h3>
            <ul className="mt-4 space-y-3">
              <li><Link to="/shop/new" className="text-base text-[#F3F4F6] hover:text-white hover:underline transition-all">New Arrivals</Link></li>
              <li><Link to="/shop/sneakers" className="text-base text-[#F3F4F6] hover:text-white hover:underline transition-all">Sneakers</Link></li>
              <li><Link to="/shop/streetwear" className="text-base text-[#F3F4F6] hover:text-white hover:underline transition-all">Streetwear</Link></li>
              <li><Link to="/shop/sale" className="text-base text-[#FFB300] font-medium hover:text-white transition-all">Sale (Low Stock)</Link></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-sm font-bold tracking-wider uppercase text-[#33D0B8]">Support</h3>
            <ul className="mt-4 space-y-3">
              <li><Link to="/track-order" className="text-base text-[#F3F4F6] hover:text-white hover:underline transition-all">Track Order</Link></li>
              <li><Link to="/returns" className="text-base text-[#F3F4F6] hover:text-white hover:underline transition-all">Returns & Exchanges</Link></li>
              <li><Link to="/shipping" className="text-base text-[#F3F4F6] hover:text-white hover:underline transition-all">Shipping Info</Link></li>
              <li><Link to="/contact" className="text-base text-[#F3F4F6] hover:text-white hover:underline transition-all">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-sm font-bold tracking-wider uppercase text-[#33D0B8]">Company</h3>
            <ul className="mt-4 space-y-3">
              <li><Link to="/about" className="text-base text-[#F3F4F6] hover:text-white hover:underline transition-all">About Us</Link></li>
              <li><Link to="/careers" className="text-base text-[#F3F4F6] hover:text-white hover:underline transition-all">Careers</Link></li>
              <li><Link to="/store-locator" className="text-base text-[#F3F4F6] hover:text-white hover:underline transition-all">Store Locator</Link></li>
              <li><Link to="/sustainability" className="text-base text-[#F3F4F6] hover:text-white hover:underline transition-all">Sustainability</Link></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="text-sm font-bold tracking-wider uppercase text-[#33D0B8]">Legal</h3>
            <ul className="mt-4 space-y-3">
              <li><Link to="/privacy-policy" className="text-base text-[#F3F4F6] hover:text-white hover:underline transition-all">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-base text-[#F3F4F6] hover:text-white hover:underline transition-all">Terms of Service</Link></li>
            </ul>
          </div>

        </div>
      </div>

      {/* ================= BOTTOM SECTION (Socials & Copyright) ================= */}
      <div className="bg-[#512DA8] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
          
          <div className="mb-4 md:mb-0">
            <p className="text-base text-[#F3F4F6]">
              &copy; {new Date().getFullYear()} Efactory. All rights reserved.
            </p>
          </div>

          {/* Social Icons using react-icons */}
          <div className="flex space-x-6">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-[#F3F4F6] hover:text-[#00BFA5] transition-colors">
              <span className="sr-only">Instagram</span>
              <FaInstagram className="h-6 w-6" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-[#F3F4F6] hover:text-[#00BFA5] transition-colors">
              <span className="sr-only">Twitter</span>
              <FaTwitter className="h-6 w-6" />
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="text-[#F3F4F6] hover:text-[#00BFA5] transition-colors">
              <span className="sr-only">TikTok</span>
              <FaTiktok className="h-6 w-6" />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;