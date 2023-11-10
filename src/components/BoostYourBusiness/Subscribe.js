/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import bg from "../../assets/bg.png";

const Subscribe = () => {
  return (
    <div>
      <div className="container mx-auto">
        <div className="flex-col my-9 md:mt-48 relative flex  pt-2 pb-4 w-11/12 mx-auto rounded-3xl overflow-hidden">
          <Image
            loading="lazy"
            src={bg}
            className="absolute h-full w-full object-cover object-center inset-0"
          />
          <div className="relative  flex justify-center items-center w-full flex-col px-5 max-md:max-w-full py-24">
            {/* f */}
            <div className="text-white text-center text-3xl md:text-4xl font-semibold    max-md:max-w-full max-md:mt-10">
              Don’t find your task category?
              <br className="hidden md:block" />
              or interested to start with new skills to prove?
            </div>
            <div className="text-white text-center text-lg leading-8 self-center ml-0 max-w-[831px] mt-4 max-md:max-w-full">
              Subscribe here, we’ll let you know when we added them.
            </div>
            <div className="flex flex-col md:flex-row w-10/12 sm:w-9/12 md:w-[70%] gap-0 mt-11 rounded-[30px] md:rounded-[500px]  overflow-hidden max-md:mt-10 ">
              <input
                className="text-cyan-900 text-base items-center bg-white grow basis-auto pl-9 pr-20 py-3 md:py-6 w-full max-md:px-5 outline-none"
                placeholder="Enter your mail here.."
              />
              <button className="text-white text-xl font-semibold tracking-wide   bg-cyan-900 w-full md:w-min max-w-full pl-11 pr-10 py-3 md:py-6 max-md:px-5">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
