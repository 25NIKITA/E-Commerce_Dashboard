// src/components/ProductCard.js
import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="product-card border border-gray-300 rounded-lg p-4 shadow-lg">
      {/* Image */}
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-contain mb-4"
      />

      {/* Product Name */}
      <h3 className="text-xl font-semibold text-center mb-2 text-black">
        {product.title} {/* Changed from product.name to product.title */}
      </h3>

      {/* Product Price */}
      <p className="text-lg text-center text-gray-600 mb-2">
        {product.price} $
      </p>

      {/* View Details Link */}
      <Link
        to={`/product/${product.id}`}
        className="text-blue-500 hover:text-blue-700 block text-center mb-4"
      >
        View Details
      </Link>

      {/* Add to Cart Button */}
    </div>
  );
};

export default ProductCard;
