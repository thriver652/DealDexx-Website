import React from "react";

const SpecialOffers = () => {
  return (
    <section className="py-16 bg-blue-50 text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-gray-800">
          Special Offers
        </h2>
        <p className="text-lg mb-12 text-gray-600">
          Sign up today to get exclusive deals on fashion, electronics, and
          more!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Fashion Offer */}
          <div className="bg-white p-6 border border-gray-200 shadow-lg rounded-lg flex flex-col items-center">
            <i
              className="bi bi-tags text-blue-500 mb-4"
              style={{ fontSize: "3rem" }}
            ></i>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">
              Exclusive Fashion
            </h3>
            <p className="text-lg text-gray-600 mb-4">
              Discover the latest trends and styles with our unbeatable fashion
              deals. Whether you're updating your wardrobe or finding the
              perfect gift, we've got you covered.
            </p>
            <button className="btn-primary mt-auto">Shop Now</button>
          </div>
          {/* Electronics Offer */}
          <div className="bg-white p-6 border border-gray-200 shadow-lg rounded-lg flex flex-col items-center">
            <i
              className="bi bi-laptop text-blue-500 mb-4"
              style={{ fontSize: "3rem" }}
            ></i>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">
              Top Electronics
            </h3>
            <p className="text-lg text-gray-600 mb-4">
              Explore cutting-edge technology with exclusive offers on
              electronics. From gadgets to home appliances, find the best deals
              on top brands.
            </p>
            <button className="btn-primary mt-auto">Explore Now</button>
          </div>
          {/* Grocery Offer */}
          <div className="bg-white p-6 border border-gray-200 shadow-lg rounded-lg flex flex-col items-center">
            <i
              className="bi bi-basket text-blue-500 mb-4"
              style={{ fontSize: "3rem" }}
            ></i>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">
              Grocery Savings
            </h3>
            <p className="text-lg text-gray-600 mb-4">
              Enjoy significant savings on your everyday grocery needs. From
              fresh produce to pantry staples, get the best deals delivered
              right to your door.
            </p>
            <button className="btn-primary mt-auto">Get Deals</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
