import Image from "next/image";

const Card = ({ task = {} }) => {
  const {
    taskName,
    date,
    price,
    jobType,
    status,
    client: { name, title, img },
  } = task;

  return (
    <div className="flex flex-col justify-between w-full rounded-lg p-6 shadow">
      <div className="flex justify-between gap-4">
        <h4 className="text-lg font-semibold">{taskName}</h4>
        <p className="text-[22px] font-bold text-[#006590]">{`$${price}`}</p>
      </div>
      <div>
        <p>{jobType}</p>
        <p>{date}</p>
      </div>
      <div className="flex justify-between gap-5 items-end mt-4">
        <div className="flex gap-2 w-full">
          <Image
            src={img}
            alt="client image"
            width={100}
            height={100}
            className="w-[40px] h-[40px] rounded-full bg-slate-400"
          />
          <div>
            <p className="text-[16px]">{name}</p>
            <p className="text-[14px]">{title}</p>
          </div>
        </div>

        <p className="bg-green-600 text-white rounded-lg py-[3px] px-4 m-0">
          {status}
        </p>
      </div>
    </div>
  );
};

export default Card;
