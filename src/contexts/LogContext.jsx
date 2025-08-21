import { createContext, useState, useEffect } from "react";
import axiosInstance from "../utils/axiosConfig";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const LogContext = createContext();
export default LogContext;

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");

    return savedUser ? JSON.parse(savedUser) : null;
  });

  const [token, setToken] = useState(() => {
    return localStorage.getItem("token") || null;
  });

  const navigate = useNavigate();

  const handleLogin = async (name, password) => {
    try {
      const res = await fetch(
        "https://tidoy-backend-2-l1cj.onrender.com/api/auth/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, password }),
        }
      );

      if (res.ok) {
        const data = await res.json();
        console.log("🧾 Login response data:", data);
        alert("✅ Verified successfully!");

        const userData = name;
        setUser(userData);
        setToken(data.token);

        localStorage.setItem("user", JSON.stringify(userData));
        localStorage.setItem("token", data.token);

        navigate("/home");
      } else {
        alert("❌ Invalid credentials. Try again.");
      }
    } catch (err) {
      console.error("Error:", err);
    } finally {
      console.log("Login attempt completed.");
    }
  };

  // // ===========================
  // // Request OTP
  // // ===========================
  // const requestOtp = async (number) => {
  //   setAuthenticating(true);
  //   try {
  //     const { data } = await axiosInstance.post("/api/auth/login", { number });
  //     toast.success("OTP sent successfully");
  //     return data; // { message, phone, sid, status }
  //   } catch (error) {
  //     toast.error(error.response?.data?.message || "Failed to send OTP");
  //   } finally {
  //     setAuthenticating(false);
  //   }
  // };

  // // ===========================
  // // Verify OTP
  // // ===========================
  // const verifyOtp = async (number, otp) => {
  //   setAuthenticating(true);
  //   try {
  //     const { data } = await axiosInstance.post("/api/auth/login", {
  //       number,
  //       otp,
  //     });

  //     localStorage.setItem("token", JSON.stringify(data.token));
  //     setToken(data.token);
  //     setUser(data.user);

  //     toast.success("Login successful via OTP");
  //     navigate("/");
  //   } catch (error) {
  //     toast.error(error.response?.data?.message || "Invalid OTP");
  //   } finally {
  //     setAuthenticating(false);
  //   }
  // };

  // ===========================
  // Login with Password
  // ===========================
  const loginWithPassword = async (number, password) => {
    setAuthenticating(true);
    try {
      const { data } = await axiosInstance.post("/api/auth/login", {
        number,
        password,
      });

      localStorage.setItem("token", JSON.stringify(data.token));
      setToken(data.token);
      setUser(data.user);

      toast.success("Login successful");
      navigate("/");
    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed");
    }
  };

  // ===========================
  // Logout
  // ===========================
  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setUser(null);
    navigate("/login");
    toast.success("Logged out successfully");
  };

  // ===========================
  // Auto-fetch user on reload
  // ===========================
  // useEffect(() => {
  //   const fetchUser = async () => {
  //     if (!token) return;

  //     try {
  //       const { data } = await axiosInstance.get("/api/auth/user", {
  //         headers: { Authorization: Bearer ${token} },
  //       });
  //       setUser(data);
  //     } catch (err) {
  //       console.error("Failed to fetch user:", err);
  //       logout();
  //     }
  //   };

  //   fetchUser();
  // }, [token]);

  // Context Data
  const contextData = {
    user,
    token,
    loginWithPassword,
    logout,
    handleLogin,
  };

  return (
    <LogContext.Provider value={contextData}>{children}</LogContext.Provider>
  );
};
