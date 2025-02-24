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
      immediateRender: false 
    });
  
    timeline.from(".testimonials-subtitle", {
      y: 30,
      opacity: 0,
      stagger: 0.2,
      immediateRender: false
    }, "-=0.8");
  
    testimonialRefs.current.forEach((testimonial, index) => {
      timeline.from(testimonial, {
        opacity: 0,
        duration: 0.8,
        immediateRender: false
      }, "-=0.4");
  
      timeline.from(testimonial.querySelector('.testimonial-image'), {
        x: -50,
        opacity: 0,
        duration: 0.8,
        immediateRender: false
      }, "-=0.6");
  
      timeline.from(testimonial.querySelector('.testimonial-content'), {
        x: 50,
        opacity: 0,
        duration: 0.8,
        immediateRender: false
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
      quote: "The analytics tools helped us increase conversion rates by 45% within two months",
      name: "Marcus Chen",
      position: "E-Commerce Manager @ Velotech"
    },
    
  ];

  return (
    <section 
      ref={sectionRef} 
      className="min-h-screen py-20 flex flex-col items-center relative overflow-hidden"
      style={{ background: "black" }}
    >
      
      <div className="absolute inset-0 z-0 hidden md:block">
        <div className="w-full h-full grid grid-cols-3 grid-rows-3">
          <div className="col-span-3 border-b border-gray-800/50"></div>
          <div className="col-span-3 border-b border-gray-800/50"></div>
          <div className="col-span-3 border-b border-gray-800/50"></div>
          <div className="row-span-3 border-r border-gray-800/50"></div>
          <div className="row-span-3 border-r border-gray-800/50"></div>
        </div>
      </div>
      
     
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-64 opacity-20 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(255,100,0,0.8) 0%, rgba(255,100,0,0) 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="z-10 relative text-center mb-16">
        <h2 className="testimonials-title text-4xl md:text-5xl text-white font-normal mb-6">
          Our Brand Ambassadors
        </h2>
        <div className="testimonials-subtitle text-gray-400 max-w-xl mx-auto text-base md:text-lg px-4">
          Hear firsthand how our solutions have boosted online success for users like you.
        </div>
      </div>

   
      <div className="grid grid-cols-1 gap-16 w-full max-w-6xl px-4">
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            ref={el => testimonialRefs.current[index] = el}
            className={`flex flex-col md:flex-row md:items-center ${
              index % 2 === 0 
                ? "md:mr-auto md:ml-12 lg:ml-24" 
                : "md:ml-auto md:mr-12 lg:mr-24 md:flex-row-reverse"
            }`}
          >
          
            <div className={`w-32 h-32 md:w-40 md:h-40 mx-auto md:mx-0 mb-6 md:mb-0 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-full h-full rounded-lg object-cover testimonial-image shadow-lg shadow-orange-900/20"
              />
            </div>

            <div className="testimonial-content bg-gray-900/80 backdrop-blur-sm p-8 rounded-xl shadow-xl max-w-lg border border-gray-800/50 transform transition-all hover:scale-105 duration-300">
              <blockquote className="text-white text-lg md:text-xl mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex flex-col items-start">
                <p className="text-white font-semibold text-base md:text-lg">{testimonial.name}</p>
                <p className="text-gray-400 text-sm md:text-base">{testimonial.position}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Ambassador;