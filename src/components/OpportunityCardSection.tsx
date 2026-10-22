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
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 text-amber-800 text-xs sm:text-sm font-bold tracking-wide uppercase mb-4 border border-amber-200">
            <Briefcase className="w-4 h-4" />
            <span>Germany's Flagship Skilled Immigration Route</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
            Germany Opportunity Card (Chancenkarte)
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Move to Germany for <strong>1 full year</strong> to interview directly with employers. You do <em>not</em> need a job offer to apply, and you are legally allowed to work <strong>20 hours per week</strong> from Day 1.
          </p>
        </div>

        {/* Two Qualifying Routes Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-5xl mx-auto">
          
          {/* Route 1 */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider mb-4">
              Route 1
            </div>
            <h3 className="text-2xl font-black text-slate-900 mb-2">Direct Skilled Worker</h3>
            <p className="text-xs sm:text-sm text-slate-600 mb-6">
              For candidates whose university degree or vocational certificate is already fully recognized in Germany.
            </p>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span>Degree recognized via Anabin / ZAB statement of comparability</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span><strong>No points calculation needed</strong> — straightforward qualification</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span>Show proof of funds (blocked account) and health insurance</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span>Fastest processing route for qualifying candidates</span>
              </li>
            </ul>
          </div>

          {/* Route 2 */}
          <div className="bg-white rounded-3xl p-8 border-2 border-amber-400 shadow-md relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-amber-400 text-slate-950 text-[11px] font-black uppercase px-4 py-1 rounded-bl-xl tracking-wider">
              Most Indian Applicants
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-4">
              Route 2
            </div>
            <h3 className="text-2xl font-black text-slate-900 mb-2">Points-Based Qualification</h3>
            <p className="text-xs sm:text-sm text-slate-600 mb-6">
              For candidates with partially recognized qualifications who achieve the required points threshold.
            </p>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span><strong>Must score at least 6 points</strong> across age, experience, and language</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span>Points for German (A2–B2) or English (C1) proficiency</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span>Bonus points for shortage occupations (IT, STEM, Healthcare)</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span>Allwerks calculates your points & prepares your motivation dossier</span>
              </li>
            </ul>
          </div>

        </div>

        {/* 6 Key Benefits Grid */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950">
              Why Indian Professionals Choose The Opportunity Card
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Unlike generic job seeker visas, the Chancenkarte gives you legal working flexibility.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold mb-4">
                01
              </div>
              <h4 className="font-bold text-base text-slate-900">Job Search Without an Offer</h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">
                Enter Germany freely and attend in-person technical interviews directly on German soil.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold mb-4">
                02
              </div>
              <h4 className="font-bold text-base text-slate-900">Work 20 Hours / Week</h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">
                Take up part-time roles or trial employment periods up to 20 hours per week while hunting for your dream job.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold mb-4">
                03
              </div>
              <h4 className="font-bold text-base text-slate-900">Spouse & Family Relocation</h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">
                A spouse or partner who qualifies can apply alongside you, earning additional points on your dossier.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold mb-4">
                04
              </div>
              <h4 className="font-bold text-base text-slate-900">Access to Shortage Sectors</h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">
                Germany urgently needs skilled IT engineers, software architects, mechatronics technicians, and medical staff.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center font-bold mb-4">
                05
              </div>
              <h4 className="font-bold text-base text-slate-900">EU Blue Card Pathway</h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">
                Once an offer is secured, convert seamlessly into an EU Blue Card or full German work residence permit.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center font-bold mb-4">
                06
              </div>
              <h4 className="font-bold text-base text-slate-900">No Employer Sponsorship</h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">
                You control the entire process — you don&apos;t need to wait for a foreign company to sponsor your visa upfront.
              </p>
            </div>
          </div>
        </div>

        {/* 100% Refund Protection Banner */}
        <div className="rounded-3xl bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 p-8 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-500/30">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Allwerks 100% Money-Back Refund Commitment</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Zero Risk For You: Full Service Fee Refund If Refused
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              If your Opportunity Card visa application is denied, the entire Allwerks service fee (₹3,00,000) is refunded to you in full with no administration or processing deductions.
            </p>
          </div>
          <button
            onClick={() => onOpenConsultation("Opportunity Card Package")}
            className="shrink-0 px-6 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-sm shadow-lg shadow-amber-400/20 cursor-pointer transition-all flex items-center gap-2"
          >
            <span>Start Your Assessment</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
