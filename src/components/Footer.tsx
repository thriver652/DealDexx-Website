import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        {/* Navigation Links */}
        <div className="mb-6 flex justify-center flex-wrap gap-4">
          <Link href="#home">
            <div>Home</div>
          </Link>
          <Link href="#about">
            <div>About Us</div>
          </Link>
          <Link href="#contact">
            <div>Contact</div>
          </Link>
        </div>
        {/* Social Media Links */}
        <div className="mb-6 flex justify-center gap-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-600"
          >
            <i className="bi bi-facebook text-2xl"></i>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400"
          >
            <i className="bi bi-twitter text-2xl"></i>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-pink-500"
          >
            <i className="bi bi-instagram text-2xl"></i>
          </a>
          <a
            href="https://www.linkedin.com/company/dealdex-connect/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-500"
          >
            <i className="bi bi-linkedin text-2xl"></i>
          </a>
        </div>
        {/* Copyright */}
        <p className="text-sm">
          &copy; {new Date().getFullYear()} DealDeX. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
