import React, { useContext, useState } from "react";
import down from "../../assets/Images/expand.png";
import google from "../../assets/Images/google.png";
import facebook from "../../assets/Images/facebook.png";
import apple from "../../assets/Images/apple.png";
import { Link } from "react-router-dom";
import CountrySelector from "../loginComp/CountrySelector";
import LogContext from "../../contexts/LogContext"; // ✅ to access selectedCountry & phoneNumber
import { useNavigate } from "react-router-dom";

const Number = ({setScreen}) => {
  const { selectedCountry, phoneNumber } = useContext(LogContext); // ✅ already in your context
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!phoneNumber) {
      alert("Please enter a valid phone number");
      return;
    }

    const fullNumber = `${selectedCountry.dial_code}${phoneNumber}`;
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/login/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ number: fullNumber }),
      });

      const data = await res.json();

      if (res.ok) {
        // ✅ OTP sent successfully
        navigate("/confirm", { state: { number: fullNumber } });
      } else {
        alert(data.message || "Failed to send OTP");
      }
    } catch (err) {
      console.error("Error:", err);
      alert("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
     <div className="w-[375px] mt-4">
      <div className="relative">
        <CountrySelector />
        <div className="text-start leading-[16px] w-[343px] px-[8px] mt-[8px]">
          <label className="font-normal text-[12px] text-[#2D2E2E] tracking-[2%]">
            We'll call or text you to confirm your number. Standard message and
            data rates apply
          </label>
        </div>
      </div>
      <div className="mt-[25px] ">
        <button
          onClick={handleLogin}
          disabled={loading}
          className="w-[343px] h-[52px] text-[14px] rounded-2xl text-[#FFFFFF] font-bold bg-[#FF9A01] disabled:bg-gray-400"
        >
          {loading ? "Sending..." : "Login"}
        </button>
      </div>
      <div className="mt-4 text-end">
        <label className="font-semibold underline text-[12px] text-[#595A5B] tracking-[2%]">
          Need a help?
        </label>
      </div>
    </div>
  );
};

export default Number;
