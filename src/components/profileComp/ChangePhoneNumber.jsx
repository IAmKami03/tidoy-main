import React, { useState, useEffect } from "react";
import { MdClose } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import data from "../../data.json";

const ChangePhoneNumber = ({
  currentPhoneNumber = "",
  onClose,
  onSave,
  darkMode,
}) => {
  const [newPhoneNumber, setNewPhoneNumber] = useState(currentPhoneNumber);
  const [showDropdown, setShowDropdown] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedCountry, setSelectedCountry] = useState({
    country: "Nigeria",
    callingCode: "234",
    flags: {
      png: "https://flagcdn.com/w320/ng.png",
    },
  });

  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    const term = search.toLowerCase();

    if (!term) {
      setFilteredData(data); // Show all countries by default
      return;
    }

    const results = data.filter(
      (item) =>
        item.country?.toLowerCase().includes(term) ||
        item.callingCodes[0]?.includes(term)
    );
    setFilteredData(results);
  }, [search]);

  const handleSave = () => {
    if (newPhoneNumber.trim() !== "") {
      const fullNumber = `+${selectedCountry.callingCode}${newPhoneNumber}`;
      onSave(fullNumber);
    }
  };

  return (
    <>
      <div
        className="fixed inset-0 bg-opacity-30 backdrop-blur-sm z-40"
        onClick={onClose}
      />
      <div
        className={`fixed bottom-0 left-1/2 translate-x-[-50%] w-[375px] rounded-t-2xl py-6 px-6 z-50 shadow-lg ${
          darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
        }`}
      >
        {/* Header */}
        <div className="flex justify-between mb-7">
          <h1 className="text-lg font-bold">Change Phone Number</h1>
          <button onClick={onClose}>
            <MdClose className="w-6 h-6 cursor-pointer" />
          </button>
        </div>

        {/* Phone Input */}
        <p className="text-sm pb-2">Phone Number</p>
        <div
          className={`flex items-center gap-2 border p-3 rounded-2xl relative ${
            darkMode ? "border-gray-700 bg-gray-800" : "border-[#DCE0E4]"
          }`}
        >
          {/* Country selector */}
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <img
              src={selectedCountry.flags?.png}
              alt="flag"
              className="w-[24px] h-[17px]"
            />
            <span className="text-sm">+{selectedCountry.callingCode}</span>
            <RiArrowDropDownLine className="w-6 h-6 text-[#A6A9AC]" />
          </div>
          <input
            type="tel"
            maxLength="15"
            value={newPhoneNumber}
            onChange={(e) => setNewPhoneNumber(e.target.value)}
            className="flex-1 outline-none border-none bg-transparent text-sm"
            placeholder="Enter your phone number"
          />

          {/* Country Dropdown */}
          {showDropdown && (
            <div
              className={`absolute top-[110%] left-0 w-full max-h-[250px] overflow-y-auto shadow-md rounded-xl p-3 z-50 border ${
                darkMode
                  ? "bg-gray-800 border-gray-700 text-white"
                  : "bg-white border-gray-200 text-gray-900"
              }`}
            >
              <input
                type="text"
                placeholder="Search by country or code"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className={`w-full p-2 mb-3 rounded-md text-sm outline-none ${
                  darkMode
                    ? "bg-gray-900 border-gray-600 placeholder-gray-400 text-white"
                    : "border border-gray-300 text-black"
                }`}
              />

              {/* Country List Items */}
              {filteredData.length > 0 ? (
                filteredData.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      setSelectedCountry({
                        country: item.country,
                        callingCode: item.callingCodes[0],
                        flags: item.flags,
                      });
                      setShowDropdown(false);
                      setSearch("");
                    }}
                    className={`flex items-center gap-2 py-2 px-2 cursor-pointer rounded-md ${
                      darkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"
                    }`}
                  >
                    <img
                      src={item.flags?.png}
                      alt={item.country}
                      className="w-[24px] h-[17px]"
                    />
                    <span className="text-sm">{item.country}</span>
                    <span className="ml-auto text-sm text-gray-500">
                      +{item.callingCodes[0]}
                    </span>
                  </div>
                ))
              ) : (
                <p className="text-sm text-gray-500 text-center">No results</p>
              )}
            </div>
          )}
        </div>

        {/* Save Button */}
        <div className="pt-6">
          <button
            onClick={() => {
              handleSave();
              onClose();
            }}
            className="bg-[#FF9A01] text-white w-full h-[52px] rounded-2xl font-bold text-sm"
            disabled={!newPhoneNumber.trim()}
          >
            Save
          </button>
        </div>
      </div>
    </>
  );
};

export default ChangePhoneNumber;
