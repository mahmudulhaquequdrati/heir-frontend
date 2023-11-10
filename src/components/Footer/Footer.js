/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";

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
            <div className="flex gap-4">
              <Link href="#">
                <span>
                  <svg
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_337_144)">
                      <path
                        d="M21.2273 0H3.77273C2.90475 0 2.07232 0.344804 1.45856 0.95856C0.844804 1.57232 0.5 2.40475 0.5 3.27273L0.5 20.7273C0.5 21.5953 0.844804 22.4277 1.45856 23.0414C2.07232 23.6552 2.90475 24 3.77273 24H21.2273C22.0953 24 22.9277 23.6552 23.5414 23.0414C24.1552 22.4277 24.5 21.5953 24.5 20.7273V3.27273C24.5 2.40475 24.1552 1.57232 23.5414 0.95856C22.9277 0.344804 22.0953 0 21.2273 0ZM8.68182 18.9927C8.682 19.0593 8.66904 19.1252 8.6437 19.1867C8.61836 19.2483 8.58112 19.3042 8.53412 19.3513C8.48713 19.3985 8.4313 19.4359 8.36983 19.4614C8.30836 19.4869 8.24246 19.5 8.17591 19.5H6.02C5.95333 19.5002 5.88729 19.4872 5.82566 19.4618C5.76404 19.4363 5.70804 19.399 5.6609 19.3518C5.61376 19.3047 5.5764 19.2487 5.55097 19.1871C5.52555 19.1254 5.51255 19.0594 5.51273 18.9927V9.95455C5.51273 9.82001 5.56617 9.69098 5.6613 9.59585C5.75644 9.50072 5.88546 9.44727 6.02 9.44727H8.17591C8.31021 9.44763 8.43889 9.50124 8.53372 9.59633C8.62856 9.69142 8.68182 9.82024 8.68182 9.95455V18.9927ZM7.09727 8.59091C6.69272 8.59091 6.29725 8.47095 5.96088 8.24619C5.62451 8.02143 5.36234 7.70197 5.20752 7.32822C5.0527 6.95446 5.0122 6.54319 5.09112 6.14641C5.17005 5.74963 5.36486 5.38516 5.65092 5.0991C5.93698 4.81304 6.30145 4.61823 6.69822 4.5393C7.095 4.46038 7.50628 4.50089 7.88003 4.6557C8.25379 4.81052 8.57325 5.07269 8.79801 5.40906C9.02276 5.74543 9.14273 6.1409 9.14273 6.54545C9.14273 7.08794 8.92723 7.60821 8.54363 7.99181C8.16003 8.37541 7.63976 8.59091 7.09727 8.59091ZM19.9509 19.0282C19.9511 19.0895 19.9391 19.1502 19.9158 19.2069C19.8924 19.2635 19.8581 19.315 19.8147 19.3584C19.7714 19.4017 19.7199 19.436 19.6632 19.4594C19.6066 19.4828 19.5458 19.4947 19.4845 19.4945H17.1664C17.1051 19.4947 17.0443 19.4828 16.9877 19.4594C16.931 19.436 16.8795 19.4017 16.8362 19.3584C16.7929 19.315 16.7585 19.2635 16.7351 19.2069C16.7118 19.1502 16.6998 19.0895 16.7 19.0282V14.7941C16.7 14.1614 16.8855 12.0232 15.0459 12.0232C13.6209 12.0232 13.3305 13.4864 13.2732 14.1436V19.0336C13.2732 19.1562 13.225 19.2738 13.139 19.361C13.053 19.4483 12.9361 19.4982 12.8136 19.5H10.5745C10.5134 19.5 10.4528 19.4879 10.3963 19.4645C10.3398 19.441 10.2885 19.4066 10.2453 19.3633C10.2021 19.32 10.1678 19.2686 10.1445 19.212C10.1213 19.1554 10.1094 19.0948 10.1095 19.0336V9.915C10.1094 9.85382 10.1213 9.79321 10.1445 9.73663C10.1678 9.68006 10.2021 9.62864 10.2453 9.58531C10.2885 9.54199 10.3398 9.50762 10.3963 9.48416C10.4528 9.46071 10.5134 9.44864 10.5745 9.44864H12.8136C12.9373 9.44864 13.0559 9.49777 13.1434 9.58523C13.2309 9.67269 13.28 9.79131 13.28 9.915V10.7032C13.8091 9.90818 14.5932 9.29727 16.2664 9.29727C19.9727 9.29727 19.9482 12.7582 19.9482 14.6591L19.9509 19.0282Z"
                        fill="#A6B2C0"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_337_144">
                        <rect
                          width="24"
                          height="24"
                          fill="white"
                          transform="translate(0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
              </Link>
              <Link href="#">
                <span>
                  <svg
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_337_148)">
                      <path
                        d="M20.9844 0H4.01562C2.07727 0 0.5 1.57727 0.5 3.51562V20.4844C0.5 22.4227 2.07727 24 4.01562 24H11.0938V15.5156H8.28125V11.2969H11.0938V8.4375C11.0938 6.11115 12.9861 4.21875 15.3125 4.21875H19.5781V8.4375H15.3125V11.2969H19.5781L18.875 15.5156H15.3125V24H20.9844C22.9227 24 24.5 22.4227 24.5 20.4844V3.51562C24.5 1.57727 22.9227 0 20.9844 0Z"
                        fill="#A6B2C0"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_337_148">
                        <rect
                          width="24"
                          height="24"
                          fill="white"
                          transform="translate(0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
              </Link>
              <Link href="#">
                <span>
                  <svg
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_337_150)">
                      <path
                        d="M23.18 1.32019C22.3001 0.440119 21.24 0 20.0006 0H5.00046C3.76099 0 2.70092 0.440119 1.82068 1.32019C0.940607 2.20043 0.500488 3.26045 0.500488 4.49997V19.4999C0.500488 20.7393 0.940607 21.7995 1.82068 22.6797C2.70092 23.5599 3.76099 24.0001 5.00046 24.0001H20.0004C21.2399 24.0001 22.2999 23.5599 23.1798 22.6797C24.06 21.7995 24.5002 20.7394 24.5002 19.4999V4.49997C24.5001 3.26045 24.06 2.20027 23.18 1.32019ZM18.8598 9.23445C18.8703 9.3282 18.8756 9.46858 18.8756 9.6564C18.8756 10.5314 18.7479 11.4091 18.4928 12.289C18.2377 13.1694 17.847 14.0132 17.3207 14.8204C16.795 15.6276 16.1674 16.3413 15.4383 16.9611C14.7091 17.5806 13.8342 18.0756 12.8131 18.4451C11.7926 18.8152 10.6986 19.0002 9.53207 19.0002C7.71971 19.0002 6.04264 18.5103 4.50091 17.5315C4.7509 17.5626 5.01146 17.5783 5.28214 17.5783C6.79262 17.5783 8.152 17.1096 9.36039 16.1718C8.65216 16.1617 8.01923 15.9431 7.462 15.5156C6.9046 15.0885 6.51669 14.547 6.29789 13.8907C6.56862 13.9323 6.77172 13.9529 6.90711 13.9529C7.13626 13.9529 7.40196 13.9113 7.70395 13.8282C6.94356 13.6821 6.30303 13.3049 5.78219 12.6955C5.26124 12.086 5.00084 11.3908 5.00084 10.6096V10.5783C5.55277 10.8386 6.07361 10.974 6.56326 10.9845C5.61532 10.349 5.14138 9.43766 5.14138 8.25018C5.14138 7.66678 5.29232 7.11475 5.59442 6.5939C6.41725 7.60439 7.41745 8.41157 8.59436 9.01571C9.77139 9.61979 11.0319 9.9585 12.3756 10.0313C12.3236 9.83345 12.2975 9.58334 12.2975 9.28135C12.2975 8.37496 12.6178 7.60166 13.2585 6.96096C13.899 6.32032 14.6725 5.99989 15.5786 5.99989C16.5372 5.99989 17.3342 6.34374 17.9696 7.03129C18.6884 6.89589 19.3866 6.63013 20.0635 6.23445C19.8031 7.03632 19.3184 7.64577 18.6104 8.06246C19.2873 7.96855 19.9173 7.79156 20.5006 7.53117C20.0631 8.1978 19.5161 8.76549 18.8598 9.23445Z"
                        fill="#A6B2C0"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_337_150">
                        <rect
                          width="24"
                          height="24"
                          fill="white"
                          transform="translate(0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
