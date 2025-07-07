import React, { useState } from 'react';
import { products } from '../data/products';
import ProductGrid from '../components/ProductGrid';
import ProductList from '../components/ProductList';

export default function Home() {
  const [viewType, setViewType] = useState('grid');
  const [searchTerm, setSearchTerm] = useState('');

  const filtered = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          placeholder="Search products..."
          className="border px-3 py-2 w-full max-w-xs rounded"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          className="ml-4 px-4 py-2 border rounded"
          onClick={() => setViewType(viewType === 'grid' ? 'list' : 'grid')}
        >
          Switch to {viewType === 'grid' ? 'List' : 'Grid'} View
        </button>
      </div>
      {viewType === 'grid' ? (
        <ProductGrid products={filtered} />
      ) : (
        <ProductList products={filtered} />
      )}
    </div>
  );
}
