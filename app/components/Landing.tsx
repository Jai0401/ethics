import React from 'react';
import Image from 'next/image';

export default function Landing() {
  return (
    <>
      <div className="bg-green text-center pt-10 pb-20">
        <h1 className=" text-4xl font-semibold">Discover Premium Baby Products at</h1>
        <h1 className=" text-4xl font-semibold">Me&amp;Mummy</h1>
        <p className=" mt-4 text-lg">Top-quality essentials for your baby&apos;s comfort and happiness.</p>
        <button className="bg-teal-500 mt-6 px-4 py-2 rounded-full">Learn More</button>
      </div>
      <div className="bg-light-gray py-20">
        <div className="container mx-auto flex items-center space-x-8 justify-center mb-20">
          <Image src="/best-baby-teethers.jpg" width={400} height={400} alt="Diapers" />
          <div>
            <h2 className="text-dark-green text-3xl font-semibold mb-10">Unmatched Quality for Your Little One</h2>
            <p className="text-dark-green text-lg max-w-xl">
              At Me&amp;Mummy, we pride ourselves on providing only the best for your baby. From soft, absorbent diapers to soothing teethers and durable feeding bottles, every product is crafted with care and precision to ensure the utmost comfort and safety for your child.
            </p>
          </div>
        </div>
        <div className="container mx-auto flex items-center space-x-8 justify-center mb-20">
          <div>
            <h2 className="text-dark-green text-3xl font-semibold mb-10">Why Choose Me&amp;Mummy?</h2>
            <p className="text-dark-green text-lg max-w-xl">
              Our commitment to quality sets us apart. Each item is rigorously tested to meet the highest standards, giving you peace of mind. Our products are made from safe, non-toxic materials, ensuring your baby&apos;s health is never compromised. We believe in offering nothing but the best because your baby deserves it.
            </p>
          </div>
          <Image src="/pexels-jonathanborba-26509769.jpg" width={400} height={400} alt="Diapers" />
        </div>
        <div className="container mx-auto flex items-center space-x-8 justify-center">
          <Image src="/33007_hd.jpg" width={400} height={400} alt="Diapers" />
          <div>
            <h2 className="text-dark-green text-3xl font-semibold mb-10">Explore Our Range Today</h2>
            <p className="text-dark-green text-lg max-w-xl">
              Whether you&apos;re a new parent or looking to upgrade your baby essentials, Me&amp;Mummy has everything you need. Our diverse product range is designed to support your baby&apos;s growth and development every step of the way. Visit us and discover the difference quality makes.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
