import React, { useEffect, useRef, useState } from "react";
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
  const [isMobile, setIsMobile] = useState(false);

  // Check if screen is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkMobile();

    // Add event listener for window resize
    window.addEventListener("resize", checkMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

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
    <div className="min-h-screen relative overflow-hidden bg-black">
      
      <div
        className="absolute inset-0 min-h-screen"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.90), rgba(0, 0, 0, 0.85)), url(${BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: isMobile ? "scroll" : "fixed", // Fixed only for desktop
          backgroundBlendMode: "multiply",
          opacity: 1,
        }}
      />

      
      <div
        ref={heroRef}
        className="relative flex flex-col items-center justify-center min-h-screen text-center px-4 md:px-6"
      >
        <div className="text-white space-y-6 max-w-2xl md:max-w-3xl lg:max-w-4xl">
          <h1
            ref={headingRef}
            className="text-3xl md:text-5xl lg:text-6xl leading-tight font-[400]"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            {isMobile ? (
              <>
                Empowering Indian Brands for{" "}
                <span
                  style={{
                    background:
                      "linear-gradient(180deg, #FFFFFF 20%, #FFD4B3 50%, #FF7A00 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Global E-Commerce Success
                </span>
              </>
            ) : (
              <>
                Empowering Indian Brands for <br />
                <span
                  style={{
                    background:
                      "linear-gradient(180deg, #FFFFFF 20%, #FFD4B3 50%, #FF7A00 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Global E-Commerce Success
                </span>
              </>
            )}
          </h1>

          <p ref={subheadingRef} className="text-lg md:text-2xl opacity-90">
            {isMobile ? (
              "Expand, Sell & Scale in the USA with India's #1 E-Commerce Accelerator"
            ) : (
              <>
                Expand, Sell & Scale in the USA with India's
                <br />
                #1 E-Commerce Accelerator
              </>
            )}
          </p>

          <div
            ref={buttonsRef}
            className="flex flex-col md:flex-row justify-center items-center md:space-x-6 space-y-4 md:space-y-0 pt-8"
          >
            <button className="w-full md:w-[220px] bg-[#FF4500] hover:bg-[#FF6347] text-white px-8 py-3 rounded-full text-sm font-medium transition-all duration-300">
              Apply Now
            </button>

            <button className="w-full md:w-[220px] bg-gray-500/50 hover:bg-gray-900/70 text-white px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 border border-gray-700">
              Explore Opportunities
            </button>
          </div>
        </div>
      </div>

      
      <div className="relative px-4 md:px-6 max-w-6xl mx-auto pb-20">
        <div className="relative">
          
          {!isMobile && (
            <>
              <div
                style={{
                  position: "absolute",
                  top: "-70px",
                  left: "-40px",
                  right: "-40px",
                  height: "180px",
                  background: "#FF4500",
                  borderRadius: "50%",
                  filter: "blur(120px)",
                  opacity: "0.4",
                  zIndex: "1",
                  pointerEvents: "none",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "20%",
                  left: "-80px",
                  width: "120px",
                  height: "300px",
                  background: "#FF4500",
                  borderRadius: "50%",
                  filter: "blur(60px)",
                  opacity: "0.1",
                  zIndex: "1",
                  pointerEvents: "none",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "40%",
                  right: "-80px",
                  width: "120px",
                  height: "300px",
                  background: "#FF7800",
                  borderRadius: "50%",
                  filter: "blur(90px)",
                  opacity: "0.25",
                  zIndex: "1",
                  pointerEvents: "none",
                }}
              />
            </>
          )}

          
          <div
            ref={challengeRef}
            className="relative rounded-2xl p-6 md:p-12 lg:p-20 py-10 md:py-20 text-white flex flex-col items-center text-center transition-all duration-500 overflow-hidden"
            style={{
              background: "rgba(0, 0, 0, 0.95)",
              boxShadow: isMobile ? "none" : "0 0 50px 20px rgba(255, 69, 0, 0.4)",
              borderRadius: "1.5rem",
              position: "relative",
              zIndex: "3",
            }}
          >
            
            <div
              style={{
                position: "absolute",
                top: "-2px",
                left: "5%",
                right: "5%",
                height: "4px",
                background:
                  "linear-gradient(90deg, transparent, #FF4500, transparent)",
                borderRadius: "4px",
                filter: "blur(10px)",
                opacity: "0.9",
                zIndex: "5",
              }}
            />

            
            <div
              style={{
                position: "absolute",
                top: "5%",
                bottom: "5%",
                left: "0",
                width: "2px",
                background:
                  "linear-gradient(to bottom, rgba(255,165,0,0), rgba(255,165,0,0.8), rgba(255,165,0,0))",
                opacity: "0.8",
                zIndex: "5",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: "5%",
                bottom: "5%",
                right: "0",
                width: "2px",
                background:
                  "linear-gradient(to bottom, rgba(255,165,0,0), rgba(255,165,0,0.8), rgba(255,165,0,0))",
                opacity: "0.8",
                zIndex: "5",
              }}
            />

            
            <div
              className="absolute inset-0 rounded-2xl"
              style={{
                background: "black",
                opacity: "0.95",
                zIndex: "-2",
              }}
            />

            
            <div
              className="absolute bottom-0 left-0 w-full h-[2px] rounded-b-2xl"
              style={{
                background:
                  "linear-gradient(to right, rgba(255,255,255,0), rgba(255,255,255,0.6), rgba(255,255,255,0))",
                filter: "blur(2px)",
              }}
            />

            
            {!isMobile && (
              <div
                className="absolute top-1/2 left-1/2 w-full h-full"
                style={{
                  transform: "translate(-50%, -50%)",
                  background:
                    "radial-gradient(circle at center, rgba(255, 87, 34, 0.08) 0%, transparent 90%)",
                  filter: "blur(70px)",
                  zIndex: "-1",
                }}
              />
            )}

            <div className="max-w-3xl mx-auto text-center mb-8 md:mb-12">
              <h2
                className="text-xl md:text-3xl font-bold"
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
                    fontSize: isMobile ? "1.25rem" : "1.5rem",
                    fontWeight: "700",
                  }}
                >
                  ABES Growth Challenges Section
                </span>
                <span
                  style={{
                    fontSize: isMobile ? "1rem" : "1.1rem",
                    display: "block",
                    fontWeight: "500",
                  }}
                >
                  Think You Can Outgrow the Competition? Prove It.
                </span>
              </h2>
            </div>

            <div className="w-full grid lg:grid-cols-2 gap-6 md:gap-12 items-start">
              <div className="text-left ml-0 md:ml-10">
                <p className="text-sm md:text-lg opacity-80">
                  Most businesses crawl. Some sprint. Few take off. The
                  challenge is simple—hit the growth benchmarks, claim exclusive
                  rewards, and cement your place as a brand that actually
                  scales.
                </p>
                <p className="mt-4 text-sm md:text-lg opacity-80">
                  This isn't just another marketing play. It's a test. Can you
                  beat the curve?
                </p>

                <div ref={revenueRef} className="mt-6 md:mt-8">
                  <div className="flex items-baseline space-x-3 md:space-x-4">
                    <span
                      className="text-3xl md:text-6xl font-light"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      $100k
                    </span>
                    <div className="text-base md:text-xl">
                      revenue in <span className="text-[#FFA500]">90 Days</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 md:mt-8">
                  <button className="text-[#FFA500] hover:text-[#FFD700] text-base md:text-lg group transition-all duration-300 flex items-center">
                    Take the Challenge
                    <span className="inline-block transition-transform duration-300 group-hover:translate-x-2 ml-2">
                      →
                    </span>
                  </button>
                  <p className="text-xs md:text-sm opacity-70 mt-2">
                    The clock's ticking.
                  </p>
                </div>
              </div>

              <div className="flex justify-center lg:justify-end relative">
                <img
                  ref={circleRef}
                  src={Circle}
                  alt="Challenge Ring"
                  className="w-40 md:w-64 lg:w-96 h-auto object-contain"
                  style={{
                    transform: isMobile ? "scale(0.9)" : "translate(-60px, 10px)",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;