"use client";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center animate-fade-in-up transition-opacity duration-1000">
        <div className="flex items-center">
          <Image src="/logo.png" alt="DealDexx Logo" width={100} height={30} />
          <span className="text-2xl font-bold ml-2">DealDexx</span>
        </div>
        <nav className="space-x-6">
          <Link
            href="/about"
            className="text-secondary hover:underline transition-transform duration-300 ease-in-out transform hover:scale-105 animate-fade-in-up"
          >
            About Us
          </Link>
          <Link
            href="/contact"
            className="text-secondary hover:underline transition-transform duration-300 ease-in-out transform hover:scale-105 animate-fade-in-up"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
