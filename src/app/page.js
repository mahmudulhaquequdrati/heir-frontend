/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

export default function Home() {
  return (
    <main className=" flex flex-col items-center justify-between p-2 md:p-8 lg:p-24">
      <div className="max-w-full lg:max-w-7xl mx-2 md:mx-8 p-4 lg:p-8 text-center lg:text-left  bg-white rounded-lg flex flex-col lg:flex-row justify-between items-center h-full gap-4 md:gap-8">
        <div className="w-full lg:w-1/2">
          <div
            href="#"
            className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-4 text-sm text-gray-700 bg-gray-100 rounded-full hover:bg-gray-200 "
            role="alert"
          >
            <span className="text-xs bg-primary-600 rounded-full text-white bg-blue-400 px-4 py-1.5 mr-3">
              New
            </span>{" "}
            <span className="text-sm font-medium">
              Daily Task is being added
            </span>
            <svg
              className="ml-2 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          <h1 className="text-6xl font-bold text-gray-700 mb-7 capitalize">
            Get more done.
          </h1>
          <p className="text-gray-500 mb-8 ">
            This book covers the latest design principles and techniques,
            including responsive design, mobile interface design, and user
            research methodologies.
          </p>
          <div className="flex space-x-4 mb-6 justify-center lg:justify-start">
            <a
              href="#"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center text-sm md:text-base"
            >
              <span className="mr-2">Post Your Task </span>
            </a>
            <a
              href="#"
              className=" hover:bg-blue-50 border border-gray-300 px-4 py-2 rounded-md flex items-center text-gray-700 text-sm md:text-base"
            >
              <span className="mr-2">Earn Money as Tasker</span>
              <span className="text-xl text-gray-500">➜</span>
            </a>
          </div>
          <div className="mt-6 lg:mt-12 flex gap-6">
            <div className="flex items-center -space-x-4">
              <img
                alt="user 1"
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
                className="relative inline-block h-10 w-10 rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
              />
              <img
                alt="user 2"
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1061&amp;q=80"
                className="relative inline-block h-10 w-10 rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
              />
              <img
                alt="user 3"
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1288&amp;q=80"
                className="relative inline-block h-10 w-10 rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
              />
              <img
                alt="user 4"
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1287&amp;q=80"
                className="relative inline-block h-10 w-10 rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
              />
              <img
                alt="user 5"
                src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1760&amp;q=80"
                className="relative inline-block h-10 w-10 rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
              />
            </div>
            <div className="text-sm">
              <div className="text-[gold] flex gap-1 items-center">
                <svg
                  width={20}
                  height={20}
                  aria-hidden="true"
                  className="eUuXwBkW5W4__eatjSfd RRXFBumaW2SHdseZaWm6 boXknXpUJpd4EFsKw7Be"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  width={20}
                  height={20}
                  aria-hidden="true"
                  className="eUuXwBkW5W4__eatjSfd RRXFBumaW2SHdseZaWm6 boXknXpUJpd4EFsKw7Be"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  width={20}
                  height={20}
                  aria-hidden="true"
                  className="eUuXwBkW5W4__eatjSfd RRXFBumaW2SHdseZaWm6 boXknXpUJpd4EFsKw7Be"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  width={20}
                  height={20}
                  aria-hidden="true"
                  className="eUuXwBkW5W4__eatjSfd RRXFBumaW2SHdseZaWm6 boXknXpUJpd4EFsKw7Be"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  width={20}
                  height={20}
                  aria-hidden="true"
                  className="eUuXwBkW5W4__eatjSfd RRXFBumaW2SHdseZaWm6 boXknXpUJpd4EFsKw7Be"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <p className="text-gray-700">5.0</p>
              </div>
              <p>Rated Best Over 15.7k Reviews</p>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 mt-12 lg:mt-0">
          <img
            src="https://images.unsplash.com/photo-1554774853-7f03caeb4b15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2153&q=80"
            alt="Task Completion"
            className="w-full mx-auto h-auto rounded-lg"
          />
        </div>
      </div>
    </main>
  );
}
