
import React from "react";

const ProductTechSection = () => {
  return (
    <section className="w-full pt-8 sm:pt-16 pb-16 sm:pb-24 bg-white" id="product">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12 animate-on-scroll">
          <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight text-gray-900 mb-3 sm:mb-4">
            Smart Lock Technology
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Advanced hardware and software designed specifically for campus environments, 
            providing maximum security with seamless user experience.
          </p>
        </div>
        
        {/* Hardware Features */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-display font-bold text-gray-900">Hardware Features</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-ryde-500 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 5L5 9L13 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Tamper-Resistant Design</h4>
                  <p className="text-gray-600">Built to withstand weather and vandalism attempts</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-ryde-500 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 5L5 9L13 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Weatherproof Construction</h4>
                  <p className="text-gray-600">IP65 rating for all-weather campus deployment</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-ryde-500 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 5L5 9L13 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">NFC + PIN Access</h4>
                  <p className="text-gray-600">Dual authentication for maximum security</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-display font-bold text-gray-900">Software Features</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-ryde-500 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 5L5 9L13 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Mobile App Integration</h4>
                  <p className="text-gray-600">Easy unlock, account management, and usage tracking</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-ryde-500 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 5L5 9L13 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Real-time Monitoring</h4>
                  <p className="text-gray-600">Campus administrators can monitor usage and security</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-ryde-500 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 5L5 9L13 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Analytics Dashboard</h4>
                  <p className="text-gray-600">Comprehensive reporting on usage patterns and security</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Specs Table */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-12">
          <h3 className="text-2xl font-display font-bold text-center mb-8">Technical Specifications</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-4 px-4 font-semibold text-gray-900">Feature</th>
                  <th className="text-left py-4 px-4 font-semibold text-gray-900">Rydelatch</th>
                  <th className="text-left py-4 px-4 font-semibold text-gray-900">U-Locks</th>
                  <th className="text-left py-4 px-4 font-semibold text-gray-900">Competitors</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-4 px-4 font-medium text-gray-900">Security Level</td>
                  <td className="py-4 px-4 text-green-600 font-semibold">Maximum</td>
                  <td className="py-4 px-4 text-gray-600">Basic</td>
                  <td className="py-4 px-4 text-gray-600">Moderate</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-medium text-gray-900">Weather Resistance</td>
                  <td className="py-4 px-4 text-green-600 font-semibold">IP65</td>
                  <td className="py-4 px-4 text-gray-600">Limited</td>
                  <td className="py-4 px-4 text-gray-600">Basic</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-medium text-gray-900">User Experience</td>
                  <td className="py-4 px-4 text-green-600 font-semibold">Seamless</td>
                  <td className="py-4 px-4 text-gray-600">Manual</td>
                  <td className="py-4 px-4 text-gray-600">Complex</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-medium text-gray-900">Campus Integration</td>
                  <td className="py-4 px-4 text-green-600 font-semibold">Full</td>
                  <td className="py-4 px-4 text-gray-600">None</td>
                  <td className="py-4 px-4 text-gray-600">Limited</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        {/* Product Showcase */}
        {/* <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-elegant mx-auto max-w-4xl animate-on-scroll">
          <div className="w-full">
            <img 
              src="/lovable-uploads/c3d5522b-6886-4b75-8ffc-d020016bb9c2.png" 
              alt="Rydelatch smart bike lock system" 
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="bg-white p-4 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-display font-semibold mb-3 sm:mb-4">Smart Campus Security</h3>
            <p className="text-gray-700 text-sm sm:text-base">
              Our smart lock system integrates seamlessly into campus infrastructure, 
              providing students with secure, convenient bike storage while giving 
              universities peace of mind and valuable usage analytics.
            </p>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default ProductTechSection;
