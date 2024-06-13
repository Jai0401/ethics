"use client"

import ProductCard  from './ProductCard';
import {useState} from 'react';

export function ProductCategory({ title, products, imgHeight }: { title: string, products: Array<any>, imgHeight?: number}) {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggleCollapse = () => {
      setIsCollapsed(!isCollapsed);
    };
  
    return (
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mt-10 mb-6 cursor-pointer" onClick={toggleCollapse}>
          <h2 className="text-3xl font-semibold">{title}</h2>
          {/* <span className="text-xl">{isCollapsed ? '▼' : '▲'}</span> */}
        </div>
        {!isCollapsed && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                imageUrl={product.image}
                imageAlt={product.name}
                title={product.name}
                description={product.description}
                linkUrl="#"
                linkText="View Product"
                modalImageUrl={product.imageDesc}
                imgHeight={imgHeight}
              />
            ))}
          </div>
        )}
      </div>
    );
}
