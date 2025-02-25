import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AnimatedSignup = () => {
  const formRef = useRef(null);
  const titleRef = useRef(null);
  const inputRefs = useRef([]);
  const buttonRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    gsap.set(
      [formRef.current, titleRef.current, ...inputRefs.current, buttonRef.current, textRef.current],
      { opacity: 0, scale: 0.8, y: 50 }
    );

    const tl = gsap.timeline({
      defaults: { ease: "power3.out" },
      scrollTrigger: {
        trigger: formRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    tl.to(formRef.current, { opacity: 1, scale: 1.1, y: 0, duration: 0.8, ease: "back.out(1.7)" })
      .to(formRef.current, { scale: 1, duration: 0.3 })
      .to(titleRef.current, { opacity: 1, y: 0, duration: 0.6 }, "-=0.5")
      .to(inputRefs.current, { opacity: 1, y: 0, duration: 0.6, stagger: 0.2 }, "-=0.4")
      .to(buttonRef.current, { opacity: 1, y: 0, duration: 0.6 }, "-=0.4")
      .to(textRef.current, { opacity: 1, y: 0, duration: 0.6 }, "-=0.4");

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-[#0D0D0D] px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(255, 87, 34, 0.25) 0%, rgba(20, 20, 20, 0.3) 25%, rgba(0, 0, 0, 0.95) 50%)",
        }}
      />

      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px]"
        style={{
          background:
            "radial-gradient(circle at center, rgba(255, 87, 34, 0.12) 0%, transparent 80%)",
          filter: "blur(50px)",
        }}
      />

      <div
        ref={formRef}
        className="relative w-full max-w-3xl p-6 sm:p-10 mx-4 sm:mx-8 md:mx-auto rounded-xl border border-gray-800/50 shadow-2xl"
        style={{
          background:
            "linear-gradient(180deg, rgba(30, 30, 30, 0.5) 0%, rgba(10, 10, 10, 0.5) 100%)",
          backdropFilter: "blur(12px)",
        }}
      >
        <h2
          ref={titleRef}
          className="text-2xl sm:text-4xl md:text-5xl font-bold text-center text-white mb-6 sm:mb-10"
        >
          Ready to take your brand global? Let&apos;s make it happen
        </h2>

        <div className="flex flex-col gap-4">
          <input
            ref={(el) => (inputRefs.current[0] = el)}
            type="text"
            placeholder="Company Name"
            className="w-full px-5 py-3 text-lg bg-black/40 border border-gray-800/50 rounded-md text-white focus:outline-none focus:border-gray-600 transition-colors"
          />

          <input
            ref={(el) => (inputRefs.current[1] = el)}
            type="text"
            placeholder="Person Name"
            className="w-full px-5 py-3 text-lg bg-black/40 border border-gray-800/50 rounded-md text-white focus:outline-none focus:border-gray-600 transition-colors"
          />

          <input
            ref={(el) => (inputRefs.current[2] = el)}
            type="text"
            placeholder="Contact Number"
            className="w-full px-5 py-3 text-lg bg-black/40 border border-gray-800/50 rounded-md text-white focus:outline-none focus:border-gray-600 transition-colors"
          />

          <input
            ref={(el) => (inputRefs.current[3] = el)}
            type="email"
            placeholder="Your Email"
            className="w-full px-5 py-3 text-lg bg-black/40 border border-gray-800/50 rounded-md text-white focus:outline-none focus:border-gray-600 transition-colors"
          />

          <input
            ref={(el) => (inputRefs.current[4] = el)}
            type="text"
            placeholder="Last Quarter Revenue ($)"
            className="w-full px-5 py-3 text-lg bg-black/40 border border-gray-800/50 rounded-md text-white focus:outline-none focus:border-gray-600 transition-colors"
          />

          <input
            ref={(el) => (inputRefs.current[5] = el)}
            type="text"
            placeholder="Last Quarter Profit ($)"
            className="w-full px-5 py-3 text-lg bg-black/40 border border-gray-800/50 rounded-md text-white focus:outline-none focus:border-gray-600 transition-colors"
          />

          <textarea
            ref={(el) => (inputRefs.current[6] = el)}
            placeholder="Your Message"
            rows="4"
            className="w-full px-5 py-3 text-lg bg-black/40 border border-gray-800/50 rounded-md text-white focus:outline-none focus:border-gray-600 transition-colors"
          />

          <button
            ref={buttonRef}
            className="w-full px-6 py-3 text-lg bg-white text-black rounded-md hover:bg-gray-200 transition-all duration-300"
          >
            Join Waitlist
          </button>
        </div>

        <p
          ref={textRef}
          className="mt-4 sm:mt-6 text-sm sm:text-lg text-center text-gray-400"
        >
          No credit card required • 7-days free trial
        </p>
      </div>
    </div>
  );
};

export default AnimatedSignup;
