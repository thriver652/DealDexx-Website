import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <div className="mb-4">
          <Link href="/" className="text-white hover:underline">
            Home
          </Link>{" "}
          |
          <Link href="/about" className="text-white hover:underline">
            {" "}
            About Us
          </Link>{" "}
          |
          <Link href="/contact" className="text-white hover:underline">
            {" "}
            Contact
          </Link>
        </div>
        <p>&copy; {new Date().getFullYear()} DealDexx. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
