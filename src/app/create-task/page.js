"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY, dangerouslyAllowBrowser: true // defaults to process.env["OPENAI_API_KEY"]
});
export default function CreateTask() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [inputData, setInputData] = useState({});
  const [aiQuisions, setAiQuistions] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };
  const handleInputChange = (event) => {
    setInputData((inputs) => ({ ...inputs, [event.target.name]: event.target.value }));

  };

  async function askedquistionbyAi() {
    const completion = await openai.chat.completions.create({
      messages: [
        {
          "role": "user", "content": `one user wants to ${inputData?.what}, in ${inputData?.who} , in ${inputData?.when}, in ${inputData?.where} with the budget of ${inputData?.budget}$. I asked the title , in person or remote, when , where budget and details. Now what could be some other questions that might be important but we did not include .give me the list of question max(6) Just give me question lists`
        }],
      model: "gpt-3.5-turbo",
    });

    return (completion.choices[0]);
  }

  const handleSubmitData = (event) => {
    setIsLoading(true);
    event.preventDefault();
    const data = askedquistionbyAi();
    data.then(res => {
      const quisionData = res?.message?.content;
      const questions = quisionData.split('\n').map(question => question.replace(/^\d+\.\s*/, '').trim());
      setAiQuistions(questions);
      setIsLoading(false);
    })
  }
  console.log(aiQuisions);
  return (
    <>
      {
        isLoading &&
        <div className="w-full h-full fixed top-0 left-0 bg-white opacity-75 z-50">
          <div className="flex justify-center items-center mt-[50vh]">
            <svg fill='none' className="w-20 h-20 animate-spin" viewBox="0 0 32 32" xmlns='http://www.w3.org/2000/svg'>
              <path clipRule='evenodd'
                d='M15.165 8.53a.5.5 0 01-.404.58A7 7 0 1023 16a.5.5 0 011 0 8 8 0 11-9.416-7.874.5.5 0 01.58.404z'
                fill='currentColor' fillRule='evenodd' />
            </svg>
          </div>
        </div>

      }
      <div className="container mx-auto mb-[100px]">
        <div className="pt-[35px] px-4 md:px-[30px] bg-[#F4F8FD] rounded-2xl mt-8">
          <div className="flex items-center justify-between">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M21.9998 11H4.41379L9.70679 5.70699C9.8023 5.61474 9.87848 5.5044 9.93089 5.38239C9.9833 5.26039 10.0109 5.12917 10.012 4.99639C10.0132 4.86361 9.98789 4.73193 9.93761 4.60904C9.88733 4.48614 9.81307 4.37449 9.71918 4.28059C9.62529 4.1867 9.51364 4.11245 9.39074 4.06217C9.26784 4.01189 9.13616 3.98659 9.00339 3.98774C8.87061 3.98889 8.73939 4.01648 8.61738 4.06889C8.49538 4.1213 8.38503 4.19748 8.29279 4.29299L1.29279 11.293C1.10532 11.4805 1 11.7348 1 12C1 12.2652 1.10532 12.5195 1.29279 12.707L8.29279 19.707C8.48139 19.8891 8.73399 19.9899 8.99619 19.9877C9.25838 19.9854 9.5092 19.8802 9.6946 19.6948C9.88001 19.5094 9.98518 19.2586 9.98746 18.9964C9.98974 18.7342 9.88894 18.4816 9.70679 18.293L4.41379 13H21.9998C22.265 13 22.5194 12.8946 22.7069 12.7071C22.8944 12.5196 22.9998 12.2652 22.9998 12C22.9998 11.7348 22.8944 11.4804 22.7069 11.2929C22.5194 11.1053 22.265 11 21.9998 11Z"
                  fill="#213F61"
                />
              </svg>
            </span>
            <span className="font-clash text-[28px] font-semibold text-[#213F61]">
              Input task details
            </span>
            <span> </span>
          </div>
          <form onSubmit={handleSubmitData}>
            <div className="flex flex-col gap-9 bg-white rounded-2xl p-4 sm:p-6 md:p-9 mt-10">
              <div className="flex flex-col md:flex-row gap-9">
                <div className="w-full md:w-1/2">
                  <h3 className="pb-9 font-clash font-semibold text-[#213F61] text-[20px]">
                    Title & Date
                  </h3>
                  <div className="flex flex-col gap-5">
                    <div>
                      <span className="block pb-4">
                        In a few words, what do you need done?
                      </span>
                      <div>
                        <input
                          onChange={handleInputChange}
                          name="what"
                          type="text"
                          className="w-full bg-[#F4F8FD] py-3 md:py-5 px-[18px] rounded-2xl outline-none border border-[#F4F8FD] focus:border-[#E78C3B]"
                        />
                      </div>
                    </div>
                    <div>
                      <span className="block pb-4">
                        When do you need done?
                      </span>
                      <div>
                        <input
                          onChange={handleInputChange}
                          name="when"
                          type="date"
                          className="w-full bg-[#F4F8FD] py-3 md:py-5 px-[18px] rounded-2xl outline-none border border-[#F4F8FD] focus:border-[#E78C3B]"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full md:w-1/2">
                  <h3 className="pb-9 font-clash font-semibold text-[#213F61] text-[20px]">
                    Location
                  </h3>
                  <div className="flex flex-col gap-5">
                    <div>
                      <span className="block pb-4">
                        Who do you need done?
                      </span>
                      <div className="flex flex-col sm:flex-row gap-4">
                        <div className="w-full sm:w-1/2 flex items-center gap-2 bg-[#F4F8FD] py-3 md:py-5 px-[18px] rounded-2xl">
                          <input onChange={handleInputChange} type="radio" name="who" value="In Persion" id="InPerson" />
                          <label htmlFor="InPerson">In person</label>
                        </div>
                        <div className="w-full sm:w-1/2 flex items-center gap-2 bg-[#F4F8FD] py-3 md:py-5 px-[18px] rounded-2xl">
                          <input onChange={handleInputChange} type="radio" name="who" value="Who" id="Online" />
                          <label htmlFor="Online">Online</label>
                        </div>
                      </div>
                    </div>
                    <div>
                      <span className="block pb-4">
                        Where do you need done?
                      </span>
                      <div>
                        <input
                          onChange={handleInputChange}
                          type="text"
                          name="where"
                          className="w-full bg-[#F4F8FD] py-3 md:py-5 px-[18px] rounded-2xl outline-none border border-[#F4F8FD] focus:border-[#E78C3B]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-9">
                {
                  aiQuisions?.filter(question => question.trim() !== '')?.map((ques, i) => (
                    <div key={i} className="w-full">
                      <div className="flex flex-col gap-5">
                        <div >
                          <span className="block pb-4">
                            {ques}{" "}
                            <span className="text-[#E78C3B]">(optional)</span>
                          </span>
                          <div>
                            <input
                              name={`aiQuistion${i + 1}`}
                              onChange={handleInputChange}
                              type="text"
                              className="w-full bg-[#F4F8FD] py-3 md:py-5 px-[18px] rounded-2xl outline-none border border-[#F4F8FD] focus:border-[#E78C3B]"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                }
              </div>

              <div>
                <h3 className="pb-9 font-clash font-semibold text-[#213F61] text-[20px]">
                  Detail
                </h3>
                <div className="flex flex-col md:flex-row gap-9">
                  <div className="w-full">
                    <div className="w-full">
                      <span className="block pb-4">What are the details?</span>
                      <textarea
                        onChange={handleInputChange}
                        name="details"
                        id=""
                        placeholder="Write your task summery here..."
                        className="w-full max-h-[225px] h-[225px] resize-none bg-[#F4F8FD] py-5 px-[18px] rounded-2xl outline-none border border-[#F4F8FD] focus:border-[#E78C3B]"
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full">
                    <span className="block pb-4">Add images (optional)</span>
                    <div>
                      <div className="w-full flex flex-col gap-3">
                        <div className="focus:bg-[#00a2a4] overflow-hidden relative w-full bg-[#F4F8FD] flex justify-center py-4 rounded-2xl">
                          <input
                            type="file"
                            onChange={handleFileChange}
                            className="absolute top-0 right-0 w-full h-full opacity-0 font-Jost text-[#000000] font-semibold leading-[22px] uppercase border-[1px] border-[#0070D2] rounded-[10px] py-4 px-8 bg-white placeholder:text-[16px] placeholder:font-normal placeholder:capitalize cursor-pointer"
                          />
                          <div
                            className="w-full text-center text-[#A7A7A7] font-Jost text-[16px] md:text-[18px]"
                            onClick={() => {
                              document.getElementById("fileInput").click();
                            }}
                          >
                            <div className="flex flex-col gap-3 items-center py-[50px]">
                              <span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="37"
                                  height="36"
                                  viewBox="0 0 37 36"
                                  fill="none"
                                >
                                  <g clipPath="url(#clip0_283_1350)">
                                    <path
                                      d="M4.65026 2.19171H25.6347C27.9197 2.19171 29.785 4.057 29.785 6.34197V27.9326C29.785 30.2176 27.9197 32.0829 25.6347 32.0829H4.65026C2.36528 32.0829 0.5 30.2176 0.5 27.9326V6.29534C0.5 4.057 2.36528 2.19171 4.65026 2.19171Z"
                                      fill="white"
                                    />
                                    <path
                                      d="M14.0699 21.7306L7.91451 15.5751L0.5 22.9896V24.5285V27.886C0.5 30.171 2.36528 32.0363 4.65026 32.0363H25.6347C27.9197 32.0363 29.785 30.171 29.785 27.886V24.5285V19.9119L22.8368 12.9171L14.0699 21.7306Z"
                                      fill="#213F61"
                                    />
                                    <path
                                      d="M13.8848 14.6892C15.3271 14.6892 16.4962 13.52 16.4962 12.0778C16.4962 10.6355 15.3271 9.46637 13.8848 9.46637C12.4426 9.46637 11.2734 10.6355 11.2734 12.0778C11.2734 13.52 12.4426 14.6892 13.8848 14.6892Z"
                                      fill="#213F61"
                                    />
                                    <path
                                      d="M29.7853 33.8083C33.4939 33.8083 36.5004 30.8019 36.5004 27.0933C36.5004 23.3847 33.4939 20.3782 29.7853 20.3782C26.0767 20.3782 23.0703 23.3847 23.0703 27.0933C23.0703 30.8019 26.0767 33.8083 29.7853 33.8083Z"
                                      fill="#FAFFFB"
                                    />
                                    <path
                                      d="M28.8047 23.9689C28.8047 23.4093 29.2244 22.9896 29.784 22.9896C30.2969 22.9896 30.7632 23.4093 30.7632 23.9689V30.3109C30.7632 30.8705 30.3435 31.2901 29.784 31.2901C29.2244 31.2901 28.8047 30.8705 28.8047 30.3109V23.9689Z"
                                      fill="#213F61"
                                    />
                                    <path
                                      d="M29.0845 24.6217C28.7114 24.2487 28.7114 23.6425 29.0845 23.2694C29.4575 22.8964 30.0638 22.8964 30.4368 23.2694L32.6752 25.5078C33.0482 25.8808 33.0482 26.487 32.6752 26.8601C32.3021 27.2331 31.6959 27.2331 31.3228 26.8601L29.0845 24.6217Z"
                                      fill="#213F61"
                                    />
                                    <path
                                      d="M29.0848 23.2694C29.4578 22.8964 30.0641 22.8964 30.4371 23.2694C30.8102 23.6425 30.8102 24.2487 30.4371 24.6218L28.2454 26.8601C27.8723 27.2332 27.2661 27.2332 26.8931 26.8601C26.52 26.487 26.52 25.8808 26.8931 25.5078L29.0848 23.2694Z"
                                      fill="#213F61"
                                    />
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_283_1350">
                                      <rect
                                        width="36"
                                        height="36"
                                        fill="white"
                                        transform="translate(0.5)"
                                      />
                                    </clipPath>
                                  </defs>
                                </svg>
                              </span>
                              <div>
                                <p className="text-[14px] text-[#475467] mb-1">
                                  <span className="text-[#213F61] font-bold">
                                    Click to upload
                                  </span>{" "}
                                  or drag and drop
                                </p>
                                <p className="text-[14px] text-[#475467]">
                                  SVG, PNG, JPG or GIF (max. 800x400px)
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {selectedFile && (
                        <div className="mt-2 font-Jost text-[14px]">
                          <p>Uploded file: {selectedFile.name}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="pb-9 font-clash font-semibold text-[#213F61] text-[20px]">
                  Budget
                </h3>
                <div className="flex gap-9">
                  <div className="w-full md:w-1/2 p-0 md:pr-5">
                    <div className="w-full">
                      <span className="block pb-4">What is your budget?</span>
                      <input
                        onChange={handleInputChange}
                        name="budget"
                        type="text"
                        className="w-full bg-[#F4F8FD] py-3 md:py-5 px-[18px] rounded-2xl outline-none border border-[#F4F8FD] focus:border-[#E78C3B]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center py-[60px]">
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <button onClick={() => router.back()} className="w-full sm:w-[220px] flex justify-center items-center gap-[10px] py-[21px] px-[20px] bg-[#E78C3B40] rounded-full">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="17"
                      viewBox="0 0 17 17"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_283_1168)">
                        <path
                          d="M15.5383 7.37692C15.4728 7.36629 15.4066 7.36139 15.3403 7.36225H4.05262L4.29875 7.24777C4.53933 7.1339 4.7582 6.97892 4.94556 6.78985L8.1109 3.6245C8.52779 3.22654 8.59783 2.58636 8.2769 2.10765C7.90338 1.59754 7.18706 1.48678 6.67691 1.86031C6.6357 1.8905 6.59652 1.92341 6.55971 1.95883L0.835755 7.68279C0.388428 8.12962 0.388034 8.85445 0.834861 9.30177C0.835147 9.30206 0.835469 9.30238 0.835755 9.30267L6.55971 15.0266C7.0074 15.4731 7.73223 15.4721 8.1787 15.0244C8.21383 14.9891 8.24663 14.9516 8.2769 14.9121C8.59783 14.4334 8.52779 13.7933 8.1109 13.3953L4.95128 10.2242C4.78332 10.0561 4.59021 9.9151 4.37888 9.80638L4.03545 9.65183H15.2773C15.8621 9.67355 16.3752 9.26503 16.4851 8.69021C16.5863 8.06612 16.1624 7.47816 15.5383 7.37692Z"
                          fill="#E78C3B"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_283_1168">
                          <rect
                            width="16"
                            height="16"
                            fill="white"
                            transform="translate(0.5 0.5)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                  <span className="text-[#E78C3B] text-[16px] font-semibold">
                    Back
                  </span>
                </button>

                <button type="submit" className="w-full sm:w-[220px] flex justify-center items-center gap-[10px] bg-[#E78C3B] py-[21px] px-[20px] rounded-full">
                  <span className="text-white text-[16px] font-semibold">
                    Procced task
                  </span>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="17"
                      viewBox="0 0 17 17"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_283_1175)">
                        <path
                          d="M1.46169 9.62308C1.52716 9.63371 1.59341 9.63861 1.6597 9.63775L12.9474 9.63775L12.7013 9.75223C12.4607 9.8661 12.2418 10.0211 12.0544 10.2101L8.8891 13.3755C8.47221 13.7735 8.40217 14.4136 8.7231 14.8923C9.09662 15.4025 9.81294 15.5132 10.3231 15.1397C10.3643 15.1095 10.4035 15.0766 10.4403 15.0412L16.1642 9.31721C16.6116 8.87038 16.612 8.14555 16.1651 7.69823C16.1649 7.69794 16.1645 7.69762 16.1642 7.69733L10.4403 1.97337C9.9926 1.52694 9.26777 1.52794 8.8213 1.97563C8.78617 2.01086 8.75337 2.04836 8.7231 2.08785C8.40217 2.56655 8.47221 3.20674 8.8891 3.6047L12.0487 6.77577C12.2167 6.94391 12.4098 7.0849 12.6211 7.19362L12.9646 7.34817L1.7227 7.34817C1.13789 7.32645 0.62481 7.73496 0.514946 8.30979C0.413739 8.93388 0.837599 9.52184 1.46169 9.62308Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_283_1175">
                          <rect
                            width="16"
                            height="16"
                            fill="white"
                            transform="translate(16.5 16.5) rotate(-180)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </form>

          {/* <div className="bg-white rounded-3xl p-9 border border-[#E78C3B] mt-[30px]">
          <div className="bg-[#FDF4EC] p-6 rounded-2xl md:rounded-full flex items-center gap-4">
            <span className="w-[44px] h-[44px] bg-white flex justify-center items-center rounded-full bbg-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <g clipPath="url(#clip0_423_1796)">
                  <path
                    d="M3 16.58C3.00268 17.2806 3.2549 17.9573 3.71143 18.4888C4.16795 19.0203 4.79891 19.3717 5.4911 19.48C7.64346 19.8261 9.81999 20 12 20C14.1928 20 16.382 19.824 18.5467 19.4739C19.233 19.3616 19.8569 19.0085 20.3064 18.478C20.756 17.9474 21.0019 17.274 21 16.5786C20.9995 16.1987 20.9247 15.8226 20.78 15.4714C20.055 13.6931 19.4601 11.8645 19 10C18.9553 9.8188 18.9123 9.6388 18.8708 9.46C18.5115 7.90719 17.6365 6.52198 16.3887 5.53037C15.1409 4.53877 13.5938 3.99931 12 4C10.4062 3.99931 8.85912 4.53877 7.61129 5.53037C6.36347 6.52198 5.48852 7.90719 5.1292 9.46C5.08773 9.6388 5.04467 9.8188 5 10C4.53991 11.8645 3.94502 13.6931 3.22 15.4714C3.07526 15.8226 3.00053 16.1987 3 16.5786V16.58Z"
                    fill="#E78C3B"
                  />
                  <path
                    d="M3.13601 9.22068L3.18491 9.00388C3.66112 6.92393 4.86004 5.08049 6.56821 3.80178C6.78086 3.64327 6.92184 3.40678 6.96012 3.14433C6.99841 2.88189 6.93087 2.61498 6.77236 2.40233C6.61386 2.18968 6.37737 2.0487 6.11492 2.01042C5.85247 1.97213 5.58556 2.03967 5.37291 2.19818C3.28377 3.76152 1.81732 6.01563 1.23471 8.55908L1.18471 8.77908C1.12629 9.03794 1.17307 9.30941 1.31477 9.53378C1.45646 9.75816 1.68147 9.91707 1.94031 9.97558C2.0129 9.9918 2.08704 9.99998 2.16141 9.99998C2.38815 9.99981 2.6081 9.92259 2.78518 9.78099C2.96227 9.6394 3.08597 9.44182 3.13601 9.22068Z"
                    fill="#213F61"
                  />
                  <path
                    d="M22.815 8.77927L22.7642 8.55567C22.1814 6.01348 20.7153 3.76061 18.627 2.19817C18.5217 2.11969 18.402 2.06271 18.2747 2.0305C18.1473 1.99828 18.0149 1.99146 17.885 2.01041C17.755 2.02937 17.6301 2.07374 17.5173 2.14098C17.4045 2.20823 17.306 2.29703 17.2275 2.40232C17.149 2.50762 17.0921 2.62734 17.0599 2.75465C17.0276 2.88197 17.0208 3.01438 17.0398 3.14433C17.0587 3.27428 17.1031 3.39922 17.1703 3.51203C17.2376 3.62483 17.3264 3.72329 17.4317 3.80177C19.139 5.0796 20.3376 6.92179 20.8141 9.00047L20.8641 9.22047C20.9141 9.44162 21.0377 9.63922 21.2148 9.78085C21.3918 9.92248 21.6118 9.99975 21.8385 9.99997C21.913 10 21.9873 9.99183 22.0601 9.97557C22.3188 9.91691 22.5436 9.75796 22.6851 9.53365C22.8266 9.30934 22.8734 9.03801 22.815 8.77927Z"
                    fill="#213F61"
                  />
                  <path
                    d="M19.9707 9.7593L19.8447 9.2344C19.5552 7.97013 18.9631 6.79506 18.1192 5.81015C17.2753 4.82523 16.2049 4.05993 15 3.58V3C15 2.20435 14.6839 1.44129 14.1213 0.87868C13.5587 0.31607 12.7957 0 12 0C11.2044 0 10.4413 0.31607 9.8787 0.87868C9.31609 1.44129 9.00002 2.20435 9.00002 3V3.58C7.79509 4.05993 6.72469 4.82523 5.88082 5.81014C5.03694 6.79505 4.44481 7.97013 4.15532 9.2344L4.02932 9.7603C3.58019 11.5778 3.00008 13.3605 2.29352 15.0942C2.06813 15.6441 1.97043 16.2379 2.00776 16.831C2.0451 17.4241 2.2165 18.001 2.50906 18.5183C2.80162 19.0355 3.20772 19.4797 3.69679 19.8173C4.18585 20.1549 4.74513 20.3771 5.33252 20.4673C6.24252 20.6136 7.16162 20.7226 8.08252 20.8088C8.26861 21.7103 8.7599 22.5199 9.47353 23.1013C10.1872 23.6827 11.0795 24.0001 11.9999 24.0001C12.9204 24.0001 13.8127 23.6827 14.5263 23.1013C15.2399 22.5199 15.7312 21.7103 15.9173 20.8088C16.8515 20.7214 17.7832 20.6103 18.7064 20.4611C19.2897 20.3656 19.8439 20.1397 20.3278 19.8002C20.8117 19.4608 21.2127 19.0165 21.5011 18.5006C21.7894 17.9846 21.9576 17.4103 21.9932 16.8203C22.0287 16.2303 21.9307 15.6399 21.7064 15.093C20.9998 13.3594 20.4197 11.5768 19.9707 9.7593ZM11 3C11 2.73478 11.1054 2.48043 11.2929 2.29289C11.4804 2.10536 11.7348 2 12 2C12.2652 2 12.5196 2.10536 12.7071 2.29289C12.8947 2.48043 13 2.73478 13 3V3.0681C12.3364 2.9773 11.6636 2.9773 11 3.0681V3ZM12 22C11.6433 21.9988 11.2934 21.9018 10.9869 21.7193C10.6805 21.5368 10.4286 21.2753 10.2576 20.9622C10.8392 20.9865 11.42 20.9991 12 21C12.58 21.0009 13.1608 20.9884 13.7423 20.9625C13.5713 21.2755 13.3194 21.5369 13.013 21.7194C12.7065 21.9019 12.3567 21.9988 12 22ZM18.3872 18.4868C14.1688 19.1655 9.8691 19.1675 5.65002 18.4927C5.1919 18.4234 4.7737 18.1925 4.47106 17.8417C4.16842 17.4909 4.00133 17.0433 4.00002 16.58C4.00079 16.3295 4.0502 16.0806 4.14552 15.849C4.88865 14.0261 5.49865 12.1517 5.97072 10.2406L6.10352 9.6864C6.41225 8.35391 7.1632 7.16527 8.23398 6.31422C9.30476 5.46317 10.6322 4.99989 12 4.99989C13.3678 4.99989 14.6953 5.46317 15.7661 6.31422C16.8368 7.16527 17.5878 8.35391 17.8965 9.6864L18.0293 10.2396C18.5011 12.1507 19.111 14.0251 19.854 15.848C19.9648 16.1162 20.0136 16.406 19.9968 16.6957C19.98 16.9854 19.8981 17.2675 19.7571 17.5212C19.6161 17.7748 19.4197 17.9933 19.1825 18.1605C18.9453 18.3277 18.6735 18.4393 18.3872 18.4868Z"
                    fill="#213F61"
                  />
                  <path
                    d="M16.6158 14.0771C15.1527 14.6834 13.5845 14.9955 12.0008 14.9955C10.417 14.9955 8.84882 14.6834 7.38575 14.0771C7.14131 13.9767 6.86706 13.9772 6.62294 14.0783C6.37883 14.1795 6.18469 14.3732 6.08295 14.6171C5.9812 14.861 5.98014 15.1352 6.07997 15.3799C6.17981 15.6246 6.37243 15.8198 6.61575 15.9229C8.32203 16.634 10.1522 17.0001 12.0008 17.0001C13.8493 17.0001 15.6795 16.634 17.3858 15.9229C17.5077 15.8728 17.6185 15.7992 17.7118 15.7061C17.8052 15.6131 17.8792 15.5025 17.9296 15.3808C17.9801 15.259 18.006 15.1285 18.0059 14.9967C18.0057 14.8649 17.9795 14.7345 17.9288 14.6129C17.878 14.4912 17.8038 14.3808 17.7102 14.288C17.6167 14.1952 17.5057 14.1218 17.3837 14.072C17.2616 14.0222 17.131 13.997 16.9992 13.9979C16.8674 13.9988 16.7371 14.0257 16.6158 14.0771Z"
                    fill="#213F61"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_423_1796">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </span>
            <span className="font-clash text-[16px] md:text-[20px] font-medium text-[#213F61]">
              After analyzing with AI we recommend you to fill-up some extra
              information to get quality talent
            </span>
          </div>
          <div className="flex flex-col gap-9 bg-white rounded-2xl mt-10">
            <div className="flex flex-col md:flex-row gap-9">
              <div className="w-full md:w-1/2">
                <h3 className="pb-9 font-clash font-semibold text-[#213F61] text-[20px]">
                  Business industry
                </h3>
                <div className="flex flex-col gap-5">
                  <div>
                    <span className="block pb-4">
                      Tell us about your business industry?
                    </span>
                    <div>
                      <input
                        type="text"
                        className="w-full bg-[#F4F8FD] py-5 px-[18px] rounded-2xl outline-none border border-[#F4F8FD] focus:border-[#E78C3B]"
                      />
                    </div>
                  </div>
                  <div>
                    <span className="block pb-4">
                      How much your industry grow in a year?
                    </span>
                    <div>
                      <input
                        type="text"
                        className="w-full bg-[#F4F8FD] py-5 px-[18px] rounded-2xl outline-none border border-[#F4F8FD] focus:border-[#E78C3B]"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-1/2">
                <h3 className="pb-9 font-clash font-semibold text-[#213F61] text-[20px]">
                  Targets audience
                </h3>
                <div className="flex flex-col gap-5">
                  <div>
                    <span className="block pb-4">
                      Tell us about your targets audience
                    </span>
                    <div>
                      <input
                        type="text"
                        className="w-full bg-[#F4F8FD] py-5 px-[18px] rounded-2xl outline-none border border-[#F4F8FD] focus:border-[#E78C3B]"
                      />
                    </div>
                  </div>
                  <div>
                    <span className="block pb-4">
                      Do you research about your audience behavior pattern?
                    </span>
                    <div>
                      <input
                        type="text"
                        className="w-full bg-[#F4F8FD] py-5 px-[18px] rounded-2xl outline-none border border-[#F4F8FD] focus:border-[#E78C3B]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}


        </div>
      </div>
    </>
  );
}
