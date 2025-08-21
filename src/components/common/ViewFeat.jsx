import React from "react";
import bed from "../../assets/Images/bed.png";
import bath from "../../assets/Images/bath.png";
import size from "../../assets/Images/size-house.png";
import heart from "../../assets/Images/heart-plain.png";
import halfStar from "../../assets/Images/V (1).png";
import { useProperties } from "../../contexts/PropertiesContext"; // ✅ import hook
import { Link } from "react-router-dom";

const ViewFeat = ({properties = []}) => {
  // const { properties } = useProperties(); // ✅ get global properties

  if (!properties || properties.length === 0) {
    return <p className="text-center mt-4">No properties found</p>;
  }

  return (
    <div className="flex flex-col gap-4 relative py-4">
      {properties.map((property, index) => (
        <Link
          key={`${property._id}-${index}`}
          to = {`/product/${property._id}`}
          className="flex items-center border border-[#EDF1F5] rounded-lg"
        >
          <img
            src={Array.isArray(property.images) ? property.images[0] : property.images}
            alt={property.title}
            className="rounded-l-lg w-[115px] h-[172px] object-cover"
          />
          <div className="p-3 flex flex-col gap-3">
            <div className="flex flex-col items-start gap-2">
              <h2 className="text-[16px] font-bold text-start text-[#2D2E2E]">
                {property.title}
              </h2>
              <p className="text-[10px] text-[#A6A9AC]">
                {property.city}, {property.area}
              </p>
              <div className="flex items-center gap-1">
                <img src={halfStar} alt="rating star" />
                <p className="text-[10px] text-[#2D2E2E]">
                  {property.score || "No rating"}{" "}
                  <span className="text-[#A6A9AC]">
                    ({property.reviewCount || 0} Review)
                  </span>
                </p>
              </div>

              <div className="flex text-[10px] gap-3">
                <div className="flex items-center gap-1">
                  <img src={bed} alt="bedrooms" />
                  <p className="text-[#A6A9AC]">{property.rooms}</p>
                </div>

                <div className="flex items-center gap-1">
                  <img src={bath} alt="bathrooms" />
                  <p className="text-[#A6A9AC]">{property.bathrooms}</p>
                </div>

                <div className="flex items-center gap-1">
                  <img src={size} alt="size" />
                  <p className="text-[#A6A9AC]">{property.size}</p>
                </div>
              </div>
            </div>

            <div className="flex w-[187px] items-center justify-between">
              <div className="flex items-center">
                <h2 className="text[16px] font-bold text-[#2D2E2E]">
                  N{property.pricePerNight}
                </h2>
                <p className="text-[10px] text-[#A6A9AC]">/night</p>
              </div>
              <img src={heart} alt="wishlist" />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ViewFeat;
