import React from "react";
import vector from "../assets/Images/arrow_left.png";
import flag from "../assets/Images/Flag_of_Indonesia.svg";
import ExpandMore from "../assets/Images/expand_more.png";
import { Link } from "react-router-dom";
import CountrySelector from "../components/loginComp/CountrySelector";

const ForgotP = () => {
  return (
    <div className="w-[375px] p-4">
      <div className="flex mt-44px items-center p-[16px] gap-[16px]">
        <Link to="/">
          <img src={vector} alt="" className="w-[7.41px] h-[12px]" />
        </Link>
        <p className="font-bold text-[14px] text-[#2D2E2E] tracking-[2%]">
          Forgot Password
        </p>
      </div>

      <div className="relative">
        <div className="flex flex-col text-start mt-[10px] relative">
          <CountrySelector />
        </div>
        <div className=" text-start leading-[16px] w-[343px] px-[8px] mt-[3px]">
          <label className="font-normal text-[12px] text-[#2D2E2E] tracking-[2%]">
            We'll call or text you to confirm your number. Standard message and
            data rates apply
          </label>
        </div>
      </div>

      <div className="mt-[30px] ">
        <button className="w-[343px] h-[52px] text-[14px] rounded-2xl text-[#FFFFFF] font-bold bg-[#FF9A01]">
          Continue
        </button>
      </div>

      <label className="font-semibold flex justify-end underline text-[12px] text-[#2D2E2E] tracking-[2%] mt-[20px]">
        Need a help?
      </label>
    </div>
  );
};

export default ForgotP;
