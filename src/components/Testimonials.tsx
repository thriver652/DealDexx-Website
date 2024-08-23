import React from "react";

const Testimonials = () => {
  return (
    <section className="py-16 bg-blue-50 text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-gray-800">
          {/* Special characters before the text */}
          <span className="relative inline-block">
            <span className="absolute left-0 top-1/2 transform -translate-y-1/2 text-6xl text-primary opacity-50">
              “
            </span>
            <span className="relative">What Our Customers Say</span>
            <span className="absolute right-0 top-1/2 transform -translate-y-1/2 text-6xl text-primary opacity-50">
              ”
            </span>
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-white p-8 border border-gray-200 shadow-lg rounded-lg flex flex-col items-center">
            <i
              className="bi bi-star text-primary mb-4"
              style={{ fontSize: "3rem" }}
            ></i>
            <p className="text-lg mb-4 text-gray-600 italic">
              "DealDeX offers an incredible shopping experience. The variety
              and deals are unmatched!"
            </p>
            <h5 className="text-xl font-semibold text-gray-800">
              Happy Customer
            </h5>
          </div>
          {/* Testimonial 2 */}
          <div className="bg-white p-8 border border-gray-200 shadow-lg rounded-lg flex flex-col items-center">
            <i
              className="bi bi-star text-primary mb-4"
              style={{ fontSize: "3rem" }}
            ></i>
            <p className="text-lg mb-4 text-gray-600 italic">
              "The convenience of having everything in one place is amazing.
              Highly recommend!"
            </p>
            <h5 className="text-xl font-semibold text-gray-800">
              Satisfied Shopper
            </h5>
          </div>
          {/* Testimonial 3 */}
          <div className="bg-white p-8 border border-gray-200 shadow-lg rounded-lg flex flex-col items-center">
            <i
              className="bi bi-star text-primary mb-4"
              style={{ fontSize: "3rem" }}
            ></i>
            <p className="text-lg mb-4 text-gray-600 italic">
              "Great selection and fantastic deals. DealDeX has become my go-to
              shopping platform!"
            </p>
            <h5 className="text-xl font-semibold text-gray-800">
              Loyal Customer
            </h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
