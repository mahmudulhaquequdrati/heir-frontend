import Link from "next/link";

const page = () => {
  return (
    <div className="py-[80px] px-8 md:px10 bg-white ">
      <div className="container mx-auto">
        <div className="">
          {/* Head Part */}
          <div className="flex justify-between md:flex-row flex-col-reverse gap-7 mb-14">
            {/* Content Side */}
            <div className="w-full">
              {/* map & follow */}
              <div className="text-[#1128FA] text-[15px] flex justify-between">
                <Link href="">Return to Map</Link>

                <button className="bg-[#ebedf793] px-4 py-1 text-[#1128faec] rounded-3xl flex gap-2 items-center font-semibold">
                  <span>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="1px"
                      viewBox="0 0 1024 1024"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z"></path>
                    </svg>
                  </span>
                  Follow
                </button>
              </div>

              <h1 className="text-3xl font-semibold ">
                Complete impact assessment for DA application
              </h1>

              <div className="mt-4 flex flex-col max-w-md gap-9">
                {/* post status */}
                <div className="flex gap-3 flex-row w-full">
                  <div className="w-52">
                    <p className="text-[#ACACAC] text-sm"> POSTED BY</p>
                    <h1>Rakib Hossen</h1>
                  </div>

                  <div className="w-52">
                    <p className="text-[#ACACAC] text-sm">Status</p>
                    <span className="py-1 px-4 bg-[#139A11] text-white rounded-[25px] w-[62px] text-xs text-center">
                      open
                    </span>
                  </div>
                </div>

                {/* Location */}
                <div className="gap-8 flex flex-row ">
                  <div className="w-52">
                    <p className="text-[#ACACAC] text-sm"> Location</p>
                    <h1>Florida, USA</h1>
                  </div>

                  <div className="w-52">
                    <p className="text-[#ACACAC] text-sm"> TO BE DONE ON</p>
                    <p>12 jJUNE, 23</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Price */}
            <div className="p-4 bg-[#f3f3f7] rounded-2xl text-center flex flex-col justify-between items-center gap-3">
              <div>
                <p className="text-[#858aac] font-bold">TASK BUDGET</p>
                <p className="text-5xl font-semibold py-2">$40</p>
              </div>
              <button className="w-60 text-center bg-[#0a65fc] py-4 px-4 text-white font-semibold rounded-full">
                Make an offer
              </button>
            </div>
          </div>

          {/* details part */}
          <div>
            <h2 className="font-semibold mb-8">DETAILS</h2>
            <article
              dangerouslySetInnerHTML={{
                __html: `Hi Kimberley, \n
               Can you please give me an hourly rate for this type of
            work. I am working with a Client in NT and assisting them in
            preparing a DA submission. I do this kind of work for other clients
            as well and looking for someone to assist with the writing and form
            completion tasks. I partially completed the Impact assessment but
            looking to outsource it now. Aiming to have this one finished in the
            next couple of days. The project is not a complex one. We just need
            to hit the key points, so to speak.Let me know your rates and I will
            send the documentation and a brief to you. Don&apos;t worry about DA
            assistance job you posted earlier for your fence. If you go
            elsewhere that is all good. I had a look at your profile and thought
            you could assist me with some of my work. I&apos;m happy either way.
            Thanks. Jason.`,
              }}
            ></article>
          </div>

          {/* Cancellation Policy */}
          <div className="mt-16">
            <h3 className="font-semibold text-lg">Cancellation policy</h3>
            <p className="text-sm">
              If you are responsible for cancelling this task, a Cancellation
              Fee will be deducted from your next payment payout.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
