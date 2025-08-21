import React, { useContext, useState } from "react";
import { IoMdEye } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import errr from "../../assets/Images/error.png";
import LogContext from "../../contexts/LogContext";
import toast from "react-hot-toast";

const Switch = () => {
  const { handleLogin, loginWithPassword } = useContext(LogContext);

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [errorP, setErrorP] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleUsernameBlur = (e) => {
    if (!e.target.value.trim()) {
      setError("Username is required");
    } else {
      setError("");
    }
  };

  const handlePasswordBlur = (e) => {
    if (!e.target.value.trim()) {
      setErrorP("Password is required");
    } else {
      setErrorP("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !password) {
      setError(!name ? "Username is required" : "");
      setErrorP(!password ? "Password is required" : "");
      return;
    }

    // 🔥 Call your Context API login method
    const success = await handleLogin(name, password);

    if (success) {
      navigate("/");
      return toast.success("Successfull");
    }
  };

  return (
    <div>
      <div className="relative">
        <form onSubmit={handleSubmit}>
          {/* Username */}
          <div
            className={`flex flex-col text-start mt-[10px] ${
              error ? "text-red-500" : ""
            }`}
          >
            <label
              className={`font-medium text-[14px] text-[#2D2E2E] ${
                error ? "text-red-500" : ""
              }`}
            >
              Username
            </label>
            <input
              type="text"
              placeholder="ex: Johndoe"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`placeholder:text-[16px] placeholder:font-medium  border rounded-md border-[#DCE0E4] mt-[5px] px-[12px] py-[8px] ${
                error ? "border-red-500 bg-[#FBD2DC]" : ""
              }`}
              onBlur={handleUsernameBlur}
            />
            <div className="flex items-center mt-1">
              {error && (
                <>
                  <img src={errr} alt="error" className="w-4 h-4 mr-1" />
                  <span className="text-red-500 text-[12px]">{error}</span>
                </>
              )}
            </div>
          </div>

          {/* Password */}
          <div className="flex flex-col text-start mt-[10px] relative">
            <label
              className={`font-medium text-[14px] text-[#2D2E2E] ${
                errorP ? "text-red-500" : ""
              }`}
            >
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`placeholder:text-[16px] placeholder:font-medium border mt-[5px] placeholder:tracking-[5px] rounded-md border-[#DCE0E4] px-[12px] py-[8px] ${
                errorP ? "border-red-500 bg-[#FBD2DC] text-red-500" : ""
              }`}
              onBlur={handlePasswordBlur}
            />
            <IoMdEye
              onClick={() => setShowPassword(!showPassword)}
              className={`absolute bottom-[10px] right-[12px] w-[24px] h-[24px] cursor-pointer ${
                errorP ? "text-red-500" : ""
              }`}
            />
          </div>
          <div className="flex items-center mt-1">
            {errorP && (
              <>
                <img src={errr} alt="error" className="w-4 h-4 mr-1" />
                <span className="text-red-500 text-[12px]">{errorP}</span>
              </>
            )}
          </div>

          {/* Footer links */}
          <div className="flex underline justify-between mt-[10px]">
            <label className="font-semibold text-[12px] text-[#595A5B] tracking-[2%]">
              Need a help?
            </label>
            <Link
              to="/forgotPassword"
              className="font-semibold text-[12px] text-[#595A5B] tracking-[2%]"
            >
              Forgot Password
            </Link>
          </div>

          {/* Login Button */}
          <div className="mt-[50px]">
            <button
              type="submit"
              className="w-[343px] h-[52px] text-[14px] rounded-2xl text-[#FFFFFF] font-bold bg-[#FF9A01] disabled:bg-gray-400"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Switch;
