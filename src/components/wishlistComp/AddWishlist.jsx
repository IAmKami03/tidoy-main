import React from "react";
import grab from "../../assets/Images/Grabber.png";
import cross from "../../assets/Images/close.png";
import fors from "../../assets/Images/Fors2024.png";
import water from "../../assets/Images/Water.png";
import plus from "../../assets/Images/Vector 56.png";

const AddWishlist = () => {
  return (
    <div className="px-4 pt-2 rounded-t-4xl h-[359px] flex flex-col gap-5">
      <div className="flex flex-col items-center h-[73px] w-[343px] gap-[40px]">
        <img src={grab} alt="" />
        <div className="flex flex-row items-center w-[343px] justify-between">
          <p className="text-[18px] text-[#2D2E2E] font-bold">Add Wishlist</p>
          <img src={cross} alt="" />
        </div>
      </div>

      <div className="flex flex-row gap-6">
        <div className="flex flex-col gap-1">
          <div className="w-[164px] grid grid-cols-2 border-[4px] border-[#EDF1F5] rounded-xl">
            <img
              src={fors}
              alt=""
              className="w-[82px] h-[82px] border-[4px] border-[#EDF1F5]"
            />
            <img
              src={water}
              alt=""
              className="w-[82px] h-[82px] border-[4px] border-[#EDF1F5]"
            />
            <img
              src=""
              alt=""
              className="w-[82px] h-[82px] border-[4px] border-[#EDF1F5]"
            />
            <img
              src=""
              alt=""
              className="w-[82px] h-[82px] border-[4px] border-[#EDF1F5]"
            />
          </div>

          <div>
            <p className="text-[#2D2E2E] text-[14px] font-medium">
              Wishlist 2024
            </p>
            <p className="text-[#595A5B] text-[12px]">2 Saved</p>
          </div>
        </div>

        <div className="w-[163px] h-[164px] border-[4px] bg-[#EDF1F5] border-[#FFFFFF] items-center flex flex-col justify-center">
          <img src={plus} alt="" />
          <p className="text-[#747677] font-medium text-[14px]">Add New</p>
        </div>
      </div>
    </div>
  );
};

export default AddWishlist;
