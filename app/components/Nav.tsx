"use client"
import Link from "next/link";
import React  from "react";
import { useState } from "react";
import { CiShoppingCart } from "react-icons/ci";
import { LuUser } from "react-icons/lu";
import { FiMenu, FiX } from "react-icons/fi";
import { count } from "console";
export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="top-0 left-0 w-full pb-4 fixed cursor-pointer bg-customGray  bg-opacity-75  ">
      <div className="flex items-center justify-between px-8 mt-8 mx-24 ">
        <h1 className="text-white font-semibold text-2xl md:text-3xl cursor-context-menu">
          CasaDesigns
        </h1>
        <button
          className="text-white md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? (
            
            <FiX className="w-8 h-8" />
          ) : (
            <FiMenu className="w-8 h-8" />
          )}
        </button>

        <ul className="hidden md:flex items-center gap-12 text-white text-lg md:text-xl cursor-pointer">
          <li className="hover:underline underline-offset-auto ">
            <Link href="#home">Home</Link>
          </li>
          <li className="hover:underline underline-offset-auto">
            <Link href="#aboutus">About Us</Link>
          </li>
          <li className="hover:underline underline-offset-auto">
            <Link href="#products">Shop</Link>
          </li>
          <li className="hover:underline underline-offset-auto">
            <Link href="#latest">Our Best</Link>
          </li>
          <li className="hover:underline underline-offset-auto">
            <Link href="#design">Designs</Link>
          </li>
          <li>
            <Link href="/login">
            <LuUser className="w-8 h-8" /></Link>
          </li>
          <li >

            <CiShoppingCart className="w-8 h-8 " />
          </li>
        </ul>

        {isMenuOpen && (
          <ul className="absolute top-20 left-0 w-full bg-black text-white flex flex-col items-center gap-6 py-6 md:hidden z-50">
            <li onClick={closeMenu}>
              <Link href="#home">Home</Link>
            </li>
            <li onClick={closeMenu}>
              <Link href="#aboutus">About Us</Link>
            </li>
            <li onClick={closeMenu}>
              <Link href="#products">Shop</Link>
            </li>
            <li onClick={closeMenu}>
              <Link href="#latest">Our Best</Link>
            </li>
            <li onClick={closeMenu}>
              <Link href="#design">Designs</Link>
            </li>
          </ul>
        )}
      </div>
    </header>
  );
}
