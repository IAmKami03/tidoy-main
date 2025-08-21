import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  MdEdit,
  MdKeyboardArrowRight,
  MdKeyboardArrowLeft,
} from "react-icons/md";
import ChangeName from "./ChangeName";
import ChangeEmail from "./ChangeEmail";
import ChangePassword from "./ChangePassword";
import ChangeGender from "./ChangeGender";
import ChangePhoneNumber from "./ChangePhoneNumber";


const EditProfilePage = ({ userData, darkMode }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(userData);
  const [activeModal, setActiveModal] = useState(null);

  const handlePhotoChange = (e) => {
    if (e.target.files[0]) {
      setUser((prev) => ({
        ...prev,
        photo: URL.createObjectURL(e.target.files[0]),
      }));
    }
  };

  const handleSave = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(
        "https://tidoy-backend-0edr.onrender.com/users/me",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(user),
        }
      );
      if (!res.ok) throw new Error("Failed to save changes");
      const updatedUser = await res.json();
      setUser(updatedUser);
      navigate("/profile");
    } catch (err) {
      console.error(err);
      alert("Could not save changes");
    }
  };

  return (
    <div
      className={`min-h-screen w-[375px] mx-auto p-6 ${
        darkMode ? "bg-gray-900 text-white" : "shadow-lg text-gray-900"
      }`}
    >
      <div className="flex items-center mb-8 gap-4">
        <Link to="/profile">
          <MdKeyboardArrowLeft className="w-[24px] h-[24px]" />
        </Link>
        <h1 className="text-2xl font-bold">Edit Profile</h1>
      </div>

      <div className="flex flex-col items-center mb-8">
        <div className="relative w-24 h-24 rounded-full bg-gray-200 mb-4 overflow-hidden">
          {user.photo ? (
            <img
              src={user.photo}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>
          )}
        </div>
        <div
          className={`text-[#2D2E2E] border border-[#DCE0E4] bg-[#FFFFFF] p-3 rounded-xl font-medium cursor-pointer  ${
            darkMode ? "bg-gray-900 text-white" : "shadow-lg text-gray-900"
          }`}
        >
          <label>
            Edit Photo
            <input
              type="file"
              className="hidden"
              accept="image/*"
              onChange={handlePhotoChange}
            />
          </label>
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-gray-500 mb-1">Name</label>
          <div className="flex justify-between w-full py-3 items-center">
            <input
              type="text"
              name="name"
              value={user.name}
              readOnly
              className="bg-transparent outline-none w-full"
            />
            <MdEdit
              className="w-[20px] h-[20px] cursor-pointer"
              onClick={() => setActiveModal("name")}
            />
          </div>
        </div>

        <div>
          <label className="block text-gray-500 mb-1">Email</label>
          <div className="flex justify-between w-full py-3">
            <input
              type="email"
              name="email"
              value={user.email}
              readOnly
              className="bg-transparent outline-none w-full"
            />
            <MdEdit
              className="w-[20px] h-[20px] cursor-pointer"
              onClick={() => setActiveModal("email")}
            />
          </div>
        </div>

        <div>
          <label className="block text-gray-500 mb-1">Password</label>
          <div className="flex justify-between w-full py-3">
            <input
              type="password"
              name="password"
              value={user.password}
              readOnly
              className="bg-transparent outline-none w-full"
            />
            <MdEdit
              className="w-[20px] h-[20px] cursor-pointer"
              onClick={() => setActiveModal("password")}
            />
          </div>
        </div>

        <div>
          <label className="block text-gray-500 mb-1">Gender</label>
          <div className="flex justify-between w-full py-3">
            <input
              type="text"
              name="gender"
              value={user.gender}
              readOnly
              className="bg-transparent outline-none w-full"
            />
            <MdEdit
              className="w-[20px] h-[20px] cursor-pointer"
              onClick={() => setActiveModal("gender")}
            />
          </div>
        </div>

        <div>
          <label className="block text-gray-500 mb-1">Number</label>
          <div className="flex justify-between w-full py-3">
            <input
              type="tel"
              name="phone"
              value={user.phone}
              readOnly
              className="bg-transparent outline-none w-full"
            />
            <MdEdit
              className="w-[20px] h-[20px] cursor-pointer"
              onClick={() => setActiveModal("phone")}
            />
          </div>
        </div>

        <div className="flex justify-between items-center">
          <span className="font-semibold">Forgot Password</span>
          <Link to="/forgotpass">
            <MdKeyboardArrowRight className="w-[20px] h-[20px]" />
          </Link>
        </div>
      </div>

      <button
        onClick={handleSave}
        className="mt-10 bg-[#FF9A01] text-white w-xs h-[52px] p-3 rounded-2xl font-bold text-[14px] hover:bg-gray-800 transition"
      >
        Save Changes
      </button>

      {activeModal === "name" && (
        <ChangeName
          currentName={user.name}
          onClose={() => setActiveModal(null)}
          onSave={(newName) => setUser((prev) => ({ ...prev, name: newName }))}
          darkMode={darkMode}
        />
      )}

      {activeModal === "email" && (
        <ChangeEmail
          currentEmail={user.email}
          onClose={() => setActiveModal(null)}
          onSave={(newEmail) =>
            setUser((prev) => ({ ...prev, email: newEmail }))
          }
          darkMode={darkMode}
        />
      )}

      {activeModal === "password" && (
        <ChangePassword
          onClose={() => setActiveModal(null)}
          onSave={(newPassword) =>
            setUser((prev) => ({ ...prev, password: "••••••••" }))
          }
          darkMode={darkMode}
        />
      )}

      {activeModal === "gender" && (
        <ChangeGender
          currentGender={user.gender}
          onClose={() => setActiveModal(null)}
          onSave={(newGender) =>
            setUser((prev) => ({ ...prev, gender: newGender }))
          }
          darkMode={darkMode}
        />
      )}

      {activeModal === "phone" && (
        <ChangePhoneNumber
          currentPhoneNumber={user.phone}
          onClose={() => setActiveModal(null)}
          onSave={(newPhoneNumber) =>
            setUser((prev) => ({ ...prev, phone: newPhoneNumber }))
          }
          darkMode={darkMode}
        />
      )}
    </div>
  );
};

export default EditProfilePage;
