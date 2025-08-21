import React, { useState, useEffect } from "react";
import { MdClose } from "react-icons/md";
import data from "../../data.json";

const ChangeLanguage = ({
  currentLanguage = "",
  onClose,
  onSave,
  darkMode,
}) => {
  const [selectedLanguage, setSelectedLanguage] = useState(currentLanguage);
  const [search, setSearch] = useState("");
  const [languageList, setLanguageList] = useState([]);

  useEffect(() => {
    const searchTerm = search.toLowerCase();

    const languages = data
      .flatMap((item) => {
        const country = item.name || "Unknown";
        const flag = item.flags?.png || "";

        return (
          item.languages?.map((lang) => {
            const name = lang.name || "";
            const label = `${name} (${country})`;

            return {
              name,
              country,
              label,
              flag,
            };
          }) || []
        );
      })
      .filter((lang) => lang.name.toLowerCase().includes(searchTerm))
      .sort((a, b) => a.name.localeCompare(b.name));

    setLanguageList(languages);
  }, [search]);

  return (
    <>
      <div
        className="fixed inset-0 bg-opacity-30 backdrop-blur-sm z-40"
        onClick={onClose}
      />
      <div
        className={`fixed bottom-0 left-1/2 translate-x-[-50%] w-[375px] rounded-t-2xl py-6 px-6 z-50 shadow-lg max-h-[400px] overflow-y-auto transition-all duration-200 ${
          darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-lg font-bold">Change Language</h1>
          <button onClick={onClose}>
            <MdClose className="w-6 h-6 cursor-pointer" />
          </button>
        </div>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search by language"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className={`w-full p-2 rounded-md mb-4 text-sm outline-none border ${
            darkMode
              ? "bg-gray-700 text-white border-gray-600 placeholder-gray-400"
              : "bg-gray-100 text-gray-900 border-gray-300 placeholder-gray-500"
          }`}
        />

        {/* List */}
        <div className="space-y-3">
          {languageList.length > 0 ? (
            languageList.map((lang, index) => (
              <div
                key={index}
                className="flex justify-between items-center py-3 cursor-pointer"
                onClick={() => setSelectedLanguage(lang.label)}
              >
                <div className="flex items-center gap-3">
                  <img
                    src={lang.flag}
                    alt={`${lang.country} flag`}
                    className="w-[24px] h-[17px]"
                  />
                  <span className="text-sm">{lang.label}</span>
                </div>
                <input
                  type="radio"
                  name="language"
                  checked={selectedLanguage === lang.label}
                  onChange={() => setSelectedLanguage(lang.label)}
                />
              </div>
            ))
          ) : (
            <p className="text-sm text-gray-500 text-center">
              No results found
            </p>
          )}
        </div>

        {/* Save Button */}
        <div className="pt-6">
          <button
            className="bg-[#FF9A01] text-white w-full h-[52px] rounded-2xl font-bold text-sm"
            onClick={() => {
              onSave(selectedLanguage);
              onClose();
            }}
            disabled={!selectedLanguage}
          >
            Save
          </button>
        </div>
      </div>
    </>
  );
};

export default ChangeLanguage;
