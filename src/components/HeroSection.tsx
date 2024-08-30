import React from "react";

const HeroSection = () => {
  return (
    <section className="hero bg-[#1E3A8A] text-white py-40 mt-20 text-center">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          All Your Shopping Needs in One Place
        </h1>
        <p className="text-base md:text-lg lg:text-xl mb-6 max-w-2xl mx-auto">
          Discover exclusive deals on fashion, electronics, groceries, and food
          delivery. Experience unbeatable value and convenience with{" "}
          <span className="text-[#6EE7B7] font-extrabold text-xl lg:text-2xl">
            DealDeX
          </span>
          .
        </p>
        <button className="bg-[#14B8A6] hover:bg-[#0D9488] text-white font-bold py-3 px-6 rounded-full shadow-md transition duration-300">
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
