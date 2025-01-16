import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

function CheckoutPage() {
  const { cart, clearCart } = useContext(CartContext); // Access cart state and clearCart function

  // Calculate the total price
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // Handle the checkout process
  const handleCheckout = () => {
    // Simulate successful checkout
    alert("Checkout successful! Your order has been placed.");

    // Clear the cart after checkout (optional)
    clearCart();
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Review Your Order</h1>

      {cart.length === 0 ? (
        <p>
          Your cart is empty.{" "}
          <Link to="/products" className="text-blue-500">
            Go back to products
          </Link>
        </p>
      ) : (
        <div>
          <div className="space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between py-2 border-b">
                <div className="flex items-center">
                  <img
                    src={item.thumbnail}
                    alt={item.name}
                    className="w-12 h-12 object-cover mr-4"
                  />
                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <p>Quantity: {item.quantity}</p>
                    <p>Price: ${item.price}</p>
                  </div>
                </div>
                <div>
                  <p className="font-semibold">${item.price * item.quantity}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-between text-xl font-bold">
            <p>Total Price:</p>
            <p>${totalPrice.toFixed(2)}</p>
          </div>

          <button
            onClick={handleCheckout}
            className="mt-6 bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600"
          >
            Place Order
          </button>
        </div>
      )}
    </div>
  );
}

export default CheckoutPage;
