import React, { useState } from "react";

import activeBtn from "../assets/Images/active.jpg";
import inActiveBtn from "../assets/Images/inactive.jpg";
import { FiArrowRight } from "react-icons/fi";

import { useNavigate } from "react-router-dom";

const OnboardCarousel = ({ darkMode }) => {
  const onboardObjects = [
    {
      id: 1,
      image: "../assets/Images/Onboarding 1.png",
      heading1: "Gateway to Your",
      heading2: "Adventure",
      description1: "Enjoy various housing options, from",
      description2: "budget to luxury, in Tidoy.",
    },

    {
      id: 2,
      image: "../assets/Images/Onboarding 2.png",
      heading1: "Discover the Wonders of",
      heading2: "the World: Let's Explore!",
      description1: "Book a stay wherever you are, whenever",
      description2: "you want.",
    },

    {
      id: 3,
      image: "../assets/Images/Onboarding 3.png",
      heading1: "The Right Solution for Your",
      heading2: "Holiday Accommodation",
      description1: "A stress-free Holiday? Trust your Holiday",
      description2: " accommodation to Tidoy!",
    },
  ];
  // ===========================================================================================
  const navigate = useNavigate();

  const [selected, setSelected] = useState(1); // THE "1" INDICATING THE ID.

  const currentSlide = onboardObjects.find((obj) => {
    return obj.id === selected;
  });

  // ===========================================================================================
  return (
    <div
      className={`p-4 w-[375px] mx-auto ${
        darkMode ? "bg-[#2D2E2E] text-white" : "shadow-lg text-gray-900"
      }`}
    >
      <div>
        <div key={currentSlide.id}>
          <img
            src={currentSlide.image}
            alt=""
            className="pt-2 w-[343px] h-[417px]"
          />

          <div>
            <div className="flex flex-col items-center pb-2">
              <h4 className="font-bold text-[24px] tracking-[0.25%] leading-[32px]">
                {currentSlide.heading1}
              </h4>
              <h4 className="font-bold text-[24px] tracking-[0.25%] leading-[32px]">
                {currentSlide.heading2}
              </h4>
            </div>
            <div className="pb-4">
              <p className="leading-[24px] text-[16px] text-[#A6A9AC] text-center font-normal">
                {currentSlide.description1}
              </p>
              <p className="leading-[24px] text-[16px] text-[#A6A9AC] text-center font-normal">
                {currentSlide.description2}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-1 justify-center items-center pb-6">
        {onboardObjects.map((index) => {
          return (
            <button
              className={`transition-all duration-300 ease-in-out transform ${
                index === selected ? "ease-in" : "ease-out"
              }`}
              key={index.id}
              onClick={() => setSelected(index.id)}
            >
              <img
                src={index.id === selected ? activeBtn : inActiveBtn}
                className="rounded-full"
              />
            </button>
          );
        })}
      </div>
      <div className="flex gap-3 items-center justify-center">
        {selected !== onboardObjects.length && (
          <button
            className="h-[56px] w-[63px] border-1 border-[#DCE0E4] rounded-[16px] text-[14px] font-bold cursor-pointer"
            onClick={() => setSelected(onboardObjects.length)}
          >
            Skip
          </button>
        )}

        <button
          // Click handler: decides what happens when the button is clicked
          onClick={() => {
            if (selected < onboardObjects.length) {
              // If not the last slide, move to the next slide
              setSelected(selected + 1);
            } else {
              // If last slide, navigate to login page
              navigate("/login");
            }
          }}
          className={`h-[56px] ${
            selected === onboardObjects.length ? "w-[311px]" : "w-[236px]"
          } bg-[#FF9A01] rounded-[16px] text-[#FFFFFF] font-bold tracking-[2%] flex items-center justify-center cursor-pointer`}
        >
          {selected === onboardObjects.length ? (
            // If last slide, show "Get Started" text only
            "Get Started"
          ) : (
            // If not last slide, show "Next" text with arrow icon
            <p className="flex items-center justify-center gap-2">
              Next <FiArrowRight className="w-6 h-6 text-white" />
            </p>
          )}
        </button>
      </div>
    </div>
  );
};

export default OnboardCarousel;
