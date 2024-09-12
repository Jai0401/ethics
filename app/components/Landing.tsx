"use client";
import React,{useEffect} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Featured from './Featured';

export default function Landing() {
  fetch("/api/count")
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      return res.json(); // Parse JSON response
    })
    .then((data) => console.log({visitors:(data.count)}))
    .catch((error) => console.error("Error fetching count:", error));

  return (
    <>
        <section className="w-full mt-32 mb-10 flex justify-center">
        <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
          <Image
            src="/Designer from Copilot (2).png"
            width="550"
            height="550"
            alt="Smiling Baby"
            className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
          />
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Nurturing the Next Generation</h1>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Discover our curated collection of high-quality baby products designed to support your little one&apos;s growth
              and development.
            </p>
            <Link
              href="/products"
              className="inline-flex h-10 items-center justify-center rounded-md bg-black px-8 text-sm font-medium text-white shadow transition-colors hover:bg-black/80 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              Shop Now
            </Link>
          </div>
        </div>
        </section>
      <div className="flex justify-center bg-gray-100 py-8">
        <Featured />
      </div>
    </>
  );
}
