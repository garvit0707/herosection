import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-800 py-4 flex justify-between px-4">
      <div className="flex items-center">
        <Link to="/" className="text-white text-2xl font-bold">
          Go-Cart
        </Link>
      </div>

      <div className="max-w-7xl  px-4 flex justify-between items-center gap-10">
        {/* Logo */}

        {/* Navigation Links */}
        <div className="flex items-center space-x-4">
          <Link to="/home" className="text-white mr-10">
            Home
          </Link>
          <Link to="/shop" className="text-white">
            Shop
          </Link>
        </div>

        {/* Cart Icon */}
        <div className="flex items-center relative">
          <Link to="/cart" className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4h16a1 1 0 011 1v12a2 2 0 01-2 2H7a2 2 0 01-2-2V5a1 1 0 011-1zM8 20a2 2 0 100-4 2 2 0 000 4zM20 8H8"
              />
            </svg>
            <span class="-top-3 left-6 z-10 absolute w-4 h-4  flex items-center justify-center p-3 bg-red-400 border-2 text-[10px] font-bold border-white text-white dark:border-gray-800 rounded-full">
              12
            </span>
          </Link>
        </div>

        <div class="relative">
          <img
            class="w-10 h-10 rounded-full"
            src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
            alt=""
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
