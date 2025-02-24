import React from 'react';
import logo from '../assets/Logo/Group.png';

const Navbar = () => {
  return (
    <nav className="w-full py-4 px-8 flex justify-between items-center absolute top-0 z-50 bg-black">
      {/* Left Section: Logo & Navigation Links */}
      <div className="flex items-center space-x-10">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-10" />
          <span className="text-white font-semibold tracking-wide text-lg">ABES</span>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center space-x-8">
          <a href="#" style={{ color: 'white' }} className="hover:text-orange-400 transition">Challenges</a>
          <a href="#" style={{ color: 'white' }} className="hover:text-orange-400 transition">Services</a>
          <a href="#" style={{ color: 'white' }} className="hover:text-orange-400 transition">About us</a>
          <a href="#" style={{ color: 'white' }} className="hover:text-orange-400 transition">Success stories</a>
        </div>
      </div>

      {/* Right Section: Join Us Button */}
      <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-2 rounded-full shadow-md">
        Join us
      </button>
    </nav>
  );
};

export default Navbar;