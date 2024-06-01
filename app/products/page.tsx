import { ProductCategory } from "../components/ProductCategory";
import feeder from '../data/feeder.json';
import diaper from '../data/diapers.json';


export default function Products() {
  return (
    <>
      <h1 className="text-5xl font-semibold text-center mt-10 mb-6">Products</h1>
      <ProductCategory title="Baby Diapers" products={diaper} />
      <ProductCategory title="Feeding Bottles" products={feeder} />
    </>
  );
}
