import React from 'react';
import { Trophy, Users, DollarSign, BarChart2 } from 'lucide-react';

const ChallengeHub = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-black via-black to-gray-900 text-white flex items-center justify-center">
      <div className="relative w-full max-w-4xl px-6 py-12">
        {/* Circular background element */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full aspect-square rounded-full border border-orange-500/20 opacity-30" />
          <div className="absolute top-24 left-1/2 transform -translate-x-1/2 w-3/4 aspect-square rounded-full border border-orange-500/10 opacity-20" />
        </div>
        
        {/* Header section */}
        <div className="text-center mb-12 relative">
          <div className="text-orange-500 text-sm font-medium mb-2">Official Challenge Hub</div>
          <h1 className="text-3xl md:text-4xl font-bold mb-6 max-w-2xl mx-auto">
            Welcome to the ultimate opportunity for Startups, E-commerce Sellers, Agencies, and Investors to scale globally and win exciting rewards!
          </h1>
          <div className="text-sm text-gray-300">
            Registration Window: March 1, 2025 - March 31, 2025
          </div>
        </div>
        
        {/* Cards section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-16 relative">
          {/* Participation Options Card */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-4 rounded-lg border border-gray-800">
            <h3 className="text-sm text-center mb-4">Participation Options</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">•</span>
                <span className="text-xs">Startup & E-commerce Sellers</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">•</span>
                <span className="text-xs">Service-Based Agencies</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">•</span>
                <span className="text-xs">Angel Investors, VC Firms, and Incubators</span>
              </li>
            </ul>
          </div>
          
          {/* Points & Rewards Card */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-4 rounded-lg border border-gray-800">
            <h3 className="text-sm text-center mb-4">Points & Rewards System</h3>
            <div className="space-y-2">
              <div className="bg-gray-900 rounded-full py-1 px-4 text-center text-xs">100 points</div>
              <div className="bg-gray-900 rounded-full py-1 px-4 text-center text-xs">100 points</div>
              <div className="bg-gray-900 rounded-full py-1 px-4 text-center text-xs">100 points</div>
              <div className="bg-gray-900 rounded-full py-1 px-4 text-center text-xs">100 points</div>
            </div>
          </div>
          
          {/* Leaderboard Card */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-4 rounded-lg border border-gray-800">
            <h3 className="text-sm text-center mb-4">Leaderboard & Progress</h3>
            <div className="flex justify-center gap-4 mb-4">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-blue-500 overflow-hidden flex items-center justify-center mb-2">
                  <div className="transform scale-150">👤</div>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-orange-500 overflow-hidden flex items-center justify-center mb-2">
                  <div className="transform scale-150">👤</div>
                </div>
              </div>
            </div>
            <div className="flex justify-around">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-orange-800 flex items-center justify-center mb-1">
                  <span className="text-xs font-bold">1</span>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-orange-800 flex items-center justify-center mb-1">
                  <span className="text-xs font-bold">2</span>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-orange-800 flex items-center justify-center mb-1">
                  <span className="text-xs font-bold">3</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Sales Reporting Card */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-4 rounded-lg border border-gray-800">
            <h3 className="text-sm text-center mb-4">Daily Sales Reporting</h3>
            <div className="space-y-4">
              <div className="text-center">
                <div className="font-medium text-xs mb-1">India Sales:</div>
                <div className="text-xs text-gray-400">Revenue (INR): [Input field]</div>
                <div className="text-xs text-gray-400">Units Sold: [Input field]</div>
              </div>
              <div className="text-center">
                <div className="font-medium text-xs mb-1">USA Sales:</div>
                <div className="text-xs text-gray-400">Revenue (USD): [Input field]</div>
                <div className="text-xs text-gray-400">Units Sold: [Input field]</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Challenge Information */}
        <div className="relative flex flex-col md:flex-row justify-between items-center">
          <div className="relative mb-6 md:mb-0">
            <div className="absolute -left-12 top-1/2 transform -translate-y-1/2 w-8 h-8 rounded-full border border-white flex items-center justify-center">
              <span className="text-xs">1</span>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-lg font-bold">3-Month Challenge</h3>
              <p className="text-xs text-gray-300">April 1, 2025 - June 30, 2025</p>
              <button className="mt-2 text-orange-500 text-sm font-medium">Register now</button>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -right-12 top-1/2 transform -translate-y-1/2 w-8 h-8 rounded-full border border-white flex items-center justify-center">
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