"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
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

    let ctx: gsap.Context | null = null;

    const timer = setTimeout(() => {
      if (!heroRef.current) return;

      ctx = gsap.context(() => {
        const textEls = [titleRef.current, subtitleRef.current, buttonsRef.current].filter(Boolean);
        const phoneEls = [phoneCenterRef.current, phoneLeftRef.current, phoneRightRef.current].filter(Boolean);

        if (textEls.length === 0 && phoneEls.length === 0) return;

        gsap.set(textEls, { opacity: 0, y: 50 });
        gsap.set(phoneEls, { opacity: 0, scale: 0.8, y: 100 });

        if (backgroundRef.current) {
          gsap.fromTo(backgroundRef.current,
            { scale: 1.1, opacity: 0 },
            { scale: 1, opacity: 1, duration: 2, ease: "power2.out" }
          );
        }

        if (titleRef.current) {
          gsap.to(titleRef.current, { opacity: 1, y: 0, duration: 1.2, ease: "power3.out", delay: 0.3 });
        }
        if (subtitleRef.current) {
          gsap.to(subtitleRef.current, { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.6 });
        }
        if (buttonsRef.current) {
          gsap.to(buttonsRef.current, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", delay: 0.9 });
        }

        if (phoneEls.length > 0) {
          gsap.to(phoneEls, { opacity: 1, scale: 1, y: 0, duration: 1.2, ease: "back.out(1.7)", delay: 1.2, stagger: 0.2 });
        }

        if (phoneCenterRef.current) {
          gsap.to(phoneCenterRef.current, { y: -20, rotation: 2, duration: 3, ease: "power1.inOut", yoyo: true, repeat: -1 });
        }
        if (phoneLeftRef.current) {
          gsap.to(phoneLeftRef.current, { y: -15, rotation: -1, duration: 2.5, ease: "power1.inOut", yoyo: true, repeat: -1, delay: 0.5 });
        }
        if (phoneRightRef.current) {
          gsap.to(phoneRightRef.current, { y: -25, rotation: 1, duration: 3.5, ease: "power1.inOut", yoyo: true, repeat: -1, delay: 1 });
        }

        ScrollTrigger.create({
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
          onUpdate: (self) => {
            const targets = [phoneLeftRef.current, phoneRightRef.current, phoneCenterRef.current].filter(Boolean);
            if (targets.length === 0) return;
            gsap.to(targets, { y: self.progress * 100, duration: 0.3, overwrite: "auto" });
          }
        });
      }, heroRef);
    }, 500);

    return () => {
      clearTimeout(timer);
      ctx?.revert();
    };
  }, []);

  return (
    <section ref={heroRef} id="accueil" className="relative min-h-screen bg-hero-gradient overflow-hidden">
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
                L&apos;univers du <strong>e-commerce dans votre poche</strong>.
                <span className="block text-brand-green font-medium mt-2">
                  Votre réseau, <strong>votre marché</strong>, en un seul endroit.
                </span>
              </p>

              <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="https://mkp.yossell.com/post-home" target="_blank" rel="noopener noreferrer" title="Accéder à la marketplace web de YosSell" className="group bg-brand-green text-white px-8 py-4 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300 hover:shadow-xl transform hover:scale-105 flex items-center justify-center space-x-2">
                  <span>Découvrir notre plateforme</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
                <Link href="/#telecharger" className="bg-white text-brand-green border-2 border-brand-green px-8 py-4 rounded-full font-semibold hover:bg-brand-green hover:text-white transition-all duration-300 hover:shadow-xl transform hover:scale-105 text-center">
                  Télécharger l&apos;app
                </Link>
              </div>

              {/* Stats */}
              <dl className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
                <div className="text-center lg:text-left">
                  <dd className="text-2xl md:text-3xl font-bold text-brand-green">10K+</dd>
                  <dt className="text-sm text-gray-600">Utilisateurs actifs</dt>
                </div>
                <div className="text-center lg:text-left">
                  <dd className="text-2xl md:text-3xl font-bold text-brand-green">50K+</dd>
                  <dt className="text-sm text-gray-600">Produits vendus</dt>
                </div>
                <div className="text-center lg:text-left">
                  <dd className="text-2xl md:text-3xl font-bold text-brand-green">4.9★</dd>
                  <dt className="text-sm text-gray-600">Note moyenne</dt>
                </div>
              </dl>
            </div>

            {/* Right Side - Phone Mockups */}
            <div className="relative h-[600px] lg:h-[900px] lg:-mt-20">
              
              {/* Center Phone - Main */}
              <div 
                ref={phoneCenterRef}
                className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30"
              >
                <div className="relative">
                  <Image
                    src="/assets/web-portrait.png"
                    alt="Plateforme e-commerce YosSell - Interface de vente et achat en Tunisie"
                    width={600}
                    height={550}
                    className="drop-shadow-lg w-[600px] md:w-[700px] h-auto"
                    style={{ filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))' }}
                    priority
                  />
                  {/* Screen Content Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-brand-green/5 via-brand-green/3 to-brand-light-gold/2 opacity-30 rounded-[2.5rem] m-2" />
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
                    alt="Application YosSell - fonctionnalités de recherche intelligente"
                    width={220}
                    height={440}
                    className="drop-shadow-xl opacity-90"
                    loading="lazy"
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
                    src="/assets/acceuil_left.png"
                    alt="Interface de paiement sécurisé sur l&#39;application YosSell"
                    width={220}
                    height={440}
                    className="drop-shadow-xl opacity-90"
                    loading="lazy"
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
