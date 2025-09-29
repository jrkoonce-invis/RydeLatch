
import React, { useRef, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Brain, Zap, Users } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const FAQSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // Initialize intersection observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const animatedElements = sectionRef.current?.querySelectorAll('.animate-item');
    animatedElements?.forEach((el) => observer.observe(el));
    
    return () => {
      animatedElements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const faqs = [
    {
      question: "How does it work?",
      answer: "Students unlock bikes using the mobile app (NFC) or a PIN pad. The system is integrated into campus bike racks and provides secure, convenient access."
    },
    {
      question: "What if a lock breaks?",
      answer: "Covered under university maintenance contracts; service requests are handled quickly by our support team."
    },
    {
      question: "What's covered under maintenance?",
      answer: "Routine inspections, repairs, and replacements as needed. Universities receive comprehensive maintenance support."
    },
    {
      question: "Is there a cost to students?",
      answer: "No direct per-use fees. The program is funded through existing university fee structures (transportation or sustainability fees), ensuring students can access locks without worrying about charges."
    },
    {
      question: "How secure are the locks?",
      answer: "Our locks feature tamper-resistant design, weatherproof construction (IP65 rating), and dual authentication (NFC + PIN) for maximum security."
    },
    {
      question: "Can universities track usage?",
      answer: "Yes, campus administrators receive real-time monitoring and comprehensive analytics on usage patterns, security incidents, and system performance."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white" id="faq" ref={sectionRef}>
      <div className="section-container">
        <div className="text-center mb-12">
      
          {/* Header with badge and line */}
          <div className="flex items-center gap-4 mb-8 sm:mb-16">
            <div className="flex items-center gap-4">
              <div className="pulse-chip">
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-ryde-500 text-white mr-2">05</span>
                <span>FAQs</span>
              </div>
            </div>
            <div className="flex-1 h-[1px] bg-gray-300"></div>
          </div>

          <h2 className="section-title mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Everything you need to know about Rydelatch's smart campus bike security system.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 animate-item opacity-0"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <div className="w-6 h-6 rounded-full bg-ryde-500 text-white flex items-center justify-center text-sm font-bold mr-3">
                      Q
                    </div>
                    {faq.question}
                  </h3>
                  <div className="ml-9">
                    <div className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-ryde-100 text-ryde-500 flex items-center justify-center text-sm font-bold mr-3 mt-1 flex-shrink-0">
                        A
                      </div>
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Contact CTA */}
        {/* <div className="mt-16 text-center">
          <div className="bg-ryde-50 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">
              Still have questions?
            </h3>
            <p className="text-gray-700 mb-6">
              Our team is here to help. Contact us for more information about implementing Rydelatch at your university.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contact" 
                className="px-6 py-3 bg-ryde-500 hover:bg-ryde-600 text-white font-medium rounded-full transition-colors duration-300"
              >
                Contact Us
              </a>
              <a 
                href="#partnership" 
                className="px-6 py-3 border-2 border-ryde-500 text-ryde-500 hover:bg-ryde-500 hover:text-white font-medium rounded-full transition-colors duration-300"
              >
                Download Partner Deck
              </a>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default FAQSection;
