/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
"use client";
import Image from "next/image";
import Link from "next/link";
import DropdownImage from '../../assets/clientImage/arrow_drop_down.svg'
const Navbar = () => {
  return (
    <nav className=" p-4 shadow-sm bg-[#213F61] ">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex gap-3 items-center ">
          <Link
            href="/"
            className="  text-orange-400 text-4xl font-semibold uppercase self-stretch"
          >
            Hier
          </Link>
          <ul className="hidden lg:flex text-white items-center">
            <li className="flex items-center">
              <Link href="/categories" className="  pl-4 py-2 rounded-lg">
                Find talent
              </Link>
              <Image
                loading="lazy"
                width={100}
                height={100}
                src={DropdownImage}
                alt="dropicon"
                className="w-4 ml-1"
              />
            </li>
            <li>
              <Link href="/browse-tasks" className=" px-4 py-2 rounded-lg">
                Find Tasks
              </Link>
            </li>
            <li>
              <Link href="/how-it-works" className=" px-4 py-2 rounded-lg">
                How it works
              </Link>
            </li>
          </ul>
        </div>
        <div className="hidden lg:flex">
          <div className="items-start self-stretch flex gap-2.5 max-md:justify-center">
            <Link href="/signin" className="text-white text-base font-medium self-center my-auto">
              Sign in
            </Link>
            <Link href="/signup" className="text-orange-400 text-base font-medium self-stretch whitespace-nowrap justify-center items-center bg-orange-400 bg-opacity-10 w-[170px] max-w-full px-5 py-2.5 rounded-[500px]">
              Become a tasker
            </Link>
            <button className="text-white text-base font-bold self-stretch whitespace-nowrap justify-center items-center bg-orange-400 w-[170px] max-w-full pl-11 pr-10 py-2.5 rounded-[50px] max-md:px-5">
              Post a task
            </button>
          </div>
        </div>
        <div className="md:hidden">
          <button className="text-gray-900 ">☰</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
