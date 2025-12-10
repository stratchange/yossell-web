"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  mockupImage: string;
  isReversed?: boolean;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  icon, 
  title, 
  description, 
  color, 
  mockupImage, 
  isReversed = false 
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set([imageRef.current, contentRef.current], {
        opacity: 0,
        y: 50
      });

      // Scroll trigger animation
      ScrollTrigger.create({
        trigger: cardRef.current,
        start: "top 80%",
        end: "bottom 20%",
        onEnter: () => {
          gsap.to([contentRef.current, imageRef.current], {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            stagger: isReversed ? -0.2 : 0.2
          });
        }
      });

      // Hover animations
      const tl = gsap.timeline({ paused: true });
      tl.to(imageRef.current, {
        scale: 1.05,
        rotation: isReversed ? -2 : 2,
        duration: 0.3,
        ease: "power2.out"
      });

      cardRef.current?.addEventListener("mouseenter", () => tl.play());
      cardRef.current?.addEventListener("mouseleave", () => tl.reverse());

    }, cardRef);

    return () => ctx.revert();
  }, [isReversed]);

  return (
    <div 
      ref={cardRef}
      className={`grid lg:grid-cols-2 gap-12 items-center py-20 ${isReversed ? 'lg:grid-flow-col-dense' : ''}`}
    >
      {/* Content */}
      <div ref={contentRef} className={`space-y-6 ${isReversed ? 'lg:col-start-2' : ''}`}>
        <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${color} rounded-xl shadow-lg`}>
          <div className="text-white text-2xl">
            {icon}
          </div>
        </div>
        
        <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">
          {title}
        </h3>
        
        <p className="text-lg text-gray-600 leading-relaxed">
          {description}
        </p>
        
        <button className="bg-brand-green text-white px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300 hover:shadow-lg transform hover:scale-105">
          En savoir plus
        </button>
      </div>

      {/* Mockup Image */}
      <div ref={imageRef} className={`relative ${isReversed ? 'lg:col-start-1' : ''}`}>
        <div className="relative mx-auto max-w-xs">
          <Image
            src={mockupImage}
            alt={title}
            width={300}
            height={600}
            className="drop-shadow-2xl"
          />
          
          {/* Glow Effect */}
          <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-10 rounded-[2.5rem] blur-xl scale-110`} />
          
          {/* Floating Elements */}
          <div className="absolute -top-4 -right-4 w-8 h-8 bg-brand-light-gold/60 rounded-full animate-bounce" />
          <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-brand-green/60 rounded-full animate-pulse" />
        </div>
      </div>
    </div>
  );
};

const Features: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      gsap.set([titleRef.current, subtitleRef.current], {
        opacity: 0,
        y: 30
      });

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 90%",
        onEnter: () => {
          gsap.to([titleRef.current, subtitleRef.current], {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.2
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const features = [
    {
      icon: (
        <svg fill="currentColor" viewBox="0 0 20 20" className="w-8 h-8">
          <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      ),
      title: "Fini les arnaques",
      description: "Profils vérifiés et système de paiement sécurisé. Achetez et vendez en toute confiance avec notre système de validation avancé et notre protection intégrée contre les fraudes.",
      color: "from-emerald-500 to-teal-600",
      mockupImage: "/assets/pic1-portrait.png"
    },
    {
      icon: (
        <svg fill="currentColor" viewBox="0 0 20 20" className="w-8 h-8">
          <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
        </svg>
      ),
      title: "Fini les pertes de temps",
      description: "Recherche intelligente par photo et reconnaissance vocale. Trouvez exactement ce que vous cherchez en quelques secondes grâce à notre IA avancée.",
      color: "from-blue-500 to-purple-600",
      mockupImage: "/assets/PIC3-portrait.png",
      isReversed: true
    },
    {
      icon: (
        <svg fill="currentColor" viewBox="0 0 20 20" className="w-8 h-8">
          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
        </svg>
      ),
      title: "Fini la solitude",
      description: "Rejoignez des communautés actives et passionnées. Partagez, échangez et découvrez avec des milliers d'utilisateurs qui partagent vos centres d'intérêt.",
      color: "from-pink-500 to-rose-600",
      mockupImage: "/assets/PIC4-portrait.png"
    }
  ];

  return (
    <section ref={sectionRef} id="fonctionnalites" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 ref={titleRef} className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Pourquoi choisir <span className="text-brand-green">YosSell</span> ?
          </h2>
          <p ref={subtitleRef} className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez les fonctionnalités qui font de YosSell la plateforme 
            de e-commerce mobile la plus innovante et sécurisée.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="space-y-32">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              color={feature.color}
              mockupImage={feature.mockupImage}
              isReversed={feature.isReversed}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20 py-16 bg-gradient-to-r from-brand-green/5 to-brand-light-gold/5 rounded-3xl">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Prêt à découvrir YosSell ?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Rejoignez des milliers d&apos;utilisateurs qui ont déjà adopté 
            la nouvelle façon de faire du commerce.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#telecharger"
              className="bg-brand-green text-white px-10 py-4 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300 hover:shadow-xl transform hover:scale-105 inline-flex items-center justify-center space-x-2"
            >
              <span>Télécharger maintenant</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </a>
            <a 
              href="#demo"
              className="bg-white text-brand-green border-2 border-brand-green px-10 py-4 rounded-full font-semibold hover:bg-brand-green hover:text-white transition-all duration-300 hover:shadow-xl transform hover:scale-105"
            >
              Voir la démo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
