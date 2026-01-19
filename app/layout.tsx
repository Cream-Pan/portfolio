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
  title: "Portfolio",
  description: "Takato Ishii's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header>
          <nav>
            <a href="/">Home</a> |{" "}
            <a href="/works">Works</a> |{" "}
            <a href="/skills">Skills</a> |{" "}
            <a href="/about">About</a> |{" "}
            <a href="/contact">Contact</a>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
