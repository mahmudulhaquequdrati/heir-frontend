/* eslint-disable react/no-unescaped-entities */
import React from "react";

export default function Footer() {
  return (
    <div className="bg-white py-8 px-24">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full md:w-1/3 lg:w-1/3 ">
          <h4 className="text-lg font-bold text-gray-700 mb-4">Information</h4>
          <ul className="text-gray-500 text-sm space-y-4">
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
          </ul>
        </div>

        <div className="w-full md:w-1/3 lg:w-1/3 ">
          <h4 className="text-lg font-bold text-gray-700 mb-4">About</h4>
          <ul className="text-gray-500 text-sm space-y-4">
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Career</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>

        <div className="w-full md:w-1/3 lg:w-1/3 ">
          <h4 className="text-lg font-bold text-gray-700 mb-4">Subscribe</h4>
          <div className="relative">
            <input
              type="email"
              placeholder="Your email"
              className="rounded-lg py-2 px-3 w-full border border-gray-300 focus:outline-none focus:border-blue-400"
            />
            <button className="absolute right-0 top-0 h-full bg-blue-500 text-white px-4 rounded-lg">
              Subscribe
            </button>
          </div>
          <p className="text-gray-500 text-sm mt-2">We don't spam</p>
        </div>
      </div>

      <div className="mt-8 flex justify-between items-center">
        <div className="text-gray-600">
          <a href="#">Terms</a>
          <a href="#" className="ml-4">
            Privacy
          </a>
          <a href="#" className="ml-4">
            Cookies
          </a>
        </div>
        {/* <div className="text-gray-600 flex gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M22 2H2a2 2 0 00-2 2v18a2 2 0 002 2h11v-7H9V9h4V7c0-4.418 3.582-8 8-8h2v5h-5a2 2 0 00-2 2v3h7v6h-7a2 2 0 00-2 2v6h7a2 2 0 002-2v-6h-2v7h11a2 2 0 002-2V4a2 2 0 00-2-2z"
              fill="#1877f2"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm5-13h-1.2a3.745 3.745 0 00-3.8 3.8V9H7v7h5v-3.8c0-2.16 1.68-3.8 3.8-3.8H17v-3z"
              fill="#E4405F"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M21 3H3a2 2 0 00-2 2v16a2 2 0 002 2h18a2 2 0 002-2V5a2 2 0 00-2-2zM8 18H5V9h3v9zm-1.5-10.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zM19 18h-3v-4.5a2 2 0 00-2-2 2 2 0 00-2 2V18h-3V9h3v1.5a2 2 0 002 2 2 2 0 002-2V9h3v9z"
              fill="#0A66C2"
            />
          </svg>
        </div> */}
      </div>
    </div>
  );
}
