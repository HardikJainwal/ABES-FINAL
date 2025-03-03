import React from 'react';

const LeaderboardProgress = () => {
  // Top 3 leaders data
  const topLeaders = [
    { 
      position: 2, 
      name: "Fernanda Araujo", 
      avatar: "/api/placeholder/48/48",
      totalPoints: "$1390/5",
      salesRevenue: "$18K",
      referrals: "$180/3",
      uocPost: "$190/3"
    },
    { 
      position: 1, 
      name: "Antonio Lima", 
      avatar: "/api/placeholder/48/48",
      totalPoints: "$1800/5",
      salesRevenue: "$25K",
      referrals: "$230/5",
      uocPost: "$190/5"
    },
    { 
      position: 3, 
      name: "Valentina Carvalho", 
      avatar: "/api/placeholder/48/48",
      totalPoints: "$1019/3",
      salesRevenue: "$15K",
      referrals: "$80/3",
      uocPost: "$130/3"
    }
  ];

  // Table data for ranks 4-8
  const leaderboardData = [
    { rank: 4, participant: "Rafael Pereira", avatar: "/api/placeholder/40/40", totalPoints: 20, salesRevenue: 20, referrals: 20, uocPost: 20 },
    { rank: 5, participant: "Larissa Santos", avatar: "/api/placeholder/40/40", totalPoints: 19, salesRevenue: 19, referrals: 19, uocPost: 19 },
    { rank: 6, participant: "Gabrielly Tavares", avatar: "/api/placeholder/40/40", totalPoints: 16, salesRevenue: 16, referrals: 16, uocPost: 16 },
    { rank: 7, participant: "Renan Matos", avatar: "/api/placeholder/40/40", totalPoints: 12, salesRevenue: 12, referrals: 12, uocPost: 12 },
    { rank: 8, participant: "Hugo Souza", avatar: "/api/placeholder/40/40", totalPoints: 8, salesRevenue: 8, referrals: 8, uocPost: 8 }
  ];

  // Function to get appropriate text color based on value
  const getTextColorClass = (value) => {
    if (value >= 20) return "text-orange-500";
    if (value >= 16) return "text-yellow-500";
    if (value >= 12) return "text-yellow-600";
    return "text-white";
  };

  return (
    <div className="w-full bg-black p-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-white text-2xl font-bold text-center mb-8">Leaderboard & Progress</h2>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Top 3 podium section */}
          <div className="flex-1 flex items-end justify-center gap-4 mb-6 md:mb-0">
            {topLeaders.map((leader, index) => {
              // Determine the height based on position
              const heightClass = leader.position === 1 ? "h-64" : "h-56";
              
              return (
                <div key={index} className="relative flex flex-col items-center">
                  {/* Avatar */}
                  <div className="absolute -top-6">
                    <div className="relative">
                      <img 
                        src={leader.avatar} 
                        alt={leader.name}
                        className="rounded-full w-16 h-16 border-2 border-gray-700"
                      />
                      <div 
                        className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 rounded-full px-2 py-1 text-xs text-white"
                        style={{
                          background: 'linear-gradient(to right, #ff5500, #ff3300)',
                          fontSize: '10px'
                        }}
                      >
                        {leader.name}
                      </div>
                    </div>
                  </div>
                  
                  {/* Position box */}
                  <div 
                    className={`${heightClass} w-32 rounded-lg flex flex-col items-center justify-between p-4`}
                    style={{
                      background: 'linear-gradient(to bottom, #3a1e0e, #1a0505)',
                      border: '1px solid #5a2e1e'
                    }}
                  >
                    <div className="mt-8 text-white text-5xl font-bold">{leader.position}</div>
                    
                    <div className="w-full space-y-1 text-xs">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Total points:</span>
                        <span className="text-white">{leader.totalPoints}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Sales Revenue:</span>
                        <span className="text-white">{leader.salesRevenue}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Referrals:</span>
                        <span className="text-white">{leader.referrals}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">UOC Post:</span>
                        <span className="text-white">{leader.uocPost}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Leaderboard table */}
          <div 
            className="flex-1 rounded-lg overflow-hidden"
            style={{
              background: 'linear-gradient(to bottom, #2a1208, #120804)',
              border: '1px solid #4d1a1a'
            }}
          >
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="p-3 text-gray-400 text-left text-sm">Rank</th>
                  <th className="p-3 text-gray-400 text-left text-sm">Participant</th>
                  <th className="p-3 text-gray-400 text-left text-sm">Collaborator</th>
                  <th className="p-3 text-gray-400 text-left text-sm">Total points</th>
                  <th className="p-3 text-gray-400 text-left text-sm">Sales revenue</th>
                  <th className="p-3 text-gray-400 text-left text-sm">Referrals</th>
                  <th className="p-3 text-gray-400 text-left text-sm">UOC Post</th>
                </tr>
              </thead>
              <tbody>
                {leaderboardData.map((row, index) => (
                  <tr key={index} className="border-b border-gray-800">
                    <td className="p-3 text-white">{row.rank}</td>
                    <td className="p-3">
                      <img 
                        src={row.avatar} 
                        alt={row.participant}
                        className="rounded-full w-8 h-8 inline mr-2"
                      />
                    </td>
                    <td className="p-3 text-white">{row.participant}</td>
                    <td className={`p-3 ${getTextColorClass(row.totalPoints)}`}>{row.totalPoints}</td>
                    <td className={`p-3 ${getTextColorClass(row.salesRevenue)}`}>{row.salesRevenue}</td>
                    <td className={`p-3 ${getTextColorClass(row.referrals)}`}>{row.referrals}</td>
                    <td className={`p-3 ${getTextColorClass(row.uocPost)}`}>{row.uocPost}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="p-4 text-center">
              <button 
                className="text-orange-500 font-medium hover:text-orange-400"
                style={{ background: 'transparent' }}
              >
                View More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaderboardProgress;