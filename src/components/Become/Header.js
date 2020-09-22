import React from "react";

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { showLanguages, showMobile } from "../../actions/index";

function Header({ showLanguages, showMobile }) {
  return (
    <header
      className="w-full px-6 bg-cover bg-center"
      style={{
        backgroundImage: `url(" ${require("../../assets/stars.jpg")} ")`,
      }}
    >
      <nav className="max-w-screen-xl mx-auto w-full border-b border-purple-300 py-1 flex justify-between items-center text-white">
        <div className="flex flex-shrink-0">
          <Link to="/">
            <img
              className="h-12 md:h-16 flex-shrink-0"
              src={require("../../assets/logo.png")}
              alt="logo"
            />
          </Link>
        </div>
        {/* Desktop Nav */}
        <div className="items-center hidden md:flex">
          <button
            onClick={() => showLanguages(true)}
            id="langBtn"
            className="rounded-full focus:outline-none focus:shadow-outline px-1 flex items-center"
          >
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
          <Link to="/login">
            <div className="ml-8 py-2 px-3 border border-white hover:bg-purple-500 bg-purple-700 rounded-lg  focus:outline-none focus:shadow-outline">
              Sign In / Join
            </div>
          </Link>
        </div>
        {/* Menu Icon */}
        <div className="md:hidden z-50 transform scale-50">
          <button
            onClick={() => showMobile(true)}
            className="hamburger hamburger--emphatic focus:outline-none focus:shadow-outline rounded"
            type="button"
          >
            <span className="hamburger-box">
              <span className="hamburger-inner" />
            </span>
          </button>
        </div>
        {/* Dark Background */}
        <div
          id="darkBG"
          className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-50 z-40 opacity-0 pointer-events-none transition duration-150 cursor-pointer"
        />
        {/* Mobile Menu Bar */}
        <div
          id="menuM"
          className="absolute top-0 left-0 w-full px-6 transform translate-y-16 md:hidden z-50 opacity-0 pointer-events-none transition duration-150"
        >
          <div className="w-full p-8 rounded-lg shadow-xl bg-purple-900 text-white flex flex-col text-center">
            <div className="w-full flex justify-start mb-4">
              <button
                onClick={() => showLanguages(true)}
                id="langBtn"
                className="rounded-full focus:outline-none focus:shadow-outline px-1 flex items-center"
              >
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
            </div>
            <Link to="/login">
              <div className="py-2 px-3 bg-white text-purple-900 rounded-lg focus:outline-none focus:shadow-outline">
                Login / Sign Up
              </div>
            </Link>
          </div>
        </div>
      </nav>
      {/* Banner */}
      <div className="max-w-3xl w-full mx-auto py-32 px-6">
        <h1 className="text-3xl md:text-5xl leading-tight text-white font-bold text-center mb-4">
          Join our team and share your talent with the world.
        </h1>
        <p className="text-base md:text-xl text-purple-300 italic text-center">
          You bring your passion. We do the rest.
        </p>
      </div>
    </header>
  );
}

const mapStateToProps = (state) => {
  return {};
}

export default connect(mapStateToProps, {
  showLanguages, showMobile
})(Header);
