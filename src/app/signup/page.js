import React from "react";

export default function SignUpPage() {
  return (
    <div className="flex items-center h-screen">
      <div class="p-6 bg-white mx-auto rounded-2xl w-full sm:w-3/4 md:w-[60%] lg:w-[45%] shadow-xl ">
        <div class="mb-4 text-center">
          <h3 class="font-semibold text-2xl text-gray-800">Sign Up </h3>
          <p class="text-gray-400 mt-2">Please sign up your account here.</p>
        </div>
        <form class="px-8 pt-6 pb-8  bg-white rounded">
          <div class="mb-4 md:flex md:justify-between md:gap-4 space-y-2 md:space-y-0">
            <div class="space-y-2">
              <label class="text-sm font-medium text-gray-700 tracking-wide">
                First Name
              </label>
              <input
                class=" w-full text-sm px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
                type=""
                placeholder="Your First Name"
              />
            </div>
            <div class="space-y-2">
              <label class="text-sm font-medium text-gray-700 tracking-wide">
                Last Name
              </label>
              <input
                class=" w-full text-sm px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
                type=""
                placeholder="Your Last Name"
              />
            </div>
          </div>
          <div class="space-y-2 mb-4">
            <label class="text-sm font-medium text-gray-700 tracking-wide">
              Email
            </label>
            <input
              class=" w-full text-sm px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
              type=""
              placeholder="mail@gmail.com"
            />
          </div>
          <div class="mb-8 md:flex md:justify-between md:gap-4 space-y-2 md:space-y-0">
            <div class="space-y-2 w-full md:w-2/4 ">
              <label class="mb-5 text-sm font-medium text-gray-700 tracking-wide">
                Password
              </label>
              <input
                class="w-full content-center text-sm px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
                type=""
                placeholder="Enter your password"
              />
            </div>
            <div class="space-y-2 w-full md:w-2/4">
              <label class="mb-5  text-sm font-medium text-gray-700 tracking-wide">
                Confirm Password
              </label>
              <input
                class="w-full content-center text-sm px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
                type=""
                placeholder="Enter your password"
              />
            </div>
          </div>
          <div class="mb-6 text-center">
            <button
              class="w-full px-4 py-2 font-bold text-white bg-blue-400 rounded-full hover:bg-blue-500 focus:outline-none focus:shadow-outline"
              type="button"
            >
              Sign Up
            </button>
          </div>
          <hr class="mb-6 border-t" />

          <div class="text-center">
            <a
              class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
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
