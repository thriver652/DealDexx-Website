import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto text-center">
        <div className="mb-6">
          <Link href="/" className="text-white hover:underline mx-2">
            Home
          </Link>
          |
          <Link href="/about" className="text-white hover:underline mx-2">
            About Us
          </Link>
          |
          <Link href="/contact" className="text-white hover:underline mx-2">
            Contact
          </Link>
        </div>
        <div className="mb-6">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-600 mx-3"
          >
            <i className="bi bi-facebook text-2xl"></i>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 mx-3"
          >
            <i className="bi bi-twitter text-2xl"></i>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-pink-500 mx-3"
          >
            <i className="bi bi-instagram text-2xl"></i>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-500 mx-3"
          >
            <i className="bi bi-linkedin text-2xl"></i>
          </a>
        </div>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} DealDeX. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
