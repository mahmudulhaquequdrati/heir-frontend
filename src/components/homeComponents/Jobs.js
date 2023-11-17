"use client";
import React, { useState } from "react";

const Jobs = () => {
  const [jobType, setJobType] = useState("Starting a business");

  const jobs = [
    {
      title: "Logo designer for photography business",
      price: 50,
      category: "Starting a business",
      rating: "4.6(1K+)",
    },
    {
      title: "Web development",
      price: 550,
      category: "Starting a business",
      rating: "4.6(1K+)",
    },
    {
      title: "Couch moved 1km down the road",
      price: 450,
      rating: "4.6(1K+)",
      category: "Moving",
    },
    {
      title: "Pick up & deliver a medium size fridge",
      price: 360,
      rating: "4.6(1K+)",
      category: "others",
    },
    {
      title: "Break down and take away boxes",
      price: 963,
      rating: "4.6(1K+)",
      category: "Moving",
    },
    {
      title: "Help moving house",
      price: 758,
      rating: "4.6(1K+)",
      category: "Pretties",
    },
    {
      title: "Sofa delivery",
      price: 1800,
      rating: "4.6(1K+)",
      category: "Pretties",
    },
    {
      title: "End of lease Clean",
      price: 150,
      rating: "4.6(1K+)",
      category: "Pretties",
    },
    {
      title: "Urgent removalist",
      price: 30,
      rating: "4.6(1K+)",
      category: "Maintenance",
    },
    {
      title: "Break down and take away boxes",
      price: 500,
      rating: "4.6(1K+)",
      category: "Maintenance",
    },
  ];

  return (
    <div className="items-center self-center flex container mx-auto flex-col mt-32 max-md:max-w-full max-md:mt-10">
      <div className="items-center self-center flex w-full md:w-[947px] max-w-full flex-col">
        <div className="items-center self-center flex w-full md:w-[677px] max-w-full flex-col">
          <div className="items-center self-stretch flex flex-col px-5 max-md:max-w-full">
            <div className="text-cyan-900 text-2xl sm:text-4xl text-center font-semibold tracking-wider -mr-5 max-md:max-w-full">
              See what others are getting done
            </div>{" "}
            <div className="text-cyan-900 text-center text-base leading-6 self-center md:whitespace-nowrap mt-2">
              Connect with unlimited quality talents to get any help.
            </div>
          </div>{" "}
          <div className="bg-orange-400 self-center flex w-[205px] h-[9px] flex-col mt-4 rounded-[50px]" />
        </div>{" "}
        <div className="justify-center items-start border border-[color:var(--Stoke,rgba(33,63,97,0.05))] md:shadow-2xl bg-white self-stretch flex gap-2 mt-10 px-5 py-2 md:rounded-[500px] border-solid max-md:max-w-full max-md:flex-wrap">
          <div
            className={`text-center cursor-pointer text-base font-medium whitespace-nowrap justify-center items-center flex-1 px-4 py-2.5 rounded-[50px] ${
              jobType === "Starting a business"
                ? "bg-cyan-900 text-white"
                : "text-cyan-900 bg-white"
            }`}
            onClick={(e) => setJobType("Starting a business")}
          >
            Starting a business
          </div>{" "}
          <div
            className={`text-center cursor-pointer text-base font-medium whitespace-nowrap justify-center items-center flex-1 px-4 py-2.5 rounded-[50px] ${
              jobType === "Moving"
                ? "bg-cyan-900 text-white"
                : "text-cyan-900 bg-white"
            }`}
            onClick={(e) => setJobType("Moving")}
          >
            Moving
          </div>{" "}
          <div
            className={`text-center cursor-pointer text-base font-medium whitespace-nowrap justify-center items-center flex-1 px-4 py-2.5 rounded-[50px] ${
              jobType === "Maintenance"
                ? "bg-cyan-900 text-white"
                : "text-cyan-900 bg-white"
            }`}
            onClick={(e) => setJobType("Maintenance")}
          >
            Maintenance
          </div>{" "}
          <div
            className={`text-center cursor-pointer text-base font-medium whitespace-nowrap justify-center items-center flex-1 px-4 py-2.5 rounded-[50px] ${
              jobType === "Pretties"
                ? "bg-cyan-900 text-white"
                : "text-cyan-900 bg-white"
            }`}
            onClick={(e) => setJobType("Pretties")}
          >
            Pretties
          </div>{" "}
          <div
            className={`text-center cursor-pointer text-base font-medium whitespace-nowrap justify-center items-center flex-1 px-4 py-2.5 rounded-[50px] ${
              jobType === "others" ? "bg-cyan-900 text-white" : "text-cyan-900"
            }`}
            onClick={(e) => setJobType("others")}
          >
            others
          </div>
        </div>
      </div>
      <div className="items-start self-stretch flex grow flex-col mt-16 max-md:max-w-full max-md:mt-10">
        <div className="self-stretch px-5 max-md:max-w-full">
          <div className="grid grid-cols-3 gap-5">
            {jobs
              ?.filter((job) => job?.category === jobType)
              .map((job) => (
                <div className="w-full items-center self-stretch border border-[color:var(--Stoke,rgba(33,63,97,0.05))] shadow-2xl bg-white flex grow flex-col mx-auto p-6 rounded-2xl border-solid max-md:mt-5 max-md:px-5">
                  <div className="text-white text-center text-xl font-medium leading-7 self-stretch justify-center items-center bg-[#213F61] w-full p-4 rounded-xl">
                    {job?.title}
                  </div>{" "}
                  <div className="justify-between items-start self-stretch flex w-full gap-5 mt-4 max-md:justify-center">
                    <div className="text-cyan-900 text-opacity-60 text-center text-base font-medium leading-5 self-center my-auto">
                      {job?.category}
                    </div>{" "}
                    <div className="text-orange-400 text-xl font-semibold leading-7 self-stretch">
                      {`$${job?.price}`}
                    </div>{" "}
                    <div className="items-start self-center flex gap-1 my-auto">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <g clipPath="url(#clip0_77_1257)">
                            <path
                              d="M15.2682 16.4806C15.567 17.4043 14.5068 18.1691 13.7246 17.5942L10.592 15.2918C10.2396 15.0329 9.7599 15.0329 9.40755 15.2918L6.27498 17.5942C5.49268 18.1691 4.43249 17.4043 4.7313 16.4806L5.94376 12.7324C6.07664 12.3216 5.93088 11.8719 5.58227 11.6172L2.42092 9.30732C1.63985 8.73662 2.04354 7.4999 3.01089 7.4999H6.89628C7.33084 7.4999 7.71567 7.21924 7.84845 6.80545L9.04759 3.06871C9.34473 2.14278 10.6548 2.14278 10.9519 3.06871L12.1511 6.80545C12.2839 7.21924 12.6687 7.4999 13.1033 7.4999H16.9881C17.9555 7.4999 18.3592 8.73655 17.5782 9.30729L14.4172 11.6172C14.0686 11.8719 13.9229 12.3216 14.0558 12.7324L15.2682 16.4806Z"
                              fill="#E78C3B"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_77_1257">
                              <rect width="20" height="20" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </span>
                      <div className="text-cyan-900 text-opacity-60 text-sm font-medium leading-5 self-center whitespace-nowrap my-auto">
                        {job?.rating}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>{" "}
      </div>
    </div>
  );
};

export default Jobs;
