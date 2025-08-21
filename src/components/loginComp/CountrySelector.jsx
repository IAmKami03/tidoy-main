import React, { useState, useEffect, useContext } from "react";
import ExpandMore from "../../assets/Images/expand_more.png";
import errr from "../../assets/Images/error.png";
import countryData from "../../data.json";
import LogContext from "../../contexts/LogContext";

const CountrySelector = () => {
  const { selectedCountry, setSelectedCountry, phoneNumber, setPhoneNumber } =
    useContext(LogContext);

  const [countries, setCountries] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");

  // Fetch country list
  useEffect(() => {
    const list = countryData
      .map((count) => ({
        name: count.name,
        dial_code: `+${count.callingCodes?.[0] || ""}`,
        code: count.alpha2Code,
        flagUrl: count.flags?.svg || "",
      }))
      .filter((count) => count.dial_code)
      .sort((a, b) => a.name.localeCompare(b.name));

    setCountries(list);

    // set default country if not already chosen
    if (!selectedCountry && list.length > 0) {
      setSelectedCountry(list[0]);
      setPhoneNumber(""); // reset when setting default
    }
  }, []);

  // Validate phone number when user leaves input
  const handlePhonenumberBlur = () => {
    if (!/^\d{7,15}$/.test(phoneNumber)) {
      setError("Invalid phone number");
    } else {
      setError("");
    }
  };

  // Clear error when user starts typing
  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, ""); // allow only digits
    setPhoneNumber(value);
    if (/^\d{7,15}$/.test(value)) setError("");
  };

  // ✅ Construct full international number
  const getFullNumber = () =>
    selectedCountry
      ? `${selectedCountry.dial_code}${phoneNumber}`
      : phoneNumber;

  if (!selectedCountry)
    return <p className="text-center mt-10">Loading countries…</p>;

  return (
    <div className="relative w-full mx-auto">
      <p className={`font-medium text-[14px] ${error ? "text-red-500" : ""}`}>
        Phone Number
      </p>

      {/* Input */}
      <div className="flex items-center space-x-2 mt-1 w-[340px] border border-[#DCE0E4] rounded-md relative">
        <button
          onClick={() => setIsOpen(true)}
          className="py-2 text-[#A6A9AC] rounded-md text-sm flex items-center absolute left-3 space-x-1"
        >
          <img
            src={selectedCountry.flagUrl}
            alt={selectedCountry.code}
            className="w-5 h-3.5 object-cover border rounded-sm"
          />
          <span>{selectedCountry.dial_code}</span>
          <img src={ExpandMore} alt="" />
        </button>

        <input
          type="text"
          placeholder="ex. 81234567890"
          value={phoneNumber}
          onChange={handlePhoneChange}
          onBlur={handlePhonenumberBlur}
          className={`flex-1 px-4 py-2 pl-24 rounded-md text-sm outline-none ${
            error ? "text-red-500 bg-[#FBD2DC]" : ""
          }`}
        />
      </div>

      {/* Error */}
      {error && (
        <div className="flex items-center mt-1">
          <img src={errr} alt="error" className="w-4 h-4 mr-1" />
          <span className="text-red-500 text-[12px]">{error}</span>
        </div>
      )}

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 flex items-end z-50"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="w-[385px] bg-white rounded-t-2xl p-4 max-h-[60vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Country</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-xl font-bold"
              >
                &times;
              </button>
            </div>

            <input
              type="text"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-3 py-2 mb-4 border rounded-full text-sm"
            />

            <ul className="max-h-[30vh] overflow-y-auto pr-1">
              {countries
                .filter((c) =>
                  c.name.toLowerCase().includes(search.toLowerCase())
                )
                .map((country) => (
                  <li
                    key={country.code}
                    className="flex items-center justify-between py-2 px-1 cursor-pointer hover:bg-gray-100 rounded-md"
                    onClick={() => {
                      setSelectedCountry(country);
                      setIsOpen(false);
                      setPhoneNumber(""); // reset number when switching country
                    }}
                  >
                    <div className="flex items-center space-x-2">
                      <img
                        src={country.flagUrl}
                        alt={country.code}
                        className="w-6 h-4 object-cover rounded-sm border"
                      />
                      <span className="text-sm">
                        ({country.dial_code}) {country.name}
                      </span>
                    </div>
                    <span className="text-lg">
                      {selectedCountry.code === country.code ? "🔘" : "⚪"}
                    </span>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      )}




      
    </div>
  );
};

export default CountrySelector;
