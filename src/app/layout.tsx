import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "YosSell - L'univers du e-commerce dans votre poche",
  description:
    "Achetez, vendez, louez, donnez, échangez, demandez des services... même votre temps trouve preneur. L'application de commerce révolutionnaire en Tunisie.",
  keywords: [
    "YosSell",
    "e-commerce",
    "Tunisie",
    "achat",
    "vente",
    "location",
    "échange",
    "services",
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
    title: "YosSell - L'univers du e-commerce dans votre poche",
    description:
      "Achetez, vendez, louez, donnez, échangez, demandez des services... même votre temps trouve preneur.",
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
    title: "YosSell - L'univers du e-commerce dans votre poche",
    description:
      "Achetez, vendez, louez, donnez, échangez, demandez des services... même votre temps trouve preneur.",
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        {/* Favicon */}
        <link rel="icon" href="/assets/logo.jpeg" sizes="any" />

        {/* For iOS/Android PWA */}
        <link rel="apple-touch-icon" href="/assets/logo.jpeg" />

        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#437A45" />

        {/* Viewport */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
      </head>

      <body className="antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
