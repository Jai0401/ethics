import { ProductCategory } from "../components/ProductCategory";
import feeder from '../data/feeder.json';
import diaper from '../data/diapers.json';
import feederSteel from '../data/feeder-steel.json';
import nippleSoother from '../data/nipple&soother.json';
import feedingCup from '../data/feeding-cup.json';
import waterTeether from '../data/water-teether.json';
import siliconeTeether from '../data/silicone-teether.json';
import babyCare from '../data/baby-care.json';


export default function Products() {
  return (
    <div className=" mt-28 mb-8">
      <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center">Products</h1>
      <ProductCategory title="Feeding Bottles" products={feeder} />
      <ProductCategory title="Feeding Bottles (Steel)" products={feederSteel} />
      <ProductCategory title="Feeding Cup" products={feedingCup} imgHeight={280}/>
      <ProductCategory title="Water Teether" products={waterTeether} />
      <ProductCategory title="Silicone Teether" products={siliconeTeether} />
      <ProductCategory title="Baby Care Products" products={babyCare} imgHeight={280}/>
      <ProductCategory title="Nipple&Soother" products={nippleSoother} imgHeight={230}/>
      <ProductCategory title="Baby Diapers" products={diaper} />
    </div>
  );
}
