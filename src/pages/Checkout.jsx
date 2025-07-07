import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function Checkout() {
  const { cartItems, clearCart } = useCart();
  const navigate = useNavigate();

  const handlePayment = () => {
    clearCart();
    navigate('/success');
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Checkout</h2>
      <p className="mb-2">We’re not charging real money 😄</p>
      <button
        className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
        onClick={handlePayment}
      >
        Simulate Payment
      </button>
    </div>
  );
}
