'use client'
import Image from "next/image";
import Logo from "/public/logo.png";  // Ensure the path is correct
import Link from "next/link";
import { useState } from "react";
import { MdPersonOutline, MdMenu, MdClose } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { GoHeart } from "react-icons/go";
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex items-center justify-between px-4 py-3 bg-white w-full max-w-1440 mx-auto">
      {/* Logo */}
      <div className="flex items-center">
        <Image src={Logo} width={185} height={41} alt="Furniro Logo" priority />
      </div>

      {/* Mobile menu button */}
      <div className="md:hidden">
        <button onClick={toggleMenu}>
          {isMenuOpen ? <MdClose className="h-8 w-8" /> : <MdMenu className="h-8 w-8" />}
        </button>
      </div>

      {/* Navigation Links - with responsive visibility */}
      <div className={`${isMenuOpen ? "flex" : "hidden"} absolute inset-x-0 top-full bg-white md:relative md:flex md:flex-grow md:items-center md:justify-center transition-transform duration-300 ease-in-out z-20`}>
        <ul className="flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-10 py-5 md:py-0">
          <li>
            <Link href="/" className="text-black hover:text-gray-700 px-5 py-2">Home</Link>
          </li>
          <li>
            <Link href="/shop" className="text-black hover:text-gray-700 px-5 py-2">Shop</Link>
          </li>
          <li>
            <Link href="/blog" className="text-black hover:text-gray-700 px-5 py-2">Blog</Link>
          </li>
          <li>
            <Link href="/contact" className="text-black hover:text-gray-700 px-5 py-2">Contact</Link>
          </li>
        </ul>
      </div>

     {/* Sidebar menu for mobile */}
     <div className={`${isMenuOpen ? "translate-x-0" : "-translate-x-full"} fixed left-0 top-0 w-64 h-full bg-gradient-to-b from-[#FFD3BA] to-[#B88E2F] shadow-md transition-transform duration-300 ease-in-out z-40 md:hidden`}>
        <ul className="flex flex-col space-y-5 py-10">
          <li>
            <Link href="/" className="text-white hover:text-gray-700 block px-5 py-2 rounded-md hover:bg-white/90 transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link href="/shop" className="text-white hover:text-gray-700 block px-5 py-2 rounded-md hover:bg-white/90 transition-colors">
              Shop
            </Link>
          </li>
          <li>
            <Link href="/blog" className="text-white hover:text-gray-700 block px-5 py-2 rounded-md hover:bg-white/90 transition-colors">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-white hover:text-gray-700 block px-5 py-2 rounded-md hover:bg-white/90 transition-colors">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    

      {/* Icons - visible on large screens */}
      <div className="hidden md:flex items-center space-x-10">
        <MdPersonOutline size="24" className="text-black hover:text-gray-700" />
        <CiSearch size="24" className="text-black hover:text-gray-700" />
        <GoHeart size="24" className="text-black hover:text-gray-700" />
        <AiOutlineShoppingCart size="24" className="text-black hover:text-gray-700" />
      </div>
    </div>
  );
}
