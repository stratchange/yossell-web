"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface SubCategory {
  aVendre: string[];
  aLouer: string[];
}

interface Category {
  id: string;
  iconPath: string;
  name: string;
  subCategories: SubCategory;
}

const categories: Category[] = [
  {
    id: "habillement",
    iconPath: "/assets/Habillement et Bien-Être.png",
    name: "Habillement & Bien-être",
    subCategories: {
      aVendre: ["Vêtements Femme", "Vêtements Homme", "Vêtements Enfant", "Chaussures", "Sacs & Accessoires", "Beauté & Soins"],
      aLouer: ["Robes de Soirée & Gala", "Tenues de Mariage", "Tenues Traditionnelles", "Accessoires de Luxe"],
    },
  },
  {
    id: "immobilier",
    iconPath: "/assets/Immobilier & Terrains.png",
    name: "Immobilier & Terrains",
    subCategories: {
      aVendre: ["Maisons & Villas", "Appartements", "Locaux Professionnels", "Terrains & Fermes"],
      aLouer: ["Maisons & Villas", "Appartements", "Locaux Pro", "Chambres & Colocations", "Locations Saisonnières"],
    },
  },
  {
    id: "vehicules",
    iconPath: "/assets/Véhicules & Transport.png",
    name: "Véhicules & Transport",
    subCategories: {
      aVendre: ["Voitures", "Motos & Scooters", "Vélos & Trottinettes"],
      aLouer: ["Voitures", "Motos & Scooters", "Vélos & Trottinettes", "Camions & Utilitaires"],
    },
  },
  {
    id: "services",
    iconPath: "/assets/Services.png",
    name: "Services & Événementiel",
    subCategories: {
      aVendre: ["Services à Domicile", "Cours & Formation", "Événements & Animations", "Services Professionnels"],
      aLouer: ["Salles de Réception", "Matériel de Réception", "Costumes & Déguisements"],
    },
  },
  {
    id: "informatique",
    iconPath: "/assets/Informatique et Multimédia.png",
    name: "Informatique & Multimédia",
    subCategories: {
      aVendre: ["Ordinateurs", "Smartphones", "Tablettes", "Accessoires", "Jeux vidéo"],
      aLouer: ["Ordinateurs", "Matériel de sonorisation", "Projecteurs", "Consoles de jeux"],
    },
  },
];

/* ------------------------------------------------------------------ */
/* Sous-composant : panneau latéral des sous-catégories              */
/* ------------------------------------------------------------------ */
const SubCategoryPanel = React.forwardRef<HTMLDivElement, { data: Category | null }>(
  function SubCategoryPanel({ data }, ref) {
    if (!data) return <div ref={ref} className="hidden" />;
    return (
      <div
        ref={ref}
        className="bg-white rounded-3xl p-6 lg:p-8 w-full"
        style={{
          border: "1px solid rgba(67,122,69,.06)",
          boxShadow:
            "0 2px 4px rgba(0,0,0,.02), 0 8px 24px rgba(67,122,69,.09), 0 24px 48px rgba(67,122,69,.07), 0 48px 80px rgba(67,122,69,.04)",
          opacity: 0,
          pointerEvents: "none",
        }}
      >
        {/* En-tête — titre seul, aligné à gauche avec les listes */}
        <div className="mb-6">
          <h3 className="text-xl lg:text-2xl font-bold text-left" style={{ color: "#1a1a1a" }}>
            {data.name}
          </h3>
        </div>

        {/* Séparateur */}
        <div
          className="mb-6"
          style={{ height: "1px", background: "linear-gradient(to right, #e5e5e5, transparent)" }}
        />

        <div className="grid grid-cols-2 gap-8">
          {(["aVendre", "aLouer"] as const).map((key) => (
            <div key={key}>
              <h4
                className="font-semibold uppercase mb-4"
                style={{ fontSize: "0.7rem", letterSpacing: "0.08em", color: "#6B7280" }}
              >
                {key === "aVendre" ? "À Vendre" : "À Louer"}
              </h4>
              <ul className="space-y-3">
                {data.subCategories[key].map((sub, i) => (
                  <li
                    key={i}
                    title={`Acheter ou louer ${sub} en Tunisie`}
                    className="group flex items-center text-sm lg:text-base cursor-pointer transition-all duration-200 ease-out hover:translate-x-0.5"
                    style={{ color: "#374151" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#437A45";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "#374151";
                    }}
                  >
                    <span
                      className="mr-3 flex-shrink-0 inline-block rounded-full transition-all duration-200"
                      style={{
                        width: "5px",
                        height: "5px",
                        backgroundColor: "rgba(67,122,69,.20)",
                      }}
                    />
                    {sub}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    );
  }
);

/* ------------------------------------------------------------------ */
/* Composant principal                                               */
/* ------------------------------------------------------------------ */
const CategoriesPopulaires: React.FC = () => {
  const [activeId, setActiveId] = useState<string | null>(null);
  const isAnimating = useRef(false);

  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const panelWrapRef = useRef<HTMLDivElement>(null);

  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const btnRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const labelRefs = useRef<(HTMLSpanElement | null)[]>([]);

  /* ---------- helpers -------------------------------------------- */

  const arcXY = useCallback(
    (index: number, total: number, radiusX: number, radiusY: number) => {
      const t = total <= 1 ? 0.5 : index / (total - 1);
      const angle = Math.PI * (1 - t);
      return {
        x: radiusX * Math.cos(angle),
        y: -radiusY * Math.sin(angle),
      };
    },
    []
  );

  const getArcCoords = useCallback(
    (stage: HTMLDivElement) => {
      const W = stage.offsetWidth;
      const H = stage.offsetHeight;
      const cx = W / 2;
      const cy = H * 0.42;
      const rx = Math.min(W * 0.42, 380);
      const ry = Math.min(H * 0.22, 110);
      const n = categories.length;
      return categories.map((_, i) => {
        const { x, y } = arcXY(i, n, rx, ry);
        return { px: cx + x - 70, py: cy + y - 35 };
      });
    },
    [arcXY]
  );

  const placeOnArc = useCallback(() => {
    const stage = stageRef.current;
    if (!stage) return;
    const coords = getArcCoords(stage);
    itemRefs.current.forEach((el, i) => {
      if (!el) return;
      gsap.set(el, { x: coords[i].px, y: coords[i].py });
    });
  }, [getArcCoords]);

  /* ---------- Intro animation ------------------------------------ */

  useEffect(() => {
    if (typeof window === "undefined") return;

    placeOnArc();

    itemRefs.current.forEach((el) => {
      if (el) gsap.set(el, { opacity: 0, scale: 0 });
    });

    const ctx = gsap.context(() => {
      gsap.set(titleRef.current, { opacity: 0, y: 30 });

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 80%",
        once: true,
        onEnter: () => {
          gsap.to(titleRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
          });

          itemRefs.current.forEach((el, i) => {
            if (!el) return;
            gsap.to(el, {
              opacity: 1,
              scale: 1,
              duration: 0.55,
              ease: "back.out(1.7)",
              delay: 0.15 + i * 0.09,
            });
          });
        },
      });
    }, sectionRef);

    const handleResize = () => {
      if (!activeId) placeOnArc();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      ctx.revert();
      window.removeEventListener("resize", handleResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* ---------- Animate on selection change ------------------------ */

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage || isAnimating.current) return;

    const W = stage.offsetWidth;
    const H = stage.offsetHeight;
    const coords = getArcCoords(stage);
    const activeIndex = categories.findIndex((c) => c.id === activeId);

    if (activeId !== null && activeIndex >= 0) {
      /* ============ ACTIVER ============ */
      isAnimating.current = true;

      /* --- Calcul centré : [Bulle (126px)] chevauche [-40px] [Carte (cardW)] --- */
      const bubbleScaled = 70 * 1.8;
      const cardW = Math.min(420, W * 0.46);
      const overlap = 35;
      const totalBlockW = bubbleScaled + cardW - overlap;
      const blockStartX = (W - totalBlockW) / 2;

      const targetBubbleX = blockStartX + bubbleScaled / 2 - 70;
      const targetBubbleY = H / 2 - 35;

      const panelLeftPx = blockStartX + bubbleScaled - overlap;

      /* Pré-positionner le wrapper du panneau */
      if (panelWrapRef.current) {
        panelWrapRef.current.style.left = `${panelLeftPx}px`;
        panelWrapRef.current.style.width = `${cardW}px`;
      }

      const tl = gsap.timeline({
        onComplete: () => {
          isAnimating.current = false;
        },
      });

      /* T=0 : Z-index — la bulle active passe au-dessus de la carte */
      tl.set(itemRefs.current[activeIndex], { zIndex: 20 }, 0);

      /* T=0 : Le label de l'actif disparaît immédiatement */
      if (labelRefs.current[activeIndex]) {
        tl.to(
          labelRefs.current[activeIndex],
          { opacity: 0, duration: 0.2, ease: "power2.in" },
          0
        );
      }

      /* T=0 : Les inactifs : opacité réduite, labels masqués, z-index bas */
      itemRefs.current.forEach((el, i) => {
        if (!el || i === activeIndex) return;
        tl.set(el, { zIndex: 1 }, 0);
        tl.to(
          el,
          { opacity: 0.3, duration: 0.4, ease: "power2.out" },
          0
        );
        if (labelRefs.current[i]) {
          tl.to(
            labelRefs.current[i],
            { opacity: 0, duration: 0.25, ease: "power2.in" },
            0
          );
        }
      });

      /* T=0.15 : La bulle active translate vers sa position centrée */
      tl.to(
        itemRefs.current[activeIndex],
        {
          x: targetBubbleX,
          y: targetBubbleY,
          duration: 0.55,
          ease: "power3.inOut",
        },
        0.15
      );

      /* T=0.5 : Agrandissement de la bulle */
      tl.to(
        btnRefs.current[activeIndex],
        {
          scale: 1.8,
          duration: 0.4,
          ease: "back.out(1.4)",
        },
        0.5
      );

      /* T=0.65 : Apparition du panneau (glisse depuis la droite) */
      if (panelRef.current) {
        tl.fromTo(
          panelRef.current,
          { opacity: 0, x: 60, scale: 0.92, pointerEvents: "none" },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            pointerEvents: "auto",
            duration: 0.5,
            ease: "power3.out",
          },
          0.65
        );
      }
    } else {
      /* ============ DÉSACTIVER ============ */
      isAnimating.current = true;

      const tl = gsap.timeline({
        onComplete: () => {
          isAnimating.current = false;
        },
      });

      /* Masquer le panneau */
      if (panelRef.current) {
        tl.to(
          panelRef.current,
          {
            opacity: 0,
            x: 60,
            scale: 0.92,
            pointerEvents: "none",
            duration: 0.3,
            ease: "power2.in",
          },
          0
        );
      }

      /* Réinitialiser les boutons (scale) et z-index */
      btnRefs.current.forEach((btn) => {
        if (btn) tl.to(btn, { scale: 1, duration: 0.3 }, 0);
      });
      itemRefs.current.forEach((el) => {
        if (el) gsap.set(el, { zIndex: "auto" });
      });

      /* Replacer chaque item sur l'arc + fade in complet */
      itemRefs.current.forEach((el, i) => {
        if (!el) return;
        tl.to(
          el,
          {
            x: coords[i].px,
            y: coords[i].py,
            opacity: 1,
            scale: 1,
            duration: 0.5,
            ease: "power2.out",
          },
          0.15 + i * 0.06
        );
      });

      /* Réafficher les labels */
      labelRefs.current.forEach((lbl) => {
        if (lbl) tl.to(lbl, { opacity: 1, x: 0, duration: 0.3 }, 0.35);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeId]);

  /* ---------- Click handler -------------------------------------- */

  const handleClick = (id: string) => {
    if (isAnimating.current) return;
    setActiveId((prev) => (prev === id ? null : id));
  };

  /* ---------- Render --------------------------------------------- */

  const activeCat = activeId
    ? categories.find((c) => c.id === activeId) ?? null
    : null;

  return (
    <section
      ref={sectionRef}
      className="pt-16 pb-0 bg-white relative"
      style={{ maxWidth: "100vw", overflowX: "hidden" }}
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Titre */}
        <div className="text-center mb-4">
          <h2
            ref={titleRef}
            className="text-4xl lg:text-5xl font-bold mb-4"
            style={{ color: "#2D3A2D" }}
          >
            Catégories Populaires
          </h2>
          <p className="text-lg" style={{ color: "rgba(67,122,69,.8)" }}>
            Achetez ou louez parmi nos catégories les plus recherchées
          </p>
        </div>

        {/* SEO: liste complète des catégories et sous-catégories pour les crawlers */}
        <div className="sr-only">
          <ul>
            {categories.map((cat) => (
              <li key={cat.id}>
                {cat.name}
                <ul>
                  {[...cat.subCategories.aVendre, ...cat.subCategories.aLouer].map((sub, j) => (
                    <li key={j}>{sub}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>

        {/* Scène principale */}
        <div
          ref={stageRef}
          className="relative mx-auto"
          style={{ width: "100%", maxWidth: "900px", height: "500px" }}
        >
          {/* ---------- BULLES ---------- */}
          {categories.map((cat, i) => {
            const isActive = activeId === cat.id;
            return (
              <div
                key={cat.id}
                ref={(el) => {
                  itemRefs.current[i] = el;
                }}
                className="absolute flex flex-col items-center"
                style={{ width: 140, gap: 8, willChange: "transform, opacity" }}
              >
                {/* Bulle */}
<button
  ref={(el) => {
    btnRefs.current[i] = el;
  }}
  onClick={() => handleClick(cat.id)}
  aria-label={`Voir les sous-catégories de ${cat.name}`}
  aria-expanded={isActive}
  className={`group flex-shrink-0 w-[70px] h-[70px] rounded-full flex items-center justify-center cursor-pointer
              transition-all duration-200 ease-out will-change-transform transform-origin-center
              hover:scale-105
              ${isActive 
                ? "" 
                : "bg-[#F3F4F6] hover:bg-[#437A45]"
              }`}
  style={{
    backgroundColor: isActive ? "rgba(67,122,69,.06)" : undefined,
    border: isActive ? "2px solid #437A45" : "2px solid transparent",
    boxShadow: isActive
      ? "0 0 0 6px rgba(67,122,69,.12), 0 10px 28px rgba(0,0,0,.14), 0 24px 56px rgba(67,122,69,.20), 0 6px 16px rgba(0,0,0,.06)"
      : "0 2px 8px rgba(0,0,0,.05)",
  }}
>
  <div
    data-icon
    className={`w-8 h-8 transition-colors duration-200 ${
      isActive ? "bg-[#437A45]" : "bg-[#437A45] group-hover:bg-white"
    }`}
    aria-label={cat.name}
    role="img"
    style={{
      WebkitMaskImage: `url("${encodeURI(cat.iconPath)}")`,
      WebkitMaskSize: "contain",
      WebkitMaskRepeat: "no-repeat",
      WebkitMaskPosition: "center",
      maskImage: `url("${encodeURI(cat.iconPath)}")`,
      maskSize: "contain",
      maskRepeat: "no-repeat",
      maskPosition: "center",
    }}
  />
</button>

                {/* Label — centré sous la bulle, contraint à 140px */}
                <span
                  ref={(el) => {
                    labelRefs.current[i] = el;
                  }}
                  className="font-semibold select-none pointer-events-none"
                  style={{
                    color: "#2D3A2D",
                    textAlign: "center",
                    maxWidth: 140,
                    whiteSpace: "normal",
                    wordWrap: "break-word",
                    lineHeight: 1.2,
                    fontSize: "0.875rem",
                  }}
                >
                  {cat.name}
                </span>
              </div>
            );
          })}

          {/* ---------- PANNEAU LATÉRAL ---------- */}
          <div
            ref={panelWrapRef}
            className="absolute inset-y-0 flex items-center"
            style={{
              left: "50%",
              width: "46%",
              maxWidth: "420px",
              zIndex: 10,
              pointerEvents: "none",
            }}
          >
            <SubCategoryPanel ref={panelRef} data={activeCat} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoriesPopulaires;