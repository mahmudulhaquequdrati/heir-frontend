/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import CooseUs from "../../assets/clientImage/cooseus.svg";
import Image from "next/image";
export default function ChooseUs() {
  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-center w-[400px] max-w-full flex-col mt-24 max-md:mt-10 mx-auto mb-24">
        <div className="items-center flex flex-col px-5">
          <div className="text-cyan-900 text-2xl sm:text-4xl text-center font-semibold tracking-wider">
            Why Choose Hier?
          </div>
          <div className="text-cyan-900 text-center text-base leading-6 mt-4 ">
            Connect with unlimited quality talents to get any help.
          </div>
        </div>
        <div className="bg-orange-400  flex w-[205px] h-[9px] flex-col mt-4 rounded-[50px]" />
      </div>
      <div className="self-center w-full container mx-auto mt-16 px-5 max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex items-stretch max-md:flex-col max-md:gap-0 mx-auto">
          <div className="flex flex-col w-[41%] max-md:w-full max-md:ml-0">
            <Image
              loading="lazy"
              height={100}
              width={100}
              alt="coose-us"
              src={CooseUs}
              className="aspect-[0.81] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-7"
            />
          </div>
          <div className="flex flex-col justify-between w-[59%] ml-5 max-md:w-full max-md:ml-0">
            {/* <div className=" flex  flex-col max-md:max-w-full max-md:mt-7"> */}
            <div className="py-3">
              <div className="flex flex-col md:flex-row">
                <div className="flex flex-col w-[48%] max-md:w-full max-md:ml-0">
                  <div className=" flex flex-col max-md:mt-10">
                    <div className="text-white text-xl font-semibold leading-8 bg-orange-400 w-[81px] text-center max-w-full pl-7 pr-7 py-1.5 rounded-[50px]  max-md:px-5">
                      04
                    </div>
                    <div className="text-cyan-900 text-[36px] font-medium leading-[36.16px] font-clash mt-5">
                      Vast Network
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-stretch w-[52%] ml-5 max-md:w-full max-md:ml-0">
                  <div className="text-cyan-900 text-base leading-8  my-auto max-md:mt-5">
                    With a diverse community of users from different backgrounds
                    and skills, Hier offers a wide range of services.
                  </div>
                </div>
              </div>
              <div className="bg-black bg-opacity-10  w-full h-px mt-5 max-md:max-w-full" />
            </div>
            <div className="py-3">
              <div className="flex flex-col md:flex-row">
                <div className="flex flex-col w-[48%] max-md:w-full max-md:ml-0">
                  <div className=" flex flex-col max-md:mt-10">
                    <div className="text-white text-xl font-semibold leading-8  bg-orange-400 w-[81px] text-center max-w-full pl-7 pr-7 py-1.5 rounded-[50px]  max-md:px-5">
                      04
                    </div>
                    <div className="text-cyan-900 text-[36px] font-medium leading-[36.16px] font-clash mt-5">
                      Global Reach
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-stretch w-[52%] ml-5 max-md:w-full max-md:ml-0">
                  <div className="text-cyan-900 text-base leading-8  my-auto max-md:mt-5">
                    Hier connects you with people worldwide, making it easy to
                    find the help you need, regardless of your location.
                  </div>
                </div>
              </div>
              <div className="bg-black bg-opacity-10  w-full h-px mt-5 max-md:max-w-full" />
            </div>
            <div className="py-3">
              <div className="flex flex-col md:flex-row">
                <div className="flex flex-col w-[48%] max-md:w-full max-md:ml-0">
                  <div className=" flex flex-col max-md:mt-10">
                    <div className="text-white text-xl font-semibold leading-8  bg-orange-400 w-[81px] text-center max-w-full pl-7 pr-7 py-1.5 rounded-[50px]  max-md:px-5">
                      04
                    </div>
                    <div className="text-cyan-900 text-[36px] font-medium leading-[36.16px] font-clash mt-5">
                      Verified Profiles
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-stretch w-[52%] ml-5 max-md:w-full max-md:ml-0">
                  <div className="text-cyan-900 text-base leading-8  my-auto max-md:mt-5">
                    We ensure the authenticity of users' profiles, so you can
                    trust the people you connect with.
                  </div>
                </div>
              </div>
              <div className="bg-black bg-opacity-10  w-full h-px mt-5 max-md:max-w-full" />
            </div>
            <div className="py-3">
              <div className="flex flex-col md:flex-row">
                <div className="flex flex-col w-[48%] max-md:w-full max-md:ml-0">
                  <div className=" flex flex-col max-md:mt-10">
                    <div className="text-white text-xl font-semibold leading-8  bg-orange-400 w-[81px] text-center max-w-full pl-7 pr-7 py-1.5 rounded-[50px]  max-md:px-5">
                      04
                    </div>
                    <div className="text-cyan-900 text-[36px] font-medium leading-[36.16px] font-clash mt-5">
                      Secure Transactions
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-stretch w-[52%] ml-5 max-md:w-full max-md:ml-0">
                  <div className="text-cyan-900 text-base leading-8  my-auto max-md:mt-5">
                    Our secure payment system guarantees peace of mind when
                    hiring someone or offering your services.
                  </div>
                </div>
              </div>
              <div className="bg-black bg-opacity-10  w-full h-px mt-5 max-md:max-w-full" />
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
