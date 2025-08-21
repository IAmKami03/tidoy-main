import React from "react";
import filter from "../assets/Images/filter.png";
import read from "../assets/Images/Badges.png";
import arrleft from "../assets/Images/arrow_left.png";
import heart from "../assets/Images/heart-plain.png";
import halfStar from "../assets/Images/V (1).png";
import luxury from "../assets/Images/beach-house.png";
import abahVilla from "../assets/Images/abah-villa.png";
import dago from "../assets/Images/dago.png";
import nini from "../assets/Images/nini.png";
import pasteur2 from "../assets/Images/pasteur2.png";
import abah2 from "../assets/Images/abah2.png";
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useHomeContext } from "../contexts/HomeContext";
import { useProperties } from "../contexts/PropertiesContext";
import SearchBooking from "../components/searchComp/SearchBooking";

function getDistance(lat1, lon1, lat2, lon2) {
  const R = 6371; // Radius of Earth in km
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) *
      Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; // distance in km
}

const Nearby = () => {
  const navigate = useNavigate();
  const [showFilter, setShowFilter] = useState(false);
  const {
    properties,
    filters,
    setFilters,
    handleApplyFilters,
    resetFilters,
    isLoading,
  } = useProperties();
  const { data, loading, error } = useHomeContext();
  const [userLocation, setUserLocation] = useState(null);
  const [nearbyProperties, setNearbyProperties] = useState([]);

  useEffect(() => {
    // 1. Get user's location
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const coords = {
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        };
        setUserLocation(coords);
      },
      (err) => {
        console.error("Location access denied:", err);
      }
    );
  }, []);

  useEffect(() => {
    if (!userLocation || !data.length) return;

    // 1. Get all properties within 5km
    let filtered = data.filter((property) => {
      if (!property.location?.coordinates) return false;
      const [lng, lat] = property.location.coordinates;
      const distance = getDistance(
        userLocation.lat,
        userLocation.lng,
        lat,
        lng
      );
      return distance <= 5;
    });

    // 2. Apply category filters
    if (filters.category === "recommended") {
      filtered = filtered.sort(
        (a, b) => (b.reviewCount || 0) - (a.reviewCount || 0)
      );
    } else if (filters.category === "popular") {
      filtered = filtered.sort((a, b) => (b.score || 0) - (a.score || 0));
    } else if (filters.category === "bestPrice") {
      filtered = filtered.sort(
        (a, b) => (a.pricePerNight || 0) - (b.pricePerNight || 0)
      );
    }

    setNearbyProperties(filtered);
  }, [userLocation, data, filters.category]);

  if (loading) return <p>Loading nearby...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div>
      <div>
        <div className="sticky top-0 z-3 bg-white ">
          <div className="p-4 gap-4 flex items-center">
            <img src={arrleft} alt="" onClick={() => navigate("/home")} />{" "}
            <h2 className="font-bold text-[14px] text-[#2D2E2E]">Nearby</h2>
          </div>
          {/* ======================================== */}
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
          {/*  */}
        </div>
        {/* ====================================================== */}
        {nearbyProperties.length === 0 ? (
          <p>No nearby properties found.</p>
        ) : (
          <div className="grid grid-cols-2 px-4 pt-3 pb-2 gap-3">
            {nearbyProperties.map((property) => (
              <Link
                to={`/product/${property._id}`}
                key={property._id}
                className="border-1 border-[#EDF1F5] rounded-lg"
              >
                <div className="relative">
                  <img
                    src={property.images?.[0]}
                    alt={property.title}
                    className="relative rounded-t-lg w-[165px] h-[148px] "
                  />
                  <img src={heart} alt="" className="absolute top-2 right-2" />
                </div>

                <div className="flex flex-col items-start gap-1 p-2">
                  <div className="flex flex-col items-start">
                    <h4 className="text-[12px] font-bold text-[#2D2E2E]">
                      {property.title.slice(0, 20)}...
                    </h4>
                    <p className="text-[10px] font-normal text-[#A6A9AC]">
                      {property.area}
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <div className="flex items-center">
                      <img src={halfStar} alt="" className="" />
                      <p className="text-[10px] font-normal text-[#2D2E2E]">
                        4.8
                      </p>
                    </div>
                    <p className="text-[10px] font-normal text-[#2D2E2E]">
                      Within 5 km
                    </p>
                  </div>

                  <div className="flex items-end">
                    <p className="text-[12px] font-bold text-[#2D2E2E]">
                      {property.pricePerNight.toLocaleString("en-NG", {
                        style: "currency",
                        currency: "NGN",
                      })}
                    </p>
                    <p className="text-[10px] text-[#A6A9AC] font-normal">
                      /night
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
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

export default Nearby;
