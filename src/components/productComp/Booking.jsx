import React from "react";
import { Link } from "react-router-dom";
import image from "../../assets/Images/booking-resort.png";
import star from "../../assets/Images/V (1).png";
import room from "../../assets/Images/king_bed.png";
import bath from "../../assets/Images/bathtub.png";
import home from "../../assets/Images/home.png";
import chevron from "../../assets/Images/arrow_left.png";
import promo from "../../assets/Images/local_offer.png";
import chevronRight from "../../assets/Images/chevron_right.png";

const Booking = () => {
  return (
    <div>
      <div className="px-4 pt-4 bg-[#FBFBFB] flex flex-col gap-[10px]">
        <div className="flex p-4 bg-[#FFFFFF] items-center">
          <Link to="/product">
            <img src={chevron} alt="" />
          </Link>
          <div className="p">
            <h2 className="font-bold text-[14px] text-[#2D2E2E] p-[18px]">
              Request booking
            </h2>
          </div>
        </div>

        {/* ========================== */}

        <div className="flex items-center border border-[#DCE0E4] rounded-[12px] bg-[#FFFFFF]">
          <img src={image} alt="" className="rounded-l-[12px] h-[172px]" />
          <div className="flex flex-col gap-5 p-1.5">
            <div className="flex flex-col gap-1.5">
              <h3 className="font-bold text-[16px] text-[#2D2E2E] leading-[24px]">
                Villa Family Resort Dago Pakar
              </h3>
              <p className="font-normal text-[10px] text-[#A6A9AC]">
                Dago Pakar, Bandung
              </p>
              <div className="flex items-center">
                <img src={star} alt="" />
                <p className="font-normal text-[10px] text-[#2D2E2E]">
                  4.8 <span className="text-[#A6A9AC]">(21 Review)</span>
                </p>
              </div>

              <div className="flex gap-3">
                <div className="flex items-center gap-2">
                  <img src={room} alt="" />
                  <p className="font-normal text-[10px] text-[#A6A9AC]">
                    4 room
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <img src={bath} alt="" />
                  <p className="font-normal text-[10px] text-[#A6A9AC]">
                    {" "}
                    2 bath
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <img src={home} alt="" />
                  <p className="font-normal text-[10px] text-[#A6A9AC]">
                    42.0 m2
                  </p>
                </div>
              </div>
            </div>

            <div className="flex">
              <h3 className="font-bold text-[18px] text-[#2D2E2E] ">$152 </h3>
              <p className="font-normal text-[12px] text-[#858789] pt-[3px]">
                /night
              </p>
            </div>
          </div>
        </div>

        {/* ==================================== */}

        <div className="px-4 pt-4 border border-[#DCE0E4] rounded-[12px] bg-[#FFFFFF]">
          <h3 className="font-bold text-[14px] text-[#2D2E2E] pb-4">
            Your Booking
          </h3>

          <div className="border-t border-[#DCE0E4] flex flex-col gap-4 py-4">
            <div className="flex justify-between items-center">
              <div className="flex flex-col gap-1">
                <h3 className="font-bold text-[12px] text-[#2D2E2E]">
                  Check-in
                </h3>
                <p className="font-medium text-[10px] text-[#747677]">
                  31 Mar 2024
                </p>
              </div>
              <p className="font-semibold text-[10px] text-[#2D2E2E] underline">
                Change
              </p>
            </div>

            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-bold text-[12px] text-[#2D2E2E]">
                  Checkout
                </h3>
                <p className="font-medium text-[10px] text-[#747677]">
                  1 April 2024
                </p>
              </div>
              <p className="font-semibold text-[10px] text-[#2D2E2E] underline">
                Change
              </p>
            </div>

            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-bold text-[12px] text-[#2D2E2E]">Guest</h3>
                <p className="font-medium text-[10px] text-[#747677]">
                  1 guest
                </p>
              </div>
              <p className="font-semibold text-[10px] text-[#2D2E2E] underline">
                Change
              </p>
            </div>
          </div>
        </div>

        {/* ===================================== */}

        <div className="px-4 pt-4 border border-[#DCE0E4] rounded-[12px] bg-[#FFFFFF]">
          <h3 className="font-bold text-[14px] text-[#2D2E2E] pb-4">
            Price details
          </h3>

          <div className="border-t border-[#DCE0E4] flex flex-col gap-4 py-4">
            <div className="flex justify-between items-center">
              <p className="font-semibold text-[10px] text-[#747677]">Price</p>
              <p className="font-semibold text-[10px] text-[#747677]">
                $152.00 x 1/night
              </p>
            </div>

            <div className="flex justify-between items-center">
              <p className="font-medium text-[10px] text-[#747677]">
                Service fee
              </p>
              <p className="font-semibold text-[10px] text-[#747677]">$2.00</p>
            </div>

            <div className="flex justify-between items-center">
              <h3 className="font-bold text-[12px] text-[#2D2E2E]">
                Total price
              </h3>
              <p className="font-semibold text-[10px] text-[#2D2E2E]">
                $154.00
              </p>
            </div>
          </div>
        </div>

        {/* ======================= */}

        <div className="px-4 pt-4 border border-[#DCE0E4] rounded-[12px] bg-[#FFFFFF]">
          <div className="flex justify-between">
            <h3 className="font-bold text-[14px] text-[#2D2E2E] pb-4">Promo</h3>
            <p className="font-semibold text-[10px] text-[#2D2E2E]] underline">
              Show code
            </p>
          </div>

          <div className="border-t border-[#DCE0E4] flex flex-col gap-4 py-4">
            <div className="flex items-center border border-[#DCE0E4] rounded-[12px] p-4 gap-2">
              <img src={promo} alt="" />
              <p className="font-semibold text-[14px] text-[#DCE0E4] w-[223px]">
                Select Promo
              </p>
              <img src={chevronRight} alt="" />
            </div>
          </div>
        </div>

        {/* ========================== */}

        <div className="px-4 pt-4 border border-[#DCE0E4] rounded-[12px] bg-[#FFFFFF]">
          <h3 className="font-bold text-[14px] text-[#2D2E2E] pb-4">
            Pay with
          </h3>

          <div className="border-t border-[#DCE0E4] flex flex-col gap-4 py-4">
            <div className="flex items-center border border-[#DCE0E4] rounded-[12px] p-4 gap-5">
              <p className="font-semibold text-[14px] text-[#DCE0E4] w-[223px]">
                Select Methode
              </p>
              <img src={chevronRight} alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* ============================ */}

      <div className="flex justify-between p-4 border-t border-t-[#EDF1F5]">
        <div className="flex flex-col">
          <p className="font-normal text-[12px] text-[#858789]">Total amount</p>
          <div className="flex">
            <h3 className="font-bold text-[18px] text-[#2D2E2E] ">$152 </h3>
          </div>
        </div>
        <button className="font-bold text-[16px] text-[#FFFFFF] bg-[#C3C7CA] py-2 px-10 rounded-[16px] w-[148px]">
          Pay now
        </button>
      </div>
    </div>
  );
};

export default Booking;
