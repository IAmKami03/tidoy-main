import React, { useEffect, useState } from "react";
import arrow from "../../assets/Images/arrow_left.png";
import arrowdown from "../../assets/Images/expand.png";
import flag from "../../assets/../assets/Images/Flag_of_Indonesia.svg";
import { useNavigate } from "react-router-dom";
import countriesData from "../../data.json";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Phone = ({ setscreen }) => {
  const [countries, setCountries] = useState([]);
  const [selected, setSelected] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setCountries(countriesData);
    const defaultCountry =
      countriesData.find((country) => country.code === "NG") ||
      countriesData[0];
    setSelected(defaultCountry);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fullNumber = `+${selected?.callingCodes?.[0] || ""}${phone}`;
    console.log("Submitted number:", fullNumber);

    try {
      setLoading(true);
      const response = await fetch(
        "http://localhost:4000/api/auth/send-reset-code",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ phone: fullNumber }), // send full number
        }
      );

      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Something went wrong");

      toast.success(data.message); // Show success toaster

      localStorage.setItem("resetPhone", fullNumber);

      setTimeout(() => {
        navigate("/PassWords");
      }, 1500); // Wait for toast before navigating
    } catch (err) {
      toast.error(err.message); // Show error toaster
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <ToastContainer position="top-right" autoClose={3000} />

      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center px-[20px] py-[10px]"
      >
        <div className="flex items-center mb-8">
          <img
            src={arrow}
            alt=""
            className=" mr-2 text-black"
            onClick={() => navigate("/login")}
          />
          <h2 className=" text-lg font-semibold">Forgot Password</h2>
        </div>

        {/* ================main form content */}

        <div className="flex flex-col items-start mb-4">
          <label htmlFor="phone" className="text-sm font-medium text-gray-700">
            Phone Number
          </label>

          {/*====phone input=====*/}

          <div 
          className="flex items-center gap-3 border border-[#E5E7EB] rounded-lg p-5 h-12 w-full mt-4">
            {selected && (
              <div
                className="flex items-center gap-2"
                onClick={() => setShowDropdown(!showDropdown)}
              >
                <img src={flag} alt="Indonesia Flag" className="w-5 h-5 mr-2" />
                <span className="text-gray-500 mr-1">
                  +{selected.callingCodes && selected.callingCodes[0]}
                </span>
                <img src={arrowdown} alt="dropdown" />
              </div>
            )}

            <input
              type="tel"
              placeholder="ex : 81234567890 "
              className="flex-1 outline-none bg-transparent text-sm placeholder-gray-400"
              value={phone}
              onChange={(e) => {
                const onlyNums = e.target.value.replace(/\D/g, "");
                setPhone(onlyNums);
              }}
            />

            {showDropdown && (
              <div className="absolute z-50 bg-white border mt-52 rounded-md shadow-md max-h-60 overflow-auto">
                {countries.map((country) => (
                  <div
                    key={country.code}
                    className="flex items-center gap-2 px-4 py-2 hover:bg-gray-200 cursor-pointer"
                    onClick={() => {
                      setSelected(country);
                      setShowDropdown(false);
                    }}
                  >
                    <img
                      src={country.flags.svg}
                      alt={`Flag of ${country.name}`}
                      className="w-5 h-5"
                    />
                    <span className="text-xs text-gray-700">
                      {country.name}
                    </span>
                    <span className="text-xs ml-auto text-gray-500">
                      {country.callingCodes}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <p className=" text-sm text-start  text-gray-500 mt-3 pl-5">
            We'll call or text you to confirm your number. Standard message and
            data rates apply
          </p>
        </div>

        {/* ======== */}
        <div className="mt-3 px-4">
          <button
          onClick={() => setscreen("otp")}
            type="submit"
            className="h-12 w-[375px] text-[14px] rounded-2xl text-[#FFFFFF] font-bold bg-[#FF9A01] disabled:opacity-50 "
            disabled={loading}
          >
            {loading ? "Sending..." : "Continue"}{" "}
          </button>

          {/* Right-Aligned Help Link */}
          <div className="flex justify-end mt-4">
            <button type="button" className="text-sm text-gray-500 underline">
              Need a help?
            </button>
          </div>
        </div>

        {/* ======== */}
      </form>
    </div>
  );
};

export default Phone;
