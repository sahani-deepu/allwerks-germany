"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PointsCalculator from "@/components/PointsCalculator";
import AusbildungSection from "@/components/AusbildungSection";
import OpportunityCardSection from "@/components/OpportunityCardSection";
import RoadmapSection from "@/components/RoadmapSection";
import PostLandingSection from "@/components/PostLandingSection";
import PricingSection from "@/components/PricingSection";
import ComparisonSection from "@/components/ComparisonSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import ConsultationModal from "@/components/ConsultationModal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalService, setModalService] = useState("Opportunity Card (Chancenkarte)");
  const [modalNotes, setModalNotes] = useState("");

  const handleOpenConsultation = (service?: string, notes?: string) => {
    if (service) setModalService(service);
    if (notes) setModalNotes(notes);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalNotes("");
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      {/* Navigation */}
      <Navbar onOpenConsultation={handleOpenConsultation} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section with Dual Switcher */}
        <Hero onOpenConsultation={handleOpenConsultation} />

        {/* Interactive Points Calculator Tool */}
        <PointsCalculator onOpenConsultation={handleOpenConsultation} />

        {/* Ausbildung In-Depth Section */}
        <AusbildungSection onOpenConsultation={handleOpenConsultation} />

        {/* Opportunity Card (Chancenkarte) Section */}
        <OpportunityCardSection onOpenConsultation={handleOpenConsultation} />

        {/* 13-Step Stage-by-Stage Journey */}
        <RoadmapSection />

        {/* Post-Landing German Onboarding (Anmeldung, Bank, Tax ID) */}
        <PostLandingSection />

        {/* Transparent Pricing & Milestone Structure */}
        <PricingSection onOpenConsultation={handleOpenConsultation} />

        {/* Comparison: Allwerks vs Generic Indian Agents vs Solo */}
        <ComparisonSection onOpenConsultation={() => handleOpenConsultation()} />

        {/* Frequently Asked Questions */}
        <FAQSection />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Floating Sticky WhatsApp Quick Connect */}
      <WhatsAppFloat />

      {/* Lead Generation & Assessment Modal */}
      <ConsultationModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        initialService={modalService}
        prefillNotes={modalNotes}
      />
    </div>
  );
}
