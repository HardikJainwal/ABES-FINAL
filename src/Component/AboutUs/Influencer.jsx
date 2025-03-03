import React from 'react';
import dummy from '../../assets/BG/dummy.jpg'
import ambs from '../../assets/BG/ambss.jpeg'

const BrandAmbassadorsComponent = () => {
  // Sample data for celebrities and influencers
  const celebrities = [
    { name: "[Celebrity Name]", role: "Bollywood Actress" },
    { name: "[Celebrity Name]", role: "Bollywood Actress" },
    { name: "[Celebrity Name]", role: "Bollywood Actress" }
  ];
  
  const influencers = [
    { name: "[Celebrity Name]", role: "Bollywood Actress" },
    { name: "[Celebrity Name]", role: "Bollywood Actress" },
    { name: "[Celebrity Name]", role: "Bollywood Actress" }
  ];

  return (
    <div className="bg-black text-white py-12 px-4 relative overflow-hidden">
      {/* Radial orange glow in the bottom right */}
      <div 
        className="absolute bottom-0 right-0 w-full h-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle at bottom right, rgba(255, 87, 34, 0.3) 0%, transparent 70%)',
          zIndex: 0
        }}
      />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Heading section */}
        <h1 className="text-3xl md:text-4xl font-semibold text-center mb-3">Indian Brand Ambassadors</h1>
        <p className="text-center max-w-3xl mx-auto mb-8 text-sm md:text-base">
          ABES is proud to collaborate with top Indian personalities who share our vision of empowering brands to go global. Our Brand Ambassadors represent excellence, trust, and global appeal.
        </p>
        
        {/* Celebrity Faces section */}
        <h2 className="text-xl md:text-2xl font-medium text-center mb-6 text-orange-500">Celebrity Faces</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {celebrities.map((celebrity, index) => (
            <div 
              key={`celebrity-${index}`}
              className="rounded-3xl overflow-hidden"
              style={{
                background: 'linear-gradient(to bottom right, #1e120a, #2a1a10)',
                border: '1px solid rgba(255, 87, 34, 0.15)'
              }}
            >
              {/* Celebrity Image */}
              <div className="overflow-hidden rounded-3xl">
                <img 
                  src={ambs} 
                  alt={celebrity.name}
                  className="w-full object-cover"
                />
              </div>
              
              {/* Celebrity Info */}
              <div className="p-5">
                <h3 className="text-orange-500 font-medium text-lg">{celebrity.name}</h3>
                <p className="text-orange-400 mb-3">{celebrity.role}</p>
                <p className="text-sm text-gray-300">
                  "Proud to be associated with ABES in helping Indian brands make a global impact."
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Top Influencers section */}
        <h2 className="text-xl md:text-2xl font-medium text-center mb-6">
          Top Influencers <span className="text-gray-400 font-normal">(500K+ Followers)</span>
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {influencers.map((influencer, index) => (
            <div 
              key={`influencer-${index}`}
              className="rounded-3xl overflow-hidden"
              style={{
                background: 'linear-gradient(to bottom right, #1e120a, #2a1a10)',
                border: '1px solid rgba(255, 87, 34, 0.15)'
              }}
            >
              {/* Influencer Image */}
              <div className="overflow-hidden rounded-3xl">
                <img 
                  src={dummy} 
                  alt={influencer.name}
                  className="w-full object-cover"
                />
              </div>
              
              {/* Influencer Info */}
              <div className="p-5">
                <h3 className="text-orange-500 font-medium text-lg">{influencer.name}</h3>
                <p className="text-orange-400">{influencer.role}</p>
                <p className="text-sm text-gray-300 mt-3">
                  "Proud to be associated with ABES in helping Indian brands make a global impact."
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandAmbassadorsComponent;