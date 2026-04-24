import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const sans = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "LocalBrain | AI Software Factory",
  description:
    "25년 SAP 아키텍처의 지능을 이식한 온프레미스 AI — 거친 요구사항이 설계도가 됩니다.",
  openGraph: {
    title: "LocalBrain",
    description: "Deep Tech & Trust — 온프레미스 AI Software Factory",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="dark">
      <body
        className={`${sans.variable} ${mono.variable} font-sans min-h-dvh antialiased bg-charcoal-950 text-charcoal-100`}
      >
        {children}
      </body>
    </html>
  );
}
