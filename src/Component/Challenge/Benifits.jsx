import React from 'react';

const BenefitsComponent = () => {
  const benefits = [
    {
      title: "Featuring in Global Media: Opportunity to be featured in Forbes, Fast Company, and other top magazines."
    },
    {
      title: "Recognition: Exclusive badges for top performers."
    },
    {
      title: "Guaranteed Sales: Minimum 500-1,000 units sales with 30-40% profit margins."
    },
    {
      title: "Post-Sale Support: Full post-purchase customer support for high retention."
    },
    {
      title: "Zero Returns: Only exchange policy to prevent loss from fraudulent returns."
    }
  ];

  return (
    <div className="flex flex-col items-center justify-center w-full bg-black bg-opacity-80 p-8 rounded-lg">
      <h2 className="text-white text-2xl font-bold mb-6">Additional Benefits for Participants:</h2>
      
      <div className="w-full space-y-4 max-w-3xl">
        {benefits.map((benefit, index) => (
          <div 
            key={index} 
            className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-full px-6 py-4 border border-gray-700 text-white">
            <p className="text-white text-center">{benefit.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BenefitsComponent;