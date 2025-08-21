import React, { useState } from "react";
import arrleft from "../../assets/Images/arrow_left.png";
import filter from "../../assets/Images/filter.png";
import read from "../../assets/Images/Badges.png";
import ViewFeat from "../common/ViewFeat";
import { useNavigate } from "react-router-dom";
import SearchBooking from "../searchComp/SearchBooking";
import { useProperties } from "../../contexts/PropertiesContext";

const View = ({ setScreen }) => {
  const navigate = useNavigate();
  const [showFilter, setShowFilter] = useState(false);
  const { properties, filters, setFilters, handleApplyFilters } =
    useProperties();
  // const goToFilter = () => {
  //   navigate("/search", { state: { from: "view" } });
  // };

  return (
    <div>
      <div>
        <div className="sticky top-0 z-3 bg-white ">
          <div className=" px-4 py-2 flex items-center justify-between">
            <div className=" gap-4 flex items-center">
              <img src={arrleft} alt="" onClick={() => setScreen("feature")} />
              <div className="flex flex-col items-start ">
                <h2 className="font-bold text-[14px] text-[#2D2E2E]">
                  Lagos, Nigeria
                </h2>
                <p className="text-[12px] font-normal text-[#0167FF]">
                  167 Recommend Stay
                </p>
              </div>
            </div>
            <button
              onClick={() => setScreen("feature")}
              className="flex items-center text-[12px] border border-[#EDF1F5] bg-[#FFFFFF] w-[80px] h-[34px] font-bold p-4 text-[#2D2E2E] rounded-lg"
            >
              Change
            </button>
          </div>
          {/* =================================================== */}
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

          {/*=====================================================*/}
          <hr className="text-[#DCE0E4]" />
          {/* ========================================================== */}
        </div>
        <ViewFeat  properties={properties}/>
      </div>

      {showFilter && (
        <SearchBooking
          onClose={() => setShowFilter(false)}
          onApplyFilters={handleApplyFilters}
        />
      )}
    </div>
  );
};

export default View;
