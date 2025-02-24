import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

import BG from '../../assets/BG/Background.png';
import Circle from '../../assets/BG/Ring.png';

const Home = () => {
    const heroRef = useRef(null);
    const headingRef = useRef(null);
    const subheadingRef = useRef(null);
    const buttonsRef = useRef(null);
    const challengeRef = useRef(null);
    const circleRef = useRef(null);
    const revenueRef = useRef(null);
  
    useEffect(() => {
      // Hero Section Animations
      const tl = gsap.timeline();
  
      tl.fromTo(headingRef.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
      )
      .fromTo(subheadingRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
        "-=0.5"
      )
      .fromTo(buttonsRef.current.children,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.2, ease: "power3.out" },
        "-=0.3"
      );
  
      // Scroll Animations
      gsap.fromTo(challengeRef.current,
        { y: 100, opacity: 0, scale: 0.95 },
        { 
          y: 0, 
          opacity: 1, 
          scale: 1, 
          duration: 1, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: challengeRef.current,
            start: "top bottom",
            end: "top center",
            scrub: 1
          }
        }
      );
  
      gsap.to(circleRef.current, {
        rotation: 360,
        duration: 20,
        repeat: -1,
        ease: "none"
      });
  
      gsap.fromTo(revenueRef.current.children,
        { opacity: 0, scale: 0.5 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: revenueRef.current,
            start: "top bottom",
            end: "top center",
            scrub: 1
          }
        }
      );
    }, []);
  
    return (
      <div className="min-h-screen relative">
        {/* Background Section with Increased Height */}
        <div 
          className="absolute inset-0 min-h-[120vh]"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.90), rgba(0, 0, 0, 0.85)), url(${BG})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundBlendMode: 'multiply',
            opacity: 1
          }}
        />
  
        {/* Hero Section */}
        <div ref={heroRef} className="relative flex flex-col items-center justify-center min-h-screen text-center px-6">
          <div className="text-white space-y-6 max-w-4xl mt-10">
            <h1 ref={headingRef} className="text-6xl leading-tight font-[400]" style={{ fontFamily: 'Inter, sans-serif' }}>
              Empowering Indian Brands for <br />
              <span style={{ 
                background: 'linear-gradient(180deg, #FFFFFF 54.17%, #FFA171 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                Global E-Commerce Success
              </span>
            </h1>
  
            <p ref={subheadingRef} className="text-2xl opacity-90">
              Expand, Sell & Scale in the USA with India's
              <br />
              #1 E-Commerce Accelerator
            </p>
            <div ref={buttonsRef} className="flex justify-center space-x-6 pt-8">
              <button className="bg-[#FF4500] hover:bg-[#FF6347] text-white px-10 py-3 rounded-full text-lg font-medium transition-all duration-300">
                Apply Now
              </button>
              <button className="bg-gray-600 hover:bg-gray-900 text-white px-10 py-3 rounded-full text-lg font-medium transition-all duration-300">
                Explore Opportunities
              </button>
            </div>
          </div>
        </div>

        {/* Challenge Section with Rounded Corners */}
        <div className="relative mt-16 px-6 max-w-5xl mx-auto pb-32">
          {/* External Top Shadow - Positioned outside and above the challenge box */}
          <div 
            className="absolute left-0 right-0 h-64 z-0"
            style={{
              top: '-40px',
              background: 'linear-gradient(to bottom, rgba(255, 69, 0, 0.2) 0%, transparent 100%)',
              filter: 'blur(25px)',
              transform: 'translateY(-30%)',
              width: '100%',
              maxWidth: '100%',
              margin: '0 auto'
            }}
          />
          
          <div 
            ref={challengeRef}
            className="rounded-2xl p-8 py-16 text-white
            flex flex-col items-center text-center
            transition-all duration-500 relative overflow-hidden z-10"
            style={{
              position: 'relative',
              border: '1px solid transparent',
              borderImage: 'linear-gradient(135deg, #FFA500, #FFFFFF, transparent) 1'
            }}
          >
            {/* Full-height background gradient for the challenge box */}
            <div
              className="absolute inset-0"
              style={{
                background: 'radial-gradient(circle at 50% 50%, rgba(255, 87, 34, 0.25) 0%, rgba(20, 20, 20, 0.3) 25%, rgba(0, 0, 0, 0.95) 50%)',
                zIndex: -2
              }}
            />

            {/* Wider orange glow */}
            <div
              className="absolute top-1/2 left-1/2 w-full h-full"
              style={{
                transform: 'translate(-50%, -50%)',
                background: 'radial-gradient(circle at center, rgba(255, 87, 34, 0.15) 0%, transparent 90%)',
                filter: 'blur(70px)',
                zIndex: -1
              }}
            />
            
            {/* Removed the top shadow from inside the box */}

            {/* Heading - Reduced top space */}
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-[500]" style={{ fontFamily: 'Inter, sans-serif' }}>
                <span style={{ 
                    color: '#FF4500',
                    background: 'linear-gradient(180deg, #FF4500, #FFA500)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    display: 'block',
                    marginBottom: '0.5rem'
                  }}>
                  ABES Growth Challenges Section
                </span>
                Think You Can Outgrow the Competition? Prove It.
              </h2>
            </div>

            {/* Content */}
            <div className="w-full grid lg:grid-cols-2 gap-12 items-start">
              {/* Left Text */}
              <div className="text-left">
                <p className="text-lg opacity-80">
                  Most businesses crawl. Some sprint. Few take off. The challenge is simple—hit the growth benchmarks, 
                  claim exclusive rewards, and cement your place as a brand that actually scales.
                </p>
                <p className="mt-4 text-lg opacity-80">
                  This isn't just another marketing play. It's a test. Can you beat the curve?
                </p>

                <div ref={revenueRef} className="mt-8">
                  <div className="flex items-baseline space-x-4">
                    <span className="text-6xl font-light" style={{ fontFamily: 'Inter, sans-serif' }}>$100k</span>
                    <div className="text-xl">
                      revenue in <span className="text-[#FFA500]">90 Days</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <button className="text-[#FFA500] hover:text-[#FFD700] text-lg group transition-all duration-300 flex items-center">
                    Take the Challenge 
                    <span className="inline-block transition-transform duration-300 group-hover:translate-x-2 ml-2">→</span>
                  </button>
                  <p className="text-sm opacity-70 mt-2">The clock's ticking.</p>
                </div>
              </div>

              {/* Right Image */}
              <div className="flex justify-center lg:justify-end -mt-8">
                <img 
                  ref={circleRef}
                  src={Circle} 
                  alt="Challenge Ring" 
                  className="w-56 lg:w-80 h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Home;