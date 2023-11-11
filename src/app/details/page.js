import localFont from "next/font/local";
import Image from "next/image";
import userDetails from "../../assets/details/user-details.png";

const clashDisplay = localFont({
  src: [
    {
      path: "../../Fonts/ClashDisplay/fonts/ClashDisplay-Light.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../Fonts/ClashDisplay/fonts/ClashDisplay-Regular.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../Fonts/ClashDisplay/fonts/ClashDisplay-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../Fonts/ClashDisplay/fonts/ClashDisplay-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});

const page = () => {
  return (
    <>
      <section>
        <div className="container mx-auto py-7">
          <div className="grid grid-cols-1 sm:grid-cols-7 md:grid-cols-9 lg:grid-cols-12 gap-7">
            {/* Left side */}
            <div className=" sm:col-span-4 md:col-span-5 lg:col-span-8 border rounded-3xl p-7  bg-[#F4F8FD]">
              {/* details navbar */}
              <div className="border-b border-b-[#213F610D] mb-6">
                <div className="flex justify-between items-center mb-8">
                  <span>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21.9998 11H4.41379L9.70679 5.70699C9.8023 5.61474 9.87848 5.5044 9.93089 5.38239C9.9833 5.26039 10.0109 5.12917 10.012 4.99639C10.0132 4.86361 9.98789 4.73193 9.93761 4.60904C9.88733 4.48614 9.81307 4.37449 9.71918 4.28059C9.62529 4.1867 9.51364 4.11245 9.39074 4.06217C9.26784 4.01189 9.13616 3.98659 9.00339 3.98774C8.87061 3.98889 8.73939 4.01648 8.61738 4.06889C8.49538 4.1213 8.38503 4.19748 8.29279 4.29299L1.29279 11.293C1.10532 11.4805 1 11.7348 1 12C1 12.2652 1.10532 12.5195 1.29279 12.707L8.29279 19.707C8.48139 19.8891 8.73399 19.9899 8.99619 19.9877C9.25838 19.9854 9.5092 19.8802 9.6946 19.6948C9.88001 19.5094 9.98518 19.2586 9.98746 18.9964C9.98974 18.7342 9.88894 18.4816 9.70679 18.293L4.41379 13H21.9998C22.265 13 22.5194 12.8946 22.7069 12.7071C22.8944 12.5196 22.9998 12.2652 22.9998 12C22.9998 11.7348 22.8944 11.4804 22.7069 11.2929C22.5194 11.1053 22.265 11 21.9998 11Z"
                        fill="#213F61"
                      />
                    </svg>
                  </span>
                  <p className="text-base font-semibold">12 hours ago</p>
                </div>
              </div>

              {/* Details Title */}
              <div
                className={`flex flex-col md:flex-row justify-between items-start mb-7 ${clashDisplay.className} font-semibold`}
              >
                <h1 className="grow text-3xl md:text-4xl lg:text-5xl text-primary">
                  {" "}
                  Help me read home loan statement.{" "}
                </h1>
                <p className="max-w-xs text-3xl md:text-5xl lg:text-7xl text-[#E78C3B]">
                  {" "}
                  $50{" "}
                </p>
              </div>

              {/* Details Content */}
              <div className="mt-5">
                <h4
                  className={`text-primary font-semibold text-xl ${clashDisplay.className} font-semibold mb-5`}
                >
                  Details:{" "}
                </h4>

                <article className="text-base font-normal flex flex-col gap-6 font-DM_Sans">
                  <p>
                    {" "}
                    Lorem ipsum is a Latin text commonly used as a placeholder
                    in graphic design, publishing, and typesetting industries.
                    It was first introduced by Viktor Emil Frere-Jones in 1911
                    and has since become a widely recognized and widely adopted
                    standard for representing text in visual design contexts.{" "}
                  </p>

                  <p>
                    Lorem ipsum text is often used in mockups, wireframes, and
                    prototypes to provide a realistic and visually pleasing
                    representation of written content without revealing any
                    confidential or sensitive information about the project
                  </p>

                  <p>
                    Large back yard needs a mow, hedges and trees trimmed, and
                    green waste removed. Additional work could include removal
                    of some old pavings and several of the plants. And potential
                    for regular ongoing work for the right person.
                  </p>

                  <p>
                    Lorem ipsum is a Latin text commonly used as a placeholder
                    in graphic design, publishing, and typesetting industries.
                    It was first introduced by Viktor Emil Frere-Jones in 1911
                    and has since become a widely recognized and widely adopted
                    standard for representing text in visual design contexts.
                  </p>
                </article>
              </div>

              {/* Location & Time */}
              <div className="flex flex-wrap gap-4 mt-4 md:mt-6 lg:mt-10">
                <div className="flex gap-3">
                  <figure>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_176_1243)">
                        <path
                          d="M9.96402 20.0067L9.38312 19.5088C8.5823 18.8382 1.58984 12.7993 1.58984 8.38193C1.58984 3.75701 5.3391 0.00775146 9.96402 0.00775146C14.5889 0.00775146 18.3382 3.75701 18.3382 8.38193C18.3382 12.7993 11.3457 18.8383 10.5482 19.5121L9.96402 20.0067ZM9.96402 1.81849C6.34086 1.8226 3.40473 4.75873 3.40062 8.38189C3.40062 11.157 7.70266 15.5901 9.96402 17.6191C12.2254 15.5893 16.5274 11.1536 16.5274 8.38189C16.5233 4.75873 13.5872 1.82263 9.96402 1.81849Z"
                          fill="#E78C3B"
                        />
                        <path
                          d="M9.96398 11.7014C8.1307 11.7014 6.64453 10.2152 6.64453 8.38192C6.64453 6.54864 8.1307 5.06247 9.96398 5.06247C11.7973 5.06247 13.2834 6.54864 13.2834 8.38192C13.2834 10.2152 11.7973 11.7014 9.96398 11.7014ZM9.96398 6.72216C9.04734 6.72216 8.30426 7.46524 8.30426 8.38188C8.30426 9.29852 9.04734 10.0416 9.96398 10.0416C10.8806 10.0416 11.6237 9.29852 11.6237 8.38188C11.6237 7.46524 10.8807 6.72216 9.96398 6.72216Z"
                          fill="#E78C3B"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_176_1243">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </figure>

                  <p className="font-DM_Sans"> Remote </p>
                </div>

                <div className="flex gap-3">
                  <figure>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_176_1256)">
                        <path
                          d="M7.5 20H0.833333C0.61232 20 0.400358 19.9122 0.244078 19.7559C0.0877974 19.5997 0 19.3877 0 19.1667C0 18.9457 0.0877974 18.7337 0.244078 18.5774C0.400358 18.4211 0.61232 18.3333 0.833333 18.3333H7.5C7.72101 18.3333 7.93297 18.4211 8.08926 18.5774C8.24554 18.7337 8.33333 18.9457 8.33333 19.1667C8.33333 19.3877 8.24554 19.5997 8.08926 19.7559C7.93297 19.9122 7.72101 20 7.5 20Z"
                          fill="#E78C3B"
                        />
                        <path
                          d="M5.83333 16.6667H0.833333C0.61232 16.6667 0.400358 16.5789 0.244078 16.4226C0.0877974 16.2663 0 16.0543 0 15.8333C0 15.6123 0.0877974 15.4004 0.244078 15.2441C0.400358 15.0878 0.61232 15 0.833333 15H5.83333C6.05435 15 6.26631 15.0878 6.42259 15.2441C6.57887 15.4004 6.66667 15.6123 6.66667 15.8333C6.66667 16.0543 6.57887 16.2663 6.42259 16.4226C6.26631 16.5789 6.05435 16.6667 5.83333 16.6667Z"
                          fill="#E78C3B"
                        />
                        <path
                          d="M4.16667 13.3333H0.833333C0.61232 13.3333 0.400358 13.2455 0.244078 13.0892C0.0877974 12.933 0 12.721 0 12.5C0 12.279 0.0877974 12.067 0.244078 11.9107C0.400358 11.7545 0.61232 11.6667 0.833333 11.6667H4.16667C4.38768 11.6667 4.59964 11.7545 4.75592 11.9107C4.9122 12.067 5 12.279 5 12.5C5 12.721 4.9122 12.933 4.75592 13.0892C4.59964 13.2455 4.38768 13.3333 4.16667 13.3333Z"
                          fill="#E78C3B"
                        />
                        <path
                          d="M10.833 19.9625C10.612 19.9723 10.3961 19.894 10.2329 19.7446C10.0696 19.5953 9.97241 19.3873 9.96258 19.1663C9.95274 18.9452 10.0311 18.7294 10.1804 18.5661C10.3298 18.4029 10.5378 18.3057 10.7588 18.2958C12.3359 18.1515 13.8392 17.5609 15.0926 16.593C16.346 15.6251 17.2978 14.3201 17.8363 12.8309C18.3748 11.3416 18.4778 9.72971 18.1332 8.18401C17.7886 6.63832 17.0108 5.2228 15.8907 4.10326C14.7707 2.98371 13.3548 2.2065 11.8089 1.86265C10.2631 1.51879 8.65124 1.62253 7.16222 2.16172C5.6732 2.70091 4.36864 3.65322 3.40135 4.90711C2.43405 6.161 1.84407 7.66456 1.70049 9.24167C1.6806 9.4618 1.57408 9.66501 1.40436 9.8066C1.23464 9.94819 1.01562 10.0166 0.795493 9.99667C0.575364 9.97678 0.372152 9.87026 0.230562 9.70054C0.0889717 9.53082 0.0206021 9.3118 0.0404934 9.09167C0.272901 6.52776 1.48516 4.15225 3.42493 2.45964C5.3647 0.76703 7.88253 -0.112276 10.4543 0.00476408C13.026 0.121804 15.4536 1.22617 17.2316 3.08798C19.0096 4.94978 20.0011 7.42558 19.9997 10C20.0124 12.4986 19.0842 14.9105 17.3996 16.7558C15.715 18.6012 13.3974 19.7448 10.908 19.9592C10.883 19.9617 10.8572 19.9625 10.833 19.9625Z"
                          fill="#E78C3B"
                        />
                        <path
                          d="M9.99935 5C9.77834 5 9.56637 5.0878 9.41009 5.24408C9.25381 5.40036 9.16602 5.61232 9.16602 5.83333V10C9.16606 10.221 9.25389 10.4329 9.41018 10.5892L11.9102 13.0892C12.0674 13.241 12.2779 13.325 12.4963 13.3231C12.7148 13.3212 12.9239 13.2335 13.0784 13.079C13.2329 12.9245 13.3205 12.7155 13.3224 12.497C13.3243 12.2785 13.2403 12.068 13.0885 11.9108L10.8327 9.655V5.83333C10.8327 5.61232 10.7449 5.40036 10.5886 5.24408C10.4323 5.0878 10.2204 5 9.99935 5Z"
                          fill="#E78C3B"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_176_1256">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </figure>

                  <p className="font-DM_Sans"> Before Tomorrow </p>
                </div>

                <div className="flex gap-3">
                  <figure>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_176_1249)">
                        <path
                          d="M15.8333 1.66667H15V0.833333C15 0.61232 14.9122 0.400358 14.7559 0.244078C14.5996 0.0877974 14.3877 0 14.1667 0C13.9457 0 13.7337 0.0877974 13.5774 0.244078C13.4211 0.400358 13.3333 0.61232 13.3333 0.833333V1.66667H6.66667V0.833333C6.66667 0.61232 6.57887 0.400358 6.42259 0.244078C6.26631 0.0877974 6.05435 0 5.83333 0C5.61232 0 5.40036 0.0877974 5.24408 0.244078C5.0878 0.400358 5 0.61232 5 0.833333V1.66667H4.16667C3.062 1.66799 2.00296 2.1074 1.22185 2.88852C0.440735 3.66963 0.00132321 4.72867 0 5.83333L0 15.8333C0.00132321 16.938 0.440735 17.997 1.22185 18.7782C2.00296 19.5593 3.062 19.9987 4.16667 20H15.8333C16.938 19.9987 17.997 19.5593 18.7782 18.7782C19.5593 17.997 19.9987 16.938 20 15.8333V5.83333C19.9987 4.72867 19.5593 3.66963 18.7782 2.88852C17.997 2.1074 16.938 1.66799 15.8333 1.66667ZM1.66667 5.83333C1.66667 5.17029 1.93006 4.53441 2.3989 4.06557C2.86774 3.59673 3.50363 3.33333 4.16667 3.33333H15.8333C16.4964 3.33333 17.1323 3.59673 17.6011 4.06557C18.0699 4.53441 18.3333 5.17029 18.3333 5.83333V6.66667H1.66667V5.83333ZM15.8333 18.3333H4.16667C3.50363 18.3333 2.86774 18.0699 2.3989 17.6011C1.93006 17.1323 1.66667 16.4964 1.66667 15.8333V8.33333H18.3333V15.8333C18.3333 16.4964 18.0699 17.1323 17.6011 17.6011C17.1323 18.0699 16.4964 18.3333 15.8333 18.3333Z"
                          fill="#E78C3B"
                        />
                        <path
                          d="M10 13.75C10.6904 13.75 11.25 13.1904 11.25 12.5C11.25 11.8096 10.6904 11.25 10 11.25C9.30964 11.25 8.75 11.8096 8.75 12.5C8.75 13.1904 9.30964 13.75 10 13.75Z"
                          fill="#E78C3B"
                        />
                        <path
                          d="M5.83398 13.75C6.52434 13.75 7.08398 13.1904 7.08398 12.5C7.08398 11.8096 6.52434 11.25 5.83398 11.25C5.14363 11.25 4.58398 11.8096 4.58398 12.5C4.58398 13.1904 5.14363 13.75 5.83398 13.75Z"
                          fill="#E78C3B"
                        />
                        <path
                          d="M14.166 13.75C14.8564 13.75 15.416 13.1904 15.416 12.5C15.416 11.8096 14.8564 11.25 14.166 11.25C13.4757 11.25 12.916 11.8096 12.916 12.5C12.916 13.1904 13.4757 13.75 14.166 13.75Z"
                          fill="#E78C3B"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_176_1249">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </figure>

                  <p className="font-DM_Sans"> Anytime </p>
                </div>
              </div>

              {/* User Open */}
              <div
                className={`mt-4 md:mt-8 lg:mt-12 flex flex-wrap gap-4 font-semibold ${clashDisplay.className}`}
              >
                <figure className="w-12 h-12 rounded-full overflow-hidden">
                  <Image className="w-full h-full" src={userDetails} />
                </figure>

                <button className="px-3 py-1.5 bg-[#213F61] rounded-3xl text-white min-w-max">
                  open
                </button>

                <button className="px-3 py-1.5 bg-[#E78C3B] rounded-3xl text-white min-w-fit">
                  5 Questions
                </button>

                <button className="px-3 py-1.5 bg-[#94B6EF] rounded-3xl text-white min-w-fit">
                  2 Offers
                </button>
              </div>

              {/* make offer */}
              <div
                className={`mt-5 md:8 lg:mt-11 flex justify-start gap-2 items-center ${clashDisplay.className} font-semibold`}
              >
                <div className="max-w-[200px]">
                  <button className="py-4 px-6 min-w-full bg-[#E78C3B] text-white rounded-[5rem]">
                    Make offer
                  </button>
                </div>

                <div className="relative group">
                  <span className="cursor-pointer">
                    <svg
                      width="52"
                      height="52"
                      viewBox="0 0 52 52"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.5"
                        y="0.5"
                        width="51"
                        height="51"
                        rx="25.5"
                        stroke="#E78C3B"
                        stroke-opacity="0.16"
                      />
                      <path
                        d="M16.4 28.4C17.7255 28.4 18.8 27.3255 18.8 26C18.8 24.6745 17.7255 23.6 16.4 23.6C15.0745 23.6 14 24.6745 14 26C14 27.3255 15.0745 28.4 16.4 28.4Z"
                        fill="#E78C3B"
                      />
                      <path
                        d="M25.9996 28.4C27.3251 28.4 28.3996 27.3255 28.3996 26C28.3996 24.6745 27.3251 23.6 25.9996 23.6C24.6741 23.6 23.5996 24.6745 23.5996 26C23.5996 27.3255 24.6741 28.4 25.9996 28.4Z"
                        fill="#E78C3B"
                      />
                      <path
                        d="M35.5992 28.4C36.9247 28.4 37.9993 27.3255 37.9993 26C37.9993 24.6745 36.9247 23.6 35.5992 23.6C34.2737 23.6 33.1992 24.6745 33.1992 26C33.1992 27.3255 34.2737 28.4 35.5992 28.4Z"
                        fill="#E78C3B"
                      />
                    </svg>
                  </span>

                  <div className="invisible w-0 h-0 group-hover:visible group-hover:w-auto group-hover:h-auto absolute top-100% right-0  ease-in duration-300">
                    <div className="border bg-white  rounded-md p-2  mt-4">
                      <button className="flex gap-3 min-w-max py-4 px-6 rounded-lg hover:bg-[#e78c3b] w-full hover:text-white items-center">
                        <span>
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clip-path="url(#clip0_181_1675)">
                              <path
                                d="M11.75 0.9375C10.8818 0.9375 10.0858 1.21262 9.38416 1.75525C8.7115 2.27547 8.26366 2.93806 8 3.41987C7.73634 2.93803 7.2885 2.27547 6.61584 1.75525C5.91422 1.21262 5.11822 0.9375 4.25 0.9375C1.82713 0.9375 0 2.91928 0 5.54731C0 8.3865 2.27947 10.329 5.73028 13.2697C6.31628 13.7692 6.9805 14.3352 7.67088 14.9389C7.76188 15.0186 7.87875 15.0625 8 15.0625C8.12125 15.0625 8.23813 15.0186 8.32913 14.939C9.01956 14.3352 9.68375 13.7691 10.2701 13.2694C13.7205 10.329 16 8.3865 16 5.54731C16 2.91928 14.1729 0.9375 11.75 0.9375Z"
                                fill="currentColor"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_181_1675">
                                <rect
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                        </span>

                        <p className="font-DM_Sans"> Save Task </p>
                      </button>

                      <button className="flex gap-3 min-w-max py-4 px-6 rounded-lg hover:bg-[#e78c3b] w-full hover:text-white duration-200 items-center">
                        <span>
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clip-path="url(#clip0_181_1681)">
                              <path
                                d="M13.6576 1.2402C13.4745 1.05711 13.1778 1.05717 12.9947 1.2402C12.8117 1.42326 12.8117 1.72005 12.9947 1.90311C14.3287 3.23701 15.0633 5.01058 15.0633 6.89708C15.0633 7.15595 15.2732 7.36583 15.5321 7.36583C15.791 7.36583 16.0008 7.15595 16.0008 6.89708C16.0008 4.76014 15.1687 2.75117 13.6576 1.2402Z"
                                fill="currentColor"
                              />
                              <path
                                d="M3.00603 1.24026C2.82294 1.05717 2.52619 1.05723 2.34309 1.24026C0.832156 2.75133 0 4.76026 0 6.89711C0 7.15598 0.209875 7.36586 0.46875 7.36586C0.727625 7.36586 0.9375 7.15598 0.9375 6.89711C0.9375 5.0107 1.67212 3.23714 3.00603 1.90317C3.18909 1.72011 3.18909 1.42333 3.00603 1.24026Z"
                                fill="currentColor"
                              />
                              <path
                                d="M11.5728 2.66018C11.3898 2.84324 11.3898 3.14002 11.5728 3.32311C12.5275 4.27771 13.0533 5.54696 13.0533 6.89708C13.0533 7.15596 13.2632 7.36583 13.522 7.36583C13.7809 7.36583 13.9908 7.15596 13.9908 6.89708C13.9908 5.29652 13.3675 3.79183 12.2358 2.66015C12.0527 2.47711 11.7559 2.47715 11.5728 2.66018Z"
                                fill="currentColor"
                              />
                              <path
                                d="M4.42556 2.66039C4.2425 2.47736 3.94572 2.47739 3.76266 2.66042C2.63103 3.79217 2.00781 5.29677 2.00781 6.89708C2.00781 7.15595 2.21772 7.36583 2.47656 7.36583C2.73547 7.36583 2.94531 7.15595 2.94531 6.89708C2.94531 5.54717 3.47103 4.27795 4.42559 3.32333C4.60862 3.14023 4.60863 2.84342 4.42556 2.66039Z"
                                fill="currentColor"
                              />
                              <path
                                d="M11.9825 10.301V7.90126C11.9825 7.02595 11.7038 6.19535 11.1766 5.49926C10.7359 4.91751 10.135 4.46301 9.45979 4.19557C9.36576 3.47332 8.74663 2.91376 7.99919 2.91376C7.25175 2.91376 6.63257 3.47332 6.5386 4.19557C5.86341 4.46301 5.26244 4.91751 4.82179 5.49926C4.29454 6.19535 4.01585 7.02595 4.01585 7.90126V10.301L3.06119 12.2104C2.98857 12.3557 2.99632 12.5283 3.08169 12.6664C3.1671 12.8047 3.318 12.8888 3.48044 12.8888H12.5179C12.6804 12.8888 12.8313 12.8047 12.9167 12.6664C13.0021 12.5283 13.0099 12.3557 12.9372 12.2104L11.9825 10.301Z"
                                fill="currentColor"
                              />
                              <path
                                d="M8.00055 14.897C8.84445 14.897 9.59073 14.4725 10.0382 13.8262H5.96289C6.41036 14.4725 7.15664 14.897 8.00055 14.897Z"
                                fill="currentColor"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_181_1681">
                                <rect
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                        </span>

                        <p className="font-DM_Sans"> Remind later </p>
                      </button>

                      <button className="flex gap-3 min-w-max py-4 px-6 rounded-lg hover:bg-[#e78c3b] w-full hover:text-white items-center">
                        <span>
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clip-path="url(#clip0_181_1691)">
                              <path
                                d="M8.23253 0.999313C6.16625 -0.181375 3.99463 -0.291812 1.90625 0.650813V0H0.96875V16H1.90625V10.1646C3.83028 9.15541 5.85081 9.18681 7.76747 10.2819C8.91691 10.9388 10.0988 11.267 11.2812 11.267C12.4632 11.267 13.6456 10.9388 14.795 10.2819L15.0312 10.1469V0.598312L14.33 0.999313C12.3359 2.13912 10.2275 2.13912 8.23253 0.999313Z"
                                fill="currentColor"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_181_1691">
                                <rect
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                        </span>

                        <p className="font-DM_Sans"> Report Task </p>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side */}
            <aside className=" sm:col-span-3 md:col-span-4 lg:col-span-4">
              {/* Map */}
              <div className="w-full h-72 rounded-3xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233667.4993016377!2d90.25487262539737!3d23.78106723932943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1699685757668!5m2!1sen!2sbd"
                  className="border-0 w-full h-full"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Offers */}
              <div className="mt-7">
                <h3
                  className={`text-primary text-base mb-3 ${clashDisplay.className} font-semibold`}
                >
                  Offers
                  <span className="px-3 py-1 bg-[#94B6EF] rounded-3xl text-white ml-2">
                    2 Offers
                  </span>
                </h3>

                <div className="border rounded-3xl p-7  bg-[#F4F8FD]">
                  <div className="flex flex-col md:flex-row gap-4 items-start justify-between mb-6">
                    <div className="flex items-center justify-start gap-3 ">
                      <figure className="w-12 h-12 rounded-full overflow-hidden">
                        <Image className="w-full h-full" src={userDetails} />
                      </figure>
                      <div
                        className={`${clashDisplay.className} font-semibold`}
                      >
                        <h2 className="font-bold text-xl"> Md Manjurul...</h2>
                        <span className="px-3 py-0.5 text-sm bg-[#213F61] rounded-3xl text-white ml-2">
                          Pro Member{" "}
                        </span>
                      </div>
                    </div>

                    <p className="font-DM_Sans"> 2 hours ago </p>
                  </div>

                  <div>
                    <p className="font-DM_Sans">
                      If you have tools and equipment would love to come help as
                      I'm looking to do anything to make Xtra money to buy me a
                      ute and can start ASAP thanks{" "}
                    </p>

                    <button
                      className={`px-4 py-1.5 bg-[#E78C3B] text-lg rounded-3xl text-white mt-3 ${clashDisplay.className} font-semibold`}
                    >
                      Reply
                    </button>
                  </div>
                </div>
              </div>

              {/* Questions */}
              <div className="mt-7">
                <h3
                  className={`text-primary text-base mb-3 ${clashDisplay.className} font-semibold`}
                >
                  Questions
                  <span className="px-3 py-1 bg-[#e78c3b] rounded-3xl text-white ml-2">
                    5 Questions
                  </span>
                </h3>

                <div className="border rounded-3xl p-5 bg-[#F4F8FD] my-3">
                  <div className="flex flex-col-reverse md:flex-row gap-3 items-start justify-between mb-6">
                    <figure className="w-12 h-12 rounded-full overflow-hidden">
                      <Image className="w-full h-full" src={userDetails} />
                    </figure>

                    <div className="bg-white rounded-3xl p-2 w-full sm:grow">
                      <textarea
                        className="w-full resize-none focus:outline-none min-h-[3rem] block"
                        rows="3"
                        placeholder="if you..."
                      ></textarea>
                      <div className="flex flex-col-reverse sm:flex-row w-full gap-4 items-start justify-between">
                        <div className="flex justify-start items-center gap-4">
                          <span>
                            <svg
                              width="37"
                              height="36"
                              viewBox="0 0 37 36"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect
                                x="0.333496"
                                width="36"
                                height="36"
                                rx="18"
                                fill="#E78C3B"
                              />
                              <rect
                                x="0.833496"
                                y="0.5"
                                width="35"
                                height="35"
                                rx="17.5"
                                stroke="#E78C3B"
                                stroke-opacity="0.16"
                              />
                              <g clip-path="url(#clip0_176_1316)">
                                <path
                                  d="M22.2078 15.522C21.9917 14.6582 21.4932 13.8913 20.7915 13.3432C20.0897 12.795 19.225 12.497 18.3345 12.4965C17.4441 12.496 16.579 12.793 15.8767 13.3403C15.1743 13.8876 14.6749 14.6539 14.4578 15.5175C13.4337 15.6136 12.486 16.1005 11.8115 16.8771C11.1371 17.6537 10.7877 18.6602 10.836 19.6877C10.8842 20.7151 11.3264 21.6845 12.0707 22.3944C12.815 23.1044 13.8042 23.5003 14.8328 23.5H16.3328C16.4654 23.5 16.5926 23.4473 16.6863 23.3535C16.7801 23.2598 16.8328 23.1326 16.8328 23C16.8328 22.8674 16.7801 22.7402 16.6863 22.6464C16.5926 22.5527 16.4654 22.5 16.3328 22.5H14.8328C14.4388 22.5011 14.0485 22.4247 13.6841 22.275C13.3197 22.1253 12.9883 21.9052 12.7089 21.6275C12.1447 21.0665 11.8264 20.3044 11.824 19.5087C11.8217 18.7131 12.1356 17.9491 12.6965 17.3848C13.2575 16.8206 14.0196 16.5023 14.8153 16.5C14.9436 16.5096 15.0709 16.4713 15.1725 16.3924C15.2742 16.3135 15.3428 16.1997 15.3653 16.073C15.4671 15.359 15.8231 14.7057 16.3679 14.2331C16.9126 13.7605 17.6096 13.5004 18.3308 13.5004C19.052 13.5004 19.749 13.7605 20.2937 14.2331C20.8385 14.7057 21.1945 15.359 21.2963 16.073C21.3224 16.1953 21.3902 16.3047 21.4881 16.3826C21.5859 16.4604 21.7078 16.5019 21.8328 16.5C22.6284 16.5 23.3915 16.816 23.9541 17.3787C24.5167 17.9413 24.8328 18.7043 24.8328 19.5C24.8328 20.2956 24.5167 21.0587 23.9541 21.6213C23.3915 22.1839 22.6284 22.5 21.8328 22.5H20.3328C20.2002 22.5 20.073 22.5527 19.9792 22.6464C19.8855 22.7402 19.8328 22.8674 19.8328 23C19.8328 23.1326 19.8855 23.2598 19.9792 23.3535C20.073 23.4473 20.2002 23.5 20.3328 23.5H21.8328C22.8539 23.4893 23.8322 23.0885 24.5673 22.3798C25.3024 21.671 25.7386 20.708 25.7865 19.688C25.8345 18.668 25.4905 17.6683 24.8251 16.8937C24.1598 16.1192 23.2233 15.6284 22.2078 15.522Z"
                                  fill="white"
                                />
                                <path
                                  d="M20.4797 19.8535C20.574 19.9446 20.7003 19.995 20.8314 19.9939C20.9625 19.9927 21.0879 19.9401 21.1806 19.8474C21.2733 19.7547 21.3259 19.6293 21.327 19.4982C21.3282 19.3671 21.2778 19.2408 21.1867 19.1465L18.6867 16.6465C18.5929 16.5528 18.4658 16.5001 18.3332 16.5001C18.2006 16.5001 18.0735 16.5528 17.9797 16.6465L15.4797 19.1465C15.3886 19.2408 15.3382 19.3671 15.3394 19.4982C15.3405 19.6293 15.3931 19.7547 15.4858 19.8474C15.5785 19.9401 15.7039 19.9927 15.835 19.9939C15.9661 19.995 16.0924 19.9446 16.1867 19.8535L17.8332 18.207V24.5C17.8332 24.6326 17.8859 24.7598 17.9797 24.8536C18.0734 24.9473 18.2006 25 18.3332 25C18.4658 25 18.593 24.9473 18.6868 24.8536C18.7805 24.7598 18.8332 24.6326 18.8332 24.5V18.207L20.4797 19.8535Z"
                                  fill="white"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_176_1316">
                                  <rect
                                    width="16"
                                    height="16"
                                    fill="white"
                                    transform="translate(10.3335 10)"
                                  />
                                </clipPath>
                              </defs>
                            </svg>
                          </span>

                          <button className="px-4 py-1 bg-[#E78C3B] text-lg rounded-3xl text-white">
                            Reply
                          </button>
                        </div>

                        <p className="text-xs text-[#213F61]">1500 max</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border rounded-3xl p-5 bg-[#F4F8FD] my-3">
                  <div className="flex flex-col md:flex-row gap-3 items-start justify-between mb-6">
                    <div className="flex items-start justify-between gap-3">
                      <figure className="w-12 h-12 rounded-full overflow-hidden">
                        <Image className="w-full h-full" src={userDetails} />
                      </figure>
                      <div
                        className={`${clashDisplay.className} font-semibold`}
                      >
                        <h2 className="font-bold text-xl"> Md Manjurul...</h2>
                        <span className="px-3 py-0.5 text-sm bg-[#213F61] rounded-3xl text-white ml-2">
                          Pro Member{" "}
                        </span>
                      </div>
                    </div>

                    <p className="font-DM_Sans"> 2 hours ago </p>
                  </div>

                  <div>
                    <p className="font-DM_Sans">
                      If you have tools and equipment would love to come help as
                      I'm looking to do anything to make Xtra money to buy me a
                      ute and can start ASAP thanks{" "}
                    </p>

                    <div className="flex justify-start items-center gap-4 mt-3">
                      <span>
                        <svg
                          width="36"
                          height="36"
                          viewBox="0 0 36 36"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            x="0.5"
                            y="0.5"
                            width="35"
                            height="35"
                            rx="17.5"
                            stroke="#E78C3B"
                            stroke-opacity="0.16"
                          />
                          <g clip-path="url(#clip0_176_1335)">
                            <path
                              d="M18.2325 10.9993C16.1663 9.81862 13.9946 9.70819 11.9062 10.6508V10H10.9688V26H11.9062V20.1646C13.8303 19.1554 15.8508 19.1868 17.7675 20.2819C18.9169 20.9388 20.0988 21.267 21.2812 21.267C22.4632 21.267 23.6456 20.9388 24.795 20.2819L25.0312 20.1469V10.5983L24.33 10.9993C22.3359 12.1391 20.2275 12.1391 18.2325 10.9993Z"
                              fill="#E78C3B"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_176_1335">
                              <rect
                                width="16"
                                height="16"
                                fill="white"
                                transform="translate(10 10)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                      </span>
                      <button
                        className={`px-4 py-1.5 bg-[#E78C3B] text-lg rounded-3xl text-white mt-3 ${clashDisplay.className} font-semibold`}
                      >
                        Reply
                      </button>
                    </div>
                  </div>
                </div>

                <div className="border rounded-3xl p-5 bg-[#F4F8FD] my-3">
                  <div className="flex flex-col md:flex-row gap-2 items-start justify-between mb-6">
                    <div className="flex items-start justify-between gap-3">
                      <figure className="w-12 h-12 rounded-full overflow-hidden">
                        <Image className="w-full h-full" src={userDetails} />
                      </figure>
                      <div
                        className={`${clashDisplay.className} font-semibold`}
                      >
                        <h2 className="font-bold text-xl"> Md Manjurul...</h2>
                        <span className="px-3 py-0.5 text-sm bg-[#213F61] rounded-3xl text-white ml-2">
                          Pro Member{" "}
                        </span>
                      </div>
                    </div>

                    <p className="font-DM_Sans"> 2 hours ago </p>
                  </div>

                  <div>
                    <p className="font-DM_Sans">
                      If you have tools and equipment would love to come help as
                      I'm looking to do anything to make Xtra money to buy me a
                      ute and can start ASAP thanks{" "}
                    </p>

                    <div className="flex justify-start items-center gap-4 mt-3">
                      <span>
                        <svg
                          width="36"
                          height="36"
                          viewBox="0 0 36 36"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            x="0.5"
                            y="0.5"
                            width="35"
                            height="35"
                            rx="17.5"
                            stroke="#E78C3B"
                            stroke-opacity="0.16"
                          />
                          <g clip-path="url(#clip0_176_1335)">
                            <path
                              d="M18.2325 10.9993C16.1663 9.81862 13.9946 9.70819 11.9062 10.6508V10H10.9688V26H11.9062V20.1646C13.8303 19.1554 15.8508 19.1868 17.7675 20.2819C18.9169 20.9388 20.0988 21.267 21.2812 21.267C22.4632 21.267 23.6456 20.9388 24.795 20.2819L25.0312 20.1469V10.5983L24.33 10.9993C22.3359 12.1391 20.2275 12.1391 18.2325 10.9993Z"
                              fill="#E78C3B"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_176_1335">
                              <rect
                                width="16"
                                height="16"
                                fill="white"
                                transform="translate(10 10)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                      </span>
                      <button
                        className={`px-4 py-1.5 bg-[#E78C3B] text-lg rounded-3xl text-white mt-3 ${clashDisplay.className} font-semibold`}
                      >
                        Reply
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
