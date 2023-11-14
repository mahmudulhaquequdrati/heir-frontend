import Image from "next/image";
import { useState } from "react";
import Checkbox from "../../assets/logo/checkbox 1.svg";
import Checked from "../../assets/logo/checked.svg";
const FilterSecton = () => {
  const [isChecked, setIsChecked] = useState([]);
  const [toBeDone, setToBeDone] = useState("all");
  const [category, setCategory] = useState("available");
  const [priceSorting, setPriceSorting] = useState("hightolow");
  const [datasorting, setDataSorting] = useState(["earliest", "oldest"]);
  const handleClickCheckbox = (index) => {
    if (isChecked.includes(index)) {
      setIsChecked(isChecked?.filter((fill) => fill !== index));
    } else {
      setIsChecked([...isChecked, index]);
    }
  };
  const handleDataSorting = (data) => {
    if (datasorting.includes(data)) {
      setDataSorting(datasorting?.filter((fill) => fill !== data));
    } else {
      setDataSorting([...datasorting, data]);
    }
  };
  return (
    <div className="w-full">
      <div className="flex justify-between items-center w-full">
        <h2 className="text-primary font-bold text-lg">Filter</h2>
        <p className="text-secondery">Clear all</p>
      </div>
      <hr className="my-5" />

      <div className="bg-[#F4F8FD] p-10 rounded-xl lg:p-6">
        <h2 className="mb-3">Category</h2>
        <div className="relative flex flex-row min-w-full">
          <div className="w-full">
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
              type="search"
              id="default-search"
              className="block w-full p-3 pl-10 text-sm text-gray-900 border border-gray-300 focus:border-gray-300 rounded-l-lg bg-white"
              placeholder="Search here..."
              required
            />
          </div>
          <button
            type="submit"
            className="text-white bg-secondery hover:bg-secondery font-medium rounded-r-lg text-sm px-5 py-3"
          >
            Search
          </button>
        </div>

        <div className="flex flex-col gap-3 my-3 text-sm">
          <div
            onClick={() => handleClickCheckbox(1)}
            className="flex items-center mt-2"
          >
            <Image
              className="cursor-pointer mr-2"
              width={18}
              height={18}
              alt="checkbox"
              src={isChecked.includes(1) ? Checked : Checkbox}
            />
            <p>Advisory</p>
          </div>
          <div
            onClick={() => handleClickCheckbox(2)}
            className="flex items-center mt-2"
          >
            <Image
              className="cursor-pointer mr-2"
              width={18}
              height={18}
              alt="checkbox"
              src={isChecked.includes(2) ? Checked : Checkbox}
            />
            <p>Advisory</p>
          </div>
          <div
            onClick={() => handleClickCheckbox(3)}
            className="flex items-center mt-2"
          >
            <Image
              className="cursor-pointer mr-2"
              width={18}
              height={18}
              alt="checkbox"
              src={isChecked.includes(3) ? Checked : Checkbox}
            />
            <p>Advisory</p>
          </div>
          <div
            onClick={() => handleClickCheckbox(4)}
            className="flex items-center mt-2"
          >
            <Image
              className="cursor-pointer mr-2"
              width={18}
              height={18}
              alt="checkbox"
              src={isChecked.includes(4) ? Checked : Checkbox}
            />
            <p>Advisory</p>
          </div>
          <div
            onClick={() => handleClickCheckbox(5)}
            className="flex items-center mt-2"
          >
            <Image
              className="cursor-pointer mr-2"
              width={18}
              height={18}
              alt="checkbox"
              src={isChecked.includes(5) ? Checked : Checkbox}
            />
            <p>Advisory</p>
          </div>
          <div
            onClick={() => handleClickCheckbox(6)}
            className="flex items-center mt-2"
          >
            <Image
              className="cursor-pointer mr-2"
              width={18}
              height={18}
              alt="checkbox"
              src={isChecked.includes(6) ? Checked : Checkbox}
            />
            <p>Advisory</p>
          </div>
        </div>
      </div>

      <div className="bg-[#f4f8fd] rounded-xl mt-4">
        <div className="flex flex-col items-start gap-6 p-6 relative bg-accent rounded-[24px] overflow-hidden">
          <div className="items-center justify-between w-full flex-[0_0_auto] flex relative">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Clash_Display-Medium',Helvetica] font-medium text-primary text-xl tracking-normal leading-normal">
              To Be Done
            </div>
          </div>
          <div className=" gap-[10px] w-full flex-[0_0_auto] flex flex-wrap relative cursor-pointer">
            <div
              onClick={() => setToBeDone("all")}
              className={`min-w-max ${
                toBeDone === "all"
                  ? " items-center justify-center  px-3 py-[10px] flex-1 grow bg-primary rounded-xl overflow-hidden flex relative"
                  : " flex items-center px-3 py-[10px]"
              }`}
            >
              <div
                className={`relative w-fit [font-family:'Clash_Display-Semibold max-w-max',Helvetica] font-normal ${
                  toBeDone === "all" ? "text-[#fdf3eb]" : "text-primary"
                } text-base tracking-[0.20px] leading-normal`}
              >
                All
              </div>
            </div>
            <div
              onClick={() => setToBeDone("in_person")}
              className={`min-w-max ${
                toBeDone === "in_person"
                  ? " items-center justify-center  px-3 py-[10px] flex-1 grow bg-primary rounded-xl overflow-hidden flex relative"
                  : " flex items-center px-3 py-[10px]"
              }`}
            >
              <div
                className={`relative w-fit [font-family:'Clash_Display-Semibold',Helvetica] font-normal ${
                  toBeDone === "in_person" ? "text-[#fdf3eb]" : "text-primary"
                } text-base tracking-[0.20px] leading-normal`}
              >
                In person
              </div>
            </div>
            <div
              onClick={() => setToBeDone("remotely")}
              className={`min-w-max ${
                toBeDone === "remotely"
                  ? " items-center justify-center  px-3 py-[10px] flex-1 grow bg-primary rounded-xl overflow-hidden flex relative"
                  : " flex items-center px-3 py-[10px]"
              }`}
            >
              <div
                className={`relative w-fit [font-family:'Clash_Display-Semibold',Helvetica] font-normal ${
                  toBeDone === "remotely" ? "text-[#fdf3eb]" : "text-primary"
                } text-base tracking-[0.20px] leading-normal`}
              >
                Remotely
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#f4f8fd] mt-4 flex flex-col items-start gap-6 p-6 relative bg-accent rounded-xl overflow-hidden">
        <div className="flex items-center justify-between relative w-full flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px][font-family:'Clash_Display-Medium',Helvetica] font-medium text-primary text-xl tracking-normal leading-normal">
            Sub hub
          </div>
          <div className="relative w-fit mt-[-1.00px] opacity-0 [font-family:'Clash_Display-Semibold',Helvetica] font-normal text-primary text-xl tracking-[0.20px] leading-normal">
            Clear all
          </div>
        </div>
        <div className="h-[60px] w-full rounded-xl overflow-hidden flex items-center relative self-stretch">
          <div className="gap-[10px] pl-[16px] pr-[36px] py-[20px] flex-1 grow bg-white flex items-center relative self-stretch">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Clash_Display-Regular',Helvetica] font-normal text-primary text-base tracking-normal leading-normal">
              Dhaka, Bangladesh
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#f4f8fd] rounded-xl mt-4 p-6">
        <div>
          <p className="font-medium text-primary text-xl">Distance</p>
        </div>
        <div className="mt-5">
          <div className="flex justify-between items-center">
            <p>5km</p>
            <p>500km</p>
          </div>
          <div>
            <input
              className="w-full bg-transparent accent-secondery range-slider"
              type="range"
            />
          </div>
        </div>
      </div>

      <div className="bg-[#f4f8fd] rounded-xl mt-4 p-6">
        <div>
          <p className="font-medium text-primary text-xl">Task Price</p>
        </div>
        <div className="mt-5">
          <div className="flex justify-between items-center">
            <p>5$</p>
            <p>500$</p>
          </div>
          <div>
            <input
              className="w-full bg-transparent accent-secondery range-slider"
              type="range"
            />
          </div>
        </div>
      </div>

      <div className="bg-[#f4f8fd] rounded-xl mt-4">
        <div className="flex flex-col  gap-6 p-6 relative bg-accent rounded-[24px] overflow-hidden">
          <div className="items-center justify-between w-full flex-[0_0_auto] flex relative">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Clash_Display-Medium',Helvetica] font-medium text-primary text-xl tracking-normal leading-normal">
              Task catagory
            </div>
          </div>
          <div className="items-center gap-[16px] w-full flex-[0_0_auto] flex relative cursor-pointer flex-wrap">
            <div
              onClick={() => setCategory("available")}
              className={`min-w-max ${
                category === "available"
                  ? " items-center justify-center  px-3 py-[10px] flex-1 grow bg-primary rounded-xl overflow-hidden flex relative"
                  : " flex items-center"
              }`}
            >
              <div
                className={`relative w-fit [font-family:'Clash_Display-Semibold',Helvetica] font-normal ${
                  category === "available" ? "text-[#fdf3eb]" : "text-primary"
                } text-base tracking-[0.20px] leading-normal`}
              >
                Available tasks
              </div>
            </div>
            <div
              onClick={() => setCategory("unavailable")}
              className={`min-w-max ${
                category === "unavailable"
                  ? " items-center justify-center  px-3 py-[10px] flex-1 grow bg-primary rounded-xl overflow-hidden flex relative"
                  : " flex items-center"
              }`}
            >
              <div
                className={`relative w-fit [font-family:'Clash_Display-Semibold',Helvetica] font-normal ${
                  category === "unavailable" ? "text-[#fdf3eb]" : "text-primary"
                } text-base tracking-[0.20px] leading-normal`}
              >
                No offers tasks
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#f4f8fd] rounded-xl mt-4">
        <div className="flex flex-col items-center gap-6 p-6 relative bg-accent rounded-[24px] overflow-hidden">
          <div className="items-center justify-between w-full flex-[0_0_auto] flex relative">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Clash_Display-Medium',Helvetica] font-medium text-primary text-xl tracking-normal leading-normal">
              Price Sorting
            </div>
          </div>
          <div className="items-center gap-6  w-full flex-[0_0_auto] flex relative cursor-pointer flex-wrap">
            <div
              onClick={() => setPriceSorting("hightolow")}
              className={
                priceSorting === "hightolow"
                  ? " items-center justify-center  px-3 py-[10px] flex-1 grow bg-primary rounded-xl overflow-hidden flex relative"
                  : " flex items-center "
              }
            >
              <div
                className={`relative w-fit [font-family:'Clash_Display-Semibold',Helvetica] font-normal ${
                  priceSorting === "hightolow"
                    ? "text-[#fdf3eb]"
                    : "text-primary"
                } text-base tracking-[0.20px] leading-normal`}
              >
                high to low
              </div>
            </div>
            <div
              onClick={() => setPriceSorting("lowtohigh")}
              className={
                priceSorting === "lowtohigh"
                  ? " items-center justify-center  px-3 py-[10px] flex-1 grow bg-primary rounded-xl overflow-hidden flex relative"
                  : " flex items-center "
              }
            >
              <div
                className={`relative w-fit [font-family:'Clash_Display-Semibold',Helvetica] font-normal ${
                  priceSorting === "lowtohigh"
                    ? "text-[#fdf3eb]"
                    : "text-primary"
                } text-base tracking-[0.20px] leading-normal`}
              >
                low to high
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#f4f8fd] rounded-xl mt-4">
        <div className="flex flex-col items-start gap-6 p-6 relative bg-accent rounded-[24px] overflow-hidden">
          <div className="items-center justify-between w-full flex-[0_0_auto] flex relative">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Clash_Display-Medium',Helvetica] font-medium text-primary text-xl tracking-normal leading-normal">
              Date Sorting
            </div>
          </div>
          <div className="items-center gap-[16px] w-full flex-[0_0_auto] flex relative cursor-pointer flex-wrap">
            <div
              onClick={() => handleDataSorting("earliest")}
              className={`min-w-max ${
                datasorting.includes("earliest")
                  ? " items-center justify-center  px-3 py-[10px] flex-1 grow bg-primary rounded-xl overflow-hidden flex relative"
                  : " flex items-center px-3 py-[10px]"
              }`}
            >
              <div
                className={`relative w-fit [font-family:'Clash_Display-Semibold',Helvetica] font-normal ${
                  datasorting.includes("earliest")
                    ? "text-[#fdf3eb]"
                    : "text-primary"
                } text-base tracking-[0.20px] leading-normal`}
              >
                Earliest
              </div>
            </div>
            <div
              onClick={() => handleDataSorting("lowest")}
              className={`min-w-max ${
                datasorting.includes("lowest")
                  ? " items-center justify-center  px-3 py-[10px] flex-1 grow bg-primary rounded-xl overflow-hidden flex relative"
                  : " flex items-center px-3 py-[10px]"
              }`}
            >
              <div
                className={`relative w-fit [font-family:'Clash_Display-Semibold',Helvetica] font-normal ${
                  datasorting.includes("lowest")
                    ? "text-[#fdf3eb]"
                    : "text-primary"
                } text-xl tracking-[0.20px] leading-normal`}
              >
                Latest
              </div>
            </div>
          </div>
          <div className="items-center gap-[16px]  w-full flex-[0_0_auto] flex relative cursor-pointer flex-wrap">
            <div
              onClick={() => handleDataSorting("oldest")}
              className={`min-w-max ${
                datasorting.includes("oldest")
                  ? " items-center justify-center  px-3 py-[10px] flex-1 grow bg-primary rounded-xl overflow-hidden flex relative"
                  : " flex items-center px-3 py-[10px]"
              }`}
            >
              <div
                className={`relative w-fit [font-family:'Clash_Display-Semibold',Helvetica] font-normal ${
                  datasorting.includes("oldest")
                    ? "text-[#fdf3eb]"
                    : "text-primary"
                } text-base tracking-[0.20px] leading-normal`}
              >
                Oldest task
              </div>
            </div>
            <div
              onClick={() => handleDataSorting("close")}
              className={`min-w-max ${
                datasorting.includes("close")
                  ? " items-center justify-center  px-3 py-[10px] flex-1 grow bg-primary rounded-xl overflow-hidden flex relative"
                  : " flex items-center px-3 py-[10px]"
              }`}
            >
              <div
                className={`relative w-fit [font-family:'Clash_Display-Semibold',Helvetica] font-normal ${
                  datasorting.includes("close")
                    ? "text-[#fdf3eb]"
                    : "text-primary"
                } text-base tracking-[0.20px] leading-normal`}
              >
                Close to me
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSecton;
