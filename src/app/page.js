/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Footer from "@/components/Footer/Footer";
import Blogs from "@/components/blog/Blogs";
import Featured from "@/components/featured/Featured";
import Review from "@/components/review/Review";
import VerifiedTalents from "@/components/verifiedTalents/VerifiedTalents";
import ChooseUs from "@/components/whyChoose/ChooseUs";

export default function Home() {
  return (
    <main>
      {/* <section className="flex flex-col items-center justify-between p-2 md:p-8 lg:p-24">
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
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
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
      </section>
      <Featured />
      <Blogs />
      <Footer /> */}
      <div className="bg-white flex flex-col">
        <div className="bg-[#213F61] self-stretch flex w-full pb-48 flex-col pt-8 px-20 max-md:max-w-full max-md:px-5">
          <div className="self-center z-[1] flex w-full max-w-[1201px] flex-col max-md:max-w-full">
            <div className="text-white text-center text-5xl font-semibold leading-[68.16px] capitalize self-center max-w-[793px] mt-24 max-md:max-w-full max-md:text-4xl max-md:mt-10">
              Find the quality
              <br />
              talents to makes your life easier
            </div>
            <div className="items-start self-center flex w-[793px] max-w-full gap-0 mt-14  max-md:flex-wrap max-md:mt-10 rounded-lg">
              <div className="items-start bg-white self-stretch flex grow shrink basis-auto justify-between gap-2.5 pl-8 pr-4  w-full max-md:flex-wrap max-md:px-5 rounded-l-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/66e75b01-012c-44a4-aad4-f78fc2d5c8e8?apiKey=8ebeea0f4ca14c9780c31fc1db4899ea&"
                  className="aspect-square object-contain object-center w-6  self-stretch "
                />
                <input className="text-cyan-900 text-xl self-center whitespace-nowrap my-auto w-full  outline-none focus:outline-none active:outline-none"></input>
              </div>
              <button className="text-white text-xl font-semibold tracking-wide self-stretch whitespace-nowrap justify-center items-center bg-orange-400 w-[188px] max-w-full px-14 py-6 max-md:px-5 rounded-r-full">
                Search
              </button>
            </div>
            <div className="items-start self-center flex w-[700px] max-w-full gap-4 mt-4 max-md:flex-wrap">
              <div className="items-start self-stretch flex grow shrink basis-auto gap-2 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
                <div className="text-cyan-900 text-sm font-medium self-stretch whitespace-nowrap justify-center items-center bg-white w-[106px] max-w-full px-4 py-2 rounded-[500px]">
                  UX DESIGN
                </div>
                <div className="text-cyan-900 text-sm font-medium self-stretch whitespace-nowrap justify-center items-center bg-white w-[136px] max-w-full px-4 py-2 rounded-[500px]">
                  Product design
                </div>
                <div className="text-cyan-900 text-sm font-medium self-stretch whitespace-nowrap justify-center items-center bg-white w-[114px] max-w-full px-4 py-2 rounded-[500px]">
                  Logo design
                </div>
                <div className="text-cyan-900 text-sm font-medium self-stretch whitespace-nowrap justify-center items-center bg-white w-[111px] max-w-full px-4 py-2 rounded-[500px]">
                  Wordpress
                </div>
                <div className="text-cyan-900 text-sm font-medium self-stretch whitespace-nowrap justify-center items-center bg-white w-[121px] max-w-full px-4 py-2 rounded-[500px]">
                  Photo editing
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="items-center self-center flex w-full max-w-[1200px] flex-col mt-52 max-md:max-w-full max-md:mt-10">
          <div className="items-center self-stretch flex flex-col max-md:max-w-full">
            <div className="items-center self-center flex w-[953px] max-w-full flex-col">
              <div className="items-center self-stretch flex flex-col px-5 max-md:max-w-full">
                <div className="text-cyan-900 text-4xl font-semibold tracking-wider self-stretch whitespace-nowrap -mr-5 max-md:max-w-full">
                  Post any task. Pick the best person. Get it done.
                </div>
                <div className="text-cyan-900 text-center text-base leading-6 self-center whitespace-nowrap mt-2">
                  Connect with unlimited quality talents to get any help.
                </div>
              </div>
              <div className="bg-orange-400 self-center flex w-[205px] h-[9px] flex-col mt-4 rounded-[50px]" />
            </div>
            <div className="bg-blue-300 self-stretch flex grow flex-col mt-16 py-9 rounded-3xl max-md:max-w-full max-md:mt-10">
              <div className="items-start self-stretch flex gap-5 px-5 max-md:max-w-full max-md:flex-wrap max-md:justify-center" />
              <div className="items-start self-stretch flex gap-5 mt-8 px-5 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
                <div className="items-center bg-white self-stretch flex w-[196px] max-w-full flex-col pr-6 py-3 rounded-[50px] max-md:pr-5">
                  <div className="items-start self-stretch flex flex-col">
                    <div className="text-cyan-900 text-2xl font-semibold self-stretch">
                      Home cleaning
                    </div>
                    <div className="text-cyan-900 text-base self-stretch mt-2">
                      Clean, mop and tidy your house
                    </div>
                  </div>
                </div>
                <div className="items-start bg-white self-stretch flex w-[346px] max-w-full justify-between gap-4 pl-2 pr-11 py-2 rounded-[50px] max-md:pr-5">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/fdd5eebb-8480-4fe7-a5ea-aed54b50294c?apiKey=8ebeea0f4ca14c9780c31fc1db4899ea&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/fdd5eebb-8480-4fe7-a5ea-aed54b50294c?apiKey=8ebeea0f4ca14c9780c31fc1db4899ea&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fdd5eebb-8480-4fe7-a5ea-aed54b50294c?apiKey=8ebeea0f4ca14c9780c31fc1db4899ea&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/fdd5eebb-8480-4fe7-a5ea-aed54b50294c?apiKey=8ebeea0f4ca14c9780c31fc1db4899ea&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/fdd5eebb-8480-4fe7-a5ea-aed54b50294c?apiKey=8ebeea0f4ca14c9780c31fc1db4899ea&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fdd5eebb-8480-4fe7-a5ea-aed54b50294c?apiKey=8ebeea0f4ca14c9780c31fc1db4899ea&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/fdd5eebb-8480-4fe7-a5ea-aed54b50294c?apiKey=8ebeea0f4ca14c9780c31fc1db4899ea&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/fdd5eebb-8480-4fe7-a5ea-aed54b50294c?apiKey=8ebeea0f4ca14c9780c31fc1db4899ea&"
                    className="aspect-square object-contain object-center w-[63px] overflow-hidden self-stretch max-w-full rounded-[50%]"
                  />
                  <div className="items-start self-center flex flex-col my-auto">
                    <div className="text-cyan-900 text-2xl font-semibold self-stretch whitespace-nowrap">
                      Painting
                    </div>
                    <div className="text-cyan-900 text-base self-stretch whitespace-nowrap mt-2">
                      Interior and exterior painting
                    </div>
                  </div>
                </div>
                <div className="items-start bg-white self-stretch flex w-[346px] max-w-full justify-between gap-4 pl-2 pr-11 py-2 rounded-[50px] max-md:pr-5">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/882f903e-50f9-4d2d-9e6e-9ee2d6dbfe0d?apiKey=8ebeea0f4ca14c9780c31fc1db4899ea&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/882f903e-50f9-4d2d-9e6e-9ee2d6dbfe0d?apiKey=8ebeea0f4ca14c9780c31fc1db4899ea&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/882f903e-50f9-4d2d-9e6e-9ee2d6dbfe0d?apiKey=8ebeea0f4ca14c9780c31fc1db4899ea&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/882f903e-50f9-4d2d-9e6e-9ee2d6dbfe0d?apiKey=8ebeea0f4ca14c9780c31fc1db4899ea&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/882f903e-50f9-4d2d-9e6e-9ee2d6dbfe0d?apiKey=8ebeea0f4ca14c9780c31fc1db4899ea&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/882f903e-50f9-4d2d-9e6e-9ee2d6dbfe0d?apiKey=8ebeea0f4ca14c9780c31fc1db4899ea&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/882f903e-50f9-4d2d-9e6e-9ee2d6dbfe0d?apiKey=8ebeea0f4ca14c9780c31fc1db4899ea&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/882f903e-50f9-4d2d-9e6e-9ee2d6dbfe0d?apiKey=8ebeea0f4ca14c9780c31fc1db4899ea&"
                    className="aspect-square object-contain object-center w-[63px] overflow-hidden self-stretch max-w-full rounded-[50%]"
                  />
                  <div className="items-start self-center flex flex-col my-auto">
                    <div className="text-cyan-900 text-2xl font-semibold self-stretch whitespace-nowrap">
                      Removalists
                    </div>
                    <div className="text-cyan-900 text-base self-stretch whitespace-nowrap mt-2">
                      Packing, wrapping and more!
                    </div>
                  </div>
                </div>
                <div className="items-start bg-white self-stretch flex w-[255px] max-w-full justify-between gap-4 pl-2 py-2 rounded-[50px]">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ede563f3-715f-4cc9-929b-13674a14350b?apiKey=8ebeea0f4ca14c9780c31fc1db4899ea&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ede563f3-715f-4cc9-929b-13674a14350b?apiKey=8ebeea0f4ca14c9780c31fc1db4899ea&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ede563f3-715f-4cc9-929b-13674a14350b?apiKey=8ebeea0f4ca14c9780c31fc1db4899ea&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ede563f3-715f-4cc9-929b-13674a14350b?apiKey=8ebeea0f4ca14c9780c31fc1db4899ea&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ede563f3-715f-4cc9-929b-13674a14350b?apiKey=8ebeea0f4ca14c9780c31fc1db4899ea&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ede563f3-715f-4cc9-929b-13674a14350b?apiKey=8ebeea0f4ca14c9780c31fc1db4899ea&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ede563f3-715f-4cc9-929b-13674a14350b?apiKey=8ebeea0f4ca14c9780c31fc1db4899ea&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ede563f3-715f-4cc9-929b-13674a14350b?apiKey=8ebeea0f4ca14c9780c31fc1db4899ea&"
                    className="aspect-square object-contain object-center w-[63px] overflow-hidden self-stretch max-w-full rounded-[50%]"
                  />
                  <div className="items-start self-center flex flex-col my-auto">
                    <div className="text-cyan-900 text-2xl font-semibold self-stretch">
                      Marketing & design
                    </div>
                    <div className="text-cyan-900 text-base self-stretch whitespace-nowrap mt-2">
                      Help with website
                    </div>
                  </div>
                </div>
              </div>
              <div className="items-start self-stretch flex gap-5 mt-8 px-5 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
                <div className="items-start bg-white self-stretch flex w-[322px] max-w-full justify-between gap-4 pr-8 py-2 rounded-[50px] max-md:pr-5">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/7c7377de-cb36-4da5-8571-fad9ff8104e3?apiKey=8ebeea0f4ca14c9780c31fc1db4899ea&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/7c7377de-cb36-4da5-8571-fad9ff8104e3?apiKey=8ebeea0f4ca14c9780c31fc1db4899ea&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7c7377de-cb36-4da5-8571-fad9ff8104e3?apiKey=8ebeea0f4ca14c9780c31fc1db4899ea&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/7c7377de-cb36-4da5-8571-fad9ff8104e3?apiKey=8ebeea0f4ca14c9780c31fc1db4899ea&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/7c7377de-cb36-4da5-8571-fad9ff8104e3?apiKey=8ebeea0f4ca14c9780c31fc1db4899ea&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7c7377de-cb36-4da5-8571-fad9ff8104e3?apiKey=8ebeea0f4ca14c9780c31fc1db4899ea&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/7c7377de-cb36-4da5-8571-fad9ff8104e3?apiKey=8ebeea0f4ca14c9780c31fc1db4899ea&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/7c7377de-cb36-4da5-8571-fad9ff8104e3?apiKey=8ebeea0f4ca14c9780c31fc1db4899ea&"
                    className="aspect-[0.75] object-contain object-center w-[47px] overflow-hidden self-stretch max-w-full rounded-[50%]"
                  />
                  <div className="items-start self-center flex flex-col my-auto">
                    <div className="text-cyan-900 text-2xl font-semibold self-stretch whitespace-nowrap">
                      Marketing & design
                    </div>
                    <div className="text-cyan-900 text-base self-stretch whitespace-nowrap mt-2">
                      Help with website
                    </div>
                  </div>
                </div>
                <div className="items-start bg-white self-stretch flex w-[346px] max-w-full justify-between gap-4 pl-2 pr-8 py-2 rounded-[50px] max-md:pr-5">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/dd1e5def-ffcb-4710-aeb8-8b121b21e118?apiKey=8ebeea0f4ca14c9780c31fc1db4899ea&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/dd1e5def-ffcb-4710-aeb8-8b121b21e118?apiKey=8ebeea0f4ca14c9780c31fc1db4899ea&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/dd1e5def-ffcb-4710-aeb8-8b121b21e118?apiKey=8ebeea0f4ca14c9780c31fc1db4899ea&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/dd1e5def-ffcb-4710-aeb8-8b121b21e118?apiKey=8ebeea0f4ca14c9780c31fc1db4899ea&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/dd1e5def-ffcb-4710-aeb8-8b121b21e118?apiKey=8ebeea0f4ca14c9780c31fc1db4899ea&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/dd1e5def-ffcb-4710-aeb8-8b121b21e118?apiKey=8ebeea0f4ca14c9780c31fc1db4899ea&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/dd1e5def-ffcb-4710-aeb8-8b121b21e118?apiKey=8ebeea0f4ca14c9780c31fc1db4899ea&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/dd1e5def-ffcb-4710-aeb8-8b121b21e118?apiKey=8ebeea0f4ca14c9780c31fc1db4899ea&"
                    className="aspect-square object-contain object-center w-[63px] overflow-hidden self-stretch max-w-full rounded-[50%]"
                  />
                  <div className="items-start self-center flex flex-col my-auto">
                    <div className="text-cyan-900 text-2xl font-semibold self-stretch whitespace-nowrap">
                      Marketing & design
                    </div>
                    <div className="text-cyan-900 text-base self-stretch whitespace-nowrap mt-2">
                      Help with website
                    </div>
                  </div>
                </div>
                <div className="items-start bg-white self-stretch flex w-[346px] max-w-full justify-between gap-4 pl-2 pr-8 py-2 rounded-[50px] max-md:pr-5">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a46d0471-5b49-4b7e-9000-fc737b77c4b7?apiKey=8ebeea0f4ca14c9780c31fc1db4899ea&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a46d0471-5b49-4b7e-9000-fc737b77c4b7?apiKey=8ebeea0f4ca14c9780c31fc1db4899ea&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a46d0471-5b49-4b7e-9000-fc737b77c4b7?apiKey=8ebeea0f4ca14c9780c31fc1db4899ea&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a46d0471-5b49-4b7e-9000-fc737b77c4b7?apiKey=8ebeea0f4ca14c9780c31fc1db4899ea&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a46d0471-5b49-4b7e-9000-fc737b77c4b7?apiKey=8ebeea0f4ca14c9780c31fc1db4899ea&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a46d0471-5b49-4b7e-9000-fc737b77c4b7?apiKey=8ebeea0f4ca14c9780c31fc1db4899ea&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a46d0471-5b49-4b7e-9000-fc737b77c4b7?apiKey=8ebeea0f4ca14c9780c31fc1db4899ea&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a46d0471-5b49-4b7e-9000-fc737b77c4b7?apiKey=8ebeea0f4ca14c9780c31fc1db4899ea&"
                    className="aspect-square object-contain object-center w-[63px] overflow-hidden self-stretch max-w-full rounded-[50%]"
                  />
                  <div className="items-start self-center flex flex-col my-auto">
                    <div className="text-cyan-900 text-2xl font-semibold self-stretch whitespace-nowrap">
                      Gardening
                    </div>
                    <div className="text-cyan-900 text-base self-stretch whitespace-nowrap mt-2">
                      Mulching, weeding & tidying up
                    </div>
                  </div>
                </div>
                <div className="items-start bg-white self-stretch flex w-[129px] max-w-full justify-between gap-4 pl-2 py-2 rounded-[50px]">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ce704da5-5d75-4e80-ada5-b179009468ad?apiKey=8ebeea0f4ca14c9780c31fc1db4899ea&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ce704da5-5d75-4e80-ada5-b179009468ad?apiKey=8ebeea0f4ca14c9780c31fc1db4899ea&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ce704da5-5d75-4e80-ada5-b179009468ad?apiKey=8ebeea0f4ca14c9780c31fc1db4899ea&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ce704da5-5d75-4e80-ada5-b179009468ad?apiKey=8ebeea0f4ca14c9780c31fc1db4899ea&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ce704da5-5d75-4e80-ada5-b179009468ad?apiKey=8ebeea0f4ca14c9780c31fc1db4899ea&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ce704da5-5d75-4e80-ada5-b179009468ad?apiKey=8ebeea0f4ca14c9780c31fc1db4899ea&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ce704da5-5d75-4e80-ada5-b179009468ad?apiKey=8ebeea0f4ca14c9780c31fc1db4899ea&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ce704da5-5d75-4e80-ada5-b179009468ad?apiKey=8ebeea0f4ca14c9780c31fc1db4899ea&"
                    className="aspect-square object-contain object-center w-[63px] overflow-hidden self-stretch max-w-full rounded-[50%]"
                  />
                  <div className="items-start self-center flex flex-col my-auto">
                    <div className="text-cyan-900 text-2xl font-semibold self-stretch">
                      Furniture assembly
                    </div>
                    <div className="text-cyan-900 text-base self-stretch mt-2">
                      Flatpack assembly and disassembly
                    </div>
                  </div>
                </div>
              </div>
              <div className="items-start self-stretch flex gap-5 mt-8 px-5 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
                <div className="items-center bg-white self-stretch flex w-[83px] max-w-full flex-col pr-8 pt-3 pb-10 rounded-[50px] max-md:pr-5">
                  <div className="text-cyan-900 text-2xl font-semibold self-stretch items-start">
                    Marketing & design
                  </div>
                </div>
                <div className="items-start bg-white self-stretch flex w-[346px] max-w-full justify-between gap-4 pl-2 pr-12 py-2 rounded-[50px] max-md:pr-5">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b100a1ca-9c2f-4d5a-a686-7072157e9938?apiKey=8ebeea0f4ca14c9780c31fc1db4899ea&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b100a1ca-9c2f-4d5a-a686-7072157e9938?apiKey=8ebeea0f4ca14c9780c31fc1db4899ea&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b100a1ca-9c2f-4d5a-a686-7072157e9938?apiKey=8ebeea0f4ca14c9780c31fc1db4899ea&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b100a1ca-9c2f-4d5a-a686-7072157e9938?apiKey=8ebeea0f4ca14c9780c31fc1db4899ea&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b100a1ca-9c2f-4d5a-a686-7072157e9938?apiKey=8ebeea0f4ca14c9780c31fc1db4899ea&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b100a1ca-9c2f-4d5a-a686-7072157e9938?apiKey=8ebeea0f4ca14c9780c31fc1db4899ea&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b100a1ca-9c2f-4d5a-a686-7072157e9938?apiKey=8ebeea0f4ca14c9780c31fc1db4899ea&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b100a1ca-9c2f-4d5a-a686-7072157e9938?apiKey=8ebeea0f4ca14c9780c31fc1db4899ea&"
                    className="aspect-square object-contain object-center w-[63px] overflow-hidden self-stretch max-w-full rounded-[50%]"
                  />
                  <div className="items-start self-center flex flex-col my-auto">
                    <div className="text-cyan-900 text-2xl font-semibold self-stretch whitespace-nowrap">
                      Business & admin
                    </div>
                    <div className="text-cyan-900 text-base self-stretch whitespace-nowrap mt-2">
                      Accounting and tax returns
                    </div>
                  </div>
                </div>
                <div className="items-start bg-white self-stretch flex w-[346px] max-w-full justify-between gap-4 pl-2 pr-6 py-2 rounded-[50px] max-md:pr-5">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/7a7dda8c-0933-43df-9ebe-166c96c50baa?apiKey=8ebeea0f4ca14c9780c31fc1db4899ea&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/7a7dda8c-0933-43df-9ebe-166c96c50baa?apiKey=8ebeea0f4ca14c9780c31fc1db4899ea&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7a7dda8c-0933-43df-9ebe-166c96c50baa?apiKey=8ebeea0f4ca14c9780c31fc1db4899ea&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/7a7dda8c-0933-43df-9ebe-166c96c50baa?apiKey=8ebeea0f4ca14c9780c31fc1db4899ea&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/7a7dda8c-0933-43df-9ebe-166c96c50baa?apiKey=8ebeea0f4ca14c9780c31fc1db4899ea&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7a7dda8c-0933-43df-9ebe-166c96c50baa?apiKey=8ebeea0f4ca14c9780c31fc1db4899ea&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/7a7dda8c-0933-43df-9ebe-166c96c50baa?apiKey=8ebeea0f4ca14c9780c31fc1db4899ea&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/7a7dda8c-0933-43df-9ebe-166c96c50baa?apiKey=8ebeea0f4ca14c9780c31fc1db4899ea&"
                    className="aspect-square object-contain object-center w-[63px] overflow-hidden self-stretch max-w-full rounded-[50%]"
                  />
                  <div className="items-start self-center flex flex-col my-auto">
                    <div className="text-cyan-900 text-2xl font-semibold self-stretch whitespace-nowrap">
                      Furniture assembly
                    </div>
                    <div className="text-cyan-900 text-base self-stretch whitespace-nowrap mt-2">
                      Flatpack assembly
                    </div>
                  </div>
                </div>
                <div className="items-start bg-white self-stretch flex w-[346px] max-w-full justify-between gap-4 pl-2 pr-6 py-2 rounded-[50px] max-md:pr-5">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/0252784e-9b91-4511-bf20-bb9f672c1374?apiKey=8ebeea0f4ca14c9780c31fc1db4899ea&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0252784e-9b91-4511-bf20-bb9f672c1374?apiKey=8ebeea0f4ca14c9780c31fc1db4899ea&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0252784e-9b91-4511-bf20-bb9f672c1374?apiKey=8ebeea0f4ca14c9780c31fc1db4899ea&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0252784e-9b91-4511-bf20-bb9f672c1374?apiKey=8ebeea0f4ca14c9780c31fc1db4899ea&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0252784e-9b91-4511-bf20-bb9f672c1374?apiKey=8ebeea0f4ca14c9780c31fc1db4899ea&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0252784e-9b91-4511-bf20-bb9f672c1374?apiKey=8ebeea0f4ca14c9780c31fc1db4899ea&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0252784e-9b91-4511-bf20-bb9f672c1374?apiKey=8ebeea0f4ca14c9780c31fc1db4899ea&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0252784e-9b91-4511-bf20-bb9f672c1374?apiKey=8ebeea0f4ca14c9780c31fc1db4899ea&"
                    className="aspect-square object-contain object-center w-[63px] overflow-hidden self-stretch max-w-full rounded-[50%]"
                  />
                  <div className="items-start self-center flex flex-col my-auto">
                    <div className="text-cyan-900 text-2xl font-semibold self-stretch whitespace-nowrap">
                      Home cleaning
                    </div>
                    <div className="text-cyan-900 text-base self-stretch whitespace-nowrap mt-2">
                      Clean, mop and tidy your house
                    </div>
                  </div>
                </div>
                <div className="items-center bg-white self-stretch flex w-[3px] h-[79px] flex-col grow shrink-0 basis-auto rounded-[50px]" />
              </div>
              <div className="items-start self-stretch flex gap-5 mt-8 px-5 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
                <div className="items-center bg-white self-stretch flex w-[186px] max-w-full flex-col pr-8 py-3 rounded-[50px] max-md:pr-5">
                  <div className="items-start self-stretch flex flex-col">
                    <div className="text-cyan-900 text-2xl font-semibold self-stretch">
                      Marketing & design
                    </div>
                    <div className="text-cyan-900 text-base self-stretch mt-2">
                      Help with website
                    </div>
                  </div>
                </div>
                <div className="items-start bg-white self-stretch flex w-[346px] max-w-full justify-between gap-4 pl-2 pr-11 py-2 rounded-[50px] max-md:pr-5">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b2c259b9-23c8-4e3d-a733-249c1e831350?apiKey=8ebeea0f4ca14c9780c31fc1db4899ea&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b2c259b9-23c8-4e3d-a733-249c1e831350?apiKey=8ebeea0f4ca14c9780c31fc1db4899ea&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b2c259b9-23c8-4e3d-a733-249c1e831350?apiKey=8ebeea0f4ca14c9780c31fc1db4899ea&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b2c259b9-23c8-4e3d-a733-249c1e831350?apiKey=8ebeea0f4ca14c9780c31fc1db4899ea&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b2c259b9-23c8-4e3d-a733-249c1e831350?apiKey=8ebeea0f4ca14c9780c31fc1db4899ea&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b2c259b9-23c8-4e3d-a733-249c1e831350?apiKey=8ebeea0f4ca14c9780c31fc1db4899ea&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b2c259b9-23c8-4e3d-a733-249c1e831350?apiKey=8ebeea0f4ca14c9780c31fc1db4899ea&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b2c259b9-23c8-4e3d-a733-249c1e831350?apiKey=8ebeea0f4ca14c9780c31fc1db4899ea&"
                    className="aspect-square object-contain object-center w-[63px] overflow-hidden self-stretch max-w-full rounded-[50%]"
                  />
                  <div className="items-start self-center flex flex-col my-auto">
                    <div className="text-cyan-900 text-2xl font-semibold self-stretch whitespace-nowrap">
                      Removalists
                    </div>
                    <div className="text-cyan-900 text-base self-stretch whitespace-nowrap mt-2">
                      Packing, wrapping and more!
                    </div>
                  </div>
                </div>
                <div className="items-start bg-white self-stretch flex w-[346px] max-w-full justify-between gap-4 pl-2 pr-11 py-2 rounded-[50px] max-md:pr-5">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/39f85db4-6edc-4eae-ba21-a63736b76162?apiKey=8ebeea0f4ca14c9780c31fc1db4899ea&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/39f85db4-6edc-4eae-ba21-a63736b76162?apiKey=8ebeea0f4ca14c9780c31fc1db4899ea&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/39f85db4-6edc-4eae-ba21-a63736b76162?apiKey=8ebeea0f4ca14c9780c31fc1db4899ea&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/39f85db4-6edc-4eae-ba21-a63736b76162?apiKey=8ebeea0f4ca14c9780c31fc1db4899ea&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/39f85db4-6edc-4eae-ba21-a63736b76162?apiKey=8ebeea0f4ca14c9780c31fc1db4899ea&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/39f85db4-6edc-4eae-ba21-a63736b76162?apiKey=8ebeea0f4ca14c9780c31fc1db4899ea&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/39f85db4-6edc-4eae-ba21-a63736b76162?apiKey=8ebeea0f4ca14c9780c31fc1db4899ea&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/39f85db4-6edc-4eae-ba21-a63736b76162?apiKey=8ebeea0f4ca14c9780c31fc1db4899ea&"
                    className="aspect-square object-contain object-center w-[63px] overflow-hidden self-stretch max-w-full rounded-[50%]"
                  />
                  <div className="items-start self-center flex flex-col my-auto">
                    <div className="text-cyan-900 text-2xl font-semibold self-stretch whitespace-nowrap">
                      Painting
                    </div>
                    <div className="text-cyan-900 text-base self-stretch whitespace-nowrap mt-2">
                      Interior and exterior painting
                    </div>
                  </div>
                </div>
                <div className="items-start bg-white self-stretch flex w-[265px] max-w-full justify-between gap-4 pl-2 py-2 rounded-[50px]">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9905c5b2-67e1-421f-a798-96e20e8eaadf?apiKey=8ebeea0f4ca14c9780c31fc1db4899ea&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9905c5b2-67e1-421f-a798-96e20e8eaadf?apiKey=8ebeea0f4ca14c9780c31fc1db4899ea&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9905c5b2-67e1-421f-a798-96e20e8eaadf?apiKey=8ebeea0f4ca14c9780c31fc1db4899ea&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9905c5b2-67e1-421f-a798-96e20e8eaadf?apiKey=8ebeea0f4ca14c9780c31fc1db4899ea&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9905c5b2-67e1-421f-a798-96e20e8eaadf?apiKey=8ebeea0f4ca14c9780c31fc1db4899ea&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9905c5b2-67e1-421f-a798-96e20e8eaadf?apiKey=8ebeea0f4ca14c9780c31fc1db4899ea&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9905c5b2-67e1-421f-a798-96e20e8eaadf?apiKey=8ebeea0f4ca14c9780c31fc1db4899ea&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9905c5b2-67e1-421f-a798-96e20e8eaadf?apiKey=8ebeea0f4ca14c9780c31fc1db4899ea&"
                    className="aspect-square object-contain object-center w-[63px] overflow-hidden self-stretch max-w-full rounded-[50%]"
                  />
                  <div className="items-start self-center flex flex-col my-auto">
                    <div className="text-cyan-900 text-2xl font-semibold self-stretch whitespace-nowrap">
                      Deliveries
                    </div>
                    <div className="text-cyan-900 text-base self-stretch mt-2">
                      Deliveries and courier services
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="items-start self-center flex w-[700px] max-w-full gap-5 mt-16 px-5 max-md:flex-wrap max-md:mt-10">
            <div className="justify-center items-center bg-orange-400 flex flex-col grow shrink-0 basis-auto flex-1 px-20 py-5 rounded-[50px] max-md:px-5">
              <div className="text-white text-base font-bold self-center whitespace-nowrap">
                Post a task
              </div>
            </div>
            <div className="justify-center items-center bg-orange-400 bg-opacity-10 flex flex-col grow shrink-0 basis-auto flex-1 px-20 py-5 rounded-[500px] max-md:px-5">
              <div className="text-orange-400 text-base font-medium self-center whitespace-nowrap">
                Become a tasker
              </div>
            </div>
          </div>
        </div> */}
        <div className="container mx-auto shadow-2xl bg-white self-stretch -translate-y-2/4 pl-28 pr-16 py-12 rounded-[500px] max-md:max-w-full max-md:mt-10 max-md:px-5">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-1/5 max-md:w-full max-md:ml-0">
              <div className="flex items-start gap-5 my-auto max-md:mt-10">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/7cc168e6-1561-45f7-a0ab-9bf1ccce7109?apiKey=8ebeea0f4ca14c9780c31fc1db4899ea&"
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
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/c2873562-f843-4e59-a0d1-485f1bd0bba7?apiKey=8ebeea0f4ca14c9780c31fc1db4899ea&"
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
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/ed4e70e8-e83c-4e69-ad2a-3045c268462f?apiKey=8ebeea0f4ca14c9780c31fc1db4899ea&"
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
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/08bb166a-176f-495e-a792-619218ec1f69?apiKey=8ebeea0f4ca14c9780c31fc1db4899ea&"
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
        <ChooseUs />
        <div className="items-center self-center flex w-full max-w-[1199px] flex-col mt-32 max-md:max-w-full max-md:mt-10">
          <div className="items-center self-center flex w-[947px] max-w-full flex-col">
            <div className="items-center self-center flex w-[677px] max-w-full flex-col">
              <div className="items-center self-stretch flex flex-col px-5 max-md:max-w-full">
                <div className="text-cyan-900 text-4xl font-semibold tracking-wider  -mr-5 max-md:max-w-full">
                  See what others are getting done
                </div>{" "}
                <div className="text-cyan-900 text-center text-base leading-6 self-center whitespace-nowrap mt-2">
                  Connect with unlimited quality talents to get any help.
                </div>
              </div>{" "}
              <div className="bg-orange-400 self-center flex w-[205px] h-[9px] flex-col mt-4 rounded-[50px]" />
            </div>{" "}
            <div className="justify-center items-start border border-[color:var(--Stoke,rgba(33,63,97,0.05))] shadow-2xl bg-white self-stretch flex gap-2 mt-10 px-5 py-2 rounded-[500px] border-solid max-md:max-w-full max-md:flex-wrap">
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
                    <div className="text-cyan-900 text-center text-xl font-medium leading-7 self-stretch justify-center items-center bg-blue-300 w-full p-4 rounded-xl">
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
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/0c4dccdd-da0f-423f-af9a-252400b2f298?apiKey=8ebeea0f4ca14c9780c31fc1db4899ea&"
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
                    <div className="text-cyan-900 text-center text-xl font-medium leading-7 self-stretch justify-center items-center bg-blue-300 w-full p-4 rounded-xl">
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
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/55aa7d9a-c789-4774-a0f5-4a05e4f815d9?apiKey=8ebeea0f4ca14c9780c31fc1db4899ea&"
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
                    <div className="text-cyan-900 text-center text-xl font-medium leading-7 self-stretch justify-center items-center bg-blue-300 w-full p-4 rounded-xl">
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
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/feaa59f2-dfb6-425a-a911-0bd7e2e3a293?apiKey=8ebeea0f4ca14c9780c31fc1db4899ea&"
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
                    <div className="text-cyan-900 text-center text-xl font-medium leading-7 self-stretch justify-center items-center bg-blue-300 w-full p-4 rounded-xl">
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
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9327a7e6-eb21-4c8b-a849-918286bcf274?apiKey=8ebeea0f4ca14c9780c31fc1db4899ea&"
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
                    <div className="text-cyan-900 text-center text-xl font-medium leading-7 self-stretch justify-center items-center bg-blue-300 w-full px-4 py-7 rounded-xl">
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
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/112a8cd4-79d9-45d9-a691-983eab7c3fea?apiKey=8ebeea0f4ca14c9780c31fc1db4899ea&"
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
                    <div className="text-cyan-900 text-center text-xl font-medium leading-7 self-stretch justify-center items-center bg-blue-300 w-full px-4 py-7 rounded-xl">
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
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ec23abcb-ce2b-4263-b7bb-f891bc711853?apiKey=8ebeea0f4ca14c9780c31fc1db4899ea&"
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
                    <div className="text-cyan-900 text-center text-xl font-medium leading-7 self-stretch justify-center items-center bg-blue-300 w-full px-4 py-7 rounded-xl">
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
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/4699db09-2a34-4205-b8b7-4fcdb9feab44?apiKey=8ebeea0f4ca14c9780c31fc1db4899ea&"
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
                    <div className="text-cyan-900 text-center text-xl font-medium leading-7 self-stretch justify-center items-center bg-blue-300 w-full px-4 py-7 rounded-xl">
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
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d9aabd8f-ee93-4c58-ba55-c0a0266e27ef?apiKey=8ebeea0f4ca14c9780c31fc1db4899ea&"
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
                    <div className="text-cyan-900 text-center text-xl font-medium leading-7 self-stretch justify-center items-center bg-blue-300 w-full p-4 rounded-xl">
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
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9a300d1f-3f20-49aa-a7c2-0b11bbab15ee?apiKey=8ebeea0f4ca14c9780c31fc1db4899ea&"
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
        </div>{" "}
        <VerifiedTalents />
        <Review />
        <div className="items-center bg-cyan-900 self-stretch flex mt-0 w-full flex-col pt-16 pb-5 px-20 max-md:max-w-full max-md:px-5">
          <div className="self-center flex w-full max-w-[1200px] flex-col max-md:max-w-full">
            <div className="self-stretch max-md:max-w-full">
              <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                <div className="flex flex-col items-stretch w-[39%] max-md:w-full max-md:ml-0">
                  <div className="grow max-md:mt-10">
                    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                      <div className="flex flex-col items-stretch w-[49%] max-md:w-full max-md:ml-0">
                        <div className="text-white text-opacity-60 text-base leading-8 self-stretch items-start grow pt-16 max-md:mt-10">
                          How it works
                          <br />
                          Airtasker for business
                          <br />
                          Earn money
                          <br />
                          Side Hustle <br />
                          Calculator
                          <br />
                          Search jobs
                          <br />
                          Cost Guides
                          <br />
                          Service Guides
                          <br />
                          Comparison Guides
                          <br />
                          Student Discount
                          <br />
                          New users FAQ
                        </div>
                      </div>
                      <div className="flex flex-col items-stretch w-[51%] ml-5 max-md:w-full max-md:ml-0">
                        <div className="text-white text-opacity-60 text-base leading-8 flex-1 my-auto max-md:mt-10">
                          About us
                          <br />
                          Careers
                          <br />
                          Media enquiries
                          <br />
                          Community Guidelines
                          <br />
                          Tasker Principles
                          <br />
                          Terms and Conditions
                          <br />
                          Blog
                          <br />
                          Contact us
                          <br />
                          Privacy policy
                          <br />
                          Investors
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-stretch w-[17%] ml-5 max-md:w-full max-md:ml-0">
                  <div className="text-white text-opacity-60 text-base leading-8 self-stretch items-start pr-16 pt-16 max-md:mt-10 max-md:pr-5">
                    Post a task
                    <br />
                    Browse tasks
                    <br />
                    Login
                    <br />
                    Support centre
                  </div>
                </div>
                <div className="flex flex-col items-stretch w-[43%] ml-5 max-md:w-full max-md:ml-0">
                  <div className="max-md:max-w-full max-md:mt-10">
                    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                      <div className="flex flex-col items-stretch w-[52%] max-md:w-full max-md:ml-0">
                        <div className="text-white text-opacity-60 text-base leading-8 self-stretch items-start grow pr-11 pt-16 max-md:mt-10 max-md:pr-5">
                          Handyman Services
                          <br />
                          Cleaning Services
                          <br />
                          Delivery Services
                          <br />
                          Removalists
                          <br />
                          Gardening Services
                          <br />
                          Auto Electricians
                          <br />
                          Assembly Services
                          <br />
                          All Services
                        </div>
                      </div>
                      <div className="flex flex-col items-stretch w-[48%] ml-5 max-md:w-full max-md:ml-0">
                        <div className="text-white text-opacity-60 text-base leading-8 self-stretch items-start pt-16 max-md:mt-10">
                          Sydney
                          <br />
                          Melbourne
                          <br />
                          Brisbane
                          <br />
                          Perth
                          <br />
                          Adelaide
                          <br />
                          Newcastle
                          <br />
                          Canberra
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="items-start self-stretch flex grow flex-col mt-36 max-md:max-w-full max-md:mt-10">
              <div className="items-start self-center flex w-full justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
                <div className="text-white text-base leading-8 grow shrink basis-auto self-start">
                  Heir Pty. Ltd 2011-2023 ©, All rights reserved
                </div>
                <div className="items-start flex gap-4 self-start max-md:justify-center">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/cc8663a5-f83e-4027-8f74-3ef965581c7e?apiKey=8ebeea0f4ca14c9780c31fc1db4899ea&"
                    className="aspect-square object-contain object-center w-full overflow-hidden flex-1"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/c322da03-002b-4696-8a6a-51d4b86bd400?apiKey=8ebeea0f4ca14c9780c31fc1db4899ea&"
                    className="aspect-square object-contain object-center w-full overflow-hidden flex-1"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/9e1d6e4e-7c6e-4f6a-8ea4-569439db7b59?apiKey=8ebeea0f4ca14c9780c31fc1db4899ea&"
                    className="aspect-square object-contain object-center w-full overflow-hidden flex-1"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
