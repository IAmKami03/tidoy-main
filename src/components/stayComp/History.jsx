import React from "react";
import blue from "../../assets/Images/ForS.png"
import white from "../../assets/Images/ForS (1).png"
import str from "../../assets/Images/V (1).png"

const History = () => {
  return (
    <div className="flex flex-col mt-[44px] gap-[10px] p-4">
      <div className="h-[82px]">
        <div className="flex flex-row w-[343px] p-1 h-[50px] justify-center gap-[10px] bg-[#EDF1F5] rounded-full">
          <div className="flex w-[161.5px] justify-center">
            <button className="text-[14px] font-medium text-[#2D2E2E]">
              On Going
            </button>
          </div>
          <div className="flex w-[161.5px] bg-[#2D2E2E] rounded-full justify-center py-2 px-3">
            <button className="text-[14px] font-medium text-[#FFFFFF]">
              History
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-row border border-[#EDF1F5] rounded-lg items-center">
        <div>
          <img src={blue} alt="" className="rounded-l-xl h-[196px]" />
        </div>
        <div className=" flex flex-col p-3 gap-3">
          <div className="flex flex-col gap-2">
            <div className="bg-[#D8FAE4] py-1 px-3 rounded-sm w-[70px] h-[22px]">
              <p className="text-[10px] text-[#01C448] font-normal">Complete</p>
            </div>
            <div>
              <p className="text-[#2D2E2E] text-[16px] font-bold">
                Villa Family Resort Dago Pakar
              </p>
              <p className="text-[#A6A9AC] text-[10px] font-normal">
                Dago Pakar, Bandung
              </p>
            </div>
            <div className="flex flex-row items-center gap-1">
              <img src={str} alt="" />
              <div>
                <p className="text-[10px] font-normal text-[#2D2E2E]">
                  4.8 <span className="text-[#A6A9AC]">(21 Review)</span>
                </p>
              </div>
            </div>
          </div>
          <button className="bg-[#FF9A01] w-[205px] text-[12px] text-[#FFFFFF] font-bold h-[40px] p-full rounded-lg">
            Stay again
          </button>
        </div>
      </div>

      <div className="flex flex-row border border-[#EDF1F5] rounded-lg items-center">
        <div>
          <img src={white} alt="" className="rounded-l-xl h-[196px]" />
        </div>
        <div className=" flex flex-col p-3 gap-3">
          <div className="flex flex-col gap-2">
            <div className="bg-[#FBD2DC] py-1 px-3 rounded-sm w-[59px] h-[22px]">
              <p className="text-[10px] text-[#ED1F4F] font-normal">Expired</p>
            </div>
            <div className="flex flex-col gap-1 h-[66px]">
              <p className="text-[#2D2E2E] text-[16px] font-bold">
                Lembang House
              </p>
              <p className="text-[#A6A9AC] text-[10px] font-normal">
                Dago Pakar, Bandung
              </p>
            </div>
            <div className="flex flex-row items-center gap-1">
              <img src={str} alt="" />
              <div>
                <p className="text-[10px] font-normal text-[#2D2E2E]">
                  4.8 <span className="text-[#A6A9AC]">(21 Review)</span>
                </p>
              </div>
            </div>
          </div>
          <button className="bg-[#FF9A01] w-[205px] text-[12px] text-[#FFFFFF] font-bold h-[40px] p-full rounded-lg">
            Reorder
          </button>
        </div>
      </div>
    </div>
  );
};

export default History;
