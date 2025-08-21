import { createContext, useState } from "react";
import axiosInstance from "../utils/axiosConfig";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const RegistrationContext = createContext();
export default RegistrationContext;

export const RegistrationProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [authenticating, setAuthenticating] = useState(false);

  const navigate = useNavigate();

  const handleUserRegistration = async (formData) => {
    setAuthenticating(true);
    console.log("Form Data (Context):", formData);

    try {
      const { data } = await axiosInstance.post("/api/auth/register", formData);

      // ✅ backend returns newUser, so use that
      setUser(data.newUser);
      console.log("Backend response:", data);
      return data;

      // toast.success("Registration successful! Please log in.");
      // navigate("/login");
    } catch (err) {
      const message =
        err.response?.data?.message || "Registration Unsuccessful";
      toast.error(message);
      console.error("🔥 Registration error:", err.response?.data);
      throw err;
    } finally {
      setAuthenticating(false);
    }
  };

  const RegisterData = {
    user,
    authenticating,
    handleUserRegistration,
  };

  return (
    <RegistrationContext.Provider value={RegisterData}>
      {children}
    </RegistrationContext.Provider>
  );
};
