import React from 'react';

const MeetOurTeam = () => {
  // Leadership team data
  const leadershipTeam = [
    {
      name: "Talia Taylor",
      role: "Chief Operating Officer (COO)",
      quote: "Ensuring seamless operations for global brand success"
    },
    {
      name: "Talia Taylor",
      role: "Chief Marketing Officer (CMO)",
      quote: "Creating powerful campaigns that drive sales and visibility."
    },
    {
      name: "Talia Taylor",
      role: "Head of Logistics",
      quote: "Managing end-to-end warehousing, shipping, and fulfilment."
    },
    {
      name: "Talia Taylor",
      role: "Head of Branding & Content",
      quote: "Crafting stories that connect brands with global consumers."
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen p-8">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-light text-amber-100 mb-4">Meet Our Team</h1>
        <p className="text-xl max-w-3xl mx-auto">
          Our success is driven by a dedicated team of experts passionate about scaling brands globally.
        </p>
      </div>

      {/* Founder Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 mb-16 border-t border-b border-gray-800">
        <div className="p-8 border-r border-gray-800 flex items-center justify-center">
          <h2 className="text-2xl font-semibold">Bhaskar</h2>
        </div>
        <div className="p-8">
          <div className="mb-6">
            <p className="text-lg mb-4">Founder & Director</p>
            <p className="text-sm mb-4">
              "We've faced the struggles of international selling, delayed payments, refunds, and account suspensions. That's why ABES is built differently with sellers in mind."
            </p>
          </div>
          <div>
            <p className="text-xs">
              With a vision to bridge the gap between Indian brands and global consumers, Bhaskar established ABES E-COM LLP to provide startups and sellers with an all-in-one platform for global success.
            </p>
          </div>
        </div>
      </div>

      {/* Leadership Team Header */}
      <div className="text-center mb-6">
        <h2 className="text-3xl font-light text-amber-100">Leadership Team</h2>
      </div>

      {/* Leadership Team Grid */}
      <div className="grid grid-cols-2 border-t border-l border-gray-800">
        {leadershipTeam.map((member, index) => (
          <div key={index} className="border-r border-b border-gray-800">
            <div className="flex p-4">
              <div className="mr-4">
                <img 
                  src="/api/placeholder/140/140" 
                  alt={member.name} 
                  className="w-28 h-28 object-cover"
                />
              </div>
              <div>
                <p className="text-sm mb-3">"{member.quote}"</p>
                <h3 className="font-medium">{member.name}</h3>
                <p className="text-xs text-gray-400">{member.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MeetOurTeam;