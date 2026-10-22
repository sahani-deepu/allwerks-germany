"use client";

import React from "react";
import { Check, X, ShieldCheck, ArrowRight } from "lucide-react";

interface ComparisonSectionProps {
  onOpenConsultation: () => void;
}

export default function ComparisonSection({ onOpenConsultation }: ComparisonSectionProps) {
  const features = [
    {
      title: "German On-Ground Registered Presence",
      allwerks: true,
      agents: false,
      self: false,
      desc: "Local team to manage City Hall registration & municipal paperwork.",
    },
    {
      title: "100% Money-Back Refund if Visa Refused",
      allwerks: true,
      agents: false,
      self: false,
      desc: "Full ₹3,00,000 service fee refund protection on Opportunity Card.",
    },
    {
      title: "Zero-Broker First Apartment Assistance",
      allwerks: true,
      agents: false,
      self: false,
      desc: "Avoid rental fraud and save ₹1.5L+ in German agent commissions.",
    },
    {
      title: "Milestone-Based Transparent Pricing",
      allwerks: true,
      agents: false,
      self: true,
      desc: "Pay 50% only after receiving company placement or visa approval.",
    },
    {
      title: "Direct German Language School Enrollment",
      allwerks: true,
      agents: false,
      self: true,
      desc: "Pay fees directly to Goethe/Telc teachers with zero middleman markup.",
    },
    {
      title: "Customized Embassy-Standard Motivation Dossier",
      allwerks: true,
      agents: false,
      self: "Difficult",
      desc: "Tailored to current German Consular standards, not cut-copy-paste.",
    },
    {
      title: "Full Post-Landing Anmeldung & Tax ID Support",
      allwerks: true,
      agents: false,
      self: "Difficult",
      desc: "Completed within the mandatory 14-day window after touchdown.",
    },
  ];

  return (
    <section className="py-24 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs sm:text-sm font-semibold text-blue-400 mb-4">
            <ShieldCheck className="w-4 h-4" />
            <span>Side-by-Side Comparison</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
            Why Indian Families Choose Allwerks
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Compare our German-registered end-to-end framework against typical Indian consultancy agencies and DIY applications.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="max-w-5xl mx-auto overflow-x-auto rounded-3xl border border-slate-800 bg-slate-950/80 shadow-2xl backdrop-blur-md">
          <table className="w-full text-left border-collapse min-w-[640px]">
            <thead>
              <tr className="border-b border-slate-800">
                <th className="p-5 text-sm font-bold text-slate-400 uppercase tracking-wider w-2/5">
                  Service / Protection
                </th>
                <th className="p-5 text-center bg-blue-900/30 border-x border-slate-800 w-1/5">
                  <div className="text-lg font-black text-white">ALLWERKS</div>
                  <span className="text-[10px] text-amber-400 uppercase font-bold tracking-widest">
                    DE & IN
                  </span>
                </th>
                <th className="p-5 text-center text-slate-400 text-sm font-semibold w-1/5">
                  Generic Agents
                </th>
                <th className="p-5 text-center text-slate-400 text-sm font-semibold w-1/5">
                  Applying Solo
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80 text-xs sm:text-sm">
              {features.map((item, idx) => (
                <tr key={idx} className="hover:bg-slate-900/40 transition-colors">
                  <td className="p-5">
                    <div className="font-bold text-white text-sm">{item.title}</div>
                    <div className="text-xs text-slate-400 mt-0.5">{item.desc}</div>
                  </td>

                  {/* Allwerks Column */}
                  <td className="p-5 text-center bg-blue-900/20 border-x border-slate-800">
                    <div className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-emerald-500/20 text-emerald-400 font-bold">
                      <Check className="w-4 h-4" />
                    </div>
                  </td>

                  {/* Generic Agents Column */}
                  <td className="p-5 text-center">
                    <div className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-rose-500/10 text-rose-400">
                      <X className="w-4 h-4" />
                    </div>
                  </td>

                  {/* Self Apply Column */}
                  <td className="p-5 text-center">
                    {typeof item.self === "boolean" ? (
                      item.self ? (
                        <div className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-emerald-500/20 text-emerald-400">
                          <Check className="w-4 h-4" />
                        </div>
                      ) : (
                        <div className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-rose-500/10 text-rose-400">
                          <X className="w-4 h-4" />
                        </div>
                      )
                    ) : (
                      <span className="text-xs text-amber-400 font-semibold">{item.self}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* CTA Banner under table */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-base shadow-xl shadow-blue-600/25 transition-all cursor-pointer"
          >
            <span>Speak With a Germany Advisor</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
}
