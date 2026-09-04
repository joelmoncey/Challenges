import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/Designer.png";
import { useCartStore } from "../../store/cartStore";
import {
  FiSearch,
  FiHeart,
  FiUser,
  FiShoppingCart,
  FiMenu,
  FiX,
} from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const totalItems = useCartStore((state) => state.getTotalItems());

  const handleSearch = (event) => {
    event.preventDefault();
    const searchTerm = search.trim();
    navigate(searchTerm ? `/shop?search=${encodeURIComponent(searchTerm)}` : "/shop");
    setIsOpen(false);
  };

  const navLinks = [
    "Home",
    "Shop",
    "Men",
    "Women",
    "Sneakers",
    "Accessories",
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#FFFFFF] shadow-sm">
      {/* Top Navbar */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex h-16 min-w-0 items-center justify-between gap-3">
          {/* Logo */}
          <Link to="/" className="flex min-w-0 shrink-0 items-center gap-2 cursor-pointer">
            <span className="flex h-14 w-20 items-center sm:w-24">
              <img src={logo} alt="Efactory" className="h-full w-full object-contain" />
            </span>
            <h1 className="hidden text-2xl font-bold text-[#673AB7] sm:block">
              Efactory
            </h1>
          </Link>

          {/* Search Bar - Desktop */}
          <form className="hidden min-w-0 flex-1 items-center mx-4 md:flex lg:mx-8" onSubmit={handleSearch}>
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                aria-label="Search products"
                className="w-full border border-[#9575CD] rounded-lg py-2 pl-10 pr-4 outline-none focus:border-[#673AB7]"
              />
              <button type="submit" aria-label="Submit search" className="absolute left-3 top-3 text-[#4B5563]">
                <FiSearch />
              </button>
            </div>
          </form>

          {/* Desktop Icons */}
          <div className="hidden md:flex items-center gap-5">
            <button className="hover:text-[#673AB7] transition duration-300" aria-label="Wishlist">
              <FiHeart size={22} />
            </button>

            <button className="hover:text-[#673AB7] transition duration-300" aria-label="Account">
              <FiUser size={22} />
            </button>

            <Link to="/cart" className="relative hover:text-[#673AB7] transition duration-300" aria-label="Cart">
              <FiShoppingCart size={22} />

              <span className="absolute -top-2 -right-2 bg-[#00BFA5] text-[#FFFFFF] text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            </Link>
          </div>

          {/* Mobile Buttons */}
          <div className="flex md:hidden items-center gap-4">
            <Link to="/cart" className="relative" aria-label="Cart">
              <FiShoppingCart size={24} />

              <span className="absolute -top-2 -right-2 bg-[#00BFA5] text-[#FFFFFF] text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            </Link>

            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:block border-t">
        <div className="max-w-7xl mx-auto px-4">
          <ul className="flex items-center gap-8 h-14">
            {navLinks.map((link) => (
              <li
                key={link}
                className="cursor-pointer font-medium text-[#4B5563] hover:text-[#673AB7] transition duration-300"
              >
                {link === "Home" ? <Link to="/">{link}</Link> : link === "Shop" ? <Link to="/shop">{link}</Link> : link}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-[#9575CD] bg-[#FFFFFF]">
          <ul className="flex flex-col p-4 gap-4">
            {navLinks.map((link) => (
              <li
                key={link}
                className="cursor-pointer font-medium text-[#4B5563] hover:text-[#673AB7]"
              >
                {link === "Home" ? <Link to="/">{link}</Link> : link === "Shop" ? <Link to="/shop">{link}</Link> : link}
              </li>
            ))}
          </ul>

          {/* Mobile Search */}
          <form className="px-4 pb-4" onSubmit={handleSearch}>
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                aria-label="Search products"
                className="w-full border border-[#9575CD] rounded-lg py-2 pl-10 pr-4 outline-none focus:border-[#673AB7]"
              />
              <button type="submit" aria-label="Submit search" className="absolute left-3 top-3 text-[#4B5563]">
                <FiSearch />
              </button>
            </div>
          </form>
        </div>
      )}
    </header>
  );
};

export default Navbar;