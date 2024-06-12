import { ProductCategory } from "../components/ProductCategory";
import feeder from '../data/feeder.json';
import diaper from '../data/diapers.json';
import feederSteel from '../data/feeder-steel.json';
import nippleSoother from '../data/nipple&soother.json';


export default function Products() {
  return (
    <>
      <h1 className="text-5xl font-semibold text-center mt-10 mb-6">Products</h1>
      <ProductCategory title="Feeding Bottles" products={feeder} />
      <ProductCategory title="Feeding Bottles (Steel)" products={feederSteel} />
      <ProductCategory title="Nipple&Soother" products={nippleSoother} />
      <ProductCategory title="Baby Diapers" products={diaper} />
    </>
  );
}
