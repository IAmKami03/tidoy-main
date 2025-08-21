import React from "react";
import Arrow from "../../assets/Images/arrow_left.png";
import Booking from "../../assets/Images/Booking.png";
import SpecialOffer from "../../assets/Images/duck.png";
import Verified from "../../assets/Images/verified.png";
import ReviewRequest from "../../assets/Images/Badge Icon.png";
import { useNavigate } from "react-router-dom";

const NotificationComp = () => {
  const navigate = useNavigate()
  return (
    <div className="w-[375px] mt-[-10px] ml-[-30px] bg-[#FBFBFB]">
      <div className="flex items-center p-4 mb-[20px]">
        <img onClick={() => navigate("/home")} src={Arrow} className="w-6 h-6 mr-3" />
        <h2 className="font-bold text-[16px] text-[#2D2E2E]">Notification</h2>
      </div>

      <div className="px-4 pb-4">
        <div className="flex p-3 gap-4 mb-3 bg-white border border-[#EDF1F5] rounded-lg">
          <img src={Booking} className="w-[76px] h-[76px]" />
          <div className="flex-1 min-w-0">
            <div className="flex justify-between items-start w-full">
              <h3 className="font-bold text-[14px] text-[#2D2E2E]">
                Booking Confirmation
              </h3>
              <span className="text-[10px] text-[#747677] w-[50px] text-right">
                4/4/24
              </span>
            </div>
            <p className="text-[12px] text-[#747677] leading-[16px] mt-1">
              Your booking at [Hotel Name] is confirmed! Check-in details inside
            </p>
          </div>
        </div>

        <div className="flex p-3 gap-4 mb-3 bg-[#EDF1F566] border border-[#EDF1F5] rounded-lg">
          <img src={SpecialOffer} className="w-[76px] h-[76px]" />
          <div className="flex-1">
            <div className="flex justify-between items-start w-full">
              <div className="flex items-center gap-1">
                <img src={Verified} className="w-4 h-4" />
                <h3 className="font-bold text-[14px] text-[#2D2E2E]">
                  Special Offer
                </h3>
              </div>
              <span className="text-[10px] text-[#747677] w-[50px] text-right">
                4/4/24
              </span>
            </div>
            <p className="text-[12px] text-[#747677] leading-[16px] mt-1">
              Hi, we have good news for you! Get 50% off all products in our
              store. This promo is valid for a limited time, so don't miss out.
            </p>
          </div>
        </div>

        <div className="flex p-3 gap-4 bg-white border border-[#EDF1F5] rounded-lg">
          <div className=" flex items-center justify-center">
            <img src={ReviewRequest} className="w-[76px] h-[76px]" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex justify-between items-start w-full">
              <h3 className="font-bold text-[14px] text-[#2D2E2E]">
                Review Request
              </h3>
              <span className="text-[10px] text-[#747677] w-[50px] text-right">
                4/4/24
              </span>
            </div>
            <p className="text-[12px] text-[#747677] leading-[16px] mt-1">
              How was your stay? Share your feedback and help us improve!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationComp;
