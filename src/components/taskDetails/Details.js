import BackImage from "../../assets/logo/back.svg";
import Calender from "../../assets/logo/calendar.svg";
import Marker from "../../assets/logo/marker.svg";
import Timer from "../../assets/logo/time-fast.svg";
import User from "../../assets/logo/user.svg";

import Image from "next/image";
const Details = () => {
  return (
    <div>
      <div className="flex flex-col items-start gap-[44px] p-[30px] relative bg-[#f4f8fd] rounded-3xl overflow-hidden">
        <div className="flex flex-col items-end gap-9 relative w-full flex-[0_0_auto]">
          <div className="flex items-center justify-between pt-0 pb-9 px-0 relative w-full flex-[0_0_auto] border-b">
            <Image
              width={100}
              height={100}
              className="cursor-pointer relative w-6 h-6"
              alt="Back"
              src={BackImage}
            />
            <div className="inline-flex items-start gap-[10px] relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'DM_Sans-Medium',Helvetica] font-medium text-primary text-4 tracking-normal leading-normal">
                12 hours ago
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start gap-10 relative w-full flex-[0_0_auto]">
            <div className="flex flex-col items-start gap-6 relative w-full flex-[0_0_auto]">
              <div className="flex gap-[15px] items-start justify-center pb-6 pt-0 px-0 w-full">
                <p className="relative flex-1 mt-[-1.00px] text-primary font-bold text-2xl md:text-3xl lg:text-4xl tracking-normal leading-normal">
                  Help me read home loan statement.
                </p>
                <div className="relative w-fit mt-[-1.00px] text-secondery font-bold text-3xl md:text-4xl lg:text-5xl tracking-normal leading-normal">
                  $50
                </div>
              </div>
              <div className="relative font-normal text-primary text-5 tracking-normal leading-normal">
                Details:
              </div>
              <p className="relative [font-family:'DM_Sans-Regular',Helvetica] font-normal text-primary text-4 tracking-normal leading-normal">
                Lorem ipsum is a Latin text commonly used as a placeholder in
                graphic design, publishing, and typesetting industries. It was
                first introduced by Viktor Emil Frere-Jones in 1911 and has
                since become a widely recognized and widely adopted standard for
                representing text in visual design contexts. <br />
                <br />
                Lorem ipsum text is often used in mockups, wireframes, and
                prototypes to provide a realistic and visually pleasing
                representation of written content without revealing any
                confidential or sensitive information about the project.
              </p>
              <p className="relative [font-family:'DM_Sans-Regular',Helvetica] font-normal text-primary text-4 tracking-normal leading-normal">
                Large back yard needs a mow, hedges and trees trimmed, and green
                waste removed. Additional work could include removal of some old
                pavings and several of the plants. And potential for regular
                ongoing work for the right person.
                <br />
                <br />
                Lorem ipsum is a Latin text commonly used as a placeholder in
                graphic design, publishing, and typesetting industries. It was
                first introduced by Viktor Emil Frere-Jones in 1911 and has
                since become a widely recognized and widely adopted standard for
                representing text in visual design contexts.
              </p>
            </div>
            <div className="flex flex-col items-start gap-6 relative w-full flex-[0_0_auto]">
              <div className="flex items-center gap-6 px-0 py-6 w-full flex-[0_0_auto] border-t border-b flex-wrap">
                <div className="inline-flex items-start gap-[10px] relative flex-[0_0_auto]">
                  <Image
                    width={100}
                    height={100}
                    className="relativ w-5 h-5"
                    alt="Marker"
                    src={Marker}
                  />
                  <div className="relative w-fit mt-[-1.00px] [font-family:'DM_Sans-Medium',Helvetica] font-medium text-primary text-4 tracking-normal leading-normal">
                    Remote
                  </div>
                </div>
                <div className="inline-flex items-start gap-[10px] relative flex-[0_0_auto]">
                  <Image
                    width={100}
                    height={100}
                    className="relative w-5 h-5"
                    alt="Calendar"
                    src={Calender}
                  />
                  <div className="relative w-fit mt-[-1.00px] [font-family:'DM_Sans-Medium',Helvetica] font-medium text-primary text-4 tracking-normal leading-normal">
                    Before Tomorrow
                  </div>
                </div>
                <div className="inline-flex items-start gap-[10px] relative flex-[0_0_auto]">
                  <Image
                    width={100}
                    height={100}
                    className="relative w-5 h-5"
                    alt="Time fast"
                    src={Timer}
                  />
                  <div className="relative w-fit mt-[-1.00px] [font-family:'DM_Sans-Medium',Helvetica] font-medium text-primary text-4 tracking-normal leading-normal">
                    Anytime
                  </div>
                </div>
              </div>
              <div className="inline-flex items-start gap-2 relative flex-[0_0_auto] flex-wrap">
                <Image
                  width={100}
                  height={100}
                  className="relative w-[32px] h-[32px] object-cover"
                  alt="Ellipse"
                  src={User}
                />
                <div className="inline-flex items-start gap-[10px] px-[13px] py-[6px] relative flex-[0_0_auto] bg-primary rounded-[500px] overflow-hidden">
                  <div className="relative w-fit mt-[-1.00px] font-normal text-white text-4 tracking-normal leading-normal">
                    OPEN
                  </div>
                </div>
                <div className="inline-flex items-start gap-[10px] px-[13px] py-[6px] relative flex-[0_0_auto] bg-[#e78c3b] rounded-[500px] overflow-hidden">
                  <div className="relative w-fit mt-[-1.00px] font-normal text-white text-4 tracking-normal leading-normal">
                    5 QUESTIONS
                  </div>
                </div>
                <div className="inline-flex items-start gap-[10px] px-[13px] py-[6px] relative flex-[0_0_auto] bg-[#94b6ef] rounded-[500px] overflow-hidden">
                  <div className="relative w-fit mt-[-1.00px] font-normal text-white text-4 tracking-normal leading-normal">
                    2 OFFERS
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="inline-flex items-start gap-2 relative flex-[0_0_auto]">
          <div className="cursor-pointer flex w-[249px] items-center justify-center gap-[10px] px-6 py-[16px] relative bg-secondery rounded-[50px]">
            <div className="relative w-fit mt-[-1.00px] font-normal text-[#ffffff] text-4 tracking-normal leading-normal">
              Make an offer
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
