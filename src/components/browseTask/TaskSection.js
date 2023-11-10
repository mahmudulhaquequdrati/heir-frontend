import Link from "next/link";
import Card from "../TaskCard/Card";
import MyMap from "./Map";

const TaskSection = () => {
  return (
    <div>
      <MyMap />
      <div>
        <div className="mt-10">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 pl-10 pr-10 text-sm text-gray-900 border border-gray-300 focus:border-gray-300 rounded-lg bg-white"
              placeholder="Search here..."
              required
            />
            <button
              type="submit"
              className="text-white absolute right-0 bottom-0 bg-secondary hover:bg-secondary font-medium rounded-lg text-sm px-10 py-[16.5px] "
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="rounded-xl shadow mt-10">
        <Link href="/browse-tasks/1">
          <Card />
        </Link>
        <Link href="/browse-tasks/2">
          <Card />
        </Link>
        <Link href="/browse-tasks/3">
          <Card />
        </Link>
        <Link href="/browse-tasks/4">
          <Card />
        </Link>
      </div>
    </div>
  );
};

export default TaskSection;
