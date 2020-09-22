import React from "react";
import ReactSiema from "sns-react-siema";

export default function Inspired() {
  const options = {
    resizeDebounce: 250,
    duration: 200,
    easing: "ease-out",
    perPage: {
      1024: 4,
      768: 3,
      598: 2,
      1: 1.25,
    },
    startIndex: 3,
    draggable: true,
    loop: false,
  };
  let slider;

  return (
    <div>
      <div className="max-w-screen-xl w-full mx-auto px-4 md:px-16 mb-8">
        <h2 className="text-2xl md:text-4xl font-medium">
          Get inspired by myAlchemist Academy
        </h2>
      </div>
      <div className="relative max-w-screen-xl w-full mx-auto md:px-12 mb-24 md:mb-32">
        {/* Carousel */}
        <div className="w-full siema2 pb-2">
<<<<<<< HEAD
          <ReactSiema {...options}  ref={siema => slider = siema}>
=======
          <ReactSiema {...options} ref={(siema) => (slider = siema)}>
>>>>>>> 48d21299b4ba44b17e5425befa162010b666b952
            <div className="px-4">
              <button className="w-full flex flex-col bg-white rounded-lg shadow-md overflow-hidden focus:outline-none focus:shadow-outline">
                <div className="rect w-full">
                  <img
                    className="w-full h-full absolute top-0 left-0 object-cover"
<<<<<<< HEAD
                    src={require("../../assets/Back.png")}
=======
                    src={require("../../assets/summer.jpg")}
>>>>>>> 48d21299b4ba44b17e5425befa162010b666b952
                    alt=""
                  />
                </div>
                <div className="w-full py-2 px-4 flex flex-col">
                  <h6 className="text-base font-medium truncate">
                    Personal Development
                  </h6>
<<<<<<< HEAD
                  <p className="text-sm text-gray-700 truncate">by Lorena</p>
=======
                  <p className="text-sm text-purple-500 truncate">by Lorena</p>
>>>>>>> 48d21299b4ba44b17e5425befa162010b666b952
                </div>
              </button>
            </div>
            {/* Slide */}
            <div className="px-4">
              <button className="w-full flex flex-col bg-white rounded-lg shadow-md overflow-hidden focus:outline-none focus:shadow-outline">
                <div className="rect w-full">
                  <img
                    className="w-full h-full absolute top-0 left-0 object-cover"
<<<<<<< HEAD
                    src={require("../../assets/Back.png")}
=======
                    src={require("../../assets/flammarion-universum.jpg")}
>>>>>>> 48d21299b4ba44b17e5425befa162010b666b952
                    alt=""
                  />
                </div>
                <div className="w-full py-2 px-4 flex flex-col">
                  <h6 className="text-base font-medium truncate">
<<<<<<< HEAD
                    Personal Development
                  </h6>
                  <p className="text-sm text-gray-700 truncate">by Lorena</p>
=======
                    Mystical Art
                  </h6>
                  <p className="text-sm text-purple-500 truncate">by Mathias</p>
>>>>>>> 48d21299b4ba44b17e5425befa162010b666b952
                </div>
              </button>
            </div>
            {/* Slide */}
            <div className="px-4">
              <button className="w-full flex flex-col bg-white rounded-lg shadow-md overflow-hidden focus:outline-none focus:shadow-outline">
                <div className="rect w-full">
                  <img
                    className="w-full h-full absolute top-0 left-0 object-cover"
<<<<<<< HEAD
                    src={require("../../assets/Back.png")}
=======
                    src={require("../../assets/milkyway.jpg")}
>>>>>>> 48d21299b4ba44b17e5425befa162010b666b952
                    alt=""
                  />
                </div>
                <div className="w-full py-2 px-4 flex flex-col">
<<<<<<< HEAD
                  <h6 className="text-base font-medium truncate">
                    Personal Development
                  </h6>
                  <p className="text-sm text-gray-700 truncate">by Lorena</p>
=======
                  <h6 className="text-base font-medium truncate">Knowledge</h6>
                  <p className="text-sm text-purple-500 truncate">by Thea</p>
>>>>>>> 48d21299b4ba44b17e5425befa162010b666b952
                </div>
              </button>
            </div>
            {/* Slide */}
            <div className="px-4">
              <button className="w-full flex flex-col bg-white rounded-lg shadow-md overflow-hidden focus:outline-none focus:shadow-outline">
                <div className="rect w-full">
                  <img
                    className="w-full h-full absolute top-0 left-0 object-cover"
<<<<<<< HEAD
                    src={require("../../assets/Back.png")}
=======
                    src={require("../../assets/Screenshots.png")}
>>>>>>> 48d21299b4ba44b17e5425befa162010b666b952
                    alt=""
                  />
                </div>
                <div className="w-full py-2 px-4 flex flex-col">
                  <h6 className="text-base font-medium truncate">
                    Personal Development
                  </h6>
<<<<<<< HEAD
                  <p className="text-sm text-gray-700 truncate">by Lorena</p>
=======
                  <p className="text-sm text-purple-500 truncate">by Beaty</p>
>>>>>>> 48d21299b4ba44b17e5425befa162010b666b952
                </div>
              </button>
            </div>
            {/* Slide */}
            <div className="px-4">
              <button className="w-full flex flex-col bg-white rounded-lg shadow-md overflow-hidden focus:outline-none focus:shadow-outline">
                <div className="rect w-full">
                  <img
                    className="w-full h-full absolute top-0 left-0 object-cover"
<<<<<<< HEAD
                    src={require("../../assets/Back.png")}
=======
                    src={require("../../assets/summer.jpg")}
>>>>>>> 48d21299b4ba44b17e5425befa162010b666b952
                    alt=""
                  />
                </div>
                <div className="w-full py-2 px-4 flex flex-col">
                  <h6 className="text-base font-medium truncate">
<<<<<<< HEAD
                    Personal Development
                  </h6>
                  <p className="text-sm text-gray-700 truncate">by Lorena</p>
=======
                    Personal Astrologie
                  </h6>
                  <p className="text-sm text-purple-500 truncate">by Alex</p>
>>>>>>> 48d21299b4ba44b17e5425befa162010b666b952
                </div>
              </button>
            </div>
          </ReactSiema>
        </div>
        {/* Buttons */}
        <button
<<<<<<< HEAD
        onClick={() => slider.prev()}
=======
          onClick={() => slider.prev()}
>>>>>>> 48d21299b4ba44b17e5425befa162010b666b952
          className="prev2 absolute left-0 h-10 w-10 md:flex justify-center items-center bg-white rounded-full focus:outline-none focus:shadow-outline transform translate-x-full -translate-y-1/2 shadow-md hidden"
          style={{ top: "40%" }}
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
<<<<<<< HEAD
        onClick={() => slider.next()}
=======
          onClick={() => slider.next()}
>>>>>>> 48d21299b4ba44b17e5425befa162010b666b952
          className="next2 absolute right-0 h-10 w-10 md:flex justify-center items-center bg-white rounded-full focus:outline-none focus:shadow-outline transform -translate-x-full -translate-y-1/2 shadow-md hidden"
          style={{ top: "40%" }}
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
    </div>
  );
}
