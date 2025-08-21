import React from "react";
import villa from "../../assets/Images/27c3f4e3fdad1309d610648f10f4fc9737c130bf.png";
import iconButton from "../../assets/Images/Icon Buttons.png";
import iconButton2 from "../../assets/Images/Icon Buttons 2.png";
import iconButton3 from "../../assets/Images/Icon Buttons 3.png";
import star from "../../assets/Images/V (1).png";
import room from "../../assets/Images/king_bed.png";
import bath from "../../assets/Images/bathtub.png";
import home from "../../assets/Images/home.png";
import avatar from "../../assets/Images/Avatars Base.png";
import check from "../../assets/Images/verified.png";
import chat from "../../assets/Images/messages.png";
import { useLocation, useParams } from "react-router-dom";
import { useHomeContext } from "../../contexts/HomeContext";
import { useEffect, useState } from "react";

const MainProd = () => {
  const { id } = useParams();
  const { data, loading } = useHomeContext();

  if (loading) return <p>Loading...</p>;

  // Find property by id
  // Find property by id (check both id and _id just in case)
  const property = data.find(
    (prop) => String(prop._id) === id || String(prop.id) === id
  );

  if (!property) {
    return <p>Property not found</p>;
  }

  return (
    <div className="mt-[24px]">
      <div className="relative">
        <img
          src={property.images[0]}
          alt={property.title}
          className="relative h-[275px] w-[375px] object-cover"
        />
        <div>
          <img
            src={iconButton}
            alt=""
            className="absolute bottom-[225px] left-[25px]"
          />
          <div>
            <img
              src={iconButton2}
              alt=""
              className="absolute bottom-[225px] right-[70px]"
            />
            <img
              src={iconButton3}
              alt=""
              className="absolute bottom-[225px] right-[20px]"
            />
          </div>
        </div>

        <div>
          <p className="absolute bottom-[20px] rounded-[40px] bg-[#C3C7CA] py-[4px] px-[8px] right-[20px]">
            1/99
          </p>
        </div>
      </div>

      {/* ================ */}

      <div className="p-4 flex flex-col gap-2">
        <h2 className="font-bold text-[20px] leading-[28px] text-[#2D2E2E]">
          {property.title}
        </h2>

        <div className="flex justify-between">
          <h3 className="font-normal text-[14px] text-[#747677]">
            Dago Pakar, Bandung
          </h3>
          <div className="flex items-center gap-2">
            <img src={star} alt="" />
            <p className="font-normal text-[12px] text-[#747677]">
              4.8 (21 Review)
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="flex items-center gap-2">
            <img src={room} alt="" />
            <p className="font-normal text-[12px] text-[#747677]">4 room</p>
          </div>

          <div className="flex items-center gap-2">
            <img src={bath} alt="" />
            <p className="font-normal text-[12px] text-[#747677]">2 bath</p>
          </div>

          <div className="flex items-center gap-2">
            <img src={home} alt="" />
            <p className="font-normal text-[12px] text-[#747677]">42.0 m2</p>
          </div>
        </div>
      </div>

      {/* ======================================== */}

      <div className="flex items-center p-4 gap-3">
        <img src={avatar} alt="" />
        <div className="flex items-center">
          {" "}
          <div className="flex flex-col text-start w-[249px]">
            <div className="flex items-center gap-1">
              <h3 className="font-bold text-[16px] text-[#2D2E2E]">
                Adaline Alexa
              </h3>
              <img src={check} alt="" />
            </div>
            <p className="font-normal text-[12px] text-[#747677]">
              Property Owner
            </p>
          </div>
          <img src={chat} alt="" />
        </div>
      </div>

      {/* ========================================== */}

      <div className="p-4 flex flex-col gap-3 mb-[25px]">
        <h3 className="font-bold text-[18px] text-[#2D2E2E]">Description</h3>
        <p className="font-normal text-[14px] text-[#747677] leading-[20px]">
          Villa Family Resort Dago Pakar offers ideal accommodation for an
          unforgettable family vacation. Located in the Dago Pakar area, which
          is famous for its cool air and beautiful natural scenery, our villa
          provides a calm and comfortable atmosphere to relax with your loved
          ones.
        </p>
        <button className="font-semibold text-[12px] text-[#2D2E2E] underline text-end cursor-pointer">
          Read more
        </button>
      </div>

      {/* ======================================== */}

      <div className="flex justify-between p-4 border-t border-t-[#EDF1F5]">
        <div className="flex flex-col">
          <p className="font-normal text-[12px] text-[#858789]">Start From</p>
          <div className="flex">
            <h3 className="font-bold text-[18px] text-[#2D2E2E] ">$152 </h3>
            <p className="font-normal text-[12px] text-[#858789] pt-[3px]">
              /night
            </p>
          </div>
        </div>
        <button className="font-bold text-[16px] text-[#FFFFFF] bg-[#FF9A01] py-4 px-8 rounded-[16px] w-[148px]">
          Reserve
        </button>
      </div>
    </div>
  );
};

export default MainProd;