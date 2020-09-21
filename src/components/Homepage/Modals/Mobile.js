import React, { useRef, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { showMobile, showLanguages } from "../../../actions/index";

function useOutsideAlerter(ref, showMobile) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside2(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        console.log("ha!")
        showMobile(false);
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside2);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside2);
    };
  }, [ref]);
}

function Mobile({ showModal, showMobile, showLanguages }) {
  const wrapperRef = useRef();
  useOutsideAlerter(wrapperRef, showMobile);
  if (showModal === false) return null;

  return (
    <div
    ref={wrapperRef}
      id="menuM"
      className="absolute top-0 left-0 w-full px-6 transform translate-y-16 md:hidden z-50  transition duration-150"
    >
      <div  className="w-full p-8 rounded-lg shadow-xl bg-purple-900 text-white flex flex-col text-center">
        <div className="w-full flex justify-start mb-4">
          <button
          onClick={() => {
            showMobile(false)
            showLanguages(true);
           
          }}
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
        <a
          href="#"
          className="mb-2 py-2 focus:outline-none focus:shadow-outline px-1"
        >
          About Us
        </a>
        <a
          href="#"
          className="mb-2 py-2 focus:outline-none focus:shadow-outline px-1"
        >
          Support
        </a>
        <Link to="/become" onClick={() => showMobile(false)}>
          <div className="mb-4 py-2 focus:outline-none focus:shadow-outline px-1">
            Become an Alchemist
          </div>
        </Link>
        <Link to="/login"  onClick={() => showMobile(false)}>
          <div className="py-2 px-3 bg-white text-purple-900 rounded-lg focus:outline-none focus:shadow-outline">
            Login / Sign Up
          </div>
        </Link>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    showModal: state.ui.showMobile,
  };
};

export default connect(mapStateToProps, {
  showMobile, showLanguages
})(Mobile);
