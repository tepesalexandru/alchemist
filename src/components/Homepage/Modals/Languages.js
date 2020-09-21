import React, {useRef, useEffect} from "react";
import {connect} from 'react-redux';
import {selectLanguage, showLanguages} from '../../../actions/index';

function useOutsideAlerter(ref, showLanguages) {
  useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
          if (ref.current && !ref.current.contains(event.target)) {
            showLanguages(false)
          }
      }

      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
          // Unbind the event listener on clean up
          document.removeEventListener("mousedown", handleClickOutside);
      };
  }, [ref]);
}

function Languages({showModal, languages, selected, selectLanguage, showLanguages}) {
  const wrapperRef = useRef();
  useOutsideAlerter(wrapperRef, showLanguages);
  const renderLanguages = () => {
    return languages.map((language, index) => {
      let radioB = "";
      let bottomBorder = "";
      if (index !== 2) bottomBorder = "border-b border-gray-600"
      if (index === selected) radioB = <div className="radioDot h-3 w-3 shadow bg-white rounded-full" />;
      return (
        <button  onClick={() => selectLanguage(index)} key={index} className={`relative w-full text-left text-xl font-medium flex items-center py-4 ${bottomBorder}`}>
          <div className="h-6 w-6 bg-purple-700 rounded-full flex justify-center items-center mr-2 mt-px">
            <input
              id="langInput"
              className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
              type="radio"
              name="language"
            />
            {radioB}
          </div>
          <span>{language}</span>
        </button>
      )
    })
  }

  if (showModal === false) return null;
 
  return (
    <div
    ref={wrapperRef}
      className="fixed z-50 px-4 max-w-sm w-full transform -translate-x-1/2 -translate-y-1/2"
      style={{ top: "50%", left: "50%" }}
    >
      <div className="py-4 px-6 bg-white rounded-lg shadow-xl flex flex-col">
        <h3 className="w-full text-left text-lg font-medium text-gray-700 mb-2">
          Select Language
        </h3>
        {renderLanguages()}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    showModal: state.ui.showLanguage,
    languages: state.ui.languages,
    selected: state.ui.languageSelected
  }
}

export default connect(mapStateToProps, {
  selectLanguage, showLanguages
})(Languages);