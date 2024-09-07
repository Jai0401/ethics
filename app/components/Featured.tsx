import Link from "next/link";
import Image from "next/image";

export default function Featured() {
  return (
    <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
            Featured Categories
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Explore Our Baby Product Categories
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl lg:text-base xl:text-xl">
            From toys to feeding accessories and nursery essentials, we have everything you need to keep your little one happy and healthy.
          </p>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
        <div className="flex flex-col justify-center space-y-4">
          {/* <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
            Teethers
          </div> */}
          <h3 className="text-2xl font-bold">Unmatched Quality for Your Little One&apos;s
          </h3>
          <p className="text-muted-foreground">
          At Me&Mummy, we pride ourselves on providing only the best for your baby. From soft, absorbent diapers to soothing teethers and durable feeding bottles, every product is crafted with care and precision to ensure the utmost comfort and safety for your child.</p>
          {/* <Link
            href="/products/#teethers"
            className="inline-flex h-10 items-center justify-center rounded-md bg-black px-8 text-sm font-medium text-white shadow transition-colors hover:bg-black/80 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            Shop Teethers
          </Link> */}
        </div>
        <Image
          src="/best-baby-teethers.jpg"
          width={550}
          height={310}
          alt="Clothing"
          className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
        />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
        <Image
          src="/pexels-jonathanborba-26509769.jpg"
          width={550}
          height={310}
          alt="Toys"
          className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
        />
        <div className="flex flex-col justify-center space-y-4">
          {/* <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Toys</div> */}
          <h3 className="text-2xl font-bold">Why Choose Me&Mummy?</h3>
          <p className="text-muted-foreground">
          Our commitment to quality sets us apart. Each item is rigorously tested to meet the highest standards, giving you peace of mind. Our products are made from safe, non-toxic materials, ensuring your baby's health is never compromised. We believe in offering nothing but the best because your baby deserves it.</p>
          {/* <Link
            href="/products/#teethers"
            className="inline-flex h-10 items-center justify-center rounded-md bg-black px-8 text-sm font-medium text-white shadow transition-colors hover:bg-black/80 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"            prefetch={false}
          >
            Shop Teethers
          </Link> */}
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
        <div className="flex flex-col justify-center space-y-4">
          {/* <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Feeding</div> */}
          <h3 className="text-2xl font-bold">Explore Our Range Today</h3>
          <p className="text-muted-foreground">
          Whether you&apos;re a new parent or looking to upgrade your baby essentials, Me&Mummy has everything you need. Our diverse product range is designed to support your baby&apos;s growth and development every step of the way. Visit us and discover the difference quality makes.</p>
          <Link
            href="/products"
            className="inline-flex h-10 items-center justify-center rounded-md bg-black px-8 text-sm font-medium text-white shadow transition-colors hover:bg-black/80 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"            prefetch={false}
          >
            Shop Now
          </Link>
        </div>
        <Image
          src="/Designer from Copilot.png"
          width={550}
          height={310}
          alt="Feeding"
          className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
        />
      </div>
    </div>
  );
}
