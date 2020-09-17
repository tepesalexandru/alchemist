import React from 'react'

export default function Video() {
    return (
        <React.Fragment>
            <div className="max-w-screen-xl w-full mx-auto px-4 md:px-16 md:mb-16 pt-8 md:pt-0 -mb-1 text-white md:text-gray-900 bg-purple-800 md:bg-transparent">
          <h2 className="text-2xl md:text-4xl font-medium">
            A whole world of Alchemists at your fingertips...
          </h2>
        </div>
        <div className="w-full bg-purple-800 py-8 mb-24 md:mb-48">
          <div className="max-w-screen-xl w-full mx-auto px-4 md:px-16 md:-my-16 flex flex-col items-center md:flex-row">
            <iframe
              className="md:max-w-xs lg:max-w-md w-full rounded-lg shadow-md md:mr-8 lg:mr-16 mb-8 md:mb-0"
              width={560}
              height={250}
              src="https://www.youtube-nocookie.com/embed/n2PHnUCTcSc"
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <ul className="w-full flex flex-col flex-1">
              <li className="w-full flex text-xl text-white mb-4">
                <svg
                  className="w-6 h-6 text-indigo-300 mt-1 mr-3 flex-shrink-0"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 8C10.343 8 9 8.895 9 10C9 11.105 10.343 12 12 12C13.657 12 15 12.895 15 14C15 15.105 13.657 16 12 16M12 8V16M12 8C13.11 8 14.08 8.402 14.599 9M12 8V7M12 16V17M12 16C10.89 16 9.92 15.598 9.401 15M21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>The best for every Budget</span>
              </li>
              <li className="w-full flex text-xl text-white mb-4">
                <svg
                  className="w-6 h-6 text-indigo-300 mt-1 mr-3 flex-shrink-0"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 12L11 14L15 9.99997M20.618 5.98397C17.4561 6.15189 14.3567 5.05858 12 2.94397C9.64327 5.05858 6.5439 6.15189 3.382 5.98397C3.12754 6.96908 2.99918 7.98252 3 8.99997C3 14.591 6.824 19.29 12 20.622C17.176 19.29 21 14.592 21 8.99997C21 7.95797 20.867 6.94797 20.618 5.98397Z"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Protected Payments</span>
              </li>
              <li className="w-full flex text-xl text-white">
                <svg
                  className="w-6 h-6 text-indigo-300 mt-1 mr-3 flex-shrink-0"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 8V12L15 15M21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>24x7 Support</span>
              </li>
            </ul>
          </div>
        </div>
        </React.Fragment>
    )
}
