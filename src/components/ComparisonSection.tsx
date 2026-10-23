"use client";

import React from "react";
import { Check, X, ShieldCheck, ArrowRight } from "lucide-react";

interface ComparisonSectionProps {
  onOpenConsultation: () => void;
}

export default function ComparisonSection({ onOpenConsultation }: ComparisonSectionProps) {
  const comparisons = [
    {
      title: "German On-Ground Registered Presence",
      desc: "Local team to guide City Hall registration (Anmeldung), banking, and local paperwork.",
      allwerks: true,
      agents: false,
      self: false,
    },
    {
      title: "100% Written Refund if Visa is Refused",
      desc: "Full ₹3,00,000 service fee refund protection on Opportunity Card if denied.",
      allwerks: true,
      agents: false,
      self: false,
    },
    {
      title: "Zero-Broker First Apartment Assistance",
      desc: "Protecting you against German housing scams and saving ₹1.5L+ in broker fees.",
      allwerks: true,
      agents: false,
      self: false,
    },
    {
      title: "Milestone-Based Payments",
      desc: "Pay 50% only after receiving company placement or visa approval.",
      allwerks: true,
      agents: false,
      self: true,
    },
    {
      title: "Direct German Language School Enrollment",
      desc: "Pay course fees directly to certified teachers with zero middleman markup.",
      allwerks: true,
      agents: false,
      self: true,
    },
    {
      title: "Customized Embassy-Standard Motivation Dossier",
      desc: "Drafted specifically for your profile, not generic copy-paste templates.",
      allwerks: true,
      agents: false,
      self: "Difficult",
    },
    {
      title: "Post-Landing Support within 14 Days",
      desc: "Anmeldung, health insurance activation, and German tax number issuance.",
      allwerks: true,
      agents: false,
      self: "Difficult",
    },
  ];

  return (
    <section className="py-24 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 text-blue-900 text-xs font-bold uppercase tracking-wider mb-4 border border-blue-200">
            <ShieldCheck className="w-4 h-4 text-blue-900" />
            <span>Honest Side-by-Side Comparison</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
            How Allwerks Differs From Traditional Agents
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            We built Allwerks because the traditional immigration agency model in India is broken: unverified promises, upfront fees, and complete abandonment after visa stamping.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="max-w-5xl mx-auto overflow-x-auto rounded-3xl border border-slate-200 bg-white card-shadow">
          <table className="w-full text-left border-collapse min-w-[640px]">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50/70">
                <th className="p-5 text-xs sm:text-sm font-bold text-slate-500 uppercase tracking-wider w-2/5">
                  Service / Protection
                </th>
                <th className="p-5 text-center bg-blue-50/60 border-x border-slate-200 w-1/5">
                  <div className="text-base sm:text-lg font-black text-blue-950">ALLWERKS</div>
                  <span className="text-[10px] text-amber-700 uppercase font-bold tracking-wider">
                    DE & IN
                  </span>
                </th>
                <th className="p-5 text-center text-slate-500 text-xs sm:text-sm font-semibold w-1/5">
                  Traditional Agents
                </th>
                <th className="p-5 text-center text-slate-500 text-xs sm:text-sm font-semibold w-1/5">
                  Applying Solo
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
              {comparisons.map((item, idx) => (
                <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                  <td className="p-5">
                    <div className="font-bold text-slate-900 text-sm">{item.title}</div>
                    <div className="text-xs text-slate-500 mt-0.5">{item.desc}</div>
                  </td>

                  {/* Allwerks */}
                  <td className="p-5 text-center bg-blue-50/30 border-x border-slate-200">
                    <div className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-emerald-100 text-emerald-800 font-bold">
                      <Check className="w-4 h-4 text-emerald-700" />
                    </div>
                  </td>

                  {/* Generic Agents */}
                  <td className="p-5 text-center">
                    <div className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-rose-50 text-rose-600">
                      <X className="w-4 h-4 text-rose-500" />
                    </div>
                  </td>

                  {/* Self */}
                  <td className="p-5 text-center">
                    {typeof item.self === "boolean" ? (
                      item.self ? (
                        <div className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-emerald-50 text-emerald-700">
                          <Check className="w-4 h-4" />
                        </div>
                      ) : (
                        <div className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-rose-50 text-rose-500">
                          <X className="w-4 h-4" />
                        </div>
                      )
                    ) : (
                      <span className="text-xs text-amber-800 font-semibold">{item.self}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Action Button */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-blue-900 hover:bg-slate-900 text-white font-bold text-base shadow-md transition-all cursor-pointer"
          >
            <span>Speak With An Allwerks Advisor</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
}
