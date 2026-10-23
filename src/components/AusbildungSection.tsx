"use client";

import React, { useState } from "react";
import { 
  GraduationCap, 
  HeartPulse, 
  Laptop, 
  Hotel, 
  Wrench, 
  Truck, 
  CheckCircle2, 
  ArrowRight, 
  Euro, 
  Clock, 
  Award, 
  Building2,
  FileCheck,
  Coins
} from "lucide-react";

interface AusbildungSectionProps {
  onOpenConsultation: (service?: string) => void;
}

export default function AusbildungSection({ onOpenConsultation }: AusbildungSectionProps) {
  const [selectedTrade, setSelectedTrade] = useState<number>(0);

  const trades = [
    {
      title: "General Healthcare & Nursing (Pflegefachmann / -frau)",
      stipend: "€1,190 – €1,380 / month",
      duration: "3 Years",
      demand: "Urgent need across all 16 German states",
      language: "German B1/B2 (Goethe / Telc)",
      image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80",
      description: "State-recognized medical qualification. You work in university hospitals, municipal clinics, and modern care centers while attending Berufsschule.",
      postSalary: "Starting gross salary of €2,850 to €3,700 per month upon qualifying, with guaranteed permanent hospital contract.",
    },
    {
      title: "Information Technology (Fachinformatiker)",
      stipend: "€1,020 – €1,250 / month",
      duration: "3 Years",
      demand: "High demand in Munich, Berlin, Hamburg & Stuttgart",
      language: "German B1 + good English",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
      description: "Two primary tracks: Application Development (coding, cloud software, databases) or System Integration (networks, server architecture, DevOps).",
      postSalary: "Junior software developer roles starting at €40,000 to €52,000 per year.",
    },
    {
      title: "Mechatronics & Industrial Engineering (Mechatroniker)",
      stipend: "€1,050 – €1,350 / month",
      duration: "3.5 Years",
      demand: "Pivotal in Germany's automotive and robotics corridors",
      language: "German B1 Level",
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
      description: "Hands-on engineering combining mechanical, electrical, and robotic systems in modern German manufacturing and automation plants.",
      postSalary: "Plant technicians and automation engineers starting at €38,000 to €48,000 per year.",
    },
    {
      title: "Hospitality & Hotel Operations (Hotelfachmann / -frau)",
      stipend: "€950 – €1,200 / month",
      duration: "3 Years",
      demand: "Continuous opportunities across international hotel groups",
      language: "German B1 Level",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
      description: "Comprehensive training across premier 4-star and 5-star hotels covering front desk operations, event coordination, revenue management, and guest services.",
      postSalary: "Department supervisory and front-office managerial roles across Germany and Schengen Europe.",
    },
    {
      title: "Logistics & Supply Chain Management",
      stipend: "€980 – €1,250 / month",
      duration: "3 Years",
      demand: "Germany is Europe's primary logistics hub (Frankfurt / Hamburg)",
      language: "German B1 Level",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
      description: "Training with global freight operators, automated fulfilment hubs, and maritime supply chains managing international trade.",
      postSalary: "Supply chain coordinators and freight planners starting at €36,000 to €45,000 per year.",
    },
  ];

  const current = trades[selectedTrade];

  return (
    <section id="ausbildung" className="py-24 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-900 text-xs font-bold uppercase tracking-wider mb-4 border border-blue-200">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Germany&apos;s Dual Vocational System (Duale Ausbildung)</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
            How Indian Students Study In Germany Without College Debt
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            In India, students pay heavy college fees and struggle for placement. In Germany, the <strong>Ausbildung system</strong> flips this entirely: you pay <strong>zero tuition fees</strong>, receive practical on-the-job training, and the host company pays you a monthly salary from your very first month.
          </p>
        </div>

        {/* Realistic Monthly Allowance Breakdown (Human touch!) */}
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 max-w-4xl mx-auto mb-16 shadow-xs">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
            <div>
              <span className="text-xs font-bold text-blue-900 uppercase tracking-wider">A Realistic Budget</span>
              <h3 className="text-xl font-bold text-slate-900 mt-0.5">Can You Truly Live On An Ausbildung Stipend?</h3>
            </div>
            <div className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-right shadow-xs">
              <span className="text-[11px] text-slate-500 block">Average Monthly Allowance</span>
              <span className="text-lg font-black text-emerald-700">€1,150 – €1,300</span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 text-center">
            <div className="p-3 bg-white rounded-xl border border-slate-200">
              <div className="text-xs text-slate-500">Student Room / WG</div>
              <div className="text-base font-bold text-slate-900 mt-1">€380 – €480</div>
              <div className="text-[10px] text-slate-400 mt-0.5">Assisted by Allwerks</div>
            </div>
            <div className="p-3 bg-white rounded-xl border border-slate-200">
              <div className="text-xs text-slate-500">Food & Groceries</div>
              <div className="text-base font-bold text-slate-900 mt-1">€180 – €220</div>
              <div className="text-[10px] text-slate-400 mt-0.5">Self-cooking / canteen</div>
            </div>
            <div className="p-3 bg-white rounded-xl border border-slate-200">
              <div className="text-xs text-slate-500">Health Insurance & Sim</div>
              <div className="text-base font-bold text-slate-900 mt-1">€110 – €130</div>
              <div className="text-[10px] text-slate-400 mt-0.5">Statutory student tariff</div>
            </div>
            <div className="p-3 bg-white rounded-xl border border-slate-200">
              <div className="text-xs text-slate-500">Monthly Net Savings</div>
              <div className="text-base font-bold text-emerald-700 mt-1">€250 – €400</div>
              <div className="text-[10px] text-emerald-600 mt-0.5">Personal savings / travel</div>
            </div>
          </div>
        </div>

        {/* Trade Explorer with Real Images */}
        <div className="max-w-5xl mx-auto">
          {/* Trade Selector Tabs */}
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {trades.map((t, idx) => (
              <button
                key={t.title}
                onClick={() => setSelectedTrade(idx)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer border ${
                  selectedTrade === idx
                    ? "bg-slate-900 text-white border-slate-900 shadow-sm"
                    : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
                }`}
              >
                {t.title.split("(")[0].trim()}
              </button>
            ))}
          </div>

          {/* Detailed Trade Card */}
          <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden card-shadow">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
              
              {/* Image side (5 cols) */}
              <div className="lg:col-span-5 relative min-h-[260px] bg-slate-100">
                <img
                  src={current.image}
                  alt={current.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-slate-900/90 text-white px-3 py-1.5 rounded-lg text-xs font-bold backdrop-blur-md">
                  {current.demand}
                </div>
              </div>

              {/* Content side (7 cols) */}
              <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-bold text-blue-900 uppercase tracking-wider">
                      Vocational Track
                    </span>
                    <span className="text-sm font-black text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-200">
                      {current.stipend}
                    </span>
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl font-black text-slate-950">
                    {current.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
                    {current.description}
                  </p>

                  <div className="mt-4 p-3.5 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-700 space-y-1">
                    <span className="font-bold text-slate-900 block">After Completion Outlook:</span>
                    <span>{current.postSalary}</span>
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-3 text-xs">
                    <div>
                      <span className="text-slate-400 block">Duration:</span>
                      <span className="font-bold text-slate-800">{current.duration}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block">Required Language:</span>
                      <span className="font-bold text-blue-900">{current.language}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-xs text-slate-500">
                    Allwerks handles employer interview prep & placement.
                  </div>
                  <button
                    onClick={() => onOpenConsultation(`Ausbildung - ${current.title}`)}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-blue-900 hover:bg-slate-900 text-white text-xs sm:text-sm font-bold shadow-sm transition-all cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <span>Check Trade Eligibility</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
