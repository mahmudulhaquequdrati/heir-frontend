import Image from "next/image";
import Marker from '../../assets/logo/marker.svg';
import Calender from '../../assets/logo/calendar.svg';
import Timer from '../../assets/logo/time-fast.svg';
import User from '../../assets/logo/user.svg';

const Card = () => {

  return (
    <div className='p-10 border-b-2' >
      <div className="w-full flex self-stretch items-start flex-[0_0_auto] justify-between relative">
        <div className="[font-family:'Clash_Display-Medium',Helvetica]  mt-[-1.00px] tracking-[0] text-[24px] text-blue font-medium leading-[normal] relative">
          <p>Legal Advice Civil Mater - 20 min phone call</p>
          <p>Help me read home loan statement.</p>
        </div>
        <div className="[font-family:'Clash_Display-Semibold',Helvetica] w-fit mt-[-1.00px] tracking-[0] text-[24px] text-secondery font-bold leading-[normal] relative">
          $150
        </div>
      </div>
      <div className="mt-5 w-full flex self-stretch flex-col items-start gap-[15px] flex-[0_0_auto] relative">
        <div className="inline-flex items-start gap-[10px] flex-[0_0_auto] relative">
          <Image className="w-[20px] h-[20px] relative" alt="Marker" src={Marker} />
          <div className="[font-family:'DM_Sans-Medium',Helvetica] w-fit mt-[-1.00px] tracking-[0] text-[16px] text-blue font-medium leading-[normal] relative">
            Remote
          </div>
        </div>
        <div className="inline-flex items-start gap-[10px] flex-[0_0_auto] relative">
          <Image
            className="w-[20px] h-[20px] relative"
            alt="Calendar"
            src={Calender}
          />
          <div className="[font-family:'DM_Sans-Medium',Helvetica] w-fit mt-[-1.00px] tracking-[0] text-[16px] text-blue font-medium leading-[normal] relative">
            Before Tomorrow
          </div>
        </div>
        <div className="inline-flex items-start gap-[10px] flex-[0_0_auto] relative">
          <Image
            className="w-[20px] h-[20px] relative"
            alt="Time fast"
            src={Timer}
          />
          <div className="[font-family:'DM_Sans-Medium',Helvetica] w-fit mt-[-1.00px] tracking-[0] text-[16px] text-blue font-medium leading-[normal] relative">
            Anytime
          </div>
        </div>
      </div>
      <div className="mt-5 inline-flex items-start gap-[8px] flex-[0_0_auto] relative">
        <Image
          className="w-[32px] object-cover h-[32px] relative"
          alt="Ellipse"
          src={User}
        />
        <div
          className={`inline-flex items-start gap-[10px] flex-[0_0_auto] px-[13px] py-[6px] overflow-hidden rounded-[500px] relative bg-secondery`}
        >
          <div className="[font-family:'Clash_Display-Semibold',Helvetica] w-fit mt-[-1.00px] tracking-[0] text-[16px] text-white font-normal leading-[normal] relative">
            OPEN
          </div>
        </div>
        <div className="inline-flex items-start gap-[10px] flex-[0_0_auto] px-[13px] py-[6px] overflow-hidden rounded-[500px] bg-[#94b6ef] relative">
          <div className="[font-family:'Clash_Display-Semibold',Helvetica] w-fit mt-[-1.00px] tracking-[0] text-[16px] text-white font-normal leading-[normal] relative">
            2 OFFERS
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
