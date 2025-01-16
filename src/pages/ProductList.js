import React, { useState } from "react";
import ProductCard from "../components/ProductCard";

function ProductList({ products }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("");

  // Filter and sort products based on search query and sort option
  const filteredProducts = products
    .filter((product) => {
      const lowerQuery = searchQuery.toLowerCase();
      return (
        product.title.toLowerCase().includes(lowerQuery) ||
        product.category.toLowerCase().includes(lowerQuery)
      );
    })
    .sort((a, b) => {
      if (sortOption === "priceLowToHigh") {
        return a.price - b.price;
      } else if (sortOption === "priceHighToLow") {
        return b.price - a.price;
      } else if (sortOption === "ratingHighToLow") {
        return b.rating.rate - a.rating.rate;
      } else if (sortOption === "ratingLowToHigh") {
        return a.rating.rate - b.rating.rate;
      }
      return 0;
    });

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Product List</h1>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search by name or category"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="border border-gray-300 rounded-lg p-2 w-full mb-4"
      />

      {/* Sort Options */}
      <select
        value={sortOption}
        onChange={(e) => setSortOption(e.target.value)}
        className="border border-gray-300 rounded-lg p-2 w-full mb-4"
      >
        <option value="">Sort by</option>
        <option value="priceLowToHigh">Price: Low to High</option>
        <option value="priceHighToLow">Price: High to Low</option>
        <option value="ratingHighToLow">Rating: High to Low</option>
        <option value="ratingLowToHigh">Rating: Low to High</option>
      </select>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
