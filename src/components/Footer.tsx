"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link"; // ✅ Add this line
const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Download Section */}
      <section id="telecharger" className="bg-brand-green">
        <div className="max-w-6xl mx-auto px-4 py-20">
          <div className="text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Téléchargez YosSell
            </h2>
            <p className="text-xl text-green-100 mb-12 max-w-2xl mx-auto">
              Rejoignez des milliers d&apos;utilisateurs qui ont déjà adopté 
              la nouvelle façon de faire du commerce.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <a
                href="#"
                className="transition-transform duration-300 hover:scale-105 hover:shadow-xl"
              >
                <Image
                  src="/assets/applestore.png"
                  alt="Télécharger sur l'App Store"
                  width={200}
                  height={60}
                  className="h-[60px] w-auto"
                />
              </a>
              
              <a
                href="#"
                className="transition-transform duration-300 hover:scale-105 hover:shadow-xl"
              >
                <Image
                  src="/assets/playstore.png"
                  alt="Télécharger sur Google Play"
                  width={200}
                  height={60}
                  className="h-[60px] w-auto"
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Footer */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <Image
                src="/assets/logo.jpeg"
                alt="YosSell Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="text-2xl font-bold">YosSell</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              La plateforme de e-commerce mobile qui révolutionne 
              vos achats et ventes en ligne. Confiance, communauté et commerce.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-brand-light-gold">Liens rapides</h4>
            <ul className="space-y-2">
              <li><a href="#fonctionnalites" className="text-gray-400 hover:text-white transition-colors">Fonctionnalités</a></li>
              <li><a href="#avantages" className="text-gray-400 hover:text-white transition-colors">Avantages</a></li>
              <li><a href="#apropos" className="text-gray-400 hover:text-white transition-colors">À propos</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-brand-light-gold">Légal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">CGU</a></li>
                <li>
                    <Link href="/conditions-confidentialite" className="text-gray-400 hover:text-white transition-colors">
                        Conditions & Confidentialité
                    </Link>
                </li>      <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Cookies</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Support</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 YosSell. Tous droits réservés. Fait avec ❤️ en France.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
