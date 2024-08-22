"use client";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative text-gray-900 py-24 lg:py-32 overflow-hidden">
      {/* Background Image with Light Overlay */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/ecommerce.jpg')", // Correct URL path
        }}
      >
        {/* Lighter overlay for better visibility */}
      </div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          <span className="text-white">Welcome to</span>
          <span className="text-blue-800"> DealDexx</span>
        </h1>
        <p className="text-lg text-white font-semibold md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto">
          Discover our diverse range of products with easy shopping, food
          delivery, and groceries all in one place.
        </p>
        <Link
          href="/shop"
          className="bg-accent text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-700 transition-transform duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          Shop Now
        </Link>
      </div>
    </section>
  );
};

export default Hero;
