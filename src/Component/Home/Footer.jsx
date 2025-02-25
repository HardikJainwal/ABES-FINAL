import React from 'react';
import { FaInstagram, FaYoutube } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import logo from '../../assets/Logo/ABES-Logo.png';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center md:items-start md:flex-row justify-between">
        
    
      <div className="flex items-center space-x-4 mb-6 md:mb-0">
  <img src={logo} alt="ABES" className="w-16 h-auto" />
  <div className="text-left">
    <h2 className="text-white text-lg font-semibold">ABES</h2>
    <p className="text-gray-400 text-sm">SELL BEFORE ANYONE ELSE</p>
  </div>
</div>

    
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left w-full max-w-3xl">
          <div>
            <h3 className="text-white font-semibold mb-2">Product</h3>
            <ul className="space-y-1">
              <li>Features</li>
              <li>Integration</li>
              <li>Updates</li>
              <li>FAQ</li>
              <li>Pricing</li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-2">Company</h3>
            <ul className="space-y-1">
              <li>About</li>
              <li>Blog</li>
              <li>Careers</li>
              <li>Manifesto</li>
              <li>Press</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-2">Resources</h3>
            <ul className="space-y-1">
              <li>Examples</li>
              <li>Community</li>
              <li>Guides</li>
              <li>Docs</li>
              <li>Press</li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-2">Legal</h3>
            <ul className="space-y-1">
              <li>Privacy</li>
              <li>Terms</li>
              <li>Security</li>
            </ul>
          </div>
        </div>
      </div>

      
      <div className="flex justify-center md:justify-start space-x-4 mt-8">
        <IoClose className="text-gray-400 w-5 h-5 cursor-pointer hover:text-white" />
        <FaInstagram className="text-gray-400 w-5 h-5 cursor-pointer hover:text-white" />
        <FaYoutube className="text-gray-400 w-5 h-5 cursor-pointer hover:text-white" />
      </div>
    </footer>
  );
};

export default Footer;
