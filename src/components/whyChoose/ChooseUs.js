/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */

import Image from "next/image";
import CooseUs from "../../assets/clientImage/cooseus.svg";
import SectionTitle from "../RegularCMP/SectionTitle";

export default function ChooseUs() {
  return (
    <div className="container mx-auto py-20">
      {/* Section Title */}
      <SectionTitle
        title="Why Choose Hier?"
        paragraph="Connect with unlimited quality talents to get any help."
      />

      <div className="self-center w-full mx-auto mt-16 max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex-col lg:flex-row flex max-md:flex-col max-md:items-stretch max-md:gap-0 mx-auto">
          <div className="flex flex-col items-stretch w-full lg:w-[41%] max-md:w-full max-md:ml-0">
            <Image
              loading="lazy"
              height={100}
              width={100}
              src={CooseUs}
              className="aspect-[0.81] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-7"
            />
          </div>
          <div className="flex flex-col w-full lg:w-[59%] ml-5 max-md:w-full max-md:ml-0 mt-5 max-md:mt-0">
            <div className=" flex gap-3 md:gap-6 flex-col max-md:max-w-full max-md:mt-7">
              <div className="flex flex-col md:flex-row">
                <div className="flex flex-col w-full md:w-[48%] max-md:w-full max-md:ml-0">
                  <div className=" flex flex-col max-md:mt-10">
                    <div className="text-white text-xl font-semibold leading-8  bg-orange-400 w-[81px] text-center max-w-full pl-7 pr-7 py-1.5 rounded-[50px]  max-md:px-5">
                      01
                    </div>
                    <div className="text-cyan-900 text-2xl md:text-4xl font-medium leading-[36.16px]  mt-5">
                      Vast Network
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-stretch w-[52%] ml-5 max-md:w-full max-md:ml-0">
                  <p className="text-cyan-900 text-base leading-8  my-auto mt-5 md:mt-10">
                    With a diverse community of users from different backgrounds
                    and skills, Hier offers a wide range of services.
                  </p>
                </div>
              </div>

              <hr className="bg-black bg-opacity-10  w-full h-px mt-2 max-md:max-w-full" />

              <div className="flex flex-col md:flex-row">
                <div className="flex flex-col w-[48%] max-md:w-full max-md:ml-0">
                  <div className=" flex flex-col max-md:mt-10">
                    <div className="text-white text-xl font-semibold leading-8  bg-orange-400 w-[81px] text-center max-w-full pl-7 pr-7 py-1.5 rounded-[50px]  max-md:px-5">
                      02
                    </div>
                    <div className="text-cyan-900 text-2xl  md:text-4xl font-medium leading-[36.16px]  mt-5">
                      Global Reach
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-stretch w-[52%] ml-5 max-md:w-full max-md:ml-0">
                  <div className="text-cyan-900 text-base leading-8  my-auto mt-5 md:mt-10">
                    Hier connects you with people worldwide, making it easy to
                    find the help you need, regardless of your location.
                  </div>
                </div>
              </div>
              <hr className="bg-black bg-opacity-10  w-full h-px mt-2 max-md:max-w-full" />

              <div className="flex flex-col md:flex-row">
                <div className="flex flex-col w-[48%] max-md:w-full max-md:ml-0">
                  <div className=" flex flex-col max-md:mt-10">
                    <div className="text-white text-xl font-semibold leading-8  bg-orange-400 w-[81px] text-center max-w-full pl-7 pr-7 py-1.5 rounded-[50px]  max-md:px-5">
                      03
                    </div>
                    <div className="text-cyan-900 text-2xl md:text-4xl font-medium leading-[36.16px]  mt-5">
                      Verified Profiles
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-stretch w-[52%] ml-5 max-md:w-full max-md:ml-0">
                  <div className="text-cyan-900 text-base leading-8  my-auto  mt-5 md:mt-10">
                    We ensure the authenticity of users&apos; profiles, so you
                    can trust the people you connect with.
                  </div>
                </div>
              </div>
              <hr className="bg-black bg-opacity-10  w-full h-px mt-2 max-md:max-w-full" />

              <div className="flex flex-col md:flex-row">
                <div className="flex flex-col w-[48%] max-md:w-full max-md:ml-0">
                  <div className=" flex flex-col max-md:mt-10 justify-between">
                    <div className="text-white text-xl font-semibold leading-8  bg-orange-400 w-[81px] text-center max-w-full pl-7 pr-7 py-1.5 rounded-[50px] max-md:px-5">
                      04
                    </div>
                    <div className="text-cyan-900 text-2xl md:text-4xl font-medium leading-[56px]  mt-5">
                      Secure Transactions
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-stretch w-[52%] ml-5 max-md:w-full max-md:ml-0">
                  <div className="text-cyan-900 text-base leading-8  my-auto mt-5 md:mt-10">
                    Our secure payment system guarantees peace of mind when
                    hiring someone or offering your services.
                  </div>
                </div>
              </div>
              <hr className="bg-black bg-opacity-10  w-full h-px mt-2 max-md:max-w-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
