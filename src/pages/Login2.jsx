import React, { useState } from "react";
import Username from "../components/remComp/Username";
import Number from "../components/remComp/Number";
import Header from "../components/common/Header";

const Login2 = () => {
  // const [screen, setScreen] = useState("username");
  return (
    <div className="p-4  mt-[24px]">
      <Header />
      <Username />
      <Number />
    </div>
  );
};

export default Login2;
