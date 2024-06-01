import ProductCard  from './ProductCard';

export function ProductCategory({ title, products }: { title: string, products: Array<any> }) {
  return (
    <>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mt-10 mb-6 ml-4">{title}</h2>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"> {/* Adjust gap as needed */}
            {products.map((product) => (
              <ProductCard
                key={product.id}
                imageUrl={product.image}
                imageAlt={product.name}
                title={product.name}
                description={product.description}
                linkUrl="#"
                linkText="View Product"
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
