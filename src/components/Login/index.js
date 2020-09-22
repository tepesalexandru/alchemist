import React, { Component } from "react";
import Header from './Header';
import {Link} from 'react-router-dom';
import server from '../../server';

export default class Login extends Component {

  render() {
    return (
      <div>
        <Header />
        <div
          id="login"
          className="w-full max-w-lg mx-auto bg-white rounded-lg shadow-lg flex flex-col pt-8 relative overflow-hidden"
        >
          <h3 className="text-lg md:text-2xl font-medium mb-8 px-8 text-center">
            Sign in to myAlchemist
          </h3>
          {/* Buttons */}
          <div className="w-full grid grid-cols-1 gap-4 mb-8 px-8">
            <a
            href="http://localhost:4000/auth/facebook"
              className="flex items-center py-2 px-6 rounded text-white text-sm md:text-base focus:outline-none focus:shadow-outline"
              style={{ backgroundColor: "#4267b2" }}
            >
              <svg
                className="h-5 w-5 flex-shrink-0 mr-3"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24 12C24 5.37188 18.6281 0 12 0C5.37188 0 0 5.37188 0 12C0 18.6281 5.37188 24 12 24C12.0703 24 12.1406 24 12.2109 23.9953V14.6578H9.63281V11.6531H12.2109V9.44062C12.2109 6.87656 13.7766 5.47969 16.0641 5.47969C17.1609 5.47969 18.1031 5.55938 18.375 5.59688V8.27813H16.8C15.5578 8.27813 15.3141 8.86875 15.3141 9.73594V11.6484H18.2906L17.9016 14.6531H15.3141V23.5359C20.3297 22.0969 24 17.4797 24 12Z"
                  fill="white"
                />
              </svg>
              <span>Log in to Facebook</span>
            </a>
            <a
            href="http://localhost:4000/auth/google"
              className="flex items-center py-2 px-6 rounded text-white text-sm md:text-base focus:outline-none focus:shadow-outline"
              style={{ backgroundColor: "#4285f4" }}
            >
              <svg
                className="h-6 w-6 p-1 bg-white rounded-full flex-shrink-0 mr-3"
                width={512}
                height={512}
                viewBox="0 0 512 512"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M113.47 309.408L95.648 375.94L30.509 377.318C11.042 341.211 0 299.9 0 256C0 213.549 10.324 173.517 28.624 138.268H28.638L86.63 148.9L112.034 206.544C106.717 222.045 103.819 238.685 103.819 256C103.821 274.792 107.225 292.797 113.47 309.408Z"
                  fill="#FBBB00"
                />
                <path
                  d="M507.527 208.176C510.467 223.662 512 239.655 512 256C512 274.328 510.073 292.206 506.402 309.451C493.94 368.134 461.377 419.376 416.268 455.638L416.254 455.624L343.21 451.897L332.872 387.362C362.804 369.808 386.196 342.337 398.518 309.451H261.628V208.176H400.515H507.527Z"
                  fill="#518EF8"
                />
                <path
                  d="M416.253 455.624L416.267 455.638C372.396 490.901 316.666 512 256 512C158.509 512 73.748 457.509 30.509 377.319L113.47 309.409C135.089 367.107 190.748 408.18 256 408.18C284.047 408.18 310.323 400.598 332.87 387.362L416.253 455.624Z"
                  fill="#28B446"
                />
                <path
                  d="M419.404 58.936L336.471 126.832C313.136 112.246 285.552 103.82 256 103.82C189.271 103.82 132.571 146.777 112.035 206.544L28.638 138.268H28.624C71.23 56.123 157.06 0 256 0C318.115 0 375.068 22.126 419.404 58.936Z"
                  fill="#F14336"
                />
              </svg>
              <span>Continue with Google</span>
            </a>
          </div>
          {/* OR */}
          <div className="w-full mb-4 px-8">
            <div className="w-full h-px bg-gray-300" />
            <div className="flex justify-center -mt-4">
              <div className="bg-white px-6 h-8 flex items-center -mt-px">
                OR
              </div>
            </div>
          </div>
          {/* Form */}
          <form className="w-full grid grid-cols-1 gap-4 mb-4 px-8">
            {/* Username */}
            <div className="flex flex-col">
              <label
                className="text-sm font-medium text-gray-700 mb-1"
                htmlFor="username"
              >
                Username
              </label>
              <input
                className="w-full py-2 px-4 rounded-md border-2 border-gray-400 bg-gray-200 focus:outline-none focus:shadow-outline"
                type="email"
                placeholder="Email or Username"
              />
            </div>
            {/* Password */}
            <div className="flex flex-col">
              <label
                className="text-sm font-medium text-gray-700 mb-1"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="w-full py-2 px-4 rounded-md border-2 border-gray-400 bg-gray-200 focus:outline-none focus:shadow-outline"
                type="password"
                placeholder="myPassword123"
              />
            </div>
            {/* Remember Me */}
            <div className="flex items-center w-full">
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
                Remember Me
              </label>
            </div>
            {/* Submit */}
            <button className="w-full py-2 px-6 bg-purple-800 hover:bg-purple-700 text-white font-medium rounded-md focus:outline-none focus:shadow-outline text-center">
              Sign In
            </button>
          </form>
          {/* Forgot */}
          <div className="flex mb-4 px-8">
            <a
              className="flex text-sm font-medium text-purple-800 hover:text-purple-900 rounded focus:outline-none focus:shadow-outline"
              href="#"
            >
              Forgot Password?
            </a>
          </div>
          {/* Join */}
          <div className="w-full px-8 py-4 bg-gray-100 border-t border-gray-200">
            <p className="text-gray-700 font-medium text-center">
              Not a member yet?{" "}
              <Link to="/sign-up">
              <button
                onclick="joinShow()"
                className="text-purple-800 hover:text-purple-700 rounded focus:outline-none focus:shadow-outline underline"
              >
                Join Now
              </button>
              </Link>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
