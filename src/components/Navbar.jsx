import React, { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-pink-50/95 via-pink-100/95 to-pink-200/95 backdrop-blur-md border-b border-pink-200 fixed top-0 w-full z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 group">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent transform group-hover:scale-105 transition-transform duration-300 cursor-pointer">
              DateMate ❤️
            </h1>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a
                href="/"
                className="relative text-gray-700 hover:text-pink-600 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 group"
              >
                <span className="relative z-10">Home</span>
                <span className="absolute inset-0 bg-pink-100 rounded-md transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </a>
              <a
                href="/match"
                className="relative text-gray-700 hover:text-pink-600 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 group"
              >
                <span className="relative z-10">Match</span>
                <span className="absolute inset-0 bg-pink-100 rounded-md transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </a>
              <a
                href="/chat"
                className="relative text-gray-700 hover:text-pink-600 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 group"
              >
                <span className="relative z-10">Chat</span>
                <span className="absolute inset-0 bg-pink-100 rounded-md transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </a>
              <a
                href="/signin"
                className="relative bg-gradient-to-r from-pink-500 to-rose-500 text-white px-6 py-2 rounded-full text-sm font-medium hover:from-pink-600 hover:to-rose-600 transition-all duration-300 shadow-md hover:shadow-xl transform hover:scale-105 hover:-translate-y-0.5"
              >
                <span className="relative z-10">Sign In</span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-pink-600 hover:bg-pink-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pink-500 transition-all duration-300 transform hover:scale-105"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden bg-gradient-to-b from-pink-50/95 to-pink-100/95 backdrop-blur-md border-t border-pink-200 shadow-lg`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a
            href="/"
            className="text-gray-700 hover:text-pink-600 hover:bg-pink-100 block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 transform hover:scale-105"
          >
            Home
          </a>
          <a
            href="/match"
            className="text-gray-700 hover:text-pink-600 hover:bg-pink-100 block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 transform hover:scale-105"
          >
            Match
          </a>
          <a
            href="/chat"
            className="text-gray-700 hover:text-pink-600 hover:bg-pink-100 block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 transform hover:scale-105"
          >
            Chat
          </a>
          <a
            href="/signin"
            className="bg-gradient-to-r from-pink-500 to-rose-500 text-white block px-3 py-2 rounded-md text-base font-medium hover:from-pink-600 hover:to-rose-600 transition-all duration-300 mx-3 mt-4 text-center transform hover:scale-105 shadow-md hover:shadow-lg"
          >
            Sign In
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
