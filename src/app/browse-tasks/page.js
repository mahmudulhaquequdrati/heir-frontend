/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { taskData } from "@/components/GlobalComponents/TaskData";
import FilterSection from "@/components/browseTask/FilterSecton";
import TaskSection from "@/components/browseTask/TaskSection";
import Footer from "@/components/shareableComponents/Footer";
import { useState } from "react";

const page = () => {
  const [filter, setFilter] = useState({
    category: [],
    toBeDone: "all",
    distance: 1,
    taskPrice: 5,
    priceSorting: "highToLow",
    taskCategory: "available",
  });
  const [originalData, setOriginalData] = useState(taskData);

  console.log(filter);

  return (
    <>
      <div className="max-w-full">
        <div className="container mx-auto px-7 md:px-12 lg:px-20">
          <div className="md:grid grid-cols-12 gap-9 w-full">
            <div className="col-span-12 md:col-span-5 lg:col-span-4 py-10 max-w-full hidden sm:block">
              <FilterSection filter={filter} setFilter={setFilter} />
            </div>
            <div className="col-span-12 md:col-span-7 lg:col-span-8 py-10 max-w-full">
              <TaskSection originalData={originalData} filter={filter} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
