"use client";

import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import ValuePropositions from "@/components/sections/ValuePropositions";
import AspirationalSection from "@/components/sections/AspirationalSection";
import Footer from "@/components/Footer";
import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";

// Simple, reliable LoadingScreen component
const LoadingScreen = ({ onLoadingComplete }: { onLoadingComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [showText, setShowText] = useState(false);
  const [phoneVisible, setPhoneVisible] = useState(false);

  useEffect(() => {
    // Apple-style phone animation - start immediately
    setTimeout(() => setPhoneVisible(true), 50);
    
    // Show text after phone animation
    setTimeout(() => setShowText(true), 400);
    
    // Start progress much faster
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(onLoadingComplete, 200);
            return 100;
          }
          return prev + 5; // Faster progress increment
        });
      }, 30); // Faster interval
    }, 600);

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-amber-50 via-amber-100 to-amber-200">
      <div className="text-center max-w-sm mx-auto px-6">
        {/* Phone Image with Apple-style animation */}
        <div className="mb-8 relative">
          <img 
            src="/assets/logomockup.png"
            alt="YosSell"
            className={`w-72 h-auto mx-auto transition-all duration-500 ease-out ${
              phoneVisible 
                ? 'opacity-100 scale-100 translate-y-0' 
                : 'opacity-0 scale-75 translate-y-8'
            }`}
            style={{
              filter: 'drop-shadow(0 15px 35px rgba(0,0,0,0.15))',
            }}
          />
          
          {/* Progress bar inside the mockup - positioned under the logo */}
          {phoneVisible && (
            <div 
              className="absolute left-1/2 transform -translate-x-1/2"
              style={{ 
                bottom: '35%', // Position under the logo inside the phone
                width: '140px' // Width to fit inside phone screen
              }}
            >
              <div className="bg-gray-200 bg-opacity-60 rounded-full h-1.5 overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-green-500 to-green-400 rounded-full transition-all duration-200 ease-out"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          )}
        </div>

        {/* YOSSELL Text with smooth letter-by-letter animation */}
        {showText && (
          <div className="mb-4">
            <h1 className="text-4xl font-bold text-green-800 mb-3 tracking-wide">
              {'YOSSELL'.split('').map((letter, index) => (
                <span
                  key={index}
                  className="inline-block opacity-0"
                  style={{
                    animation: `letterSlideIn 0.3s ease-out forwards`,
                    animationDelay: `${index * 60}ms`,
                  }}
                >
                  {letter}
                </span>
              ))}
            </h1>
           <p 
  className="text-green-600 italic opacity-0"
  style={{
    animation: 'fadeInUp 0.4s ease-out forwards',
    animationDelay: '500ms'
  }}
>
  L&apos;univers du e-commerce dans votre poche.
</p>
          </div>
        )}
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes letterSlideIn {
            0% { 
              opacity: 0; 
              transform: translateY(20px) translateX(-10px); 
            }
            100% { 
              opacity: 1; 
              transform: translateY(0px) translateX(0px); 
            }
          }
          
          @keyframes fadeInUp {
            0% { 
              opacity: 0; 
              transform: translateY(15px); 
            }
            100% { 
              opacity: 1; 
              transform: translateY(0px); 
            }
          }
        `
      }} />
    </div>
  );
};

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
      
      <SmoothScrollProvider>
        <main className="relative">
          {/* Main Content */}
          <div className="relative z-10">
            <Header />
            <Hero />
            <Features />
            <ValuePropositions />
            <AspirationalSection />
            <Footer />
          </div>
        </main>
      </SmoothScrollProvider>
    </>
  );
}
