import React from "react";
import bed from "../../assets/Images/bed.png";
import bath from "../../assets/Images/bath.png";
import size from "../../assets/Images/size-house.png";
import halfStar from "../../assets/Images/V (1).png";
import heart from "../../assets/Images/heart.png";
import family from "../../assets/Images/ForS.png";
import dot from "../../assets/Images/Dot.png";
import map from "../../assets/Images/map.png";
import arrleft from "../../assets/Images/arrow_left.png";
import MapComponent from "./MapComponent";

const BasedOnLocation = ({setScreen}) => {
  return (
    <div className="relative">
      <div className="relative ">
        <MapComponent />
      </div>
    </div>
  );
};

export default BasedOnLocation;
