<<<<<<< HEAD
import React from 'react'

export default function Searchbar() {
    return (
        <div className="max-w-screen-xl w-full mx-auto px-4 -mt-24 mb-24 md:mb-32">
          <div className="max-w-2xl w-full mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
            {/* Inputs */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 pt-8 px-8">
              {/* Select */}
              <div className="flex flex-col">
                <label
                  className="font-medium text-gray-700 text-sm mb-1"
                  htmlFor="speciality"
                >
                  Speciality
                </label>
                <div className="relative">
                  <select
                    className="w-full border-2 border-gray-400 bg-gray-200 py-2 px-10 rounded-md text-lg appearance-none focus:outline-none focus:shadow-outline cursor-pointer"
                    name="speciality"
                    id="speciality"
                  >
                    <option value disabled selected hidden>
                      Select Speciality
                    </option>
                    <option value="Astrology">Astrology</option>
                    <option value="Astrology">Tarot</option>
                    <option value="Astrology">Medium</option>
                    <option value="Astrology">Wicca</option>
                  </select>
                  {/* Arrow */}
                  <div className="absolute top-0 right-0 flex items-center pr-3 h-full pointer-events-none">
                    <svg
                      className="h-5 w-5 flex-shrink-0"
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
                  </div>
                  {/* Icon */}
                  <div className="absolute top-0 left-0 flex items-center pl-3 h-full pointer-events-none">
                    <svg
                      className="h-5 w-5 flex-shrink-0 text-gray-600"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21 13.255C18.1405 14.4112 15.0844 15.0038 12 15C8.817 15 5.78 14.38 3 13.255M12 12H12.01M16 6V4C16 3.46957 15.7893 2.96086 15.4142 2.58579C15.0391 2.21071 14.5304 2 14 2H10C9.46957 2 8.96086 2.21071 8.58579 2.58579C8.21071 2.96086 8 3.46957 8 4V6H16ZM5 20H19C19.5304 20 20.0391 19.7893 20.4142 19.4142C20.7893 19.0391 21 18.5304 21 18V8C21 7.46957 20.7893 6.96086 20.4142 6.58579C20.0391 6.21071 19.5304 6 19 6H5C4.46957 6 3.96086 6.21071 3.58579 6.58579C3.21071 6.96086 3 7.46957 3 8V18C3 18.5304 3.21071 19.0391 3.58579 19.4142C3.96086 19.7893 4.46957 20 5 20Z"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              {/* Location */}
              <div className="flex flex-col">
                <label
                  className="font-medium text-gray-700 text-sm mb-1"
                  htmlFor="Location"
                >
                  Location
                </label>
                <div className="relative">
                  <input
                    name="Location"
                    className="w-full border-2 border-gray-400 bg-gray-200 py-2 pl-8 pr-4 rounded-md text-lg appearance-none focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="City"
                  />
                  {/* Icon */}
                  <div className="absolute top-0 left-0 flex items-center pl-2 h-full pointer-events-none">
                    <svg
                      className="h-5 w-5 flex-shrink-0 text-gray-600"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.657 16.657L13.414 20.9C13.2284 21.0858 13.0081 21.2331 12.7656 21.3336C12.523 21.4342 12.2631 21.4859 12.0005 21.4859C11.738 21.4859 11.478 21.4342 11.2354 21.3336C10.9929 21.2331 10.7726 21.0858 10.587 20.9L6.343 16.657C5.22422 15.5382 4.46234 14.1127 4.15369 12.5609C3.84504 11.009 4.00349 9.40053 4.60901 7.93874C5.21452 6.47696 6.2399 5.22755 7.55548 4.34852C8.87107 3.46949 10.4178 3.00031 12 3.00031C13.5822 3.00031 15.1289 3.46949 16.4445 4.34852C17.7601 5.22755 18.7855 6.47696 19.391 7.93874C19.9965 9.40053 20.155 11.009 19.8463 12.5609C19.5377 14.1127 18.7758 15.5382 17.657 16.657V16.657Z"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M14.1213 13.1213C14.6839 12.5587 15 11.7956 15 11C15 10.2044 14.6839 9.44129 14.1213 8.87868C13.5587 8.31607 12.7956 8 12 8C11.2044 8 10.4413 8.31607 9.87868 8.87868C9.31607 9.44129 9 10.2044 9 11C9 11.7956 9.31607 12.5587 9.87868 13.1213C10.4413 13.6839 11.2044 14 12 14C12.7956 14 13.5587 13.6839 14.1213 13.1213Z"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            {/* CTA */}
            <div className="w-full px-8 py-6 bg-gray-100 flex flex-col sm:flex-row sm:justify-between items-center">
              {/* Webcam */}
              <div className="flex items-center w-full sm:w-auto mb-8 sm:mb-0">
                <div className="relative h-5 w-5 mr-2 border-2 border-gray-600 rounded flex justify-center items-center cursor-pointer">
                  <input
                    id="webcamInput"
                    className="absolute top-0 left-0 w-full h-full appearance-none rounded cursor-pointer focus:outline-none focus:shadow-outline z-10"
                    type="checkbox"
                  />
                  <svg
                    className="h-3 w-3 text-gray-700 pointer-events-none cursor-pointer"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 13L9 17L19 7"
                      stroke="currentColor"
                      strokeWidth={3}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <label className="font-medium text-gray-700" htmlFor="webcam">
                  Webcam
                </label>
              </div>
              {/* Find  */}
              <button className="bg-orange-300 rounded-md focus:outline-none focus:shadow-outline text-orange-900 flex justify-center items-center py-2 px-4 font-medium w-full sm:w-auto">
                <svg
                  className="h-5 w-5 flex-shrink-0 mr-2"
=======
import React from "react";

export default function Searchbar() {
  return (
    <div className="max-w-screen-xl w-full mx-auto px-4 -mt-24 mb-24 md:mb-32">
      <div className="max-w-2xl w-full mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Inputs */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 pt-8 px-8">
          {/* Select */}
          <div className="flex flex-col">
            <label
              className="font-medium text-purple-700 text-sm mb-1"
              htmlFor="speciality"
            >
              Speciality
            </label>
            <div className="relative">
              <select
                className="w-full border-2 border-purple-400  bg-purple-200 py-2 px-10 rounded-md text-lg appearance-none focus:outline-none focus:shadow-outline cursor-pointer"
                name="speciality"
                id="speciality"
              >
                <option value disabled selected hidden>
                  Select Speciality
                </option>
                <option value="Astrology">Astrology</option>
                <option value="Astrology">Tarot</option>
                <option value="Astrology">Medium</option>
                <option value="Astrology">Wicca</option>
              </select>
              {/* Arrow */}
              <div className="absolute  top-0 right-0 flex items-center pr-3 h-full pointer-events-none">
                <svg
                  className="h-5 w-5  flex-shrink-0"
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
              </div>
              {/* Icon */}
              <div className="absolute top-0 left-0 flex items-center pl-3 h-full pointer-events-none">
                <svg
                  className="h-5 w-5 flex-shrink-0 text-purple-600"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 13.255C18.1405 14.4112 15.0844 15.0038 12 15C8.817 15 5.78 14.38 3 13.255M12 12H12.01M16 6V4C16 3.46957 15.7893 2.96086 15.4142 2.58579C15.0391 2.21071 14.5304 2 14 2H10C9.46957 2 8.96086 2.21071 8.58579 2.58579C8.21071 2.96086 8 3.46957 8 4V6H16ZM5 20H19C19.5304 20 20.0391 19.7893 20.4142 19.4142C20.7893 19.0391 21 18.5304 21 18V8C21 7.46957 20.7893 6.96086 20.4142 6.58579C20.0391 6.21071 19.5304 6 19 6H5C4.46957 6 3.96086 6.21071 3.58579 6.58579C3.21071 6.96086 3 7.46957 3 8V18C3 18.5304 3.21071 19.0391 3.58579 19.4142C3.96086 19.7893 4.46957 20 5 20Z"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
          {/* Location */}
          <div className="flex flex-col">
            <label
              className="font-medium text-purple-700 text-sm mb-1"
              htmlFor="Location"
            >
              Location
            </label>
            <div className="relative  ">
              <input
                name="Location"
                className="w-full text-purple-600 border-2 border-purple-400 bg-purple-200 py-2 pl-8 pr-4  rounded-md text-lg appearance-none focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="City"
              />
              {/* Icon */}
              <div className="absolute text-purple-600 top-0 left-0 flex items-center pl-2 h-full pointer-events-none">
                <svg
                  className="h-5 w-5 flex-shrink-0 text-purple-600"
>>>>>>> 48d21299b4ba44b17e5425befa162010b666b952
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
<<<<<<< HEAD
                    d="M21 21L15 15M17 10C17 10.9193 16.8189 11.8295 16.4672 12.6788C16.1154 13.5281 15.5998 14.2997 14.9497 14.9497C14.2997 15.5998 13.5281 16.1154 12.6788 16.4672C11.8295 16.8189 10.9193 17 10 17C9.08075 17 8.1705 16.8189 7.32122 16.4672C6.47194 16.1154 5.70026 15.5998 5.05025 14.9497C4.40024 14.2997 3.88463 13.5281 3.53284 12.6788C3.18106 11.8295 3 10.9193 3 10C3 8.14348 3.7375 6.36301 5.05025 5.05025C6.36301 3.7375 8.14348 3 10 3C11.8565 3 13.637 3.7375 14.9497 5.05025C16.2625 6.36301 17 8.14348 17 10Z"
=======
                    d="M17.657 16.657L13.414 20.9C13.2284 21.0858 13.0081 21.2331 12.7656 21.3336C12.523 21.4342 12.2631 21.4859 12.0005 21.4859C11.738 21.4859 11.478 21.4342 11.2354 21.3336C10.9929 21.2331 10.7726 21.0858 10.587 20.9L6.343 16.657C5.22422 15.5382 4.46234 14.1127 4.15369 12.5609C3.84504 11.009 4.00349 9.40053 4.60901 7.93874C5.21452 6.47696 6.2399 5.22755 7.55548 4.34852C8.87107 3.46949 10.4178 3.00031 12 3.00031C13.5822 3.00031 15.1289 3.46949 16.4445 4.34852C17.7601 5.22755 18.7855 6.47696 19.391 7.93874C19.9965 9.40053 20.155 11.009 19.8463 12.5609C19.5377 14.1127 18.7758 15.5382 17.657 16.657V16.657Z"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14.1213 13.1213C14.6839 12.5587 15 11.7956 15 11C15 10.2044 14.6839 9.44129 14.1213 8.87868C13.5587 8.31607 12.7956 8 12 8C11.2044 8 10.4413 8.31607 9.87868 8.87868C9.31607 9.44129 9 10.2044 9 11C9 11.7956 9.31607 12.5587 9.87868 13.1213C10.4413 13.6839 11.2044 14 12 14C12.7956 14 13.5587 13.6839 14.1213 13.1213Z"
>>>>>>> 48d21299b4ba44b17e5425befa162010b666b952
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
<<<<<<< HEAD
                Find Specialists
              </button>
            </div>
          </div>
        </div>
    )
=======
              </div>
            </div>
          </div>
        </div>
        {/* CTA */}
        <div className="w-full px-8 py-6 bg-gray-100 flex flex-col sm:flex-row sm:justify-between items-center">
          {/* Webcam */}
          <div className="flex items-center w-full sm:w-auto mb-8 sm:mb-0">
            <div className="relative h-5 w-5 mr-2 border-2 border-purple-600 rounded flex justify-center items-center cursor-pointer">
              <input
                id="webcamInput"
                className="absolute top-0 left-0 w-full h-full appearance-none rounded cursor-pointer focus:outline-none focus:shadow-outline z-10"
                type="checkbox"
              />
              <svg
                className="h-3 w-3 text-gray-700 pointer-events-none cursor-pointer"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 13L9 17L19 7"
                  stroke="currentColor"
                  strokeWidth={3}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <label className="font-medium text-purple-700" htmlFor="webcam">
              Webcam
            </label>
          </div>
          {/* Find  */}
          <button className="bg-orange-300 border border-purple-700 rounded-md focus:outline-none focus:shadow-outline text-orange-900 flex justify-center items-center py-2 px-4 font-medium w-full sm:w-auto">
            <svg
              className="h-5 w-5 flex-shrink-0 mr-2"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 21L15 15M17 10C17 10.9193 16.8189 11.8295 16.4672 12.6788C16.1154 13.5281 15.5998 14.2997 14.9497 14.9497C14.2997 15.5998 13.5281 16.1154 12.6788 16.4672C11.8295 16.8189 10.9193 17 10 17C9.08075 17 8.1705 16.8189 7.32122 16.4672C6.47194 16.1154 5.70026 15.5998 5.05025 14.9497C4.40024 14.2997 3.88463 13.5281 3.53284 12.6788C3.18106 11.8295 3 10.9193 3 10C3 8.14348 3.7375 6.36301 5.05025 5.05025C6.36301 3.7375 8.14348 3 10 3C11.8565 3 13.637 3.7375 14.9497 5.05025C16.2625 6.36301 17 8.14348 17 10Z"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Find Specialists
          </button>
        </div>
      </div>
    </div>
  );
>>>>>>> 48d21299b4ba44b17e5425befa162010b666b952
}
