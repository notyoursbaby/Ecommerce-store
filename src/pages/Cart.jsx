import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import CartItem from '../components/CartItem';

export default function Cart() {
  const { cartItems } = useCart();
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cartItems.length === 0) return <div className="p-6">Your cart is empty.</div>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      {cartItems.map(item => <CartItem key={item.id} item={item} />)}
      <div className="text-right font-semibold mt-4">Total: ₹{total}</div>
      <div className="text-right mt-4">
        <Link
          to="/checkout"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
}
