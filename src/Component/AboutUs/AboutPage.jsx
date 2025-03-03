import React from 'react';
import cube from '../../assets/BG/cubes.png';

const BrandHeroSection = () => {
  return (
    <div className="relative w-full bg-black text-white overflow-hidden p-8 pt-24">
      {/* Orange glow effect in left corner */}
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-orange-500/20 blur-3xl -ml-20 -mb-20"></div>

      {/* Main content container */}
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Left-aligned heading and description */}
        <div className="text-left pl-6 md:pl-12">
          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
            <span className="text-white">Empowering Indian Brands to</span>
            <br />
            <span className="bg-gradient-to-r from-orange-400 to-rose-300 bg-clip-text text-transparent">
              Conquer the Global Market.
            </span>
          </h1>

          {/* Description with larger text and gradient for last two lines */}
          <p className="text-gray-300 mb-10 max-w-3xl text-lg">
            At ABES E-COM LLP, we believe in the potential of Indian brands to shine on the global 
            stage. Founded in January 2024, our mission is simple — to help startups, e-commerce 
            sellers, and established brands expand effortlessly into the USA market 
            <span className="bg-gradient-to-r from-orange-400/90 to-rose-300/90 bg-clip-text text-transparent"> while maximizing 
            profitability and brand value.</span>
          </p>
        </div>

        {/* Centered feature boxes */}
        <div className="flex justify-center w-full mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {[
              "Generated ₹1.5 Crores in revenue with ₹1 Crore in profit.",
              "Helped Indian sellers achieve over $144,000 in sales across multiple product categories.",
              "Managed and scaled over 30+ brands to success in the USA."
            ].map((text, index) => (
              <div key={index} className="relative bg-black/40 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 md:p-8 text-center">
                {/* Orange fog in corner inside box */}
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-orange-500/15 blur-xl rounded-bl-xl"></div>
                <p className="text-white relative z-10">{text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Centered quote */}
        <div className="flex justify-center w-full mb-8">
          <div className="text-center max-w-3xl">
            <h2 className="text-2xl md:text-2xl font-semibold mb-4">
              "We don't just scale brands — we tell their stories to the world."
            </h2>
            <p className="text-gray-300">
              Our journey has been fueled by a passion for e-commerce excellence, global branding, and a commitment to providing end-to-end solutions that make expansion seamless and profitable.
            </p>
          </div>
        </div>
      </div>

      {/* Cube Image */}
      <div className="absolute top-0 right-0 w-1/2 h-full pointer-events-none">
        <img src={cube} alt="3D Cubes" className="w-full h-full object-cover opacity-80" />
      </div>
    </div>
  );
};

export default BrandHeroSection;