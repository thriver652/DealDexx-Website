import React from "react";

const NewsletterSignup = () => {
  return (
    <section className="py-16 bg-blue-900 text-white text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4 flex items-center justify-center">
          <i className="bi bi-envelope-open text-3xl mr-2"></i>
          Stay Updated
        </h2>
        <p className="text-lg md:text-xl mb-6 max-w-lg mx-auto">
          Sign up for our newsletter and never miss an update on the latest
          deals, offers, and exclusive news!
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-3 rounded-lg border-2 border-gray-600 bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
          <button className="btn-primary flex items-center justify-center">
            <i className="bi bi-send mr-2"></i>
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;
