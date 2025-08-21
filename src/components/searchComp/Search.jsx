import React, { useEffect, useState } from "react";
import left from "../../assets/Images/arrow_left.png";
import search from "../../assets/Images/search.png";
import near from "../../assets/Images/location.png";
import next from "../../assets/Images/next-arrow.png";
import indo from "../../assets/Images/location-tag.png";
import malay from "../../assets/Images/malaysia.png";
import sing from "../../assets/Images/singapore.png";
import history from "../../assets/Images/history.png";
import location from "../../assets/Images/search-location.png";
import FilterButtons from "./FilterButtons";
import { useContext } from "react";
import { DateContext } from "../../contexts/DateContext";
import { useNavigate } from "react-router-dom";
import { useProperties } from "../../contexts/PropertiesContext";

const Search = ({ setScreen }) => {
  const navigate = useNavigate();
  const { allUniqueAreas, setArea, handleApplyFilters, filters } =
    useProperties();
  const [searchHistory, setSearchHistory] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [searched, setSearched] = useState("");
  const [showModal, setShowModal] = useState(false);

  const {
    checkInDate,
    // setCheckInDate,
    checkOutDate,
    // setCheckOutDate,
    guestCount,
    // setGuestCount,
  } = useContext(DateContext);

  const formatDate = (date) => {
    if (!date) return "--";
    return new Intl.DateTimeFormat("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }).format(date);
  };

  const handleSearch =  (area) => {
    console.log("🔍 Searching for:", area);
    const value = area.trim();
    if (!value) return;
    setArea(value);
    setSearched(value);
    //  handleApplyFilters({ area: value });
    setScreen("result");
    if (!searchHistory.includes(value)) {
      setSearchHistory([value, ...searchHistory]);
    }
  };

  // Filter properties by searched text
  const filteredProperties = allUniqueAreas.filter((area) =>
    area.toLowerCase().includes(searched.toLowerCase())
  );

  useEffect(() => {
    setSearched(filters.area || "");
  }, [filters.area]);

  // useEffect(() => {
  //   resetFilters();
  // }, []);

  return (
    <div className=" ">
      <div className="flex items-center gap-4 ">
        <img src={left} alt="" onClick={() => navigate("/home")} />
        <div className="border border-[#A6A9AC] flex items-center justify-between w-full py-3 px-4 rounded-full">
          <input
            type="text"
            placeholder="Where are you going?"
            className="outline-none placeholder:text-[14px] placeholder:text-[#A6A9AC] 
            placeholder:font-medium"
            value={searched}
            onChange={(event) => {
              setSearched(event.target.value);
            }}
            onKeyDown={(event) => {
              if (event.key === "Enter" && searched.trim() !== "") {
                handleSearch(searched);
              }
            }}
          />
          <img
            onClick={() => {
              if (searched.trim() !== "") {
                handleSearch(searched);
              }
            }}
            src={search}
            alt=""
            className="w-[14.58px] h-[14.58px]"
          />
        </div>
      </div>

      <div
        onClick={() => setShowModal(true)}
        className="flex justify-between items-center py-2"
      >
        <div className="cursor-pointer">
          <p className="text-[10px] text-[#747677] font-normal">Tonight</p>
          <p className="text-[12px] font-normal text-[#0167FF] ">
            {" "}
            {formatDate(checkInDate)}
          </p>
        </div>

        <p className="py-[2px] px-1 bg-[#E4E9ED] text-[#2D2E2E] text-[8px] font-bold">
          {checkInDate && checkOutDate
            ? Math.ceil((checkOutDate - checkInDate) / (1000 * 60 * 60 * 24)) +
              " N"
            : ""}
        </p>
        <div className="cursor-pointer">
          <p className="text-[10px] text-[#747677] font-normal">Tomorrow</p>
          <p className="text-[12px] font-normal text-[#0167FF] ">
            {formatDate(checkOutDate)}
          </p>
        </div>

        <p className="  text-[#DCE0E4]">|</p>
        <div className="cursor-pointer">
          <p className="text-[10px] text-[#747677] font-normal">Guest</p>
          <p className="text-[12px] font-normal text-[#0167FF] ">
            {/* {guestCount} guest{guestCount > 0 ? "s" : ""} */}
            {guestCount.adults + guestCount.children + guestCount.infants} guest
          </p>
        </div>
      </div>

      {/* ======================================= */}
      {/*  */}
      {searched.trim() !== "" ? (
        <div className=" ">
          {filteredProperties.length > 0 ? (
            filteredProperties.map((area, index) => (
              <div
                key={index}
                className="flex items-center gap-2 py-2"
                onClick={() => {
                  handleSearch(area);
                  setScreen("result");
                }}
              >
                <img src={location} alt="" />
                <div>
                  <p className="text-[12px] text-[#2D2E2E] font-bold">{area}</p>
                  {/* <p className="text-[10px] text-[#747677] font-normal ">
                    {area.city}
                  </p> */}
                </div>
              </div>
            ))
          ) : (
            <p className="text-[12px] text-[#2D2E2E] font-bold">
              No results found
            </p>
          )}
        </div>
      ) : (
        <div>
          <div
            className="flex items-center justify-between py-2 my-4"
            onClick={() => {
              if (filters.area) {
                handleSearch(filters.area);
                navigate("/nearby", { state: { area: filters.area } });
              }
            }}
          >
            <div className="flex items-center gap-2">
              <img src={near} alt="" />
              <div className="flex flex-col ">
                <p className="text-[12px] font-medium text-[#2D2E2E]">Nearby</p>
                <p className="text-[10px] text-[#747677] font-normal">
                
                </p>
              </div>
            </div>

            <img src={next} alt="" />
          </div>

          {searchHistory.length > 0 && (
            <div className="flex flex-col items-start">
              <p className="py-2 text-[#2D2E2E] font-bold text-[16px] ">
                History
              </p>
              {searchHistory.map((item, index) => (
                <div className="flex items-center py-4 gap-2.5" key={index}>
                  <img src={history} alt="" />
                  <p
                    className="text-[#2D2E2E] text-[12px] font-medium"
                    onClick={() => {
                      handleSearch(item);
                      setScreen("result", { area: item });
                    }}
                  >
                    {item}
                  </p>
                </div>
              ))}
            </div>
          )}

          <div>
            <p className="text-[16px] text-[#2D2E2E] font-bold">
              Recommendation
            </p>
            {allUniqueAreas.slice(0, 3).map((area, index) => (
              
              <div
                className="flex items-center justify-between py-2 my-4 cursor-pointer"
                onClick={() => {
                  handleSearch(area);
                  setScreen("result", { area });
                }}
                key={index}
              >
                <div className="flex items-center gap-2 ">
                  <img src={indo} alt="" />
                  <div className="flex flex-col ">
                    <p className="text-[12px] font-medium text-[#2D2E2E]">
                      {area}
                    </p>
                    <p className="text-[10px] text-[#747677] font-normal">
                      100+ Stays
                    </p>
                  </div>
                </div>
                <img src={next} alt="" />
              </div>
            ))}
            {/* <div
              onClick={() => setScreen("result")}
              className="flex items-center justify-between py-2 my-4"
            >
              <div className="flex items-center gap-2">
                <img onClick={() => setScreen("result")} src={indo} alt="" />
                <div className="flex flex-col ">
                  <p className="text-[12px] font-medium text-[#2D2E2E]">
                    Ikoyi
                  </p>
                  <p className="text-[10px] text-[#747677] font-normal">
                    100+ Stays
                  </p>
                </div>
              </div>

            </div> */}

            {/* <div
              onClick={() => setScreen("result")}
              className="flex items-center justify-between py-2 my-4"
            >
              <div className="flex items-center gap-2">
                <img src={malay} alt="" />
                <div className="flex flex-col ">
                  <p className="text-[12px] font-medium text-[#2D2E2E]">
                    Victoria Island
                  </p>
                  <p className="text-[10px] text-[#747677] font-normal">
                    100+ Stays
                  </p>
                </div>
              </div>

              <img src={next} alt="" />
            </div> */}

            {/* <div
              onClick={() => setScreen("result")}
              className="flex items-center justify-between py-2 my-4"
            >
              <div className="flex items-center gap-2">
                <img src={sing} alt="" />
                <div className="flex flex-col ">
                  <p className="text-[12px] font-medium text-[#2D2E2E]">Yaba</p>
                  <p className="text-[10px] text-[#747677] font-normal">
                    100+ Stays
                  </p>
                </div>
              </div>

              <img src={next} alt="" />
            </div> */}
          </div>

          {/* =================================== */}
        </div>
      )}

      {showModal && (
        <div className="fixed inset-0  z-50 flex justify-center backdrop-blur-sm min-h-screen  bg-[#2D2E2ECC]">
          {" "}
          <div className="h-full  ">
            <FilterButtons
              onClose={() => setShowModal(false)}
              setScreen={setScreen}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
