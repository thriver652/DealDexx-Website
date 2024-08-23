// src/components/ProductCategories.tsx

const ProductCategories = () => {
  return (
    <section className="py-10 text-center">
      <div className="container">
        <h2 className="text-3xl font-semibold mb-4">Our Offerings</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-2xl font-bold mb-2">Fashion & Electronics</h3>
            <p>
              Discover the latest in fashion and technology with deals you won’t
              find anywhere else.
            </p>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-2xl font-bold mb-2">Food Delivery</h3>
            <p>
              Enjoy mouth-watering dishes from top local restaurants delivered
              right to your doorstep.
            </p>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-2xl font-bold mb-2">Grocery Delivery</h3>
            <p>
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
