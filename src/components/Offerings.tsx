const Offerings = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-secondary">
          Our Offerings
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-white rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 ease-in-out">
            <h3 className="text-2xl font-semibold mb-4 text-primary">
              Deal Price
            </h3>
            <p className="text-lg text-gray-700">
              Discover unbeatable deals on fashion and electronics in our retail
              section.
            </p>
          </div>
          <div className="p-8 bg-white rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 ease-in-out">
            <h3 className="text-2xl font-semibold mb-4 text-primary">
              Deal Foodie
            </h3>
            <p className="text-lg text-gray-700">
              Enjoy delicious dishes from local restaurants with our efficient
              food delivery service.
            </p>
          </div>
          <div className="p-8 bg-white rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 ease-in-out">
            <h3 className="text-2xl font-semibold mb-4 text-primary">
              Deal Mart
            </h3>
            <p className="text-lg text-gray-700">
              Convenient grocery delivery with a focus on variety and quality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offerings;
