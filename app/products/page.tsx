import ProductCard from "../components/ProductCard";

export default function Products() {
  return (
    <>
      <h1 className="text-4xl font-bold text-center mt-10 mb-6">Products</h1>
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <ProductCard imageUrl="/4.ELEPHANT.png" imageAlt="product" title="ELEPHANT" description="Elephant Feeding Bottle of size xl" linkUrl="#" linkText="more" />
            <ProductCard imageUrl="/4.ELEPHANT.png" imageAlt="product" title="ELEPHANT" description="Elephant Feeding Bottle" linkUrl="#" linkText="more" />
            <ProductCard imageUrl="/4.ELEPHANT.png" imageAlt="product" title="ELEPHANT" description="Elephant Feeding Bottle" linkUrl="#" linkText="more" />
            <ProductCard imageUrl="/4.ELEPHANT.png" imageAlt="product" title="ELEPHANT" description="Elephant Feeding Bottle" linkUrl="#" linkText="more" />
            <ProductCard imageUrl="/4.ELEPHANT.png" imageAlt="product" title="ELEPHANT" description="Elephant Feeding Bottle" linkUrl="#" linkText="more" />
            <ProductCard imageUrl="/4.ELEPHANT.png" imageAlt="product" title="ELEPHANT" description="Elephant Feeding Bottle" linkUrl="#" linkText="more" />
          </div>
        </div>
      </div>
    </>
  );
}
