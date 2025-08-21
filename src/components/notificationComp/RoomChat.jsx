import React from "react";
import Arrow from "../../assets/Images/arrow_left.png";
import Adalline from "../../assets/Images/Avatars Base.png";
import Verified from "../../assets/Images/Vector (1).png";
import phone from "../../assets/Images/Icons.png";
import Booking from "../../assets/Images/Image.png";
import star from "../../assets/Images/star.png";

const RoomChat = () => {
  return (
    <div className="flex flex-col items-center  bg-[#FBFBFB] pb-20">
      <div className="w-[375px]">
        <div className="flex items-center p-4 justify-between h-[72px]">
          <img src={Arrow} className="w-[24px]h-[24px] mr-3" />
          <div className="flex p-1 gap-3 mb-2 rounded-lg w-[343px]">
            <img
              src={Adalline}
              className="w-[30px] h-[30px] rounded-full object-cover mt-[10px]"
            />
            <div className="flex-1 ">
              <div className="flex justify-between items-center w-full">
                <div className="flex items-center gap-1">
                  <h1 className="font-bold text-[#2D2E2E]  w-[106px] h-[24px] text-[16px] leading-[24px] ">
                    Adaline Alexa
                  </h1>
                  <img src={Verified} className="w-4 h-4 shrink-0" />
                </div>
              </div>
              <div className="flex items-start justify-between mt-1">
                <p className="text-[12px] leading-[16px] text-gray-600  max-w-[70%]">
                  Property Owner
                </p>
                <img
                  src={phone}
                  className="w-[30px] h-[30px] mt-[-18px] ml-auto mr-[5px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full max-w-[375px] px-4 mt-2 border-[#EDF1F5] p-4">
        <div className="flex items-start w-full h-[102px] border border-[#EDF1F5] ml-[-30px] rounded-lg ">
          <img
            src={Booking}
            className="w-[82px] h-[102px] object-cover rounded-l-lg"
          />
          <div className="flex-1 p-3  h-full flex flex-col justify-between">
            <div>
              <h3 className="font-bold text-[12px] leading-[16px] text-[#2D2E2E]">
                Villa Family Resort Dago Pakar
              </h3>
              <p className="text-[10px] text-[#A6A9AC] leading-[14px] mt-1">
                Dago Pakar, Bandung
              </p>
            </div>
            <div className="flex items-center gap-1.5">
              <img src={star} className="w-3 h-3" />
              <p className="text-[10px] text-[#747677] leading-[14px]">
                4.8 (21 Reviews)
              </p>
            </div>
            <p className="text-[14px] font-bold leading-[20px] text-[#2D2E2E]">
              $152
              <span className="text-[10px] text-[#A6A9AC] ml-0.5">/night</span>
            </p>
          </div>
        </div>
      </div>

      <div className="w-full max-w-[375px] px-4 mt-4 space-y-4">
        <div className="flex justify-end mr-[-30px]">
          <div
            className="bg-[#0167FF] text-white p-3 rounded-tl-[12px] rounded-tr-[12px] rounded-bl-[12px] 
      w-[242px] h-[78px] flex flex-col justify-between mt-[-16px]"
          >
            <p className="text-[13px] leading-[16px]">
              Hi, for this hotel with a king sweet room are there still any
              vacancies?
            </p>

            <div className="flex justify-end">
              <span className="text-[10px] text-[#DCE0E4]">16:50 · Read</span>
            </div>
          </div>
        </div>
        <div className="flex justify-start ml-[-30px]">
          <div className="bg-[#DCE0E4] text-black p-3 rounded-tl-[12px] rounded-tr-[12px] rounded-br-[12px] w-[217px] h-[78px] flex flex-col">
            <p className="text-[14px] leading-[20px] h-[40px] w-[222px] ">
              Hi, Yes the room is available, so can make an order
            </p>
            <div className="flex justify-end">
              <span className="text-[10px] text-[#747677]">16:50</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomChat;
