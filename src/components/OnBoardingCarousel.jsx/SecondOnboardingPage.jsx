import React from "react";
import onBoarding2 from "../../assets/Images/Onboarding 2.png";
import dots from "../../assets/Images/Second Dots.png";
import { IoMdArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const SecondOnboardingPage = ({ onNext }) => {
  const handleNext = () => {
    setTimeout(() => {
      onNext();
    }, 500);
  };

  return (
    <div className="w-[375px] mx-auto py-4">
      <div className="flex items-center justify-center">
        <img src={onBoarding2} alt="" className="w-[343px] h-[417px]" />
      </div>

      <div className="flex flex-col items-center">
        <h2 className="font-bold text-[24px] leading-[32px] tracking-[0.25%] pt-6 text-[#2D2E2E]">
          Discover the Wonders of
        </h2>
        <h2 className="font-bold text-[24px] leading-[32px] tracking-[0.25%] pb-3 text-[#2D2E2E]">
          the World: Let's Explore!
        </h2>
        <p className="text-[16px] font-normal leading-[24px] text-[#A6A9AC]">
          Book a stay wherever you are, whenever
        </p>
        <p className="text-[16px] font-normal leading-[24px] text-[#A6A9AC] pb-6">
          you want.
        </p>
        <img src={dots} alt="" />
      </div>

      <div className="flex justify-center items-center gap-3 p-12">
        <Link
          to="/third"
          className="border border-1px border-[#DCE0E4] w-[63px] h-[56px] rounded-2xl bg-[#FFFFFF] text-[14px] font-bold text-[#2D2E2E] justify-center items-center"
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

export default SecondOnboardingPage;
