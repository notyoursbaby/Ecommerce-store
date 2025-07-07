import React from 'react';
import ProductCard from './ProductCard';

export default function ProductGrid({ products }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

// STEP 15: src/components/ProductList.jsx
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
