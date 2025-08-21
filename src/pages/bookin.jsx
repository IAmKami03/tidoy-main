import React, { useContext, useEffect, useState } from "react";
import arrowLeft from "../assets/chevron_left.png";
import bImg from "../assets/bookingImg.png";
import star from "../assets/star_half.png";
import kingBed from "../assets/king_bed.png";
import bathTub from "../assets/bathtub.png";
import homeIcon from "../assets/home.png";
import arrowRight from "../assets/chevron_right.png";

import { FaTag } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { Link, useNavigate, useParams } from "react-router-dom";
import FilterButtons from "../components/searchComp/FilterButtons";

const Booking = ({ setScreen }) => {
  const { id } = useParams();
  console.log(id);
  const [booking, setBooking] = useState(null);

  const [loading, setLoading] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("Select Promo");

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  const [showModal, setShowModal] = useState(false);

  const handleOptionSelect = (value) => {
    setSelectedValue(value);
    setIsModalOpen(false);
  };

  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [guestCount, setGuestCount] = useState(1);
  const [bookingId, setBookingId] = useState(null); // New state for bookingId

  // Fetch property price if not set in context
  useEffect(() => {
    const fetchBooking = async () => {
      const res = await fetch(
        `https://backend-tidoy-payment-4.onrender.com/api/booking/${id}`
      );
      const data = await res.json();
      setBooking(data);

      setBookingId(data._id);
      console.log("Booking ID being sent:", bookingId);
    };
    fetchBooking();
  }, [id]);

  if (!booking) return <p>Loading booking...</p>;

  const price = 152;
  const serviceFee = 2;

  const totalPrice =
    price * Math.ceil((checkOutDate - checkInDate) / (1000 * 60 * 60 * 24)) +
    serviceFee;

  const formatDate = (date) => {
    if (!date) return "--";
    return new Intl.DateTimeFormat("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }).format(date);
  };

  // 🔑 Handle Paystack Payment
  const handlePayment = async (bookingId) => {
    try {
      console.log("🔎 Sending bookingId:", bookingId);

      const res = await fetch(
        "https://backend-tidoy-payment-4.onrender.com/api/payment/initialize",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            bookingId: booking._id, // <-- replace with real bookingId
            email: "customer@email.com", // <-- replace with user email
            amount: totalPrice * 100, // Pass total price in Naira
          }),
        }
      );

      const data = await res.json();

      if (res.ok && data.authorizationUrl) {
        window.location.href = data.authorizationUrl; // redirect to Paystack
      } else {
        console.error("Payment init failed:", data);
        alert(
          data.error ||
            data.details?.message ||
            JSON.stringify(data.details) ||
            "Failed to initialize payment"
        );
      }
    } catch (err) {
      console.error("Payment init error:", err);
      alert("Error initializing payment");
    } finally {
      setLoading(false);
    }
  };

  // Trigger booking creation before payment
  const handleReserveAndPay = async () => {
    if (!bookingId) {
      console.error("No booking ID available for payment");
      return;
    }

    await handlePayment(bookingId);
  };

  return (
    <div className="relative bg-white mx-auto">
      <div
        className={`${
          isModalOpen ? "pointer-events-none " : ""
        }bg-white w-[375px]`}
      >
        <div className="flex p-4 gap-4">
          <Link to={`/product/${id}`}>
            <img src={arrowLeft} className="text-[18px]" alt="" />
          </Link>
          <div className="flex gap-4 items-center">
            <p className="font-[700] text-[14px] tracker-[2%]">
              Request booking
            </p>
          </div>
        </div>
        <div className="flex flex-col p-4 gap-[10px]">
          <div className="flex items-center border border-[#DCE0E4] rounded-[12px] bg-[#FFFFFF]">
            <img src={bImg} alt="" className="rounded-l-[12px] h-[172px]" />
            <div className="flex flex-col gap-1 p-1.5">
              <div className="flex flex-col gap-1.5">
                <h3 className="font-bold text-[16px] text-[#2D2E2E] leading-[24px]">
                  Villa Family Resort Dago Pakar
                </h3>
                <p className="font-normal text-[10px] text-[#A6A9AC]">
                  Dago Pakar, Bandung
                </p>
                <div className="flex items-center">
                  <img src={star} alt="" />
                  <p className="font-normal text-[10px] text-[#2D2E2E]">
                    4.8 <span className="text-[#A6A9AC]">(21 Review)</span>
                  </p>
                </div>

                <div className="flex gap-3">
                  <div className="flex items-center gap-2">
                    <img src={kingBed} alt="" />
                    <p className="font-normal text-[10px] text-[#A6A9AC]">
                      4 room
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <img src={bathTub} alt="" />
                    <p className="font-normal text-[10px] text-[#A6A9AC]">
                      {" "}
                      2 bath
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <img src={homeIcon} alt="" />
                    <p className="font-normal text-[10px] text-[#A6A9AC]">
                      42.0 m2
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex">
                <h3 className="font-bold text-[18px] text-[#2D2E2E] ">$152 </h3>
                <p className="font-normal text-[12px] text-[#858789] pt-[3px]">
                  /night
                </p>
              </div>
            </div>
          </div>

          {/* ============================== */}

          <div className="px-4 pt-4 rounded-xl border-[1px] border-[#DCE0E4] bg-[#FFFFFF]">
            <div className="flex pb-4 gap-1">
              <p className="font-[700] text-[14px] tracking-[2%] text-[#2D2E2E]">
                Your Booking
              </p>
            </div>
            <div className="border-t border-[#DCE0E4] flex flex-col py-4 gap-4">
              {" "}
              <div
                onClick={() => setShowModal(true)}
                className="flex justify-between items-center cursor-pointer"
              >
                <div className="flex flex-col gap-1">
                  <p className="font-[700] text-[12px] leading-[16px] tracking-[3%] text-[#2D2E2E]">
                    Check-in
                  </p>
                  <p className="font-[500] text-[10px] leading-[14px] tracking-[4%] text-[#747677]">
                    {formatDate(checkInDate)}
                  </p>
                </div>
                <p className="font-[600] text-[10px] leading-[2%] text-[#2D2E2E] underline ">
                  Change
                </p>
              </div>
              <div
                onClick={() => setShowModal(true)}
                className="flex justify-between items-center cursor-pointer"
              >
                <div className="flex flex-col gap-1">
                  <p className="font-[700] text-[12px] leading-[16px] tracking-[3%] text-[#2D2E2E]">
                    Checkout
                  </p>
                  <p className="font-[500] text-[10px] leading-[14px] tracking-[4%] text-[#747677]">
                    {formatDate(checkOutDate)}
                  </p>
                </div>
                <p className="font-[600] text-[10px] leading-[2%] text-[#2D2E2E] underline ">
                  Change
                </p>
              </div>
              <div
                onClick={() => setShowModal(true)}
                className="flex justify-between items-center cursor-pointer"
              >
                <div className="flex flex-col gap-1">
                  <p className="font-[700] text-[12px] leading-[16px] tracking-[3%] text-[#2D2E2E]">
                    Guest
                  </p>
                  <p className="font-[500] text-[10px] leading-[14px] tracking-[4%] text-[#747677]">
                    {guestCount} guest{guestCount > 0 ? "s" : ""}
                  </p>
                </div>
                <p className="font-[600] text-[10px] leading-[2%] text-[#2D2E2E] underline ">
                  Change
                </p>
              </div>
            </div>
          </div>

          {/* =================================== */}

          <div className="px-4 pt-4 rounded-xl border-[1px] border-[#DCE0E4] bg-[#FFFFFF]">
            <div className="flex pb-4 gap-1">
              <p className="font-[700] text-[14px] tracking-[2%]">
                Price details
              </p>
            </div>
            <div className="border-t border-[#DCE0E4] flex flex-col py-4 gap-4">
              <div className="flex justify-between gap-1">
                <p className="font-[400] text-[12px] leading-[16px] tracking-[3%] text-[#2D2E2E]">
                  Price
                </p>
                <p className="font-[400] text-[12px] leading-[14px] tracking-[4%] text-[#595A5B]">
                  ${price} x{" "}
                  {checkInDate && checkOutDate
                    ? Math.ceil(
                        (checkOutDate - checkInDate) / (1000 * 60 * 60 * 24)
                      ) + " nights"
                    : ""}
                </p>
              </div>
              <div className="flex justify-between gap-1">
                <p className="font-[400] text-[12px] leading-[16px] tracking-[3%] text-[#2D2E2E]">
                  Service fee
                </p>
                <p className="font-[500] text-[12px] leading-[14px] tracking-[4%] text-[#747677]">
                  ${serviceFee}
                </p>
              </div>
              <div className="flex justify-between gap-1">
                <p className="font-[700] text-[14px] tracking-[3%] text-[#2D2E2E]">
                  Total price
                </p>
                <p className="font-[700] text-[12px] leading-[14px] tracking-[4%] text-[##595A5B]">
                  ${totalPrice}
                </p>
              </div>
            </div>
          </div>

          {/* ========================= */}

          <div className="rounded-xl border-[1px] border-[#DCE0E4] bg-[#FFFFFF]">
            <div className="flex p-4 gap-1 justify-between">
              <p className="font-[700] text-[14px] tracking-[2%]">Promo</p>
              <p className="font-[600] tracking-[2%] text-[#2D2E2E] text-[10px] border-b-1 h-[14px] border-[#DCE0E4]">
                Show code{" "}
              </p>
            </div>
            <hr className="w-[310px] border-[#DCE0E4] mx-auto" />
            <div className="flex flex-col p-4 gap-4">
              <div
                onClick={handleOpenModal}
                className="w-[311px] h-[56px] gap-6 border-1 rounded-xl border-[#DCE0E4]  flex p-4 items-center"
              >
                <FaTag
                  className={`${
                    selectedValue === "Select Promo"
                      ? "text-[#A6A9AC]"
                      : "text-[#2D2E2E]"
                  } text-[#2D2E2E] text-[20px]`}
                  alt=""
                />
                <label
                  htmlFor=""
                  className={`${
                    selectedValue === "Select Promo"
                      ? "text-[#A6A9AC]"
                      : "text-[#2D2E2E]"
                  } text-[#2D2E2E] w-[223px] h-[20px] font-[500] text-[14px] tracking-[2%] cursor-pointer`}
                >
                  {selectedValue}
                </label>
                <IoIosArrowForward
                  className={`${
                    selectedValue === "Select Promo"
                      ? "text-[#A6A9AC]"
                      : "text-[#2D2E2E]"
                  } text-[#2D2E2E] text-[20px]`}
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="rounded-xl border-[1px] border-[#DCE0E4] bg-[#FFFFFF]">
            <div className="flex p-4 gap-1 justify-between">
              <p className="font-[700] text-[14px] tracking-[2%]">Pay with</p>
            </div>
            <hr className="w-[310px] border-[#DCE0E4] mx-auto" />
            <div className="flex flex-col p-4 gap-4">
              <div className="w-[311px] h-[56px] gap-6 border-1 rounded-xl border-[#DCE0E4] flex p-4 items-center">
                <label
                  htmlFor=""
                  className="w-[223px] h-[20px] text-[#A6A9AC] font-[500] text-[14px] tracking-[2%]"
                >
                  Select Method
                </label>
                <img src={arrowRight} alt="" />
              </div>
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center ">
              <div>
                <p className="font-[400] text-[12px] text-[#858789]">
                  Total amount
                </p>
                <p className="font-[700] text-[18px] tracking-[0.5%]">
                  ${totalPrice}
                </p>
              </div>
              <button
                onClick={handleReserveAndPay}
                // disabled={
                //   loading || !checkInDate || !checkOutDate || !guestCount
                // }
                className="rounded-2xl p-4 gap-2 bg-[#FF9A01] w-[148px] font-[700] text-[16px] text-[#FFFFFF] cursor-pointer disabled:opacity-50"
              >
                {loading ? "Processing..." : "Pay now"}
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Dark blurry overlay + modal */}
      {isModalOpen && (
        <div className="absolute top-0 left-0 w-full h-full z-50">
          {/* Blur and dark background */}
          <div className="absolute inset-0 backdrop-blur-sm bg-[#090909]/70"></div>

          {/* Modal content centered on top */}
          <div className="absolute inset-0 flex items-center justify-center z-10">
            {/* <PromoModal
              isOpen={isModalOpen}
              onClose={handleCloseModal}
              onSubmit={handleOptionSelect}
            /> */}
          </div>
        </div>
      )}

      {showModal && (
        <div className="fixed inset-0  z-50 flex justify-center backdrop-blur-sm min-h-screen  bg-[#2D2E2ECC]">
          {" "}
          {/* <div className="h-full  ">
            <FilterButtons
              checkInDate={checkInDate}
              checkOutDate={checkOutDate}
              guestCount={guestCount}
              setCheckInDate={setCheckInDate}
              setCheckOutDate={setCheckOutDate}
              setGuestCount={setGuestCount}
              onClose={() => setShowModal(false)}
              setScreen={setScreen}
            />
          </div> */}
        </div>
      )}
    </div>
  );
};

export default Booking;
