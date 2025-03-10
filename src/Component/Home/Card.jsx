import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import icon from "../../assets/BG/icon.png";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Marketplace & Amazon Onboarding",
    description: "Hassle-free entry with premium storefronts",
  },
  {
    title: "Branding & Marketing",
    description:
      "Influencer campaigns, celebrity endorsements & media features",
  },
  {
    title: "Sales & Ads Management",
    description:
      "Guaranteed sales, optimized Amazon PPC & multi-channel promotions",
  },
  {
    title: "Inventory & Fulfillment",
    description: "No warehousing fees, fast shipping, and easy logistics",
  },
  {
    title: "Exclusive Buyer Challenges",
    description:
      "Drive engagement and repeat customers with interactive campaigns",
  },
];

const Card = () => {
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const setupAnimations = () => {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: -50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        subheadingRef.current,
        { opacity: 0, y: -30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: subheadingRef.current,
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        cardsRef.current,
        {
          opacity: 0,
          scale: 0.8,
          y: 100,
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
          },
        }
      );

      cardsRef.current.forEach((card) => {
        if (!card) return;

        const tl = gsap.timeline({ paused: true });
        const imageEl = card.querySelector("img");
        const titleEl = card.querySelector("h3");

        if (imageEl && titleEl) {
          tl.to(imageEl, {
            rotation: 360,
            duration: 0.5,
            ease: "power1.out",
          })
            .to(
              titleEl,
              {
                scale: 1.05,
                color: "#ff4d00",
                duration: 0.3,
              },
              0
            )
            .to(
              card,
              {
                transform: "translateZ(0)",
                boxShadow: "0 10px 30px rgba(255, 87, 34, 0.3)",
                scale: 1.02,
                duration: 0.3,
              },
              0
            );

          if (window.matchMedia("(hover: hover)").matches) {
            card.addEventListener("mouseenter", () => tl.play());
            card.addEventListener("mouseleave", () => tl.reverse());
          }
        }
      });
    };

    const timer = setTimeout(() => {
      setupAnimations();
    }, 100);

    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div 
      className="min-h-screen flex flex-col items-center py-8 sm:py-12 md:py-16 relative overflow-hidden px-4 sm:px-6"
      style={{ backgroundColor: "#141414" }} // Matte black color
    >
      <h2
        ref={headingRef}
        className="text-white text-3xl md:text-4xl font-bold text-left mb-2 md:mb-4 px-4"
      >
        Your Gateway to the USA Market
      </h2>
      <p
        ref={subheadingRef}
        className="text-white text-left mt-2 max-w-2xl px-4 text-sm sm:text-base"
      >
        Breaking into the USA market isn't just about listing your products—it's
        about building a brand that sells.
      </p>

      <div
        ref={containerRef}
        className="mt-8 sm:mt-12 md:mt-16 w-full max-w-6xl"
      >
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-4 sm:mb-6 md:mb-8">
          {services.slice(0, 3).map((service, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="relative rounded-3xl p-5 sm:p-6 md:p-8 border border-orange-600/30 text-white transition-transform duration-300 will-change-transform flex flex-col h-full overflow-hidden"
              style={{
                background: "linear-gradient(to bottom right, rgba(181, 56, 2, 0.5), #3d1208)",
                position: "relative",
              }}
            >
              {/* Center black overlay with shift to right corner */}
              <div
                className="absolute inset-0 rounded-3xl opacity-40 pointer-events-none"
                style={{
                  background: "radial-gradient(ellipse at 70% 30%, #000000 0%, transparent 70%)",
                }}
              ></div>
              
              {/* Card content with icon on left and text below */}
              <div className="flex flex-col h-full">
              <div className="w-20 h-20 -ml-4 -mt-6 mb-2">
                  <img
                    src={icon}
                    alt="Service Icon"
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="text-left">
                <h3 className="text-white text-lg sm:text-xl font-semibold mt-8 mb-2 md:mb-3">
                    {service.title}
                  </h3>
                  <p className="text-white text-xs sm:text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-2xl mx-auto mt-8 sm:mt-12 md:mt-16">
          {services.slice(3, 5).map((service, index) => (
            <div
              key={index + 3}
              ref={(el) => (cardsRef.current[index + 3] = el)}
              className="relative rounded-3xl p-5 sm:p-6 md:p-8 border border-orange-600/30 text-white transition-transform duration-300 will-change-transform flex flex-col h-full overflow-hidden"
              style={{
                background: "linear-gradient(to bottom right, rgba(181, 56, 2, 0.5), #3d1208)",
                position: "relative",
              }}
            >
              {/* Center black overlay with shift to right corner */}
              <div
                className="absolute inset-0 rounded-3xl opacity-40 pointer-events-none"
                style={{
                  background: "radial-gradient(ellipse at 70% 30%, #000000 0%, transparent 70%)",
                }}
              ></div>

              {/* Card content with icon on left and text below */}
              <div className="flex flex-col h-full">
              <div className="w-20 h-20 -ml-4 -mt-6 mb-2">
                  <img
                    src={icon}
                    alt="Service Icon"
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="text-left">
                  <h3 className="text-white text-lg sm:text-xl font-semibold mt-8 mb-2 md:mb-3">
                    {service.title}
                  </h3>
                  <p className="text-white text-xs sm:text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;