import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import { IoMdFemale, IoMdMale } from "react-icons/io";

const ChangeGender = ({ currentGender = "", onClose, onSave, darkMode }) => {
  const [selectedGender, setSelectedGender] = useState(currentGender);

  const handleSave = () => {
    if (selectedGender) {
      onSave(selectedGender);
    }
  };

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
          <h1 className="text-[18px] font-bold">Change Gender</h1>
          <button onClick={onClose}>
            <MdClose className="w-[24px] h-[24px] cursor-pointer" />
          </button>
        </div>

        <div>
          {/* Male Option */}
          <div
            className={`flex justify-between py-6 border-b ${
              darkMode ? "border-gray-700" : "border-[#DCE0E4]"
            }`}
          >
            <div className="flex items-center">
              <IoMdMale className="w-[24px] h-[24px] text-[#A6A9AC] pr-2" />
              <label htmlFor="male">Male</label>
            </div>
            <input
              type="radio"
              name="gender"
              id="male"
              checked={selectedGender === "Male"}
              onChange={() => setSelectedGender("Male")}
            />
          </div>

          {/* Female Option */}
          <div
            className={`flex justify-between py-6 border-b ${
              darkMode ? "border-gray-700" : "border-[#DCE0E4]"
            }`}
          >
            <div className="flex items-center">
              <IoMdFemale className="w-[24px] h-[24px] text-[#A6A9AC] pr-2" />
              <label htmlFor="female">Female</label>
            </div>
            <input
              type="radio"
              name="gender"
              id="female"
              checked={selectedGender === "Female"}
              onChange={() => setSelectedGender("Female")}
            />
          </div>
        </div>

        {/* Save Button */}
        <div className="pt-6">
          <button
            onClick={() => {
              handleSave(selectedGender);
              onClose();
            }}
            className="bg-[#FF9A01] text-[#FFFFFF] w-xs h-[52px] p-3 rounded-2xl font-bold text-[14px]"
            disabled={!selectedGender}
          >
            Save
          </button>
        </div>
      </div>
    </>
  );
};

export default ChangeGender;
