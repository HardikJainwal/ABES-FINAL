import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/Logo/Group.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 w-full py-4 px-6 sm:px-10 flex justify-between items-center z-50 bg-black/80 backdrop-blur-sm"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      {/* Left Section: Logo */}
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-10" />
        <div className="ml-2 mt-2 flex flex-col items-start leading-tight">
          <span className="text-white tracking-widest text-4xl">
            ABES
          </span>
          <span className="text-white text-[8px]">SELL BEFORE ANYONE ELSE</span>
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-16 mr-auto ml-30 mt-4">
        <a
          href="#"
          className="text-white hover:text-orange-400 transition relative group no-underline"
          style={{ color: "white" }}
        >
          Challenges
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a
          href="#"
          className="text-white hover:text-orange-400 transition relative group no-underline"
          style={{ color: "white" }}
        >
          Services
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a
          href="#"
          className="text-white hover:text-orange-400 transition relative group no-underline"
          style={{ color: "white" }}
        >
          About us
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a
          href="#"
          className="text-white hover:text-orange-400 transition relative group no-underline"
          style={{ color: "white" }}
        >
          Success stories
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
        </a>
      </div>

      {/* Right Section: Join Us Button */}
      <button className="hidden md:block bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-2 rounded-full shadow-md">
        Join us
      </button>

      {/* Hamburger Icon (Mobile) */}
      <button
        className="md:hidden text-white text-2xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-black/90 backdrop-blur-sm flex flex-col items-center space-y-6 py-6 md:hidden transition-all duration-300 z-40">
         <a 
           href="#" 
           className="text-white hover:text-orange-400 transition relative group no-underline"
           style={{ color: "white" }}
         >
           Challenges
           <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
         </a>
         <a
           href="#"
           className="text-white hover:text-orange-400 transition relative group no-underline"
           style={{ color: "white" }}
         >
           Services
           <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
         </a>
         <a
           href="#"
           className="text-white hover:text-orange-400 transition relative group no-underline"
           style={{ color: "white" }}
         >
           About us
           <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
         </a>
         <a
           href="#"
           className="text-white hover:text-orange-400 transition relative group no-underline"
           style={{ color: "white" }}
         >
           Success stories
           <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
         </a>
         <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-2 rounded-full shadow-md">
           Join us
         </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;