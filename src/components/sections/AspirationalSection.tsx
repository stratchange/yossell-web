"use client";

import React from "react";

const AspirationalSection: React.FC = () => {
  const words = [
    "Imaginez", ":", "vous", "cherchez", ".", "En", "1", "clic", ",", "vous", "trouvez", ".",
    "En", "1", "message", ",", "vous", "négociez", ".", "En", "1", "bouton", ",", "vous", 
    "êtes", "livré", ".", "C'est", "ça", "YosSell", "."
  ];

  return (
    <section id="apropos" className="relative py-20 bg-gradient-to-br from-brand-cream via-brand-light-gold to-brand-medium-gold overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-32 right-1/4 w-48 h-48 bg-brand-green/10 rounded-full blur-2xl animate-bounce-slow" />
        <div className="absolute top-1/2 right-10 w-32 h-32 bg-white/20 rounded-full blur-xl animate-float" style={{ animationDelay: "1s" }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Aspirational Text */}
          <div className="mb-12">
            <p className="text-3xl lg:text-5xl font-bold text-gray-900 leading-relaxed">
              {words.map((word, index) => (
                <span
                  key={index}
                  className="inline-block mr-3 lg:mr-4"
                  style={{
                    color: word === "YosSell" ? "#437A45" : 
                           ["1", "clic", "message", "bouton"].includes(word) ? "#437A45" : 
                           "inherit"
                  }}
                >
                  {word}
                </span>
              ))}
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-brand-green mb-2">
                10K+
              </div>
              <div className="text-gray-700 font-medium">
                Utilisateurs actifs
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-brand-green mb-2">
                50K+
              </div>
              <div className="text-gray-700 font-medium">
                Transactions réussies
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-brand-green mb-2">
                99%
              </div>
              <div className="text-gray-700 font-medium">
                Satisfaction client
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-brand-green mb-2">
                24/7
              </div>
              <div className="text-gray-700 font-medium">
                Support disponible
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-2xl">
            <h3 className="text-3xl lg:text-4xl font-display font-bold text-gray-900 mb-6">
              Rejoignez le mouvement.
            </h3>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Passez au e-commerce intelligent et découvrez une nouvelle façon 
              de faire du commerce qui met l&apos;humain au centre.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a 
                href="#telecharger"
                className="bg-brand-green text-white px-10 py-5 text-lg font-semibold rounded-full hover:bg-opacity-90 transition-all duration-300 hover:shadow-xl transform hover:scale-105 inline-block"
              >
                Télécharger YosSell
              </a>
              
              <div className="text-sm text-gray-600">
                Disponible sur iOS et Android
              </div>
            </div>

            {/* Social Proof */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 bg-brand-green rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-brand-light-gold rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-brand-medium-gold rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-gray-400 rounded-full border-2 border-white flex items-center justify-center text-xs text-white font-semibold">
                    +10K
                  </div>
                </div>
                <span className="ml-3">
                  Ils ont déjà rejoint la communauté YosSell
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default AspirationalSection;
