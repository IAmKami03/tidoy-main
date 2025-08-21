import React from "react";
import discovery from "../../assets/Images/discovery.png";
import wish from "../../assets/Images/wishlist.png";
import stay from "../../assets/Images/stay.png";
import profile from "../../assets/Images/profile.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex bg-[#FFFFFF] w-full fixed bottom-0  ">
      <div className="p-2 w-[93.75px] gap-1 flex flex-col items-center">
        <img
          src={discovery}
          alt=""
          className="px-5 py-1 bg-[#FFEBCC] rounded-4xl"
        />
        <p className="text-[10px] font-bold text-[#2D2E2E]">Discovery</p>
      </div>

      <div className="p-2 w-[93.75px] gap-1 flex flex-col items-center">
        <Link to="/wishlist">
          <img src={wish} alt="" className="px-5 py-1" />
        </Link>{" "}
        <p className="text-[10px] font-normal text-[#747677]">Wishlist</p>
      </div>

      <div className="p-2 w-[93.75px] gap-1 flex flex-col items-center">
        <Link to="/stay">
          <img src={stay} alt="" className="px-5 py-1" />
        </Link>{" "}
        <p className="text-[10px] font-normal text-[#747677]">Stay</p>
      </div>

      <div className="p-2 w-[93.75px] gap-1 flex flex-col items-center">
        <Link to="/profile">
          <img src={profile} alt="" className="px-5 py-1" />
        </Link>{" "}
        <p className="text-[10px] font-normal text-[#747677]">Profile</p>
      </div>
    </div>
  );
};

export default Footer;
