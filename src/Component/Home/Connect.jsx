import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const AnimatedSignup = () => {
  const formRef = useRef(null);
  const titleRef = useRef(null);
  const inputRef = useRef(null);
  const buttonRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    gsap.set([titleRef.current, inputRef.current, buttonRef.current, textRef.current], {
      opacity: 0,
      y: 20
    });

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.to(titleRef.current, { opacity: 1, y: 0, duration: 0.8 })
      .to(inputRef.current, { opacity: 1, y: 0, duration: 0.6 }, "-=0.4")
      .to(buttonRef.current, { opacity: 1, y: 0, duration: 0.6 }, "-=0.4")
      .to(textRef.current, { opacity: 1, y: 0, duration: 0.6 }, "-=0.4");
  }, []);

  return (
    <div className="relative flex items-center justify-center min-h-[80vh] bg-[#0D0D0D] overflow-hidden">

      {/* Dark radial gradient background */}
      <div className="absolute inset-0" style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(255, 87, 34, 0.25) 0%, rgba(20, 20, 20, 0.3) 25%, rgba(0, 0, 0, 0.95) 50%)'
        }}
      />

      {/* Subtle orange glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px]" style={{
          background: 'radial-gradient(circle at center, rgba(255, 87, 34, 0.12) 0%, transparent 80%)',
          filter: 'blur(50px)'
        }}
      />

      {/* Content */}
      <div ref={formRef} className="relative w-full max-w-3xl p-12 mx-6 rounded-xl border border-gray-800/50"
  style={{
    background: 'linear-gradient(180deg, rgba(30, 30, 30, 0.5) 0%, rgba(10, 10, 10, 0.5) 100%)',
    backdropFilter: 'blur(12px)'
  }}
>

        <h2 ref={titleRef} className="text-5xl font-bold text-center text-white mb-10">
          Ready to take your brand global? Let's make it happen
        </h2>
        
        <div className="flex gap-4">
          <input ref={inputRef} type="email" placeholder="Your email" className="flex-1 px-5 py-3 text-lg bg-black/40 border border-gray-800/50 rounded-md text-white focus:outline-none focus:border-gray-600 transition-colors" />
          <button ref={buttonRef} className="px-8 py-3 text-lg bg-white text-black rounded-md hover:bg-gray-200 transition-colors">
            Join waitlist
          </button>
        </div>
        
        <p ref={textRef} className="mt-6 text-lg text-center text-gray-400">
          No credit card required • 7-days free trial
        </p>
      </div>
    </div>
  );
};

export default AnimatedSignup;