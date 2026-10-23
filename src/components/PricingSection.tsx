"use client";

import React from "react";
import { 
  Check, 
  ShieldCheck, 
  ArrowRight, 
  Info,
  Lock
} from "lucide-react";

interface PricingSectionProps {
  onOpenConsultation: (service?: string) => void;
}

export default function PricingSection({ onOpenConsultation }: PricingSectionProps) {
  return (
    <section id="pricing" className="py-24 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-900 text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-200">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Fair Milestone Payments &bull; No Surprise Add-ons</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
            Transparent Pricing With Written Guarantees
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Many agencies demand 100% upfront fees and refuse refunds if anything goes wrong. At Allwerks, all service fees are tied to clear milestones, backed by a 100% refund policy if your Opportunity Card visa is refused.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          
          {/* Card 1: Ausbildung Package */}
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 flex flex-col justify-between card-shadow">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-100 text-blue-900 text-xs font-bold uppercase tracking-wider mb-4">
                Students & Young Seekers
              </div>
              <h3 className="text-2xl font-black text-slate-950">Ausbildung Germany Support</h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">
                Complete end-to-end guidance from India profile check to your company placement contract and first day of vocational school in Germany.
              </p>

              {/* Price display */}
              <div className="mt-6 p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Total Allwerks Service Fee</div>
                <div className="text-4xl sm:text-5xl font-black text-slate-950 mt-1">
                  €4,000 <span className="text-xs text-slate-500 font-normal">flat fee</span>
                </div>
                <div className="text-xs text-blue-900 font-semibold mt-1">Payable in 2 equal milestone instalments</div>
              </div>

              {/* Milestone Breakup */}
              <div className="mt-6 space-y-3">
                <div className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                  Payment Milestones:
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3.5 rounded-xl bg-white border border-slate-200">
                    <div className="text-blue-900 font-black text-lg">50% (€2,000)</div>
                    <div className="text-xs font-bold text-slate-900 mt-0.5">On Signing</div>
                    <div className="text-[11px] text-slate-500 mt-1">Eligibility, counseling, document prep & employer search</div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white border border-slate-200">
                    <div className="text-emerald-700 font-black text-lg">50% (€2,000)</div>
                    <div className="text-xs font-bold text-slate-900 mt-0.5">On Placement Offer</div>
                    <div className="text-[11px] text-slate-500 mt-1">Only after receiving placement contract / visa offer</div>
                  </div>
                </div>
              </div>

              {/* Features List */}
              <div className="mt-6 pt-6 border-t border-slate-200 space-y-2.5 text-xs sm:text-sm text-slate-700">
                {[
                  "Profile review & trade matching (Healthcare, IT, Trades)",
                  "Search and introductions to verified German training companies",
                  "German-standard Lebenslauf CV & tailor-made motivation letter",
                  "Mock interviews for employer and visa officer sessions",
                  "Complete national visa dossier filing & VFS appointment booking",
                  "Zero-broker fee accommodation assistance in Germany",
                  "Post-landing Anmeldung, bank account, and insurance onboarding",
                ].map((feat, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-blue-900 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8">
              <button
                onClick={() => onOpenConsultation("Ausbildung Support (€4,000)")}
                className="w-full py-4 px-6 rounded-xl bg-blue-900 hover:bg-slate-900 text-white font-bold text-sm shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Book Ausbildung Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Card 2: Opportunity Card Package */}
          <div className="bg-white border-2 border-amber-400 rounded-3xl p-8 flex flex-col justify-between card-shadow relative">
            <div className="absolute top-0 right-6 -translate-y-1/2 bg-amber-400 text-slate-950 text-xs font-black uppercase px-4 py-1.5 rounded-full shadow-xs tracking-wider flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4" />
              <span>100% Refund Protected</span>
            </div>

            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-4">
                Graduates & Working Professionals
              </div>
              <h3 className="text-2xl font-black text-slate-950">Opportunity Card (Chancenkarte)</h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">
                Full visa and job search program to live and work part-time in Germany for 1 year while securing a permanent role.
              </p>

              {/* Price display */}
              <div className="mt-6 p-5 rounded-2xl bg-amber-50/70 border border-amber-200">
                <div className="text-xs font-bold text-slate-600 uppercase tracking-wider">Total Allwerks Service Fee</div>
                <div className="text-4xl sm:text-5xl font-black text-slate-950 mt-1">
                  ₹ 3,00,000 <span className="text-xs text-slate-500 font-normal">all-inclusive</span>
                </div>
                <div className="text-xs text-emerald-700 font-bold mt-1 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5" /> 100% Refunded If Visa Is Refused
                </div>
              </div>

              {/* 4 Milestones */}
              <div className="mt-6 space-y-3">
                <div className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                  4 Fair Payment Milestones:
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-center">
                    <div className="text-blue-900 font-bold text-sm">10%</div>
                    <div className="text-[11px] text-slate-800 font-semibold">On Sign Up</div>
                    <div className="text-[10px] text-slate-500">₹30,000</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-center">
                    <div className="text-blue-900 font-bold text-sm">40%</div>
                    <div className="text-[11px] text-slate-800 font-semibold">Pre-Filing</div>
                    <div className="text-[10px] text-slate-500">₹1,20,000</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-center">
                    <div className="text-emerald-700 font-bold text-sm">40%</div>
                    <div className="text-[11px] text-slate-800 font-semibold">On Approval</div>
                    <div className="text-[10px] text-slate-500">₹1,20,000</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-center">
                    <div className="text-slate-800 font-bold text-sm">10%</div>
                    <div className="text-[11px] text-slate-800 font-semibold">On Landing</div>
                    <div className="text-[10px] text-slate-500">₹30,000</div>
                  </div>
                </div>
              </div>

              {/* Features List */}
              <div className="mt-6 pt-6 border-t border-slate-200 space-y-2.5 text-xs sm:text-sm text-slate-700">
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
                    <Check className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8">
              <button
                onClick={() => onOpenConsultation("Opportunity Card Package (₹3,00,000)")}
                className="w-full py-4 px-6 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Apply with 100% Refund Protection</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        {/* Third Party Costs Clarity */}
        <div className="mt-12 max-w-4xl mx-auto p-5 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-start gap-3">
          <Info className="w-5 h-5 text-blue-900 shrink-0 mt-0.5" />
          <div className="leading-relaxed">
            <strong>Honest Note On Third-Party & Government Fees:</strong> German visa fees (~€75-€100), language examination fees (Goethe/Telc), and personal living funds in your blocked account are paid directly by you to the relevant embassies, examination centres, and banks. Allwerks charges zero markup on third-party payments.
          </div>
        </div>

      </div>
    </section>
  );
}
