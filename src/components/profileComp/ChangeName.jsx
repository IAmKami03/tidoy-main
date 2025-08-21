import React, { useState } from "react";
import { MdClose } from "react-icons/md";

const ChangeName = ({ currentName, onClose, onSave, darkMode }) => {
  const [newName, setNewName] = useState(currentName);

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
        <div className="flex justify-between items-center mb-7">
          <h1 className="text-[18px] font-bold">Change Name</h1>
          <button onClick={onClose}>
            <MdClose className="w-[24px] h-[24px] cursor-pointer" />
          </button>
        </div>

        <div>
          <p className="text-[14px] py-2">Name</p>
          <textarea
            cols="40"
            rows="1"
            id="name"
            maxLength="50"
            className={`w-full border p-3 rounded-2xl text-sm resize-none ${
              darkMode
                ? "bg-gray-800 border-gray-700 text-white"
                : "bg-white border-[#DCE0E4] text-gray-900"
            }`}
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
        </div>

        <div className="pt-6">
          <button
            className="bg-[#FF9A01] text-white w-xs h-[52px] p-3 rounded-2xl font-bold text-[14px]"
            onClick={() => {
              onSave(newName);
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

export default ChangeName;
