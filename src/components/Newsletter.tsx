import React, { useState } from "react";
import { toast } from "@/components/ui/use-toast";
const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    university: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.university) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Thank you for your inquiry!",
        description: "We'll get back to you within 24 hours."
      });
      setFormData({
        name: "",
        email: "",
        university: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 1000);
  };
  
  return <section id="contact" className="bg-white py-12 sm:py-16 md:py-20">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="pulse-chip mx-auto mb-4">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-ryde-500 text-white mr-2">07</span>
              <span>Contact</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4">Get in Touch</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Ready to bring smart bike security to your campus? Contact us to learn more about our partnership opportunities.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-display font-bold mb-6">Send us a message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                    <input 
                      type="text" 
                      id="name"
                      name="name"
                      value={formData.name} 
                      onChange={handleChange} 
                      placeholder="Your name" 
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-ryde-500 text-gray-700" 
                      required 
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                    <input 
                      type="email" 
                      id="email"
                      name="email"
                      value={formData.email} 
                      onChange={handleChange} 
                      placeholder="your.email@university.edu" 
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-ryde-500 text-gray-700" 
                      required 
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="university" className="block text-sm font-medium text-gray-700 mb-2">University *</label>
                  <input 
                    type="text" 
                    id="university"
                    name="university"
                    value={formData.university} 
                    onChange={handleChange} 
                    placeholder="University name" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-ryde-500 text-gray-700" 
                    required 
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea 
                    id="message"
                    name="message"
                    value={formData.message} 
                    onChange={handleChange} 
                    placeholder="Tell us about your campus bike security needs..." 
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-ryde-500 text-gray-700 resize-none" 
                  />
                </div>
                
                <button 
                  type="submit" 
                  disabled={isSubmitting} 
                  className="w-full bg-ryde-500 hover:bg-ryde-600 text-white font-medium py-4 px-8 rounded-xl transition-all duration-300 disabled:opacity-50"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
            
            {/* Contact Info & Resources */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-display font-bold mb-6">Partnership Resources</h3>
                <div className="space-y-4">
                  <a 
                    href="#" 
                    className="flex items-center p-4 bg-white rounded-xl border border-gray-200 hover:border-ryde-300 hover:shadow-md transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-ryde-100 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-ryde-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Download Partner Deck</h4>
                      <p className="text-gray-600 text-sm">Comprehensive overview of our solution</p>
                    </div>
                  </a>
                  
                  <a 
                    href="#" 
                    className="flex items-center p-4 bg-white rounded-xl border border-gray-200 hover:border-ryde-300 hover:shadow-md transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-ryde-100 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-ryde-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Schedule Consultation</h4>
                      <p className="text-gray-600 text-sm">Book a call with our team</p>
                    </div>
                  </a>
                </div>
              </div>
              
              <div className="bg-ryde-50 rounded-xl p-6">
                <h4 className="font-semibold text-gray-900 mb-4">Quick Contact</h4>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-ryde-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-gray-700">hello@rydelatch.com</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-ryde-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="text-gray-700">(555) 123-4567</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ContactSection;