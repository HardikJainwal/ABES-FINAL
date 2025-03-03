import React from 'react';

const TermsConditionsFullWidth = () => {
  return (
    <div className="w-full bg-black min-h-screen flex justify-center items-center p-4">
      <div 
        className="w-full max-w-4xl p-8 rounded-xl"
        style={{
          background: 'linear-gradient(to bottom, #1a0505, #0a0000)',
          border: '1px solid #3d1a1a'
        }}
      >
        <h2 className="text-white text-2xl font-bold text-center mb-6">Terms & Conditions:</h2>
        
        <ul className="list-disc pl-6 text-white space-y-4">
          <li>
            Participants can <span className="font-bold">register for both</span> the 3-month and Yearly challenges.
          </li>
          <li>
            Must <span className="font-bold">have to promote their participation</span> through their social media.
          </li>
          <li>
            Mandatory, All participants <span className="font-bold">must have to register for USA Export Program</span>, minimum sales of 
            500-1000 pieces of product is guaranteed.
          </li>
          <li>
            Minimum Monthly Revenue: Participants <span className="font-bold">must generate a minimum of ₹5 Lakhs</span> through online 
            sales each month to stay eligible.
          </li>
          <li>
            Referral Eligibility: <span className="font-bold">Referrals must qualify for challenge registration</span>.
          </li>
          <li>
            Sales Points: <span className="font-bold">Only delivered orders will count towards sales points</span>.
          </li>
          <li>
            Social Media Points: <span className="font-bold">Content must include #ABESChallenge and tag official ABES pages to be 
            valid</span>.
          </li>
          <li>
            USA Export Program Bonus: <span className="font-bold">Participants must complete onboarding to earn the 5,000-point 
            bonus</span>.
          </li>
        </ul>

        <div className="mt-8">
          <h3 className="text-orange-500 text-lg font-bold mb-4">Deadlines:</h3>
          
          <ul className="list-disc pl-6 text-white space-y-4">
            <li>
              <span className="font-bold">3-Month Challenge:</span> Points reset every <span className="font-bold">3 months</span>.
            </li>
            <li>
              <span className="font-bold">Yearly Challenge:</span> Cumulative points over <span className="font-bold">12 months</span>.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TermsConditionsFullWidth;