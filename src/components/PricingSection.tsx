"use client";

import React from "react";
import { 
  Check, 
  ShieldCheck, 
  ArrowRight, 
  Euro, 
  HelpCircle, 
  Info,
  Calendar,
  Lock,
  Sparkles
} from "lucide-react";

interface PricingSectionProps {
  onOpenConsultation: (service?: string) => void;
}

export default function PricingSection({ onOpenConsultation }: PricingSectionProps) {
  return (
    <section id="pricing" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-blue-600/10 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs sm:text-sm font-semibold text-emerald-400 mb-4">
            <ShieldCheck className="w-4 h-4" />
            <span>Transparent, Fixed Fees — Zero Surprise Costs</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
            Clear Investment. Milestone Payments.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Unlike local agents who charge hidden commissions or demand 100% upfront, Allwerks operates on clear milestone-based pricing with verified money-back refund protection.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          
          {/* Card 1: Ausbildung Package */}
          <div className="bg-slate-950/90 border border-slate-800 rounded-3xl p-8 flex flex-col justify-between shadow-xl relative">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider mb-4">
                Students & Young Seekers
              </div>
              <h3 className="text-2xl font-black text-white">Ausbildung Germany Support</h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Complete end-to-end guidance from India profile check to your company placement and first day of vocational school in Germany.
              </p>

              {/* Price display */}
              <div className="mt-6 p-5 rounded-2xl bg-slate-900 border border-slate-800/80">
                <div className="text-xs font-semibold text-slate-400 uppercase">Total Service Fee</div>
                <div className="text-4xl sm:text-5xl font-black text-white mt-1">
                  €4,000 <span className="text-xs text-slate-400 font-normal">flat</span>
                </div>
                <div className="text-xs text-blue-400 mt-1">Payable across 2 equal milestone stages</div>
              </div>

              {/* Milestone Breakup */}
              <div className="mt-6 space-y-3">
                <div className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                  Payment Milestones:
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                    <div className="text-amber-400 font-black text-lg">50% (€2,000)</div>
                    <div className="text-xs font-bold text-white mt-0.5">On Signing</div>
                    <div className="text-[11px] text-slate-400 mt-1">Eligibility, counseling, document prep & employer search</div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                    <div className="text-emerald-400 font-black text-lg">50% (€2,000)</div>
                    <div className="text-xs font-bold text-white mt-0.5">On Offer</div>
                    <div className="text-[11px] text-slate-400 mt-1">Only after receiving placement contract / visa offer</div>
                  </div>
                </div>
              </div>

              {/* Features List */}
              <div className="mt-6 pt-6 border-t border-slate-800/80 space-y-2.5 text-xs sm:text-sm text-slate-300">
                {[
                  "Profile review & sector matching (Healthcare, IT, Trades)",
                  "Verified training company (Ausbildungsbetrieb) placement search",
                  "German-compliant Lebenslauf CV & tailor-made motivation letter",
                  "Mock interviews for both employer and embassy visa sessions",
                  "Complete national visa dossier filing & VFS appointment booking",
                  "Zero-broker fee accommodation assistance in Germany",
                  "Post-landing Anmeldung, bank account, and insurance onboarding",
                ].map((feat, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8">
              <button
                onClick={() => onOpenConsultation("Ausbildung Support (€4,000)")}
                className="w-full py-4 px-6 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-lg shadow-blue-600/30 transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Book Ausbildung Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Card 2: Opportunity Card Package */}
          <div className="bg-gradient-to-b from-slate-950 via-slate-900 to-amber-950/20 border-2 border-amber-500/60 rounded-3xl p-8 flex flex-col justify-between shadow-2xl relative">
            <div className="absolute top-0 right-6 -translate-y-1/2 bg-amber-500 text-slate-950 text-xs font-black uppercase px-4 py-1.5 rounded-full shadow-md tracking-wider flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4" />
              <span>100% Refund Protected</span>
            </div>

            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider mb-4">
                Graduates & Working Professionals
              </div>
              <h3 className="text-2xl font-black text-white">Opportunity Card (Chancenkarte)</h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Full visa and job search program to live and work part-time in Germany for 1 year while securing a permanent role.
              </p>

              {/* Price display */}
              <div className="mt-6 p-5 rounded-2xl bg-slate-900 border border-amber-500/30">
                <div className="text-xs font-semibold text-slate-400 uppercase">Total Service Fee</div>
                <div className="text-4xl sm:text-5xl font-black text-amber-400 mt-1">
                  ₹ 3,00,000 <span className="text-xs text-slate-400 font-normal">all-inclusive</span>
                </div>
                <div className="text-xs text-emerald-400 font-semibold mt-1 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5" /> 100% Refunded If Visa Refused
                </div>
              </div>

              {/* 4 Milestones */}
              <div className="mt-6 space-y-3">
                <div className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                  4 Fair Payment Milestones:
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-center">
                    <div className="text-amber-400 font-bold text-sm">10%</div>
                    <div className="text-[11px] text-white font-semibold">On Sign Up</div>
                    <div className="text-[10px] text-slate-400">₹30,000</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-center">
                    <div className="text-amber-400 font-bold text-sm">40%</div>
                    <div className="text-[11px] text-white font-semibold">Pre-Filing</div>
                    <div className="text-[10px] text-slate-400">₹1,20,000</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-center">
                    <div className="text-emerald-400 font-bold text-sm">40%</div>
                    <div className="text-[11px] text-white font-semibold">On Approval</div>
                    <div className="text-[10px] text-slate-400">₹1,20,000</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-center">
                    <div className="text-blue-400 font-bold text-sm">10%</div>
                    <div className="text-[11px] text-white font-semibold">On Landing</div>
                    <div className="text-[10px] text-slate-400">₹30,000</div>
                  </div>
                </div>
              </div>

              {/* Features List */}
              <div className="mt-6 pt-6 border-t border-slate-800/80 space-y-2.5 text-xs sm:text-sm text-slate-300">
                {[
                  "Official Points calculation & qualification assessment (ZAB/Anabin)",
                  "Customized Opportunity Card Motivation Letter drafted for embassy",
                  "Blocked account & approved health insurance setup advisory",
                  "Consular portal VIDEX form filing & VFS appointment booked",
                  "Full 100% refund of ₹3,00,000 if visa application is denied",
                  "Anmeldung address registration support within 14 days of landing",
                  "German bank account opening & Tax ID (Steuer-ID) guidance",
                  "Local German job search coaching until you are placed",
                ].map((feat, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8">
              <button
                onClick={() => onOpenConsultation("Opportunity Card Package (₹3,00,000)")}
                className="w-full py-4 px-6 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-sm shadow-lg shadow-amber-400/20 transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Apply with 100% Refund Protection</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        {/* Third Party Costs Transparency Note */}
        <div className="mt-12 max-w-4xl mx-auto p-5 rounded-2xl bg-slate-950/60 border border-slate-800 text-xs text-slate-400 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-slate-300 block mb-0.5">Government & Third-Party Fees:</span>
              German visa fees (consulate & VFS), language institute fees, and personal living expense blocked account deposits are paid directly to issuing government authorities / institutes with zero Allwerks commission.
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
