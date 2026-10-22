"use client";

import React, { useState } from "react";
import { 
  ArrowRight, 
  GraduationCap, 
  Briefcase, 
  ShieldCheck, 
  CheckCircle, 
  Sparkles, 
  MapPin, 
  Euro, 
  Building2,
  CalendarCheck
} from "lucide-react";

interface HeroProps {
  onOpenConsultation: (service?: string) => void;
}

export default function Hero({ onOpenConsultation }: HeroProps) {
  const [activeTab, setActiveTab] = useState<"ausbildung" | "opportunity">("ausbildung");

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white pt-12 pb-20 lg:pt-16 lg:pb-28">
      {/* Background Glow Accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-r from-blue-600/15 via-amber-500/10 to-red-600/10 blur-3xl pointer-events-none -z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/80 text-xs sm:text-sm font-medium text-slate-200 backdrop-blur-md">
            <span className="flex h-2 w-2 rounded-full bg-amber-400"></span>
            <span>Germany Official Career Pathways 2026</span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs sm:text-sm font-medium text-emerald-300">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>100% Service Fee Refund Protected</span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-xs sm:text-sm font-medium text-blue-300">
            <MapPin className="w-4 h-4 text-blue-400" />
            <span>On-Ground Team in Germany</span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight sm:leading-none">
            Move to <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500">Germany</span> with Confidence.
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-slate-300 font-normal max-w-2xl mx-auto leading-relaxed">
            From your first counseling session in India to your German apartment, Anmeldung, and first day at work — Allwerks manages every single step under one roof.
          </p>
        </div>

        {/* Pathway Selector Switcher */}
        <div className="max-w-xl mx-auto mb-10 p-1.5 rounded-2xl bg-slate-800/90 border border-slate-700 backdrop-blur-md flex shadow-xl">
          <button
            onClick={() => setActiveTab("ausbildung")}
            className={`flex-1 flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-xl text-sm sm:text-base font-bold transition-all duration-300 cursor-pointer ${
              activeTab === "ausbildung"
                ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                : "text-slate-400 hover:text-white hover:bg-slate-700/50"
            }`}
          >
            <GraduationCap className="w-5 h-5" />
            <span>Ausbildung (Vocational)</span>
          </button>
          <button
            onClick={() => setActiveTab("opportunity")}
            className={`flex-1 flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-xl text-sm sm:text-base font-bold transition-all duration-300 cursor-pointer ${
              activeTab === "opportunity"
                ? "bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/30 font-extrabold"
                : "text-slate-400 hover:text-white hover:bg-slate-700/50"
            }`}
          >
            <Briefcase className="w-5 h-5" />
            <span>Opportunity Card (Chancenkarte)</span>
          </button>
        </div>

        {/* Dynamic Card Display */}
        <div className="max-w-4xl mx-auto">
          {activeTab === "ausbildung" ? (
            <div className="rounded-3xl bg-slate-900/90 border border-slate-700/80 p-6 sm:p-10 shadow-2xl backdrop-blur-xl relative overflow-hidden transition-all duration-300">
              <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-blue-500/20 text-blue-300 text-xs font-bold tracking-wide uppercase">
                    For 12th Pass, Diploma & Young Graduates
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                    Dual Vocational Training: Earn €800 – €1,400+/mo with Zero Tuition Fees
                  </h3>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    Combine paid on-the-job training at verified German companies with state vocational education (Berufsschule). Over 300+ recognized professions in Healthcare, IT, Engineering & Trades.
                  </p>

                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div className="flex items-start gap-2.5">
                      <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-slate-200">
                        <strong>Monthly Allowance:</strong> €800 - €1,400+ to cover living
                      </span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-slate-200">
                        <strong>No Tuition Fees:</strong> Company pays your training
                      </span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-slate-200">
                        <strong>High Retention:</strong> Direct full-time employment conversion
                      </span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-slate-200">
                        <strong>Fixed Allwerks Fee:</strong> €4,000 (Payable in 2 installments)
                      </span>
                    </div>
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={() => onOpenConsultation("Ausbildung in Germany")}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-base shadow-lg shadow-blue-600/30 transition-all cursor-pointer"
                    >
                      <span>Explore Ausbildung Trades</span>
                      <ArrowRight className="w-5 h-5" />
                    </button>
                    <a
                      href="#ausbildung"
                      className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-sm transition-all"
                    >
                      See Eligibility & Requirements
                    </a>
                  </div>
                </div>

                {/* Ausbildung Highlight Box */}
                <div className="lg:col-span-5 bg-slate-950/70 border border-slate-800 rounded-2xl p-5 space-y-4">
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    Allwerks All-Inclusive Care
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900 border border-slate-800/80">
                      <span className="text-sm text-slate-300">Typical Duration</span>
                      <span className="text-sm font-bold text-amber-400">2 to 3.5 Years</span>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900 border border-slate-800/80">
                      <span className="text-sm text-slate-300">Recognition</span>
                      <span className="text-sm font-bold text-emerald-400">EU-Wide IHK / HWK</span>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900 border border-slate-800/80">
                      <span className="text-sm text-slate-300">Dedicated Case Manager</span>
                      <span className="text-sm font-bold text-blue-400">Included (1:1)</span>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900 border border-slate-800/80">
                      <span className="text-sm text-slate-300">Post-Landing Anmeldung</span>
                      <span className="text-sm font-bold text-slate-200">Done in 14 Days</span>
                    </div>
                  </div>
                  <div className="p-3 rounded-xl bg-blue-950/40 border border-blue-800/50 text-xs text-blue-300 leading-snug">
                    💡 <em>Unlike generic agents, enrollment & language payments are made directly by you to certified schools. No hidden cuts.</em>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="rounded-3xl bg-slate-900/90 border border-slate-700/80 p-6 sm:p-10 shadow-2xl backdrop-blur-xl relative overflow-hidden transition-all duration-300">
              <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-amber-500/20 text-amber-300 text-xs font-bold tracking-wide uppercase">
                    For Degree Holders & Skilled Professionals
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                    Germany Opportunity Card: Search Jobs On-The-Ground Without an Employer Offer
                  </h3>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    1-year residence permit for skilled non-EU professionals. Work part-time up to 20 hrs/week while interviewing directly with German employers in IT, Engineering, and Healthcare.
                  </p>

                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div className="flex items-start gap-2.5">
                      <CheckCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-slate-200">
                        <strong>No Offer Needed:</strong> Apply independently
                      </span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <CheckCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-slate-200">
                        <strong>20 Hrs/Wk Work:</strong> Earn while job hunting
                      </span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <CheckCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-slate-200">
                        <strong>100% Refund Guarantee:</strong> Full fee back if denied
                      </span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <CheckCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-slate-200">
                        <strong>Fee Milestone:</strong> ₹3,00,000 (10% start, 10% on landing)
                      </span>
                    </div>
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row gap-3">
                    <a
                      href="#calculator"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-base shadow-lg shadow-amber-500/30 transition-all cursor-pointer"
                    >
                      <Sparkles className="w-5 h-5" />
                      <span>Calculate Your Points (Min 6 Required)</span>
                    </a>
                    <button
                      onClick={() => onOpenConsultation("Opportunity Card (Chancenkarte)")}
                      className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-sm transition-all cursor-pointer"
                    >
                      Check Eligibility Free
                    </button>
                  </div>
                </div>

                {/* Opportunity Card Highlight Box */}
                <div className="lg:col-span-5 bg-slate-950/70 border border-slate-800 rounded-2xl p-5 space-y-4">
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    Opportunity Card Highlights
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900 border border-slate-800/80">
                      <span className="text-sm text-slate-300">Initial Permit Validity</span>
                      <span className="text-sm font-bold text-amber-400">12 Months (1 Year)</span>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900 border border-slate-800/80">
                      <span className="text-sm text-slate-300">Points Qualifying Threshold</span>
                      <span className="text-sm font-bold text-emerald-400">6 Points (Route 2)</span>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900 border border-slate-800/80">
                      <span className="text-sm text-slate-300">Long-term Conversion</span>
                      <span className="text-sm font-bold text-blue-400">EU Blue Card / Work Permit</span>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900 border border-slate-800/80">
                      <span className="text-sm text-slate-300">Refund Guarantee</span>
                      <span className="text-sm font-bold text-emerald-400">100% Guaranteed</span>
                    </div>
                  </div>
                  <div className="p-3 rounded-xl bg-amber-950/40 border border-amber-800/50 text-xs text-amber-200 leading-snug">
                    🛡️ <em>If your visa application is denied, the entire Allwerks service fee (₹3,00,000) is refunded to you in full without admin deduction.</em>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* 4 Bottom Trust Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-4 text-center">
            <div className="text-2xl sm:text-3xl font-black text-amber-400">€800 - €1,400+</div>
            <div className="text-xs text-slate-400 font-medium mt-1">Monthly Ausbildung Stipend</div>
          </div>
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-4 text-center">
            <div className="text-2xl sm:text-3xl font-black text-emerald-400">6 Points</div>
            <div className="text-xs text-slate-400 font-medium mt-1">Opportunity Card Threshold</div>
          </div>
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-4 text-center">
            <div className="text-2xl sm:text-3xl font-black text-blue-400">100% Refund</div>
            <div className="text-xs text-slate-400 font-medium mt-1">On Visa Rejection Protected</div>
          </div>
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-4 text-center">
            <div className="text-2xl sm:text-3xl font-black text-purple-400">14 Days</div>
            <div className="text-xs text-slate-400 font-medium mt-1">On-Ground German Anmeldung</div>
          </div>
        </div>

      </div>
    </section>
  );
}
