/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import star from "../../assets/star.svg";
import SectionTitle from "../RegularCMP/SectionTitle";

export default function Review() {
  return (
    <section className="mt-10 md:mt-16 lg:mt-20">
      <div className="container mx-auto">
        <div>
          {/* Section Title */}
          <SectionTitle title={`Trusted by millions of worldwide customers`} />

          <div className="mt-14">
            <div className="gap-5 md:gap-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center">
              <div>
                <div className="flex gap-2 items-center justify-center">
                  <Image
                    src={star}
                    className="aspect-[1] object-contain object-center w-[25px] overflow-hidden self-center"
                  />
                  <Image
                    src={star}
                    className="aspect-[1] object-contain object-center w-[25px] overflow-hidden self-center"
                  />
                  <Image
                    src={star}
                    className="aspect-[1] object-contain object-center w-[25px] overflow-hidden self-center"
                  />
                  <Image
                    src={star}
                    className="aspect-[1] object-contain object-center w-[25px] overflow-hidden self-center"
                  />
                  <Image
                    src={star}
                    className="aspect-[1] object-contain object-center w-[25px] overflow-hidden self-center"
                  />
                </div>
                <div className="text-slate-900 text-center text-lg leading-8 self-stretch my-7">
                  “This was definitely my best experience with live chat
                  software. Plug and play. Intuitive. It is fast, clean,
                  amazing.”{" "}
                </div>{" "}
                <div className="text-gray-500 text-center text-base font-medium leading-6 self-center whitespace-nowrap mt-7 max-md:mt-10 lg:mt-16">
                  <span className="text-slate-900">Rated 4.5/5 -</span>
                  <span className="text-gray-500"> from over 100 reviews</span>
                </div>
              </div>

              <div>
                <div className="flex gap-2 items-center justify-center">
                  <Image
                    src={star}
                    className="aspect-[1] object-contain object-center w-[25px] overflow-hidden self-center"
                  />
                  <Image
                    src={star}
                    className="aspect-[1] object-contain object-center w-[25px] overflow-hidden self-center"
                  />
                  <Image
                    src={star}
                    className="aspect-[1] object-contain object-center w-[25px] overflow-hidden self-center"
                  />
                  <Image
                    src={star}
                    className="aspect-[1] object-contain object-center w-[25px] overflow-hidden self-center"
                  />
                  <Image
                    src={star}
                    className="aspect-[1] object-contain object-center w-[25px] overflow-hidden self-center"
                  />
                </div>
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

              <div>
                <div className="flex gap-2 items-center justify-center">
                  <Image
                    src={star}
                    className="aspect-[1] object-contain object-center w-[25px] overflow-hidden self-center"
                  />
                  <Image
                    src={star}
                    className="aspect-[1] object-contain object-center w-[25px] overflow-hidden self-center"
                  />
                  <Image
                    src={star}
                    className="aspect-[1] object-contain object-center w-[25px] overflow-hidden self-center"
                  />
                  <Image
                    src={star}
                    className="aspect-[1] object-contain object-center w-[25px] overflow-hidden self-center"
                  />
                  <Image
                    src={star}
                    className="aspect-[1] object-contain object-center w-[25px] overflow-hidden self-center"
                  />
                </div>
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
      </div>
    </section>
  );
}
