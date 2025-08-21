import React, { useState } from "react";
import { MdClose, MdVisibility, MdVisibilityOff } from "react-icons/md";
import { Link } from "react-router-dom";

const ChangePassword = ({ onClose, onSave, darkMode }) => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [newPasswordVisible, setNewPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const passwordsMatch =
    newPassword === confirmNewPassword && newPassword !== "";

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
          <h1 className="text-[18px] font-bold">Change Password</h1>
          <button onClick={onClose}>
            <MdClose className="w-[24px] h-[24px] cursor-pointer" />
          </button>
        </div>

        {/* Old Password */}
        <div>
          <p className="text-[14px] py-2">Password</p>
          <div
            className={`flex justify-between w-full p-3 rounded-2xl ${
              darkMode
                ? "bg-gray-800 border border-gray-700"
                : "bg-white border border-[#DCE0E4]"
            }`}
          >
            <input
              type={passwordVisible ? "text" : "password"}
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              className={`w-full outline-none bg-transparent ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            />
            <div
              onClick={() => setPasswordVisible(!passwordVisible)}
              className="cursor-pointer ml-2"
            >
              {passwordVisible ? (
                <MdVisibilityOff className="w-[24px] h-[24px] text-[#A6A9AC]" />
              ) : (
                <MdVisibility className="w-[24px] h-[24px] text-[#A6A9AC]" />
              )}
            </div>
          </div>
        </div>

        {/* New Password */}
        <div>
          <p className="text-[14px] py-2">New Password</p>
          <div
            className={`flex justify-between w-full p-3 rounded-2xl ${
              darkMode
                ? "bg-gray-800 border border-gray-700"
                : "bg-white border border-[#DCE0E4]"
            }`}
          >
            <input
              type={newPasswordVisible ? "text" : "password"}
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className={`w-full outline-none bg-transparent ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            />
            <div
              onClick={() => setNewPasswordVisible(!newPasswordVisible)}
              className="cursor-pointer ml-2"
            >
              {newPasswordVisible ? (
                <MdVisibilityOff className="w-[24px] h-[24px] text-[#A6A9AC]" />
              ) : (
                <MdVisibility className="w-[24px] h-[24px] text-[#A6A9AC]" />
              )}
            </div>
          </div>
        </div>

        {/* Confirm New Password */}
        <div>
          <p className="text-[14px] py-2">Confirm New Password</p>
          <div
            className={`flex justify-between w-full p-3 rounded-2xl ${
              darkMode
                ? "bg-gray-800 border border-gray-700"
                : "bg-white border border-[#DCE0E4]"
            }`}
          >
            <input
              type={confirmPasswordVisible ? "text" : "password"}
              value={confirmNewPassword}
              onChange={(e) => setConfirmNewPassword(e.target.value)}
              className={`w-full outline-none bg-transparent ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            />
            <div
              onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
              className="cursor-pointer ml-2"
            >
              {confirmPasswordVisible ? (
                <MdVisibilityOff className="w-[24px] h-[24px] text-[#A6A9AC]" />
              ) : (
                <MdVisibility className="w-[24px] h-[24px] text-[#A6A9AC]" />
              )}
            </div>
          </div>
        </div>

        {/* Help Row */}
        <div
          className={`flex justify-between text-sm py-2 underline ${
            darkMode ? "text-[#EDF1F5]" : "text-[#595A5B]"
          }`}
        >
          <Link to="/help">Need a help?</Link>
          <Link to="/forgotPassword">Forgot Password</Link>
        </div>

        {/* Save Button */}
        <div className="pt-6">
          <button
            className={`w-xs h-[52px] p-3 rounded-2xl font-bold text-[14px] ${
              passwordsMatch
                ? "bg-[#FF9A01] text-white"
                : "bg-gray-300 text-white"
            }`}
            disabled={!passwordsMatch}
            onClick={() => {
              onSave(newPassword);
              onClose();
            }}
          >
            Save
          </button>
        </div>
      </div>
    </>
  );
};

export default ChangePassword;
