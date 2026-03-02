"use client";

import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CategoriesPopulaires from "./CategoriesPopulaires";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
  color: string;
  mockupImage: string;
  mockupAlt: string;
  isReversed?: boolean;
  buttonLabel?: string;
  buttonAriaLabel?: string;
  popupText?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  color,
  mockupImage,
  mockupAlt,
  isReversed = false,
  buttonLabel = "En savoir plus",
  buttonAriaLabel,
  popupText
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [showPopup, setShowPopup] = useState(false);

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

        {popupText ? (
          <button
            onClick={() => setShowPopup(true)}
            aria-label={buttonAriaLabel}
            className="bg-brand-green text-white px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300 hover:shadow-lg transform hover:scale-105"
          >
            {buttonLabel}
          </button>
        ) : (
          <a
            href="https://mkp.yossell.com/post-home"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={buttonAriaLabel}
            className="inline-block bg-brand-green text-white px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300 hover:shadow-lg transform hover:scale-105"
          >
            {buttonLabel}
          </a>
        )}

        {/* Popup Modal */}
        {popupText && showPopup && typeof document !== "undefined" && createPortal(
          <div
            className="fixed inset-0 z-[9999] flex items-center justify-center"
            onClick={() => setShowPopup(false)}
          >
            <div
              className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 p-8 text-center animate-[popIn_0.25s_ease-out]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowPopup(false)}
                className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="w-14 h-14 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>

              <h4 className="text-xl font-bold text-gray-900 mb-2">Bientôt disponible</h4>
              <p className="text-gray-600 leading-relaxed">{popupText}</p>
            </div>
          </div>,
          document.body
        )}
      </div>

      {/* Mockup Image */}
      <div ref={imageRef} className={`relative ${isReversed ? 'lg:col-start-1' : ''}`}>
        <div className={`relative mx-auto ${
          mockupImage.includes('accc-portrait')
            ? 'max-w-xs'
            : mockupImage.includes('c-portrait')
            ? 'max-w-sm md:max-w-md'
            : 'max-w-xs'
        }`}>
          <Image
            src={mockupImage}
            alt={mockupAlt}
            width={mockupImage.includes('accc-portrait') ? 150 : mockupImage.includes('c-portrait') ? 200 : 100}
            height={mockupImage.includes('accc-portrait') ? 250 : mockupImage.includes('c-portrait') ? 300 : 200}
            className="drop-shadow-2xl w-full h-auto"
            sizes="(max-width: 768px) 80vw, (max-width: 1024px) 40vw, 400px"
            loading="lazy"
          />

          {/* Glow Effect */}
          <div className={`absolute inset-0 bg-gradient-to-br ${color} ${
            color.includes('pink') || color.includes('rose') ? 'opacity-5' : 'opacity-10'
          } rounded-[2.5rem] blur-xl scale-110`} />

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
  const subtitle2Ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      gsap.set([titleRef.current, subtitleRef.current, subtitle2Ref.current], {
        opacity: 0,
        y: 30
      });

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 90%",
        onEnter: () => {
          gsap.to([titleRef.current, subtitleRef.current, subtitle2Ref.current], {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.15
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const features: FeatureCardProps[] = [
    {
      icon: (
        <svg fill="currentColor" viewBox="0 0 20 20" className="w-8 h-8">
          <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      ),
      title: "Sécurité Totale & Transactions Garanties",
      description: <>Votre tranquillité d&apos;esprit, notre priorité. <strong>Système de paiement sécurisé</strong> avec &quot;escrow&quot;, profils vérifiés et <strong>protection anti-fraude</strong> intégrée pour des échanges en toute confiance.</>,
      color: "from-emerald-500 to-teal-600",
      mockupImage: "/assets/accc-portrait.png",
      mockupAlt: "Interface sécurisée YosSell avec protection contre la fraude",
      buttonAriaLabel: "En savoir plus sur la sécurité YosSell",
    },
    {
      icon: (
        <svg fill="currentColor" viewBox="0 0 20 20" className="w-8 h-8">
          <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
        </svg>
      ),
      title: "Recherche Puissante & Filtres Intelligents",
      description: <>Trouvez l&apos;essentiel en quelques clics. <strong>Filtres avancés</strong> et <strong>recommandations IA</strong> pour des résultats ultra-pertinents.</>,
      color: "from-blue-500 to-purple-600",
      mockupImage: "/assets/immo-left.png",
      mockupAlt: "Recherche intelligente YosSell par image et IA",
      isReversed: true,
      buttonLabel: "Bientôt",
      buttonAriaLabel: "Bientôt disponible - recherche par image et reconnaissance vocale",
      popupText: "Recherche par image et reconnaissance vocale.",
    },
    {
      icon: (
        <svg fill="currentColor" viewBox="0 0 20 20" className="w-8 h-8">
          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
        </svg>
      ),
      title: "Communauté Engagée & Réseau Social",
      description: <>Rejoignez des groupes passionnants, échangez des recommandations et créez des cercles de confiance. Transformez même votre <strong>réseau social</strong> en boutique en ligne.</>,
      color: "from-pink-500 to-rose-600",
      mockupImage: "/assets/commall-portrait.png",
      mockupAlt: "Communauté et réseau social YosSell - groupes et boutiques en ligne",
      buttonAriaLabel: "En savoir plus sur la communauté YosSell",
    },
  ];

  return (
    <section ref={sectionRef} id="fonctionnalites" className="bg-white py-20 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4">

        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 ref={titleRef} className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
            Pourquoi choisir <span className="text-brand-green">YosSell</span> ?
          </h2>
          <div className="space-y-4 max-w-3xl mx-auto">
            <p ref={subtitleRef} className="text-xl text-gray-600 leading-relaxed">
              Découvrez les fonctionnalités qui font de <span className="font-bold text-brand-green">YosSell</span> la plateforme
              de e-commerce la plus innovante et sécurisée.
            </p>
            <p ref={subtitle2Ref} className="text-xl text-gray-600 leading-relaxed">
              Oubliez les annonces classiques ! Bienvenue dans l&apos;écosystème <span className="font-bold text-brand-green">YosSell</span> : une marketplace intelligente et sécurisée où la force de la communauté booste votre business au quotidien.
            </p>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="space-y-32">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              {...feature}
            />
          ))}
        </div>

        {/* Categories Populaires Section */}
        <CategoriesPopulaires />

        {/* Call to Action */}
        <div className="text-center -mt-20 py-16 bg-gradient-to-r from-brand-green/5 to-brand-light-gold/5 rounded-3xl relative z-10">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Prêt à Rejoindre l&apos;Aventure ?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Rejoignez des milliers d&apos;utilisateurs qui ont déjà adopté
            la nouvelle façon de faire du commerce.
          </p>
          <div className="flex justify-center">
            <Link
              href="/#telecharger"
              className="bg-brand-green text-white px-10 py-4 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300 hover:shadow-xl transform hover:scale-105 inline-flex items-center justify-center space-x-2"
            >
              <span>Télécharger maintenant</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
