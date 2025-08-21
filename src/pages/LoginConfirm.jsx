import React, { useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const LoginConfirm = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { number } = location.state || {};
  const [otp, setOtp] = useState(""); // we’ll keep full OTP here
  const [loading, setLoading] = useState(false);
  const inputs = useRef([]);

  const handleChange = (e, position) => {
    const value = e.target.value;
    if (!/^[0-9]?$/.test(value)) return; // only digits

    // build new otp string
    const otpArray = otp.split("");
    otpArray[position] = value;
    const newOtp = otpArray.join("");
    setOtp(newOtp);

    // auto move to next input
    if (value && position < inputs.current.length - 1) {
      inputs.current[position + 1].focus();
    }
  };

  const handleKeyDown = (e, position) => {
    if (e.key === "Backspace" && !e.target.value && position > 0) {
      inputs.current[position - 1].focus();
    }
  };

  

 

  return (
    <div className="w-[375px] mt-4">
      <div className="relative">
        <div className="text-start leading-[16px] w-[343px] px-[8px] mt-[8px]">
          <label className="font-normal text-[12px] text-[#2D2E2E] tracking-[2%]">
            Enter the code we sent to{" "}
            <span className="font-semibold">{number}</span>
          </label>
        </div>

        {/* OTP Inputs */}
        <div className="flex justify-between mt-[25px] px-[8px]">
          {[...Array(6)].map((_, position) => (
            <input
              key={position}
              ref={(el) => (inputs.current[position] = el)}
              type="text"
              maxLength={1}
              inputMode="numeric"
              className="w-12 h-12 text-center border border-gray-300 rounded-lg text-xl focus:outline-none focus:ring-2 focus:ring-[#FF9A01]"
              onChange={(e) => handleChange(e, position)}
              onKeyDown={(e) => handleKeyDown(e, position)}
            />
          ))}
        </div>
      </div>

      {/* Verify Button */}
      <div className="mt-[25px]">
        <button
          onClick={handleVerify}
          disabled={loading}
          className="w-[343px] h-[52px] text-[14px] rounded-2xl text-white font-bold bg-[#FF9A01] disabled:bg-gray-400"
        >
          {loading ? "Verifying..." : "Verify"}
        </button>
      </div>

      {/* Resend + Help */}
      <div className="mt-4 flex justify-between items-center px-[8px]">
        <button
          onClick={() => alert("⚡ Implement resend OTP API here")}
          className="font-semibold underline text-[12px] text-[#595A5B] tracking-[2%]"
        >
          Resend code
        </button>
        <label className="font-semibold underline text-[12px] text-[#595A5B] tracking-[2%]">
          Need a help?
        </label>
      </div>
    </div>
  );
};

export default LoginConfirm;
