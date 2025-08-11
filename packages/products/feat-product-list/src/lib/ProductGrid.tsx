import ProductCard from './ProductCard';
import { getProducts } from '@aishop/data-access-products';

export function ProductGrid() {
  const products = getProducts();

  return (
    <div
      data-testid="product-grid"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
    >
      {products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          price={product.price}
          originalPrice={product.originalPrice}
          rating={product.rating}
          image={product.image}
          category={product.category}
        />
      ))}
    </div>
  );
}

export default ProductGrid;
