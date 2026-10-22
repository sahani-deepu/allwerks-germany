"use client";

import React, { useState, useEffect } from "react";
import { X, Send, CheckCircle2, ShieldCheck, ArrowRight, MessageSquare, Phone } from "lucide-react";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
  prefillNotes?: string;
}

export default function ConsultationModal({
  isOpen,
  onClose,
  initialService = "Opportunity Card (Chancenkarte)",
  prefillNotes = "",
}: ConsultationModalProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState(initialService);
  const [education, setEducation] = useState("Bachelor's Degree / Diploma");
  const [language, setLanguage] = useState("A1 / Just Started");
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (initialService) {
      setService(initialService);
    }
  }, [initialService]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const createWhatsAppUrl = () => {
    const text = encodeURIComponent(
      `Hello Allwerks,\nMy Name: ${name || "Applicant"}\nPhone: ${phone}\nInterested in: ${service}\nEducation: ${education}\nLanguage: ${language}\n${prefillNotes ? `Details: ${prefillNotes}` : ""}`
    );
    return `https://wa.me/919810430795?text=${text}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-700/80 rounded-3xl max-w-lg w-full p-6 sm:p-8 text-white relative shadow-2xl overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold border border-blue-500/30 mb-2">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Free Initial Assessment</span>
              </div>
              <h3 className="text-2xl font-black text-white">
                Book Your Germany Counseling Call
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                Get an honest review of your eligibility, visa roadmap, and job placement options from our senior advisors.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-hidden focus:border-blue-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                    WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-hidden focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="you@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-hidden focus:border-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                  Interested Pathway *
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:outline-hidden focus:border-blue-500 cursor-pointer"
                >
                  <option value="Ausbildung in Germany">Ausbildung (Vocational Training - Earn €800-€1,400)</option>
                  <option value="Opportunity Card (Chancenkarte)">Opportunity Card (Chancenkarte 1-Year Job Search)</option>
                  <option value="Healthcare & Nursing Ausbildung">Healthcare & Nursing Ausbildung</option>
                  <option value="IT & Tech Ausbildung">IT & Tech Ausbildung</option>
                  <option value="Mechatronics & Skilled Trades">Mechatronics & Skilled Trades</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                    Highest Qualification
                  </label>
                  <select
                    value={education}
                    onChange={(e) => setEducation(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs focus:outline-hidden focus:border-blue-500"
                  >
                    <option>12th Pass / Intermediate</option>
                    <option>Diploma Holder (3 Years)</option>
                    <option>Bachelor&apos;s Degree (B.Tech / B.Sc / B.A / B.Com)</option>
                    <option>Master&apos;s Degree / Post-Grad</option>
                    <option>Nursing Degree / GNM</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                    German Language Level
                  </label>
                  <select
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs focus:outline-hidden focus:border-blue-500"
                  >
                    <option>No German yet (Beginner)</option>
                    <option>A1 Level</option>
                    <option>A2 Level</option>
                    <option>B1 Level (Certified)</option>
                    <option>B2 Level or Higher</option>
                  </select>
                </div>
              </div>

              {prefillNotes && (
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-amber-300">
                  <strong>Notes:</strong> {prefillNotes}
                </div>
              )}

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-lg shadow-blue-600/30 transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Profile For Assessment</span>
                </button>
              </div>

              <p className="text-[11px] text-slate-400 text-center">
                🔒 Your details are 100% confidential. No spam, ever.
              </p>
            </form>
          </div>
        ) : (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-black text-white">Application Received!</h3>
            <p className="text-sm text-slate-300 max-w-sm mx-auto leading-relaxed">
              Thank you, <strong>{name}</strong>! An Allwerks senior consultant has been notified and will review your profile.
            </p>

            <div className="pt-4 space-y-3">
              <a
                href={createWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Connect Instantly on WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={onClose}
                className="w-full py-2.5 text-xs text-slate-400 hover:text-white"
              >
                Close Window
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
