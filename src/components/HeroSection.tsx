// src/components/HeroSection.tsx

const HeroSection = () => {
  return (
    <section className="hero bg-blue-600 text-white py-20 text-center">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          All Your Shopping Needs in One Place
        </h1>
        <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto">
          Discover exclusive deals on fashion, electronics, groceries, and food
          delivery. Experience unbeatable value and convenience with DealDeX.
        </p>
        <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-full shadow-md transition duration-300">
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
