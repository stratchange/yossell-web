import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#437A45",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://temp-yossell.com"),
  title: "YosSell | Marketplace E-commerce & Services en Tunisie",
  description:
    "YosSell : L'univers du e-commerce sécurisé dans votre poche. Achetez, vendez, louez et échangez en toute confiance.",
  keywords: [
    "YosSell",
    "e-commerce Tunisie",
    "achat sécurisé",
    "vente en ligne",
    "marketplace",
  ],
  authors: [{ name: "YosSell Team" }],
  creator: "YosSell",
  publisher: "YosSell",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "YosSell | Marketplace E-commerce & Services en Tunisie",
    description:
      "YosSell : L'univers du e-commerce sécurisé dans votre poche. Achetez, vendez, louez et échangez en toute confiance.",
    siteName: "YosSell",
    images: [
      {
        url: "/assets/logo.jpeg",
        width: 1200,
        height: 630,
        alt: "YosSell - E-commerce révolutionnaire",
      },
    ],
    locale: "fr_TN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "YosSell | Marketplace E-commerce & Services en Tunisie",
    description:
      "YosSell : L'univers du e-commerce sécurisé dans votre poche. Achetez, vendez, louez et échangez en toute confiance.",
    images: ["/assets/logo.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/assets/logo.jpeg",
    apple: "/assets/logo.jpeg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${poppins.variable}`}>
      <body className="antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
