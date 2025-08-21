import React from "react";
import arrleft from "../../assets/Images/arrow_left.png";
import bali from "../../assets/Images/National_Theater_in_Lagos_State-Nigeria.jpg";
import karta from "../../assets/Images/Abuja-city-FCT.webp";
import bandung from "../../assets/Images/Cross-River.webp";
import jakarta from "../../assets/Images/Kano_State_Nigeria.webp";
import sema from "../../assets/Images/ENUGU.jpg";
import raja from "../../assets/Images/OSUN.jpg";

const FeatureDestination = ({ setScreen }) => {
  return (
    <div>
      <div className="p-4 gap-4 flex items-center">
        <img src={arrleft} alt="" onClick={() => setScreen("full")} />
        <h2 className="font-bold text-[14px] text-[#2D2E2E]">
          Featured Destination
        </h2>
      </div>

      <div className="grid grid-cols-2 px-4 pt-3 pb-2 gap-3">
        <div className="relative">
          <img
            src={bali}
            alt=""
            className="relative rounded-lg w-[165px] h-[234px] object-cover"
            onClick={() => setScreen("view")}
          />
          <div className="absolute bottom-2 left-2 flex flex-col items-start">
            <h2 className="text-[16px] font-bold text-[#FFFFFF]">
              Lagos, Nigeria
            </h2>
            <p className="text-[10px] font-normal text-[#C3C7CA]">
              167 Recommend Stay
            </p>
          </div>
        </div>

        <div className="relative">
          <img
            src={karta}
            alt=""
            className="relative rounded-lg w-[165px] h-[234px] object-cover"
          />
          <div className="absolute bottom-2 left-2 flex flex-col items-start">
            <h2 className="text-[16px] font-bold text-[#FFFFFF]">
              Abuja, Nigeria
            </h2>
            <p className="text-[10px] font-normal text-[#C3C7CA]">
              167 Recommend Stay
            </p>
          </div>
        </div>

        <div className="relative">
          <img
            src={bandung}
            alt=""
            className="relative rounded-lg w-[165px] h-[234px] object-cover"
          />
          <div className="absolute bottom-2 left-2 flex flex-col items-start">
            <h2 className="text-[16px] font-bold text-[#FFFFFF]">
              Cross River, Nigeria
            </h2>
            <p className="text-[10px] font-normal text-[#C3C7CA]">
              167 Recommend Stay
            </p>
          </div>
        </div>

        <div className="relative">
          <img
            src={jakarta}
            alt=""
            className="relative rounded-lg w-[165px] h-[234px] object-cover"
          />
          <div className="absolute bottom-2 left-2 flex flex-col items-start">
            <h2 className="text-[16px] font-bold text-[#FFFFFF]">
              Kano, Nigeria
            </h2>
            <p className="text-[10px] font-normal text-[#C3C7CA]">
              167 Recommend Stay
            </p>
          </div>
        </div>

        <div className="relative">
          <img
            src={sema}
            alt=""
            className="relative rounded-lg w-[165px] h-[234px] object-cover"
          />
          <div className="absolute bottom-2 left-2 flex flex-col items-start">
            <h2 className="text-[16px] font-bold text-[#FFFFFF]">
              Enugu, Nigeria
            </h2>
            <p className="text-[10px] font-normal text-[#C3C7CA]">
              167 Recommend Stay
            </p>
          </div>
        </div>

        <div className="relative">
          <img
            src={raja}
            alt=""
            className="relative rounded-lg w-[165px] h-[234px] object-cover"
          />
          <div className="absolute bottom-2 left-2 flex flex-col items-start">
            <h2 className="text-[16px] font-bold text-[#FFFFFF]">
              Osun, Nigeria
            </h2>
            <p className="text-[10px] font-normal text-[#C3C7CA]">
              167 Recommend Stay
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureDestination;
