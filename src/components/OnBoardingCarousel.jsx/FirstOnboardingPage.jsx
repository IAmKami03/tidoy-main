import React from "react";
import onboarding1 from "../../assets/Images/Onboarding 1.png";
import dots from "../../assets/Images/First Dots.png";
import { IoMdArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const FirstOnboardingPage = ({ onNext }) => {
  const handleNext = () => {
    setTimeout(() => {
      onNext();
    }, 500);
  };

  return (
    <div className="w-[375px] mx-auto py-4">
      <div className="flex items-center justify-center">
        <img src={onboarding1} alt="" className="w-[343px] h-[417px]" />
      </div>

      <div className="flex flex-col items-center">
        <h2 className="font-bold text-[24px] leading-[32px] tracking-[0.25%] pt-6 text-[#2D2E2E]">
          Gateway to Your
        </h2>
        <h2 className="font-bold text-[24px] leading-[32px] tracking-[0.25%] pb-3 text-[#2D2E2E]">
          Adventure
        </h2>
        <p className="text-[16px] font-normal leading-[24px] text-[#A6A9AC]">
          Enjoy various housing options, from
        </p>
        <p className="text-[16px] font-normal leading-[24px] text-[#A6A9AC] pb-6">
          budget to luxury, in Tidoy.
        </p>
        <img src={dots} alt="" />
      </div>

      <div className="flex justify-center items-center gap-3 p-12">
        <Link
          to="/third"
          className="border border-1px border-[#DCE0E4] w-[63px] h-[56px] rounded-2xl bg-[#FFFFFF] text-[14px] font-bold text-[#2D2E2E]"
        >
          Skip
        </Link>
        <button
          onClick={handleNext}
          className="flex border border-1px border-[#DCE0E4] w-[236px] h-[56px] rounded-2xl font-bold text-[#FFFFFF] text-[14px] bg-[#FF9A01] items-center justify-center"
        >
          Next{" "}
          <span className="pl-2">
            <IoMdArrowForward className="w-[24px] h-[24px] text-[#FFFFFF]" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default FirstOnboardingPage;
