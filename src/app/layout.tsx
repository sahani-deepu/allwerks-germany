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
  title: "ALLWERKS | Your Trusted Partner for Ausbildung & Opportunity Card in Germany",
  description:
    "Complete end-to-end support for Indian students and professionals moving to Germany. Paid Ausbildung vocational training (€800-€1,400/mo) and Germany Opportunity Card (Chancenkarte) with 100% refund protection.",
  keywords: [
    "Ausbildung Germany",
    "Germany Opportunity Card",
    "Chancenkarte Consultant Delhi India",
    "Allwerks Germany",
    "German Vocational Training Indian Students",
    "Nursing Ausbildung Germany",
    "Points Calculator Chancenkarte",
  ],
  authors: [{ name: "Allwerks" }],
  openGraph: {
    title: "ALLWERKS | Ausbildung & Opportunity Card in Germany",
    description:
      "Move to Germany with complete peace of mind. On-ground German support, Anmeldung, accommodation assistance, and 100% refund protection.",
    siteName: "Allwerks",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-white text-slate-900 selection:bg-amber-400 selection:text-slate-950 font-sans">
        {children}
      </body>
    </html>
  );
}
