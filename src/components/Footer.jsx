import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-center py-4 mt-8 border-t">
      <p className="text-sm text-gray-600">© {new Date().getFullYear()} E-Store. All rights reserved.</p>
    </footer>
  );
}

// STEP 13: src/components/ProductCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="border p-4 rounded shadow hover:shadow-lg">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4" />
      <h2 className="font-semibold text-lg">{product.name}</h2>
      <p className="text-sm text-gray-600">{product.description}</p>
      <p className="font-bold text-blue-600 mt-2">₹{product.price}</p>
      <div className="mt-4 flex justify-between">
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
        <Link
          to={`/product/${product.id}`}
          className="text-sm text-blue-600 hover:underline"
        >
          View
        </Link>
      </div>
    </div>
  );
}
