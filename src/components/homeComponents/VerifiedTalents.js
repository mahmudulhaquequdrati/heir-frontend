/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Talents from "../../assets/clientImage/talents.svg";
import Start1 from "../../assets/clientImage/Star1.svg";
import Image from "next/image";
import Link from "next/link";
export default function VerifiedTalents() {
  return (
    <div className="bg-orange-50 self-center flex w-full flex-col mt-44 pt-24 pb-12 px-20 max-md:max-w-full max-md:mt-10 max-md:px-5">
      <div className="self-center w-full max-w-[1170px] max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[85%] max-md:w-full max-md:ml-0">
            <div className="grow mt-1 max-md:max-w-full max-md:mt-6">
              <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                <div className="flex flex-col items-stretch w-[14%] max-md:w-full max-md:ml-0">
                  <Image
                    loading="lazy"
                    width={100}
                    height={100}
                    src={Start1}
                    alt="star-icon"
                    className="aspect-square object-contain object-center w-[122px] fill-orange-400 overflow-hidden max-w-full my-auto max-md:mt-10"
                  />
                </div>{" "}
                <div className="flex flex-col items-stretch w-[86%] ml-5 max-md:w-full max-md:ml-0">
                  <div className="flex grow flex-col max-md:max-w-full max-md:mt-10">
                    <div className="flex w-[744px] max-w-full flex-col self-start max-md:pl-5">
                      <Image
                        width={100}
                        height={100}
                        loading="lazy"
                        src={Talents}
                        alt="talents-icon"
                        className="aspect-[2.81] object-contain object-center w-[596px] overflow-hidden self-center max-w-full"
                      />{" "}
                      <div className="text-cyan-900 text-center text-5xl font-semibold leading-[51.84px] self-center max-w-[578px] mt-11 max-md:max-w-full max-md:text-4xl max-md:mt-10">
                        More that 5M+ <br />
                        verified quality talents
                      </div>{" "}
                      <div className="text-cyan-900 text-center text-lg leading-8 self-center max-w-[570px] mt-4 max-md:max-w-full">
                        Circuit is flexible and affordable and offers you
                        exceptional support to achieve your career goals.
                      </div>{" "}
                      <div className="items-start  flex justify-center gap-5 mt-10  max-md:mt-10">
                        <Link
                          href={"/create-task"}
                          className="w-full flex justify-center items-center bg-orange-400 rounded-[50px] px-20 py-5 text-white text-base font-bold self-center whitespace-nowrap"
                        >
                          Post a task
                        </Link>

                        <Link
                          href={"/signin"}
                          className="w-full flex justify-center items-center px-20 py-5 rounded-[500px] max-md:px-5 bg-opacity-10 bg-orange-400 text-orange-400 text-base font-medium self-center whitespace-nowrap"
                        >
                          Become a tasker
                        </Link>
                      </div>
                    </div>{" "}
                    <Image
                      loading="lazy"
                      width={100}
                      height={100}
                      src={Start1}
                      alt="star-icon"
                      className="aspect-square object-contain object-center w-11 fill-orange-400 overflow-hidden max-w-full grow mt-5 self-start"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          <div className="flex flex-col items-stretch w-[4%] ml-5 max-md:w-full max-md:ml-0">
            <Image
              loading="lazy"
              width={100}
              height={100}
              src={Start1}
              alt="star-icon"
              className="aspect-square object-contain object-center w-11 fill-orange-400 overflow-hidden max-w-full max-md:mt-5"
            />
          </div>{" "}
          <div className="flex flex-col items-stretch w-[11%] ml-5 max-md:w-full max-md:ml-0">
            <Image
              loading="lazy"
              width={100}
              height={100}
              src={Start1}
              alt="star-icon"
              className="aspect-square object-contain object-center w-[122px] fill-orange-400 overflow-hidden max-w-full my-auto max-md:mt-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
