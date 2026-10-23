"use client";

import React, { useState } from "react";
import { 
  Check, 
  MapPin, 
  FileCheck, 
  MessageSquare, 
  Building2, 
  PlaneTakeoff, 
  Home, 
  Landmark, 
  Award,
  ArrowRight
} from "lucide-react";

export default function RoadmapSection() {
  const [activePhase, setActivePhase] = useState<"india" | "germany">("india");

  const stagesIndia = [
    {
      num: 1,
      title: "Discovery Call & Profile Assessment",
      desc: "An initial 1-on-1 consultation to understand your academic background, career goals, and realistic chances before any commitment is made.",
    },
    {
      num: 2,
      title: "Information Form & Eligibility Verification",
      desc: "Detailed screening of your marks sheets, experience letters, and German language level against current immigration regulations.",
    },
    {
      num: 3,
      title: "Counseling & Target Pathway Selection",
      desc: "Shortlisting suitable trades or visa pathways, target federal states (Länder) in Germany, and agreeing upon a realistic timeline.",
    },
    {
      num: 4,
      title: "Sign-Up & Dedicated Case Manager",
      desc: "Formal transparent service agreement signed. A dedicated personal case manager is assigned to coordinate your entire journey.",
    },
    {
      num: 5,
      title: "Document Verification & Attestation Guidance",
      desc: "Guidance through Apostille, notary, translation, and ZAB / Anabin equivalence statements required by German authorities.",
    },
    {
      num: 6,
      title: "Language Advisory (A1 to B1/B2)",
      desc: "Advice on target language certifications. Enrolment and fee payments are made directly by you to recognized schools with zero agent markups.",
    },
    {
      num: 7,
      title: "German Employer & Ausbildungsbetrieb Matching",
      desc: "Direct introductions to verified German training companies and employers actively hiring international trainees and skilled workers.",
    },
    {
      num: 8,
      title: "German Lebenslauf CV & Motivation Letter",
      desc: "Drafting an embassy-standard German resume and tailored Statement of Purpose, plus mock interviews with our team before employer calls.",
    },
    {
      num: 9,
      title: "Consular Visa Filing & VFS Appointment",
      desc: "Compiling the complete national visa dossier (VIDEX form, motivation statement, health cover) and booking your VFS appointment slot.",
    },
  ];

  const stagesGermany = [
    {
      num: 10,
      title: "Visa Decision & Pre-Departure Briefing",
      desc: "Guidance on collecting your passport, packing checklist for German seasons, health insurance switch, and travel logistics.",
    },
    {
      num: 11,
      title: "Zero-Broker Accommodation Facilitation",
      desc: "Helping you secure verified student housing or an apartment in your target German city before flying — saving you from local broker commissions.",
    },
    {
      num: 12,
      title: "Post-Landing Onboarding (First 14 Days)",
      desc: "Hands-on assistance for City Address Registration (Anmeldung), German checking account (Girokonto), Tax ID (Steuer-ID), and statutory insurance.",
    },
    {
      num: 13,
      title: "Commencement & Ongoing Mentorship",
      desc: "Continued guidance as you begin your Ausbildung or job search, with direct access to our German advisors throughout your settling-in period.",
    },
  ];

  return (
    <section id="process" className="py-24 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider mb-4">
            <span>A Seamless Continuous Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
            The 13 Stages: From India To Germany
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            One dedicated Allwerks case manager coordinates every single step below. You never have to juggle between separate visa agents, language teachers, and housing brokers.
          </p>
        </div>

        {/* Phase Switcher */}
        <div className="max-w-md mx-auto mb-12 p-1 rounded-2xl bg-slate-200/80 flex">
          <button
            onClick={() => setActivePhase("india")}
            className={`flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activePhase === "india"
                ? "bg-white text-blue-900 shadow-sm"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Stages 1 to 9 • In India
          </button>
          <button
            onClick={() => setActivePhase("germany")}
            className={`flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activePhase === "germany"
                ? "bg-white text-emerald-900 shadow-sm"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Stages 10 to 13 • In Germany 🇩🇪
          </button>
        </div>

        {/* Stages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {(activePhase === "india" ? stagesIndia : stagesGermany).map((stage) => (
            <div
              key={stage.num}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 card-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className={`w-9 h-9 rounded-xl flex items-center justify-center font-black text-sm ${
                    stage.num >= 10
                      ? "bg-emerald-100 text-emerald-800 font-bold"
                      : "bg-blue-100 text-blue-900 font-bold"
                  }`}>
                    {stage.num}
                  </span>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    {stage.num >= 10 ? "Germany On-Ground" : "Pre-Departure (India)"}
                  </span>
                </div>
                
                <h3 className="text-base sm:text-lg font-bold text-slate-900">
                  {stage.title}
                </h3>
                
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  {stage.desc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-slate-500">
                <div className="w-3.5 h-3.5 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[9px] font-bold">✓</div>
                <span>Managed directly by Allwerks advisor</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
