import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login2 from "./pages/Login2";
import Filter from "./pages/Filter";
import Profile from "./pages/Profile";
import Stay from "./pages/Stay";
import Wishlist from "./pages/Wishlist";
import ProductDetail from "./pages/ProductDetail";
import HomePage from "./pages/HomePage";
import OnBoarding from "./pages/OnBoarding";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import Notification from "./pages/Notification";
import { DateProvider } from "./contexts/DateContext";
import { Toaster } from "react-hot-toast";
import { PropertiesProvider } from "./contexts/PropertiesContext";
import Nearby from "./pages/Nearby";
import { HomeProvider } from "./contexts/HomeContext";
import Message from "./pages/Message";
import { AuthProvider } from "./contexts/LogContext";
import Typing from "./pages/Typing";
import TypingRaisa from "./pages/TypingRaisa";
import TypingGilbert from "./pages/TypingGilbert";
import Login from "./pages/Login";
import LoginConfirm from "./pages/LoginConfirm";
import OnboardCarousel from "./pages/OnBoardingCarousel";
import TidoyPage from "./pages/TidoyPage";
import ForgotP from "./pages/ForgotP";
import ResetP from "./pages/ResetP";
import Sucess from "./pages/Sucess";
import { RegistrationProvider } from "./contexts/RegistrationContext";
import { BookingProvider } from "./contexts/BookingContext";
import Booking from "./pages/bookin";

function App() {
  return (
    <>
      <PropertiesProvider>
        <HomeProvider>
          <BrowserRouter>
            <Toaster position="top-center" />
            <AuthProvider>
              <DateProvider>
                <RegistrationProvider>
                  <BookingProvider>
                    <Routes>
                      <Route path="/" element={<TidoyPage />} />
                      <Route path="/carousel" element={<OnboardCarousel />} />
                      {/* <Route path="/login" element={<Login2 />} /> */}
                      <Route path="/register" element={<Register />} />
                      <Route path="/forgot" element={<ForgotPassword />} />
                      <Route path="/home" element={<HomePage />} />
                      <Route path="/notification" element={<Notification />} />
                      <Route path="/message" element={<Message />} />
                      <Route path="/typing/1" element={<Typing />} />
                      <Route path="/typing/2" element={<TypingRaisa />} />
                      <Route path="/typing/3" element={<TypingGilbert />} />
                      <Route path="/wishlist" element={<Wishlist />} />
                      <Route path="/search" element={<Filter />} />
                      <Route path="/product/:id" element={<ProductDetail />} />
                      <Route path="/stay" element={<Stay />} />
                      <Route path="/profile" element={<Profile />} />
                      <Route path="/nearby" element={<Nearby />} />
                      <Route path="/login" element={<Login />} />
                      <Route path="/confirm" element={<LoginConfirm />} />
                      <Route path="/forgotPassword" element={<ForgotP />} />
                      <Route path="/resetpassword" element={<ResetP />} />
                      <Route path="/sucess" element={<Sucess />} />
                      <Route path="/bookin/:id" element={<Booking />} />

                      {/* {/* <Route path="/phone" element={<Phone />} /> */}
                    </Routes>
                  </BookingProvider>
                </RegistrationProvider>
              </DateProvider>
            </AuthProvider>
          </BrowserRouter>
        </HomeProvider>
      </PropertiesProvider>
    </>
  );
}

export default App;

// https://tidoy-backend-2.onrender.com
