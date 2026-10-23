"use client";

import React, { useState } from "react";
import { 
  ArrowRight, 
  GraduationCap, 
  Briefcase, 
  ShieldCheck, 
  Check, 
  MapPin, 
  PhoneCall, 
  Star,
  Building,
  HeartHandshake
} from "lucide-react";

interface HeroProps {
  onOpenConsultation: (service?: string) => void;
}

export default function Hero({ onOpenConsultation }: HeroProps) {
  const [activeTab, setActiveTab] = useState<"ausbildung" | "opportunity">("ausbildung");

  return (
    <section className="relative bg-gradient-to-b from-slate-50 via-white to-slate-50/60 pt-10 pb-20 lg:pt-14 lg:pb-28 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Trust Tags */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-xs text-xs font-semibold text-slate-700">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>Officially Registered in Germany & India</span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-800">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>100% Service Fee Refund Protected</span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-semibold text-blue-800">
            <Building className="w-4 h-4 text-blue-600" />
            <span>On-Ground Support in Germany Included</span>
          </div>
        </div>

        {/* Headline */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 tracking-tight leading-tight">
            An honest, end-to-end pathway to study and work in <span className="text-blue-900 underline decoration-amber-400 decoration-wavy decoration-2">Germany</span>.
          </h1>
          <p className="mt-5 text-base sm:text-xl text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
            Most agencies disappear after your visa is stamped. Allwerks handles everything under one roof: from your first document in India to your German apartment, city registration (Anmeldung), and your first day at work.
          </p>
        </div>

        {/* Dual Track Switcher Cards */}
        <div className="max-w-5xl mx-auto">
          {/* Switcher Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 max-w-xl mx-auto">
            <button
              onClick={() => setActiveTab("ausbildung")}
              className={`flex items-center justify-center gap-2.5 py-3.5 px-5 rounded-2xl text-sm font-bold transition-all cursor-pointer border ${
                activeTab === "ausbildung"
                  ? "bg-blue-900 text-white border-blue-900 shadow-md"
                  : "bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50"
              }`}
            >
              <GraduationCap className="w-5 h-5 text-amber-400" />
              <span>Track 1: Ausbildung (Vocational)</span>
            </button>
            <button
              onClick={() => setActiveTab("opportunity")}
              className={`flex items-center justify-center gap-2.5 py-3.5 px-5 rounded-2xl text-sm font-bold transition-all cursor-pointer border ${
                activeTab === "opportunity"
                  ? "bg-slate-900 text-white border-slate-900 shadow-md"
                  : "bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50"
              }`}
            >
              <Briefcase className="w-5 h-5 text-amber-400" />
              <span>Track 2: Opportunity Card (Chancenkarte)</span>
            </button>
          </div>

          {/* Active Track Container */}
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 card-shadow">
            {activeTab === "ausbildung" ? (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Content Left (7 cols) */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-900 text-xs font-bold uppercase tracking-wider">
                    For 12th Pass, Diploma Holders & Young Seekers
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 leading-snug">
                    Paid Vocational Training: Earn €800 – €1,400+ Every Month With Zero Tuition Fees
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    Ausbildung is Germany&apos;s state-backed dual education system. You spend 3 to 4 days gaining hands-on paid experience at a German hospital or company, and 1 to 2 days studying at a state vocational school (Berufsschule).
                  </p>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div className="flex items-start gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">✓</div>
                      <span className="text-xs sm:text-sm text-slate-700">
                        <strong>Monthly Stipend:</strong> €800–€1,400+ to cover rent & food
                      </span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">✓</div>
                      <span className="text-xs sm:text-sm text-slate-700">
                        <strong>Zero Tuition Fees:</strong> The company sponsors your training
                      </span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">✓</div>
                      <span className="text-xs sm:text-sm text-slate-700">
                        <strong>High Job Retention:</strong> 85%+ convert to full-time permanent contracts
                      </span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">✓</div>
                      <span className="text-xs sm:text-sm text-slate-700">
                        <strong>Transparent Fee:</strong> €4,000 flat (50% on sign-up, 50% only on offer)
                      </span>
                    </div>
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={() => onOpenConsultation("Ausbildung in Germany")}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-900 hover:bg-slate-900 text-white font-bold text-sm shadow-md transition-all cursor-pointer"
                    >
                      <span>Explore Open Ausbildung Trades</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <a
                      href="#ausbildung"
                      className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm transition-all"
                    >
                      How The Dual System Works
                    </a>
                  </div>
                </div>

                {/* Real-world Snapshot Card Right (5 cols) */}
                <div className="lg:col-span-5 bg-slate-50 rounded-2xl border border-slate-200 p-5 space-y-4">
                  <div className="relative rounded-xl overflow-hidden aspect-4/3 bg-slate-200">
                    <img
                      src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80"
                      alt="Healthcare training in Germany"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-md text-[11px] font-bold text-slate-800 shadow-xs">
                      Nursing & Healthcare • Munich
                    </div>
                  </div>

                  <div className="space-y-2 pt-1 text-xs text-slate-600">
                    <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                      <span className="font-semibold text-slate-700">Typical Starting Allowance:</span>
                      <span className="font-bold text-emerald-700">€1,150 – €1,380 / month</span>
                    </div>
                    <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                      <span className="font-semibold text-slate-700">Course Duration:</span>
                      <span className="font-bold text-slate-900">3 Years (State Exam)</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-slate-700">Language Level Required:</span>
                      <span className="font-bold text-blue-900">German B1 / B2</span>
                    </div>
                  </div>

                  <div className="p-3 bg-white rounded-xl border border-slate-200 text-xs text-slate-600 flex items-start gap-2.5">
                    <HeartHandshake className="w-4 h-4 text-blue-900 shrink-0 mt-0.5" />
                    <span>
                      <em>&quot;Allwerks helped us secure an employer contract in Bavaria before applying for our visa in New Delhi.&quot;</em>
                    </span>
                  </div>
                </div>

              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Content Left (7 cols) */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-900 text-xs font-bold uppercase tracking-wider">
                    For Degree Holders & Skilled Professionals
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 leading-snug">
                    Germany Opportunity Card: Search For Jobs On The Ground Without An Employer Offer
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    The Opportunity Card (Chancenkarte) is Germany&apos;s premier points-based residence permit. Enter Germany for 1 year, attend in-person interviews, and work legally up to 20 hours per week while job hunting.
                  </p>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div className="flex items-start gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">✓</div>
                      <span className="text-xs sm:text-sm text-slate-700">
                        <strong>No Pre-Confirmed Job Needed:</strong> Search directly on-site
                      </span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">✓</div>
                      <span className="text-xs sm:text-sm text-slate-700">
                        <strong>Part-Time Work Rights:</strong> Work 20 hrs/week from day 1
                      </span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">✓</div>
                      <span className="text-xs sm:text-sm text-slate-700">
                        <strong>100% Refund Protection:</strong> ₹3,00,000 fee returned if refused
                      </span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">✓</div>
                      <span className="text-xs sm:text-sm text-slate-700">
                        <strong>EU Blue Card Route:</strong> Converts into permanent residency
                      </span>
                    </div>
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row gap-3">
                    <a
                      href="#calculator"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-900 hover:bg-slate-900 text-white font-bold text-sm shadow-md transition-all cursor-pointer"
                    >
                      <span>Check Your Points (6 Points Required)</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                    <button
                      onClick={() => onOpenConsultation("Opportunity Card (Chancenkarte)")}
                      className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm transition-all cursor-pointer"
                    >
                      Check Eligibility Free
                    </button>
                  </div>
                </div>

                {/* Real-world Snapshot Card Right (5 cols) */}
                <div className="lg:col-span-5 bg-slate-50 rounded-2xl border border-slate-200 p-5 space-y-4">
                  <div className="relative rounded-xl overflow-hidden aspect-4/3 bg-slate-200">
                    <img
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                      alt="Skilled professional working in Germany"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-md text-[11px] font-bold text-slate-800 shadow-xs">
                      IT & Engineering • Berlin / Frankfurt
                    </div>
                  </div>

                  <div className="space-y-2 pt-1 text-xs text-slate-600">
                    <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                      <span className="font-semibold text-slate-700">Initial Validity:</span>
                      <span className="font-bold text-slate-900">12 Months (Extendable)</span>
                    </div>
                    <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                      <span className="font-semibold text-slate-700">Qualifying Threshold:</span>
                      <span className="font-bold text-emerald-700">Minimum 6 Points (Route 2)</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-slate-700">Fee Milestone:</span>
                      <span className="font-bold text-blue-900">10% Signup, 40% Pre-file, 40% Approval</span>
                    </div>
                  </div>

                  <div className="p-3 bg-white rounded-xl border border-slate-200 text-xs text-slate-600 flex items-start gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>
                      <strong>Protected Guarantee:</strong> If the visa is rejected, Allwerks refunds 100% of our ₹3,00,000 fee in full.
                    </span>
                  </div>
                </div>

              </div>
            )}
          </div>
        </div>

        {/* 4 Bottom Authentic Statistics */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          <div className="bg-white border border-slate-200 rounded-2xl p-5 text-center shadow-xs">
            <div className="text-2xl sm:text-3xl font-extrabold text-blue-900">€800 – €1,400+</div>
            <div className="text-xs text-slate-500 font-medium mt-1">Monthly Ausbildung Allowance</div>
          </div>
          <div className="bg-white border border-slate-200 rounded-2xl p-5 text-center shadow-xs">
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">6 Points</div>
            <div className="text-xs text-slate-500 font-medium mt-1">Opportunity Card Threshold</div>
          </div>
          <div className="bg-white border border-slate-200 rounded-2xl p-5 text-center shadow-xs">
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-700">100% Refund</div>
            <div className="text-xs text-slate-500 font-medium mt-1">If Visa Is Denied (Guaranteed)</div>
          </div>
          <div className="bg-white border border-slate-200 rounded-2xl p-5 text-center shadow-xs">
            <div className="text-2xl sm:text-3xl font-extrabold text-amber-700">14 Days</div>
            <div className="text-xs text-slate-500 font-medium mt-1">On-Ground City Registration (Anmeldung)</div>
          </div>
        </div>

      </div>
    </section>
  );
}
