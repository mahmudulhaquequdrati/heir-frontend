"use client";
import Link from "next/link";
import { useState } from "react";
import Card from "./Card";
import FilterSecton from "./FilterSecton";
import MyMap from "./Map";

const TaskSection = () => {
  const [openFilter, setOpenFilter] = useState(false);

  return (
    <div className="relative">
      <div>
        <div>
          <MyMap />
        </div>
        <div>
          <div className="mt-10">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                onClick={(e) => setOpenFilter(true)}
                type="search"
                id="default-search"
                className="block w-full p-4 pl-10 pr-10 text-sm text-gray-900 border border-gray-300 focus:border-gray-300 rounded-lg bg-white"
                placeholder="Search here..."
                required
              />
              <button
                type="submit"
                className="text-white absolute right-0 bottom-0 bg-secondery hover:bg-secondery font-medium rounded-lg text-sm px-10 py-[16.5px] "
              >
                Search
              </button>
            </div>
          </div>
        </div>

        <div className="rounded-xl shadow mt-10">
          <Link href="/browse-tasks/1">
            <Card />
          </Link>
          <Link href="/browse-tasks/2">
            <Card />
          </Link>
          <Link href="/browse-tasks/3">
            <Card />
          </Link>
          <Link href="/browse-tasks/4">
            <Card />
          </Link>
        </div>
      </div>

      <div
        className={`absolute bg-white transition-all duration-500  [transition-timing-function: cubic-bezier(0, 0, 0, 0.8)] ${
          openFilter
            ? "visible md:invisible top-0 md:top-[100%] md:-z-[999px] z-[999px] inset-0"
            : "invisible top-[100%] left-0 right-0 -z-[999px] inset-auto"
        }`}
      >
        <div className="relative mb-3 transition duration-300">
          <span
            className="absolute right-1 -top-6"
            onClick={(e) => setOpenFilter(false)}
          >
            <svg
              stroke="currentColor"
              className="font-bold text-2xl text-primary"
              fill="none"
              stroke-width="0"
              viewBox="0 0 15 15"
              height="1.5rem"
              width="1.5rem"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
                fill="currentColor"
              ></path>
            </svg>
          </span>
        </div>
        <FilterSecton />
      </div>
    </div>
  );
};

export default TaskSection;
