import { createContext, useEffect, useState } from "react";

// 1   Create Context
export const DateContext = createContext();

// 2   Custom Hook (easier access)
export const useFilter = () => useContext(DateContext);

// 3   Provider Component
export const DateProvider = ({ children }) => {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [guestCount, setGuestCount] = useState({
    adults: 0,
    children: 0,
    infants: 0,
  });

  // 4   Load from localStorage on first render
  useEffect(() => {
    try {
      const saved = localStorage.getItem("dates");
      if (saved) {
        const parsed = JSON.parse(saved);
        setCheckInDate(parsed.checkIn || null);
        setCheckOutDate(parsed.checkOut || null);
        setGuestCount(parsed.guests || { adults: 0, children: 0, infants: 0 });
      }
    } catch (err) {
      console.error("Error loading dates from localStorage:", err);
    }
  }, []);

  // 5    Save to localStorage every time filters change

  useEffect(() => {
    try {
      localStorage.setItem(
        "dates",
        JSON.stringify({ checkInDate, checkOutDate, guestCount })
      );
    } catch (err) {
      console.error("Error saving dates to localStorage:", err);
    }
  }, [checkInDate, checkOutDate, guestCount]);

  return (
    <DateContext.Provider
      value={{
        checkInDate,
        setCheckInDate,
        checkOutDate,
        setCheckOutDate,
        guestCount,
        setGuestCount,
      }}
    >
      {children}
    </DateContext.Provider>
  );
};
