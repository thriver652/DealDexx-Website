import React from "react";

const Header = () => {
  return (
    <header className="py-4 bg-gray-800 text-white">
      <div className="container flex justify-between items-center">
        <h1 className="text-xl font-bold">DealDeX</h1>
        <nav>
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
              <a href="#about" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
