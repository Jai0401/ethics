"use client"

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="p-4 shadow-md fixed w-full top-0 z-50 backdrop-filter backdrop-blur-lg bg-[#F6F5F2] bg-opacity-30">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-2xl font-bold">
                    <Link href="/" className="text-black">
                        <Image src="/logo.png" width={100} height={100} alt="Logo" className="hover:scale-150 transition duration-300" />
                    </Link>
                </div>
                <div className="hidden md:flex space-x-8">
                    <Link href="/" className="text-gray-600 hover:text-[#ec4899] hover:scale-110 transition duration-300 text-lg font-medium">
                        Home
                    </Link>
                    <Link href="/products" className="text-gray-600 hover:text-[#ec4899] hover:scale-110 transition duration-300 text-lg font-medium">
                        Products
                    </Link>
                    <Link href="/about-us" className="text-gray-600 hover:text-[#ec4899] hover:scale-110 transition duration-300 text-lg font-medium">
                        About
                    </Link>
                </div>
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-gray-600 hover:text-[#ec4899] focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
                        </svg>
                    </button>
                </div>
            </div>
            {isMenuOpen && (
                <div className="md:hidden mt-2 space-y-2">
                    <Link href="/" className="block text-gray-600 hover:text-[#ec4899] text-lg font-medium px-4 py-2">
                        Home
                    </Link>
                    <Link href="/products" className="block text-gray-600 hover:text-[#ec4899] text-lg font-medium px-4 py-2">
                        Products
                    </Link>
                    <Link href="/about-us" className="block text-gray-600 hover:text-[#ec4899] text-lg font-medium px-4 py-2">
                        About
                    </Link>
                </div>
            )}
        </div>
    );
}
