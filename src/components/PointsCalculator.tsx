"use client";

import React, { useState } from "react";
import { 
  Calculator, 
  CheckCircle2, 
  AlertCircle, 
  ArrowRight, 
  Sparkles, 
  HelpCircle,
  ShieldCheck,
  RotateCcw
} from "lucide-react";

interface PointsCalculatorProps {
  onOpenConsultation: (service?: string, prefillNotes?: string) => void;
}

export default function PointsCalculator({ onOpenConsultation }: PointsCalculatorProps) {
  // Calculator States
  const [recognition, setRecognition] = useState<number>(4); // default: partial recognition (4 points)
  const [language, setLanguage] = useState<number>(2); // B1 German = 2, B2 = 3, A2 = 1, English C1 = 1, None = 0
  const [experience, setExperience] = useState<number>(3); // 5 yrs = 3, 2-5 yrs = 2, <2 yrs = 0
  const [age, setAge] = useState<number>(2); // Under 35 = 2, 35-39 = 1, 40+ = 0
  const [shortageOccupation, setShortageOccupation] = useState<boolean>(true); // 1 pt
  const [priorResidence, setPriorResidence] = useState<boolean>(false); // 1 pt
  const [spouseQualified, setSpouseQualified] = useState<boolean>(false); // 1 pt

  // Calculation
  const totalPoints = 
    recognition + 
    language + 
    experience + 
    age + 
    (shortageOccupation ? 1 : 0) + 
    (priorResidence ? 1 : 0) + 
    (spouseQualified ? 1 : 0);

  const isEligible = totalPoints >= 6;

  const handleReset = () => {
    setRecognition(4);
    setLanguage(2);
    setExperience(2);
    setAge(2);
    setShortageOccupation(false);
    setPriorResidence(false);
    setSpouseQualified(false);
  };

  const handleConsult = () => {
    const notes = `Calculated Chancenkarte Points: ${totalPoints}/6. Recognition: ${recognition}pts, Language: ${language}pts, Experience: ${experience}pts, Age: ${age}pts, Shortage: ${shortageOccupation ? 'Yes' : 'No'}.`;
    onOpenConsultation("Opportunity Card (Chancenkarte)", notes);
  };

  return (
    <section id="calculator" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs sm:text-sm font-semibold text-amber-400 mb-4">
            <Calculator className="w-4 h-4" />
            <span>Official Chancenkarte Assessment Tool</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
            Calculate Your Germany Opportunity Card Points
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            To qualify under Route 2 (Points-based system), you need a minimum of <strong className="text-amber-400 font-bold">6 points</strong>. Test your eligibility in 30 seconds below.
          </p>
        </div>

        {/* Main Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          
          {/* Controls Column (8 Cols) */}
          <div className="lg:col-span-8 bg-slate-950/80 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl">
            
            {/* Criteria 1: Degree Recognition */}
            <div className="space-y-3 pb-5 border-b border-slate-800/80">
              <div className="flex items-center justify-between">
                <label className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                  <span>1. Foreign Degree Recognition / Regulated Profession</span>
                </label>
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-blue-500/20 text-blue-300">
                  Up to 4 pts
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Indian degree verified through ZAB / Anabin database or partially recognized profession.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                <button
                  type="button"
                  onClick={() => setRecognition(4)}
                  className={`text-left p-3 rounded-xl border text-xs sm:text-sm transition-all cursor-pointer ${
                    recognition === 4
                      ? "bg-blue-600/20 border-blue-500 text-white font-semibold"
                      : "bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700"
                  }`}
                >
                  <div className="font-bold flex items-center justify-between">
                    <span>Partial Recognition / Regulated</span>
                    <span className="text-amber-400">+4 Pts</span>
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1">Most university graduates with ZAB statement</div>
                </button>
                <button
                  type="button"
                  onClick={() => setRecognition(0)}
                  className={`text-left p-3 rounded-xl border text-xs sm:text-sm transition-all cursor-pointer ${
                    recognition === 0
                      ? "bg-blue-600/20 border-blue-500 text-white font-semibold"
                      : "bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700"
                  }`}
                >
                  <div className="font-bold flex items-center justify-between">
                    <span>Non-Recognized Degree</span>
                    <span className="text-slate-400">0 Pts</span>
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1">Unrecognized vocational qualification</div>
                </button>
              </div>
            </div>

            {/* Criteria 2: Language Proficiency */}
            <div className="space-y-3 pb-5 border-b border-slate-800/80">
              <div className="flex items-center justify-between">
                <label className="text-sm sm:text-base font-bold text-white">
                  2. Language Proficiency (German / English)
                </label>
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-blue-500/20 text-blue-300">
                  Up to 3 pts
                </span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { label: "German B2", pts: 3, desc: "Goethe / Telc" },
                  { label: "German B1", pts: 2, desc: "Goethe / Telc" },
                  { label: "German A2", pts: 1, desc: "Basic certified" },
                  { label: "English C1", pts: 1, desc: "IELTS 7.0+ / TOEFL" },
                  { label: "None / Below A2", pts: 0, desc: "Need training" },
                ].map((item) => (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => setLanguage(item.pts)}
                    className={`p-2.5 rounded-xl border text-left text-xs transition-all cursor-pointer ${
                      language === item.pts
                        ? "bg-blue-600/20 border-blue-500 text-white font-bold"
                        : "bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span>{item.label}</span>
                      <span className="text-amber-400 font-bold">+{item.pts}</span>
                    </div>
                    <div className="text-[10px] text-slate-400 mt-0.5">{item.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Criteria 3: Professional Work Experience */}
            <div className="space-y-3 pb-5 border-b border-slate-800/80">
              <div className="flex items-center justify-between">
                <label className="text-sm sm:text-base font-bold text-white">
                  3. Relevant Professional Experience
                </label>
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-blue-500/20 text-blue-300">
                  Up to 3 pts
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {[
                  { label: "5+ Years (last 7 yrs)", pts: 3, desc: "Senior / Experienced" },
                  { label: "2 - 5 Years (last 5 yrs)", pts: 2, desc: "Mid-level experience" },
                  { label: "Less than 2 Years", pts: 0, desc: "Fresh graduate" },
                ].map((item) => (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => setExperience(item.pts)}
                    className={`p-3 rounded-xl border text-left text-xs sm:text-sm transition-all cursor-pointer ${
                      experience === item.pts
                        ? "bg-blue-600/20 border-blue-500 text-white font-bold"
                        : "bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700"
                    }`}
                  >
                    <div className="flex items-center justify-between font-bold">
                      <span>{item.label}</span>
                      <span className="text-amber-400">+{item.pts}</span>
                    </div>
                    <div className="text-[11px] text-slate-400 mt-1">{item.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Criteria 4: Age Group */}
            <div className="space-y-3 pb-5 border-b border-slate-800/80">
              <div className="flex items-center justify-between">
                <label className="text-sm sm:text-base font-bold text-white">
                  4. Your Age at Application
                </label>
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-blue-500/20 text-blue-300">
                  Up to 2 pts
                </span>
              </div>
              <div className="grid grid-cols-3 gap-2.5">
                {[
                  { label: "Under 35 years", pts: 2 },
                  { label: "35 – 39 years", pts: 1 },
                  { label: "40 years or above", pts: 0 },
                ].map((item) => (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => setAge(item.pts)}
                    className={`p-3 rounded-xl border text-center text-xs sm:text-sm transition-all cursor-pointer ${
                      age === item.pts
                        ? "bg-blue-600/20 border-blue-500 text-white font-bold"
                        : "bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700"
                    }`}
                  >
                    <div className="font-bold">{item.label}</div>
                    <div className="text-amber-400 font-bold text-xs mt-0.5">+{item.pts} Pts</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Criteria 5: Bonus Points Checklist */}
            <div className="space-y-3">
              <label className="text-sm sm:text-base font-bold text-white">
                5. Additional Bonus Categories (1 pt each)
              </label>
              <div className="space-y-2">
                <label className="flex items-center justify-between p-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 cursor-pointer text-xs sm:text-sm">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={shortageOccupation}
                      onChange={(e) => setShortageOccupation(e.target.checked)}
                      className="w-4 h-4 rounded text-blue-600 bg-slate-800 border-slate-700 focus:ring-blue-500 cursor-pointer"
                    />
                    <div>
                      <span className="font-semibold text-slate-200">Shortage Occupation</span>
                      <p className="text-[11px] text-slate-400">IT, Software, Engineering, Healthcare, Nursing, Mathematics</p>
                    </div>
                  </div>
                  <span className="text-amber-400 font-bold">+1 Pt</span>
                </label>

                <label className="flex items-center justify-between p-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 cursor-pointer text-xs sm:text-sm">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={spouseQualified}
                      onChange={(e) => setSpouseQualified(e.target.checked)}
                      className="w-4 h-4 rounded text-blue-600 bg-slate-800 border-slate-700 focus:ring-blue-500 cursor-pointer"
                    />
                    <div>
                      <span className="font-semibold text-slate-200">Spouse / Partner Qualifies</span>
                      <p className="text-[11px] text-slate-400">Partner also qualifies and applies together</p>
                    </div>
                  </div>
                  <span className="text-amber-400 font-bold">+1 Pt</span>
                </label>

                <label className="flex items-center justify-between p-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 cursor-pointer text-xs sm:text-sm">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={priorResidence}
                      onChange={(e) => setPriorResidence(e.target.checked)}
                      className="w-4 h-4 rounded text-blue-600 bg-slate-800 border-slate-700 focus:ring-blue-500 cursor-pointer"
                    />
                    <div>
                      <span className="font-semibold text-slate-200">Prior 6-Month Legal Residence in Germany</span>
                      <p className="text-[11px] text-slate-400">Lived legally in Germany within the last 5 years</p>
                    </div>
                  </div>
                  <span className="text-amber-400 font-bold">+1 Pt</span>
                </label>
              </div>
            </div>

            <div className="flex justify-end pt-2">
              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset selections</span>
              </button>
            </div>

          </div>

          {/* Sticky Score Summary Card (4 Cols) */}
          <div className="lg:col-span-4 sticky top-28 space-y-6">
            <div className={`rounded-3xl p-6 sm:p-7 border backdrop-blur-xl transition-all shadow-2xl ${
              isEligible
                ? "bg-gradient-to-b from-slate-950 via-slate-900 to-emerald-950/40 border-emerald-500/50 shadow-emerald-950/30"
                : "bg-slate-950/90 border-slate-800 shadow-slate-950"
            }`}>
              
              <div className="text-center space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Your Total Score
                </div>
                
                {/* Score Number Display */}
                <div className="flex items-baseline justify-center gap-1">
                  <span className={`text-6xl sm:text-7xl font-black ${
                    isEligible ? "text-emerald-400" : "text-amber-400"
                  }`}>
                    {totalPoints}
                  </span>
                  <span className="text-2xl text-slate-500 font-bold">/ 6 pts</span>
                </div>

                {/* Status Badge */}
                {isEligible ? (
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-500/30">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Eligible for Opportunity Card!</span>
                  </div>
                ) : (
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold border border-amber-500/30">
                    <AlertCircle className="w-4 h-4 text-amber-400" />
                    <span>Needs {6 - totalPoints} more point{6 - totalPoints > 1 ? "s" : ""}</span>
                  </div>
                )}
              </div>

              {/* Progress Bar */}
              <div className="mt-6 space-y-1.5">
                <div className="flex justify-between text-xs text-slate-400">
                  <span>Score Progress</span>
                  <span>{Math.min(Math.round((totalPoints / 6) * 100), 100)}%</span>
                </div>
                <div className="w-full h-3 rounded-full bg-slate-800 overflow-hidden">
                  <div
                    className={`h-full transition-all duration-500 rounded-full ${
                      isEligible
                        ? "bg-gradient-to-r from-emerald-500 to-teal-400"
                        : "bg-gradient-to-r from-amber-500 to-yellow-400"
                    }`}
                    style={{ width: `${Math.min((totalPoints / 6) * 100, 100)}%` }}
                  ></div>
                </div>
              </div>

              {/* Score Breakdown Mini List */}
              <div className="mt-6 pt-5 border-t border-slate-800 text-xs space-y-2 text-slate-300">
                <div className="flex justify-between">
                  <span className="text-slate-400">Degree Recognition:</span>
                  <span className="font-bold text-white">{recognition} pts</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Language Level:</span>
                  <span className="font-bold text-white">{language} pts</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Work Experience:</span>
                  <span className="font-bold text-white">{experience} pts</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Age Bracket:</span>
                  <span className="font-bold text-white">{age} pts</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Bonus Points:</span>
                  <span className="font-bold text-white">
                    {(shortageOccupation ? 1 : 0) + (priorResidence ? 1 : 0) + (spouseQualified ? 1 : 0)} pts
                  </span>
                </div>
              </div>

              {/* Guarantee Hook */}
              <div className="mt-6 p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-xs space-y-1">
                <div className="flex items-center gap-1.5 text-emerald-400 font-bold">
                  <ShieldCheck className="w-4 h-4 shrink-0" />
                  <span>100% Refund Protection</span>
                </div>
                <p className="text-[11px] text-slate-400 leading-normal">
                  Allwerks offers complete service-fee refund protection if your Chancenkarte visa application is refused.
                </p>
              </div>

              {/* CTA Button */}
              <button
                type="button"
                onClick={handleConsult}
                className={`mt-6 w-full py-3.5 px-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer ${
                  isEligible
                    ? "bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-emerald-500/20"
                    : "bg-blue-600 hover:bg-blue-500 text-white shadow-blue-600/20"
                }`}
              >
                <span>{isEligible ? "Claim Your Eligible Visa Assessment" : "Consult Allwerks to Bridge Points"}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
