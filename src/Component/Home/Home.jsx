import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import BG from '../../assets/BG/Background.png';
import Circle from '../../assets/BG/Ring.png';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const heroRef = useRef(null);
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const buttonsRef = useRef(null);
  const challengeRef = useRef(null);
  const challengeTitleRef = useRef(null);
  const challengeContentRef = useRef(null);
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

    // Challenge Section Animations
    gsap.fromTo(challengeRef.current,
      { 
        y: 100,
        opacity: 0,
        scale: 0.95
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: challengeRef.current,
          start: "top 80%",
        }
      }
    );

    // Rotating Circle Animation
    gsap.to(circleRef.current, {
      rotation: 360,
      duration: 20,
      repeat: -1,
      ease: "none"
    });

    // Revenue Numbers Animation
    gsap.fromTo(revenueRef.current.children,
      { opacity: 0, scale: 0.5 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: revenueRef.current,
          start: "top 80%",
        }
      }
    );

  }, []);

  return (
    <div className="min-h-screen relative">
      {/* Background Section */}
      <div 
  className="absolute inset-0 min-h-[110vh]" // Increase height
  style={{
    backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5)), url(${BG})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundBlendMode: 'multiply',
  }}
/>

      {/* Hero Section */}
      <div ref={heroRef} className="relative pt-32 px-6 max-w-7xl mx-auto text-center">
        <div className="text-white space-y-6">
          <h1 ref={headingRef} className="text-5xl font-bold leading-tight">
            Empowering Indian Brands for
            <br />
            <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
              Global E-Commerce Success
            </span>
          </h1>
          <p ref={subheadingRef} className="text-xl opacity-90">
            Expand, Sell & Scale in the USA with India's
            <br />
            #1 E-Commerce Accelerator
          </p>
          <div ref={buttonsRef} className="flex justify-center space-x-4 pt-4">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-2 rounded-md transition-all duration-300 hover:scale-105">
              Apply Now
            </button>
            <button className="border border-white text-white px-8 py-2 rounded-md hover:bg-white/10 transition-all duration-300">
              Explore Opportunities
            </button>
          </div>
        </div>
      </div>

      {/* Challenge Section */}
      <div className="relative mt-32  px-6 max-w-5xl mx-auto">
      <div 
  ref={challengeRef}
  className="bg-black/80 rounded-xl p-10 py-16 min-h-[300px] text-white shadow-[0_0_40px_15px_rgba(251,146,60,0.6)] 
  flex flex-col lg:flex-row items-center lg:items-start text-left lg:text-left hover:shadow-[0_0_50px_20px_rgba(251,146,60,0.7)] 
  transition-all duration-500"
>
          {/* Left Content Section */}
          <div className="lg:w-2/3">
            <h2 ref={challengeTitleRef} className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-yellow-400 text-transparent bg-clip-text">
              ABES Growth Challenges Section
            </h2>
            <h3 className="text-xl mt-2 opacity-90">
              Think You Can Outgrow the Competition? Prove It.
            </h3>

            <div ref={challengeContentRef}>
              <p className="mt-4 opacity-80 max-w-2xl">
                Most businesses crawl. Some sprint. Few take off. The challenge is simple—hit the growth benchmarks, 
                claim exclusive rewards, and cement your place as a brand that actually scales.
              </p>

              <p className="mt-2 opacity-80">
                This isn't just another marketing play. It's a test. Can you beat the curve?
              </p>
            </div>

            <div ref={revenueRef} className="flex items-center space-x-2 text-4xl font-bold mt-6">
              <span>$100k</span>
              <span className="text-xl font-normal">revenue in</span>
              <span>90</span>
              <span className="text-xl font-normal">Days</span>
            </div>

            <button className="mt-6 text-orange-500 hover:text-orange-600 font-bold text-lg group transition-all duration-300">
              Take the Challenge 
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">→</span>
            </button>
            <p className="text-sm opacity-70 mt-1">The clock's ticking.</p>
          </div>

          {/* Right Image Section */}
          <div className="lg:w-1/3 flex justify-center lg:justify-end mt-8 lg:mt-0">
            <img 
              ref={circleRef}
              src={Circle} 
              alt="Challenge Ring" 
              className="w-40 lg:w-52 h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;