import React from 'react';

const MarketplaceBanner = () => {
  return (
    <div className="relative w-full bg-black min-h-96 overflow-hidden">
      {/* Orange glow effect on the right side */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-orange-500/30 to-transparent"></div>
      
      <div className="relative z-10 p-8 max-w-4xl mx-auto">
        {/* Title section */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold">
            <span className="text-orange-500">ABES Marketplace</span>
            <span className="text-white"> – A Marketplace Like No Other</span>
          </h1>
          
          <p className="text-white mt-4 text-lg">
            Unlike traditional marketplaces overcrowded with millions of sellers, ABES Marketplace focuses on
            quality over quantity, onboarding only 5,000 premium sellers to ensure:
          </p>
        </div>
        
        {/* Benefits box */}
        <div className="bg-black/60 border border-gray-700 rounded-lg p-6">
          {/* Benefit items */}
          {[
            "Faster deliveries (4-5 days to buyers)",
            "Quicker payments (within 7 days post-delivery)",
            "No return/refund hassles (exchange-only policy)",
            "AI-driven customer support for better post-sale experiences",
            "AR/VR product displays and enhanced product pages",
            "\"Sell without the headaches — ABES handles everything so you can focus on growth.\""
          ].map((benefit, index) => (
            <div key={index} className="flex items-center py-3 border-b border-gray-700 last:border-b-0">
              <div className="w-8 h-8 rounded-full bg-gray-400 mr-4"></div>
              <p className="text-white">{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarketplaceBanner;