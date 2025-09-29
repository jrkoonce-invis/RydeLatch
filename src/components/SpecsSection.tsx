
import React from "react";

const ProblemSolutionSection = () => {
  return (
    <section className="w-full py-6 sm:py-10 bg-white -mt-16 sm:-mt-20 md:-mt-24 lg:-mt-32" id="solution">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        {/* Header with badge and line */}
        <div className="flex items-center gap-4 mb-8 sm:mb-16">
          <div className="flex items-center gap-4">
            <div className="pulse-chip">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-ryde-500 text-white mr-2">03</span>
              <span>Problem & Solution</span>
            </div>
          </div>
          <div className="flex-1 h-[1px] bg-gray-300"></div>
        </div>
        
        {/* Stats Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-6">
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-gray-900">
              The Problem
            </h3>
            <div className="space-y-4">
              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                <p className="text-lg font-semibold text-red-800">One bike stolen every 30 seconds</p>
                <p className="text-red-700">Nationwide bike theft statistics</p>
              </div>
              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                <p className="text-lg font-semibold text-red-800">28.75% of UIUC students worried about theft</p>
                <p className="text-red-700">Campus-specific security concerns</p>
              </div>
              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                <p className="text-lg font-semibold text-red-800">Inadequate campus bike security</p>
                <p className="text-red-700">Traditional locks fail to protect students' transportation</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-gray-900">
              Our Solution
            </h3>
            <div className="space-y-4">
              <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                <p className="text-lg font-semibold text-green-800">Smart lock technology</p>
                <p className="text-green-700">NFC + PIN access for maximum security</p>
              </div>
              <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                <p className="text-lg font-semibold text-green-800">University partnership model</p>
                <p className="text-green-700">Integrated into campus infrastructure</p>
              </div>
              <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                <p className="text-lg font-semibold text-green-800">Student-focused design</p>
                <p className="text-green-700">Built by students, for students</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Before vs After Visual */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl sm:text-3xl font-display font-bold text-center mb-8">
            Before vs. After Campus Bike Racks
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="bg-red-100 rounded-lg p-6 mb-4">
                <h4 className="text-xl font-semibold text-red-800 mb-2">Before Rydelatch</h4>
                <ul className="text-red-700 space-y-2 text-left">
                  <li>• Vulnerable traditional locks</li>
                  <li>• High theft rates</li>
                  <li>• Student anxiety about security</li>
                  <li>• Limited bike usage</li>
                </ul>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-green-100 rounded-lg p-6 mb-4">
                <h4 className="text-xl font-semibold text-green-800 mb-2">After Rydelatch</h4>
                <ul className="text-green-700 space-y-2 text-left">
                  <li>• Smart, tamper-resistant locks</li>
                  <li>• Dramatically reduced theft</li>
                  <li>• Peace of mind for students</li>
                  <li>• Increased bike usage</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;
