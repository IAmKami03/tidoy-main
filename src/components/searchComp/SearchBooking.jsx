import React, { useState } from "react";
import close from "../../assets/Images/close.png";
import minimize from "../../assets/Images/minimize.png";
import star from "../../assets/Images/star.png";
import add from "../../assets/Images/add.png";
import { useProperties } from "../../contexts/PropertiesContext";

const SearchBooking = ({ onClose, onApplyFilters }) => {
  const { filters, setFilters } = useProperties(); // ✅ use context filters
  const [showAllAmenities, setShowAllAmenities] = useState(false);

  const amenitiesList = [
    "any",
    "wifi",
    "kitchen",
    "pool",
    "parking",
    "gym",
    "balcony",
    "sea view",
    "barbecue",
    "garden",
  ];

  const visibleAmenities = showAllAmenities
    ? amenitiesList
    : amenitiesList.slice(0, 5);

  // Increment counters
  const increaseCount = (field, max) => {
    setFilters((prev) => ({
      ...prev,
      [field]: Math.min(prev[field] + 1, max),
    }));
  };

  // Decrement counters
  const decreaseCount = (field) => {
    setFilters((prev) => ({
      ...prev,
      [field]: Math.max(prev[field] - 1, 0),
    }));
  };

  // Apply filters and close modal
  const handleApply = () => {
    onApplyFilters(); // ✅ no need to pass filters, context already has them
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 backdrop-blur-sm bg-[#2D2E2ECC] flex justify-center">
      <div className="rounded-t-[32px] bg-white w-full px-4 max-w-[375px] mt-5 overflow-y-scroll no-scrollbar">
        {/* Header */}
        <div className="flex justify-between items-center mb-5 pt-[45px]">
          <h6 className="text-[#2D2E2E] font-bold text-[18px]">Filter</h6>
          <img
            src={close}
            alt="close"
            onClick={onClose}
            className="cursor-pointer"
          />
        </div>

        <div className="flex flex-col gap-5">
          <hr className="text-[#DCE0E4]" />

          {/* Type of place */}
          <div className="flex flex-col gap-4">
            <h5 className="text-[16px] text-[#2D2E2E] font-bold">
              Type of place
            </h5>
            <div className="flex gap-2 items-center flex-wrap">
              {["any", "apartment", "villa", "hotel", "house"].map((type) => (
                <p
                  key={type}
                  onClick={() =>
                    setFilters((prev) => ({ ...prev, propertyType: type }))
                  }
                  className={`py-2 border-[0.5px] rounded-3xl text-[10px] font-normal 
                    text-[#2D2E2E] border-[#DCE0E4] px-3 cursor-pointer
                    ${filters.propertyType === type ? "bg-[#EDF1F5]" : ""}`}
                >
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </p>
              ))}
            </div>
          </div>

          <hr className="text-[#DCE0E4]" />

          {/* Sort by */}
          <div className="flex flex-col gap-4">
            <h5 className="text-[16px] text-[#2D2E2E] font-bold">Sort by</h5>
            <div className="flex gap-2 flex-wrap">
              {[
                { label: "Highest Price", value: "highestPrice" },
                { label: "Lowest Price", value: "lowestPrice" },
                { label: "Most Popular", value: "mostPopular" },
                { label: "Best Selling", value: "bestSelling" },
              ].map((opt) => (
                <p
                  key={opt.value}
                  onClick={() =>
                    setFilters((prev) => ({ ...prev, sortBy: opt.value }))
                  }
                  className={`py-2 border text-[#2D2E2E] border-[#DCE0E4] rounded-3xl text-[10px] px-2 cursor-pointer ${
                    filters.sortBy === opt.value ? "bg-[#EDF1F5]" : ""
                  }`}
                >
                  {opt.label}
                </p>
              ))}
            </div>
          </div>

          {/* Price */}
          <div className="flex flex-col gap-3 items-start">
            <h5 className="mt-4 font-bold">Price</h5>
            <div className="flex gap-4 items-center">
              <div className="flex flex-col gap-[6px] items-start">
                <label className="text-[14px] font-medium text-[#2D2E2E]">
                  Minimum
                </label>
                <input
                  type="number"
                  placeholder="₦0"
                  value={filters.minPrice}
                  onChange={(e) =>
                    setFilters((prev) => ({
                      ...prev,
                      minPrice: e.target.value,
                    }))
                  }
                  className="border border-[#DCE0E4] py-3 pl-3 rounded-2xl w-[160px]"
                />
              </div>

              <div className="flex flex-col gap-[6px] items-start">
                <label className="text-[14px] font-medium text-[#2D2E2E]">
                  Maximum
                </label>
                <input
                  type="number"
                  placeholder="₦1000"
                  value={filters.maxPrice}
                  onChange={(e) =>
                    setFilters((prev) => ({
                      ...prev,
                      maxPrice: e.target.value,
                    }))
                  }
                  className="border border-[#DCE0E4] py-3 pl-3 rounded-2xl w-[160px]"
                />
              </div>
            </div>
          </div>

          <hr className="text-[#DCE0E4]" />

          {/* Rooms and Bed */}
          <div className="flex flex-col gap-5">
            <div className="flex justify-between items-center">
              <p className="text-[14px] text-[#747677]">Bedrooms</p>
              <div className="flex items-center gap-2.5">
                <img
                  onClick={() => decreaseCount("bedrooms")}
                  src={minimize}
                  alt="decrease"
                  className="p-2 border rounded-full border-[#DCE0E4]"
                />
                <p className="text-[#2D2E2E] text-[16px] font-bold">
                  {filters.bedrooms}
                </p>
                <img
                  onClick={() => increaseCount("bedrooms", 5)}
                  src={add}
                  alt="increase"
                  className="p-2 border rounded-full border-[#DCE0E4]"
                />
              </div>
            </div>

            <div className="flex justify-between items-center">
              <p className="text-[14px] text-[#747677]">Bathrooms</p>
              <div className="flex items-center gap-2.5">
                <img
                  onClick={() => decreaseCount("bathrooms")}
                  src={minimize}
                  alt="decrease"
                  className="p-2 border rounded-full border-[#DCE0E4]"
                />
                <p className="text-[#2D2E2E] text-[16px] font-bold">
                  {filters.bathrooms}
                </p>
                <img
                  onClick={() => increaseCount("bathrooms", 5)}
                  src={add}
                  alt="increase"
                  className="p-2 border rounded-full border-[#DCE0E4]"
                />
              </div>
            </div>
          </div>

          <hr className="text-[#DCE0E4]" />

          {/* Amenities */}
          <div className="flex flex-col gap-3">
            <h5 className="text-[16px] text-[#2D2E2E] font-bold">Amenities</h5>
            <div className="flex gap-2 flex-wrap">
              {visibleAmenities.map((am) => (
                <p
                  key={am}
                  onClick={() =>
                    setFilters((prev) => ({
                      ...prev,
                      amenities: prev.amenities === am ? "any" : am,
                    }))
                  }
                  className={`py-2 border-[0.5px] rounded-3xl text-[10px] font-normal 
                    text-[#2D2E2E] border-[#DCE0E4] px-3 cursor-pointer
                    ${filters.amenities === am ? "bg-[#EDF1F5]" : ""}`}
                >
                  {am}
                </p>
              ))}
              {amenitiesList.length > 5 && (
                <button
                  onClick={() => setShowAllAmenities((prev) => !prev)}
                  className="py-2 border-[0.5px] rounded-3xl text-[10px] font-normal text-[#2D2E2E] px-3"
                >
                  {showAllAmenities ? "Show less" : "Show more"}
                </button>
              )}
            </div>
          </div>

          {/* Ratings */}
          <div>
            <h5 className="font-bold">Ratings</h5>
            <div className="flex flex-wrap gap-2">
              {[5, 4, 3, 2, 1].map((score) => (
                <div
                  key={score}
                  onClick={() =>
                    setFilters((prev) => ({
                      ...prev,
                      score: prev.score === score ? "" : score,
                    }))
                  }
                  className={`py-2 px-3 border-[0.5px] rounded-3xl text-[12px] font-normal 
                    text-[#2D2E2E] border-[#DCE0E4] flex items-center gap-1 cursor-pointer
                    ${filters.score === score ? "bg-[#EDF1F5]" : ""}`}
                >
                  {Array.from({ length: score }).map((_, i) => (
                    <img key={i} src={star} alt="star" />
                  ))}
                  <p className="text-[10px] text-[#2D2E2E]">({score})</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="flex items-center gap-6 my-[20px] pt-[16px]">
          <button
            onClick={() =>
              setFilters({
                category: "",
                location: "",
                propertyType: "any",
                minPrice: "",
                maxPrice: "",
                amenities: "any",
                bedrooms: 0,
                bathrooms: 0,
                score: "",
                sortBy: "",
              })
            }
            className="w-[79px] py-3 text-[16px] text-[#2D2E2E] font-bold"
          >
            Reset
          </button>
          <button
            className="w-[240px] bg-[#FF9A01] py-3 rounded-2xl text-[16px] text-white font-bold"
            onClick={handleApply}
          >
            Show places
          </button>
        </footer>
      </div>
    </div>
  );
};

export default SearchBooking;
