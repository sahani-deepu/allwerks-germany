"use client";

import React, { useState } from "react";
import { Phone, ArrowRight, Menu, X, ShieldCheck } from "lucide-react";

interface NavbarProps {
  onOpenConsultation: (service?: string) => void;
}

export default function Navbar({ onOpenConsultation }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top Reassurance Bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 text-center sm:text-left">
          <div className="flex items-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-500/25">
              <ShieldCheck className="w-3.5 h-3.5" /> 100% Refund Protected
            </span>
            <span className="text-slate-600 hidden md:inline">|</span>
            <span className="text-slate-300 text-xs font-medium">
              🇩🇪 Registered in Germany &bull; On-Ground Support in Frankfurt & New Delhi
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs font-medium">
            <span className="hidden lg:inline text-slate-400">
              Direct Helpline:
            </span>
            <a
              href="https://wa.me/919810430795?text=Hello%20Allwerks,%20I%20would%20like%20to%20discuss%20moving%20to%20Germany."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-bold text-amber-400 hover:text-amber-300 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>+91 98104 30795</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18">
            
            {/* Logo */}
            <a href="#" className="flex items-center gap-2.5 shrink-0 group">
              <div className="w-9 h-9 rounded-lg bg-slate-900 flex items-center justify-center text-white font-black text-base tracking-wider relative overflow-hidden shadow-xs">
                <span>AW</span>
                <div className="absolute bottom-0 inset-x-0 h-1 flex">
                  <div className="w-1/3 bg-black"></div>
                  <div className="w-1/3 bg-red-600"></div>
                  <div className="w-1/3 bg-amber-400"></div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-black tracking-wider text-slate-900 font-sans">
                  ALLWERKS
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200">
                  GERMANY
                </span>
              </div>
            </a>

            {/* Desktop Navigation - Clean, Single-Line, Elegant */}
            <nav className="hidden xl:flex items-center gap-7 text-[13px] font-semibold text-slate-700 whitespace-nowrap">
              <a href="#ausbildung" className="hover:text-blue-900 transition-colors py-2">
                Ausbildung
              </a>
              <a href="#opportunity-card" className="hover:text-blue-900 transition-colors py-2">
                Opportunity Card
              </a>
              <a href="#calculator" className="hover:text-blue-900 transition-colors py-2 flex items-center gap-1.5 text-blue-800">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                Points Calculator
              </a>
              <a href="#process" className="hover:text-blue-900 transition-colors py-2">
                13-Step Process
              </a>
              <a href="#onboarding" className="hover:text-blue-900 transition-colors py-2">
                On-Ground Support
              </a>
              <a href="#pricing" className="hover:text-blue-900 transition-colors py-2">
                Pricing & Fees
              </a>
            </nav>

            {/* CTA */}
            <div className="hidden sm:flex items-center gap-3 shrink-0">
              <button
                onClick={() => onOpenConsultation()}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-blue-950 text-white font-semibold text-xs tracking-wide uppercase transition-all duration-150 cursor-pointer shadow-xs hover:shadow-md"
              >
                <span>Free Assessment</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Mobile menu trigger */}
            <div className="xl:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-700 hover:bg-slate-100"
                aria-label="Toggle navigation"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-2">
            <a
              href="#ausbildung"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50 rounded-lg"
            >
              Ausbildung (Vocational Training)
            </a>
            <a
              href="#opportunity-card"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50 rounded-lg"
            >
              Opportunity Card (Chancenkarte)
            </a>
            <a
              href="#calculator"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-semibold text-blue-900 hover:bg-blue-50 rounded-lg"
            >
              Points Calculator (6 Points)
            </a>
            <a
              href="#process"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50 rounded-lg"
            >
              13-Stage Roadmap
            </a>
            <a
              href="#onboarding"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50 rounded-lg"
            >
              Post-Landing Support in Germany
            </a>
            <a
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50 rounded-lg"
            >
              Pricing & Refund Policy
            </a>

            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-900 text-white font-semibold text-sm shadow-xs"
              >
                <span>Book Free Assessment</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
