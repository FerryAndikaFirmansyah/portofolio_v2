"use client";

import AboutSection from "@/pages/about-section";
import CertificatesSection from "@/pages/certificates-section";
import ContactSection from "@/pages/contact-section";
import ExperienceSection from "@/pages/experience-section";
import HeroSection from "@/pages/hero-section";
import ProjectSection from "@/pages/project-section";
import SkillsSection from "@/pages/skills-section";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#0B0F14] text-[#F8FAFC]">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectSection />
      <CertificatesSection />
      <ContactSection />
    </main>
  );
}
