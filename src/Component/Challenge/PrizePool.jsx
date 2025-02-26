import React from "react";

const PrizePoolTable = () => {
  // Categories and prize data
  const categories = [
    "Startups & E-commerce Sellers",
    "Service-Based Agencies",
    "Angel Investors, VC Firms, and Incubators",
  ];

  const placements = [
    { rank: "1st Place", prizes: { months3: "₹30 Lakhs", yearly: "₹1 Crore" } },
    { rank: "2nd Place", prizes: { months3: "₹20 Lakhs", yearly: "₹50 Lakhs" } },
    { rank: "3rd Place", prizes: { months3: "₹10 Lakhs", yearly: "₹30 Lakhs" } },
    { rank: "4th-10th", prizes: { months3: "₹2 Lakhs each", yearly: "₹10 Lakhs each" } },
    { rank: "11th-100th", prizes: { months3: "₹1 Lakh each", yearly: "₹5 Lakhs each" } },
    { rank: "101st-500th", prizes: { months3: "₹50,000 each", yearly: "₹2 Lakhs each" } },
    { rank: "501st-1000th", prizes: { months3: "₹20,000 each", yearly: "₹1 Lakh each" } },
  ];

  return (
    <div className="min-h-screen w-full bg-black text-white flex items-center justify-center p-4 font-inter">
      <div className="w-full max-w-6xl">
        {/* Enhanced Heading with larger size and stronger gradient */}
        <h1 className="text-6xl font-extrabold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500">
          Total Prize Pool: ₹10 Crores +
        </h1>

        {/* Table layout */}
        <div className="flex">
          {/* Prizes column */}
          <div className="w-36 mr-6 mt-3">
            <div className="text-orange-400 font-semibold text-lg mb-6">Prizes</div>
            {placements.map((placement, index) => (
              <div key={index} className="flex items-center mb-6">
                <span className="text-white mr-2">•</span>
                <span>{placement.rank}</span>
              </div>
            ))}
          </div>

          {/* Three cards for categories */}
          <div className="flex-1 flex gap-6">
            {categories.map((category, catIndex) => (
              <div key={catIndex} className="flex-1 flex flex-col">
                {/* Category title precisely aligned over its respective table */}
                <div className="text-orange-400 font-semibold text-lg text-center mb-4 px-2 h-12 flex items-center justify-center">
                  <span className="text-center">{category}</span>
                </div>
                
                <div className="rounded-lg overflow-hidden bg-gradient-to-b from-gray-900 to-black border border-gray-800 relative flex-1">
                  {/* Orange opacity effect inside the box */}
                  <div className="absolute inset-0 bg-orange-500 opacity-10 rounded-lg pointer-events-none"></div>

                  {/* Category header with 2 columns */}
                  <div className="grid grid-cols-2 border-b border-gray-700 relative">
                    <div className="text-center py-4 border-r border-gray-700 font-semibold">
                      3 months
                    </div>
                    <div className="text-center py-4 font-semibold">Yearly</div>
                  </div>

                  {/* Prize rows with increased padding */}
                  {placements.map((placement, rowIndex) => (
                    <div
                      key={rowIndex}
                      className="grid grid-cols-2 border-b border-gray-700 last:border-b-0 relative"
                    >
                      <div className="text-center py-5 border-r border-gray-700">
                        {placement.prizes.months3}
                      </div>
                      <div className="text-center py-5">{placement.prizes.yearly}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrizePoolTable;
