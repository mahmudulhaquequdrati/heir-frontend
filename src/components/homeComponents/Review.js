/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import bg from "../../assets/bg.png";
import BG from "../../assets/clientImage/BG.svg";
import Checked from "../../assets/clientImage/Checked.svg";
import Stars from "../../assets/clientImage/starts.svg";
import Link from "next/link";

export default function Review() {
  return (
    <div className=" z-[1] flex w-full  flex-col mt-40 container mx-auto">
      <div className="items-center self-stretch flex flex-col max-lg:max-w-full">
        <div className="items-center self-center flex w-[930px] max-w-full flex-col px-5">
          <div className="text-cyan-900 text-center text-2xl sm:text-5xl font-semibold">
            Trusted by millions <br />
            of worldwide customers
          </div>{" "}
          <div className="bg-orange-400 self-center flex max-w-[250px] sm:max-w-[329px] w-full h-[5px] sm:h-[9px] flex-col mt-4 rounded-[50px]" />
        </div>{" "}
        <div className=" mt-16 px-5 max-md:max-w-full max-md:mt-10">
          <div className="gap-5 flex max-lg:flex-col items-center max-md:gap-0">
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
      <div className="w-full items-start self-stretch flex flex-col mt-56 max-md:mt-10 ">
        <div className="items-center self-center flex max-w-[924px] w-full flex-col">
          <div className="items-center self-stretch flex flex-col px-4">
            <div className="text-cyan-900 text-center text-2xl sm:text-4xl font-semibold tracking-wider">
              Are you ready to make your life easier?
            </div>{" "}
            <p className="text-cyan-900 text-center text-base leading-6 self-center mt-2">
              Connect with unlimited quality talents to get any help.
            </p>
          </div>{" "}
          <div className="bg-orange-400 self-center flex max-w-[250px] sm:max-w-[329px] w-full h-[5px] sm:h-[9px] flex-col mt-4 rounded-[50px]" />
        </div>{" "}
        {/*  */}
        <div className="self-stretch mt-24  max-md:max-w-full max-md:mt-10 px-4">
          <div className="gap-8 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[48%] max-lg:w-full max-lg:ml-0">
              <Image
                loading="lazy"
                width={100}
                height={100}
                src={BG}
                alt="bg icon"
                className="aspect-[1.16] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-10"
              />
            </div>{" "}
            <div className="flex flex-col items-stretch w-[52%] ml-5 max-lg:w-full max-lg:ml-0">
              <div className="items-start flex flex-col pb-24 max-md:max-w-full max-md:mt-10">
                <div className="items-start self-stretch flex flex-col max-md:max-w-full">
                  <div className="text-cyan-900 text-2xl sm:text-4xl font-semibold leading-[32.02px] self-stretch max-md:max-w-full">
                    Join Hier Today and <br />
                    Experience the Difference
                  </div>{" "}
                  <div className="text-zinc-600 text-lg leading-8 self-stretch mt-5 max-md:max-w-full">
                    Join Hier today and connect with people from around the
                    world who are here to help you. Its as easy as 1-2-3:
                  </div>
                </div>
                <div className="items-start self-stretch flex flex-col mt-10 max-md:max-w-full max-md:mt-10">
                  <div className="flex w-full items-center gap-3">
                    <Image
                      loading="lazy"
                      width={100}
                      height={100}
                      src={Checked}
                      alt="checked icon"
                      className="aspect-square object-contain object-center w-4 h-4 overflow-hidden max-w-full"
                    />
                    <p className="text-cyan-900 text-[16px] sm:text-lg font-medium leading-8">
                      Sign up for free.
                    </p>
                  </div>
                  <div className="flex w-full items-center gap-3">
                    <Image
                      loading="lazy"
                      width={100}
                      height={100}
                      src={Checked}
                      alt="checked icon"
                      className="aspect-square object-contain object-center w-4 overflow-hidden max-w-full"
                    />
                    <div className="text-cyan-900 text-[16px] sm:text-lg font-medium leading-8 md:whitespace-nowrap grow shrink basis-auto self-start max-md:max-w-full">
                      Post your task or service need.
                    </div>
                  </div>
                  <div className="flex w-full items-center gap-3">
                    <Image
                      loading="lazy"
                      width={100}
                      height={100}
                      src={Checked}
                      alt="checked icon"
                      className="aspect-square object-contain object-center w-4 overflow-hidden max-w-full"
                    />
                    <div className="text-cyan-900 text-[16px] sm:text-lg font-medium leading-8 md:whitespace-nowrap grow shrink basis-auto self-start max-md:max-w-full">
                      Connect with the right person to get it done.
                    </div>
                  </div>
                  <div className="items-start self-stretch flex justify-between gap-5 mt-10 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
                    <Link
                      href={"/create-task"}
                      className="w-full flex justify-center items-center bg-orange-400 rounded-[50px] px-10 py-5 text-white text-base font-bold self-center whitespace-nowrap"
                    >
                      Post a task
                    </Link>

                    <Link
                      href={"/signin"}
                      className="w-full flex justify-center items-center px-10 py-5 rounded-[500px] max-md:px-5 bg-opacity-10 bg-orange-400 text-orange-400 text-base font-medium self-center whitespace-nowrap"
                    >
                      Become a tasker
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
      </div>
      <div className="flex-col my-[100px] relative flex pt-2 pb-4 max-md:max-w-full mx-4 rounded-2xl overflow-hidden">
        <Image
          loading="lazy"
          src={bg}
          alt="bg icon"
          className="absolute z-[-1] w-full h-full object-cover object-center inset-0"
        />
        <div className="relative flex justify-center items-center w-full  flex-col px-5 max-md:max-w-full py-24">
          {/* f */}
          <div className="text-white text-center text-2xl sm:text-4xl font-semibold rounded max-md:max-w-full max-md:mt-10">
            Don’t find your task category?
            <br />
            or interested to start with new skills to prove?
          </div>
          <div className="text-white text-center text-lg leading-8 self-center ml-0 max-w-[831px] mt-4 max-md:max-w-full">
            Subscribe here, we’ll let you know when we added them.
          </div>
          <div className="flex flex-col sm:flex-row items-center w-full md:w-[70%] gap-6  mt-11   max-md:mt-10 ">
            <input
              className="w-full text-cyan-900 text-base items-center bg-white rounded-xl  md:rounded-l-[500px] outline-none block py-4  md:py-6 px-6 md:12"
              placeholder="Enter your mail here.."
            ></input>
            <button className="text-white   font-semibold tracking-wide bg-cyan-900  rounded-full md:rounded-r-[500px] py-4  md:py-6 px-12 w-full md:w-auto">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
