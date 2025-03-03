import React from 'react';

const AbesMarketplaceOnboarding = () => {
  const features = [
    {
      title: "Exclusive Access:",
      description: "Only 5,000 premium sellers will be onboarded to the ABES Marketplace."
    },
    {
      title: "Lower Competition:",
      description: "Unlike crowded marketplaces, your brand will get optimal visibility."
    },
    {
      title: "Free Warehousing & Logistics:",
      description: "ABES covers warehousing with no extra fees."
    },
    {
      title: "AR/VR Product Integration:",
      description: "Showcase your products using cutting-edge tech."
    },
    {
      title: "AI-Powered Customer Support:",
      description: "Enhance buyer experience and improve conversions."
    },
    {
      title: "Lower Marketplace Fees:",
      description: "Only 20% commission — 7% less than Amazon."
    }
  ];

  return (
    <div className="flex flex-col items-center justify-center w-full bg-black p-8 rounded-lg">
      <h2 className="text-white text-2xl font-bold mb-8">ABES Marketplace Onboarding</h2>
      
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mb-8">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="rounded-xl p-6 overflow-hidden"
            style={{
              background: 'linear-gradient(to bottom, #3a0101, #300101, #200000)',
              border: '1px solid #4d1a1a'
            }}>
            <div className="h-full">
              <p className="text-white font-bold mb-1">{feature.title}</p>
              <p className="text-white text-sm">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-8 rounded-full">
          Register Now
        </button>
        <button className="bg-transparent hover:bg-gray-800 text-white font-bold py-2 px-8 border border-gray-600 rounded-full">
          Download Challenge Guide
        </button>
        <button className="bg-transparent hover:bg-gray-800 text-white font-bold py-2 px-8 border border-gray-600 rounded-full">
          Contact Support
        </button>
      </div>
    </div>
  );
};

export default AbesMarketplaceOnboarding;