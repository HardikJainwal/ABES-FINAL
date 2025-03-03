import React from 'react';

const PointsRewardsSystem = () => {
  const startupPoints = [
    { points: "100 points", description: "₹1,000 in delivered sales (India)" },
    { points: "300 points", description: "₹1,000 in USA sales" },
    { points: "3,000 points", description: "Each successful referral" },
    { points: "1,000 points", description: "Promoting ABES on your website" },
    { points: "500 points", description: "Social media post (max 3 per month)" },
    { points: "5,000 points", description: "Joining the USA Export Program" }
  ];

  const agencyPoints = [
    { points: "Earn points", description: "Equivalent to the combined performance of all registered companies." },
    { specialFormat: true, before: "If one company earns", points: "50,000 points", middle: "the agency/investor receives", pointsAfter: "50,000 points", after: "toward their total." }
  ];

  return (
    <div className="flex items-center justify-center w-full bg-black p-4">
      <div 
        className="w-full max-w-4xl rounded-2xl p-8"
        style={{
          background: 'linear-gradient(to bottom, #1a0505, #0a0000)',
          border: '1px solid #3d1a1a'
        }}
      >
        <h2 className="text-white text-2xl font-bold text-center mb-8">Points & Rewards System</h2>
        
        <div className="mb-8">
          <h3 className="text-orange-500 text-lg font-bold mb-4">Startup & E-commerce Points:</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {startupPoints.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <div 
                  className="rounded-full px-4 py-2 text-white whitespace-nowrap"
                  style={{
                    background: 'linear-gradient(to right, #3a1e0e, #2a0d05)',
                    border: '1px solid #5a2e1e'
                  }}
                >
                  {item.points}
                </div>
                <div className="text-white">{item.description}</div>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-orange-500 text-lg font-bold mb-4">Agency/Investor Points:</h3>
          
          <div className="space-y-4">
            {agencyPoints.map((item, index) => (
              <div key={index} className="flex flex-col md:flex-row md:items-center gap-3">
                {item.specialFormat ? (
                  <div className="flex flex-wrap items-center gap-2 text-white">
                    <span>{item.before}</span>
                    <div 
                      className="rounded-full px-4 py-2 text-white whitespace-nowrap"
                      style={{
                        background: 'linear-gradient(to right, #3a1e0e, #2a0d05)',
                        border: '1px solid #5a2e1e'
                      }}
                    >
                      {item.points}
                    </div>
                    <span>{item.middle}</span>
                    <div 
                      className="rounded-full px-4 py-2 text-white whitespace-nowrap"
                      style={{
                        background: 'linear-gradient(to right, #3a1e0e, #2a0d05)',
                        border: '1px solid #5a2e1e'
                      }}
                    >
                      {item.pointsAfter}
                    </div>
                    <span>{item.after}</span>
                  </div>
                ) : (
                  <>
                    <div 
                      className="rounded-full px-4 py-2 text-white whitespace-nowrap"
                      style={{
                        background: 'linear-gradient(to right, #3a1e0e, #2a0d05)',
                        border: '1px solid #5a2e1e'
                      }}
                    >
                      {item.points}
                    </div>
                    <div className="text-white">{item.description}</div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PointsRewardsSystem;