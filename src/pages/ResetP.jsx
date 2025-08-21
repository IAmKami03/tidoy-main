import React, { useState } from "react";
import vector from "../assets/Images/arrow_left.png";
import visiTwo from "../assets/Images/visibility-2.png";
import visiActive from "../assets/Images/visibility.png";

const ResetP = () => {
  const [form, setForm] = useState({
    current: "",
    new: "",
    confirm: "",
  });

  const [visible, setVisible] = useState({
    current: false,
    new: false,
    confirm: false,
  });

  const handleChange = (field) => (e) => {
    setForm({ ...form, [field]: e.target.value });
  };

  const toggleVisibility = (field) => {
    setVisible((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Handle password reset logic
    alert("Password reset submitted!");
  };

  return (
    <div className="w-[375px] p-4">
      {/* Header */}
      <div className="flex mt-[44px] items-center p-[16px] gap-[16px]">
        <img src={vector} alt="back" className="w-[7.41px] h-[12px]" />
        <p className="font-bold text-[14px] text-[#2D2E2E] tracking-[2%]">
          Reset Password
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit}>
        {/* Current Password */}
        <div className="relative">
          <div className="flex flex-col text-start mt-[10px] relative">
            <label className="font-medium text-[14px] text-[#2D2E2E]">
              Password
            </label>
            <input
              type={visible.current ? "text" : "password"}
              placeholder="********"
              value={form.current}
              onChange={handleChange("current")}
              className="placeholder:text-[16px] placeholder:font-medium border mt-[5px] placeholder:tracking-[5px] rounded-xl border-[#DCE0E4] px-[12px] py-[8px] w-full"
            />
          </div>
          <img
            src={visible.current ? visiActive : visiTwo}
            alt="toggle visibility"
            onClick={() => toggleVisibility("current")}
            className="absolute bottom-[14px] left-[310px] cursor-pointer"
          />
        </div>

        {/* New Password */}
        <div className="relative">
          <div className="flex flex-col text-start mt-[10px] relative">
            <label className="font-medium text-[14px] text-[#2D2E2E]">
              New Password
            </label>
            <input
              type={visible.new ? "text" : "password"}
              placeholder="********"
              value={form.new}
              onChange={handleChange("new")}
              className="placeholder:text-[16px] placeholder:font-medium border mt-[5px] placeholder:tracking-[5px] rounded-xl border-[#DCE0E4] px-[12px] py-[8px] w-full"
            />
          </div>
          <img
            src={visible.new ? visiActive : visiTwo}
            alt="toggle visibility"
            onClick={() => toggleVisibility("new")}
            className="absolute bottom-[14px] left-[310px] cursor-pointer"
          />
        </div>

        {/* Confirm Password */}
        <div className="relative">
          <div className="flex flex-col text-start mt-[10px] relative">
            <label className="font-medium text-[14px] text-[#2D2E2E]">
              Confirm New Password
            </label>
            <input
              type={visible.confirm ? "text" : "password"}
              placeholder="********"
              value={form.confirm}
              onChange={handleChange("confirm")}
              className="placeholder:text-[16px] placeholder:font-medium border mt-[5px] placeholder:tracking-[5px] rounded-xl border-[#DCE0E4] px-[12px] py-[8px] w-full"
            />
          </div>
          <img
            src={visible.confirm ? visiActive : visiTwo}
            alt="toggle visibility"
            onClick={() => toggleVisibility("confirm")}
            className="absolute bottom-[14px] left-[310px] cursor-pointer"
          />
        </div>

        {/* Submit Button */}
        <div className="mt-[20px]">
          <button
            type="submit"
            className="w-[343px] h-[52px] text-[14px] rounded-2xl text-[#FFFFFF] font-bold bg-[#FF9A01]"
          >
            Reset Password
          </button>
        </div>
      </form>
    </div>
  );
};

export default ResetP;
