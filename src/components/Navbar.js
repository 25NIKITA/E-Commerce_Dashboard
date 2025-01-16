import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {
  ShoppingCartIcon,
  HomeIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { CartContext } from "../context/CartContext"; // Import CartContext

function Navbar() {
  const { cart } = useContext(CartContext); // Access cart state

  // Calculate total items in the cart
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="bg-gray-800 text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo/Brand Name */}
        <div className="flex items-center space-x-3">
          <img
            src="https://tse1.mm.bing.net/th?id=OIP.KBuZjyxYAuvYzhryALHh_AHaGw&pid=Api&P=0&h=220"
            alt="Logo"
            className="w-10 h-10 rounded-full"
          />
          <h1 className="text-xl font-bold">
            <Link to="/">NikStore</Link>
          </h1>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="hover:text-blue-400">
            <HomeIcon className="w-5 h-5 inline-block mr-1" />
            Home
          </Link>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-6">
          <Link to="/cart" className="relative">
            <ShoppingCartIcon className="w-6 h-6 hover:text-blue-400" />
            {totalItems > 0 && ( // Show notification badge only if cart is not empty
              <span className="absolute top-0 right-0 bg-red-500 text-xs rounded-full px-1">
                {totalItems}
              </span>
            )}
          </Link>
          <Link to="/profile" className="hover:text-blue-400">
            <UserIcon className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
