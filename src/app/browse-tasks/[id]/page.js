"use client";
import Footer from "@/components/Footer/Footer";
import Comments from "@/components/taskDetails/Comments";
import Details from "@/components/taskDetails/Details";
import React from "react";

const page = ({ params }) => {
  return (
    <div>
      <div className="px-20 grid grid-cols-12 gap-10 ">
        <div className="col-span-12 md:col-span-7 py-10">
          <Details />
        </div>
        <div className="col-span-12 md:col-span-5 py-10">
          <Comments />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
