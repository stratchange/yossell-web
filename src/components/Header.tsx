"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between py-6">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Image
              src="/assets/logo.jpeg"
              alt="YosSell Logo"
              width={50}
              height={50}
              className="rounded-full hover:scale-110 transition-transform duration-300"
            />
            <span className="text-2xl font-bold text-gray-900">YosSell</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#fonctionnalites"
              className="text-gray-700 hover:text-brand-green font-medium transition-colors duration-300 cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('fonctionnalites')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Fonctionnalités
            </a>
            <a
              href="#avantages"
              className="text-gray-700 hover:text-brand-green font-medium transition-colors duration-300 cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                const element = document.querySelector('[id*="value"], [class*="value"]') || document.getElementById('avantages');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Avantages
            </a>
            <a
              href="#apropos"
              className="text-gray-700 hover:text-brand-green font-medium transition-colors duration-300 cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                const element = document.querySelector('[class*="aspirational"]') || document.getElementById('apropos');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              À propos
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-brand-green font-medium transition-colors duration-300 cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('telecharger')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Contact
            </a>
              <Link
                  href="/conditions-confidentialite"
                  className="text-gray-700 hover:text-brand-green font-medium transition-colors duration-300"
              >
                  Conditions & Confidentialité
              </Link>

          </nav>

          {/* CTA Button */}
          <a 
            href="#telecharger"
            className="bg-brand-green text-white px-8 py-4 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300 hover:shadow-xl transform hover:scale-105 hidden md:block cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('telecharger')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Télécharger l&apos;app
          </a>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 text-gray-700 hover:text-brand-green">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
