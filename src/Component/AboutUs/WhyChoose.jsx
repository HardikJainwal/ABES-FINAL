import React from 'react';
import abesLogo from '../../assets/Logo/ABES-Logo.png';

const WhyChooseABES = () => {
  const benefits = [
    { title: "End-to-End E-commerce Solutions", highlighted: false },
    { title: "Guaranteed Sales — 500 units with a minimum AOV of $30", highlighted: false },
    { title: "30-40% ROI Guarantee", highlighted: false },
    { title: "Global Brand Exposure — featuring in leading media houses", highlighted: false },
    { title: "Free Warehousing & Lower Marketplace Fees", highlighted: false },
    { title: "Seller-Centric Policies, No random account suspensions or unfair returns", highlighted: false },
  ];

  return (
    <div className="w-full bg-black text-white py-8">
      {/* Title */}
      <h2 className="text-center text-2xl font-bold mb-10">Why Choose ABES?</h2>
      
      {/* Benefits Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-6 mb-12">
        {benefits.map((benefit, index) => (
          <div 
            key={index} 
            className="rounded-3xl overflow-hidden"
            style={{
              background: 'linear-gradient(to bottom right, #2a1207, #1a0c04)',
              border: '1px solid rgba(153, 51, 0, 0.5)'
            }}
          >
            <div className="flex items-center p-6">
              <div className="w-12 h-12 rounded-full bg-gray-300 flex-shrink-0 mr-4"></div>
              <p className="text-sm leading-tight">{benefit.title}</p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Bottom Section with Logo and Contact */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 px-4 md:px-6">
        {/* Left: Logo and Tagline */}
        <div className="bg-gray-900/30 rounded-xl p-8 flex flex-col items-center justify-center md:w-1/2">
          <img src={abesLogo} alt="ABES Logo" className="w-50 h-50 object-contain" />
          <p className="text-orange-500 text-xl font-bold">SELL BEFORE ANYONE ELSE</p>
        </div>
        
        {/* Right: Contact Information */}
        <div className="md:w-1/2 flex flex-col justify-center">
          <p className="text-orange-500 font-medium">Contact us</p>
          <h3 className="text-3xl font-bold mb-6">Get In Touch With <span className="text-orange-500">ABES</span></h3>
          
          <ul className="space-y-4">
            <li className="flex items-start">
              <div className="mt-1.5 w-3 h-3 rounded-full bg-orange-500 mr-3"></div>
              <div>
                Monday/Friday 9:00-23:00<br />
                Saturday 10:00-21:00
              </div>
            </li>
            <li className="flex items-start">
              <div className="mt-1.5 w-3 h-3 rounded-full bg-orange-500 mr-3"></div>
              <div>
                +012-345-6789<br />
                OrganicFood@contact.com<br />
                9899 Lorem Ipsum street, Pellentesque, CA, USA
              </div>
            </li>
          </ul>
          
          <button className="mt-6 bg-orange-500 text-white px-6 py-2 rounded-full w-32 text-sm">
            Contact us
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseABES;