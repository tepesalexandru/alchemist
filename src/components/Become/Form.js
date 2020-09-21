import React, { Component } from "react";

export default class Form extends Component {
  render() {
    return (
      <div className="max-w-screen-xl w-full mx-auto px-6 md:px-16 mb-24 md:mb-32">
        <form
          className="w-full bg-white rounded-lg shadow-lg pt-4 md:pt-12 overflow-hidden"
          action
        >
          <h2 className="text-2xl md:text-4xl font-medium mb-8 md:mb-12 text-center">
            Application Form
          </h2>
          {/* Inputs & Stuff */}
          <div className="px-6 md:px-16">
            {/* Personal Info */}
            <div className="flex mb-8">
              <h3 className="h-8 w-8 md:h-10 md:w-10 rounded-full border-4 border-purple-700 flex justify-center items-center text-sm md:text-xl mr-4 font-bold">
                1
              </h3>
              <h3 className="text-xl md:text-3xl font-medium text-center leading-none mt-1">
                Personal Info
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mb-6 md:mb-12 pb-6 md:pb-12 border-b">
              {/* First Name */}
              <div className="flex flex-col">
                <label
                  htmlFor="fName"
                  className="text-sm font-medium text-gray-700 mb-1"
                >
                  First Name
                </label>
                <input
                  className="w-full py-2 px-4 rounded-md border-2 border-gray-400 bg-gray-200 focus:outline-none focus:shadow-outline"
                  name="fName"
                  type="text"
                  placeholder="John"
                />
              </div>
              {/* Last Name */}
              <div className="flex flex-col">
                <label
                  htmlFor="lName"
                  className="text-sm font-medium text-gray-700 mb-1"
                >
                  Last Name
                </label>
                <input
                  className="w-full py-2 px-4 rounded-md border-2 border-gray-400 bg-gray-200 focus:outline-none focus:shadow-outline"
                  name="lName"
                  type="text"
                  placeholder="Doe"
                />
              </div>
              {/* Speciality */}
              <div className="flex flex-col">
                <label
                  htmlFor="speciality"
                  className="text-sm font-medium text-gray-700 mb-1"
                >
                  Speciality
                </label>
                <input
                  className="w-full py-2 px-4 rounded-md border-2 border-gray-400 bg-gray-200 focus:outline-none focus:shadow-outline"
                  name="speciality"
                  type="text"
                  placeholder="Atrologist, Fortune Teller etc"
                />
              </div>
              {/* Email */}
              <div className="flex flex-col">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  className="w-full py-2 px-4 rounded-md border-2 border-gray-400 bg-gray-200 focus:outline-none focus:shadow-outline"
                  name="email"
                  type="email"
                  placeholder="myEmail@email.com"
                />
              </div>
              {/* Phone */}
              <div className="flex flex-col">
                <label
                  htmlFor="phone"
                  className="text-sm font-medium text-gray-700 mb-1"
                >
                  Phone
                </label>
                <input
                  className="w-full py-2 px-4 rounded-md border-2 border-gray-400 bg-gray-200 focus:outline-none focus:shadow-outline"
                  name="phone"
                  type="tel"
                  placeholder="0123 456 789"
                />
              </div>
              {/* Postal Code */}
              <div className="flex flex-col">
                <label
                  className="text-sm font-medium text-gray-700 mb-1"
                  htmlFor="postalCode"
                >
                  Postal Code
                </label>
                <input
                  className="w-full py-2 px-4 rounded-md border-2 border-gray-400 bg-gray-200 focus:outline-none focus:shadow-outline"
                  name="postalCode"
                  type="text"
                  placeholder={"012356"}
                />
              </div>
            </div>
            {/* Professional Info */}
            <div className="flex mb-8">
              <h3 className="h-8 w-8 md:h-10 md:w-10 rounded-full border-4 border-purple-700 flex justify-center items-center text-sm md:text-xl mr-4 font-bold">
                2
              </h3>
              <h3 className="text-xl md:text-3xl font-medium text-center leading-none mt-1">
                Professional
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-8 mb-6 md:mb-12 pb-6 md:pb-12 border-b">
              {/* Experience */}
              <div className="flex flex-col">
                <p className="text-base md:text-lg font-medium mb-1">
                  Experience
                </p>
                <div className="relative w-full text-left text-xl font-medium flex items-center py-2">
                  <div className="h-6 w-6 bg-purple-700 rounded-full flex justify-center items-center mr-2 mt-px flex-shrink-0">
                    <input
                      className="cRInput absolute top-0 left-0 w-full h-full cursor-pointer focus:outline-none focus:shadow-outline"
                      type="radio"
                      name="Experience"
                      id="below1"
                      defaultValue="below1"
                    />
                    <div className="radioDot h-3 w-3 shadow bg-white rounded-full" />
                  </div>
                  <label htmlFor="below1">Below 1 year</label>
                </div>
                <div className="relative w-full text-left text-xl font-medium flex items-center py-2">
                  <div className="h-6 w-6 bg-purple-700 rounded-full flex justify-center items-center mr-2 mt-px flex-shrink-0">
                    <input
                      className="cRInput absolute top-0 left-0 w-full h-full cursor-pointer focus:outline-none focus:shadow-outline"
                      type="radio"
                      name="Experience"
                      id="y1-5"
                    />
                    <div className="radioDot h-3 w-3 shadow bg-white rounded-full" />
                  </div>
                  <label htmlFor="y1-5">1 - 5 years</label>
                </div>
                <div className="relative w-full text-left text-xl font-medium flex items-center py-2">
                  <div className="h-6 w-6 bg-purple-700 rounded-full flex justify-center items-center mr-2 mt-px flex-shrink-0">
                    <input
                      className="cRInput absolute top-0 left-0 w-full h-full cursor-pointer focus:outline-none focus:shadow-outline"
                      type="radio"
                      name="Experience"
                      id="y5-10"
                    />
                    <div className="radioDot h-3 w-3 shadow bg-white rounded-full" />
                  </div>
                  <label htmlFor="y5-10">5 - 10 years</label>
                </div>
                <div className="relative w-full text-left text-xl font-medium flex items-center py-2">
                  <div className="h-6 w-6 bg-purple-700 rounded-full flex justify-center items-center mr-2 mt-px flex-shrink-0">
                    <input
                      className="cRInput absolute top-0 left-0 w-full h-full cursor-pointer focus:outline-none focus:shadow-outline"
                      type="radio"
                      name="Experience"
                      id="more1"
                    />
                    <div className="radioDot h-3 w-3 shadow bg-white rounded-full" />
                  </div>
                  <label htmlFor="more1">More than 10 years</label>
                </div>
              </div>
              {/* Average Consults */}
              <div className="flex flex-col">
                <p className="text-base md:text-lg font-medium mb-1">
                  Average Consults
                  <span className="text-xs md:text-sm">(per month)</span>
                </p>
                <div className="relative w-full text-left text-xl font-medium flex items-center py-2">
                  <div className="h-6 w-6 bg-purple-700 rounded-full flex justify-center items-center mr-2 mt-px flex-shrink-0">
                    <input
                      className="cRInput absolute top-0 left-0 w-full h-full cursor-pointer focus:outline-none focus:shadow-outline"
                      type="radio"
                      name="Consults"
                      id="c0-15"
                    />
                    <div className="radioDot h-3 w-3 shadow bg-white rounded-full" />
                  </div>
                  <span>0 - 15</span>
                </div>
                <div className="relative w-full text-left text-xl font-medium flex items-center py-2">
                  <div className="h-6 w-6 bg-purple-700 rounded-full flex justify-center items-center mr-2 mt-px flex-shrink-0">
                    <input
                      className="cRInput absolute top-0 left-0 w-full h-full cursor-pointer focus:outline-none focus:shadow-outline"
                      type="radio"
                      name="Consults"
                      id="c15-30"
                    />
                    <div className="radioDot h-3 w-3 shadow bg-white rounded-full" />
                  </div>
                  <label htmlFor="c15-30">15 - 30</label>
                </div>
                <div className="relative w-full text-left text-xl font-medium flex items-center py-2">
                  <div className="h-6 w-6 bg-purple-700 rounded-full flex justify-center items-center mr-2 mt-px flex-shrink-0">
                    <input
                      className="cRInput absolute top-0 left-0 w-full h-full cursor-pointer focus:outline-none focus:shadow-outline"
                      type="radio"
                      name="Consults"
                      id="c30-50"
                    />
                    <div className="radioDot h-3 w-3 shadow bg-white rounded-full" />
                  </div>
                  <label htmlFor="c30-50">30 - 50</label>
                </div>
                <div className="relative w-full text-left text-xl font-medium flex items-center py-2">
                  <div className="h-6 w-6 bg-purple-700 rounded-full flex justify-center items-center mr-2 mt-px flex-shrink-0">
                    <input
                      className="cRInput absolute top-0 left-0 w-full h-full cursor-pointer focus:outline-none focus:shadow-outline"
                      type="radio"
                      name="Consults"
                      id="morec50"
                    />
                    <div className="radioDot h-3 w-3 shadow bg-white rounded-full" />
                  </div>
                  <label htmlFor="morec50">More than 50</label>
                </div>
              </div>
              {/* Cabinet */}
              <div className="flex flex-col">
                <p className="text-base md:text-lg font-medium mb-1">
                  Do you have a Cabinet or a place to recieve your Customers?
                </p>
                <div className="relative w-full text-left text-xl font-medium flex items-center py-2">
                  <div className="h-6 w-6 bg-purple-700 rounded-full flex justify-center items-center mr-2 mt-px flex-shrink-0">
                    <input
                      className="cRInput absolute top-0 left-0 w-full h-full cursor-pointer focus:outline-none focus:shadow-outline"
                      type="radio"
                      name="Cabinet"
                      id="cabYes"
                    />
                    <div className="radioDot h-3 w-3 shadow bg-white rounded-full" />
                  </div>
                  <label htmlFor="cabYes">Yes</label>
                </div>
                <div className="relative w-full text-left text-xl font-medium flex items-center py-2">
                  <div className="h-6 w-6 bg-purple-700 rounded-full flex justify-center items-center mr-2 mt-px flex-shrink-0">
                    <input
                      className="cRInput absolute top-0 left-0 w-full h-full cursor-pointer focus:outline-none focus:shadow-outline"
                      type="radio"
                      name="Cabinet"
                      id="cabNo"
                    />
                    <div className="radioDot h-3 w-3 shadow bg-white rounded-full" />
                  </div>
                  <label htmlFor="cabNo">No</label>
                </div>
              </div>
              {/* Work */}
              <div className="flex flex-col">
                <p className="text-base md:text-lg font-medium mb-1">
                  When will you be ready to Work?
                </p>
                <div className="relative w-full text-left text-xl font-medium flex items-center py-2">
                  <div className="h-6 w-6 bg-purple-700 rounded-full flex justify-center items-center mr-2 mt-px flex-shrink-0">
                    <input
                      className="cRInput absolute top-0 left-0 w-full h-full cursor-pointer focus:outline-none focus:shadow-outline"
                      type="radio"
                      name="workReady"
                      id="workNow"
                    />
                    <div className="radioDot h-3 w-3 shadow bg-white rounded-full" />
                  </div>
                  <label htmlFor="workNow">Now</label>
                </div>
                <div className="relative w-full text-left text-xl font-medium flex items-center py-2">
                  <div className="h-6 w-6 bg-purple-700 rounded-full flex justify-center items-center mr-2 mt-px flex-shrink-0">
                    <input
                      className="cRInput absolute top-0 left-0 w-full h-full cursor-pointer focus:outline-none focus:shadow-outline"
                      type="radio"
                      name="workReady"
                      id="workUnder1m"
                    />
                    <div className="radioDot h-3 w-3 shadow bg-white rounded-full" />
                  </div>
                  <label htmlFor="workUnder1m">Under 1 month</label>
                </div>
                <div className="relative w-full text-left text-xl font-medium flex items-center py-2">
                  <div className="h-6 w-6 bg-purple-700 rounded-full flex justify-center items-center mr-2 mt-px flex-shrink-0">
                    <input
                      className="cRInput absolute top-0 left-0 w-full h-full cursor-pointer focus:outline-none focus:shadow-outline"
                      type="radio"
                      name="workReady"
                      id="workAfter1"
                    />
                    <div className="radioDot h-3 w-3 shadow bg-white rounded-full" />
                  </div>
                  <label htmlFor="workAfter1">After 1 month</label>
                </div>
              </div>
            </div>
            {/* General Info */}
            <div className="flex mb-8">
              <h3 className="h-8 w-8 md:h-10 md:w-10 rounded-full border-4 border-purple-700 flex justify-center items-center text-sm md:text-xl mr-4 font-bold">
                3
              </h3>
              <h3 className="text-xl md:text-3xl font-medium text-center leading-none mt-1">
                General Info
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-8 pb-6 md:pb-12">
              {/* Improve */}
              <div className="flex flex-col">
                <p className="text-base md:text-lg font-medium mb-1">
                  What do you want to improve in your activity?
                </p>
                <div className="relative w-full text-left text-xl font-medium flex items-center py-2">
                  <div className="h-6 w-6 bg-purple-700 rounded-full flex justify-center items-center mr-2 mt-px flex-shrink-0">
                    <input
                      className="cRInput absolute top-0 left-0 w-full h-full cursor-pointer focus:outline-none focus:shadow-outline"
                      type="radio"
                      name="Improve"
                      id="improveCommMarketing"
                    />
                    <div className="radioDot h-3 w-3 shadow bg-white rounded-full" />
                  </div>
                  <label htmlFor="improveCommMarketing">
                    Communication / Marketing
                  </label>
                </div>
                <div className="relative w-full text-left text-xl font-medium flex items-center py-2">
                  <div className="h-6 w-6 bg-purple-700 rounded-full flex justify-center items-center mr-2 mt-px flex-shrink-0">
                    <input
                      className="cRInput absolute top-0 left-0 w-full h-full cursor-pointer focus:outline-none focus:shadow-outline"
                      type="radio"
                      name="Improve"
                      id="improveNoOfCustomers"
                    />
                    <div className="radioDot h-3 w-3 shadow bg-white rounded-full" />
                  </div>
                  <label htmlFor="improveNoOfCustomers">No. of Customers</label>
                </div>
                <div className="relative w-full text-left text-xl font-medium flex items-center py-2">
                  <div className="h-6 w-6 bg-purple-700 rounded-full flex justify-center items-center mr-2 mt-px flex-shrink-0">
                    <input
                      className="cRInput absolute top-0 left-0 w-full h-full cursor-pointer focus:outline-none focus:shadow-outline"
                      type="radio"
                      name="Improve"
                      id="improveConnection"
                    />
                    <div className="radioDot h-3 w-3 shadow bg-white rounded-full" />
                  </div>
                  <label htmlFor="improveConnection">
                    Community connection
                  </label>
                </div>
                <div className="relative w-full text-left text-xl font-medium flex items-center py-2">
                  <div className="h-6 w-6 bg-purple-700 rounded-full flex justify-center items-center mr-2 mt-px flex-shrink-0">
                    <input
                      className="cRInput absolute top-0 left-0 w-full h-full cursor-pointer focus:outline-none focus:shadow-outline"
                      type="radio"
                      name="Improve"
                      id="improveKnowledge"
                    />
                    <div className="radioDot h-3 w-3 shadow bg-white rounded-full" />
                  </div>
                  <label htmlFor="improveKnowledge">Knowledge</label>
                </div>
              </div>
              {/* Find */}
              <div className="flex flex-col">
                <p className="text-base md:text-lg font-medium mb-1">
                  How did you discover myAlchemist
                </p>
                <div className="relative w-full text-left text-xl font-medium flex items-center py-2">
                  <div className="h-6 w-6 bg-purple-700 rounded-full flex justify-center items-center mr-2 mt-px flex-shrink-0">
                    <input
                      className="cRInput absolute top-0 left-0 w-full h-full cursor-pointer focus:outline-none focus:shadow-outline"
                      type="radio"
                      name="Find"
                      id="findGoogle"
                    />
                    <div className="radioDot h-3 w-3 shadow bg-white rounded-full" />
                  </div>
                  <label htmlFor="findGoogle">Google</label>
                </div>
                <div className="relative w-full text-left text-xl font-medium flex items-center py-2">
                  <div className="h-6 w-6 bg-purple-700 rounded-full flex justify-center items-center mr-2 mt-px flex-shrink-0">
                    <input
                      className="cRInput absolute top-0 left-0 w-full h-full cursor-pointer focus:outline-none focus:shadow-outline"
                      type="radio"
                      name="Find"
                      id="findSocial"
                    />
                    <div className="radioDot h-3 w-3 shadow bg-white rounded-full" />
                  </div>
                  <label htmlFor="findSocial">Social Media</label>
                </div>
                <div className="relative w-full text-left text-xl font-medium flex items-center py-2">
                  <div className="h-6 w-6 bg-purple-700 rounded-full flex justify-center items-center mr-2 mt-px flex-shrink-0">
                    <input
                      className="cRInput absolute top-0 left-0 w-full h-full cursor-pointer focus:outline-none focus:shadow-outline"
                      type="radio"
                      name="Find"
                      id="findBlog"
                    />
                    <div className="radioDot h-3 w-3 shadow bg-white rounded-full" />
                  </div>
                  <label htmlFor="findBlog">Blog</label>
                </div>
                <div className="relative w-full text-left text-xl font-medium flex items-center py-2">
                  <div className="h-6 w-6 bg-purple-700 rounded-full flex justify-center items-center mr-2 mt-px flex-shrink-0">
                    <input
                      className="cRInput absolute top-0 left-0 w-full h-full cursor-pointer focus:outline-none focus:shadow-outline"
                      type="radio"
                      name="Find"
                      id="findPrivate"
                    />
                    <div className="radioDot h-3 w-3 shadow bg-white rounded-full" />
                  </div>
                  <label htmlFor="findPrivate">Private</label>
                </div>
                <div className="relative w-full text-left text-xl font-medium flex items-center py-2">
                  <div className="h-6 w-6 bg-purple-700 rounded-full flex justify-center items-center mr-2 mt-px flex-shrink-0">
                    <input
                      className="cRInput absolute top-0 left-0 w-full h-full cursor-pointer focus:outline-none focus:shadow-outline"
                      type="radio"
                      name="Find"
                      id="findOther"
                    />
                    <div className="radioDot h-3 w-3 shadow bg-white rounded-full" />
                  </div>
                  <label htmlFor="findOther">Other</label>
                </div>
              </div>
              {/* Information */}
              <div className="flex flex-col">
                <p className="text-base md:text-lg font-medium mb-1">
                  I want information about the myAlchemist Academy
                </p>
                <div className="relative w-full text-left text-xl font-medium flex items-center py-2">
                  <div className="h-6 w-6 bg-purple-700 rounded-full flex justify-center items-center mr-2 mt-px flex-shrink-0">
                    <input
                      className="cRInput absolute top-0 left-0 w-full h-full cursor-pointer focus:outline-none focus:shadow-outline"
                      type="radio"
                      name="Information"
                      id="infoYes"
                    />
                    <div className="radioDot h-3 w-3 shadow bg-white rounded-full" />
                  </div>
                  <label htmlFor="infoYes">Yes</label>
                </div>
                <div className="relative w-full text-left text-xl font-medium flex items-center py-2">
                  <div className="h-6 w-6 bg-purple-700 rounded-full flex justify-center items-center mr-2 mt-px flex-shrink-0">
                    <input
                      className="cRInput absolute top-0 left-0 w-full h-full cursor-pointer focus:outline-none focus:shadow-outline"
                      type="radio"
                      name="Information"
                      id="infoNo"
                    />
                    <div className="radioDot h-3 w-3 shadow bg-white rounded-full" />
                  </div>
                  <label htmlFor="infoNo">No</label>
                </div>
              </div>
            </div>
          </div>
          {/* Submit */}
          <div className="flex justify-end py-4 md:py-8 px-6 md:px-16 bg-gray-100 border-t">
            <input
              className="bg-orange-300 hover:bg-orange-400 text-orange-800 rounded-md px-6 py-3 focus:outline-none focus:shadow-outline cursor-pointer"
              type="submit"
              defaultValue="Submit Application"
            />
          </div>
        </form>
      </div>
    );
  }
}
