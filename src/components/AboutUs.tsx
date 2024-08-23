import React from "react";

const AboutUs = () => {
  return (
    <section id="about" className="py-16 pt-24 bg-blue-50 text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6 flex items-center justify-center">
          <i className="bi bi-info-circle text-4xl mr-4 text-blue-600"></i>
          About DealDeX
        </h2>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-gray-700 leading-relaxed">
          At DealDeX, we redefine shopping with a focus on convenience, variety,
          and value. Discover a wide range of products—from fashion and
          electronics to groceries and meals—all in one place. Our aim is to
          make shopping simpler, faster, and more affordable, ensuring you get
          the best deals and top quality.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-8">
          <div className="bg-white p-6 border border-gray-200 shadow-lg rounded-lg flex flex-col items-center">
            <i className="bi bi-cart text-3xl mb-4 text-blue-600"></i>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              Convenience
            </h3>
            <p className="text-gray-600 text-center">
              All you need, in one place.
            </p>
          </div>
          <div className="bg-white p-6 border border-gray-200 shadow-lg rounded-lg flex flex-col items-center">
            <i className="bi bi-tags text-3xl mb-4 text-blue-600"></i>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              Variety
            </h3>
            <p className="text-gray-600 text-center">
              A wide range of products with unbeatable deals.
            </p>
          </div>
          <div className="bg-white p-6 border border-gray-200 shadow-lg rounded-lg flex flex-col items-center">
            <i className="bi bi-cash text-3xl mb-4 text-blue-600"></i>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Value</h3>
            <p className="text-gray-600 text-center">
              Exceptional value on every purchase.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
