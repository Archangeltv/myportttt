import type { Metadata, Viewport } from "next";
import { Archivo, Space_Mono } from "next/font/google";
import "./globals.css";

const archivo = Archivo({ subsets: ["latin"], axes: ["wdth"], variable: "--font-archivo", display: "swap" });
const mono = Space_Mono({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-mono", display: "swap" });

const siteUrl = "https://archxngel.cv";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Aimiuwu Victor (Archangel) — Full Stack Software Developer",
    template: "%s | Aimiuwu Victor",
  },
  description:
    "Aimiuwu Victor Idahosa (Archangel) is a Full Stack Software Developer from Lagos, Nigeria. Building high-performance web applications, bots, smart contracts, and Web3 systems.",
  keywords: [
    "Aimiuwu Victor",
    "Aimiuwu Victor Idahosa",
    "Victor Aimiuwu",
    "Archangel",
    "thearchangel",
    "Archangeltv",
    "Full Stack Software Developer",
    "Software Engineer Lagos",
    "Nigeria Web Developer",
    "Web3 Developer",
    "Clyrbot",
    "FOMO Scouter",
    "Kingdomly",
    "Palremit",
    "TypeScript",
    "Next.js",
  ],
  authors: [{ name: "Aimiuwu Victor Idahosa", url: siteUrl }],
  creator: "Aimiuwu Victor Idahosa",
  publisher: "Aimiuwu Victor Idahosa",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "profile",
    firstName: "Victor",
    lastName: "Aimiuwu",
    username: "Archangel",
    gender: "male",
    title: "Aimiuwu Victor (Archangel) — Full Stack Software Developer",
    description:
      "Aimiuwu Victor Idahosa (Archangel) is a Full Stack Software Developer from Lagos, Nigeria building modern web applications, bots, and Web3 systems.",
    url: siteUrl,
    siteName: "Aimiuwu Victor (Archangel)",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Aimiuwu Victor (Archangel) — Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aimiuwu Victor (Archangel) — Full Stack Software Developer",
    description:
      "Full Stack Software Developer from Lagos, Nigeria. Building web apps, bots, and Web3 systems.",
    creator: "@AimiuwuVictor",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
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

export const viewport: Viewport = { themeColor: "#0B0E14" };

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Aimiuwu Victor Idahosa",
      alternateName: [
        "Aimiuwu Victor",
        "Victor Aimiuwu",
        "Archangel",
        "thearchangel",
        "Archangeltv",
      ],
      givenName: "Victor",
      familyName: "Aimiuwu",
      additionalName: "Idahosa",
      jobTitle: "Full Stack Software Developer",
      description:
        "Full Stack Software Developer from Lagos, Nigeria specializing in responsive web applications, high-performance bots, distributed systems, and Web3 infrastructure.",
      url: siteUrl,
      image: `${siteUrl}/images/projects/portfolio.png`,
      email: "mailto:hello@archxngel.cv",
      nationality: "Nigerian",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Lagos",
        addressCountry: "Nigeria",
      },
      alumniOf: {
        "@type": "EducationalOrganization",
        name: "Lagos State University",
        sameAs: "https://www.lasu.edu.ng",
      },
      sameAs: [
        "https://github.com/Archangeltv",
        "https://www.linkedin.com/in/thearchangel/",
        "https://x.com/AimiuwuVictor",
        "https://t.me/thearchxngel",
      ],
      knowsAbout: [
        "Software Engineering",
        "Full Stack Development",
        "TypeScript",
        "JavaScript",
        "React",
        "Next.js",
        "Node.js",
        "PostgreSQL",
        "Solidity",
        "Smart Contracts",
        "Web3",
        "Telegram Bots",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Aimiuwu Victor (Archangel) — Developer Portfolio",
      description:
        "Official portfolio of Aimiuwu Victor Idahosa (Archangel), Full Stack Software Developer.",
      publisher: {
        "@id": `${siteUrl}/#person`,
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${archivo.variable} ${mono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <div className="grain" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
