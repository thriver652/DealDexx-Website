import React from "react";

const ProductCategories = () => {
  return (
    <section id="categories" className="py-10 pt-24 bg-blue-50 text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-gray-800">Our Offerings</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl mb-4" style={{ color: "black" }}>
              <i className="bi bi-bag"></i>
            </div>
            <h3 className="text-2xl font-bold mb-2">Fashion & Electronics</h3>
            <p className="text-gray-700">
              Discover the latest in fashion and technology with deals you won’t
              find anywhere else.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl mb-4" style={{ color: "black" }}>
              <i className="bi bi-geo-alt"></i>
            </div>
            <h3 className="text-2xl font-bold mb-2">Food Delivery</h3>
            <p className="text-gray-700">
              Enjoy mouth-watering dishes from top local restaurants delivered
              right to your doorstep.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl mb-4" style={{ color: "black" }}>
              <i className="bi bi-cart-check"></i>
            </div>
            <h3 className="text-2xl font-bold mb-2">Grocery Delivery</h3>
            <p className="text-gray-700">
              Shop for a wide range of grocery items, from everyday essentials
              to specialty products, with quick and reliable delivery.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
