/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import BoostBusiness from "@/components/homeComponents/BoostBusiness";
import ChooseUs from "@/components/homeComponents/ChooseUs";
import Review from "@/components/homeComponents/Review";
import VerifiedTalents from "@/components/homeComponents/VerifiedTalents";
import Footer from "@/components/shareableComponents/Footer";
import Image from "next/image";
import Trophy from "../assets/clientImage/Component 97.svg";
import Currency from "../assets/clientImage/Component 99.svg";
import WorkDone from "../assets/clientImage/Group.svg";
import Fillstartfrom from "../assets/clientImage/fillstart.svg";
import Invoices from "../assets/clientImage/invoice 1.svg";
import JobIcon from "../assets/clientImage/portfolio 1.svg";
import Satisfaction from "../assets/clientImage/satisfaction 1.svg";
import PeopleGroup from "../assets/clientImage/user 1.svg";
import Hero from "../assets/h.png";
import Jobs from "@/components/homeComponents/Jobs";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="bg-white flex flex-col">
        <div className="bg-[#213F61] md:flex w-full mx-auto pb-48 md:min-h-[75vh] items-center px-10 md:px-24 pt-10 md:pt-16">
          <div className="container mx-auto flex gap-10 flex-col sm:flex-row items-center justify-between">
            <div className="w-full md:w-2/4 flex flex-col items-center sm:items-start order-2 sm:order-1">
              <p className="text-3xl sm:text-5xl text-center sm:text-left md:text-3xl lg:text-5xl text-white leading-[2.5rem] sm:leading-[4rem] font-clash font-medium">
                Find work or want
                <br />
                to get it done, you will <br /> find everything here
              </p>

              <div className="w-[90%] sm:w-[50%] flex justify-center sm:justify-between gap-5 mt-8 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
                <Link
                  href={"/create-task"}
                  className="w-full flex justify-center items-center bg-orange-400 text-white text-base font-bold self-center whitespace-nowrap md:px-8 lg:px-20 py-5 rounded-[50px] max-md:px-5"
                >
                  Post a task
                </Link>

                <Link
                  href={"/signin"}
                  className="w-full flex justify-center items-center md:px-8 lg:px-20 py-5 rounded-[500px] max-md:px-5 text-orange-400 bg-orange-400 bg-opacity-10 text-base font-medium self-center whitespace-nowrap"
                >
                  Become a tasker
                </Link>
              </div>
            </div>
            <div className="w-full md:w-[38%] flex justify-center order-1 sm:order-2">
              <Image src={Hero} className="w-full" alt="hero" />
            </div>
          </div>
        </div>

        <div className="container flex justify-center items-center mx-auto md:shadow-2xl bg-white md:self-stretch md:-translate-y-2/4 pl-28 pr-16 md:py-12 md:rounded-[500px] max-md:max-w-full max-md:mt-10 max-md:px-5">
          <div className="gap-5 flex max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-1/5 max-md:w-full max-md:ml-0">
              <div className="flex items-center gap-5 max-md:mt-10">
                <Image
                  loading="lazy"
                  width={100}
                  height={100}
                  src={JobIcon}
                  alt="jobicon"
                  className="aspect-square object-contain object-center w-[50px] overflow-hidden max-w-full"
                />
                <div className="flex flex-col items-start">
                  <div className="text-cyan-900 text-center text-2xl font-semibold leading-9 whitespace-nowrap">
                    500k
                  </div>
                  <div className="text-cyan-900 text-center text-base font-medium leading-6 whitespace-nowrap mt-3">
                    Job posted
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-[24%] ml-5 max-md:w-full max-md:ml-0">
              <div className="flex items-center gap-5 my-auto max-md:mt-10">
                <Image
                  loading="lazy"
                  width={100}
                  height={100}
                  alt="people-group"
                  src={PeopleGroup}
                  className="aspect-square object-contain object-center w-[55px] overflow-hidden max-w-full self-start"
                />
                <div className="flex flex-col items-start">
                  <div className="text-cyan-900 text-center text-2xl font-semibold leading-9 whitespace-nowrap">
                    1 Million
                  </div>
                  <div className="text-cyan-900 text-center text-base font-medium leading-6 whitespace-nowrap mt-3">
                    Quality talents
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-[24%] ml-5 max-md:w-full max-md:ml-0">
              <div className="flex items-center gap-5 my-auto max-md:mt-10">
                <Image
                  loading="lazy"
                  width={100}
                  height={100}
                  src={Invoices}
                  alt="invoices"
                  className="aspect-square object-contain object-center w-[61px] overflow-hidden max-w-full"
                />
                <div className="flex flex-col items-start">
                  <div className="text-cyan-900 text-center text-2xl font-semibold leading-9 whitespace-nowrap">
                    8 Million
                  </div>
                  <div className="text-cyan-900 text-center text-base font-medium leading-6 whitespace-nowrap mt-3">
                    Paid Invoices
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-[32%] ml-5 max-md:w-full max-md:ml-0">
              <div className="flex items-center gap-3 my-auto max-md:mt-10">
                <Image
                  loading="lazy"
                  width={100}
                  height={100}
                  src={Satisfaction}
                  alt="satisfaction"
                  className="aspect-square object-contain object-center w-[68px] overflow-hidden max-w-full"
                />
                <div className="flex flex-col items-start">
                  <div className="text-cyan-900 text-center text-2xl font-semibold leading-9 whitespace-nowrap">
                    99%
                  </div>
                  <div className="text-cyan-900 text-center text-base font-medium leading-6 whitespace-nowrap mt-3">
                    Customer satisfaction
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* See what others are getting done */}
        <BoostBusiness />
        <ChooseUs />
        <Jobs />
        <VerifiedTalents />
        <Review />
        <Footer />
      </div>
    </main>
  );
}
