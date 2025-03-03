import React from 'react';
import { Trophy, Users, DollarSign, BarChart2 } from 'lucide-react';

const ChallengeHub = () => {
  return (
    <div className="min-h-screen w-full bg-[#0e0d0b] text-white flex items-center justify-center relative overflow-hidden">
      {/* Main orange gradient background effect */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        {/* Outer glow */}
        <div className="absolute w-[120%] h-[120%] bg-gradient-radial from-orange-900/20 via-orange-700/30 to-transparent blur-[150px]" />
        
        {/* Center intense glow */}
        <div className="absolute w-1/2 h-1/2 bg-orange-300/10 blur-[100px] rounded-full opacity-60" />
        <div className="absolute w-1/3 h-1/3 bg-orange-500/90 blur-[120px] rounded-full opacity-70" />
      </div>
      
      <div className="relative w-full max-w-5xl px-6 py-12 mt-20 z-10">
        {/* Header section */}
        <div className="text-center mb-16 relative">
          <div className="text-orange-500 text-sm font-medium mb-2">Official Challenge Hub</div>
          <h1 className="text-3xl md:text-4xl font-semibold mb-6 max-w-2xl mx-auto text-white">
            Welcome to the ultimate opportunity for{" "}
            <span className="bg-gradient-to-r from-orange-200 to-orange-300 bg-clip-text text-transparent">
              E-commerce Sellers, Agencies, and Investors to scale globally and win exciting rewards!
            </span>
          </h1>
          <div className="text-sm text-gray-300">
            Registration Window: March 1, 2025 - March 31, 2025
          </div>
        </div>
        
        {/* Cards section - enlarged with more padding and transparency */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 relative">
          {/* Participation Options Card */}
          <div className="bg-black/40 p-8 rounded-xl border border-orange-900/50 backdrop-blur-md h-full">
            <h3 className="text-sm font-medium text-center mb-6">Participation Options</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">•</span>
                <span className="text-sm bg-gradient-to-r from-[#ff5a05] to-orange-400 bg-clip-text text-transparent">
                  Startups & E-commerce Sellers
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">•</span>
                <span className="text-sm bg-gradient-to-r from-[#ff5a05] to-orange-400 bg-clip-text text-transparent">
                  Service-Based Agencies
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">•</span>
                <span className="text-sm bg-gradient-to-r from-[#ff5a05] to-orange-400 bg-clip-text text-transparent">
                  Angel Investors, VC Firms, and Incubators
                </span>
              </li>
            </ul>
          </div>
          
          {/* Points & Rewards Card */}
          <div className="bg-black/40 p-8 rounded-xl border border-orange-900/50 backdrop-blur-md h-full">
            <h3 className="text-sm font-medium text-center mb-6">Points & Rewards System</h3>
            <div className="space-y-4">
              <div className="bg-orange-950/70 rounded-full py-2 px-4 text-center text-xs">100 points</div>
              <div className="bg-orange-950/70 rounded-full py-2 px-4 text-center text-xs">100 points</div>
              <div className="bg-orange-950/70 rounded-full py-2 px-4 text-center text-xs">100 points</div>
              <div className="bg-orange-950/70 rounded-full py-2 px-4 text-center text-xs">100 points</div>
            </div>
          </div>
          
          {/* Leaderboard Card */}
          <div className="bg-black/40 p-8 rounded-xl border border-orange-900/50 backdrop-blur-md h-full">
            <h3 className="text-sm font-medium text-center mb-6">Leaderboard & Progress</h3>
            <div className="flex justify-center gap-4 mb-6">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-blue-500 overflow-hidden flex items-center justify-center mb-2">
                  <div className="transform scale-150">👤</div>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-orange-500 overflow-hidden flex items-center justify-center mb-2">
                  <div className="transform scale-150">👤</div>
                </div>
              </div>
            </div>
            <div className="flex justify-around">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-orange-800 flex items-center justify-center mb-1">
                  <span className="text-xs font-bold">1</span>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-orange-800 flex items-center justify-center mb-1">
                  <span className="text-xs font-bold">2</span>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-orange-800 flex items-center justify-center mb-1">
                  <span className="text-xs font-bold">3</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Sales Reporting Card */}
          <div className="bg-black/40 p-8 rounded-xl border border-orange-900/50 backdrop-blur-md h-full">
            <h3 className="text-sm font-medium text-center mb-6">Daily Sales Reporting</h3>
            <div className="space-y-6">
              <div className="text-center">
                <div className="font-medium text-sm mb-2">India Sales:</div>
                <div className="text-xs text-gray-400 mb-1">Revenue (INR): [Input Field]</div>
                <div className="text-xs text-gray-400">Units Sold: [Input Field]</div>
              </div>
              <div className="text-center">
                <div className="font-medium text-sm mb-2">USA Sales:</div>
                <div className="text-xs text-gray-400 mb-1">Revenue (USD): [Input Field]</div>
                <div className="text-xs text-gray-400">Units Sold: [Input Field]</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Challenge Information */}
        <div className="relative flex flex-col md:flex-row justify-between items-center">
          <div className="relative mb-6 md:mb-0">
            <div className="absolute -left-12 top-1/2 transform -translate-y-1/2 w-8 h-8 rounded-full border border-orange-500/30 flex items-center justify-center">
              <span className="text-xs">1</span>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-lg font-bold">3-Month Challenge</h3>
              <p className="text-xs text-gray-300">April 1, 2025 - June 30, 2025</p>
              <button className="mt-2 text-orange-500 text-sm font-medium">Register now</button>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -right-12 top-1/2 transform -translate-y-1/2 w-8 h-8 rounded-full border border-orange-500/30 flex items-center justify-center">
              <span className="text-xs">2</span>
            </div>
            <div className="text-center md:text-right">
              <h3 className="text-lg font-bold">Yearly Challenge</h3>
              <p className="text-xs text-gray-300">April 1, 2025 - March 31, 2026</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChallengeHub;