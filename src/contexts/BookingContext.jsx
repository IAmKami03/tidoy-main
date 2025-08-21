import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

// Create the context
export const BookingContext = createContext();

// Create a provider component
export const BookingProvider = ({ children }) => {
  const navigate = useNavigate();

  const [bookedProperty, setBookedProperty] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleReserve = async (property) => {
    setIsLoading(true);

    try {
      // Save property in BookingContext

      // Step 1: Create booking
      const bookingRes = await fetch(
        "https://backend-tidoy-payment-4.onrender.com/api/booking",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            propertyId: property._id,
            startDate: new Date().toISOString(),
            endDate: new Date(Date.now() + 86400000).toISOString(),
            guests: 1,
            totalPrice: property.pricePerNight,
          }),
        }
      );

      const bookingData = await bookingRes.json();
      console.log("Booking Created:", bookingData);
      setBookedProperty(bookingData);
      navigate(`/bookin/${bookingData._id}`);
    } catch (error) {
      console.error("Error during booking/payment:", error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <BookingContext.Provider
      value={{ bookedProperty, setBookedProperty, isLoading, handleReserve }}
    >
      {children}
    </BookingContext.Provider>
  );
};
