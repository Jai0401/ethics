import { ProductCategory } from "../components/ProductCategory";
import feeder from "/Users/jaimingodhani/Desktop/ethics/app/data/feeder.json"


export default function Products() {
  return (
    <>
      <h1 className="text-4xl font-bold text-center mt-10 mb-6">Products</h1>
      <ProductCategory title="Feeding Bottles" products={feeder} />
    </>
  );
}
