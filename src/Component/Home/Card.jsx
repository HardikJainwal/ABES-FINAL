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
    description: "Influencer campaigns, celebrity endorsements & media features",
  },
  {
    title: "Sales & Ads Management",
    description: "Guaranteed sales, optimized Amazon PPC & multi-channel promotions",
  },
  {
    title: "Inventory & Fulfillment",
    description: "No warehousing fees, fast shipping, and easy logistics",
  },
  {
    title: "Exclusive Buyer Challenges",
    description: "Drive engagement and repeat customers with interactive campaigns",
  },
];

const Card = () => {
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    // Heading animation
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

    // Subheading animation
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

    // Cards stagger animation
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

    // Hover animations with fixed alignment
    cardsRef.current.forEach((card) => {
      const tl = gsap.timeline({ paused: true });

      tl.to(card.querySelector("img"), {
        rotation: 360,
        duration: 0.5,
        ease: "power1.out",
      })
        .to(
          card.querySelector("h3"),
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
            transform: "translateZ(0)", // Fixes shifting issue
            boxShadow: "0 10px 30px rgba(255, 87, 34, 0.3)",
            scale: 1.02, // Slight scale instead of `y`
            duration: 0.3,
          },
          0
        );

      card.addEventListener("mouseenter", () => tl.play());
      card.addEventListener("mouseleave", () => tl.reverse());
    });
  }, []);

  return (
    <div className="min-h-screen bg-black flex flex-col items-center py-16 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-orange-900/20 to-transparent pointer-events-none" />

      {/* Heading */}
      <h2 ref={headingRef} className="text-white text-4xl font-bold text-center mb-4">
        Your Gateway to the USA Market
      </h2>
      <p ref={subheadingRef} className="text-gray-400 text-center mt-2 max-w-2xl px-4">
        Breaking into the USA market isn't just about listing your products—it's about building a brand that sells.
      </p>

      {/* Card Container */}
      <div ref={containerRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 px-6 max-w-6xl">
        {services.map((service, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className="bg-gradient-to-br from-[#2a0803] to-[#0c0c0c] rounded-xl p-8 border border-orange-600/20 text-white transition-transform duration-300 will-change-transform"
          >
            <div className="w-16 h-16 mb-6 relative">
              <img src={icon} alt="Service Icon" className="w-full h-full object-contain" />
            </div>

            <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
