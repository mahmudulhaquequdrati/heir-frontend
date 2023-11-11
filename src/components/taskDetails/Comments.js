"use client";
import React from "react";
// import { MapContainer, Marker, Popup, TileLayer, Tooltip } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
// import "leaflet-defaulticon-compatibility";
// import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import User from "../../assets/logo/user.svg";
import Report from "../../assets/logo/report.svg";
import Upload from "../../assets/logo/upload.svg";
import Image from "next/image";

const Comments = () => {
  const position = [51.505, -0.09];
  return (
    <div>
      {/* <MapContainer
        className="mapfortaskdetails"
        center={position}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer> */}
      <div className="flex flex-col  items-start gap-[16px] relative mt-10">
        <div className="inline-flex items-center gap-[8px] relative flex-[0_0_auto]">
          <div className="relative w-fit [font-family:'Clash_Display-Semibold',Helvetica] font-normal text-primary text-[20px] tracking-[0] leading-[normal]">
            Offers
          </div>
          <div className="inline-flex items-start gap-[10px] px-[13px] py-[6px] bg-[#94b6ef] rounded-[500px] overflow-hidden relative flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Clash_Display-Semibold',Helvetica] font-normal text-white text-[16px] tracking-[0] leading-[normal]">
              2 OFFERS
            </div>
          </div>
        </div>
        <div className="bg-[#f4f8fd] flex flex-col items-start gap-[24px] p-[20px] self-stretch w-full bg-accent rounded-[24px] relative flex-[0_0_auto]">
          <div className="flex items-start justify-between self-stretch w-full relative flex-[0_0_auto]">
            <div className="inline-flex items-center gap-[10px] relative flex-[0_0_auto]">
              <Image
                width={100}
                height={100}
                className="relative w-[43.27px] h-[44px] object-cover"
                alt="Ellipse"
                src={User}
              />
              <div className="inline-flex flex-col items-start gap-[4px] relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Clash_Display-Semibold',Helvetica] font-normal text-primary text-[20px] tracking-[0] leading-[normal]">
                  Md Manjurul...
                </div>
                <div className="inline-flex items-center justify-center gap-[10px] px-[10px] py-[4px] bg-primary rounded-[50px] overflow-hidden relative flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-1.00px] [font-family:'DM_Sans-Bold',Helvetica] font-bold text-white text-[10px] tracking-[0] leading-[normal]">
                    PRO MEMBER
                  </div>
                </div>
              </div>
            </div>
            <div className="relative w-fit mt-[-1.00px] [font-family:'DM_Sans-Medium',Helvetica] font-medium text-primary text-[16px] text-right tracking-[0] leading-[34px] whitespace-nowrap">
              2 hours ago
            </div>
          </div>
          <div className="flex flex-col items-start gap-[14px] self-stretch w-full relative flex-[0_0_auto]">
            <p className="relative self-stretch mt-[-1.00px] [font-family:'DM_Sans-Regular',Helvetica] font-normal text-primary text-[16px] tracking-[0] leading-[normal]">
              If you have tools and equipment would love to come help as I&#39;m
              looking to do anything to make Xtra money to buy me a ute and can
              start ASAP thanks
            </p>
            <div className="inline-flex items-center justify-center gap-[10px] px-[20px] py-[8px] bg-secondery rounded-[50px] relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Clash_Display-Semibold',Helvetica] font-normal text-[#ffffff] text-[16px] tracking-[0] leading-[normal]">
                Reply
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col  items-start gap-[12px] relative mt-5">
        <div className="inline-flex items-center gap-[8px] relative flex-[0_0_auto]">
          <div className="relative w-fit [font-family:'Clash_Display-Semibold',Helvetica] font-normal text-primary text-[20px] tracking-[0] leading-[normal]">
            Questions
          </div>
          <div className="inline-flex items-start gap-[10px] px-[13px] py-[6px] bg-[#e78c3b] rounded-[500px] overflow-hidden relative flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Clash_Display-Semibold',Helvetica] text-white text-[16px] font-normal tracking-[0] leading-[normal]">
              5 QUESTIONS
            </div>
          </div>
        </div>
        <div className="bg-[#f4f8fd] flex flex-col items-start gap-[24px] p-[20px] self-stretch w-full bg-accent rounded-[24px] relative flex-[0_0_auto]">
          <div className="flex items-start gap-[16px] self-stretch w-full relative flex-[0_0_auto]">
            <div className="inline-flex items-center gap-[16px] relative flex-[0_0_auto]">
              <Image
                width={100}
                height={100}
                className="relative w-[43.27px] h-[44px] object-cover"
                alt="Ellipse"
                src={User}
              />
            </div>
            <div className="flex flex-col items-start gap-[14px] p-[16px] relative flex-1 grow bg-white rounded-[16px] overflow-hidden">
              <div className="relative self-stretch h-[63px] mt-[-1.00px] [font-family:'DM_Sans-Regular',Helvetica] font-normal text-primary text-[16px] tracking-[0] leading-[normal]">
                If you.....
              </div>
              <div className="inline-flex items-start gap-[8px] relative flex-[0_0_auto]">
                <Image
                  width={100}
                  height={100}
                  className="relative flex-[0_0_auto] w-[35px] h-[35px]"
                  alt="Frame"
                  src={Upload}
                />
                <div className="inline-flex items-center justify-center gap-[10px] px-[20px] py-[8px] bg-secondery rounded-[50px] relative flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Clash_Display-Semibold',Helvetica] font-normal text-[#ffffff] text-[16px] tracking-[0] leading-[normal]">
                    Reply
                  </div>
                </div>
              </div>
              <div className="absolute w-[54px] top-[110px] left-[245px] opacity-50 [font-family:'DM_Sans-Regular',Helvetica] text-primary text-[12px] font-normal tracking-[0] leading-[normal]">
                1500 max
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#f4f8fd] flex flex-col items-start gap-[24px] p-[20px] self-stretch w-full bg-accent rounded-[24px] relative flex-[0_0_auto]">
          <div className="flex items-start justify-between self-stretch w-full relative flex-[0_0_auto]">
            <div className="inline-flex items-center gap-[10px] relative flex-[0_0_auto]">
              <Image
                width={100}
                height={100}
                className="relative w-[43.27px] h-[44px] object-cover"
                alt="Ellipse"
                src={User}
              />
              <div className="inline-flex flex-col items-start gap-[4px] relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Clash_Display-Semibold',Helvetica] font-normal text-primary text-[20px] tracking-[0] leading-[normal]">
                  Md Manjurul...
                </div>
                <div className="inline-flex items-center justify-center gap-[10px] px-[10px] py-[4px] bg-primary rounded-[50px] overflow-hidden relative flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-1.00px] [font-family:'DM_Sans-Bold',Helvetica] font-bold text-white text-[10px] tracking-[0] leading-[normal]">
                    PRO MEMBER
                  </div>
                </div>
              </div>
            </div>
            <div className="relative w-fit mt-[-1.00px] [font-family:'DM_Sans-Medium',Helvetica] font-medium text-primary text-[16px] text-right tracking-[0] leading-[34px] whitespace-nowrap">
              2 hours ago
            </div>
          </div>
          <div className="flex flex-col items-start gap-[14px] self-stretch w-full relative flex-[0_0_auto]">
            <p className="relative self-stretch mt-[-1.00px] [font-family:'DM_Sans-Regular',Helvetica] font-normal text-primary text-[16px] tracking-[0] leading-[normal]">
              If you have tools and equipment would love to come help as I&#39;m
              looking to do anything to make Xtra money to buy me a ute and can
              start ASAP thanks
            </p>
            <div className="inline-flex items-center gap-[8px] relative flex-[0_0_auto]">
              <Image
                width={100}
                height={100}
                className="relative flex-[0_0_auto] w-[20px] h-[20px]"
                alt="Frame"
                src={Report}
              />
              <div className="inline-flex items-center justify-center gap-[10px] px-[20px] py-[8px] bg-secondery rounded-[50px] relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Clash_Display-Semibold',Helvetica] font-normal text-[#ffffff] text-[16px] tracking-[0] leading-[normal]">
                  Reply
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#f4f8fd] flex flex-col items-start gap-[24px] p-[20px] self-stretch w-full bg-accent rounded-[24px] relative flex-[0_0_auto]">
          <div className="flex items-start justify-between self-stretch w-full relative flex-[0_0_auto]">
            <div className="inline-flex items-center gap-[10px] relative flex-[0_0_auto]">
              <Image
                width={100}
                height={100}
                className="relative w-[43.27px] h-[44px] object-cover"
                alt="Ellipse"
                src={User}
              />
              <div className="inline-flex flex-col items-start gap-[4px] relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Clash_Display-Semibold',Helvetica] font-normal text-primary text-[20px] tracking-[0] leading-[normal]">
                  Md Manjurul...
                </div>
                <div className="inline-flex items-center justify-center gap-[10px] px-[10px] py-[4px] bg-primary rounded-[50px] overflow-hidden relative flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-1.00px] [font-family:'DM_Sans-Bold',Helvetica] font-bold text-white text-[10px] tracking-[0] leading-[normal]">
                    PRO MEMBER
                  </div>
                </div>
              </div>
            </div>
            <div className="relative w-fit mt-[-1.00px] [font-family:'DM_Sans-Medium',Helvetica] font-medium text-primary text-[16px] text-right tracking-[0] leading-[34px] whitespace-nowrap">
              2 hours ago
            </div>
          </div>
          <div className="flex flex-col items-start gap-[14px] self-stretch w-full relative flex-[0_0_auto]">
            <p className="relative self-stretch mt-[-1.00px] [font-family:'DM_Sans-Regular',Helvetica] font-normal text-primary text-[16px] tracking-[0] leading-[normal]">
              If you have tools and equipment would love to come help as I&#39;m
              looking to do anything to make Xtra money to buy me a ute and can
              start ASAP thanks
            </p>
            <div className="inline-flex items-start gap-[8px] relative flex-[0_0_auto]">
              <Image
                width={100}
                height={100}
                className="relative flex-[0_0_auto] w-[20px] h-[20px]"
                alt="Frame"
                src={Report}
              />
              <div className="inline-flex items-center justify-center gap-[10px] px-[20px] py-[8px] bg-secondery rounded-[50px] relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Clash_Display-Semibold',Helvetica] font-normal text-[#ffffff] text-[16px] tracking-[0] leading-[normal]">
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
