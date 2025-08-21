import React, { useState } from "react";
import PhoneNumber from "../components/loginComp/PhoneNumber";
import Switch from "../components/loginComp/Switch";
import Header from "../components/common/Header";
import Footer from "../components/loginComp/LoginFooter";

const Login = () => {
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
        return <PhoneNumber />;
      default:
        return null;
    }
  };
  return (
    <div className="w-[375px] p-4  ">
      <Header />
      <div className="flex mt-[40px] border border-none w-[343px] h-[50px] bg-[#EDF1F5] rounded-full items-center justify-center">
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

      <div>{renderContent()}</div>

      <Footer />
    </div>
  );
};

export default Login;
