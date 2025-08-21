import React from "react";
import onboarding3 from "../../assets/Images/Onboarding 3.png";
import dots from "../../assets/Images/Third Dots.png";

const ThirdOnboardingPage = () => {
  return (
    <div className="w-[375px] mx-auto py-4">
      <div className="flex items-center justify-center">
        <img src={onboarding3} alt="" className="w-[343px] h-[417px]" />
      </div>

      <div className="flex flex-col items-center">
        <h2 className="font-bold text-[24px] leading-[32px] tracking-[0.25%] pt-6 text-[#2D2E2E]">
          The Right Solution for Your
        </h2>
        <h2 className="font-bold text-[24px] leading-[32px] tracking-[0.25%] pb-3 text-[#2D2E2E]">
          Holiday Accommodation
        </h2>
        <p className="text-[16px] font-normal leading-[24px] text-[#A6A9AC]">
          A stress-free Holiday? Trust your Holiday
        </p>
        <p className="text-[16px] font-normal leading-[24px] text-[#A6A9AC] pb-6">
          accommodation to Tidoy!
        </p>
        <img src={dots} alt="" />
      </div>

      <div className="flex justify-center p-12">
        <button className="border border-1px border-[#DCE0E4] w-[311px] h-[52px] rounded-2xl bg-[#FF9A01] font-bold text-[#FFFFFF] text-[14px]">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default ThirdOnboardingPage;
