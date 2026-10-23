"use client";

import React from "react";
import { 
  Briefcase, 
  Clock, 
  ShieldCheck, 
  FileText, 
  CheckCircle2, 
  ArrowRight, 
  Users, 
  Building2, 
  MapPin,
  TrendingUp,
  FileCheck
} from "lucide-react";

interface OpportunityCardSectionProps {
  onOpenConsultation: (service?: string) => void;
}

export default function OpportunityCardSection({ onOpenConsultation }: OpportunityCardSectionProps) {
  return (
    <section id="opportunity-card" className="py-24 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-4 border border-amber-200">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Germany&apos;s Skilled Immigration Route</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
            How The Opportunity Card (Chancenkarte) Works
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            In the past, you needed an employer in Germany to sponsor you before you could set foot in the country. The <strong>Chancenkarte</strong> changed German immigration law: you receive a <strong>1-year national residence permit</strong> to live in Germany, interview on-site, and work part-time up to <strong>20 hours per week</strong> while looking for your permanent role.
          </p>
        </div>

        {/* Route 1 vs Route 2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-5xl mx-auto">
          
          {/* Route 1 */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200 card-shadow flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 text-blue-900 text-xs font-bold uppercase tracking-wider mb-4">
                Route 1 • Direct Skilled Worker
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-2">
                Degree Already Recognized
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                If your university degree is already fully recognized as equivalent in Germany via the Anabin/ZAB database.
              </p>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Zero points calculation needed:</strong> You qualify directly under federal law.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Show standard proof of financial sustenance (blocked account) and health cover.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Fastest processing route through the German Consular Portal.</span>
                </li>
              </ul>
            </div>
            <div className="pt-6 mt-6 border-t border-slate-100">
              <span className="text-xs text-slate-500 block">We confirm your degree equivalence via official databases.</span>
            </div>
          </div>

          {/* Route 2 */}
          <div className="bg-white rounded-3xl p-8 border-2 border-amber-400 card-shadow flex flex-col justify-between relative">
            <div className="absolute top-0 right-0 bg-amber-400 text-slate-950 text-[11px] font-black uppercase px-3 py-1 rounded-bl-xl tracking-wider">
              Most Indian Applicants
            </div>
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-50 text-amber-900 text-xs font-bold uppercase tracking-wider mb-4">
                Route 2 • Points-Based Pathway
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-2">
                Must Score At Least 6 Points
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                If your degree is partially recognized or you are combining work experience, language proficiency, and age.
              </p>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span><strong>Score 6+ points</strong> from recognized degree (4 pts), experience (2-3 pts), language (1-3 pts), and age (1-2 pts).</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>English (C1) or German (A2–B2) recognized for points.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>Full motivation dossier & embassy compilation managed by Allwerks.</span>
                </li>
              </ul>
            </div>
            <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-bold text-amber-900">Protected by 100% Refund Guarantee</span>
              <a href="#calculator" className="text-xs font-bold text-blue-900 hover:underline">
                Use Calculator &rarr;
              </a>
            </div>
          </div>

        </div>

        {/* Real Practical Features Grid */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl font-black text-slate-950">
              Key Protections & Practical Realities
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              What actually happens once you hold an Opportunity Card in Germany:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 card-shadow">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-900 flex items-center justify-center font-bold mb-4">
                01
              </div>
              <h4 className="font-bold text-base text-slate-900">Interview In-Person</h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                German hiring managers prioritize candidates who are already in Frankfurt, Munich, or Berlin over overseas resumes.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 card-shadow">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-900 flex items-center justify-center font-bold mb-4">
                02
              </div>
              <h4 className="font-bold text-base text-slate-900">Work 20 Hours / Week</h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                You can take up secondary part-time work or 2-week trial employment (Probearbeit) legally to earn while job hunting.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 card-shadow">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-900 flex items-center justify-center font-bold mb-4">
                03
              </div>
              <h4 className="font-bold text-base text-slate-900">Spouse Can Join</h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                A qualifying spouse can apply alongside you, earning an extra point on your dossier and coming together.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 card-shadow">
              <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-900 flex items-center justify-center font-bold mb-4">
                04
              </div>
              <h4 className="font-bold text-base text-slate-900">Shortage Sector Hiring</h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                Germany has over 600,000 unfilled vacancies across Software Engineering, Cloud, Mechanical, Electrical, and Healthcare.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 card-shadow">
              <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-900 flex items-center justify-center font-bold mb-4">
                05
              </div>
              <h4 className="font-bold text-base text-slate-900">Direct EU Blue Card</h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                When you sign a qualifying employment offer in Germany, you seamlessly transition into an EU Blue Card or work permit on-site.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 card-shadow">
              <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-900 flex items-center justify-center font-bold mb-4">
                06
              </div>
              <h4 className="font-bold text-base text-slate-900">No Employer Dependent Visa</h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                The permit is issued to YOU directly. You are not trapped by a single overseas employer&apos;s sponsorship whims.
              </p>
            </div>
          </div>
        </div>

        {/* 100% Refund Commitment Box */}
        <div className="bg-slate-900 rounded-3xl p-8 sm:p-10 text-white max-w-5xl mx-auto shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-500/30">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Written Refund Commitment</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Full ₹3,00,000 Service Fee Refund If Denied
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
              We stand behind our eligibility assessments. If your visa application is denied by the German Embassy or Consulate, Allwerks refunds our full ₹3,00,000 service fee back to you with zero administrative deductions.
            </p>
          </div>
          <button
            onClick={() => onOpenConsultation("Opportunity Card Package")}
            className="shrink-0 px-6 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-sm shadow-md transition-all cursor-pointer flex items-center gap-2"
          >
            <span>Start Free Profile Review</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
