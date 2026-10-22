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
  Building
} from "lucide-react";

interface AusbildungSectionProps {
  onOpenConsultation: (service?: string) => void;
}

export default function AusbildungSection({ onOpenConsultation }: AusbildungSectionProps) {
  const [selectedSector, setSelectedSector] = useState<number>(0);

  const sectors = [
    {
      title: "Nursing & Healthcare (Pflegefachmann/-frau)",
      stipend: "€1,150 – €1,380 / month",
      duration: "3 Years",
      demand: "Critically High Demand Across All 16 States",
      language: "German B1/B2 Level",
      icon: HeartPulse,
      color: "from-rose-500 to-pink-600",
      description: "One of Germany's most respected professions with 100% job security. You work in modern clinics and nursing homes while receiving comprehensive medical education.",
      careerPath: "Guaranteed permanent hospital contract upon completion, starting €2,800 – €3,800/month basic salary.",
    },
    {
      title: "Information Technology (Fachinformatiker)",
      stipend: "€1,000 – €1,250 / month",
      duration: "3 Years",
      demand: "Surging Demand in Tech Hubs (Berlin, Munich)",
      language: "German B1 + English proficiency",
      icon: Laptop,
      color: "from-blue-500 to-indigo-600",
      description: "Specializations in Application Development or System Integration. Learn enterprise software, cloud infrastructure, and modern coding stacks hands-on.",
      careerPath: "Transition straight into junior developer or DevOps engineer roles starting at €42,000 – €55,000/year.",
    },
    {
      title: "Mechatronics & Skilled Trades (Mechatroniker)",
      stipend: "€1,050 – €1,350 / month",
      duration: "3.5 Years",
      demand: "High Demand in German Engineering Hubs",
      language: "German B1 Level",
      icon: Wrench,
      color: "from-amber-500 to-orange-600",
      description: "Work with Germany's world-famous automotive and industrial manufacturers. Hands-on expertise in automation, electronics, and robotics.",
      careerPath: "Direct recruitment by German industrial giants (Siemens, Bosch, automotive supply chain).",
    },
    {
      title: "Hospitality & Hotel Management (Hotelfachmann)",
      stipend: "€950 – €1,200 / month",
      duration: "3 Years",
      demand: "Continuous Openings Across Europe",
      language: "German B1 Level",
      icon: Hotel,
      color: "from-emerald-500 to-teal-600",
      description: "Train across premier German luxury hotels, resorts, and tourism groups. Covers front-office operations, guest relations, gastronomy, and event planning.",
      careerPath: "Supervisory and department head career track throughout the EU Schengen area.",
    },
    {
      title: "Logistics & Supply Chain Management",
      stipend: "€980 – €1,250 / month",
      duration: "3 Years",
      demand: "Growing Global Hubs (Hamburg, Frankfurt)",
      language: "German B1 Level",
      icon: Truck,
      color: "from-purple-500 to-violet-600",
      description: "Germany is Europe's number-one logistics hub. Master international freight, automated warehouse systems, and multimodal transport logistics.",
      careerPath: "Logistics coordinators and supply chain planners in multinational freight operations.",
    },
  ];

  const activeSector = sectors[selectedSector];

  return (
    <section id="ausbildung" className="py-24 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs sm:text-sm font-bold tracking-wide uppercase mb-4 border border-blue-200">
            <GraduationCap className="w-4 h-4" />
            <span>Germany's World-Famous Dual System</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
            Ausbildung: Paid Vocational Education in Germany
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Unlike university degrees with heavy tuition fees, Ausbildung is <strong>100% tuition-free</strong>. You work 3-4 days at a recognized company and attend school 1-2 days — receiving a handsome monthly stipend from Day 1.
          </p>
        </div>

        {/* 4 Pillars of Ausbildung */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-xs hover:border-blue-300 transition-all">
            <div className="w-12 h-12 rounded-xl bg-blue-600/10 text-blue-600 flex items-center justify-center font-bold text-xl mb-4">
              <Euro className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-slate-900">Earn While You Learn</h4>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
              Monthly stipend of <strong>€800 to €1,400+</strong> directly covers your living costs, food, and housing from day one.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-xs hover:border-blue-300 transition-all">
            <div className="w-12 h-12 rounded-xl bg-emerald-600/10 text-emerald-600 flex items-center justify-center font-bold text-xl mb-4">
              <Award className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-slate-900">Zero Tuition Fees</h4>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
              Your vocational school (Berufsschule) education is funded by the state and the host company. No student debt.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-xs hover:border-blue-300 transition-all">
            <div className="w-12 h-12 rounded-xl bg-amber-600/10 text-amber-600 flex items-center justify-center font-bold text-xl mb-4">
              <Building className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-slate-900">Dual Education System</h4>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
              Combines structured classroom theory with real-world enterprise work experience administered by German Chambers (IHK/HWK).
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-xs hover:border-blue-300 transition-all">
            <div className="w-12 h-12 rounded-xl bg-purple-600/10 text-purple-600 flex items-center justify-center font-bold text-xl mb-4">
              <Clock className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-slate-900">Direct Job Placement</h4>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
              The vast majority of candidates convert directly into permanent salaried employees with their training employer.
            </p>
          </div>
        </div>

        {/* Interactive Sector Explorer */}
        <div className="bg-slate-900 rounded-3xl p-6 sm:p-10 text-white shadow-2xl relative overflow-hidden">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
              High-Demand Trades
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold mt-1">
              Top Ausbildung Trades For International Candidates
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-2">
              Select a sector to explore monthly stipends, program duration, and language requirements.
            </p>
          </div>

          {/* Sector Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {sectors.map((sector, index) => {
              const Icon = sector.icon;
              const isActive = selectedSector === index;
              return (
                <button
                  key={sector.title}
                  onClick={() => setSelectedSector(index)}
                  className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                    isActive
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30 font-bold"
                      : "bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{sector.title.split("(")[0]}</span>
                </button>
              );
            })}
          </div>

          {/* Active Sector Card Details */}
          <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-6 sm:p-8 max-w-4xl mx-auto backdrop-blur-md">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              
              <div className="md:col-span-8 space-y-4">
                <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                  <span>{activeSector.demand}</span>
                </div>
                <h4 className="text-xl sm:text-2xl font-black text-white">
                  {activeSector.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {activeSector.description}
                </p>

                <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                  <span className="text-xs font-bold text-slate-400 uppercase">After Qualifying Career Track</span>
                  <p className="text-xs sm:text-sm text-emerald-400 font-medium">
                    {activeSector.careerPath}
                  </p>
                </div>
              </div>

              {/* Specs Box */}
              <div className="md:col-span-4 bg-slate-900 rounded-xl p-5 border border-slate-800 space-y-3.5">
                <div>
                  <span className="text-[11px] font-semibold text-slate-400 block uppercase">Monthly Stipend</span>
                  <span className="text-lg font-black text-amber-400">{activeSector.stipend}</span>
                </div>
                <div>
                  <span className="text-[11px] font-semibold text-slate-400 block uppercase">Duration</span>
                  <span className="text-sm font-bold text-slate-200">{activeSector.duration}</span>
                </div>
                <div>
                  <span className="text-[11px] font-semibold text-slate-400 block uppercase">Language Required</span>
                  <span className="text-sm font-bold text-blue-400">{activeSector.language}</span>
                </div>
                <div className="pt-2">
                  <button
                    onClick={() => onOpenConsultation(`Ausbildung - ${activeSector.title}`)}
                    className="w-full py-2.5 px-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
                  >
                    <span>Apply for this Trade</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>
          </div>

          {/* Allwerks Transparent Ausbildung Fee Callout */}
          <div className="mt-10 p-5 rounded-2xl bg-blue-950/40 border border-blue-800/60 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-blue-300">
                Transparent Allwerks Ausbildung Package
              </div>
              <div className="text-sm sm:text-base text-slate-200 font-medium mt-0.5">
                Total Service Fee: <strong>€4,000</strong> (50% on signing, 50% only after placement offer is secured).
              </div>
            </div>
            <button
              onClick={() => onOpenConsultation("Ausbildung Complete Package")}
              className="shrink-0 px-5 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-950 font-bold text-xs sm:text-sm cursor-pointer shadow-md transition-all"
            >
              Get Trade Eligibility Review
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
