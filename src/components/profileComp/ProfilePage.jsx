import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BiSolidEditAlt } from "react-icons/bi";
import {
  MdOutlineLanguage,
  MdOutlineDarkMode,
  MdOutlineLogout,
  MdKeyboardArrowRight,
} from "react-icons/md";
import { FiShield } from "react-icons/fi";
import { TbHelp } from "react-icons/tb";
import verified from "../../assets/Images/verified.png";
import coverImage from "../../assets/Images/Image.png";
import ChangeLanguage from "./ChangeLanguage";
import LogoutPage from "./LogoutPage";

const ProfilePage = ({ darkMode, setDarkMode }) => {
  const [user, setUser] = useState(null);
  const [showLanguageModal, setShowLanguageModal] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token");
        console.log("DEBUG TOKEN FROM LOCALSTORAGE:", token);

        if (!token) {
          console.error("⚠️ No token found in localStorage");
          return;
        }

        const res = await fetch(
          "https://tidoy-backend-2-l1cj.onrender.com/users/me",
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        console.log("DEBUG RESPONSE STATUS:", res.status);

        if (!res.ok) {
          const errorData = await res.json();
          throw new Error(
            `Failed to fetch user: ${res.status} - ${
              errorData.message || "Unknown error"
            }`
          );
        }

        const data = await res.json();
        console.log("DEBUG USER DATA:", data);
        setUser(data);
      } catch (err) {
        console.error("ERROR:", err.message);
      }
    };
    fetchUser();
  }, []);

  if (!user) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div
      className={`min-h-screen w-[375px] mx-auto ${
        darkMode ? "bg-gray-900 text-white" : "shadow-lg text-gray-900"
      }`}
    >
      {/* Header Section */}
      <div className="max-w-md mx-auto px-4">
        <div className="relative">
          <img
            src={coverImage}
            alt="Cover"
            className="w-full h-[200px] object-cover"
          />

          <div
            className={`absolute left-4 right-4 translate-y-[-70%] rounded-2xl shadow-md p-4 ${
              darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
            }`}
          >
            <div className="flex justify-between items-start">
              <div className="flex gap-3">
                <img
                  src={user.photo || "/default-avatar.png"}
                  alt="Profile"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h2 className="text-lg font-semibold">{user.name}</h2>
                  <p className="text-sm">{user.email}</p>
                </div>
              </div>

              <Link to="/editProfile">
                <BiSolidEditAlt className="w-[20px] h-[20px]" />
              </Link>
            </div>

            <div className="mt-4 border border-[#EDF1F5] px-3 py-2 rounded-md flex justify-between items-center">
              <div className="flex items-center gap-2">
                <img src={verified} alt="Verified" className="w-4 h-4" />
                <span className="text-sm">Tier Gold</span>
              </div>
              <span className="text-sm font-semibold text-yellow-600">
                {user.points || 0} Points
              </span>
            </div>
          </div>
        </div>
        <div className="h-9"></div>
      </div>

      {/* Body Settings */}
      <div className="p-6">
        <p className="mb-4">General</p>

        <div className="space-y-4">
          {/* Language */}
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <MdOutlineLanguage className="w-[25px] h-[30px] pr-2" />
              <span className="font-semibold">Language</span>
              <span className="text-sm text-gray-500 pl-5">
                {selectedLanguage}
              </span>
            </div>
            <button onClick={() => setShowLanguageModal(true)}>
              <MdKeyboardArrowRight className="w-[20px] h-[20px] cursor-pointer" />
            </button>
          </div>

          {/* Dark Mode */}
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <MdOutlineDarkMode className="w-[25px] h-[30px] pr-2" />
              <span className="font-semibold">Dark Mode</span>
            </div>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full ${
                darkMode ? "bg-[#65C466]" : "bg-gray-200"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                  darkMode ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
          </div>

          <hr className="text-[#EDF1F5]" />

          {/* Preferences Section */}
          <div className="flex justify-between items-center">
            <span>Preferences</span>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <FiShield className="w-[25px] h-[30px] pr-2" />
              <span className="font-semibold">Legal & Policies</span>
            </div>
            <Link to="/legal">
              <MdKeyboardArrowRight className="w-[20px] h-[20px]" />
            </Link>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <TbHelp className="w-[25px] h-[30px] pr-2" />
              <span className="font-semibold">Help & Support</span>
            </div>
            <Link to="/help">
              <MdKeyboardArrowRight className="w-[20px] h-[20px]" />
            </Link>
          </div>

          <div
            className="flex items-center cursor-pointer"
            onClick={() => setShowLogoutModal(true)}
          >
            <MdOutlineLogout className="w-[25px] h-[30px] pr-2" />
            <span className="font-semibold">Logout</span>
          </div>
        </div>
      </div>

      {/* Modals */}
      {showLanguageModal && (
        <ChangeLanguage
          currentLanguage={selectedLanguage}
          onClose={() => setShowLanguageModal(false)}
          onSave={(newLanguage) => {
            setSelectedLanguage(newLanguage);
            setShowLanguageModal(false);
          }}
          darkMode={darkMode}
        />
      )}

      {showLogoutModal && (
        <LogoutPage
          onClose={() => setShowLogoutModal(false)}
          onLogout={() => {
            setShowLogoutModal(false);
          }}
          darkMode={darkMode}
        />
      )}
    </div>
  );
};

export default ProfilePage;
