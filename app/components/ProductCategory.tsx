import ProductCard  from './ProductCard';

export function ProductCategory({ title, products }: { title: string, products: Array<any> }) {
  return (
    <>
      <h2 className="text-2xl font-bold text-center mt-10 mb-6">{title}</h2>
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                imageUrl={product.image}
                imageAlt={product.name}
                title={product.name}
                description={product.description}
                linkUrl="#"
                linkText="more info"
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}