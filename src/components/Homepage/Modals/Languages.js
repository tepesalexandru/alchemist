import React from "react";
import {connect} from 'react-redux';

function Languages({showModal}) {
  if (showModal === false) return null;
  return (
    <div
      className="fixed z-50 px-4 max-w-sm w-full transform -translate-x-1/2 -translate-y-1/2"
      style={{ top: "50%", left: "50%" }}
    >
      <div className="py-4 px-6 bg-white rounded-lg shadow-xl flex flex-col">
        <h3 className="w-full text-left text-lg font-medium text-gray-700 mb-2">
          Select Language
        </h3>
        <button className="relative w-full text-left text-xl font-medium flex items-center py-4 border-b border-gray-600">
          <div className="h-6 w-6 bg-purple-700 rounded-full flex justify-center items-center mr-2 mt-px">
            <input
              id="langInput"
              className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
              type="radio"
              name="language"
              defaultChecked
            />
            <div className="radioDot h-3 w-3 shadow bg-white rounded-full" />
          </div>
          <span>English</span>
        </button>
        <button className="relative w-full text-left text-xl font-medium flex items-center py-4 border-b border-gray-600">
          <div className="h-6 w-6 bg-purple-700 rounded-full flex justify-center items-center mr-2 mt-px">
            <input
              id="langInput"
              className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
              type="radio"
              name="language"
            />
            <div className="radioDot h-3 w-3 shadow bg-white rounded-full" />
          </div>
          <span>French</span>
        </button>
        <button className="relative w-full text-left text-xl font-medium flex items-center py-4">
          <div className="h-6 w-6 bg-purple-700 rounded-full flex justify-center items-center mr-2 mt-px">
            <input
              id="langInput"
              className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
              type="radio"
              name="language"
            />
            <div className="radioDot h-3 w-3 shadow bg-white rounded-full" />
          </div>
          <span>Spanish</span>
        </button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    showModal: state.ui.showLanguage
  }
}

export default connect(mapStateToProps)(Languages);