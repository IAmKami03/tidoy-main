import React, { useEffect, useRef } from "react";
import locayTag from "../../assets/Images/location-tag.png";
import arrow from "../../assets/Images/arrow-down.png";
import left from "../../assets/Images/arrow_left.png";
import messages from "../../assets/Images/messages.png";
import notification from "../../assets/Images/notification.png";
import searchIcon from "../../assets/Images/search.png";
import miniMap from "../../assets/Images/mini-map.png";
import heart from "../../assets/Images/heart.png";
import halfStar from "../../assets/Images/V (1).png";
import bed from "../../assets/Images/bed.png";
import bath from "../../assets/Images/bath.png";
import sizeIcon from "../../assets/Images/size-house.png";
import heartPlain from "../../assets/Images/heart-plain.png";

import { featuredDestinations } from "../../data/featuredData";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../common/Footer";
import { MdApartment, MdHouse, MdVilla } from "react-icons/md";
import { IoGridSharp } from "react-icons/io5";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { IoIosArrowForward } from "react-icons/io";
import { useState } from "react";
import { useHomeContext } from "../../contexts/HomeContext";

const FullScreen = ({ setScreen }) => {
  const navigate = useNavigate();

  const { data, filterByType } = useHomeContext();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filtered, setFiltered] = useState([]);
  const [favorites, setFavorites] = useState({});

  const toggleFavorite = (id) => {
    setFavorites((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  useEffect(() => {
    if (!data || !Array.isArray(data)) {
      setFiltered([]);
      return;
    }

    if (selectedCategory === "All") {
      setFiltered(data);
    } else {
      setFiltered(
        data.filter((item) => item.propertyType === selectedCategory)
      );
    }
  }, [data, selectedCategory]);

  const nearbyRef = useRef(null);
  const featureRef = useRef(null);

  const scroll = (ref, direction) => {
    if (ref.current) {
      const scrollAmount = 200;
      ref.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      <div className="sticky w-full top-0 z-4 bg-white">
        <div className="flex items-center justify-between py-2 px-4">
          <div className="flex flex-col items-start gap-1">
            <p className="text-[#A6A9AC] text-[12px] ">Find your place in</p>
            <div className="flex items-center gap-[8px]">
              <img src={locayTag} alt="" />
              <h1 className="text-[#2D2E2E] text-[18px] font-bold">
                Lagos, Nigeria
              </h1>
            </div>
          </div>

          <div className="flex items-center p-2 gap-4">
            <Link to="/message">
              <img
                src={messages}
                alt=""
              />
            </Link>
            <Link to="/notification">
              <img src={notification} alt="" />
            </Link>{" "}
          </div>
        </div>

        <div className="py-2 px-4 flex items-center gap-[10px]">
          <Link
            to="/search"
            className="flex items-center relative w-[285px] border px-4 py-3 rounded-[25px]"
          >
            <input
              type="search"
              placeholder="Where are you going?"
              className="relative outline-none"
            />
            <img src={searchIcon} alt="" className="absolute right-5" />
          </Link>
          <img onClick={() => setScreen("location")} src={miniMap} alt="" />
        </div>
      </div>

      {/* ============================================== */}

      <div>
        <div className="px-4 pt-3 pb-2 flex justify-between">
          <h2 className="font-bold text-[14px] text-[#2D2E2E]">Nearby</h2>
          <Link
            to="/nearby"
            className="font-semibold text-[10px] text-[#2D2E2E] underline"
          >
            Show all{" "}
          </Link>
        </div>

        <div className="flex items-center relative px-4">
          <button
            onClick={() => scroll(nearbyRef, "left")}
            className="absolute z-10 left-0 rounded-full bg-white"
          >
            <img src={left} alt="" />
          </button>
          <div
            className="overflow-x-auto flex  no-scrollbar"
            style={{ scrollBehavior: "smooth" }}
            ref={nearbyRef}
          >
            {data.map((item) => {
              return (
                <div className=" px-1.5 pt-3 pb-2 gap-3">
                  <div
                    key={item.id}
                    className="w-[165px] border-1 border-[#EDF1F5] rounded-lg"
                  >
                    <div className="relative">
                      <img
                        src={item.images[0]}
                        alt=""
                        className="relative rounded-t-lg w-[165px] h-[148px] object-cover"
                      />
                      <img
                        src={heartPlain}
                        alt=""
                        className="absolute top-2 right-2"
                      />
                    </div>

                    <div className="flex flex-col items-start gap-1 p-2">
                      <div className="flex flex-col items-start">
                        <h4 className="text-[12px] font-bold text-[#2D2E2E]">
                          {item.title.slice(0, 20)}...
                        </h4>
                        <p className="text-[10px] font-normal text-[#A6A9AC]">
                          {item.area}, {item.city}
                        </p>
                      </div>

                      <div className="flex gap-2">
                        <div className="flex items-center">
                          <img src={halfStar} alt="" className="" />
                          <p className="text-[10px] font-normal text-[#2D2E2E]">
                            {item.score}
                          </p>
                        </div>
                        <p className="text-[10px] font-normal text-[#2D2E2E]">
                          {item.distance}
                        </p>
                      </div>

                      <div className="flex items-end">
                        <p className="text-[12px] font-bold text-[#2D2E2E]">
                          {item.pricePerNight.toLocaleString("en-NG", {
                            style: "currency",
                            currency: "NGN",
                          })}
                        </p>
                        <p className="text-[10px] text-[#A6A9AC] font-normal">
                          /night
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <button
            onClick={() => scroll(nearbyRef, "right")}
            className="absolute z-10 right-0 rounded-full bg-white"
          >
            <IoIosArrowForward className="w-[18px] h-[20px]" />
          </button>
        </div>

        {/* ======================================================== */}

        <div className="mt-[10px] ">
          <div className="px-4 pt-3 pb-2 flex justify-between">
            <h2 className="font-bold text-[14px] text-[#2D2E2E]">
              Featured Destination
            </h2>
            <Link
              onClick={() => setScreen("feature")}
              className="font-semibold text-[10px] text-[#2D2E2E] underline"
            >
              Show all{" "}
            </Link>
          </div>

          <div className="flex items-center relative px-4">
            <button
              onClick={() => scroll(featureRef, "left")}
              className="absolute z-10 left-0 rounded-full bg-white"
            >
              <img src={left} alt="" />
            </button>
            <div
              className="overflow-x-auto flex  no-scrollbar"
              style={{ scrollBehavior: "smooth" }}
              ref={featureRef}
            >
              {featuredDestinations.map((item) => {
                return (
                  <div className=" px-1.5 pt-3 pb-2 gap-3">
                    <div key={item.id} className="relative w-[165px]">
                      <img
                        src={item.image}
                        alt=""
                        className="relative rounded-lg h-[234px] w-[165px] object-cover"
                      />
                      <div className="absolute bottom-2 left-2 flex flex-col items-start">
                        <h2 className="text-[16px] font-bold text-[#FFFFFF]">
                          {item.name}
                        </h2>
                        <p className="text-[10px] font-normal text-[#C3C7CA]">
                          {item.recommendations} recommendations
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <button
              onClick={() => scroll(featureRef, "right")}
              className="absolute z-10 right-0 rounded-full bg-white"
            >
              <IoIosArrowForward className="w-[18px] h-[20px]" />
            </button>
          </div>
        </div>
        {/* ========================================================== */}
        <div className="px-4 flex gap-4 justify-between pt-3 mb-2">
          {[
            { name: "All", icon: <IoGridSharp /> },
            { name: "House", icon: <MdHouse /> },
            { name: "Villa", icon: <MdVilla /> },
            { name: "Apartment", icon: <HiBuildingOffice2 /> },
            { name: "Hotel", icon: <MdApartment /> },
          ].map((item) => (
            <div
              key={item.name}
              onClick={() => setSelectedCategory(item.name)}
              className={`p-1 flex flex-col gap-1 items-center cursor-pointer ${
                selectedCategory === item.name
                  ? "border-b font-bold text-[#2D2E2E]"
                  : "text-[#A6A9AC]"
              }`}
            >
              {item.icon}
              <p className="text-[10px]">{item.name}</p>
            </div>
          ))}
        </div>

        {/* =========================================================== */}

        <div className="p-4 flex flex-col gap-4 relative">
          {filtered && filtered.length > 0 ? (
            filtered.map((prop) => (
              <Link
                key={prop.id}
                to={`/product/${prop._id}`}
                className="no-underline"
              >
                <div className="flex items-center border border-[#EDF1F5] rounded-lg">
                  <img
                    src={prop.images[0]}
                    alt={prop.title}
                    className="rounded-l-lg w-[114.33px] h-[172px]"
                  />
                  <div className="p-3 flex flex-col gap-3">
                    <div className="flex flex-col items-start gap-2">
                      <h2 className="text-[16px] font-bold text-[#2D2E2E]">
                        {prop.title.slice(0, 20)}...
                      </h2>
                      <p className="text-[10px] text-[#A6A9AC]">
                        {prop.area},{prop.city}
                      </p>
                      <div className="flex items-center gap-1">
                        <img src={halfStar} alt="rating" />
                        <p className="text-[10px] text-[#2D2E2E]">
                          {prop.score}{" "}
                          <span className="text-[#A6A9AC]">
                            ({prop.reviewCount} Review)
                          </span>
                        </p>
                      </div>

                      <div className="flex text-[10px] gap-3">
                        <div className="flex items-center gap-1">
                          <img src={bed} alt="bed" />
                          <p className="text-[#A6A9AC]">{prop.rooms} room</p>
                        </div>
                        <div className="flex items-center gap-1">
                          <img src={bath} alt="bath" />
                          <p className="text-[#A6A9AC]">
                            {prop.bathrooms} bath
                          </p>
                        </div>
                        <div className="flex items-center gap-1">
                          <img src={sizeIcon} alt="size" />
                          <p className="text-[#A6A9AC]">{prop.size}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex w-[187px] items-center justify-between">
                      <div className="flex items-center">
                        <h2 className="text[16px] font-bold text-[#2D2E2E]">
                          {prop.pricePerNight.toLocaleString("en-NG", {
                            style: "currency",
                            currency: "NGN",
                          })}
                        </h2>
                        <p className="text-[10px] text-[#A6A9AC]">/night</p>
                      </div>
                      <img
                        src={favorites[prop.id] ? heart : heartPlain}
                        alt="favorite"
                        onClick={() => toggleFavorite(prop.id)}
                        className="cursor-pointer"
                      />
                    </div>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <p className="text-center text-[#A6A9AC] mt-4">
              No properties found for "{selectedCategory}"
            </p>
          )}
          <div className="absolute bottom-0 left-0">
            <Footer />
          </div>
        </div>
        {/* ========================================================== */}
      </div>
    </div>
  );
};

export default FullScreen;
