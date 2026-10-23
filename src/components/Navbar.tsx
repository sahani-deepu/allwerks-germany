"use client";

import React, { useState } from "react";
import { Phone, ArrowRight, Menu, X, ShieldCheck, MapPin } from "lucide-react";

interface NavbarProps {
  onOpenConsultation: (service?: string) => void;
}

export default function Navbar({ onOpenConsultation }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top Reassurance Bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
              <ShieldCheck className="w-3.5 h-3.5" /> 100% Fee Refund on Visa Rejection
            </span>
            <span className="hidden md:inline text-slate-600">•</span>
            <span className="text-slate-300">
              🇩🇪 Registered in Germany &bull; On-ground team in Frankfurt & New Delhi
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <div className="hidden sm:flex items-center gap-1.5 text-slate-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Advisors active today</span>
            </div>
            <a
              href="https://wa.me/919810430795?text=Hello%20Allwerks,%20I%20would%20like%20to%20discuss%20moving%20to%20Germany."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-semibold text-amber-400 hover:text-amber-300 transition-colors"
            >
              <Phone className="w-3 h-3" />
              <span>+91 98104 30795</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Brand Logo */}
            <a href="#" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center text-white font-black text-lg tracking-wider relative overflow-hidden shadow-sm">
                <span>AW</span>
                <div className="absolute bottom-0 inset-x-0 h-1 flex">
                  <div className="w-1/3 bg-black"></div>
                  <div className="w-1/3 bg-red-600"></div>
                  <div className="w-1/3 bg-amber-400"></div>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-wider text-slate-900">
                  ALLWERKS
                </span>
                <span className="text-[11px] font-medium text-slate-500 tracking-tight">
                  Indo-German Career & Education Partners
                </span>
              </div>
            </a>

            {/* Desktop Links */}
            <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-700">
              <a href="#ausbildung" className="hover:text-blue-900 transition-colors py-2">
                Ausbildung (Students)
              </a>
              <a href="#opportunity-card" className="hover:text-blue-900 transition-colors py-2">
                Opportunity Card (Professionals)
              </a>
              <a href="#calculator" className="hover:text-blue-900 transition-colors py-2 flex items-center gap-1.5 text-blue-700">
                <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                Points Tool
              </a>
              <a href="#process" className="hover:text-blue-900 transition-colors py-2">
                The 13 Stages
              </a>
              <a href="#onboarding" className="hover:text-blue-900 transition-colors py-2">
                On-Ground Support
              </a>
              <a href="#pricing" className="hover:text-blue-900 transition-colors py-2">
                Transparent Fees
              </a>
            </nav>

            {/* CTA */}
            <div className="hidden sm:flex items-center gap-3">
              <button
                onClick={() => onOpenConsultation()}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-900 hover:bg-slate-900 text-white font-semibold text-sm transition-all duration-200 cursor-pointer shadow-sm"
              >
                <span>Book 1-on-1 Assessment</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center">
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

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3">
            <a
              href="#ausbildung"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-semibold text-slate-800 hover:bg-slate-50 rounded-lg"
            >
              Ausbildung (Students & 12th Pass)
            </a>
            <a
              href="#opportunity-card"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-semibold text-slate-800 hover:bg-slate-50 rounded-lg"
            >
              Opportunity Card (Job Seekers)
            </a>
            <a
              href="#calculator"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-semibold text-blue-700 hover:bg-blue-50 rounded-lg"
            >
              Check Points Tool (6 Points)
            </a>
            <a
              href="#process"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-semibold text-slate-800 hover:bg-slate-50 rounded-lg"
            >
              The 13 Stages of Your Move
            </a>
            <a
              href="#onboarding"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-semibold text-slate-800 hover:bg-slate-50 rounded-lg"
            >
              Post-Landing in Germany (Anmeldung & Flats)
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
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-blue-900 text-white font-semibold text-base shadow-sm"
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
