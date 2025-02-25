import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

import BG from "../../assets/BG/Background.png";
import Circle from "../../assets/BG/Ring.png";

const Home = () => {
  const heroRef = useRef(null);
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const buttonsRef = useRef(null);
  const challengeRef = useRef(null);
  const circleRef = useRef(null);
  const revenueRef = useRef(null);

  useEffect(() => {

    const tl = gsap.timeline();

    tl.fromTo(
      headingRef.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    )
      .fromTo(
        subheadingRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
        "-=0.5"
      )
      .fromTo(
        buttonsRef.current.children,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.2, ease: "power3.out" },
        "-=0.3"
      );


    gsap.fromTo(
      challengeRef.current,
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
          scrub: 1,
        },
      }
    );

    gsap.to(circleRef.current, {
      rotation: 360,
      duration: 20,
      repeat: -1,
      ease: "none",
    });

    gsap.fromTo(
      revenueRef.current.children,
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
          scrub: 1,
        },
      }
    );
  }, []);

  return (
    <div className="min-h-screen relative">
     
      <div
        className="absolute inset-0 min-h-[120vh]"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.90), rgba(0, 0, 0, 0.85)), url(${BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "multiply",
          opacity: 1,
        }}
      />

  
<div
  ref={heroRef}
  className="relative flex flex-col items-center justify-center min-h-screen text-center px-6"
>
  <div className="text-white space-y-6 max-w-2xl md:max-w-3xl lg:max-w-4xl mt-10">
    <h1
      ref={headingRef}
      className="text-4xl md:text-5xl lg:text-6xl leading-tight font-[400]"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      Empowering Indian Brands for <br />
      <span
        style={{
          background: "linear-gradient(180deg, #FFFFFF 20%, #FFD4B3 50%, #FF7A00 100%)",

          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        Global E-Commerce Success
      </span>
    </h1>

    <p ref={subheadingRef} className="text-lg md:text-2xl opacity-90">
      Expand, Sell & Scale in the USA with India's
      <br />
      #1 E-Commerce Accelerator
    </p>


    <div
      ref={buttonsRef}
      className="flex flex-col md:flex-row justify-center items-center md:space-x-6 space-y-4 md:space-y-0 pt-8"
    >
      <button className="w-[220px] bg-[#FF4500] hover:bg-[#FF6347] text-white px-8 py-3 rounded-full text-sm font-medium transition-all duration-300">
        Apply Now
      </button>
      <button className="w-[220px] bg-gray-500/50 hover:bg-gray-900/70 text-white px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 border border-gray-700">
  Explore Opportunities
</button>

    </div>
  </div>
</div>


  
      <div className="relative mt-16 px-2 max-w-6xl mx-auto pb-20">
      
        



      <div
  ref={challengeRef}
  className="rounded-2xl p-8 py-16 text-white flex flex-col items-center text-center transition-all duration-500 relative overflow-visible z-10"
  style={{
    position: "relative",
    border: "2px solid transparent",
    borderImage:
      "linear-gradient(to bottom, transparent 10%, #FFA500 50%, transparent 90%) 1",
    borderRadius: "1rem",
  }}
>
  {/* External orange glow - stronger on top, subtle on sides */}
  <div className="absolute -top-24 -left-12 -right-12 h-32 bg-orange-700 opacity-60 blur-[90px] -z-10" />
  <div className="absolute -bottom-16 -left-8 -right-8 h-24 bg-orange-700 opacity-20 blur-[60px] -z-10" />
  <div className="absolute -left-16 top-1/4 bottom-1/4 w-10 bg-orange-700 opacity-15 blur-[50px] -z-10" />
  <div className="absolute -right-16 top-1/4 bottom-1/4 w-10 bg-orange-700 opacity-15 blur-[50px] -z-10" />

  {/* White Gradient Border Bottom */}
  <div
    className="absolute bottom-0 left-0 w-full h-[2px]"
    style={{
      background:
        "linear-gradient(to right, rgba(255,255,255,0), rgba(255,255,255,0.6), rgba(255,255,255,0))",
      filter: "blur(2px)",
      borderRadius: "0 0 1rem 1rem",
    }}
  />

  {/* Background Gradient Effect */}
  <div
    className="absolute inset-0"
    style={{
      background:
        "radial-gradient(circle at 50% 50%, rgba(255, 87, 34, 0.25) 0%, rgba(10, 10, 10, 0.85) 40%, rgba(0, 0, 0, 0.98) 60%)",
      zIndex: -2,
    }}
  />

          
          <div
            className="absolute top-1/2 left-1/2 w-full h-full"
            style={{
              transform: "translate(-50%, -50%)",
              background:
                "radial-gradient(circle at center, rgba(255, 87, 34, 0.15) 0%, transparent 90%)",
              filter: "blur(70px)",
              zIndex: -1,
            }}
          />

        

          
          <div className="max-w-3xl mx-auto text-center mb-12">
          <h2
  className="text-3xl font-bold" 
  style={{ fontFamily: "Inter, sans-serif", lineHeight: "1.2" }}
>
  <span
    style={{
      color: "#FF4500",
      background: "linear-gradient(180deg, #FF4500, #FFA500)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
      display: "block",
      marginBottom: "0.5rem",
      fontSize: "1.85rem", 
      fontWeight: "700", 
    }}
  >
    ABES Growth Challenges Section
  </span>
  <span style={{ fontSize: "1.25rem", display: "block", fontWeight: "500" }}>
    Think You Can Outgrow the Competition? Prove It.
  </span>
</h2>

</div>

       
          <div className="w-full grid lg:grid-cols-2 gap-12 items-start">
            
            <div className="text-left">
              <p className="text-lg opacity-80">
                Most businesses crawl. Some sprint. Few take off. The challenge
                is simple—hit the growth benchmarks, claim exclusive rewards,
                and cement your place as a brand that actually scales.
              </p>
              <p className="mt-4 text-lg opacity-80">
                This isn't just another marketing play. It's a test. Can you
                beat the curve?
              </p>

              <div ref={revenueRef} className="mt-8">
                <div className="flex items-baseline space-x-4">
                  <span
                    className="text-6xl font-light"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    $100k
                  </span>
                  <div className="text-xl">
                    revenue in <span className="text-[#FFA500]">90 Days</span>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <button className="text-[#FFA500] hover:text-[#FFD700] text-lg group transition-all duration-300 flex items-center">
                  Take the Challenge
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-2 ml-2">
                    →
                  </span>
                </button>
                <p className="text-sm opacity-70 mt-2">The clock's ticking.</p>
              </div>
            </div>

        
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