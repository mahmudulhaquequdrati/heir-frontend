import React from "react";

export default function SignUpPage() {
  return (
    <div className="flex items-center h-screen">
      <div className="p-6 bg-white mx-auto rounded-2xl w-full sm:w-3/4 md:w-[60%] lg:w-[45%] shadow-xl ">
        <div className="mb-4 text-center">
          <h3 className="font-semibold text-2xl text-gray-800">Sign Up </h3>
          <p className="text-gray-400 mt-2">
            Please sign up your account here.
          </p>
        </div>
        <form className="px-8 pt-6 pb-8  bg-white rounded">
          <div className="mb-4 md:flex md:justify-between md:gap-4 space-y-2 md:space-y-0">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 tracking-wide">
                First Name
              </label>
              <input
                className=" w-full text-sm px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
                type=""
                placeholder="Your First Name"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 tracking-wide">
                Last Name
              </label>
              <input
                className=" w-full text-sm px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
                type=""
                placeholder="Your Last Name"
              />
            </div>
          </div>
          <div className="space-y-2 mb-4">
            <label className="text-sm font-medium text-gray-700 tracking-wide">
              Email
            </label>
            <input
              className=" w-full text-sm px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
              type=""
              placeholder="mail@gmail.com"
            />
          </div>
          <div className="mb-8 md:flex md:justify-between md:gap-4 space-y-2 md:space-y-0">
            <div className="space-y-2 w-full md:w-2/4 ">
              <label className="mb-5 text-sm font-medium text-gray-700 tracking-wide">
                Password
              </label>
              <input
                className="w-full content-center text-sm px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
                type=""
                placeholder="Enter your password"
              />
            </div>
            <div className="space-y-2 w-full md:w-2/4">
              <label className="mb-5  text-sm font-medium text-gray-700 tracking-wide">
                Confirm Password
              </label>
              <input
                className="w-full content-center text-sm px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
                type=""
                placeholder="Enter your password"
              />
            </div>
          </div>
          <div className="mb-6 text-center">
            <button
              className="w-full px-4 py-2 font-bold text-white bg-blue-400 rounded-full hover:bg-blue-500 focus:outline-none focus:shadow-outline"
              type="button"
            >
              Sign Up
            </button>
          </div>
          <hr className="mb-6 border-t" />

          <div className="text-center">
            <a
              className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
              href="./index.html"
            >
              Already have an account?{" "}
              <span className="underline">Sign In</span>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
