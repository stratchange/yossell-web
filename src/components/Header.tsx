"use client";

import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "/#fonctionnalites", label: "Fonctionnalités" },
  { href: "/#avantages", label: "Avantages" },
  { href: "/#a-propos", label: "À propos" },
  { href: "/contact", label: "Contact" },
  { href: "/conditions-confidentialite", label: "Conditions & Confidentialité" },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [drawerOpen]);

  const closeDrawer = useCallback(() => setDrawerOpen(false), []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between py-4 lg:py-6">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-300">
              <Image
                src="/assets/logo.jpeg"
                alt="YosSell Logo"
                width={44}
                height={44}
                className="rounded-full hover:scale-110 transition-transform duration-300"
              />
              <span className="text-2xl font-bold text-gray-900">YosSell</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 hover:text-brand-green font-medium transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="https://mkp.yossell.com/post-home"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-green text-white px-7 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300 hover:shadow-xl transform hover:scale-105"
              >
                Découvrir
              </a>
              <Link
                href="/#telecharger"
                className="bg-brand-green text-white px-8 py-3.5 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300 hover:shadow-xl transform hover:scale-105"
              >
                Télécharger l&apos;app
              </Link>
            </div>

            {/* Mobile Burger */}
            <button
              className="lg:hidden p-2 text-gray-700 hover:text-brand-green transition-colors"
              onClick={() => setDrawerOpen(true)}
              aria-label="Ouvrir le menu"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          drawerOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeDrawer}
      />

      {/* Mobile Drawer Panel */}
      <aside
        className={`fixed top-0 right-0 z-[70] h-full w-72 max-w-[80vw] bg-white shadow-2xl transition-transform duration-300 ease-out lg:hidden ${
          drawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
          <span className="text-lg font-bold text-gray-900">Menu</span>
          <button
            onClick={closeDrawer}
            aria-label="Fermer le menu"
            className="p-2 text-gray-500 hover:text-gray-800 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Drawer Links */}
        <nav className="flex flex-col px-6 py-6 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeDrawer}
              className="py-3 px-3 rounded-xl text-gray-700 font-medium hover:bg-brand-green/5 hover:text-brand-green transition-all duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Drawer CTAs */}
        <div className="px-6 mt-2 space-y-3">
          <a
            href="https://mkp.yossell.com/post-home"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeDrawer}
            className="block w-full text-center bg-brand-green text-white py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300"
          >
            Découvrir
          </a>
          <Link
            href="/#telecharger"
            onClick={closeDrawer}
            className="block w-full text-center bg-brand-green text-white py-3.5 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300"
          >
            Télécharger l&apos;app
          </Link>
        </div>
      </aside>
    </>
  );
};

export default Header;
