import BackImage from "../../assets/logo/back.svg";
import Calender from "../../assets/logo/calendar.svg";
import Marker from "../../assets/logo/marker.svg";
import Timer from "../../assets/logo/time-fast.svg";
import User from "../../assets/logo/user.svg";

import Image from "next/image";
const Details = () => {
  return (
    <div>
      <div className="flex flex-col w-[718px] items-start gap-[44px] p-[30px] relative bg-[#f4f8fd] rounded-[24px] overflow-hidden">
        <div className="flex flex-col items-end gap-[36px] relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex items-center justify-between pt-0 pb-[36px] px-0 relative self-stretch w-full flex-[0_0_auto] border-b [border-bottom-style:solid] border-stoke">
            <Image
              width={100}
              height={100}
              className="cursor-pointer relative w-[24px] h-[24px]"
              alt="Back"
              src={BackImage}
            />
            <div className="inline-flex items-start gap-[10px] relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'DM_Sans-Medium',Helvetica] font-medium text-primary text-[16px] tracking-[0] leading-[normal]">
                12 hours ago
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start gap-[39px] relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex flex-col items-start gap-[24px] relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex items-start justify-center gap-[109px] pt-0 pb-[24px] px-0 relative self-stretch w-full flex-[0_0_auto]">
                <p className="relative flex-1 mt-[-1.00px] text-primary font-bold text-[36px] tracking-[0] leading-[normal]">
                  Help me read home loan statement.
                </p>
                <div className="relative w-fit mt-[-1.00px] text-secondary font-bold text-[48px] tracking-[0] leading-[normal]">
                  $50
                </div>
              </div>
              <div className="relative self-stretch font-normal text-primary text-[20px] tracking-[0] leading-[normal]">
                Details:
              </div>
              <p className="relative self-stretch [font-family:'DM_Sans-Regular',Helvetica] font-normal text-primary text-[16px] tracking-[0] leading-[normal]">
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
              <p className="relative self-stretch [font-family:'DM_Sans-Regular',Helvetica] font-normal text-primary text-[16px] tracking-[0] leading-[normal]">
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
            <div className="flex flex-col items-start gap-[24px] relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex items-center gap-[24px] px-0 py-[24px] relative self-stretch w-full flex-[0_0_auto] border-t [border-top-style:solid] border-b [border-bottom-style:solid] border-stoke">
                <div className="inline-flex items-start gap-[10px] relative flex-[0_0_auto]">
                  <Image
                    width={100}
                    height={100}
                    className="relative w-[20px] h-[20px]"
                    alt="Marker"
                    src={Marker}
                  />
                  <div className="relative w-fit mt-[-1.00px] [font-family:'DM_Sans-Medium',Helvetica] font-medium text-primary text-[16px] tracking-[0] leading-[normal]">
                    Remote
                  </div>
                </div>
                <div className="inline-flex items-start gap-[10px] relative flex-[0_0_auto]">
                  <Image
                    width={100}
                    height={100}
                    className="relative w-[20px] h-[20px]"
                    alt="Calendar"
                    src={Calender}
                  />
                  <div className="relative w-fit mt-[-1.00px] [font-family:'DM_Sans-Medium',Helvetica] font-medium text-primary text-[16px] tracking-[0] leading-[normal]">
                    Before Tomorrow
                  </div>
                </div>
                <div className="inline-flex items-start gap-[10px] relative flex-[0_0_auto]">
                  <Image
                    width={100}
                    height={100}
                    className="relative w-[20px] h-[20px]"
                    alt="Time fast"
                    src={Timer}
                  />
                  <div className="relative w-fit mt-[-1.00px] [font-family:'DM_Sans-Medium',Helvetica] font-medium text-primary text-[16px] tracking-[0] leading-[normal]">
                    Anytime
                  </div>
                </div>
              </div>
              <div className="inline-flex items-start gap-[8px] relative flex-[0_0_auto]">
                <Image
                  width={100}
                  height={100}
                  className="relative w-[32px] h-[32px] object-cover"
                  alt="Ellipse"
                  src={User}
                />
                <div className="inline-flex items-start gap-[10px] px-[13px] py-[6px] relative flex-[0_0_auto] bg-primary rounded-[500px] overflow-hidden">
                  <div className="relative w-fit mt-[-1.00px] font-normal text-white text-[16px] tracking-[0] leading-[normal]">
                    OPEN
                  </div>
                </div>
                <div className="inline-flex items-start gap-[10px] px-[13px] py-[6px] relative flex-[0_0_auto] bg-[#e78c3b] rounded-[500px] overflow-hidden">
                  <div className="relative w-fit mt-[-1.00px] font-normal text-white text-[16px] tracking-[0] leading-[normal]">
                    5 QUESTIONS
                  </div>
                </div>
                <div className="inline-flex items-start gap-[10px] px-[13px] py-[6px] relative flex-[0_0_auto] bg-[#94b6ef] rounded-[500px] overflow-hidden">
                  <div className="relative w-fit mt-[-1.00px] font-normal text-white text-[16px] tracking-[0] leading-[normal]">
                    2 OFFERS
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="inline-flex items-start gap-[8px] relative flex-[0_0_auto]">
          <div className="cursor-pointer flex w-[249px] items-center justify-center gap-[10px] px-[24px] py-[16px] relative bg-secondary rounded-[50px]">
            <div className="relative w-fit mt-[-1.00px] font-normal text-[#ffffff] text-[16px] tracking-[0] leading-[normal]">
              Make an offer
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
