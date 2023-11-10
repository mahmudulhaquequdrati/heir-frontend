/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import SectionTitle from "../RegularCMP/SectionTitle";

export default function Review() {
  return (
    <div className="container mx-auto">
      <div>
        {/* Section Title */}
        <SectionTitle title={`Trusted by millions of worldwide customers`} />

        <div className="mt-14">
          <div className="gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center">
            <div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/7c63cee5-e6bd-48bd-8442-34e18fcbcb14?apiKey=8ebeea0f4ca14c9780c31fc1db4899ea&"
                className="aspect-[6] object-contain object-center w-[168px] overflow-hidden self-center max-w-full mx-auto"
              />
              <div className="text-slate-900 text-center text-lg leading-8 self-stretch my-7">
                “This was definitely my best experience with live chat software.
                Plug and play. Intuitive. It is fast, clean, amazing.”{" "}
              </div>{" "}
              <div className="text-gray-500 text-center text-base font-medium leading-6 self-center whitespace-nowrap mt-16 max-md:mt-10">
                <span className="text-slate-900">Rated 4.5/5 -</span>
                <span className="text-gray-500"> from over 100 reviews</span>
              </div>
            </div>

            <div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/920ae869-cd2a-4e94-9220-54135203b19e?apiKey=8ebeea0f4ca14c9780c31fc1db4899ea&"
                className="aspect-[6] object-contain object-center w-[168px] overflow-hidden self-center max-w-full mx-auto"
              />
              <div className="text-slate-900 text-center text-lg leading-8 self-stretch mt-7">
                “Excellent simple live chat solution that has provided my
                company with a direct way to communicate with potential for
                customers through my website.”
              </div>{" "}
              <div className="text-gray-500 text-center text-base font-medium leading-6 self-center whitespace-nowrap mt-8">
                <span className="text-slate-900">Rated 4.5/5 -</span>
                <span className="text-gray-500"> from over 100 reviews</span>
              </div>
            </div>

            <div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ac229539-02f0-40e2-b708-8b8b84b5007a?apiKey=8ebeea0f4ca14c9780c31fc1db4899ea&"
                className="aspect-[6] object-contain object-center w-[168px] overflow-hidden self-center max-w-full mx-auto"
              />{" "}
              <div className="text-slate-900 text-center text-lg leading-8 self-stretch mt-7">
                Great customer support! Easy to use, cool user interface. With
                Chaport you will find all you need. Really recommend to all use
                this amazine tool.”
              </div>{" "}
              <div className="text-gray-500 text-center text-base font-medium leading-6 self-center whitespace-nowrap mt-9">
                <span className="text-slate-900">Rated 4.5/5 -</span>
                <span className="text-gray-500"> from over 100 reviews</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
