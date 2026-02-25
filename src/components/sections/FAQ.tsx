"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Comment effectuer un paiement sécurisé ?",
    answer: "Utilisez uniquement les méthodes de paiement intégrées à l'application. Évitez les transferts directs ou les paiements hors plateforme pour bénéficier de notre garantie de protection."
  },
  {
    question: "Quelles sont les catégories disponibles sur YosSell ?",
    answer: "YosSell couvre l'immobilier, l'habillement, les véhicules, les services événementiels et l'informatique. Vous pouvez aussi bien acheter que louer des articles."
  },
  {
    question: "Comment devenir vendeur sur la plateforme ?",
    answer: "C'est simple ! Téléchargez l'application, créez votre profil vérifié, et commencez à poster vos annonces. Vous pouvez même transformer vos groupes communautaires en boutiques."
  },
  {
    question: "Que faire en cas d'arnaque ?",
    answer: "Signalez immédiatement le problème via notre section de plainte. Fournissez tous les détails et preuves. Notre équipe enquêtera sous 24h pour prendre les mesures nécessaires."
  }
];

export default function FAQ() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-gray-900">
          Foire Aux <span className="text-brand-green">Questions</span>
        </h2>
        
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <button
                onClick={() => setExpanded(expanded === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-semibold text-gray-800">{faq.question}</span>
                <span className={`transform transition-transform ${expanded === i ? "rotate-180" : ""}`}>
                  <svg className="w-5 h-5 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              <AnimatePresence>
                {expanded === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-6 pb-6 text-gray-600"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}