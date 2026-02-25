"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link"; // ✅ Add this line
const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Download Section */}
      <section id="telecharger" className="bg-brand-green scroll-mt-24">
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

            {/* Contact Info */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-8 mt-8">
              <a href="mailto:contact@yossell.com" className="flex items-center gap-2 text-white text-sm hover:text-green-100 transition-colors">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <span>contact@yossell.com</span>
              </a>
              <a href="tel:+216 55 29 07 95" className="flex items-center gap-2 text-white text-sm hover:text-green-100 transition-colors">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <span>+216 55 29 07 95</span>
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
              <li><Link href="/#fonctionnalites" className="text-gray-400 hover:text-white transition-colors">Fonctionnalités</Link></li>
              <li><Link href="/#avantages" className="text-gray-400 hover:text-white transition-colors">Avantages</Link></li>
              <li><Link href="/#a-propos" className="text-gray-400 hover:text-white transition-colors">À propos</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
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
