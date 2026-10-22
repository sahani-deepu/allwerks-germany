"use client";

import React from "react";
import { MessageCircle } from "lucide-react";

export default function WhatsAppFloat() {
  const whatsappUrl =
    "https://wa.me/919810430795?text=Hello%20Allwerks,%20I%20am%20interested%20in%20moving%20to%20Germany%20(Ausbildung%20or%20Opportunity%20Card).%20Please%20guide%20me.";

  return (
    <aside aria-label="WhatsApp Quick Connect" className="fixed bottom-6 right-6 z-40 flex items-center group">
      <div className="hidden sm:block mr-3 px-3 py-1.5 rounded-xl bg-slate-900 text-white text-xs font-semibold shadow-xl border border-slate-700 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        Chat with a German Advisor
      </div>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white flex items-center justify-center shadow-xl shadow-emerald-500/30 hover:scale-105 active:scale-95 transition-all duration-200 relative"
        aria-label="Chat with Allwerks on WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-600 border-2 border-white"></span>
        </span>
      </a>
    </aside>
  );
}
