import React from "react";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";

const LogoutPage = ({ onClose, onLogout, darkMode }) => {
  return (
    <>
      <div
        className="fixed inset-0 bg-opacity-30 backdrop-blur-xs z-40"
        onClick={onClose}
      />
      <div
        className={`fixed bottom-0 left-1/2 translate-x-[-50%] w-[375px] rounded-t-2xl py-[24px] px-[24px] z-50 shadow-lg ${
          darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
        }`}
      >
        <div className="flex justify-between mb-7">
          <h1 className="text-[18px] font-bold">Logout</h1>
          <button onClick={onClose}>
            <MdClose className="w-[24px] h-[24px] cursor-pointer" />
          </button>
        </div>

        <div
          className={`text-[14px] font-normal ${
            darkMode ? "text-gray-400" : "text-[#747677]"
          }`}
        >
          <p>
            Your profile information will be saved to make things easier when
            you return. See you again!
          </p>
        </div>

        <div className="pt-6">
          <Link to="/login">
            <button
              className="bg-[#ED1F4F] text-white w-xs h-[52px] p-3 rounded-2xl font-bold text-[14px]"
              onClick={onLogout}
            >
              Logout
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default LogoutPage;
