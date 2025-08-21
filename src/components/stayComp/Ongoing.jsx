import React from "react";
import first from "../../assets/Images/Image.png";
import location from "../../assets/Images/stay-location.png";
import arrow from "../../assets/Images/Vector (1).png";
import second from "../../assets/Images/Image 2.png";

const Ongoing = () => {
  return <div className="px-[16px] flex flex-col gap-[10px] mb-[40px]">
        <div className="mt-[44px]">
          <div className="h-[82px]">
            <div className="flex flex-row w-[343px] p-1 h-[50px] justify-center gap-[10px] bg-[#EDF1F5] rounded-full">
              <div className="flex w-[161.5px] bg-[#2D2E2E] rounded-full justify-center py-2 px-3">
                <button className="text-[14px] font-medium text-[#FFFFFF]">
                  On Going
                </button>
              </div>
              <div className="flex w-[161.5px] justify-center">
                <button className="text-[14px] font-medium text-[#2D2E2E]">
                  History
                </button>
              </div>
            </div>
          </div>
  
          <div>
            <div className="relative">
              <div className="absolute bg-[#D8FAE4] text-[#01C448] text-[10px] font-normal rounded py-1 px-3 right-[15px] top-[12px]">
                <p>Paid</p>
              </div>
              <img src={first} alt="" className="rounded-t-xl" />
            </div>
  
            <div className="flex flex-col gap-4 items-center py-3 px-4">
              <div className="mt-[20px] w-[311px] h[56px] mx-auto flex flex-col gap-[8px]">
                <h5 className="text-[20px] font-bold text-[#2D2E2E]">
                  Villa Family Resort Dago Pakar
                </h5>
                <div className="flex flex-row justify-between items-center">
                  <div className="flex flex-row items-center gap-[8px]">
                    <img src={location} alt="" />
                    <p className="text-[14px] text-[#595A5B] font-normal">
                      Dago Pakar, Bandung
                    </p>
                  </div>
                  <p className="text-[10px] text-[#2D2E2E] underline font-semibold">
                    View location
                  </p>
                </div>
              </div>
              <div className="bg-[#EDF1F5] flex flex-row gap-[61px] items-center justify-center w-[311px] p-4 rounded-md">
                <div>
                  <p className="text-[#747677] text-[10px] font-normal">
                    Checkin
                  </p>
                  <p className="text-[#2D2E2E] text-[12px] font-normal">
                    30Mar, 2024
                  </p>
                </div>
  
                <div>
                  <img src={arrow} alt="" />
                </div>
  
                <div>
                  <p className="text-[#747677] text-[10px] font-normal">
                    Checkout
                  </p>
                  <p className="text-[#2D2E2E] text-[12px] font-normal">
                    01Apr, 2024
                  </p>
                </div>
              </div>
            </div>
  
            <div className="h-68px flex flex-row gap-2 pb-4 pt-3 px-4">
              <div className="h-[40px] w-[149.5px] border-[1px] border-[#DCE0E4] flex justify-center rounded-lg">
                <button className="text-[12px] text-[#2D2E2E] font-bold">
                  Cancel Booking
                </button>
              </div>
              <div className="h-[40px] w-[149.5px] rounded-lg bg-[#FF9A01] flex justify-center">
                <button className="text-[12px] text-[#FFFFFF] font-bold">
                  Chat
                </button>
              </div>
            </div>
          </div>
        </div>
  
        <div className="relative">
          <div className="absolute bg-[#D8FAE4] text-[#01C448] text-[10px] font-normal rounded py-1 px-3 right-[15px] top-[12px]">
            <p>Paid</p>
          </div>
          <img src={second} alt="" className="rounded-t-xl" />
        </div>
      </div>;
};

export default Ongoing;
