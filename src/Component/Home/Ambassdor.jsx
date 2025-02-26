import React, { useEffect, useRef, useState } from "react";
import ambs from "../../assets/BG/ambs.jpg";
import ambss from '../../assets/BG/ambss.jpeg';
import dummy from '../../assets/BG/dummy.jpg'

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
    image: ambss,
    quote:
      "The analytics tools helped us increase conversion rates by 45% within two months.",
    name: "Marcus Chen",
    position: "E-Commerce Manager @ Velotech",
  },
  {
    id: 3,
    image: dummy,
    quote:
      "Customer support is unmatched. They're responsive and actually solve problems.",
    name: "Elena Rodriguez",
    position: "Operations Head @ Fintech Solutions",
  },
];

const Ambassador = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(testimonials.length - 1);
  const cardsContainerRef = useRef(null);

  useEffect(() => {
    // Change card every 3 seconds
    const interval = setInterval(() => {
      setPrevIndex(activeIndex);
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <section className="py-12 md:py-16 flex flex-col items-center justify-center relative overflow-hidden bg-black px-4">
      <div className="z-10 relative text-center mb-8 md:mb-12 px-4">
        <h2 className="text-3xl md:text-5xl text-white font-normal mb-3 md:mb-4">
          Our Brand Ambassadors
        </h2>
        <p className="text-gray-400 max-w-lg md:max-w-xl mx-auto text-base md:text-lg">
          Hear firsthand how our solutions have boosted online success for users
          like you.
        </p>
      </div>

      <div
        ref={cardsContainerRef}
        className="relative w-full max-w-lg md:max-w-2xl lg:max-w-4xl px-4 md:px-8"
        style={{ height: "300px", perspective: "1000px" }}
      >
        <div className="h-full relative" style={{ transformStyle: "preserve-3d" }}>
          {testimonials.map((testimonial, index) => {
            let cardPosition;
            let zIndex;

            if (index === activeIndex) {
              cardPosition = "active";
              zIndex = 30;
            } else if (index === prevIndex) {
              cardPosition = "prev";
              zIndex = 20;
            } else {
              cardPosition = "next";
              zIndex = 10;
            }

            return (
              <div
                key={testimonial.id}
                className="testimonial-card absolute top-0 left-0 right-0 mx-auto w-full transition-all duration-700 ease-in-out"
                style={{
                  transform:
                    cardPosition === "active"
                      ? "translateY(0) scale(1)"
                      : cardPosition === "prev"
                      ? "translateY(20px) scale(0.95)"
                      : "translateY(-100%) scale(0.95)",
                  opacity: cardPosition === "next" ? 0 : 1,
                  zIndex: zIndex,
                }}
              >
                <div
                  className="flex flex-col md:flex-row items-center md:items-start p-5 md:p-6 rounded-xl"
                  style={{
                    border: "2px solid rgba(255, 255, 255, 0.3)",
                    background: "rgba(20, 20, 20, 1)",
                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
                  }}
                >
                  <div className="w-20 h-20 md:w-24 md:h-24 mx-auto md:mx-0 mb-3 md:mb-0 md:mr-5 flex-shrink-0 overflow-hidden rounded-lg">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>

                  <div className="testimonial-content flex-1 text-center md:text-left">
                    <blockquote className="text-white text-sm md:text-base mb-2 md:mb-3 leading-relaxed font-light">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="flex flex-col items-center md:items-start">
                      <p className="text-white font-semibold text-sm">
                        {testimonial.name}
                      </p>
                      <p className="text-gray-400 text-xs">
                        {testimonial.position}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Ambassador;