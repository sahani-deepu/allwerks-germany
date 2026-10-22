"use client";

import React, { useState } from "react";
import { Phone, ArrowRight, Menu, X, ShieldCheck, CheckCircle2 } from "lucide-react";

interface NavbarProps {
  onOpenConsultation: (service?: string) => void;
}

export default function Navbar({ onOpenConsultation }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top Notification Strip */}
      <div className="bg-slate-900 text-slate-300 text-xs sm:text-sm py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <ShieldCheck className="w-3.5 h-3.5" /> 100% Refund Protection
            </span>
            <span className="hidden md:inline text-slate-400">|</span>
            <span className="text-slate-300">
              🇩🇪 On-Ground German Registered Support + Complete India-to-Germany Guidance
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs font-medium">
            <a
              href="https://wa.me/919810430795?text=Hello%20Allwerks,%20I%20want%20to%20know%20more%20about%20Germany%20Ausbildung%20and%20Opportunity%20Card."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-amber-400 hover:text-amber-300 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>+91 98104 30795</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 flex items-center justify-center shadow-md shadow-blue-950/20 text-white font-black tracking-wider text-xl relative overflow-hidden border border-slate-800">
                <span className="relative z-10">AW</span>
                {/* German flag mini accent strip */}
                <div className="absolute bottom-0 inset-x-0 h-1.5 flex">
                  <div className="w-1/3 bg-black"></div>
                  <div className="w-1/3 bg-red-600"></div>
                  <div className="w-1/3 bg-amber-400"></div>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-black tracking-widest text-slate-900 font-sans">
                    ALLWERKS
                  </span>
                  <span className="text-[10px] uppercase font-bold tracking-widest px-1.5 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200">
                    DE & IN
                  </span>
                </div>
                <span className="text-[11px] font-medium text-slate-500 tracking-tight">
                  Your Trusted Partner for Germany
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-slate-700">
              <a
                href="#ausbildung"
                className="hover:text-blue-600 transition-colors py-2"
              >
                Ausbildung Germany
              </a>
              <a
                href="#opportunity-card"
                className="hover:text-blue-600 transition-colors py-2"
              >
                Opportunity Card
              </a>
              <a
                href="#calculator"
                className="hover:text-blue-600 transition-colors py-2 flex items-center gap-1.5"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Points Calculator
              </a>
              <a
                href="#process"
                className="hover:text-blue-600 transition-colors py-2"
              >
                13-Step Journey
              </a>
              <a
                href="#pricing"
                className="hover:text-blue-600 transition-colors py-2"
              >
                Pricing & Refund
              </a>
            </nav>

            {/* CTA Button */}
            <div className="hidden sm:flex items-center gap-3">
              <button
                onClick={() => onOpenConsultation()}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-md shadow-blue-600/20 hover:shadow-lg hover:shadow-blue-600/30 transition-all duration-200 cursor-pointer"
              >
                <span>Free Assessment</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Mobile menu trigger */}
            <div className="lg:hidden flex items-center gap-2">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-700 hover:bg-slate-100"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
            <a
              href="#ausbildung"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-semibold text-slate-800 hover:bg-slate-50 rounded-lg"
            >
              Ausbildung in Germany
            </a>
            <a
              href="#opportunity-card"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-semibold text-slate-800 hover:bg-slate-50 rounded-lg"
            >
              Opportunity Card (Chancenkarte)
            </a>
            <a
              href="#calculator"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-semibold text-blue-600 hover:bg-blue-50 rounded-lg"
            >
              Check Points Calculator
            </a>
            <a
              href="#process"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-semibold text-slate-800 hover:bg-slate-50 rounded-lg"
            >
              13-Step Complete Journey
            </a>
            <a
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-semibold text-slate-800 hover:bg-slate-50 rounded-lg"
            >
              Fees & 100% Refund Policy
            </a>

            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-blue-600 text-white font-semibold text-base shadow-sm"
              >
                <span>Book Free Discovery Call</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
