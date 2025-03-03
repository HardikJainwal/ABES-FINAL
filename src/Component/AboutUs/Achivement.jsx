import React from 'react';

const AchievementsComponent = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center py-16 overflow-hidden bg-black text-white">
      {/* Orange glow effect on right side */}
      <div 
        className="absolute top-1/4 right-0 w-1/2 h-3/4 rounded-full"
        style={{
          background: 'radial-gradient(circle at center, rgba(255, 87, 34, 0.4) 0%, rgba(255, 87, 34, 0.1) 50%, transparent 80%)',
          filter: 'blur(80px)',
          transform: 'translate(20%, -30%)',
          zIndex: 1
        }}
      />

      <div className="relative z-10 max-w-6xl w-full text-center px-4">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-2">Our Achievements</h2>
        
        {/* Gradient text for revenue */}
        <p className="text-lg sm:text-xl mb-4">
          <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent font-semibold">
            ₹1.5 Crore revenue with ₹1 Crore profit since launch
          </span>
        </p>
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3">
          USA First-Page Amazon Visibility within 1 week
        </h1>
        
        <p className="text-lg sm:text-xl mb-12">
          Successfully scaled and sold over 30+ brands across categories:
        </p>
        
        {/* Categories container - Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {/* Categories */}
          {[
            { title: 'Beauty', brands: ['DOT & KEY SKINCARE', 'WOW SKIN SCIENCE', 'DOT & KEY SKINCARE', 'DOT & KEY SKINCARE'] },
            { title: 'Fashion', brands: ['DOT & KEY SKINCARE', 'DOT & KEY SKINCARE', 'DOT & KEY SKINCARE', 'DOT & KEY SKINCARE'] },
            { title: 'Wellness', brands: ['DOT & KEY SKINCARE', 'DOT & KEY SKINCARE', 'DOT & KEY SKINCARE', 'DOT & KEY SKINCARE'] },
            { title: 'Home & Lifestyle', brands: ['DOT & KEY SKINCARE', 'DOT & KEY SKINCARE', 'DOT & KEY SKINCARE', 'DOT & KEY SKINCARE'] }
          ].map((category, index) => (
            <div key={index} className="flex flex-col items-center border border-orange-900/30 bg-black/40 rounded-3xl p-6 relative overflow-hidden shadow-lg">
              {/* Logos arranged in 2 columns and centered */}
              <div className="grid grid-cols-2 gap-3 mb-4 justify-center">
                {category.brands.map((brand, i) => (
                  <div 
                    key={i} 
                    className="bg-white text-black rounded-full py-2 px-3 text-xs font-bold flex justify-center items-center w-28"
                  >
                    {brand}
                  </div>
                ))}
              </div>
              
              {/* Category title */}
              <h3 className="text-2xl font-semibold text-orange-400">{category.title}</h3>
            </div>
          ))}
        </div>

        {/* New line about influencers (kept in one line with white text) */}
        <p className="text-lg sm:text-xl mt-12 text-center whitespace-nowrap">
          Collaborated with 500+ USA-based influencers, including TV actresses, Olympians, and entertainers.
        </p>
      </div>
    </div>
  );
};

export default AchievementsComponent;
