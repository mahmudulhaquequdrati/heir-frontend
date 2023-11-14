"use client";
import Image from "next/image";
import Report from "../../assets/logo/report.svg";
import Upload from "../../assets/logo/upload.svg";
import User from "../../assets/logo/user.svg";
import Map from "../Map";

const Comments = () => {
  const position = [51.505, -0.09];
  return (
    <div>
      <Map
        className="mapfortaskdetails"
        width="800"
        height="400"
        center={position}
        zoom={12}
      >
        {({ TileLayer, Marker, Popup }) => (
          <>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={position}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </>
        )}
      </Map>
      <div className="flex flex-col  items-start gap-4 relative mt-10">
        <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
          <div className="relative w-fit [font-family:'Clash_Display-Semibold',Helvetica] font-normal text-primary text-xl tracking-normal leading-normal">
            Offers
          </div>
          <div className="inline-flex items-start gap-[10px] px-[13px] py-py-1.5 bg-[#94b6ef] rounded-[500px] overflow-hidden relative flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Clash_Display-Semibold',Helvetica] font-normal text-white text-4 tracking-normal leading-normal">
              2 OFFERS
            </div>
          </div>
        </div>
        <div className="bg-[#f4f8fd] flex flex-col items-start gap-6 p-5  w-full bg-accent rounded-3xl relative flex-[0_0_auto]">
          <div className="flex flex-col lg:flex-row items-start justify-between w-full relative flex-[0_0_auto]">
            <div className="inline-flex items-center gap-[10px] relative flex-[0_0_auto]">
              <Image
                width={100}
                height={100}
                className="relative w-[43.27px] h-[44px] object-cover"
                alt="Ellipse"
                src={User}
              />
              <div className="inline-flex flex-col items-start gap-1 relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Clash_Display-Semibold',Helvetica] font-normal text-primary text-xl tracking-normal leading-normal">
                  Md Manjurul...
                </div>
                <div className="inline-flex items-center justify-center gap-[10px] px-[10px] py-1 bg-primary rounded-[50px] overflow-hidden relative flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-1.00px] [font-family:'DM_Sans-Bold',Helvetica] font-bold text-white text-[10px] tracking-normal leading-normal">
                    PRO MEMBER
                  </div>
                </div>
              </div>
            </div>
            <div className="relative w-fit mt-[-1.00px] [font-family:'DM_Sans-Medium',Helvetica] font-medium text-primary text-4 text-right tracking-normal leading-[34px] whitespace-nowrap">
              2 hours ago
            </div>
          </div>
          <div className="flex flex-col items-start gap-[14px]  w-full relative flex-[0_0_auto]">
            <p className="relative  mt-[-1.00px] [font-family:'DM_Sans-Regular',Helvetica] font-normal text-primary text-4 tracking-normal leading-normal">
              If you have tools and equipment would love to come help as I&#39;m
              looking to do anything to make Xtra money to buy me a ute and can
              start ASAP thanks
            </p>
            <div className="inline-flex items-center justify-center gap-[10px] px-5 py-2 bg-secondery rounded-[50px] relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Clash_Display-Semibold',Helvetica] font-normal text-white text-4 tracking-normal leading-normal">
                Reply
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start gap-3 relative mt-5">
        <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
          <div className="relative w-fit [font-family:'Clash_Display-Semibold',Helvetica] font-normal text-primary text-xl tracking-normal leading-normal">
            Questions
          </div>
          <div className="inline-flex items-start gap-[10px] px-[13px] py-1.5 bg-[#e78c3b] rounded-[500px] overflow-hidden relative flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Clash_Display-Semibold',Helvetica] text-white text-4 font-normal tracking-normal leading-normal">
              5 QUESTIONS
            </div>
          </div>
        </div>
        <div className="bg-[#f4f8fd] flex flex-col items-start gap-6 p-5  w-full bg-accent rounded-3xl relative flex-[0_0_auto]">
          <div className="flex flex-col lg:flex-row items-start gap-4 w-full relative flex-[0_0_auto]">
            <div className="inline-flex items-center gap-4 relative [] flex-[0_0_auto]">
              <Image
                width={100}
                height={100}
                className="relative w-[43.27px] h-[44px] object-cover"
                alt="Ellipse"
                src={User}
              />
            </div>
            <div className="flex flex-col items-start gap-[14px] p-4 relative flex-1 grow bg-white rounded-2xl overflow-hidden w-full">
              <div className="relative h-[63px] mt-[-1.00px] [font-family:'DM_Sans-Regular',Helvetica] font-normal text-primary text-4 tracking-normal leading-normal w-full">
                If you.....
              </div>
              <div className="flex flex-col-reverse md:flex-col-reverse sm:flex-row lg:flex-row justify-between items-start w-full gap-2">
                <div className="inline-flex items-start gap-2 relative flex-[0_0_auto]">
                  <Image
                    width={100}
                    height={100}
                    className="relative flex-[0_0_auto] w-[35px] h-[35px]"
                    alt="Frame"
                    src={Upload}
                  />
                  <div className="inline-flex items-center justify-center gap-[10px] px-5 py-2 bg-secondery rounded-[50px] relative flex-[0_0_auto]">
                    <div className="relative w-fit mt-[-1.00px] [font-family:'Clash_Display-Semibold',Helvetica] font-normal text-white text-4 tracking-normal leading-normal">
                      Reply
                    </div>
                  </div>
                </div>
                <div className="min-w-min opacity-50 [font-family:'DM_Sans-Regular',Helvetica] text-primary text-3 font-normal tracking-normal leading-normal">
                  1500 max
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#f4f8fd] flex flex-col items-start gap-6 p-5  w-full bg-accent rounded-3xl relative flex-[0_0_auto]">
          <div className="flex flex-col lg:flex-row items-start justify-between  w-full relative flex-[0_0_auto]">
            <div className="inline-flex items-center gap-[10px] relative flex-[0_0_auto]">
              <Image
                width={100}
                height={100}
                className="relative w-[43.27px] h-[44px] object-cover"
                alt="Ellipse"
                src={User}
              />
              <div className="inline-flex flex-col items-start gap-1 relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Clash_Display-Semibold',Helvetica] font-normal text-primary text-xl tracking-normal leading-normal">
                  Md Manjurul...
                </div>
                <div className="inline-flex items-center justify-center gap-[10px] px-[10px] py-1 bg-primary rounded-[50px] overflow-hidden relative flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-1.00px] [font-family:'DM_Sans-Bold',Helvetica] font-bold text-white text-[10px] tracking-normal leading-normal">
                    PRO MEMBER
                  </div>
                </div>
              </div>
            </div>
            <div className="relative w-fit mt-[-1.00px] [font-family:'DM_Sans-Medium',Helvetica] font-medium text-primary text-4 text-right tracking-normal leading-[34px] whitespace-nowrap">
              2 hours ago
            </div>
          </div>
          <div className="flex flex-col items-start gap-[14px]  w-full relative flex-[0_0_auto]">
            <p className="relative  mt-[-1.00px] [font-family:'DM_Sans-Regular',Helvetica] font-normal text-primary text-4 tracking-normal leading-normal">
              If you have tools and equipment would love to come help as I&#39;m
              looking to do anything to make Xtra money to buy me a ute and can
              start ASAP thanks
            </p>
            <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
              <Image
                width={100}
                height={100}
                className="relative flex-[0_0_auto] w-5 h-5"
                alt="Frame"
                src={Report}
              />
              <div className="inline-flex items-center justify-center gap-[10px] px-5 py-2 bg-secondery rounded-[50px] relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Clash_Display-Semibold',Helvetica] font-normal text-white text-4 tracking-normal leading-normal">
                  Reply
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#f4f8fd] flex flex-col items-start gap-6 p-5  w-full bg-accent rounded-3xl relative flex-[0_0_auto]">
          <div className="flex flex-col lg:flex-row items-start justify-between  w-full relative flex-[0_0_auto]">
            <div className="inline-flex items-center gap-[10px] relative flex-[0_0_auto]">
              <Image
                width={100}
                height={100}
                className="relative w-[43.27px] h-[44px] object-cover"
                alt="Ellipse"
                src={User}
              />
              <div className="inline-flex flex-col items-start gap-1 relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Clash_Display-Semibold',Helvetica] font-normal text-primary text-xl tracking-normal leading-normal">
                  Md Manjurul...
                </div>
                <div className="inline-flex items-center justify-center gap-[10px] px-[10px] py-1 bg-primary rounded-[50px] overflow-hidden relative flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-1.00px] [font-family:'DM_Sans-Bold',Helvetica] font-bold text-white text-[10px] tracking-normal leading-normal">
                    PRO MEMBER
                  </div>
                </div>
              </div>
            </div>
            <div className="relative w-fit mt-[-1.00px] [font-family:'DM_Sans-Medium',Helvetica] font-medium text-primary text-4 text-right tracking-normal leading-[34px] whitespace-nowrap">
              2 hours ago
            </div>
          </div>
          <div className="flex flex-col items-start gap-[14px]  w-full relative flex-[0_0_auto]">
            <p className="relative  mt-[-1.00px] [font-family:'DM_Sans-Regular',Helvetica] font-normal text-primary text-4 tracking-normal leading-normal">
              If you have tools and equipment would love to come help as I&#39;m
              looking to do anything to make Xtra money to buy me a ute and can
              start ASAP thanks
            </p>
            <div className="inline-flex items-start gap-2 relative flex-[0_0_auto]">
              <Image
                width={100}
                height={100}
                className="relative flex-[0_0_auto] w-5 h-5"
                alt="Frame"
                src={Report}
              />
              <div className="inline-flex items-center justify-center gap-[10px] px-5 py-2 bg-secondery rounded-[50px] relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Clash_Display-Semibold',Helvetica] font-normal text-white text-4 tracking-normal leading-normal">
                  Reply
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
