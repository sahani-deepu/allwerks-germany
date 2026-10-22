"use client";

import React from "react";
import { 
  Building2, 
  MapPin, 
  Landmark, 
  ShieldPlus, 
  FileCheck2, 
  BriefcaseBusiness, 
  Home, 
  CheckCircle,
  Sparkles
} from "lucide-react";

export default function PostLandingSection() {
  const steps = [
    {
      num: 1,
      title: "Anmeldung (Address Registration)",
      icon: MapPin,
      badge: "Within First 14 Days",
      desc: "Mandatory registration at the local Bürgeramt (Citizen's Office). Without this official certificate (Meldebescheinigung), you cannot open a bank account or get a tax ID.",
    },
    {
      num: 2,
      title: "Zero-Broker First Accommodation",
      icon: Home,
      badge: "Safe & Ready on Arrival",
      desc: "Avoid Germany's fierce housing crisis and scam listings. We facilitate verified student rooms or apartments directly with no broker fee cut.",
    },
    {
      num: 3,
      title: "German Bank Account Setup",
      icon: Landmark,
      badge: "Essential for Salary",
      desc: "Assistance opening your checking account (Girokonto) with top institutions (N26, Deutsche Bank, Sparkasse) to receive your monthly stipend or salary.",
    },
    {
      num: 4,
      title: "Statutory Health Insurance Activation",
      icon: ShieldPlus,
      badge: "Full Healthcare Cover",
      desc: "Switch from temporary travel insurance to comprehensive German statutory health cover (TK, AOK, Barmer) recognized by German hospitals.",
    },
    {
      num: 5,
      title: "Tax ID (Steuer-ID) & Social Security",
      icon: FileCheck2,
      badge: "Automatic Issuance",
      desc: "Guidance on tracking your 11-digit Steuer-ID issued by the Federal Central Tax Office, ensuring your employer pays you on the correct tax bracket.",
    },
    {
      num: 6,
      title: "Job Coaching & Residence Card",
      icon: BriefcaseBusiness,
      badge: "Ongoing Mentorship",
      desc: "Booking your Ausländerbehörde appointment for the physical biometric card, plus ongoing coaching to navigate interviews and 20 hrs/week work rules.",
    },
  ];

  return (
    <section className="py-24 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs sm:text-sm font-bold tracking-wide uppercase mb-4 border border-emerald-200">
            <Building2 className="w-4 h-4" />
            <span>The Allwerks Difference</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
            Support That Doesn&apos;t Stop at the Airport
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Most Indian consultancies hand you a visa and vanish. Germany requires extensive municipal bureaucracy within your first 2 weeks. Our on-ground registered team helps you complete every essential step smoothly.
          </p>
        </div>

        {/* 6 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-emerald-400 hover:shadow-lg transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-600/10 text-emerald-700 flex items-center justify-center font-bold">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
                      {step.badge}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-200/60 flex items-center gap-1.5 text-xs text-slate-500 font-semibold">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>On-ground German assistance</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
