"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What is the key difference between Ausbildung and a regular German university degree?",
      a: "A regular university program is mostly theoretical and requires you to fund all your living expenses (usually needing a €11,900+ blocked account per year). Ausbildung is Germany's dual vocational education where training is 100% free, and the company pays YOU a monthly stipend of €800 to €1,400+ to cover your living costs from Day 1.",
    },
    {
      q: "How does the 100% Refund Guarantee on the Opportunity Card work?",
      a: "If your Opportunity Card visa application is refused by the German Embassy/Consulate, Allwerks refunds 100% of our ₹3,00,000 service fee back to you in full without any administrative, legal, or processing fee deductions. Only non-refundable government/embassy visa stamping fees already collected by VFS are excluded.",
    },
    {
      q: "Do I need German language skills to apply?",
      a: "For Ausbildung: A1 is enough to begin profile shortlisting, but B1 (or B2 for nursing) is required before flying. For the Opportunity Card: You can qualify with English C1 or German A1/B1/B2. Higher German proficiency grants you more points toward the required 6-point threshold.",
    },
    {
      q: "Can I work while searching for a job on the Opportunity Card?",
      a: "Yes! The Chancenkarte legally allows you to work up to 20 hours per week in secondary employment or take up trial work periods with prospective employers while you interview for your full-time role.",
    },
    {
      q: "Why do Indian applicants need on-ground support in Germany?",
      a: "Within 14 days of landing in Germany, you are legally required to complete 'Anmeldung' (City Address Registration) at the Bürgeramt. Without an Anmeldung certificate, you cannot open a German bank account, receive your Steuer-ID (tax number), or get paid. Allwerks has an on-ground registered presence in Germany to ensure you get registered, find verified zero-broker housing, and open your bank account smoothly.",
    },
    {
      q: "How long does the visa process take from India?",
      a: "From the time of document readiness and VFS filing, typical German national visa processing in India ranges between 6 to 12 weeks. We recommend starting your preparation 3 to 6 months in advance.",
    },
  ];

  return (
    <section className="py-24 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-200 text-slate-800 text-xs sm:text-sm font-bold tracking-wide uppercase mb-4">
            <HelpCircle className="w-4 h-4 text-blue-600" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Clear, honest answers about German immigration rules, costs, and timelines.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl border border-slate-200 bg-white shadow-xs overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50 transition-colors"
                >
                  <span className="text-base font-bold text-slate-900">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-blue-600" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
