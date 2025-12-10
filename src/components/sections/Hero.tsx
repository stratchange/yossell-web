"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const phoneLeftRef = useRef<HTMLDivElement>(null);
  const phoneRightRef = useRef<HTMLDivElement>(null);
  const phoneCenterRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Délai pour améliorer les performances au chargement
    const timer = setTimeout(() => {
      const ctx = gsap.context(() => {
      // Set initial states
      gsap.set([titleRef.current, subtitleRef.current, buttonsRef.current], {
        opacity: 0,
        y: 50
      });

      gsap.set([phoneLeftRef.current, phoneRightRef.current, phoneCenterRef.current], {
        opacity: 0,
        scale: 0.8,
        y: 100
      });

      // Background animation
      gsap.fromTo(backgroundRef.current, 
        { scale: 1.1, opacity: 0 },
        { scale: 1, opacity: 1, duration: 2, ease: "power2.out" }
      );

      // Staggered text animations
      gsap.to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.3
      });

      gsap.to(subtitleRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.6
      });

      gsap.to(buttonsRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.9
      });

      // Phone animations with stagger
      gsap.to([phoneCenterRef.current, phoneLeftRef.current, phoneRightRef.current], {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1.2,
        ease: "back.out(1.7)",
        delay: 1.2,
        stagger: 0.2
      });

      // Continuous floating animations
      gsap.to(phoneCenterRef.current, {
        y: -20,
        rotation: 2,
        duration: 3,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1
      });

      gsap.to(phoneLeftRef.current, {
        y: -15,
        rotation: -1,
        duration: 2.5,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
        delay: 0.5
      });

      gsap.to(phoneRightRef.current, {
        y: -25,
        rotation: 1,
        duration: 3.5,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
        delay: 1
      });

      // Scroll-triggered parallax
      ScrollTrigger.create({
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          gsap.to([phoneLeftRef.current, phoneRightRef.current, phoneCenterRef.current], {
            y: progress * 100,
            duration: 0.3,
            overwrite: "auto"
          });
        }
      });

    }, heroRef);

    return () => {
      ctx.revert();
      clearTimeout(timer);
    };
    }, 500); // Délai de 500ms pour améliorer les performances

    return () => clearTimeout(timer);
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen bg-hero-gradient overflow-hidden">
      {/* Animated Background */}
      <div ref={backgroundRef} className="absolute inset-0 bg-hero-gradient opacity-90" />
      
      {/* Floating Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-brand-light-gold/20 rounded-full blur-xl animate-float" />
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-brand-green/10 rounded-full blur-2xl animate-pulse" />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-brand-medium-gold/15 rounded-full blur-lg animate-float" />
        <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-brand-cream/20 rounded-full blur-2xl animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="min-h-screen flex items-center">
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
            
            {/* Left Side - Text Content */}
            <div className="text-center lg:text-left space-y-8">
              <h1 
                ref={titleRef}
                className="hero-title text-5xl md:text-7xl lg:text-8xl font-bold leading-tight"
              >
                <span className="block text-gray-900">YosSell</span>
                <span className="block text-brand-green text-4xl md:text-5xl lg:text-6xl font-medium mt-2">
                  Révolutionnez
                </span>
                <span className="block text-gray-700 text-3xl md:text-4xl lg:text-5xl font-medium">
                  votre commerce
                </span>
              </h1>

              <p 
                ref={subtitleRef}
                className="text-xl md:text-2xl text-gray-600 max-w-2xl leading-relaxed"
              >
                L&apos;univers du e-commerce dans votre poche. 
                <span className="block text-brand-green font-medium mt-2">
                  Fini les arnaques, les pertes de temps et la solitude.
                </span>
              </p>

              <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="group bg-brand-green text-white px-8 py-4 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300 hover:shadow-xl transform hover:scale-105 flex items-center justify-center space-x-2">
                  <span>Télécharger l&apos;app</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
                <button className="bg-white text-brand-green border-2 border-brand-green px-8 py-4 rounded-full font-semibold hover:bg-brand-green hover:text-white transition-all duration-300 hover:shadow-xl transform hover:scale-105">
                  Découvrir les fonctionnalités
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
                <div className="text-center lg:text-left">
                  <div className="text-2xl md:text-3xl font-bold text-brand-green">10K+</div>
                  <div className="text-sm text-gray-600">Utilisateurs actifs</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-2xl md:text-3xl font-bold text-brand-green">50K+</div>
                  <div className="text-sm text-gray-600">Produits vendus</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-2xl md:text-3xl font-bold text-brand-green">4.9★</div>
                  <div className="text-sm text-gray-600">Note moyenne</div>
                </div>
              </div>
            </div>

            {/* Right Side - Phone Mockups */}
            <div className="relative h-[600px] lg:h-[700px]">
              
              {/* Center Phone - Main */}
              <div 
                ref={phoneCenterRef}
                className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30"
              >
                <div className="relative">
                  <Image
                    src="/assets/empty_apple_iphone15_mockup_for_loading_page.png"
                    alt="YosSell App Main Screen"
                    width={280}
                    height={560}
                    className="drop-shadow-2xl"
                    priority
                  />
                  {/* Screen Content Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-brand-green to-brand-light-gold opacity-20 rounded-[2.5rem] m-2" />
                </div>
              </div>

              {/* Left Phone */}
              <div 
                ref={phoneLeftRef}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-20"
              >
                <div className="relative">
                  <Image
                    src="/assets/loadingpagephone-left.png"
                    alt="YosSell App Features"
                    width={220}
                    height={440}
                    className="drop-shadow-xl opacity-90"
                  />
                </div>
              </div>

              {/* Right Phone */}
              <div 
                ref={phoneRightRef}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-20"
              >
                <div className="relative">
                  <Image
                    src="/assets/PIC2-left.png"
                    alt="YosSell App Commerce"
                    width={220}
                    height={440}
                    className="drop-shadow-xl opacity-90"
                  />
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-10 left-10 w-20 h-20 bg-brand-light-gold/30 rounded-full blur-lg animate-pulse" />
              <div className="absolute bottom-10 right-10 w-16 h-16 bg-brand-green/30 rounded-full blur-lg animate-pulse delay-1000" />
              <div className="absolute top-1/2 left-0 w-12 h-12 bg-brand-medium-gold/40 rounded-full blur-lg animate-bounce" />
              
              {/* Glow Effects */}
              <div className="absolute inset-0 bg-gradient-radial from-brand-green/5 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-brand-green rounded-full flex justify-center">
          <div className="w-1 h-3 bg-brand-green rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
