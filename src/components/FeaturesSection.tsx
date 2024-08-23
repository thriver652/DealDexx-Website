import React from "react";

const FeaturesSection = () => {
  return (
    <section id="features" className="py-16 pt-24 bg-blue-50 text-center">
      <div className="container mx-auto px-4">
        {/* Mission Section */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-600 flex items-center justify-center">
            <i className="bi bi-bullseye text-3xl mr-2"></i>
            Our Mission
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-700 leading-relaxed">
            Empower your everyday with effortless shopping and delivery
            solutions. Enjoy fashion, electronics, groceries, and meals—all with
            unbeatable deals and convenience.
          </p>
        </div>

        {/* Vision Section */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-600 flex items-center justify-center">
            <i className="bi bi-eye-fill text-3xl mr-2"></i>
            Our Vision
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-700 leading-relaxed">
            To be the go-to platform for all your shopping and delivery needs,
            blending convenience with value to enhance daily life.
          </p>
        </div>

        {/* Core Values Section */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-blue-600 flex items-center justify-center">
            <i className="bi bi-stars text-3xl mr-2"></i>
            Core Values
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="max-w-xs mx-auto text-gray-700 text-center">
              <i className="bi bi-person-heart text-4xl mb-4 text-blue-600"></i>
              <h3 className="text-xl font-semibold mb-2">Customer First</h3>
              <p>Everything we do is to make your life easier.</p>
            </div>
            <div className="max-w-xs mx-auto text-gray-700 text-center">
              <i className="bi bi-lightbulb text-4xl mb-4 text-blue-600"></i>
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p>Bringing the latest technology to your doorstep.</p>
            </div>
            <div className="max-w-xs mx-auto text-gray-700 text-center">
              <i className="bi bi-shield-check text-4xl mb-4 text-blue-600"></i>
              <h3 className="text-xl font-semibold mb-2">Integrity</h3>
              <p>Building trust through transparency and quality.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
