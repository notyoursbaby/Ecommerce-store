import React from 'react';
import { Link } from 'react-router-dom';

export default function Success() {
  return (
    <div className="p-6 text-center">
      <h2 className="text-2xl font-bold text-green-600 mb-2">Payment Successful!</h2>
      <p className="mb-4">Thank you for shopping with us.</p>
      <Link
        to="/"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Back to Home
      </Link>
    </div>
  );
}
