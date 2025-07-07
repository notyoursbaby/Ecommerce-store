import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function Header() {
  const { cartItems } = useCart();

  return (
    <header className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center shadow">
      <Link to="/" className="text-xl font-bold">E-Store</Link>
      <nav className="flex items-center gap-6">
        <Link to="/cart" className="relative">
          🛒 Cart
          <span className="absolute -top-2 -right-3 text-xs bg-red-600 rounded-full px-2">
            {cartItems.length}
          </span>
        </Link>
      </nav>
    </header>
  );
}
