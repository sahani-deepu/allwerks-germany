"use client";

import React, { useState } from "react";
import { 
  CheckCircle2, 
  MapPin, 
  FileCheck, 
  MessageSquare, 
  Building2, 
  PlaneTakeoff, 
  Home, 
  Landmark, 
  Award,
  ArrowRight,
  ShieldAlert
} from "lucide-react";

export default function RoadmapSection() {
  const [activePhase, setActivePhase] = useState<"india" | "germany">("india");

  const stagesIndia = [
    {
      num: 1,
      title: "Discovery Call & Profile Assessment",
      desc: "Initial consultation to understand your academic background, career interests, and goals. Honest review of fitting trades or visa pathways.",
    },
    {
      num: 2,
      title: "Information Form & Eligibility Check",
      desc: "Detailed evaluation covering education, work history, language proficiency, and verification against current German immigration guidelines.",
    },
    {
      num: 3,
      title: "Counseling & Pathway Selection",
      desc: "One-on-one session to shortlist target sectors, German federal states/regions, and agree on a realistic roadmap before any commitment.",
    },
    {
      num: 4,
      title: "Sign-Up & Service Agreement",
      desc: "Formal transparent agreement signed. Dedicated case manager assigned as your single point of contact from start to finish.",
    },
    {
      num: 5,
      title: "Document Collection & Verification",
      desc: "Verification and attestation guidance for academic marks sheets, degree certificates, and ZAB / Anabin equivalence statements.",
    },
    {
      num: 6,
      title: "Language Advisory & Facilitation",
      desc: "Guidance on acquiring German A1 through B1/B2 certifications. Direct enrollment with authorized language institutes with zero agent markup.",
    },
    {
      num: 7,
      title: "Company Search & Placement (Ausbildung)",
      desc: "Active search and direct introductions to verified German Ausbildungsbetriebe. Multi-channel applications managed on your behalf.",
    },
    {
      num: 8,
      title: "CV, Motivation Letter & Mock Interviews",
      desc: "Professionally drafted, embassy-compliant German CV (Lebenslauf), customized motivation letters, and mock interviews for employers & visa officers.",
    },
    {
      num: 9,
      title: "Visa Application Filing & VFS Booking",
      desc: "VIDEX form filing, consular document dossier compilation, and priority VFS appointment scheduling.",
    },
  ];

  const stagesGermany = [
    {
      num: 10,
      title: "Visa Decision & Pre-Departure Briefing",
      desc: "Guidance through embassy visa collection, flight logistics, climate preparation, and comprehensive first-week survival checklist.",
    },
    {
      num: 11,
      title: "Zero-Broker Accommodation Assistance",
      desc: "We help you secure your verified room or apartment in Germany before flying — saving thousands in broker commissions.",
    },
    {
      num: 12,
      title: "Post-Landing Onboarding (First 14 Days)",
      desc: "Direct support for mandatory City Registration (Anmeldung), German bank account opening, statutory health insurance activation, and Tax ID (Steuer-ID).",
    },
    {
      num: 13,
      title: "Commencement & Ongoing Settling Support",
      desc: "Hands-on guidance as you start your Ausbildung or job interviews, with continuous advisor access through your settling-in period.",
    },
  ];

  return (
    <section id="process" className="py-24 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 text-slate-800 text-xs sm:text-sm font-bold tracking-wide uppercase mb-4 border border-slate-200">
            <span>End-to-End Continuity</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
            Your 13-Stage Complete Journey
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            A single, continuous process managed by one dedicated Allwerks case manager. Nothing falls through the cracks between &quot;visa agent&quot;, &quot;placement agent&quot;, and &quot;relocation coordinator&quot;.
          </p>
        </div>

        {/* Phase Toggle */}
        <div className="max-w-md mx-auto mb-12 p-1.5 rounded-2xl bg-slate-100 border border-slate-200 flex">
          <button
            onClick={() => setActivePhase("india")}
            className={`flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activePhase === "india"
                ? "bg-white text-blue-700 shadow-sm"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Stages 1 – 9: In India
          </button>
          <button
            onClick={() => setActivePhase("germany")}
            className={`flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activePhase === "germany"
                ? "bg-white text-emerald-700 shadow-sm"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Stages 10 – 13: In Germany 🇩🇪
          </button>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {(activePhase === "india" ? stagesIndia : stagesGermany).map((stage) => (
            <div
              key={stage.num}
              className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-blue-300 transition-all shadow-xs flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className={`w-9 h-9 rounded-xl flex items-center justify-center font-black text-sm ${
                    stage.num >= 10
                      ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/20"
                      : "bg-blue-600 text-white shadow-md shadow-blue-600/20"
                  }`}>
                    {stage.num}
                  </span>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    {stage.num >= 10 ? "On-Ground Germany" : "Pre-Departure"}
                  </span>
                </div>
                <h4 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {stage.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  {stage.desc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-200/60 flex items-center gap-1.5 text-xs font-semibold text-slate-500">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                <span>Handled by Allwerks Dedicated Advisor</span>
              </div>
            </div>
          ))}
        </div>

        {/* On-Ground Difference Callout */}
        <div className="mt-14 max-w-4xl mx-auto p-6 rounded-2xl bg-amber-50/70 border border-amber-200/80 flex items-start gap-4">
          <div className="p-2.5 rounded-xl bg-amber-100 text-amber-800 shrink-0">
            <Home className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-sm sm:text-base font-bold text-slate-900">
              Why Stages 10 to 13 Make Allwerks Unique
            </h4>
            <p className="text-xs sm:text-sm text-slate-700 mt-1 leading-relaxed">
              Most Indian consultancies disappear the minute your visa is stamped. Allwerks has an official registered presence in Germany. We stand with you during the critical first 14 days when <em>Anmeldung</em> (city address registration) and <em>Steuer-ID</em> are mandatory to open your bank account and begin earning.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
