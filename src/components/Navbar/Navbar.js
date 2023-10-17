"use client";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className=" p-4 shadow-sm ">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          href="/"
          className="text-3xl font-bold text-gray-800 hover:text-blue-400"
        >
          YourLogo
        </Link>
        <ul className="hidden lg:flex ">
          <li>
            <Link
              href="/categories"
              className="text-gray-800 hover:text-blue-700 px-4 py-2 hover:bg-blue-50 rounded-lg"
            >
              Categories
            </Link>
          </li>
          <li>
            <Link
              href="/browse-tasks"
              className="text-gray-800 hover:text-blue-700 px-4 py-2 hover:bg-blue-50 rounded-lg"
            >
              Browse Tasks
            </Link>
          </li>
          <li>
            <Link
              href="/how-it-works"
              className="text-gray-800 hover:text-blue-700 px-4 py-2 hover:bg-blue-50 rounded-lg"
            >
              How it works
            </Link>
          </li>
        </ul>
        <ul className="hidden lg:flex">
          <li>
            <Link
              href="/signin"
              className="text-gray-800 hover:text-blue-700 px-4 py-2 hover:bg-blue-50 rounded-lg "
            >
              Sign In
            </Link>
          </li>
          <li>
            <Link
              href="/signup"
              className="text-gray-800 hover:text-blue-700 px-4 py-2 hover:bg-blue-50 rounded-lg"
            >
              Sign Up
            </Link>
          </li>
          <li>
            <Link
              href="/post-task"
              className="bg-blue-600 text-white hover:bg-blue-500 hover:text-white transition duration-300 px-4 py-2 rounded ms-3"
            >
              Post Task
            </Link>
          </li>
        </ul>
        <div className="md:hidden">
          <button className="text-gray-900 ">☰</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
