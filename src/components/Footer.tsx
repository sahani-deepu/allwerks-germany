"use client";

import React from "react";
import { Phone, Mail, MapPin, ShieldCheck, Clock, Building } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 text-xs sm:text-sm border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Info (4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center text-white font-black text-lg relative overflow-hidden">
                <span>AW</span>
                <div className="absolute bottom-0 inset-x-0 h-1 flex">
                  <div className="w-1/3 bg-black"></div>
                  <div className="w-1/3 bg-red-600"></div>
                  <div className="w-1/3 bg-amber-400"></div>
                </div>
              </div>
              <span className="text-xl font-black text-white tracking-wider">ALLWERKS</span>
            </div>
            
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Your trusted partner for Ausbildung vocational education and the Germany Opportunity Card (Chancenkarte). Complete continuity from India to your first day at work in Germany.
            </p>

            <div className="pt-2 text-xs text-slate-300 space-y-2">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Offices:</strong> New Delhi, India &bull; Frankfurt am Main, Germany
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Monday – Saturday: 9:30 AM – 6:30 PM IST</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href="https://wa.me/919810430795"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-amber-400 transition-colors font-semibold"
                >
                  +91 98104 30795 (Call & WhatsApp)
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links: Ausbildung (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Ausbildung Pathways
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#ausbildung" className="hover:text-white transition-colors">
                  Nursing & Healthcare (€1,190 – €1,380)
                </a>
              </li>
              <li>
                <a href="#ausbildung" className="hover:text-white transition-colors">
                  IT & Application Development (Fachinformatiker)
                </a>
              </li>
              <li>
                <a href="#ausbildung" className="hover:text-white transition-colors">
                  Mechatronics & Robotics (Stuttgart / Munich)
                </a>
              </li>
              <li>
                <a href="#ausbildung" className="hover:text-white transition-colors">
                  Hotel Operations & Hospitality Management
                </a>
              </li>
              <li>
                <a href="#ausbildung" className="hover:text-white transition-colors">
                  Logistics & International Freight Systems
                </a>
              </li>
            </ul>
          </div>

          {/* Opportunity Card (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Opportunity Card
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#calculator" className="hover:text-white transition-colors text-amber-400 font-semibold">
                  6-Point Assessment Tool
                </a>
              </li>
              <li>
                <a href="#opportunity-card" className="hover:text-white transition-colors">
                  Route 1: Direct Recognition
                </a>
              </li>
              <li>
                <a href="#opportunity-card" className="hover:text-white transition-colors">
                  Route 2: Points-Based Qualification
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">
                  100% Written Refund Policy
                </a>
              </li>
              <li>
                <a href="#onboarding" className="hover:text-white transition-colors">
                  First 14 Days Post-Landing in Germany
                </a>
              </li>
            </ul>
          </div>

          {/* Trust Guarantees (2 Cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Protections
            </h4>
            <div className="space-y-2 text-xs text-slate-400">
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                <div className="text-emerald-400 font-bold flex items-center gap-1 mb-1">
                  <ShieldCheck className="w-3.5 h-3.5" /> 100% Refund
                </div>
                <span>Full ₹3,00,000 returned if visa is denied.</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                <div className="text-amber-400 font-bold mb-1">0% Broker Fee</div>
                <span>Apartment sourcing with zero broker commission.</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; 2026 ALLWERKS. All rights reserved.
          </div>
          <div className="text-center sm:text-right text-[11px] max-w-xl text-slate-400 leading-normal">
            Disclaimer: Allwerks provides professional counseling, documentation dossier management, employer introductions, and relocation onboarding. Official visa issuance remains at the sole legal discretion of the German Embassy / Consular Authorities.
          </div>
        </div>
      </div>
    </footer>
  );
}
