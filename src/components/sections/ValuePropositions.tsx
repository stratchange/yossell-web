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
    { src: "/assets/PIC5-portrait.png", alt: "Commerce Features" },
    { src: "/assets/PIC6-portrait.png", alt: "User Profile" },
    { src: "/assets/PIC7-portrait.png", alt: "Chat & Community" },
    { src: "/assets/PIC8-portrait.png", alt: "Search & Discovery" },
    { src: "/assets/PIC2-portrait.png", alt: "Product Listings" },
    { src: "/assets/PIC3-portrait.png", alt: "Shopping Experience" }
  ];

  const stats = [
    { number: "10K+", label: "Utilisateurs actifs", color: "text-brand-green" },
    { number: "50K+", label: "Produits vendus", color: "text-brand-green" },
    { number: "4.9★", label: "Note moyenne", color: "text-brand-green" },
    { number: "99%", label: "Satisfaction client", color: "text-brand-green" }
  ];

  return (
    <section ref={sectionRef} id="avantages" className="relative py-20 bg-gradient-to-br from-brand-light-gray to-white overflow-hidden">
      
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
          
          {/* Carte 1 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Transactions Sécurisées</h3>
            <p className="text-gray-600">
              Système de paiement intégré avec protection totale contre les fraudes et garantie de remboursement.
            </p>
          </div>

          {/* Carte 2 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">IA Personnalisée</h3>
            <p className="text-gray-600">
              Algorithme intelligent qui apprend vos préférences pour vous proposer les meilleures offres.
            </p>
          </div>

          {/* Carte 3 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group">
            <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Communauté Active</h3>
            <p className="text-gray-600">
              Échangez avec une communauté passionnée, partagez vos découvertes et trouvez l&apos;inspiration.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ValuePropositions;
