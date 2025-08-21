import React, { useState, useContext, useEffect } from "react";
import close from "../../assets/Images/close.png";
import minimize from "../../assets/Images/minimize.png";
import add from "../../assets/Images/add.png";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useNavigate } from "react-router-dom";
import { DateContext } from "../../contexts/DateContext";
import toast from "react-hot-toast";

const FilterButtons = ({ setScreen, onClose }) => {
  const {
    checkInDate,
    setCheckInDate,
    checkOutDate,
    setCheckOutDate,
    guestCount,
    setGuestCount,
  } = useContext(DateContext);

  const [activeTab, setActiveTab] = useState("checkIn");
  const navigate = useNavigate();

  // ✅ Temporary local states
  const [tempCheckIn, setTempCheckIn] = useState(checkInDate);
  const [tempCheckOut, setTempCheckOut] = useState(checkOutDate);

  const GUEST_LIMITS = {
    adults: 10,
    children: 10,
    infants: 5,
    total: 20, // excludes infants
  };

  const [guestCounts, setGuestCounts] = useState({
    adults: guestCount.adults || 0,
    children: guestCount.children || 0,
    infants: guestCount.infants || 0,
  });

  const totalGuests = guestCounts.adults + guestCounts.children;

  const increaseGuest = (type, maxPerType) => {
    const totalGuests =
      guestCounts.adults + guestCounts.children + guestCounts.infants;

    if (type !== "infants" && totalGuests >= GUEST_LIMITS.total) {
      toast("Maximum total guests reached");
      return;
    }

    if (guestCounts[type] < maxPerType) {
      setGuestCounts((prev) => ({
        ...prev,
        [type]: prev[type] + 1,
      }));
    }
  };

  const decreaseGuest = (type) => {
    if (guestCounts[type] > 0) {
      setGuestCounts((prev) => ({
        ...prev,
        [type]: prev[type] - 1,
      }));
    }
  };

  const formattedDate = (date) =>
    new Intl.DateTimeFormat("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }).format(date);

  const handleDateSelect = (date) => {
    if (activeTab === "checkIn") {
      setTempCheckIn(date);
      setTempCheckOut(null); // Reset checkout if checkin changes
      setActiveTab("checkOut");
    } else if (activeTab === "checkOut") {
      if (tempCheckIn && date <= tempCheckIn) {
        toast.error("Check-out date must be after check-in date.");
        return;
      }
      setTempCheckOut(date);
      setActiveTab("guests");
    }
  };

  const handleDone = () => {
    if (!tempCheckIn && !tempCheckOut) {
      toast.error("Please select both check-in and check-out dates.");
      return;
    }

    if (!tempCheckIn) {
      toast.error("Please select a check-in date.");
      return;
    }

    if (!tempCheckOut) {
      toast.error("Please select a check-out date.");
      return;
    }
    setCheckInDate(tempCheckIn);
    setCheckOutDate(tempCheckOut);
    setGuestCount(guestCounts); // 👈 save the unified state
    setScreen("result");
    toast.success("Dates saved successfully!");
  };

  const handleClose = () => {
    setTempCheckIn(checkInDate);
    setTempCheckOut(checkOutDate);
    setGuestCounts({
      adults: guestCount.adults || 1,
      children: guestCount.children || 0,
      infants: guestCount.infants || 0,
    }); // 👈 reset to saved
    onClose();
  };

  const handleClear = () => {
    setTempCheckIn(null);
    setTempCheckOut(null);
    setGuestCounts({
      adults: 0,
      children: 0,
      infants: 0,
    });
  };

  return (
    <div className="rounded-t-[32px] bg-white w-full h-full px-4 mt-[20px] pt-[50px]">
      <div className="flex justify-between items-center mb-[20px]">
        <p className="text-[18px] text-[#2D2E2E] font-bold ">
          When’s your trip?
        </p>
        <img
          src={close}
          alt="close"
          onClick={handleClose}
          className="cursor-pointer"
        />
      </div>

      <div className="space-y-6">
        {/* Tabs */}
        <div className="flex mb-[20px] justify-between bg-[#2D2E2ECC]/4 rounded-[1000px] p-1">
          {["checkIn", "checkOut", "guests"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-2 px-4 w-[111.67px] text-left rounded-full ${
                activeTab === tab ? "bg-black text-white" : "text-[#2D2E2E]"
              }`}
            >
              <p
                className={`text-[10px] font-normal ${
                  activeTab === tab ? "text-white" : "text-[#2D2E2E]"
                }`}
              >
                {tab === "checkIn"
                  ? "Check-in"
                  : tab === "checkOut"
                  ? "Check-out"
                  : "Guest"}
              </p>
              <p
                className={`text-[12px] font-bold ${
                  activeTab === tab ? "text-white" : "text-[#2D2E2E]"
                }`}
              >
                {tab === "checkIn"
                  ? tempCheckIn
                    ? formattedDate(tempCheckIn)
                    : "Add date"
                  : tab === "checkOut"
                  ? tempCheckOut
                    ? formattedDate(tempCheckOut)
                    : "Add date"
                  : `${totalGuests} guest${totalGuests > 0 ? "s" : ""}`}
              </p>
            </button>
          ))}
        </div>

        {/* Content */}
        {activeTab === "guests" ? (
          <div className="flex flex-col gap-[28px] pb-[150px]">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-[14px] text-[#2D2E2E] font-bold">Adults</p>
                <p className="text-[12px] text-[#747677] font-normal">
                  Ages 13 or above
                </p>
              </div>
              <div className="flex items-center gap-2.5">
                <img
                  src={minimize}
                  alt=""
                  className="p-2 border rounded-full border-[#DCE0E4] cursor-pointer"
                  onClick={() => decreaseGuest("adults")}
                />
                <p className="text-[#2D2E2E] text-[16px] font-bold">
                  {guestCounts.adults}
                </p>
                <img
                  src={add}
                  alt=""
                  className="p-2 border rounded-full border-[#DCE0E4] cursor-pointer"
                  onClick={() => increaseGuest("adults", 10)}
                />
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div>
                <p className="text-[14px] text-[#2D2E2E] font-bold">Children</p>
                <p className="text-[12px] text-[#747677] font-normal">
                  Ages 13 or above
                </p>
              </div>
              <div className="flex items-center gap-2.5">
                <img
                  src={minimize}
                  alt=""
                  className="p-2 border rounded-full border-[#DCE0E4] cursor-pointer"
                  onClick={() => decreaseGuest("children")}
                />
                <p className="text-[#2D2E2E] text-[16px] font-bold">
                  {guestCounts.children}
                </p>
                <img
                  src={add}
                  alt=""
                  className="p-2 border rounded-full border-[#DCE0E4] cursor-pointer"
                  onClick={() => increaseGuest("children", 10)}
                />
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div>
                <p className="text-[14px] text-[#2D2E2E] font-bold">Infants</p>
                <p className="text-[12px] text-[#747677] font-normal">
                  Ages 13 or above
                </p>
              </div>
              <div className="flex items-center gap-2.5">
                <img
                  src={minimize}
                  alt=""
                  className="p-2 border rounded-full border-[#DCE0E4] cursor-pointer"
                  onClick={() => decreaseGuest("infants")}
                />
                <p className="text-[#2D2E2E] text-[16px] font-bold">
                  {guestCounts.infants}
                </p>
                <img
                  src={add}
                  alt=""
                  className="p-2 border rounded-full border-[#DCE0E4] cursor-pointer"
                  onClick={() => increaseGuest("infants", 5)}
                />
              </div>
            </div>
          </div>
        ) : (
          <Calendar
            onChange={handleDateSelect}
            value={tempCheckIn}
            className="rounded-xl p-4 text-[16px]"
            minDate={
              activeTab === "checkOut" && tempCheckIn ? tempCheckIn : new Date()
            }
          />
        )}
      </div>

      {/* Footer */}
      <footer className="flex items-center mt-[80px] gap-6">
        <button
          className="w-[159.5px] border py-3 rounded-xl font-bold text-[#2D2E2E] text-[16px] border-[#DCE0E4]"
          onClick={handleClear}
        >
          Clear
        </button>
        <button
          onClick={handleDone}
          className="py-3 rounded-xl w-[159.5px] bg-[#FF9A01] text-[16px] text-[#FFFFFF] font-bold"
        >
          Done
        </button>
      </footer>
    </div>
  );
};

// const GuestRow = ({ label, desc, count, onDecrease, onIncrease }) => (
//   <div className="flex justify-between items-center">
//     <div>
//       <p className="text-[14px] text-[#2D2E2E] font-bold">{label}</p>
//       <p className="text-[12px] text-[#747677] font-normal">{desc}</p>
//     </div>
//     <div className="flex items-center gap-2.5">
//       <img
//         src={minimize}
//         alt=""
//         className="p-2 border rounded-full border-[#DCE0E4] cursor-pointer"
//         onClick={onDecrease}
//       />
//       <p className="text-[#2D2E2E] text-[16px] font-bold">{count}</p>
//       <img
//         src={add}
//         alt=""
//         className="p-2 border rounded-full border-[#DCE0E4] cursor-pointer"
//         onClick={onIncrease}
//       />
//     </div>
//   </div>
// );

export default FilterButtons;
