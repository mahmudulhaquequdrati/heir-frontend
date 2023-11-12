/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Footer from "@/components/shareableComponents/Footer";
import JobIcon from "../assets/clientImage/portfolio 1.svg";
import PeopleGroup from "../assets/clientImage/user 1.svg";
import Invoices from "../assets/clientImage/invoice 1.svg";
import Satisfaction from "../assets/clientImage/satisfaction 1.svg";
import Trophy from "../assets/clientImage/Component 97.svg";
import Currency from "../assets/clientImage/Component 99.svg";
import WorkDone from "../assets/clientImage/Group.svg";
import Image from "next/image";
import Fillstartfrom from "../assets/clientImage/fillstart.svg";
import SearchIcon from "../assets/clientImage/searchicon.svg";
import Hero from "../assets/h.png";
import BoostBusiness from "@/components/homeComponents/BoostBusiness";
import ChooseUs from "@/components/homeComponents/ChooseUs";
import VerifiedTalents from "@/components/homeComponents/VerifiedTalents";
import Review from "@/components/homeComponents/Review";

export default function Home() {
  return (
    <main>
      <div className="bg-white flex flex-col">
        <div className="bg-[#213F61] md:flex w-full pb-48 md:min-h-[75vh] items-center px-10 mx-auto md:px-48 pt-10 md:pt-16">
          <div className="w-full md:w-2/4 ">
            <p className=" text-5xl text-white leading-[4rem] font-clash font-medium">
              Find work or want
              <br />
              to get it done, you will find
              <br />
              everything here
            </p>

            <div className="w-[50%]  flex justify-between gap-5 mt-16 ax-md:max-w-full max-md:flex-wrap max-md:mt-10">
              <div className="justify-center items-center bg-orange-400 flex flex-col grow shrink-0 basis-auto flex-1 px-20 py-5 rounded-[50px] max-md:px-5">
                <div className="text-white text-base font-bold self-center whitespace-nowrap">
                  Post a task
                </div>
              </div>{" "}
              <div className="justify-center items-center bg-orange-400 bg-opacity-10 flex flex-col grow shrink-0 basis-auto flex-1 px-20 py-5 rounded-[500px] max-md:px-5">
                <div className="text-orange-400 text-base font-medium self-center whitespace-nowrap">
                  Become a tasker
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-[38%] mx-auto mt-10 md:mt-0">
            <Image height={100} width={100} src={Hero} className="w-full" alt="hero" />
          </div>
        </div>

        <div className="container flex justify-center items-center mx-auto md:shadow-2xl bg-white md:self-stretch md:-translate-y-2/4 pl-28 pr-16 md:py-12 md:rounded-[500px] max-md:max-w-full max-md:mt-10 max-md:px-5">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-1/5 max-md:w-full max-md:ml-0">
              <div className="flex items-start gap-5 my-auto max-md:mt-10">
                <Image
                  loading="lazy"
                  width={100}
                  height={100}
                  src={JobIcon}
                  alt="jobicon"
                  className="aspect-square object-contain object-center w-[50px] overflow-hidden max-w-full self-start"
                />
                <div className="flex flex-col mt-1 self-start">
                  <div className="text-cyan-900 text-center text-2xl font-semibold leading-9 self-stretch whitespace-nowrap">
                    500k
                  </div>
                  <div className="text-cyan-900 text-center text-base font-medium leading-6 self-stretch whitespace-nowrap mt-3">
                    Job posted
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[24%] ml-5 max-md:w-full max-md:ml-0">
              <div className="flex items-start gap-5 my-auto max-md:mt-10">
                <Image
                  loading="lazy"
                  width={100}
                  height={100}
                  alt="people-group"
                  src={PeopleGroup}
                  className="aspect-square object-contain object-center w-[55px] overflow-hidden max-w-full self-start"
                />
                <div className="flex flex-col mt-2.5 self-start">
                  <div className="text-cyan-900 text-center text-2xl font-semibold leading-9 self-stretch whitespace-nowrap">
                    1 Million
                  </div>
                  <div className="text-cyan-900 text-center text-base font-medium leading-6 self-stretch whitespace-nowrap mt-3">
                    Quality talents
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[24%] ml-5 max-md:w-full max-md:ml-0">
              <div className="flex w-full max-w-[181px] items-start justify-between gap-5 my-auto max-md:mt-10">
                <Image
                  loading="lazy"
                  width={100}
                  height={100}
                  src={Invoices}
                  alt="invoices"
                  className="aspect-square object-contain object-center w-[61px] overflow-hidden self-stretch max-w-full"
                />
                <div className="self-center flex flex-col my-auto">
                  <div className="text-cyan-900 text-center text-2xl font-semibold leading-9 self-stretch whitespace-nowrap">
                    8 Million
                  </div>
                  <div className="text-cyan-900 text-center text-base font-medium leading-6 self-stretch whitespace-nowrap mt-3">
                    Paid Invoices
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[32%] ml-5 max-md:w-full max-md:ml-0">
              <div className="flex items-start gap-3 my-auto max-md:mt-10">
                <Image
                  loading="lazy"
                  width={100}
                  height={100}
                  src={Satisfaction}
                  alt="satisfaction"
                  className="aspect-square object-contain object-center w-[68px] overflow-hidden self-stretch max-w-full"
                />
                <div className="self-center flex flex-col my-auto">
                  <div className="text-cyan-900 text-center text-2xl font-semibold leading-9 self-stretch whitespace-nowrap">
                    99%
                  </div>
                  <div className="text-cyan-900 text-center text-base font-medium leading-6 self-stretch whitespace-nowrap mt-3">
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
        <div className="items-center self-center flex w-full max-w-[1199px] flex-col mt-32 max-md:max-w-full max-md:mt-10">
          <div className="items-center self-center flex w-full md:w-[947px] max-w-full flex-col">
            <div className="items-center self-center flex w-full md:w-[677px] max-w-full flex-col">
              <div className="items-center self-stretch flex flex-col px-5 max-md:max-w-full">
                <div className="text-cyan-900 text-4xl font-semibold tracking-wider  -mr-5 max-md:max-w-full">
                  See what others are getting done
                </div>{" "}
                <div className="text-cyan-900 text-center text-base leading-6 self-center md:whitespace-nowrap mt-2">
                  Connect with unlimited quality talents to get any help.
                </div>
              </div>{" "}
              <div className="bg-orange-400 self-center flex w-[205px] h-[9px] flex-col mt-4 rounded-[50px]" />
            </div>{" "}
            <div className="justify-center items-start border border-[color:var(--Stoke,rgba(33,63,97,0.05))] md:shadow-2xl bg-white self-stretch flex gap-2 mt-10 px-5 py-2 md:rounded-[500px] border-solid max-md:max-w-full max-md:flex-wrap">
              <div className="text-white text-center text-base font-medium self-stretch whitespace-nowrap justify-center items-center bg-cyan-900 flex-1 px-4 py-2.5 rounded-[50px]">
                Starting a business
              </div>{" "}
              <div className="text-cyan-900 text-center text-base font-medium self-stretch whitespace-nowrap justify-center items-center bg-white flex-1 px-16 py-2.5 rounded-[50px] max-md:px-5">
                Moving
              </div>{" "}
              <div className="text-cyan-900 text-center text-base font-medium self-stretch whitespace-nowrap justify-center items-center bg-white flex-1 pl-10 pr-10 py-2.5 rounded-[50px] max-md:px-5">
                Maintenance
              </div>{" "}
              <div className="text-cyan-900 text-center text-base font-medium self-stretch whitespace-nowrap justify-center items-center bg-white flex-1 px-14 py-2.5 rounded-[50px] max-md:px-5">
                Pretties
              </div>{" "}
              <div className="text-cyan-900 text-center text-base font-medium self-stretch whitespace-nowrap justify-center items-center bg-white flex-1 pl-16 pr-16 py-2.5 rounded-[50px] max-md:px-5">
                others
              </div>
            </div>
          </div>{" "}
          <div className="items-start self-stretch flex grow flex-col mt-16 max-md:max-w-full max-md:mt-10">
            <div className="self-stretch px-5 max-md:max-w-full">
              <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
                  <div className="items-center self-stretch border border-[color:var(--Stoke,rgba(33,63,97,0.05))] shadow-2xl bg-white flex w-full max-w-[386px] grow flex-col mx-auto p-6 rounded-2xl border-solid max-md:mt-5 max-md:px-5">
                    <div className="text-white text-center text-xl font-medium leading-7 self-stretch justify-center items-center bg-[#213F61] w-full p-4 rounded-xl">
                      Logo designer for
                      <br />
                      photography business
                    </div>{" "}
                    <div className="justify-between items-start self-stretch flex w-full gap-5 mt-4 max-md:justify-center">
                      <div className="text-cyan-900 text-opacity-60 text-center text-base font-medium leading-5 self-center my-auto">
                        Design
                      </div>{" "}
                      <div className="text-orange-400 text-xl font-semibold leading-7 self-stretch">
                        $50
                      </div>{" "}
                      <div className="items-start self-center flex gap-1 my-auto">
                        <Image
                          loading="lazy"
                          width={100}
                          height={100}
                          src={Trophy}
                          alt="trophy"
                          className="aspect-square object-contain object-center w-5 overflow-hidden self-stretch max-w-full"
                        />{" "}
                        <div className="text-cyan-900 text-opacity-60 text-sm font-medium leading-5 self-center whitespace-nowrap my-auto">
                          4.6(1K+)
                        </div>
                      </div>
                    </div>
                  </div>
                </div>{" "}
                <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                  <div className="items-center self-stretch border border-[color:var(--Stoke,rgba(33,63,97,0.05))] shadow-2xl bg-white flex w-full max-w-[387px] grow flex-col mx-auto p-6 rounded-2xl border-solid max-md:mt-5 max-md:px-5">
                    <div className="text-white text-center text-xl font-medium leading-7 self-stretch justify-center items-center bg-[#213F61] w-full p-4 rounded-xl">
                      Couch moved
                      <br />
                      1km down the road
                    </div>{" "}
                    <div className="justify-between items-start self-stretch flex w-full gap-5 mt-4 max-md:justify-center">
                      <div className="text-cyan-900 text-opacity-60 text-center text-base font-medium leading-5 self-center my-auto">
                        Design
                      </div>{" "}
                      <div className="text-orange-400 text-xl font-semibold leading-7 self-stretch">
                        $450
                      </div>{" "}
                      <div className="items-start self-center flex gap-1 my-auto">
                        <Image
                          loading="lazy"
                          width={100}
                          height={100}
                          src={Currency}
                          alt="currency"
                          className="aspect-square object-contain object-center w-5 overflow-hidden self-stretch max-w-full"
                        />{" "}
                        <div className="text-cyan-900 text-opacity-60 text-sm font-medium leading-5 self-center whitespace-nowrap my-auto">
                          4.6(1K+)
                        </div>
                      </div>
                    </div>
                  </div>
                </div>{" "}
                <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                  <div className="items-center self-stretch border border-[color:var(--Stoke,rgba(33,63,97,0.05))] shadow-2xl bg-white flex w-full max-w-[386px] grow flex-col mx-auto p-6 rounded-2xl border-solid max-md:mt-5 max-md:px-5">
                    <div className="text-white text-center text-xl font-medium leading-7 self-stretch justify-center items-center bg-[#213F61] w-full p-4 rounded-xl">
                      Pick up & deliver
                      <br />a medium size fridge
                    </div>{" "}
                    <div className="justify-between items-start self-stretch flex w-full gap-5 mt-4 max-md:justify-center">
                      <div className="text-cyan-900 text-opacity-60 text-center text-base font-medium leading-5 self-center my-auto">
                        Design
                      </div>{" "}
                      <div className="text-orange-400 text-xl font-semibold leading-7 self-stretch">
                        $360
                      </div>{" "}
                      <div className="items-start self-center flex gap-1 my-auto">
                        <Image
                          loading="lazy"
                          width={100}
                          height={100}
                          src={WorkDone}
                          alt="work-done"
                          className="aspect-square object-contain object-center w-5 overflow-hidden self-stretch max-w-full"
                        />{" "}
                        <div className="text-cyan-900 text-opacity-60 text-sm font-medium leading-5 self-center whitespace-nowrap my-auto">
                          4.6(1K+)
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div className="self-stretch mt-5 px-5 max-md:max-w-full">
              <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
                  <div className="items-center self-stretch border border-[color:var(--Stoke,rgba(33,63,97,0.05))] shadow-2xl bg-white flex w-full max-w-[386px] grow flex-col mx-auto p-6 rounded-2xl border-solid max-md:mt-5 max-md:px-5">
                    <div className="text-white text-center text-xl font-medium leading-7 self-stretch justify-center items-center bg-[#213F61] w-full p-4 rounded-xl">
                      Break down and take away boxes
                    </div>{" "}
                    <div className="justify-between items-start self-stretch flex w-full gap-5 mt-4 max-md:justify-center">
                      <div className="text-cyan-900 text-opacity-60 text-center text-base font-medium leading-5 self-center my-auto">
                        Design
                      </div>{" "}
                      <div className="text-orange-400 text-xl font-semibold leading-7 self-stretch">
                        $963
                      </div>{" "}
                      <div className="items-start self-center flex gap-1 my-auto">
                        <Image
                          loading="lazy"
                          width={100}
                          height={100}
                          src={Fillstartfrom}
                          alt="filterstartfrom"
                          className="aspect-square object-contain object-center w-5 overflow-hidden self-stretch max-w-full"
                        />{" "}
                        <div className="text-cyan-900 text-opacity-60 text-sm font-medium leading-5 self-center whitespace-nowrap my-auto">
                          4.6(1K+)
                        </div>
                      </div>
                    </div>
                  </div>
                </div>{" "}
                <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                  <div className="items-center self-stretch border border-[color:var(--Stoke,rgba(33,63,97,0.05))] shadow-2xl bg-white flex w-full max-w-[387px] grow flex-col mx-auto p-6 rounded-2xl border-solid max-md:mt-5 max-md:px-5">
                    <div className="text-white text-center text-xl font-medium leading-7 self-stretch justify-center items-center bg-[#213F61] w-full p-4 rounded-xl">
                      Help moving house
                    </div>{" "}
                    <div className="justify-between items-start self-stretch flex w-full gap-5 mt-4 max-md:justify-center">
                      <div className="text-cyan-900 text-opacity-60 text-center text-base font-medium leading-5 self-center my-auto">
                        Design
                      </div>{" "}
                      <div className="text-orange-400 text-xl font-semibold leading-7 self-stretch">
                        $758
                      </div>{" "}
                      <div className="items-start self-center flex gap-1 my-auto">
                        <Image
                          loading="lazy"
                          width={100}
                          height={100}
                          src={Fillstartfrom}
                          alt="filterstartfrom"
                          className="aspect-square object-contain object-center w-5 overflow-hidden self-stretch max-w-full"
                        />{" "}
                        <div className="text-cyan-900 text-opacity-60 text-sm font-medium leading-5 self-center whitespace-nowrap my-auto">
                          4.6(1K+)
                        </div>
                      </div>
                    </div>
                  </div>
                </div>{" "}
                <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                  <div className="items-center self-stretch border border-[color:var(--Stoke,rgba(33,63,97,0.05))] shadow-2xl bg-white flex w-full max-w-[386px] grow flex-col mx-auto p-6 rounded-2xl border-solid max-md:mt-5 max-md:px-5">
                    <div className="text-white text-center text-xl font-medium leading-7 self-stretch justify-center items-center bg-[#213F61] w-full p-4 rounded-xl">
                      Sofa delivery
                    </div>{" "}
                    <div className="justify-between items-start self-stretch flex w-full gap-5 mt-4 max-md:justify-center">
                      <div className="text-cyan-900 text-opacity-60 text-center text-base font-medium leading-5 self-center my-auto">
                        Design
                      </div>{" "}
                      <div className="text-orange-400 text-xl font-semibold leading-7 self-stretch">
                        $1800
                      </div>{" "}
                      <div className="items-start self-center flex gap-1 my-auto">
                        <Image
                          loading="lazy"
                          width={100}
                          height={100}
                          src={Fillstartfrom}
                          alt="filterstartfrom"
                          className="aspect-square object-contain object-center w-5 overflow-hidden self-stretch max-w-full"
                        />{" "}
                        <div className="text-cyan-900 text-opacity-60 text-sm font-medium leading-5 self-center whitespace-nowrap my-auto">
                          4.6(1K+)
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div className="self-stretch mt-5 px-5 max-md:max-w-full">
              <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
                  <div className="items-center self-stretch border border-[color:var(--Stoke,rgba(33,63,97,0.05))] shadow-2xl bg-white flex w-full max-w-[386px] grow flex-col mx-auto p-6 rounded-2xl border-solid max-md:mt-5 max-md:px-5">
                    <div className="text-white text-center text-xl font-medium leading-7 self-stretch justify-center items-center bg-[#213F61] w-full p-4 rounded-xl">
                      End of lease Clean
                    </div>{" "}
                    <div className="justify-between items-start self-stretch flex w-full gap-5 mt-4 max-md:justify-center">
                      <div className="text-cyan-900 text-opacity-60 text-center text-base font-medium leading-5 self-center my-auto">
                        Design
                      </div>{" "}
                      <div className="text-orange-400 text-xl font-semibold leading-7 self-stretch">
                        $150
                      </div>{" "}
                      <div className="items-start self-center flex gap-1 my-auto">
                        <Image
                          loading="lazy"
                          width={100}
                          height={100}
                          src={Fillstartfrom}
                          alt="filterstartfrom"
                          className="aspect-square object-contain object-center w-5 overflow-hidden self-stretch max-w-full"
                        />{" "}
                        <div className="text-cyan-900 text-opacity-60 text-sm font-medium leading-5 self-center whitespace-nowrap my-auto">
                          4.6(1K+)
                        </div>
                      </div>
                    </div>
                  </div>
                </div>{" "}
                <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                  <div className="items-center self-stretch border border-[color:var(--Stoke,rgba(33,63,97,0.05))] shadow-2xl bg-white flex w-full max-w-[387px] grow flex-col mx-auto p-6 rounded-2xl border-solid max-md:mt-5 max-md:px-5">
                    <div className="text-white text-center text-xl font-medium leading-7 self-stretch justify-center items-center bg-[#213F61] w-full p-4 rounded-xl">
                      Urgent removalist
                    </div>{" "}
                    <div className="justify-between items-start self-stretch flex w-full gap-5 mt-4 max-md:justify-center">
                      <div className="text-cyan-900 text-opacity-60 text-center text-base font-medium leading-5 self-center my-auto">
                        Design
                      </div>{" "}
                      <div className="text-orange-400 text-xl font-semibold leading-7 self-stretch">
                        $30
                      </div>{" "}
                      <div className="items-start self-center flex gap-1 my-auto">
                        <Image
                          loading="lazy"
                          width={100}
                          height={100}
                          src={Fillstartfrom}
                          alt="filterstartfrom"
                          className="aspect-square object-contain object-center w-5 overflow-hidden self-stretch max-w-full"
                        />{" "}
                        <div className="text-cyan-900 text-opacity-60 text-sm font-medium leading-5 self-center whitespace-nowrap my-auto">
                          4.6(1K+)
                        </div>
                      </div>
                    </div>
                  </div>
                </div>{" "}
                <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                  <div className="items-center self-stretch border border-[color:var(--Stoke,rgba(33,63,97,0.05))] shadow-2xl bg-white flex w-full max-w-[386px] grow flex-col mx-auto p-6 rounded-2xl border-solid max-md:mt-5 max-md:px-5">
                    <div className="text-white text-center text-xl font-medium leading-7 self-stretch justify-center items-center bg-[#213F61] w-full p-4 rounded-xl">
                      Break down
                      <br />
                      and take away boxes
                    </div>{" "}
                    <div className="justify-between items-start self-stretch flex w-full gap-5 mt-4 max-md:justify-center">
                      <div className="text-cyan-900 text-opacity-60 text-center text-base font-medium leading-5 self-center my-auto">
                        Design
                      </div>{" "}
                      <div className="text-orange-400 text-xl font-semibold leading-7 self-stretch">
                        $500
                      </div>{" "}
                      <div className="items-start self-center flex gap-1 my-auto">
                        <Image
                          loading="lazy"
                          width={100}
                          height={100}
                          alt="filterstartfrom"
                          src={Fillstartfrom}
                          className="aspect-square object-contain object-center w-5 overflow-hidden self-stretch max-w-full"
                        />{" "}
                        <div className="text-cyan-900 text-opacity-60 text-sm font-medium leading-5 self-center whitespace-nowrap my-auto">
                          4.6(1K+)
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <VerifiedTalents />
        <Review />
        <Footer />
      </div>
    </main>
  );
}
