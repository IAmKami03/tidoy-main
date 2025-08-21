import React from "react";
import MainProd from "../components/productComp/MainProd";
import Booking from "../components/productComp/Booking";
import BookingSuccess from "../components/productComp/BookingSuccess";

const ProductDetail = () => {
  return (
    <div>
      {" "}
      <MainProd />
      <Booking/>
      <BookingSuccess/>
    </div>
  );
};

export default ProductDetail;
