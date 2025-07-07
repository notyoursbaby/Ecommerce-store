import React from 'react';
import { useCart } from '../context/CartContext';

export default function CartItem({ item }) {
  const { removeFromCart } = useCart();

  return (
    <div className="flex items-center justify-between border p-4 rounded mb-3">
      <div className="flex items-center gap-4">
        <img src={item.image} alt={item.name} className="w-16 h-16 object-cover" />
        <div>
          <h3 className="font-semibold">{item.name}</h3>
          <p className="text-sm">₹{item.price} x {item.quantity}</p>
        </div>
      </div>
      <button
        className="text-red-600 text-sm hover:underline"
        onClick={() => removeFromCart(item.id)}
      >
        Remove
      </button>
    </div>
  );
}
