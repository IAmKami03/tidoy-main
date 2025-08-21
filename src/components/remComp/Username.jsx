import React, { useState } from "react";
import { Link } from "react-router-dom";
import eye from "../../assets/Images/visibility.png";
import Switch from "../loginComp/Switch";
import Number from "./Number";
import LoginFooter from "../loginComp/LoginFooter";

const Username = ({ setScreen }) => {
  const tabs = [
    {
      name: "Username",
    },
    {
      name: "Phone Number",
    },
  ];
  const [activeTab, setActiveTab] = useState("Username");

  const renderContent = () => {
    switch (activeTab) {
      case "Username":
        return <Switch />;
      case "Phone Number":
        return <Number />;
      default:
        return null;
    }
  };
  return (
    <div className="">
      <form action="" className="flex flex-col gap-3 text-start  mb-[116px]">
        <div className="flex bg-[#EDF1F5] rounded-full items-center justify-center">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(tab.name)}
              className={`px-3 py-1 cursor-pointer w-[161.5px] h-[42px] gap-[8px] rounded-full text-[14px] tracking-[2%] font-medium
                    ${
                      activeTab === tab.name
                        ? "bg-[#2D2E2E] text-white"
                        : "text-[#2D2E2E] bg-transparent"
                    }`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        <div className="flex flex-col gap-3 pb-[44px]">
          <div>
            <label
              htmlFor=""
              className="text-[14px] font-medium text-[#2D2E2E] "
            >
              Username
            </label>
            <input
              type="text"
              placeholder="ex : Johndoe"
              className="w-full border border-b-1 border-[#DCE0E4] rounded-xl py-2 px-3"
            />
          </div>

          <div>
            <label htmlFor="">Password</label>
            <div
              className="font-medium placeholder:text-[16px] w-full 
                border border-b-1 border-[#DCE0E4] rounded-xl py-2 px-3 text-[14px] flex justify-between"
            >
              <input
                type="text"
                placeholder="••••••••"
                className="outline-none"
              />
              <img src={eye} alt="" />
            </div>
          </div>

          <div className="flex justify-between text-[12px] font-semibold text-[#595A5B] underline">
            <Link>Need a help?</Link>
            <Link>Forgot Password</Link>
          </div>
        </div>

        <button className="bg-[#FF9A01] pt-3 p-4 rounded-xl text-[#FFFFFF]">
          Login
        </button>
      </form>

      <LoginFooter />
    </div>
  );
};

export default Username;
