import React from "react";
import confused from "../assets/Confused.png";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <div className="text-center h-screen bg-[linear-gradient(176.68deg,_#151519_2.75%,_#1C1B2D_14.7%)] space-y-3">
      <img src={confused} alt="" className="w-[400px] h-[400px] mx-auto" />
      <h1 className="text-[70px] text-[#FFFFFF] font-semibold">
        404 PAGE NOT FOUND!
      </h1>
      <p className=" text-[19px] text-[#FFFFFF] font-semibold">
        omo I no understand where tf you wan go ooo
      </p>
      <Link to="/">
        <button
          className="bg-[#5F57A1] text-[#FFFFFF] font-bold text-[15px] p-[15px]
           rounded-[6px] hover:bg-[#FFFFFF] hover:text-[#10141E]"
        >
          Go Back Home
        </button>
      </Link>
    </div>
  );
};

export default Error;
