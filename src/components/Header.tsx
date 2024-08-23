// src/components/Header.tsx

const Header = () => {
  return (
    <header className="py-4 bg-gray-800 text-white">
      <div className="container flex justify-between items-center">
        <h1 className="text-xl font-bold">DealDeX</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#categories">Categories</a>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
