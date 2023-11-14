/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import bg from "../../assets/bg.png";
import BG from "../../assets/clientImage/BG.svg";
import Checked from "../../assets/clientImage/Checked.svg";
import Stars from "../../assets/clientImage/starts.svg";

export default function Review() {
  return (
    <div className="self-center z-[1] flex w-full max-w-[1324px] flex-col mt-40 max-md:max-w-full max-md:mt-10">
      <div className="items-center self-stretch flex flex-col max-md:max-w-full">
        <div className="items-center self-center flex w-[930px] max-w-full flex-col px-5">
          <div className="text-cyan-900 text-center text-5xl font-semibold leading-[57.96px] self-stretch -mr-5 max-md:max-w-full max-md:text-4xl">
            Trusted by millions <br />
            of worldwide customers
          </div>{" "}
          <div className="bg-orange-400 self-center flex w-80 h-[9px] flex-col mt-4 rounded-[50px]" />
        </div>{" "}
        <div className="self-stretch mt-16 px-5 max-md:max-w-full max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[35%] max-md:w-full max-md:ml-0">
              <div className="flex grow flex-col max-md:mt-10">
                <Image
                  loading="lazy"
                  width={100}
                  height={100}
                  src={Stars}
                  alt="stars icon"
                  className="aspect-[6] object-contain object-center w-[168px] overflow-hidden self-center max-w-full"
                />{" "}
                <div className="text-slate-900 text-center text-lg leading-8 self-stretch mt-7">
                  “This was definitely my best experience with live chat
                  software. Plug and play. Intuitive. It is fast, clean,
                  amazing.”{" "}
                </div>{" "}
                <div className="text-gray-500 text-center text-base font-medium leading-6 self-center whitespace-nowrap mt-16 max-md:mt-10">
                  <span className="text-slate-900">Rated 4.5/5 -</span>
                  <span className="text-gray-500"> from over 100 reviews</span>
                </div>
              </div>
            </div>{" "}
            <div className="flex flex-col items-stretch w-[35%] ml-5 max-md:w-full max-md:ml-0">
              <div className="flex grow flex-col max-md:mt-10">
                <Image
                  loading="lazy"
                  width={100}
                  height={100}
                  src={Stars}
                  alt="stars icon"
                  className="aspect-[6] object-contain object-center w-[168px] overflow-hidden self-center max-w-full"
                />{" "}
                <div className="text-slate-900 text-center text-lg leading-8 self-stretch mt-7">
                  “Excellent simple live chat solution that has provided my
                  company with a direct way to communicate with potential for
                  customers through my website.”
                </div>{" "}
                <div className="text-gray-500 text-center text-base font-medium leading-6 self-center whitespace-nowrap mt-8">
                  <span className="text-slate-900">Rated 4.5/5 -</span>
                  <span className="text-gray-500"> from over 100 reviews</span>
                </div>
              </div>
            </div>{" "}
            <div className="flex flex-col items-stretch w-[31%] ml-5 max-md:w-full max-md:ml-0">
              <div className="flex grow flex-col max-md:mt-10">
                <Image
                  loading="lazy"
                  width={100}
                  height={100}
                  src={Stars}
                  alt="stars icon"
                  className="aspect-[6] object-contain object-center w-[168px] overflow-hidden self-center max-w-full"
                />{" "}
                <div className="text-slate-900 text-center text-lg leading-8 self-stretch mt-7">
                  Great customer support! Easy to use, cool user interface. With
                  Chaport you will find all you need. Really recommend to all
                  use this amazine tool.”
                </div>{" "}
                <div className="text-gray-500 text-center text-base font-medium leading-6 self-center whitespace-nowrap mt-9">
                  <span className="text-slate-900">Rated 4.5/5 -</span>
                  <span className="text-gray-500"> from over 100 reviews</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="items-start self-stretch flex flex-col mt-56  max-md:max-w-full max-md:mt-10 ">
        <div className="items-center self-center flex w-[924px] max-w-full flex-col">
          <div className="items-center self-stretch flex flex-col max-md:max-w-full">
            <div className="text-cyan-900 text-4xl font-semibold tracking-wider  max-md:max-w-full">
              Are you ready to make your life easier?
            </div>{" "}
            <div className="text-cyan-900 text-center text-base leading-6 self-center whitespace-nowrap mt-2 max-md:max-w-full">
              Connect with unlimited quality talents to get any help.
            </div>
          </div>{" "}
          <div className="bg-orange-400 self-center flex w-[329px] h-[9px] flex-col mt-4 rounded-[50px]" />
        </div>{" "}
        <div className="self-stretch mt-24  max-md:max-w-full max-md:mt-10 ">
          <div className="gap-8 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[48%] max-md:w-full max-md:ml-0">
              <Image
                loading="lazy"
                width={100}
                height={100}
                src={BG}
                alt="bg icon"
                className="aspect-[1.16] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-10"
              />
            </div>{" "}
            <div className="flex flex-col items-stretch w-[52%] ml-5 max-md:w-full max-md:ml-0">
              <div className="items-start flex flex-col pb-24 max-md:max-w-full max-md:mt-10">
                <div className="items-start self-stretch flex flex-col max-md:max-w-full">
                  <div className="text-cyan-900 text-4xl font-semibold leading-[52.02px] self-stretch max-md:max-w-full">
                    Join Hier Today and <br />
                    Experience the Difference
                  </div>{" "}
                  <div className="text-zinc-600 text-lg leading-8 self-stretch mt-5 max-md:max-w-full">
                    Join Hier today and connect with people from around the
                    world who are here to help you. Its as easy as 1-2-3:
                  </div>
                </div>
                <div className="items-start self-stretch flex flex-col mt-10 max-md:max-w-full max-md:mt-10">
                  <div className="flex w-full md:w-[326px] max-w-full items-start gap-3 self-start">
                    <Image
                      loading="lazy"
                      width={100}
                      height={100}
                      src={Checked}
                      alt="checked icon"
                      className="aspect-square object-contain object-center w-4 overflow-hidden max-w-full self-start"
                    />
                    <div className="text-cyan-900 text-lg font-medium leading-8 md:whitespace-nowrap grow shrink basis-auto self-start">
                      Sign up for free.
                    </div>
                  </div>
                  <div className="flex w-full md:w-[570px] max-w-full items-start gap-3 mt-7 self-start max-md:flex-wrap">
                    <Image
                      loading="lazy"
                      width={100}
                      height={100}
                      src={Checked}
                      alt="checked icon"
                      className="aspect-square object-contain object-center w-4 overflow-hidden max-w-full self-start"
                    />
                    <div className="text-cyan-900 text-lg font-medium leading-8 md:whitespace-nowrap grow shrink basis-auto self-start max-md:max-w-full">
                      Post your task or service need.
                    </div>
                  </div>
                  <div className="flex w-full items-center md:w-[570px] max-w-full gap-3 mt-7 self-start max-md:flex-wrap">
                    <Image
                      loading="lazy"
                      width={100}
                      height={100}
                      src={Checked}
                      alt="checked icon"
                      className="aspect-square object-contain object-center w-4 overflow-hidden max-w-full self-start"
                    />
                    <div className="text-cyan-900 text-lg font-medium leading-8 md:whitespace-nowrap grow shrink basis-auto self-start max-md:max-w-full">
                      Connect with the right person to get it done.
                    </div>
                  </div>
                  <div className=" flex gap-4 mt-12 ">
                    <div className=" bg-orange-400 px-20 py-5 rounded-[50px] max-md:px-5">
                      <div className="text-white text-base font-bold ">
                        Post a task
                      </div>
                    </div>
                    <div className="text-orange-400 text-base font-medium  bg-orange-400 bg-opacity-10  pl-20 pr-20 py-5 rounded-[500px] max-md:px-5">
                      Become a tasker
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-col mb-60 mt-48 my-12 relative flex  pt-2 pb-4 max-md:max-w-full">
        <Image
          loading="lazy"
          src={bg}
          alt="bg icon"
          className="absolute z-[-1] w-full h-full object-cover object-center inset-0"
        />
        <div className="relative flex justify-center items-center w-full  flex-col px-5 max-md:max-w-full py-24">
          {/* f */}
          <div className="text-white text-center text-4xl font-semibold rounded max-md:max-w-full max-md:mt-10">
            Don’t find your task category?
            <br />
            or interested to start with new skills to prove?
          </div>
          <div className="text-white text-center text-lg leading-8 self-center ml-0 max-w-[831px] mt-4 max-md:max-w-full">
            Subscribe here, we’ll let you know when we added them.
          </div>
          <div className=" flex items-center w-full md:w-[70%] gap-0  mt-11 md:rounded-[500px]  overflow-hidden max-md:mt-10 ">
            <input
              className="text-cyan-900 text-base items-center bg-white grow basis-auto pl-9 pr-20 py-2 rounded md:py-6 max-md:max-w-full max-md:px-5 outline-none"
              placeholder="Enter your mail here.."
            ></input>
            <button className="text-white  md:text-xl font-semibold tracking-wide   bg-cyan-900 w-full md:w-[188px] max-w-full  md:pl-11 md:pr-10 py-2 md:py-6 max-md:px-2">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
