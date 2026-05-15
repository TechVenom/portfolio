import type { Metadata } from "next";
import "./globals.css";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Hezron Paipai — Full-Stack Developer & AI Engineer",
  description: "Full-Stack Developer, AI Engineer, and Cybersecurity Researcher building scalable systems and intelligent solutions. Open to collaboration.",
  keywords: ["full-stack developer", "AI engineer", "cybersecurity researcher", "software engineer", "portfolio", "Hezron Paipai", "web developer", "machine learning"],
  authors: [{ name: "Hezron Paipai" }],
  openGraph: {
    title: "Hezron Paipai — Full-Stack Developer & AI Engineer",
    description: "Building scalable web solutions, intelligent systems, and privacy-first tools. View my work and get in touch.",
    type: "website",
  },
  icons: {
    icon: "/favicon.png",
    apple: "/logo192.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-noir-950 text-ash-100 font-sans antialiased overflow-x-hidden selection:bg-white/15 selection:text-white">
        <div className="grain-overlay" aria-hidden="true" />
        
        <Navigation />
        <main className="relative z-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
