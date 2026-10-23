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
  Check, 
  AlertTriangle,
  HeartHandshake
} from "lucide-react";

export default function PostLandingSection() {
  const steps = [
    {
      num: 1,
      title: "Anmeldung (City Address Registration)",
      icon: MapPin,
      badge: "Mandatory Within 14 Days",
      desc: "In Germany, by federal law (Bundesmeldegesetz), you must register your residential address at the local Bürgeramt within 14 days of landing. Without this paper (Meldebescheinigung), you cannot open a bank account, get a tax ID, or receive salary.",
      howWeHelp: "We assist in securing the landlord confirmation (Wohnungsgeberbestätigung) and booking early appointment slots.",
    },
    {
      num: 2,
      title: "Zero-Broker First Accommodation",
      icon: Home,
      badge: "Safe From German Housing Scams",
      desc: "Germany is undergoing an acute housing crisis (Wohnungsnot). Scammers target international newcomers on unverified forums asking for deposits before arrival.",
      howWeHelp: "Allwerks facilitates verified student rooms (WGs) or furnished apartments with zero broker commission.",
    },
    {
      num: 3,
      title: "German Checking Account (Girokonto)",
      icon: Landmark,
      badge: "To Receive Stipend / Salary",
      desc: "You need a local IBAN (Deutsche Bank, Sparkasse, N26, or Commerzbank) to unfreeze your blocked account allowance and receive company salaries.",
      howWeHelp: "Step-by-step assistance in opening your resident bank account post-Anmeldung.",
    },
    {
      num: 4,
      title: "Statutory Health Insurance Activation",
      icon: ShieldPlus,
      badge: "Full Healthcare Card (eGK)",
      desc: "Travel insurance from India expires upon arrival. You must convert to comprehensive German statutory health funds (TK, AOK, or Barmer).",
      howWeHelp: "Direct onboarding into official German health funds so you are fully covered for medical care from day one.",
    },
    {
      num: 5,
      title: "Tax ID (Steuer-ID) & Social Security",
      icon: FileCheck2,
      badge: "Issued by Central Tax Office",
      desc: "Your 11-digit Steuer-ID determines your tax bracket (Steuerklasse). If missing, your employer is legally forced to deduct maximum emergency taxes.",
      howWeHelp: "We track your municipal issuance and ensure your employer enters the proper tax bracket.",
    },
    {
      num: 6,
      title: "Ausländerbehörde & Job Coaching",
      icon: BriefcaseBusiness,
      badge: "Biometric Card & Interviews",
      desc: "Booking your Foreigners' Registration Office appointment for your physical residence permit card, plus local resume polishing in German standards.",
      howWeHelp: "Continuous mentoring through your trial work periods and permanent job contract negotiation.",
    },
  ];

  return (
    <section id="onboarding" className="py-24 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-900 text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-200">
            <Building2 className="w-4 h-4 text-emerald-600" />
            <span>The Allwerks On-Ground Reality</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
            Support That Doesn&apos;t Stop When Your Plane Lands
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Almost every Indian agent washes their hands of you the second your visa is stamped in Delhi. But the real challenge begins after touching down at Frankfurt or Munich airport. Here is what we handle on the ground in Germany.
          </p>
        </div>

        {/* Warning Callout Box (Very Human!) */}
        <div className="max-w-4xl mx-auto mb-14 p-5 rounded-2xl bg-amber-50 border border-amber-200 text-amber-950 flex items-start gap-3.5 text-xs sm:text-sm">
          <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div className="leading-relaxed">
            <strong>The &quot;Catch-22&quot; of moving to Germany:</strong> You cannot open a bank account without an <em>Anmeldung</em> (city address registration). You cannot register an address without a verified apartment. And landlords won&apos;t give you an apartment without a German bank account! Allwerks breaks this cycle for you through on-ground registered presence in Germany.
          </div>
        </div>

        {/* 6 Essential Tasks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {steps.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.num}
                className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-7 flex flex-col justify-between card-shadow"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-blue-900 flex items-center justify-center font-bold shadow-xs">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800">
                      {s.badge}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-black text-slate-900">
                    {s.title}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed">
                    {s.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-200/80 bg-white -mx-6 -mb-6 p-4 rounded-b-3xl text-xs text-blue-950 font-medium flex items-start gap-2">
                  <div className="w-4 h-4 rounded-full bg-blue-100 text-blue-900 flex items-center justify-center shrink-0 mt-0.5 font-bold text-[10px]">
                    ✓
                  </div>
                  <span>
                    <strong>How Allwerks Helps:</strong> {s.howWeHelp}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
