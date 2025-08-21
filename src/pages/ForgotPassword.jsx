import React, { useState } from "react";
import ResetPassword from "../components/forgotComp/ResetPassword";
import Phone from "../components/forgotComp/Phone";
import PasswordChange from "../components/forgotComp/PasswordChange";
import PassWords from "../components/forgotComp/Passwords";

const ForgotPassword = () => {
  const [screen, setScreen] = useState("phone");
  return (
    <div>
      {screen === "phone" && <Phone setScreen={setScreen} />}
      {screen === "otp" && <PassWords setScreen={setScreen} />}
      {screen === "reset" && <ResetPassword  setScreen={setScreen}/>}
      {screen === "change" && <PasswordChange setScreen={setScreen}/>}{" "}
    </div>
  );
};

export default ForgotPassword;
