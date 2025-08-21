import React, { useContext, useState } from "react";
import dropdownImg from "../../assets/Images/expand.png";
import pwdImg from "../../assets/Images/visibility-2.png";
import { Link } from "react-router-dom";
import errorImg from "../../assets/Images/error.png";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import RegistrationContext from "../../contexts/RegistrationContext";
import NumberDropdown from "./NumberDropdown";

const RegisterForm = () => {
  const { user, authenticating, handleUserRegistration } =
    useContext(RegistrationContext);
  const [showPassword, setShowPassword] = useState(false);

  const [showRepeatPassword, setShowRepeatPassword] = useState(false);

  const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState("");

  const [name, setName] = useState("");

  const [number, setNumber] = useState("");

  const [password, setPassword] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState({
    email: "",
    name: "",
    number: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const [selectedCountry, setSelectedCountry] = useState({
    flag: null,
    callingCodes: "0",
  });

  const [showModal, setShowModal] = useState(false);

  // =====NOW FOR THE VALIDATION.

  const errorCheck = () => {
    const newErrors = {};
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Valid Email Required";
    }
    if (!name) {
      newErrors.name = "Username Required";
    } else if (name.length < 3) {
      newErrors.name = "Username must be at least 3 characters";
    }
    if (!number || !/^\d{10}$/.test(number)) {
      newErrors.number = "Valid 10-digit Phone Number Required";
    }
    if (!password) {
      newErrors.password = "Password Required";
    } else if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }
    if (confirmPassword !== password) {
      newErrors.confirmPassword = "Password Mismatch";
    }
    setError(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  // The Form PreventDefault

  const handleSubmit = async (form) => {
    form.preventDefault();
    const isValid = errorCheck();

    if (!isValid) {
      return;
    }
    setLoading(true);

    try {
      const fullPhoneNumber = `${selectedCountry.callingCodes}${number}`;
      const formData = {
        name,
        email,
        number: fullPhoneNumber,
        password,
        confirmPassword,
      };
      console.log("Sending formData:", formData);
      await handleUserRegistration(formData);
      localStorage.setItem("phoneNumber", fullPhoneNumber);
      toast.success("Registration successful! Please log in.");
      navigate("/login");
    } catch (error) {
      console.error("Form error:", error.response?.data);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className=" ">
        <div className="w-full flex flex-col gap-3 text-start mb-8">
          <div className="flex flex-col justify-start gap-1.5">
            <label
              htmlFor="name"
              className="text-[#2D2E2E] text-[14px] font-medium tracking-[2%]"
            >
              Username
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(n) => {
                setName(n.target.value);
              }}
              placeholder="ex : Johndoe123"
              className={`h-12 border-1 rounded-xl py-2 px-3 placeholder:text-[#A6A9AC] text-[16px] font-medium ${
                error.name
                  ? "border-[#ED1F4F] bg-[#FBD2DC] text-[#ED1F4F]"
                  : "border-[#DCE0E4]"
              }`}
            />
            {error.name && (
              <div className="flex gap-1 items-start">
                <img src={errorImg} alt="" />
                <p className="text-[#ED1F4F] text-[12px] font-medium">
                  {error.name}
                </p>
              </div>
            )}
          </div>

          <div className="flex flex-col justify-start gap-1.5">
            <label
              htmlFor="email"
              className="text-[#2D2E2E] text-[14px] font-medium tracking-[2%]"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="ex : username@gmail.com"
              className={`h-12 border-1 border-[#DCE0E4] rounded-xl py-2 px-3 placeholder:text-[#A6A9AC] text-[16px] font-medium ${
                error.email
                  ? "border-[#ED1F4F] bg-[#FBD2DC] text-[#ED1F4F]"
                  : "border-[#DCE0E4]"
              }`}
            />
            {error.email && (
              <div className="flex gap-1 items-start">
                <img src={errorImg} alt="" />
                <p className="text-[#ED1F4F] text-[12px] font-medium">
                  {error.email}
                </p>
              </div>
            )}
          </div>

          <div className="flex flex-col justify-start gap-1.5">
            <label
              htmlFor="number"
              className="text-[#2D2E2E] text-[14px] font-medium tracking-[2%]"
            >
              Phone Number
            </label>
            <div
              className={`relative flex items-center justify-start gap-1 w-full h-12 border-1 border-[#DCE0E4] rounded-xl py-2 px-3 ${
                error.number
                  ? "border-[#ED1F4F] bg-[#FBD2DC] text-[#ED1F4F]"
                  : "border-[#DCE0E4]"
              }`}
            >
              <div
                onClick={() => {
                  setShowModal(true);
                }}
                className="flex gap-1.5 items-center justify-center"
              >
                <img src={selectedCountry.flag} alt="" className="w-[17%]" />
                <p className="text-[#2D2E2E] text-[16px]">
                  +{selectedCountry.callingCodes}
                </p>
                <img src={dropdownImg} alt="" className="" />
              </div>
              <input
                type="text"
                id="number"
                name="number"
                value={number}
                onChange={(num) => {
                  setNumber(num.target.value);
                }}
                className="outline-none placeholder:text-[#A6A9AC] text-[16px] font-medium"
              />
            </div>

            {error.number && (
              <div className="flex gap-1 items-start">
                <img src={errorImg} alt="" />
                <p className="text-[#ED1F4F] text-[12px] font-medium">
                  {error.number}
                </p>
              </div>
            )}
          </div>

          <div className="flex flex-col justify-start gap-1.5">
            <label
              htmlFor="pwd"
              className="text-[#2D2E2E] text-[14px] font-medium tracking-[2%]"
            >
              Password
            </label>
            <div
              className={`flex items-center justify-between gap-1 w-full h-12 border-1 border-[#DCE0E4] rounded-xl py-2 px-3 ${
                error.password
                  ? "border-[#ED1F4F] bg-[#FBD2DC] text-[#ED1F4F]"
                  : "border-[#DCE0E4]"
              }`}
            >
              <input
                type={showPassword ? "text" : "password"}
                name="pwd"
                id="pwd"
                value={password}
                onChange={(p) => {
                  setPassword(p.target.value);
                }}
                placeholder="••••••••"
                className="outline-none placeholder:text-[#A6A9AC] text-[16px] font-medium"
              />
              <img
                onClick={() => {
                  setShowPassword(!showPassword);
                }}
                src={pwdImg}
                alt=""
              />
            </div>

            {error.password && (
              <div className="flex gap-1 items-start">
                <img src={errorImg} alt="" />
                <p className="text-[#ED1F4F] text-[12px] font-medium">
                  {error.password}
                </p>
              </div>
            )}
          </div>

          <div className="flex flex-col justify-start gap-1.5">
            <label
              htmlFor="c-pwd"
              className="text-[#2D2E2E] text-[14px] font-medium tracking-[2%]"
            >
              Confirm Password
            </label>
            <div
              className={`flex items-center justify-between gap-1 w-full h-12 border-1 border-[#DCE0E4] rounded-xl py-2 px-3 ${
                error.confirmPassword
                  ? "border-[#ED1F4F] bg-[#FBD2DC] text-[#ED1F4F]"
                  : "border-[#DCE0E4]"
              }`}
            >
              <input
                type={showRepeatPassword ? "text" : "password"}
                id="c-pwd"
                name="c-pwd"
                value={confirmPassword}
                onChange={(r) => {
                  setConfirmPassword(r.target.value);
                }}
                placeholder="••••••••"
                className="outline-none placeholder:text-[#A6A9AC] text-[16px] font-medium"
              />
              <img
                onClick={() => {
                  setShowRepeatPassword(!showRepeatPassword);
                }}
                src={pwdImg}
                alt=""
              />
            </div>

            {error.confirmPassword && (
              <div className="flex gap-1 items-start">
                <img src={errorImg} alt="" />
                <p className="text-[#ED1F4F] text-[12px] font-medium">
                  {error.confirmPassword}
                </p>
              </div>
            )}
          </div>
        </div>

        <button
          disabled={loading}
          className="h-[60px] bg-[#FF9A01] w-full rounded-[16px] text-white font-bold text-[14px] mb-[26px]"
        >
          {loading ? "Please Wait...." : "Register"}
        </button>

        {showModal && (
          <div className="fixed inset-0 backdrop-blur-3xl flex items-center justify-center z-20">
            <NumberDropdown
              setShowModal={setShowModal}
              setSelectedCountry={setSelectedCountry}
            />
          </div>
        )}
      </form>

      <div className="flex items-center justify-center mt-[24px] gap-1">
        <p className="text-[#2D2E2E] font-normal text-[12px]  ">
          have an account ?{" "}
        </p>
        <Link
          to="/login"
          className="text-[12px] font-bold text-[#FF9A01] underline"
        >
          Login here{" "}
        </Link>
      </div>
    </div>
  );
};

export default RegisterForm;
