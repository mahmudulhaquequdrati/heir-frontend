/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import FacebookIcon from "../../assets/clientImage/facebook.svg";
import LinkdinIcon from "../../assets/clientImage/linkedin.svg";
import TweeterIcon from "../../assets/clientImage/twetter.svg";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <footer className="bg-primary">
        <div className="container mx-auto pt-16 pb-28">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 xl:gap-0">
            <div>
              <h1 className="text-white mb-9 text-xl font-semibold">
                {" "}
                Discover{" "}
              </h1>

              <div className="text-base font-normal text-[#FFFFFF99] flex flex-col gap-3">
                <Link href="#">
                  <span> How it works </span>
                </Link>

                <Link href="#">
                  <span> Airtasker for business </span>
                </Link>

                <Link href="#">
                  <span> Earn Money </span>
                </Link>

                <Link href="#">
                  <span> Side Hustle </span>
                </Link>

                <Link href="#">
                  <span> Calculator </span>
                </Link>

                <Link href="#">
                  <span> Search jobs </span>
                </Link>

                <Link href="#">
                  <span> Cost Guides </span>
                </Link>

                <Link href="#">
                  <span> Service Guides </span>
                </Link>

                <Link href="#">
                  <span> Comparison Guides </span>
                </Link>

                <Link href="#">
                  <span> Student Discount </span>
                </Link>

                <Link href="#">
                  <span> New users </span>
                </Link>

                <Link href="#">
                  <span> FAQ </span>
                </Link>
              </div>
            </div>

            <div>
              <h1 className="text-white mb-9 text-xl font-semibold">Company</h1>

              <div className="text-base font-normal text-[#FFFFFF99] flex flex-col gap-3">
                <Link href="#">
                  <span> About us </span>
                </Link>

                <Link href="#">
                  <span> Careers </span>
                </Link>

                <Link href="#">
                  <span> Media Enquiries </span>
                </Link>

                <Link href="#">
                  <span> Community Guidelines </span>
                </Link>

                <Link href="#">
                  <span> Tasker Principles </span>
                </Link>

                <Link href="#">
                  <span> Blog </span>
                </Link>

                <Link href="#">
                  <span> Contact us </span>
                </Link>

                <Link href="#">
                  <span> Privacy policy </span>
                </Link>

                <Link href="#">
                  <span> Investors </span>
                </Link>
              </div>
            </div>

            <div>
              <h1 className="text-white mb-9 text-xl font-semibold">
                Existing Members
              </h1>

              <div className="text-base font-normal text-[#FFFFFF99] flex flex-col gap-3">
                <Link href="#">
                  <span> Post tasks </span>
                </Link>

                <Link href="#">
                  <span> Browse tasks </span>
                </Link>

                <Link href="#">
                  <span> Login </span>
                </Link>

                <Link href="#">
                  <span> Login </span>
                </Link>

                <Link href="#">
                  <span> Support Centre </span>
                </Link>
              </div>
            </div>

            <div>
              <h1 className="text-white mb-9 text-xl font-semibold">
                {" "}
                Popular Categories{" "}
              </h1>

              <div className="text-base font-normal text-[#FFFFFF99] flex flex-col gap-3">
                <Link href="#">
                  <span> Handyman Services </span>
                </Link>

                <Link href="#">
                  <span> Cleaning </span>
                </Link>

                <Link href="#">
                  <span> Delivery </span>
                </Link>

                <Link href="#">
                  <span> Removalists </span>
                </Link>

                <Link href="#">
                  <span> Gardening Services </span>
                </Link>

                <Link href="#">
                  <span> Auto Electricians </span>
                </Link>

                <Link href="#">
                  <span> assembly Services </span>
                </Link>

                <Link href="#">
                  <span> All Services </span>
                </Link>
              </div>
            </div>

            <div>
              <h1 className="text-white mb-9 text-xl font-semibold">
                {" "}
                Popular Locations{" "}
              </h1>

              <div className="text-base font-normal text-[#FFFFFF99] flex flex-col gap-3">
                <Link href="#">
                  <span> Sydney </span>
                </Link>

                <Link href="#">
                  <span> Melbourne </span>
                </Link>

                <Link href="#">
                  <span> Brisbane </span>
                </Link>

                <Link href="#">
                  <span> perth </span>
                </Link>

                <Link href="#">
                  <span> adelaide </span>
                </Link>

                <Link href="#">
                  <span> newcastle </span>
                </Link>

                <Link href="#">
                  <span> canberra </span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center py-5">
            <div>
              <p className="text-base font-normal text-[#FFFFFF99]">
                {" "}
                Heir Pty. Ltd 2011-2023 ©, All rights reserved{" "}
              </p>
            </div>
            <div className="items-start flex gap-4 self-start max-md:justify-center">
              <Image
                loading="lazy"
                width={100}
                height={100}
                src={LinkdinIcon}
                alt="Linkdin"
                className="aspect-square object-contain object-center w-full overflow-hidden flex-1"
              />
              <Image
                loading="lazy"
                width={100}
                height={100}
                src={FacebookIcon}
                alt="Facebook"
                className="aspect-square object-contain object-center w-full overflow-hidden flex-1"
              />
              <Image
                loading="lazy"
                width={100}
                height={100}
                src={TweeterIcon}
                alt="Tweeter"
                className="aspect-square object-contain object-center w-full overflow-hidden flex-1"
              />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
