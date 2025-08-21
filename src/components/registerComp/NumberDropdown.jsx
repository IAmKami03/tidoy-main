import React, { useEffect, useState } from "react";
import numberData from "../../data.json";
import grabber from "../../assets/Images/Grabber.png";
import closeBtn from "../../assets/Images/close.png";
import { IoMdSearch } from "react-icons/io";

const NumberDropdown = ({ setShowModal, setSelectedCountry }) => {
  const [allNumbers] = useState(numberData);
  const [searched, setSearched] = useState([]);
  const [selected, setSelected] = useState({});

  // ===========================================================

  // ==============================================================
  return (
    <div className="w-[375px] h-[413px] px-6 border-t-[#A6A9AC] rounded-[32px] transition-all duration-300 ease-in-out transform">
      <img src={grabber} alt="" className="mb-11" />
      <div className="flex items-center justify-between mb-7">
        <h1 className="text-[#2D2E2E] text-[18px] font-bold">Country</h1>
        <img
          src={closeBtn}
          alt=""
          onClick={() => {
            setShowModal(false);
          }}
        />
      </div>
      <div className="relative mb-7">
        <input
          onChange={(e) => {
            const value = e.target.value.toLowerCase();
            const filtered = numberData.filter((number) => {
              return (
                number.name.toLowerCase().includes(value) ||
                number.callingCodes.includes(value)
              );
            });

            setSearched(filtered);
          }}
          type="text"
          className="h-12 rounded-[24px] border border-[#A6A9AC] w-full py-3 px-4 outline-none relative"
        />
        <IoMdSearch className="absolute top-[14px] right-[15px] w-5 h-5 text-[#6a6d6f]" />
      </div>
      {/* ================================================================================================ */}
      <div className="overflow-y-auto overflow-x-hidden h-[300px] pr-2">
        {(searched.length > 0 ? searched : allNumbers).map((allNumber) => {
          return (
            <div className="flex flex-col gap-3.5" key={allNumber.name}>
              <div
                key={allNumber.name}
                className="flex justify-between items-center border-b-1 border-b-[#A6A9AC] py-2 px-3 text-[14px] font-medium text-[#2D2E2E]"
              >
                <div className="flex items-center gap-1">
                  <img src={allNumber.flags.png} alt="" className="w-[5%]" />
                  <p>(+{allNumber.callingCodes})</p>
                  <p>{allNumber.name}</p>
                </div>
                <div>
                  <input
                    type="radio"
                    name="country"
                    id=""
                    checked={selected.callingCodes === allNumber.callingCodes}
                    onChange={() => {
                      setSelected(allNumber);
                      setSelectedCountry(allNumber); // send selected country back to form
                      setShowModal(false); // close modal
                    }}
                    onSelect={setSelectedCountry}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NumberDropdown;
