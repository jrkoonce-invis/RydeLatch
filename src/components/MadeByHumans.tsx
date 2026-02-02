
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

        {/* Core Team Grid */}
        <div className="mb-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
            {/* Ryan McCluskey */}
            <div className="bg-gray-50 rounded-2xl p-6 flex flex-col h-full text-center items-center max-w-sm">
              <div className="w-16 h-16 mb-4 rounded-full overflow-hidden bg-ryde-100 flex items-center justify-center">
                <img src="/TEAM/201F16F1-A1EC-4B56-B604-17B8EF9C1C5F - Ryan M.JPG" alt="Ryan McCluskey" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-display font-bold text-lg text-gray-900">Ryan McCluskey</h3>
              <p className="text-sm text-gray-600 mb-2">Lead Mechanical Engineer</p>
              <p className="text-sm text-gray-700 flex-1">
                Ryan leads the mechanical engineering team to make a lock that&apos;s easy to use and optimized for the rider experience.
              </p>
            </div>

            {/* Ali Albaghdadi */}
            <div className="bg-gray-50 rounded-2xl p-6 flex flex-col h-full text-center items-center max-w-sm">
              <div className="w-16 h-16 mb-4 rounded-full overflow-hidden bg-ryde-100 flex items-center justify-center">
                <img src="/TEAM/_MG_4778 - Ali A..jpg" alt="Ali Albaghdadi" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-display font-bold text-lg text-gray-900">Ali Albaghdadi</h3>
              <p className="text-sm text-gray-600 mb-2">PCB Designer</p>
              <p className="text-sm text-gray-700 flex-1">
                Ali designs and produces the PCB, making sure the electronics perform well and scale smoothly into production.
              </p>
            </div>

            {/* Jack Costello */}
            <div className="bg-gray-50 rounded-2xl p-6 flex flex-col h-full text-center items-center max-w-sm">
              <div className="w-16 h-16 mb-4 rounded-full overflow-hidden bg-ryde-100 flex items-center justify-center">
                <img src="/TEAM/1000001011821271 - Jack Costello.jpg" alt="Jack Costello" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-display font-bold text-lg text-gray-900">Jack Costello</h3>
              <p className="text-sm text-gray-600 mb-2">Electrical Lead</p>
              <p className="text-sm text-gray-700 flex-1">
                Jack designs, tests, and integrates the electronic systems that power Ryde Latch, working across teams to keep everything reliable.
              </p>
            </div>

            {/* Arnav Gupta */}
            <div className="bg-gray-50 rounded-2xl p-6 flex flex-col h-full text-center items-center max-w-sm">
              <div className="w-16 h-16 mb-4 rounded-full overflow-hidden bg-ryde-100 flex items-center justify-center">
                <img src="/TEAM/IMG_5138 - Arnav Gupta.png" alt="Arnav Gupta" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-display font-bold text-lg text-gray-900">Arnav Gupta</h3>
              <p className="text-sm text-gray-600 mb-2">Electrical / Embedded Engineer</p>
              <p className="text-sm text-gray-700 flex-1">
                Arnav works on the physical electronics and prototypes, managing power draw and usability across the electronic systems.
              </p>
            </div>

            {/* Aadishree Jain */}
            <div className="bg-gray-50 rounded-2xl p-6 flex flex-col h-full text-center items-center max-w-sm">
              <div className="w-16 h-16 mb-4 rounded-full overflow-hidden bg-ryde-100 flex items-center justify-center">
                <img src="/TEAM/IMG_4200 - Aadishree Jain.PNG" alt="Aadishree Jain" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-display font-bold text-lg text-gray-900">Aadishree Jain</h3>
              <p className="text-sm text-gray-600 mb-2">Mechanical Product Design Partner</p>
              <p className="text-sm text-gray-700 flex-1">
                Aadishree leads user-focused physical design, redesigning CAD models to optimize layout, durability, and manufacturability.
              </p>
            </div>

            {/* Ojas Shah */}
            <div className="bg-gray-50 rounded-2xl p-6 flex flex-col h-full text-center items-center max-w-sm">
              <div className="w-16 h-16 mb-4 rounded-full overflow-hidden bg-ryde-100 flex items-center justify-center">
                <img src="/TEAM/Ojas Shah Headshot - Ojas Shah.jpg" alt="Ojas Shah" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-display font-bold text-lg text-gray-900">Ojas Shah</h3>
              <p className="text-sm text-gray-600 mb-2">App Development</p>
              <p className="text-sm text-gray-700 flex-1">
                Ojas is building the Ryde Latch app to enable remote access and a smooth user experience for students on campus.
              </p>
            </div>

            {/* Marcus Lam */}
            <div className="bg-gray-50 rounded-2xl p-6 flex flex-col h-full text-center items-center max-w-sm">
              <div className="w-16 h-16 mb-4 rounded-full overflow-hidden bg-ryde-100 flex items-center justify-center">
                <img src="/TEAM/new_headshot - Marcus Lam.jpg" alt="Marcus Lam" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-display font-bold text-lg text-gray-900">Marcus Lam</h3>
              <p className="text-sm text-gray-600 mb-2">Manufacturing &amp; Materials Partner</p>
              <p className="text-sm text-gray-700 flex-1">
                Marcus focuses on manufacturing, materials, and production logistics to bring Ryde Latch from prototype to campus-ready hardware.
              </p>
            </div>
          </div>
        </div>
        
        {/* Founding Story */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-12">
          <h3 className="text-2xl font-display font-bold text-center mb-6">Our Founding Story</h3>

          <div className="flex flex-row justify-center items-center">
          <div className="text-center">
            <div className="w-32 h-32 mx-auto mb-4 bg-gray-200 rounded-full flex items-center justify-center">
              {/* <span className="text-2xl font-bold text-gray-500">ME</span> */}
              <img src="newassets/cole.jpg" alt="Cole Phillips" className="w-full h-full object-cover rounded-full" />
            </div>
            <h4 className="font-semibold text-gray-900">Cole Phillips</h4>
            <p className="text-gray-600 text-sm mb-2">CEO</p>
          </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Hi, I’m Cole. I founded Ryde Latch after my bike was stolen just a few weeks into my time on campus. When I shared what happened, most people just shrugged because it was such a common issue. Some even said it was my fault for not having a safe enough lock. But getting your bike stolen should never be your fault. That experience sparked my mission to make bike safety simple, affordable, and built into the places we ride every day.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
            My team and I are proud to be building something that makes our own campus a better place.
            </p>
          </div>
        </div>
        
        {/* Team Members */}
        {/* <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"> */}
        <div className="flex flex-row justify-center items-center">
          {/* <div className="text-center">
            <div className="w-32 h-32 mx-auto mb-4 bg-gray-200 rounded-full flex items-center justify-center">
              {/* <span className="text-2xl font-bold text-gray-500">ME</span> */}
              {/* <img src="/TEAM/cole.jpg" alt="Cole Phillips" className="w-full h-full object-cover rounded-full" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Cole Phillips</h4>
            <p className="text-gray-600 text-sm">CEO</p>
          </div> */} 
          
          {/* <div className="text-center">
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
          </div> */}
        </div>
        
        {/* Campus Pride */}
        <div className=" text-center">
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
