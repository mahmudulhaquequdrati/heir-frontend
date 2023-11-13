"use client";

import Footer from "@/components/shareableComponents/Footer";
import FilterSecton from "@/components/browseTask/FilterSecton";
import TaskSection from "@/components/browseTask/TaskSection";

const page = () => {
  return (
    <>
      <div className="px-20 grid grid-cols-12 gap-10 lg:px-10">
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
