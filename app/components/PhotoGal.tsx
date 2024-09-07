import Image from "next/image";

export default function PhotoGal({ src, alt, layout }: { src: string; alt: string; layout: number }) {
  return (
    <section className="bg-light-gray py-20">
      <div className="container mx-auto flex flex-col items-center justify-center space-y-8 lg:flex-row lg:space-y-0 lg:space-x-8 mb-20">
        {layout === 1 && (
          <div className="w-full lg:w-1/2 hidden sm:flex">
            <Image
              src={src}
              alt={alt}
              width={800}
              height={600}
              className="w-full h-auto rounded-lg"
              style={{ aspectRatio: "800/600", objectFit: "cover" }}
            />
          </div>
        )}
        <div className="px-4 lg:px-0 text-center lg:text-left">
          <h2 className="text-3xl font-bold text-dark-green mb-4 lg:mb-8">
            Unmatched Quality for Your Little One
          </h2>
          <p className="text-lg text-dark-green max-w-xl mx-auto lg:mx-0">
            At Me&amp;Mummy, we pride ourselves on providing only the best for your baby. From soft, absorbent diapers
            to soothing teethers and durable feeding bottles, every product is crafted with care and precision to ensure
            the utmost comfort and safety for your child.
          </p>
        </div>
        {layout === 2 && (
          <div className="w-full lg:w-1/2">
            <Image
              src={src}
              alt={alt}
              width={800}
              height={600}
              className="w-full h-auto rounded-lg"
              style={{ aspectRatio: "800/600", objectFit: "cover" }}
            />
          </div>
        )}
      </div>
    </section>
  );
}
