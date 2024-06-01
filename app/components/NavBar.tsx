import Link from "next/link";
import Image from "next/image";

export function NavBar() {
    return (
        <div className="p-4 shadow-md fixed w-full top-0 z-50 backdrop-filter backdrop-blur-lg bg-white bg-opacity-30">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-2xl font-bold">
                    <Link href="/" className="text-black">
                    <Image src="/logo.png" width={100} height={100} alt="Logo" className="hover:scale-150 transition duration-300"></Image>
                    </Link>
                </div>
                <div className="flex space-x-8">
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
            </div>
        </div>
    );
}