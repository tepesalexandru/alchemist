import React from "react";

export default function Header() {
  return (
    <header
      className="w-full px-4 bg-cover bg-center"
      style={{backgroundImage: `url(" ${require("../../assets/Back.png")} ")` }}
    >
      <nav className="max-w-screen-xl mx-auto w-full border-b border-purple-300 py-1 flex justify-between items-center">
        <img
          className="h-16 flex-shrink-0"
          src={require("../../assets/logo.png")}
          alt="logo"
        />
        <div className="items-center hidden md:flex">
          <button className="rounded-full focus:outline-none focus:shadow-outline text-white px-1 flex items-center">
            EN
            <svg
              className="h-5 w-5 ml-1"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 9L12 16L5 9"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button className="text-white ml-8 focus:outline-none focus:shadow-outline px-1">
            About Us
          </button>
          <button className="text-white ml-8 focus:outline-none focus:shadow-outline px-1">
            Support
          </button>
          <button className="text-white ml-8 focus:outline-none focus:shadow-outline px-1">
            Become an Alchemist
          </button>
          <button className="text-white ml-8 py-2 px-3 border border-white rounded-lg focus:outline-none focus:shadow-outline">
            Sign in / Join
          </button>
        </div>
        <button className="md:hidden focus:outline-none focus:shadow-outline rounded">
          <svg
            className="h-6 w-6"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13 18H20M4 6H20H4ZM4 12H20H4Z"
              stroke="white"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </nav>
      {/* Banner */}
      <div className="max-w-6xl w-full mx-auto pt-56 pb-48 px-4">
        <h1 className="text-3xl md:text-5xl leading-tight text-white font-bold text-center">
          An immersion into your Universe
        </h1>
        <div className="flex justify-center items-baseline">
          <p className="text-purple-300 text-base md:text-xl">Trusted by</p>
          <img
            className="flex-shrink-0 h-6 md:h-10 transform translate-y-1 md:translate-y-2 ml-3"
            src={require("../../assets/TrustpilotLogo.svg")}
            alt="Trustpilot Logo"
          />
          <img
            className="flex-shrink-0 h-4 md:h-8 transform translate-y-1 md:translate-y-3 ml-3"
            src={require("../../assets/GoogleLogo.svg")}
            alt="Google Logo"
          />
        </div>
      </div>
    </header>
  );
}
