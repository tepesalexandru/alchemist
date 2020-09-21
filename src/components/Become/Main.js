import React from 'react'

export default function Main() {
    return (
        <React.Fragment>
            <div className="w-full mb-24 md:mb-32 bg-gradient-to-r from-pink-600 to-purple-700">
            <h3 className="max-w-screen-xl w-full mx-auto px-6 md:px-16 py-8 md:py-16 text-base md:text-xl italic text-white text-center">
              One day, alternative therapists will be a part of the personal
              &amp; professional process. For now, the public must have easy
              access to professionals they can trust. And it is at myAlchemist
              where they will find them.
            </h3>
          </div>
          {/* Out Criteria */}
          <div className="max-w-screen-xl w-full mx-auto px-6 md:px-16 mb-24 md:mb-32">
            <h2 className="text-2xl md:text-4xl font-medium mb-8 text-center">
              Our Selection Criteria
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              <div className="w-full flex flex-col items-center bg-white rounded-lg shadow-md overflow-hidden">
                <div className="square w-full flex-shrink-0">
                  <img
                    className="p-8 lg:p-12 xl:p-16 lg:-mt-4 absolute top-0 left-0 w-full h-full object-cover"
                    src={require("../../assets/certificate.svg")}
                    alt="service"
                  />
                </div>
                <h6 className="text-base lg:text-xl font-medium px-6 pb-4 text-center lg:-mt-8">
                  Valid Experience
                </h6>
              </div>
              <div className="w-full flex flex-col items-center bg-white rounded-lg shadow-md overflow-hidden">
                <div className="square w-full flex-shrink-0">
                  <img
                    className="p-8 lg:p-12 xl:p-16 lg:-mt-4 absolute top-0 left-0 w-full h-full object-cover"
                    src={require("../../assets/community.svg")}
                    alt="service"
                  />
                </div>
                <h6 className="text-base lg:text-xl font-medium px-6 pb-4 text-center lg:-mt-8">
                  Highly Recommended
                </h6>
              </div>
              <div className="w-full flex flex-col items-center bg-white rounded-lg shadow-md overflow-hidden">
                <div className="square w-full flex-shrink-0">
                  <img
                    className="p-8 lg:p-12 xl:p-16 lg:-mt-4 absolute top-0 left-0 w-full h-full object-cover"
                    src={require("../../assets/review.svg")}
                    alt="service"
                  />
                </div>
                <h6 className="text-base lg:text-xl font-medium px-6 pb-4 text-center lg:-mt-8">
                  Verified Reviews
                </h6>
              </div>
              <div className="w-full flex flex-col items-center bg-white rounded-lg shadow-md overflow-hidden">
                <div className="square w-full flex-shrink-0">
                  <img
                    className="p-8 lg:p-12 xl:p-16 lg:-mt-4 absolute top-0 left-0 w-full h-full object-cover"
                    src={require("../../assets/secret-file.svg")}
                    alt="service"
                  />
                </div>
                <h6 className="text-base lg:text-xl font-medium px-6 pb-4 text-center lg:-mt-8">
                  Customer Privacy
                </h6>
              </div>
            </div>
          </div>
          {/* Tagline 2 */}
          <div className="w-full mb-24 md:mb-32 bg-purple-800">
            <h3 className="max-w-screen-xl w-full mx-auto px-6 md:px-16 py-8 md:py-16 text-lg md:text-2xl text-white text-center">
              "<span className="bold italic">myAlchemist</span> is dedicated for
              practitioners who want to develop their activity and join a caring
              and serious network of alternative theraputs."
            </h3>
          </div>
        </React.Fragment>
    )
}
