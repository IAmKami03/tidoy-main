import React from "react";
import xxx from "../../assets/Images/close.png";
import grab from "../../assets/Images/Grabber.png";

const CreateWishlist = () => {
  return (
    <div className="px-4 pt-2 flex flex-col gap-[20px] pb-6 rounded-t-4xl mt-[228px]">
      <div className="flex flex-col gap-[40px] items-center">
        <img src={grab} alt="" className="" />
        <div className="flex flex-row items-center w-[343px] justify-between">
          <p className="text-[18px] text-[#2D2E2E] font-bold tracking-wide h-[28px]">
            Create Wishlist
          </p>
          <img src={xxx} alt="" />
        </div>
      </div>

      <div className="flex flex-col gap-[24px]">
        <div className="flex flex-col gap-[6px]">
          <p className="text-[#2D2E2E] font-medium text-[14px] tracking-[2%]">
            Name Wishlist
          </p>
          <input
            type="text"
            placeholder="Ex : Wishlist 2024"
            className="border border-[#DCE0E4] rounded-xl w-[343px] h-[48px] px-3 py-2 placeholder:text-[#A6A9AC] placeholder:text-[16px] font-medium tracking-[1px]"
          />
          <p className="text-[#2D2E2E] text-[12px] font-normal">
            0/30 Character
          </p>
        </div>
        <button className="w-[343px] h-[52px] bg-[#FF9A01] text-[#FFFFFF] rounded-2xl font-bold text-[14px] tracking-[2%]">
          Create
        </button>
      </div>
    </div>
  );
};

export default CreateWishlist;
