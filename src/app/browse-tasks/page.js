"use client";

import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import FilterSecton from "@/components/browseTask/FilterSecton";
import TaskSection from "@/components/browseTask/TaskSection";

const page = () => {
  // const tasks = [
  //   {
  //     taskName: "Design the Homepage UI",
  //     date: "12 july, 23",
  //     price: 500,
  //     jobType: "Remote",
  //     status: "open",
  //     client: {
  //       name: "Emily Johnson",
  //       title: "Marketing Director",
  //       img: "/../public/clientImage/1.jpeg",
  //     },
  //   },
  //   {
  //     taskName: "Implement User Authentication",
  //     date: "12 july, 23",
  //     price: 345,
  //     jobType: "Remote",
  //     status: "open",
  //     client: {
  //       name: "Michael Anderson",
  //       title: "Financial Analyst",
  //       img: "/../public/clientImage/1.jpeg",
  //     },
  //   },
  //   {
  //     taskName: "Create a User Profile Page",
  //     date: "12 july, 23",
  //     price: 232,
  //     jobType: "Remote",
  //     status: "open",
  //     client: {
  //       name: "Sarah Davis",
  //       title: "Project Manager",
  //       img: "/../public/clientImage/1.jpeg",
  //     },
  //   },
  //   {
  //     taskName: "Develop a Search Feature",
  //     date: "12 july, 23",
  //     price: 122,
  //     jobType: "Remote",
  //     status: "open",
  //     client: {
  //       name: "David Smith",
  //       title: "Human Resources Manager",
  //       img: "/../public/clientImage/1.jpeg",
  //     },
  //   },
  //   {
  //     taskName: "Build an Admin Dashboard",
  //     date: "12 july, 23",
  //     price: 432,
  //     jobType: "Remote",
  //     status: "open",
  //     client: {
  //       name: "Jessica Wilson",
  //       title: "Sales Representative",
  //       img: "/../public/clientImage/1.jpeg",
  //     },
  //   },
  //   {
  //     taskName: "Write Unit Tests for API",
  //     date: "12 july, 23",
  //     price: 544,
  //     jobType: "Remote",
  //     status: "open",
  //     client: {
  //       name: "William Baker ",
  //       title: "IT Consultant",
  //       img: "/../public/clientImage/1.jpeg",
  //     },
  //   },
  //   {
  //     taskName: "Set Up a Database Schema",
  //     date: "12 july, 23",
  //     price: 344,
  //     jobType: "Remote",
  //     status: "open",
  //     client: {
  //       name: "Olivia Martinez",
  //       title: "Olivia Martinez",
  //       img: "/../public/clientImage/1.jpeg",
  //     },
  //   },
  // ];

  return (
    <>
      <div className="px-20 grid grid-cols-12 gap-10 ">
        <div className="col-span-4 border-r-2 border-l-2 px-5 py-10">
          <FilterSecton />
        </div>
        <div className="col-span-8 py-10">
          <TaskSection />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
