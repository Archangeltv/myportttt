import type { Metadata, Viewport } from "next";
import { Archivo, Space_Mono } from "next/font/google";
import "./globals.css";

const archivo = Archivo({ subsets: ["latin"], axes: ["wdth"], variable: "--font-archivo", display: "swap" });
const mono = Space_Mono({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-mono", display: "swap" });

export const metadata: Metadata = {
  title: "Aimiuwu Victor (Archangel) | Full Stack Software Developer",
  description: "Full stack software developer in Lagos building web applications, backend systems and Web3 products from interface to deployment.",
  openGraph: { title: "Aimiuwu Victor (Archangel)", description: "Full stack software developer: web, systems and Web3.", type: "website" },
};
export const viewport: Viewport = { themeColor: "#0B0E14" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${archivo.variable} ${mono.variable}`}>
      <body>
        <div className="grain" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
