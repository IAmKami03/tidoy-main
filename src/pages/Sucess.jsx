import React from "react";
import check from "../assets/Images/check_circle.png";

const Sucess = () => {
  return (
    <div className="w-[375px] p-4">
      <div className="flex flex-col mt-[80px] justify-center items-center">
        <img src={check} alt="" />
        <h5 className="text-[20px] mt-[20px] font-bold">Password Changed</h5>
        <p className="font-normal text-[14px] leading-[20px] px-[40px] text-center">
          Your password has been changed successfully.
        </p>
      </div>
      <div className="mt-[50px] ">
        <button className="w-[343px] h-[52px] text-[14px] rounded-2xl text-[#FFFFFF] font-bold bg-[#FF9A01]">
          Back to Login
        </button>
      </div>
    </div>
  );
};

export default Sucess;
