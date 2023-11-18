"use client";
import React from "react";
import ServiceCard from "./ServiceCard";

const servicesList = [
  {
    id: 1,
    title: "Landing page design",
    price: 150,
    image: "/services/service1.png",
    category: "Design",
    rating: "4.6 (1k+)",
  },
  {
    id: 2,
    title: "Mobile app design",
    price: 250,
    image: "/services/service2.png",
    category: "Design",
    rating: "4.3 (2k+)",
  },
  {
    id: 3,
    title: "Web app design",
    price: 170,
    image: "/services/service3.png",
    category: "Design",
    rating: "4.3 (1k+)",
  },
  {
    id: 4,
    title: "Landing page design",
    price: 120,
    image: "/services/service1.png",
    category: "Design",
    rating: "4.6 (1k+)",
  },
  //   {
  //     id: 5,
  //     title: "Mobile app design",
  //     price: 250,
  //     image: "/services/service2.png",
  //     category: "Design",
  //     rating: "4.3 (2k+)",
  //   },
];

const ServicesListing = () => {
  return (
    <div className="py-[30px] md:py-[45px] lg:py-[60px] w-full">
      <div className="w-full flex items-center justify-between pb-4 md:pb-6 border-b border-[#213f610d]">
        <h1 className="text-primary font-semibold font-clash text-2xl">
          Service Listing
        </h1>
        <div className="w-fit h-fit flex items-center gap-2">
          <button className="rounded-full p-[7px] border">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M6.07441 8.65997L9.52192 12.1014C9.57854 12.1585 9.64591 12.2038 9.72014 12.2347C9.79436 12.2656 9.87397 12.2816 9.95438 12.2816C10.0348 12.2816 10.1144 12.2656 10.1886 12.2347C10.2629 12.2038 10.3302 12.1585 10.3868 12.1014C10.5003 11.9873 10.564 11.8329 10.564 11.672C10.564 11.5111 10.5003 11.3567 10.3868 11.2426L7.3718 8.19705L10.3868 5.18201C10.5003 5.06788 10.564 4.91351 10.564 4.75259C10.564 4.59168 10.5003 4.4373 10.3868 4.32318C10.3304 4.26562 10.2632 4.21984 10.1889 4.18847C10.1147 4.1571 10.035 4.14078 9.95438 4.14045C9.87379 4.14078 9.79407 4.1571 9.71984 4.18847C9.6456 4.21984 9.57833 4.26562 9.52192 4.32318L6.07441 7.76459C6.01259 7.82163 5.96324 7.89085 5.9295 7.96791C5.89575 8.04496 5.87832 8.12816 5.87832 8.21228C5.87832 8.2964 5.89575 8.3796 5.9295 8.45666C5.96324 8.53371 6.01259 8.60293 6.07441 8.65997Z"
                fill="#213F61"
              />
            </svg>
          </button>
          <button className="rounded-full p-[7px] bg-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M9.92363 7.79566L6.47613 4.35424C6.4195 4.29715 6.35214 4.25184 6.27791 4.22092C6.20369 4.18999 6.12407 4.17407 6.04366 4.17407C5.96326 4.17407 5.88364 4.18999 5.80942 4.22092C5.73519 4.25184 5.66783 4.29715 5.6112 4.35424C5.49776 4.46837 5.43408 4.62274 5.43408 4.78366C5.43408 4.94457 5.49776 5.09895 5.6112 5.21307L8.62625 8.25857L5.6112 11.2736C5.49776 11.3877 5.43408 11.5421 5.43408 11.703C5.43408 11.864 5.49776 12.0183 5.6112 12.1325C5.66762 12.19 5.73489 12.2358 5.80912 12.2672C5.88336 12.2985 5.96308 12.3148 6.04366 12.3152C6.12425 12.3148 6.20397 12.2985 6.27821 12.2672C6.35244 12.2358 6.41971 12.19 6.47613 12.1325L9.92363 8.69104C9.98546 8.634 10.0348 8.56477 10.0686 8.48772C10.1023 8.41067 10.1197 8.32747 10.1197 8.24335C10.1197 8.15923 10.1023 8.07602 10.0686 7.99897C10.0348 7.92192 9.98546 7.8527 9.92363 7.79566Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </div>
      {/* slider */}
      <div className="w-full mt-5 md:mt-7 grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 items-stretch  gap-4 ">
        {servicesList.map((service) => (
          <ServiceCard key={service?.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default ServicesListing;
