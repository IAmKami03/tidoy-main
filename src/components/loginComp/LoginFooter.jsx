import React from 'react'
import google from "../../assets/Images/google.png";
import facebook from "../../assets/Images/facebook.png";
import apple from "../../assets/Images/apple.png";
import { Link } from "react-router-dom";


const LoginFooter = () => {
  return (
    <div>
          <div className="flex flex-col ">
            <div className="relative  ">
              <hr className="relative text-[#E4E9ED]" />
              <p
                className="text-[12px] text-[#A6A9AC] rounded-[24px] bg-[#E4E9ED]
          w-[47px] h-[26px] flex justify-center py-1 px-[14px] absolute left-[140px] z-2 bottom-[-13px] "
              >
                OR
              </p>
            </div>

            <div className="flex items-center gap-3  pt-[34px] ">
              <img
                src={google}
                alt=""
                className="bg-[#F0F0F0] py-[18px] h-[56px] rounded-2xl px-[40px] "
              />
              <img
                src={facebook}
                alt=""
                className="bg-[#1278F3] p-4  h-[56px] rounded-2xl py-[18px]  px-[40px]"
              />
              <img
                src={apple}
                alt=""
                className="bg-[#000000] p-4  h-[56px] rounded-2xl py-[18px] px-[40px] "
              />
            </div>
          </div>

          <div className="flex items-center justify-center mt-[34px] gap-1">
            <p className="text-[#2D2E2E] font-normal text-[12px] ">
              Don’t have a account ?{" "}
            </p>
            <Link
              to="/register"
              className="text-[12px] font-bold text-[#FF9A01] underline"
            >
              Register here
            </Link>
          </div>
        </div>
  )
}

export default LoginFooter
