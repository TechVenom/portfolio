import type { Metadata } from "next";
import "./globals.css";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Hezron Paipai — Sovereign Intelligence Architect",
  description: "AI Architect, System Engineer & Cybersecurity Researcher. Building sovereign intelligence at the edge of AI and security.",
  keywords: ["AI architect", "AGI", "cybersecurity researcher", "full-stack developer", "autonomous systems", "VENOMX", "system engineer", "portfolio"],
  authors: [{ name: "Hezron Paipai" }],
  openGraph: {
    title: "Hezron Paipai — Sovereign Intelligence Architect",
    description: "Architecting sovereign intelligence. AI, cybersecurity, and full-stack engineering at the highest level.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-abyss-950 text-white font-sans antialiased overflow-x-hidden selection:bg-venom-500/25 selection:text-white">
        <div className="grain-overlay" aria-hidden="true" />
        
        {/* Global Background Effects */}
        <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-venom-500/[0.04] rounded-full blur-[120px] animate-float" />
          <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-cyber-500/[0.04] rounded-full blur-[100px] animate-float" style={{ animationDelay: '3s' }} />
          <div className="absolute bottom-1/4 left-1/2 w-[700px] h-[700px] bg-amethyst-500/[0.03] rounded-full blur-[130px] animate-float" style={{ animationDelay: '6s' }} />
        </div>

        <Navigation />
        <main className="relative z-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
