import React from "react";
import logo from "../assets/Images/Logo.png";
// import tidoy from "../assets/Tidoy.png";
import progessBar from "../assets/Images/Progress Bar.png";

const OnBoarding = () => {
  return (
    <div>
      <div className=" tidoy my-20">
        <div className="flex flex-col items-center justify-center h-full">
          <div className="flex items-center">
            <img src={logo} alt="" />
            {/* <img src={tidoy} alt="" className="w-[95.47px] h-[35.57px]" /> */}
          </div>
          <img src={progessBar} alt="" className="pt-30" />
        </div>
      </div>
   
    </div>
  );
};

export default OnBoarding;
