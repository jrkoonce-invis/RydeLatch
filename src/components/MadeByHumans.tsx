
import React from "react";

const TeamSection = () => {
  return (
    <section id="team" className="w-full bg-white py-12 sm:py-16 md:py-20">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="text-center mb-12 sm:mb-16">

          {/* Header with badge and line */}
          <div className="flex items-center gap-4 mb-8 sm:mb-16">
            <div className="flex items-center gap-4">
              <div className="pulse-chip">
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-ryde-500 text-white mr-2">06</span>
                <span>About Us</span>
              </div>
            </div>
            <div className="flex-1 h-[1px] bg-gray-300"></div>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            Student-Led Innovation
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Rydelatch was born from a real campus problem. As students ourselves, we understand the daily struggle of bike security and built a solution that works.
          </p>
        </div>
        
        {/* Founding Story */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-12">
          <h3 className="text-2xl font-display font-bold text-center mb-6">Our Founding Story</h3>
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Rydelatch started as a student response to a real campus problem. After witnessing countless bike thefts and hearing fellow students express their concerns about bike security, we knew something had to be done. 
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              What began as a class project has evolved into a comprehensive solution that not only protects students' transportation but also creates a safer, more connected campus community. We're proud to be building something that makes our own campus a better place.
            </p>
          </div>
        </div>
        
        {/* Team Members */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-32 h-32 mx-auto mb-4 bg-gray-200 rounded-full flex items-center justify-center">
              {/* <span className="text-2xl font-bold text-gray-500">ME</span> */}
              <img src="/TEAM/cole.JPG" alt="Cole Phillips" className="w-full h-full object-cover rounded-full" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Cole Phillips</h4>
            <p className="text-gray-600 text-sm">CEO</p>
          </div>
          
          <div className="text-center">
            <div className="w-32 h-32 mx-auto mb-4 bg-gray-200 rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold text-gray-500">EE</span>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Mr. Edison</h4>
            <p className="text-gray-600 text-sm">Electrical Engineer</p>
          </div>
          
          <div className="text-center">
            <div className="w-32 h-32 mx-auto mb-4 bg-gray-200 rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold text-gray-500">IE</span>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Abe Lincoln</h4>
            <p className="text-gray-600 text-sm">Industrial Engineering</p>
          </div>
          
          <div className="text-center">
            <div className="w-32 h-32 mx-auto mb-4 bg-gray-200 rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold text-gray-500">CS</span>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Jameson Koonce</h4>
            <p className="text-gray-600 text-sm">Professional Leaderboard Topper</p>
          </div>
        </div>
        
        {/* Campus Pride */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 bg-ryde-50 px-6 py-3 rounded-full">
            <div className="w-8 h-8 bg-ryde-500 rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-ryde-800 font-semibold">Proud to be student-led and campus-focused</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
