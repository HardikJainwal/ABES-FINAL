import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ambs from "../../assets/BG/ambs.jpg";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const Ambassador = () => {
  const sectionRef = useRef(null);
  const cardsContainerRef = useRef(null);
  const testimonialRefs = useRef([]);

  const testimonials = [
    {
      id: 1,
      image: ambs,
      quote:
        "This product has completely transformed how I manage my projects and deadlines.",
      name: "Talia Taylor",
      position: "Digital Marketing Director @ Quantum",
    },
    {
      id: 2,
      image: ambs,
      quote:
        "The analytics tools helped us increase conversion rates by 45% within two months.",
      name: "Marcus Chen",
      position: "E-Commerce Manager @ Velotech",
    },
    {
      id: 3,
      image: ambs,
      quote:
        "Customer support is unmatched. They're responsive and actually solve problems.",
      name: "Elena Rodriguez",
      position: "Operations Head @ Fintech Solutions",
    },
  ];

  useEffect(() => {
    if (testimonialRefs.current.length) {
      testimonialRefs.current.forEach((card, index) => {
        if (!card) return;

        gsap.set(card, {
          y: index * 20,
          x: index * 10,
          opacity: index === 0 ? 1 : 0.3, // Reduce opacity of background cards
          scale: 1 - index * 0.05,
          zIndex: testimonials.length - index,
          border: "2px solid rgba(255, 255, 255, 0.3)", // Soft white border
          background: "rgba(20, 20, 20, 0.6)", // Default background color
        });
      });

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: `+=${testimonials.length * 50}px`,
        scrub: 6,
        pin: cardsContainerRef.current,
        snap: {
          snapTo: 1 / (testimonials.length - 1),
          duration: { min: 0.5, max: 1 },
          ease: "power2.inOut",
        },
        onUpdate: (self) => {
          const progress = self.progress;
          const cardCount = testimonialRefs.current.length;
          const segmentSize = 1 / cardCount;
          let activeIndex = Math.floor(progress / segmentSize);
          activeIndex = Math.min(Math.max(activeIndex, 0), cardCount - 1);

          activateCard(activeIndex);
        },
      });
    }

    const activateCard = (activeIndex) => {
      testimonialRefs.current.forEach((card, index) => {
        if (!card) return;

        const isActive = index === activeIndex;
        const depthFactor = Math.abs(index - activeIndex);
        const scaleValue = isActive ? 1 : 0.9 - depthFactor * 0.03;
        const opacityValue = isActive ? 1 : 0.5;
        const backgroundColor = isActive
          ? "rgba(20, 20, 20, 0.95)"
          : "rgba(20, 20, 20, 0.6)";
        const borderColor = isActive
          ? "rgba(255, 255, 255, 0.6)"
          : "rgba(255, 255, 255, 0.2)";
        const zIndex = isActive ? 10 : 10 - depthFactor;

        gsap.to(card, {
          opacity: opacityValue,
          scale: scaleValue,
          background: backgroundColor,
          border: `2px solid ${borderColor}`,
          boxShadow: isActive
            ? "0 10px 30px rgba(255, 255, 255, 0.4)"
            : "none",
          zIndex: zIndex,
          duration: 0.5,
        });
      });
    };

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen py-16 md:py-20 flex flex-col items-center justify-center relative overflow-hidden bg-black px-4"
    >
      <div className="z-10 relative text-center mb-10 md:mb-16 px-4">
        <h2 className="text-3xl md:text-5xl text-white font-normal mb-4 md:mb-6">
          Our Brand Ambassadors
        </h2>
        <p className="text-gray-400 max-w-lg md:max-w-xl mx-auto text-base md:text-lg">
          Hear firsthand how our solutions have boosted online success for users
          like you.
        </p>
      </div>

      <div
        ref={cardsContainerRef}
        className="relative w-full max-w-lg md:max-w-2xl lg:max-w-4xl px-4 md:px-8 mb-12 md:mb-16"
        style={{ height: "auto", minHeight: "400px" }}
      >
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            ref={(el) => (testimonialRefs.current[index] = el)}
            className="testimonial-card absolute top-0 left-0 right-0 mx-auto w-full max-w-lg md:max-w-2xl transition-all duration-300"
          >
            <div
              className="flex flex-col md:flex-row items-center md:items-start p-6 md:p-8 rounded-xl border"
              style={{
                transition: "box-shadow 0.3s ease",
                border: "2px solid rgba(255, 255, 255, 0.3)",
                background: "rgba(20, 20, 20, 0.6)",
              }}
            >
              <div className="w-24 h-24 md:w-28 md:h-28 mx-auto md:mx-0 mb-4 md:mb-0 md:mr-6 flex-shrink-0 overflow-hidden rounded-lg">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              <div className="testimonial-content flex-1 text-center md:text-left">
                <blockquote className="text-white text-base md:text-lg mb-3 md:mb-4 leading-relaxed font-light">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex flex-col items-center md:items-start">
                  <p className="text-white font-semibold text-sm md:text-base">
                    {testimonial.name}
                  </p>
                  <p className="text-gray-400 text-xs md:text-sm">
                    {testimonial.position}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Ambassador;
