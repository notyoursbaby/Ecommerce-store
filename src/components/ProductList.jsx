import React from 'react';
import ProductCard from './ProductCard';

export default function ProductList({ products }) {
  return (
    <div className="space-y-4">
      {products.map(product => (
        <div key={product.id} className="border rounded p-4">
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
}
