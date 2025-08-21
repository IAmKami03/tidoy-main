import React from "react";
import circle from "../../assets/Images/check_circle.png";

const BookingSuccess = () => {
  return (
    <div className="px-4 pt-4 pb-[34px] bg-[#FBFBFB]">
      <div className="px-4 py-[24px] bg-[#FFFFFF] flex flex-col gap-[28px] rounded-[16px] border border-[#EDF1F5]">
        <div className="flex flex-col items-center justify-center">
          <img src={circle} alt="" />
          <h2 className="font-bold text-[20px] text-[#2D2E2E]">
            Payment Success
          </h2>
        </div>

        {/* ====================== */}
        <hr className="text-[#DCE0E4]" />

        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-1.5">
            <h3 className="font-bold text-[12px] text-[#2D2E2E]">
              Villa Family Resort Dago Pakar
            </h3>
            <p className="font-normal text-[12px] text-[#747677]">
              Dago Pakar, Bandung
            </p>
          </div>

          <div className="flex flex-col gap-1.5">
            <h3 className="font-bold text-[12px] text-[#2D2E2E]">Room</h3>
            <p className="font-normal text-[12px] text-[#747677]">
              4 room, 2 Guests
            </p>
          </div>

          <div className="flex flex-col gap-1.5">
            <h3 className="font-bold text-[12px] text-[#2D2E2E]">
              31 Mar - 1 Apr 2024
            </h3>
            <p className="font-normal text-[12px] text-[#747677]">1 Guests</p>
          </div>

          <div className="flex flex-col gap-1.5">
            <h3 className="font-bold text-[12px] text-[#2D2E2E]">John Doe</h3>
            <p className="font-normal text-[12px] text-[#747677]">
              johndoe@gmail.com
            </p>
            <p className="font-normal text-[12px] text-[#747677]">
              +62 896 000 000
            </p>
          </div>
        </div>

        <hr className="text-[#DCE0E4]" />

        <div className="w-full flex flex-col gap-[8px]">
          <button className="bg-[#FF9A01] p-4 text-[16px] font-bold text-[#FFFFFF] rounded-[16px]">
            View Reservation
          </button>
          <button className="bg-[#FFFFFF] p-4 text-[16px] font-bold text-[#2D2E2E] border border-[#DCE0E4] rounded-[16px]">
            Back to home
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingSuccess;
