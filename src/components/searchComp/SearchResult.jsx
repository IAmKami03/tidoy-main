import React, { useState, useEffect, useContext } from "react";
import left from "../../assets/Images/arrow_left.png";
import read from "../../assets/Images/Badges.png";
import filter from "../../assets/Images/filter.png";
import SearchBooking from "./SearchBooking";
import ViewFeat from "../common/ViewFeat";
import { useProperties } from "../../contexts/PropertiesContext";
import { DateContext } from "../../contexts/DateContext";

const SearchResult = ({ setScreen }) => {
  const [showFilter, setShowFilter] = useState(false);
  const {
    properties,
    filters,
    setFilters,
    handleApplyFilters,
    resetFilters,
    isLoading,
  } = useProperties();
  const { checkInDate, checkOutDate, guestCount } = useContext(DateContext);
  const formatDate = (d) =>
    d
      ? new Intl.DateTimeFormat("en-GB", {
          day: "2-digit",
          month: "short",
        }).format(d)
      : "--";

  // useEffect(() => {
  //   console.log("🔎 Current filters:", filters);
  // }, [filters]);

  // useEffect(() => {
  //   console.log("🏠 Properties updated:", properties);
  // }, [properties]);

  useEffect(() => {
    console.log("🔎 SearchResult filters:", filters);
    console.log("🏠 SearchResult properties:", properties);
  }, [filters, properties]);

  return (
    <div className="relative">
      <div className="pt-[70px]">
        {/* Top bar */}
        <div className="border-b border-[#DCE0E4] fixed  top-0 z-10 bg-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 ">
              <img
                onClick={() => setScreen("search")}
                src={left}
                alt=""
                className="cursor-pointer"
              />
              <div className="flex flex-col gap-1">
                <p className="text-[14px] text-[#2D2E2E] font-bold">
                  {filters.area || "Select Location"}
                </p>
                <div className="flex  items-center text-[12px] gap-1 font-normal text-[#0167FF]">
                  <p>
                    {formatDate(checkInDate)} - {formatDate(checkOutDate)}
                  </p>

                  <p>•</p>
                  <p>
                    {(guestCount?.adults ?? 0) +
                      (guestCount?.children ?? 0) +
                      (guestCount?.infants ?? 0)}{" "}
                    guest
                  </p>
                </div>
              </div>
            </div>
            <button
              onClick={() => setScreen("search")}
              className="py-[9px] px-4 border border-[#EDF1F5] rounded-[8px] text-[12px] text-[#2D2E2E] font-bold"
            >
              Change
            </button>
          </div>

          <div className="flex py-3 gap-2 items-center">
            {[
              { label: "All", value: "" },
              { label: "Recommended", value: "recommended" },
              { label: "Popular", value: "popular" },
              { label: "Best Price", value: "bestPrice" },
            ].map((item) => (
              <p
                key={item.value}
                onClick={() =>
                  setFilters((prev) => ({
                    ...prev,
                    category: prev.category === item.value ? "" : item.value,
                  }))
                }
                className={`py-2 border-[0.5px] rounded-3xl text-[10px] font-normal text-[#2D2E2E] border-[#DCE0E4] text-center cursor-pointer
        ${filters.category === item.value ? "bg-[#EDF1F5]" : ""} 
        ${
          item.label === "All"
            ? "w-[36px]"
            : item.label === "Recommended"
            ? "w-[94px]"
            : item.label === "Popular"
            ? "w-[60px]"
            : "w-[71px]"
        }`}
              >
                {item.label}
              </p>
            ))}

            <div
              onClick={() => setShowFilter(true)}
              className="flex cursor-pointer items-center justify-center gap-1 py-2 w-[59px] border rounded-3xl border-[#DCE0E4] relative"
            >
              <img src={filter} alt="" />
              <p className="text-[10px] font-normal text-[#2D2E2E]"> Filter</p>
              {/* <img
                src={read}
                alt=""
                className="absolute right-0 bottom-[21px]"
              /> */}
            </div>
          </div>

          {/* ================ */}
        </div>

        {/* Properties list */}

        <ViewFeat properties={properties} />
      </div>

      {/* Filter modal */}
      {showFilter && (
        <SearchBooking
          onClose={() => setShowFilter(false)}
          onApplyFilters={handleApplyFilters}
        />
      )}
    </div>
  );
};

export default SearchResult;
