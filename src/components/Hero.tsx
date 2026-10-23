"use client";

import React, { useState } from "react";
import { 
  ArrowRight, 
  GraduationCap, 
  Briefcase, 
  ShieldCheck, 
  Check, 
  Building,
  HeartHandshake
} from "lucide-react";

interface HeroProps {
  onOpenConsultation: (service?: string) => void;
}

export default function Hero({ onOpenConsultation }: HeroProps) {
  const [activeTab, setActiveTab] = useState<"ausbildung" | "opportunity">("ausbildung");

  return (
    <section className="relative bg-gradient-to-b from-slate-50/70 via-white to-slate-50/40 pt-12 pb-20 lg:pt-16 lg:pb-24 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Eyebrow Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-semibold text-slate-700 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            <span>Registered in Germany & India</span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50/80 border border-emerald-200 text-xs font-semibold text-emerald-800">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>100% Fee Refund on Visa Rejection</span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50/80 border border-blue-200 text-xs font-semibold text-blue-800">
            <Building className="w-3.5 h-3.5 text-blue-700" />
            <span>On-Ground Team in Frankfurt & Delhi</span>
          </div>
        </div>

        {/* Refined, Balanced Headline (No longer bulky/chunky!) */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h1 className="text-2xl sm:text-4xl lg:text-[44px] font-bold text-slate-900 tracking-tight leading-[1.2]">
            An honest, end-to-end pathway to study and work in <span className="text-blue-900 font-extrabold">Germany</span>.
          </h1>
          <p className="mt-4 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
            Most agencies disappear once your visa is stamped. Allwerks manages your complete transition: from profile evaluation and employer interviews to your German flat, city registration (Anmeldung), and first day at work.
          </p>
        </div>

        {/* Dual Track Switcher */}
        <div className="max-w-4xl mx-auto">
          {/* Switcher Pills */}
          <div className="inline-flex p-1 rounded-2xl bg-slate-100 border border-slate-200 mb-6 mx-auto w-full sm:w-auto flex justify-center">
            <div className="grid grid-cols-2 gap-1 w-full sm:w-auto">
              <button
                onClick={() => setActiveTab("ausbildung")}
                className={`flex items-center justify-center gap-2 py-2.5 px-5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeTab === "ausbildung"
                    ? "bg-white text-blue-950 shadow-xs font-bold"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <GraduationCap className="w-4 h-4 text-blue-700" />
                <span>Track 1: Ausbildung (Students)</span>
              </button>
              <button
                onClick={() => setActiveTab("opportunity")}
                className={`flex items-center justify-center gap-2 py-2.5 px-5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeTab === "opportunity"
                    ? "bg-white text-slate-950 shadow-xs font-bold"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <Briefcase className="w-4 h-4 text-amber-600" />
                <span>Track 2: Opportunity Card (Professionals)</span>
              </button>
            </div>
          </div>

          {/* Active Track Container */}
          <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-9 shadow-xs hover:shadow-sm transition-shadow">
            {activeTab === "ausbildung" ? (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Content Left (7 cols) */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-blue-50 text-blue-900 text-xs font-semibold tracking-wide uppercase">
                    For 12th Pass, Diploma & Young Seekers
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                    Paid Vocational Training: Earn €800 – €1,400+ Monthly With Zero Tuition Fees
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    Ausbildung is Germany&apos;s dual education system. Trainees spend 3 to 4 days gaining paid on-the-job experience at a hospital or company, and 1 to 2 days studying at a state vocational school (Berufsschule).
                  </p>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                    <div className="flex items-start gap-2">
                      <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 font-bold text-[10px]">✓</div>
                      <span className="text-xs text-slate-700">
                        <strong>Monthly Stipend:</strong> €800–€1,400+ to cover rent & food
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 font-bold text-[10px]">✓</div>
                      <span className="text-xs text-slate-700">
                        <strong>Zero Tuition:</strong> Host company sponsors your training
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 font-bold text-[10px]">✓</div>
                      <span className="text-xs text-slate-700">
                        <strong>Direct Employment:</strong> 85%+ convert to permanent staff
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 font-bold text-[10px]">✓</div>
                      <span className="text-xs text-slate-700">
                        <strong>Transparent Fee:</strong> €4,000 (50% signup, 50% on offer)
                      </span>
                    </div>
                  </div>

                  <div className="pt-3 flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={() => onOpenConsultation("Ausbildung in Germany")}
                      className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-blue-900 hover:bg-slate-900 text-white font-semibold text-xs tracking-wide uppercase shadow-xs transition-all cursor-pointer"
                    >
                      <span>Explore Open Trades</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    <a
                      href="#ausbildung"
                      className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium text-xs transition-all"
                    >
                      How The Dual System Works
                    </a>
                  </div>
                </div>

                {/* Right Card (5 cols) */}
                <div className="lg:col-span-5 bg-slate-50 rounded-2xl border border-slate-200 p-4 space-y-3.5">
                  <div className="relative rounded-xl overflow-hidden aspect-16/10 bg-slate-200">
                    <img
                      src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=700&q=80"
                      alt="Healthcare training in Germany"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2.5 left-2.5 bg-white/95 backdrop-blur-md px-2 py-0.5 rounded text-[11px] font-bold text-slate-800 shadow-xs">
                      Healthcare & Nursing &bull; Munich
                    </div>
                  </div>

                  <div className="space-y-1.5 text-xs text-slate-600">
                    <div className="flex items-center justify-between pb-1.5 border-b border-slate-200/80">
                      <span className="text-slate-600">Typical Starting Allowance:</span>
                      <span className="font-bold text-emerald-700">€1,150 – €1,380 / month</span>
                    </div>
                    <div className="flex items-center justify-between pb-1.5 border-b border-slate-200/80">
                      <span className="text-slate-600">Duration:</span>
                      <span className="font-bold text-slate-800">3 Years (State Exam)</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-600">Language Requirement:</span>
                      <span className="font-bold text-blue-900">German B1 / B2</span>
                    </div>
                  </div>

                  <div className="p-2.5 bg-white rounded-xl border border-slate-200 text-[11px] text-slate-600 flex items-start gap-2">
                    <HeartHandshake className="w-3.5 h-3.5 text-blue-900 shrink-0 mt-0.5" />
                    <span>
                      <em>&quot;Allwerks secured my employer contract in Bavaria before applying for the visa in Delhi.&quot;</em>
                    </span>
                  </div>
                </div>

              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Content Left (7 cols) */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-amber-50 text-amber-900 text-xs font-semibold tracking-wide uppercase">
                    For Degree Holders & Skilled Professionals
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                    Opportunity Card: Search Jobs On The Ground Without An Employer Offer
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    The Opportunity Card (Chancenkarte) is Germany&apos;s points-based residence permit. Enter Germany for 1 year, attend in-person interviews, and work legally up to 20 hours per week while job hunting.
                  </p>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                    <div className="flex items-start gap-2">
                      <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 font-bold text-[10px]">✓</div>
                      <span className="text-xs text-slate-700">
                        <strong>No Offer Needed:</strong> Search directly on-site in Germany
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 font-bold text-[10px]">✓</div>
                      <span className="text-xs text-slate-700">
                        <strong>Work Rights:</strong> Work legally 20 hrs/week from day 1
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 font-bold text-[10px]">✓</div>
                      <span className="text-xs text-slate-700">
                        <strong>100% Refund:</strong> ₹3,00,000 returned in full if denied
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 font-bold text-[10px]">✓</div>
                      <span className="text-xs text-slate-700">
                        <strong>EU Blue Card Route:</strong> Converts into permanent residency
                      </span>
                    </div>
                  </div>

                  <div className="pt-3 flex flex-col sm:flex-row gap-3">
                    <a
                      href="#calculator"
                      className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-blue-950 text-white font-semibold text-xs tracking-wide uppercase shadow-xs transition-all cursor-pointer"
                    >
                      <span>Check Your Points (6 Required)</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                    <button
                      onClick={() => onOpenConsultation("Opportunity Card (Chancenkarte)")}
                      className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium text-xs transition-all cursor-pointer"
                    >
                      Check Eligibility Free
                    </button>
                  </div>
                </div>

                {/* Right Card (5 cols) */}
                <div className="lg:col-span-5 bg-slate-50 rounded-2xl border border-slate-200 p-4 space-y-3.5">
                  <div className="relative rounded-xl overflow-hidden aspect-16/10 bg-slate-200">
                    <img
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=700&q=80"
                      alt="Skilled professional in Germany"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2.5 left-2.5 bg-white/95 backdrop-blur-md px-2 py-0.5 rounded text-[11px] font-bold text-slate-800 shadow-xs">
                      IT & Engineering &bull; Berlin / Frankfurt
                    </div>
                  </div>

                  <div className="space-y-1.5 text-xs text-slate-600">
                    <div className="flex items-center justify-between pb-1.5 border-b border-slate-200/80">
                      <span className="text-slate-600">Initial Validity:</span>
                      <span className="font-bold text-slate-800">12 Months (Extendable)</span>
                    </div>
                    <div className="flex items-center justify-between pb-1.5 border-b border-slate-200/80">
                      <span className="text-slate-600">Threshold:</span>
                      <span className="font-bold text-emerald-700">Minimum 6 Points (Route 2)</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-600">Fee Structure:</span>
                      <span className="font-bold text-blue-900">10% Signup, 40% Pre-file, 40% Approval</span>
                    </div>
                  </div>

                  <div className="p-2.5 bg-white rounded-xl border border-slate-200 text-[11px] text-slate-600 flex items-start gap-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>
                      <strong>Protected Guarantee:</strong> If the visa is rejected, Allwerks refunds 100% of our ₹3,00,000 fee in full.
                    </span>
                  </div>
                </div>

              </div>
            )}
          </div>
        </div>

        {/* 4 Bottom Authentic Statistics - Compact & Crisp */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto">
          <div className="bg-white border border-slate-200 rounded-xl p-4 text-center shadow-xs">
            <div className="text-xl sm:text-2xl font-bold text-blue-900">€800 – €1,400+</div>
            <div className="text-[11px] text-slate-500 font-medium mt-0.5">Monthly Ausbildung Allowance</div>
          </div>
          <div className="bg-white border border-slate-200 rounded-xl p-4 text-center shadow-xs">
            <div className="text-xl sm:text-2xl font-bold text-slate-900">6 Points</div>
            <div className="text-[11px] text-slate-500 font-medium mt-0.5">Opportunity Card Threshold</div>
          </div>
          <div className="bg-white border border-slate-200 rounded-xl p-4 text-center shadow-xs">
            <div className="text-xl sm:text-2xl font-bold text-emerald-700">100% Refund</div>
            <div className="text-[11px] text-slate-500 font-medium mt-0.5">If Visa Is Denied (Guaranteed)</div>
          </div>
          <div className="bg-white border border-slate-200 rounded-xl p-4 text-center shadow-xs">
            <div className="text-xl sm:text-2xl font-bold text-amber-700">14 Days</div>
            <div className="text-[11px] text-slate-500 font-medium mt-0.5">City Registration (Anmeldung)</div>
          </div>
        </div>

      </div>
    </section>
  );
}
