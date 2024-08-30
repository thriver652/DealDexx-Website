"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if (menuRef.current && !menuRef.current.contains(target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full bg-white text-black z-50 py-2 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo and Title */}
        <div className="flex items-center space-x-4">
          <Image
            src="/images/dealdex_white.jpg"
            alt="DealDeX Logo"
            width={40}
            height={40}
          />
          <h1 className="text-2xl font-semibold mt-1 hidden md:block">
            DealDeX
          </h1>
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex">
          <ul className="flex space-x-4">
            <li>
              <Link href="#features">
                <div className="font-medium hover:text-black">Features</div>
              </Link>
            </li>
            <li>
              <Link href="#categories">
                <div className="font-medium hover:text-black">Categories</div>
              </Link>
            </li>
            <li>
              <Link href="#contact">
                <div className="font-medium hover:text-black">Contact</div>
              </Link>
            </li>
            <li>
              <Link href="#about">
                <div className="font-medium hover:text-black">About Us</div>
              </Link>
            </li>
          </ul>
        </nav>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-black focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>
      </div>
      {/* Mobile Navigation Menu */}
      <nav
        ref={menuRef}
        className={`md:hidden fixed top-0 left-0 w-full bg-white text-black transition-transform duration-300 ease-in-out z-40 shadow-md transform ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* Close Button Inside the Menu */}
        <div className="flex justify-end p-4">
          <button
            className="text-black focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <ul className="flex flex-col space-y-4 px-4 py-6 max-h-screen overflow-y-auto">
          <li>
            <Link href="#features">
              <div
                className="font-medium hover:text-black"
                onClick={toggleMenu}
              >
                Features
              </div>
            </Link>
          </li>
          <li>
            <Link href="#categories">
              <div
                className="font-medium hover:text-black"
                onClick={toggleMenu}
              >
                Categories
              </div>
            </Link>
          </li>
          <li>
            <Link href="#contact">
              <div
                className="font-medium hover:text-black"
                onClick={toggleMenu}
              >
                Contact
              </div>
            </Link>
          </li>
          <li>
            <Link href="#about">
              <div
                className="font-medium hover:text-black"
                onClick={toggleMenu}
              >
                About Us
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
