import React from "react";
import ReactSiema from 'react-siema';

export default function Services() {

  const options = {
    perPage: {
      1024: 4,
      768: 3,
      598: 2,
      1: 1.25,
    },
  }

  return (
    <React.Fragment>
      <div className="max-w-screen-xl w-full mx-auto px-4 md:px-16 mb-8">
        <h2 className="text-2xl md:text-4xl font-medium">Popular Services</h2>
      </div>
      <div className="relative max-w-screen-xl w-full mx-auto md:px-12 mb-24 md:mb-32">
        {/* Carousel */}
        
        <div className="w-full siema pb-2">
        <ReactSiema {...options}>
          {/* Slide */}
          <div className="px-4">
            <button className="w-full flex flex-col items-center bg-white rounded-lg shadow-md overflow-hidden focus:outline-none focus:shadow-outline">
              <div className="square w-full">
                <img
                  className="p-8 absolute top-0 left-0 w-full h-full object-cover"
                  src={require("../../assets/astrology.svg")}
                  alt="service"
                />
              </div>
              <h6 className="text-base md:text-xl font-medium px-4 pb-4 text-center">
                Astrology
              </h6>
            </button>
          </div>
          {/* Slide */}
          <div className="px-4">
            <button className="w-full flex flex-col items-center bg-white rounded-lg shadow-md overflow-hidden focus:outline-none focus:shadow-outline">
              <div className="square w-full">
                <img
                  className="p-8 absolute top-0 left-0 w-full h-full object-cover"
                  src={require("../../assets/tarot.svg")}
                  alt="service"
                />
              </div>
              <h6 className="text-base md:text-xl font-medium px-4 pb-4 text-center">
                Tarot
              </h6>
            </button>
          </div>
          {/* Slide */}
          <div className="px-4">
            <button className="w-full flex flex-col items-center bg-white rounded-lg shadow-md overflow-hidden focus:outline-none focus:shadow-outline">
              <div className="square w-full">
                <img
                  className="p-8 absolute top-0 left-0 w-full h-full object-cover"
                  src={require("../../assets/magic.svg")}
                  alt="service"
                />
              </div>
              <h6 className="text-base md:text-xl font-medium px-4 pb-4 text-center">
                Magic
              </h6>
            </button>
          </div>
          {/* Slide */}
          <div className="px-4">
            <button className="w-full flex flex-col items-center bg-white rounded-lg shadow-md overflow-hidden focus:outline-none focus:shadow-outline">
              <div className="square w-full">
                <img
                  className="p-8 absolute top-0 left-0 w-full h-full object-cover"
                  src={require("../../assets/candle.svg")}
                  alt="service"
                />
              </div>
              <h6 className="text-base md:text-xl font-medium px-4 pb-4 text-center">
                Candle
              </h6>
            </button>
          </div>
          {/* Slide */}
          <div className="px-4">
            <button className="w-full flex flex-col items-center bg-white rounded-lg shadow-md overflow-hidden focus:outline-none focus:shadow-outline">
              <div className="square w-full">
                <img
                  className="p-8 absolute top-0 left-0 w-full h-full object-cover"
                  src={require("../../assets/candle.svg")}
                  alt="service"
                />
              </div>
              <h6 className="text-base md:text-xl font-medium px-4 pb-4 text-center">
                Candle
              </h6>
            </button>
          </div>
          </ReactSiema>
        </div>
       
        {/* Buttons */}
        <button
          className="prev absolute left-0 h-10 w-10 md:flex justify-center items-center bg-white rounded-full focus:outline-none focus:shadow-outline transform translate-x-full -translate-y-1/2 shadow-md hidden"
          style={{ top: "50%" }}
        >
          <svg
            className="h-6 w-6 flex-shrink-0"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 19L8 12L15 5"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button
          className="next absolute right-0 h-10 w-10 md:flex justify-center items-center bg-white rounded-full focus:outline-none focus:shadow-outline transform -translate-x-full -translate-y-1/2 shadow-md hidden"
          style={{ top: "50%" }}
        >
          <svg
            className="h-6 w-6 flex-shrink-0"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 5L16 12L9 19"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </React.Fragment>
  );
}
