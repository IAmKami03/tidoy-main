import React from "react";

const Header = () => {
  return (
    <div className="flex flex-col gap-1 mb-[18px]">
      <h1 className="text-[28px] font-bold text-[#2D2E2E] ">
        Welcome to Tidoy 👋{" "}
      </h1>
      <p className="text-[12px] font-normal text-[#747677]">
        Login to access your account and continue your journey
      </p>
    </div>
  );
};

export default Header;
