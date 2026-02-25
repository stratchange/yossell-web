"use client";

import React, { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <>
      <Header />

      <main className="bg-gray-50 min-h-screen pt-28 pb-20">
        {/* Hero Contact */}
        <div className="text-center mb-16 px-4">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Contactez-nous
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Notre équipe est à votre disposition. Remplissez le formulaire
            ci-dessous ou utilisez nos coordonnées directes, nous vous
            répondrons dans les plus brefs délais.
          </p>
        </div>

        {/* Grille Infos + Formulaire */}
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Colonne Gauche — Informations */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">
                Nos coordonnées
              </h2>

              <div className="space-y-6">
                {/* Adresse */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-green/10 flex items-center justify-center shrink-0">
                    <svg
                      className="w-6 h-6 text-brand-green"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Adresse
                    </h3>
                    <p className="text-gray-600">
                      Centre Urbain Nord, Tunis, Tunisie
                    </p>
                  </div>
                </div>

                {/* Téléphone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-green/10 flex items-center justify-center shrink-0">
                    <svg
                      className="w-6 h-6 text-brand-green"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Téléphone
                    </h3>
                    <a
                      href="tel:+21655290795"
                      className="text-gray-600 hover:text-brand-green transition-colors"
                    >
                      +216 55 29 07 95
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-green/10 flex items-center justify-center shrink-0">
                    <svg
                      className="w-6 h-6 text-brand-green"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <a
                      href="mailto:contact@yossell.com"
                      className="text-gray-600 hover:text-brand-green transition-colors"
                    >
                      contact@yossell.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Colonne Droite — Formulaire */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Nom complet
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-green/40 focus:border-brand-green transition-colors"
                    placeholder="Votre nom"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Sujet
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-green/40 focus:border-brand-green transition-colors"
                    placeholder="Objet de votre message"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-green/40 focus:border-brand-green transition-colors resize-none"
                    placeholder="Écrivez votre message ici..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-brand-green text-white py-3.5 rounded-xl font-semibold hover:bg-opacity-90 hover:scale-[1.02] transition-all duration-300 hover:shadow-lg"
                >
                  Envoyer le message
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default ContactPage;
