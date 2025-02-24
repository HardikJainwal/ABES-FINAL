import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import abs from '../../assets/BG/abs.png';

const Ambassador = () => {
  const sectionRef = useRef(null);
  const testimonialRefs = useRef([]);

  useEffect(() => {
    const timeline = gsap.timeline({
      defaults: { duration: 1.2, ease: "power3.out" }
    });

    timeline.from(".testimonials-title", {
      y: 50,
      opacity: 0,
      rotateX: -45,
    });

    timeline.from(".testimonials-subtitle", {
      y: 30,
      opacity: 0,
      stagger: 0.2
    }, "-=0.8");

    testimonialRefs.current.forEach((testimonial, index) => {
      timeline.from(testimonial, {
        opacity: 0,
        duration: 0.8
      }, "-=0.4");

      timeline.from(testimonial.querySelector('.testimonial-image'), {
        x: -50,
        opacity: 0,
        duration: 0.8
      }, "-=0.6");

      timeline.from(testimonial.querySelector('.testimonial-content'), {
        x: 50,
        opacity: 0,
        duration: 0.8
      }, "-=0.8");
    });
  }, []);

  const testimonials = [
    {
      id: 1,
      image: abs,
      quote: "This product has completely transformed how I manage my projects and deadlines",
      name: "Talia Taylor",
      position: "Digital Marketing Director @ Quantum"
    },
    {
      id: 2,
      image: abs,
      quote: "This product has completely transformed how I manage my projects and deadlines",
      name: "Talia Taylor",
      position: "Digital Marketing Director @ Quantum"
    }
  ];

  return (
    <section ref={sectionRef} className="min-h-screen bg-black py-20 flex flex-col items-center">
      <h2 className="testimonials-title text-[40px] text-center text-white font-normal mb-4">
        Our Brand Ambassadors
      </h2>
      <div className="testimonials-subtitle text-center text-gray-400 mb-10">
        Hear firsthand how our solutions have boosted<br />
        online success for users like you.
      </div>

      <div className="flex flex-col space-y-10">
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            ref={el => testimonialRefs.current[index] = el}
            className="grid grid-cols-[auto_1fr] gap-6 items-center 
              bg-gradient-to-r from-[#1a1a1a] to-[#333] 
              p-6 rounded-xl border border-gray-700/60 
              shadow-lg max-w-3xl"
          >
            {/* Image with Rounded Corners */}
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-[217px] h-[217px] rounded-xl object-cover testimonial-image"
            />

            {/* Text Content */}
            <div className="testimonial-content">
              <blockquote className="text-white text-lg mb-2">
                "{testimonial.quote}"
              </blockquote>
              <p className="text-white font-medium">{testimonial.name}</p>
              <p className="text-gray-400 text-sm">{testimonial.position}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Ambassador;
