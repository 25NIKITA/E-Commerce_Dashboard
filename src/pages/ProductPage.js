import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { CartContext } from "../context/CartContext";

function ProductPage() {
  const { id } = useParams();
  const { cart, addToCart } = useContext(CartContext); // Access cart and addToCart
  const [product, setProduct] = useState(null);

  // Fetch product details
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => setProduct(response.data))
      .catch((error) => console.error(error));
  }, [id]);

  // Check if product is already in the cart
  const isInCart = cart.some((item) => item.id === parseInt(id));

  if (!product) return <div>Loading...</div>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row gap-6">
        <img src={product.image} alt={product.title} className="w-48 md:w-64" />
        <div>
          <h2 className="text-2xl font-bold mb-2">{product.title}</h2>
          <p>
            <strong>Model:</strong> {product.category}
          </p>
          <p>
            <strong>Price:</strong> ₹{product.price}
          </p>
          <p>
            <strong>Quantity:</strong> Available
          </p>
          <p>
            <strong>Reviews:</strong> {product.rating?.rate} / 5 (
            {product.rating?.count} reviews)
          </p>
          {/* Add to Cart Button */}
          <button
            className={`mt-4 px-4 py-2 rounded-lg text-white ${
              isInCart
                ? "bg-green-500 hover:bg-green-600"
                : "bg-blue-500 hover:bg-blue-600"
            }`}
            onClick={() => addToCart(product)}
          >
            {isInCart ? "Added to Cart" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
