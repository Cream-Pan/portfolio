import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Takato Ishii | Portfolio",
  description: "Takato Ishii's Portfolio",
  icons: {
    icon: "/icon.png", 
  },
  openGraph: {
    title: "Takato Ishii | Portfolio",
    description: "石井貴翔のポートフォリオ",
    url: "https://takato-ishii.vercel.app/",
    siteName: "Takato Ishii Portfolio",
    locale: "ja_JP",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="dark scroll-smooth" style={{ colorScheme: 'dark' }}>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header className="fixed top-0 left-0 right-0 z-50 bg-[#5c6482]/90 backdrop-blur-md border-b border-slate-800">
          <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
            <a href="/" className="font-bold text-emerald-primary hover:opacity-80 transition-opacity">
              TI.
            </a>
            <div className="flex gap-3 md:gap-6 text-[12px] md:text-sm font-medium text-text-sub">
              <a href="/#about" className="hover:text-white transition-colors">Strengths</a>
              <a href="/#works" className="hover:text-white transition-colors">Works</a>
              <a href="/#achievements" className="hover:text-white transition-colors">Achievements</a>
              <a href="/#skills" className="hover:text-white transition-colors">Skills</a>
              <a href="/#contact" className="hover:text-white transition-colors">Contact</a>
            </div>
          </nav>
        </header>

        <div className="pt-13">
          {children}
        </div>
      </body>
    </html>
  );
}