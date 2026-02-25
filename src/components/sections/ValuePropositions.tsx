"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const ValuePropositions: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const phoneGridRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set([titleRef.current, phoneGridRef.current, statsRef.current], {
        opacity: 0,
        y: 50
      });

      // Title animation
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 80%",
        onEnter: () => {
          gsap.to(titleRef.current, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out"
          });
        }
      });

      // Phone grid animation
      ScrollTrigger.create({
        trigger: phoneGridRef.current,
        start: "top 80%",
        onEnter: () => {
          gsap.to(phoneGridRef.current, {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power3.out",
            delay: 0.3
          });

          // Individual phone animations
          const phones = phoneGridRef.current?.querySelectorAll('.phone-item');
          if (phones) {
            gsap.fromTo(phones, 
              { scale: 0.8, opacity: 0, rotation: -5 },
              { 
                scale: 1, 
                opacity: 1, 
                rotation: 0,
                duration: 0.8,
                ease: "back.out(1.7)",
                stagger: 0.1,
                delay: 0.5
              }
            );
          }
        }
      });

      // Stats animation
      ScrollTrigger.create({
        trigger: statsRef.current,
        start: "top 80%",
        onEnter: () => {
          gsap.to(statsRef.current, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            delay: 0.6
          });
        }
      });

      // Continuous floating animations for phones
      const phones = phoneGridRef.current?.querySelectorAll('.phone-item');
      if (phones) {
        phones.forEach((phone, index) => {
          gsap.to(phone, {
            y: -10 - (index % 3) * 5,
            rotation: (index % 2 === 0 ? 1 : -1) * 2,
            duration: 3 + index * 0.5,
            ease: "power1.inOut",
            yoyo: true,
            repeat: -1,
            delay: index * 0.3
          });
        });
      }

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const phoneImages = [
    { src: "/assets/detcom-portrait.png", alt: "Commerce Features" },
    { src: "/assets/profil-portrait.png", alt: "User Profile" },
    { src: "/assets/serv-portrait.png", alt: "Chat & Community" },
    { src: "/assets/mode-portrait.png", alt: "Search & Discovery" },
    { src: "/assets/mescomm-portrait.png", alt: "Product Listings" },
    { src: "/assets/immo-portrait.png", alt: "Shopping Experience" }
  ];

  const stats = [
    { number: "10K+", label: "Utilisateurs actifs", color: "text-brand-green" },
    { number: "50K+", label: "Produits vendus", color: "text-brand-green" },
    { number: "4.9★", label: "Note moyenne", color: "text-brand-green" },
    { number: "99%", label: "Satisfaction client", color: "text-brand-green" }
  ];

  return (
    <section ref={sectionRef} id="avantages" className="relative py-20 bg-gradient-to-br from-brand-light-gray to-white overflow-hidden scroll-mt-24">
      
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 bg-brand-light-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-brand-green/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-brand-medium-gold/10 rounded-full blur-2xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        
        {/* Title Section */}
        <div className="text-center mb-16">
          <h2 ref={titleRef} className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            L&apos;expérience <span className="text-brand-green">complète</span> 
            <br />du e-commerce mobile
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            De la recherche à l&apos;achat, en passant par la vente et les échanges communautaires, 
            YosSell transforme chaque interaction en une expérience fluide et sécurisée.
          </p>
        </div>

        {/* Phone Grid */}
        <div ref={phoneGridRef} className="mb-20">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 justify-items-center">
            {phoneImages.map((phone, index) => (
              <div key={index} className="phone-item relative group">
                <div className="relative">
                  <Image
                    src={phone.src}
                    alt={phone.alt}
                    width={180}
                    height={360}
                    className="drop-shadow-lg group-hover:drop-shadow-2xl transition-all duration-300"
                    sizes="(max-width: 768px) 45vw, (max-width: 1024px) 30vw, 180px"
                    loading="lazy"
                    unoptimized
                    onError={(e) => {
                      console.error(`Erreur de chargement de l'image: ${phone.src}`, e);
                    }}
                  />
                  
                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-b from-brand-green/0 via-brand-green/5 to-brand-light-gold/10 rounded-[1.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Floating Elements */}
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-brand-light-gold/70 rounded-full animate-ping opacity-0 group-hover:opacity-100" />
                  <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-brand-green/70 rounded-full animate-pulse opacity-0 group-hover:opacity-100" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div ref={statsRef} className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className={`text-3xl lg:text-4xl font-bold ${stat.color} mb-2 group-hover:scale-110 transition-transform duration-300`}>
                  {stat.number}
                </div>
                <div className="text-gray-600 text-sm lg:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Value Propositions Grid */}
        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Carte 1 — Éclair */}
          <div className="bg-white rounded-2xl p-8 shadow-lg text-center flex flex-col items-center
                          transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-2xl group">
            <div className="w-16 h-16 bg-gradient-to-br from-brand-green to-emerald-600 rounded-2xl flex items-center justify-center mb-6
                            group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Publication Gratuite & Illimitée</h3>
            <p className="text-gray-600 leading-relaxed">
              Vendez et louez tout ce que vous voulez sans frais cachés. Prenez une photo, ajoutez une description et votre annonce est en ligne en moins de 30 secondes.
            </p>
          </div>

          {/* Carte 2 — Loupe */}
          <div className="bg-white rounded-2xl p-8 shadow-lg text-center flex flex-col items-center
                          transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-2xl group">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6
                            group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Trouvez, Cliquez, Profitez</h3>
            <p className="text-gray-600 leading-relaxed">
              Ne perdez plus de temps. Grâce à notre moteur de recherche intelligent et nos filtres précis, dénichez la perle rare près de chez vous en un instant.
            </p>
          </div>

          {/* Carte 3 — Boutique / Fusée */}
          <div className="bg-white rounded-2xl p-8 shadow-lg text-center flex flex-col items-center
                          transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-2xl group">
            <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-fuchsia-600 rounded-2xl flex items-center justify-center mb-6
                            group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Créez Votre Empire</h3>
            <p className="text-gray-600 leading-relaxed">
              Transformez votre passion en revenus. Ouvrez votre boutique personnalisée gratuitement et connectez-vous directement avec une communauté d&apos;acheteurs actifs.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ValuePropositions;
