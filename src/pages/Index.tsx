
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MissionValuesSection from "@/components/HumanoidSection";
import ProblemSolutionSection from "@/components/SpecsSection";
import PartnershipProcessSection from "@/components/DetailsSection";
import ProductTechSection from "@/components/ImageShowcaseSection";
import WhyUniversitiesSection from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/Newsletter";
import TeamSection from "@/components/MadeByHumans";
import Footer from "@/components/Footer";
import FAQSection from "@/components/HumanIntuitionSection";

const Index = () => {
  // Initialize intersection observer to detect when elements enter viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));
    
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  useEffect(() => {
    // This helps ensure smooth scrolling for the anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href')?.substring(1);
        if (!targetId) return;
        
        const targetElement = document.getElementById(targetId);
        if (!targetElement) return;
        
        // Increased offset to account for mobile nav
        const offset = window.innerWidth < 768 ? 100 : 80;
        
        window.scrollTo({
          top: targetElement.offsetTop - offset,
          behavior: 'smooth'
        });
      });
    });
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="space-y-0">
        <Hero />
        <MissionValuesSection />
        <ProblemSolutionSection />

        <ProductTechSection />
        <PartnershipProcessSection />
        
        {/* <WhyUniversitiesSection /> */}
        <FAQSection />
        
        {/* <Testimonials /> */}
        <TeamSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
