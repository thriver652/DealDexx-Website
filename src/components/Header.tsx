"use client";
import React, { useState, useRef, useEffect } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    // Type assertion to ensure event.target is an HTMLElement
    const target = event.target as HTMLElement;
    if (menuRef.current && !menuRef.current.contains(target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    // Add event listener for clicks outside the menu
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-800 text-white z-50 py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-xl font-bold">DealDeX</h1>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex">
          <ul className="flex space-x-4">
            <li>
              <a href="#features" className="hover:underline">
                Features
              </a>
            </li>
            <li>
              <a href="#categories" className="hover:underline">
                Categories
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                Contact
              </a>
            </li>
            <li>
              <a href="#about" className="hover:underline">
                About Us
              </a>
            </li>
          </ul>
        </nav>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
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
        className={`md:hidden fixed top-0 left-0 w-full bg-gray-800 text-white transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "transform translate-x-0" : "transform -translate-x-full"
        }`}
      >
        <ul className="flex flex-col space-y-4 px-4 py-6">
          <li>
            <a
              href="#features"
              className="hover:underline"
              onClick={toggleMenu}
            >
              Features
            </a>
          </li>
          <li>
            <a
              href="#categories"
              className="hover:underline"
              onClick={toggleMenu}
            >
              Categories
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:underline" onClick={toggleMenu}>
              Contact
            </a>
          </li>
          <li>
            <a href="#about" className="hover:underline" onClick={toggleMenu}>
              About Us
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
