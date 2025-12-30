import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const categoryColors = {
    pastel: 'bg-amber-100 text-amber-800',
    bolo: 'bg-rose-100 text-rose-800',
    doce: 'bg-pink-100 text-pink-800'
  };

  const categoryLabels = {
    pastel: 'Pastel',
    bolo: 'Bolo',
    doce: 'Doce'
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 active:scale-[0.98] transform transition-transform">
      <div className="relative h-48 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
        <span
          className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold ${
            categoryColors[product.category]
          }`}
        >
          {categoryLabels[product.category]}
        </span>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800 mb-2">
          {product.name}
        </h3>
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-rose-600">
            {product.price}
          </span>
        </div>
      </div>
    </div>
  );
}
