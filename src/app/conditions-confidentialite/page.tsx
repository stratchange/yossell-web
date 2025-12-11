"use client";

import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Page: React.FC = () => {
    return (
        <>
            <Header />

            <main className="bg-white min-h-screen pt-24">
                <section className="max-w-5xl mx-auto px-4 py-16 space-y-8">
                    <h1 className="text-4xl font-bold text-gray-900 mb-6">
                        Conditions &amp; Confidentialité
                    </h1>

                    {/* Conditions d’Utilisation */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-semibold text-gray-800">Conditions d&rsquo;Utilisation (CU)</h2>
                        <p className="text-gray-700">
                            Les présentes Conditions d&rsquo;Utilisation (ci-après « CU ») régissent l&rsquo;utilisation de l&rsquo;application mobile et web YosSell, éditée par la société Strat&rsquo;Change, située à Rte. Gremda km 0.5, Avenue Nasria, Imm Phenecia Bloc D, 5-5, Sfax 3027, Tunisie. En téléchargeant, installant et utilisant l&rsquo;application, l&rsquo;utilisateur accepte sans réserve les présentes CU.
                        </p>

                        <ol className="list-decimal list-inside text-gray-700 space-y-2">
                            <li><strong>Objet :</strong> YosSell est une plateforme permettant la publication, la recherche et la consultation d&rsquo;annonces de vente, d&rsquo;achat, de location et de services, ainsi que la création et participation à des communautés.</li>
                            <li><strong>Définitions :</strong> Les termes « Utilisateur », « Annonce », « Communauté », « Administrateur », « Société » désignent respectivement : toute personne utilisant l&rsquo;application, les contenus publiés, les groupes créés, les gestionnaires de communautés, et l&rsquo;éditeur Strat&rsquo;Change.</li>
                            <li><strong>Acceptation des CU :</strong> L&rsquo;utilisation de YosSell implique l&rsquo;acceptation pleine et entière des présentes CU. L&rsquo;utilisateur s&rsquo;engage à les respecter.</li>
                            <li><strong>Accès et disponibilité :</strong> L&rsquo;application est accessible 24h/24 et 7j/7, sauf interruption pour maintenance ou cas de force majeure.</li>
                            <li><strong>Création de compte :</strong> L&rsquo;inscription nécessite des informations exactes et à jour. Tout faux renseignement peut entraîner la suspension immédiate du compte.</li>
                            <li><strong>Sécurité du compte :</strong> L&rsquo;utilisateur est seul responsable de la confidentialité de ses identifiants. Toute utilisation frauduleuse doit être signalée immédiatement.</li>
                            <li><strong>Gestion des informations :</strong> Les utilisateurs doivent fournir des informations véridiques et les mettre à jour régulièrement.</li>
                            <li><strong>Fonctionnalités de la plateforme :</strong> YosSell permet la publication d&rsquo;annonces, la création de communautés, la messagerie interne et la consultation d&rsquo;offres.</li>
                            <li><strong>Publication d&rsquo;annonces :</strong> Les annonces doivent être complètes, conformes à la législation tunisienne et ne pas induire en erreur.</li>
                            <li><strong>Contenus interdits :</strong> Il est strictement interdit de publier des annonces liées à : drogues, armes, contenus sexuels, propos haineux, contrefaçons, arnaques, usurpations d&rsquo;identité.</li>
                            <li><strong>Communautés :</strong> Les utilisateurs peuvent rejoindre ou créer des communautés publiques ou privées. Les communautés publiques où seul l&rsquo;administrateur publie peuvent être assimilées à des boutiques en ligne.</li>
                            <li><strong>Messagerie interne :</strong> Les communications entre utilisateurs doivent rester respectueuses. Tout abus entraîne des sanctions.</li>
                            <li><strong>Avis et notations :</strong> Les utilisateurs peuvent évaluer les vendeurs. Les avis doivent rester honnêtes et conformes aux lois en vigueur.</li>
                            <li><strong>Comportements interdits :</strong> Sont interdits : spam, harcèlement, faux profils, escroqueries, manipulation technique de l&rsquo;application.</li>
                            <li><strong>Modération et sanctions :</strong> Strat&rsquo;Change se réserve le droit de supprimer tout contenu non conforme. Les sanctions incluent : avertissement, suspension, bannissement définitif, poursuites judiciaires.</li>
                            <li><strong>Signalement :</strong> Les utilisateurs peuvent signaler un contenu ou un utilisateur en cas d&rsquo;infraction aux présentes CU.</li>
                            <li><strong>Responsabilités de l&rsquo;éditeur :</strong> Strat&rsquo;Change assure le bon fonctionnement de l&rsquo;application mais n&rsquo;est pas responsable des transactions entre utilisateurs.</li>
                            <li><strong>Responsabilités des utilisateurs :</strong> Chaque utilisateur est responsable des contenus qu&rsquo;il publie et des transactions qu&rsquo;il effectue.</li>
                            <li><strong>Limitation de responsabilité :</strong> Strat&rsquo;Change n&rsquo;est pas responsable des pertes financières ou matérielles subies suite à une transaction entre utilisateurs.</li>
                            <li><strong>Suspension et résiliation :</strong> Un compte peut être suspendu ou résilié en cas de non-respect des CU, sans indemnité.</li>
                            <li><strong>Force majeure :</strong> Strat&rsquo;Change ne saurait être tenu responsable en cas de force majeure rendant le service indisponible.</li>
                            <li><strong>Propriété intellectuelle :</strong> Le logo, la mascotte « Yos », le nom YosSell et tout contenu de l&rsquo;application sont protégés par le droit de la propriété intellectuelle.</li>
                            <li><strong>Données personnelles :</strong> Les données collectées sont traitées conformément à la Politique de Confidentialité disponible séparément.</li>
                            <li><strong>Liens externes :</strong> YosSell peut contenir des liens vers des services tiers, dont Strat&rsquo;Change n&rsquo;est pas responsable.</li>
                            <li><strong>Modification des CU :</strong> Strat&rsquo;Change se réserve le droit de modifier les présentes CU. Les utilisateurs seront notifiés en cas de changement majeur.</li>
                            <li><strong>Droit applicable et juridiction :</strong> Les présentes CU sont soumises au droit tunisien. Tout litige relève de la compétence exclusive des tribunaux de Tunis. Le RGPD peut s&rsquo;appliquer si l&rsquo;utilisateur réside dans l&rsquo;UE.</li>
                        </ol>
                    </div>

                    {/* Politique de Confidentialité */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-semibold text-gray-800">Politique de Confidentialité</h2>
                        <p className="text-gray-700">
                            La présente Politique de Confidentialité a pour objet d&rsquo;informer les Utilisateurs de l&rsquo;Application YosSell sur la manière dont leurs données personnelles sont collectées, traitées, stockées et protégées. Elle est établie conformément à la loi tunisienne relative à la protection des données personnelles ainsi qu&rsquo;au Règlement Général sur la Protection des Données (RGPD) de l&rsquo;Union Européenne lorsque celui-ci est applicable.
                        </p>

                        <ol className="list-decimal list-inside text-gray-700 space-y-2">
                            <li><strong>Responsable du traitement :</strong> Le responsable du traitement des données est la société Strat&rsquo;Change, sise à Sfax, Tunisie. Pour toute demande relative à vos données, vous pouvez contacter : <a href="mailto:contact@stratchangeconsulting.com" className="text-brand-green underline">contact@stratchangeconsulting.com</a>.</li>
                            <li><strong>Données collectées :</strong> Les données suivantes peuvent être collectées : nom, prénom, adresse, numéro de téléphone, email, âge, sexe, localisation (optionnelle). Aucune donnée bancaire ni document d&rsquo;identité n&rsquo;est collecté au lancement de l&rsquo;Application.</li>
                            <li><strong>Finalités du traitement :</strong> Les données sont collectées aux fins de : création et gestion des Comptes Utilisateurs, amélioration de la pertinence des Annonces, envoi de notifications, sécurité et prévention de la fraude.</li>
                            <li><strong>Base légale du traitement :</strong> Le traitement repose sur : le consentement de l&rsquo;Utilisateur, l&rsquo;exécution du contrat (CU), le respect des obligations légales et l&rsquo;intérêt légitime de l&rsquo;Éditeur.</li>
                            <li><strong>Partage des données :</strong> Les données ne sont pas vendues. Elles peuvent être communiquées aux prestataires techniques (OVH, Google Maps, Firebase) et aux autorités compétentes en cas d&rsquo;infraction.</li>
                            <li><strong>Transferts internationaux :</strong> Les données peuvent être hébergées ou traitées à l&rsquo;étranger via des prestataires techniques, dans le respect des garanties légales de protection des données.</li>
                            <li><strong>Sécurité des données :</strong> Des mesures techniques et organisationnelles sont mises en place pour protéger les données. La base de données n&rsquo;est pas encore chiffrée, mais des améliorations de sécurité sont prévues.</li>
                            <li><strong>Conservation des données :</strong> Les données sont conservées pour la durée strictement nécessaire à la fourniture des services, puis supprimées ou anonymisées.</li>
                            <li><strong>Droits des Utilisateurs :</strong> Conformément à la législation tunisienne et au RGPD, l&rsquo;Utilisateur dispose des droits suivants : accès, rectification, effacement, limitation, opposition et portabilité de ses données.</li>
                            <li><strong>Exercice des droits :</strong> L&rsquo;Utilisateur peut exercer ses droits en écrivant à : <a href="mailto:contact@stratchangeconsulting.com" className="text-brand-green underline">contact@stratchangeconsulting.com</a>. Une réponse sera apportée dans un délai de 5 jours ouvrés.</li>
                            <li><strong>Cookies et traceurs :</strong> L&rsquo;Application peut recourir à des cookies ou traceurs techniques afin d&rsquo;améliorer l&rsquo;expérience utilisateur et la sécurité. L&rsquo;Utilisateur peut configurer son appareil pour bloquer ou limiter ces cookies.</li>
                            <li><strong>Modifications de la Politique :</strong> La présente Politique pourra être modifiée à tout moment. Les Utilisateurs seront informés par l&rsquo;Application ou par tout autre moyen approprié.</li>
                        </ol>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
};

export default Page;
