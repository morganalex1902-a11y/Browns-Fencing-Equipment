import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import logo from "@/assets/logo.png";

export const PageLoader = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(logoRef.current, {
      scale: 1.2,
      opacity: 1,
      duration: 0.8,
      ease: "power2.out",
    })
    .to(logoRef.current, {
      scale: 0.8,
      opacity: 0,
      duration: 0.5,
      ease: "power2.in",
      delay: 0.2
    })
    .to(containerRef.current, {
      opacity: 0,
      duration: 0.5,
      ease: "power2.inOut",
      onComplete: () => {
        if (containerRef.current) {
          containerRef.current.style.display = "none";
        }
      }
    });

  }, { scope: containerRef });

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-[100] bg-primary flex items-center justify-center"
    >
      <div className="relative w-32 h-32 md:w-48 md:h-48 flex items-center justify-center">
        <div className="absolute inset-0 bg-white/10 rounded-full blur-xl animate-pulse" />
        <img 
          ref={logoRef}
          src={logo} 
          alt="Loading..." 
          className="w-full h-full object-contain opacity-0 transform scale-50 relative z-10"
        />
      </div>
    </div>
  );
};
