import React, { useState } from "react";

function Landing() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    // Add your form submission logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-pink-100 to-pink-200 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-4000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-pink-100 to-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>

      {/* HERO SECTION */}
      <section className="relative z-10 min-h-screen flex flex-col lg:flex-row items-center justify-center px-6 lg:px-20 gap-8 lg:gap-12">
        {/* LEFT: TEXT & FORM */}
        <div className="flex-1 max-w-2xl text-center lg:text-left">
          <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-orange-500 rounded-full mr-2 animate-pulse"></span>
            Join 1M+ people finding love
          </div>
          
          <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight mb-6">
            Find Your Perfect{" "}
            <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
              Match
            </span>
          </h1>
          
          <p className="text-lg lg:text-xl text-gray-600 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
            Connect with people who share your values, interests, and dreams. 
            Start meaningful conversations that lead to lasting relationships.
          </p>

          {/* SIGNUP FORM */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8">
            <div className="relative w-full max-w-md">
              <input
                type="email"
                required
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-6 py-4 text-gray-700 bg-white border-2 border-gray-200 rounded-full focus:outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-100 transition-all duration-300 text-base"
              />
              <button 
                onClick={handleSubmit}
                className="absolute right-2 top-2 px-6 py-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold rounded-full hover:from-orange-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl" 
                type="button"
              >
                Get Started
              </button>
            </div>
          </div>
          
          <div className="flex items-center justify-center lg:justify-start gap-6 text-sm text-gray-500 mb-8">
            <div className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Free to join
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Verified profiles
            </div>
          </div>

          {/* COMPACT STATS */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
            <div className="flex items-center bg-white/80 backdrop-blur-sm rounded-xl px-4 py-3 shadow-md">
              <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full flex items-center justify-center mr-3">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div>
                <div className="text-lg font-bold text-gray-900">15k+</div>
                <div className="text-xs text-gray-600">Daily matches</div>
              </div>
            </div>
            
            <div className="flex items-center bg-white/80 backdrop-blur-sm rounded-xl px-4 py-3 shadow-md">
              <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full flex items-center justify-center mr-3">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <div>
                <div className="text-lg font-bold text-orange-600">1,456</div>
                <div className="text-xs text-gray-600">New members/day</div>
              </div>
            </div>
            
            <div className="flex items-center bg-white/80 backdrop-blur-sm rounded-xl px-4 py-3 shadow-md">
              <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full flex items-center justify-center mr-3">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <div className="text-lg font-bold text-gray-900">1M+</div>
                <div className="text-xs text-gray-600">Total members</div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: IMAGE */}
        <div className="flex-1 flex justify-center lg:justify-end items-center mt-8 lg:mt-12">
          <div className="relative">
            <div className="absolute -inset-3 bg-gradient-to-r from-orange-400 to-pink-400 rounded-2xl blur opacity-30 animate-pulse"></div>
            <img
              src="https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2"
              alt="Happy couple enjoying a romantic moment together"
              className="relative w-[220px] sm:w-[280px] lg:w-[350px] xl:w-[400px] rounded-2xl shadow-xl object-cover transform hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Landing;