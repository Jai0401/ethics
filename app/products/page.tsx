import { ProductCategory } from "../components/ProductCategory";
import feeder from '../data/feeder.json';
import diaper from '../data/diapers.json';
import feederSteel from '../data/feeder-steel.json';
import nippleSoother from '../data/nipple&soother.json';
import feedingCup from '../data/feeding-cup.json';
import waterTeether from '../data/water-teether.json';
import siliconeTeether from '../data/silicone-teether.json';
import babyCare from '../data/baby-care.json';
import accessory from '../data/accessory.json';


export default function Products() {
  return (
    <>
      <h1 className="text-5xl font-semibold text-center mt-10 mb-6">Products</h1>
      <ProductCategory title="Feeding Bottles" products={feeder} />
      <ProductCategory title="Feeding Bottles (Steel)" products={feederSteel} />
      <ProductCategory title="Feeding Cup" products={feedingCup} imgHeight={280}/>
      <ProductCategory title="Water Teether" products={waterTeether} />
      <ProductCategory title="Silicone Teether" products={siliconeTeether} />
      <ProductCategory title="Baby Care Products" products={babyCare} imgHeight={280}/>
      <ProductCategory title="Nipple&Soother" products={nippleSoother} imgHeight={230}/>
      <ProductCategory title="Baby Diapers" products={diaper} />
      <ProductCategory title="Accessories" products={accessory} />
    </>
  );
}
