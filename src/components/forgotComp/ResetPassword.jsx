import React from "react";
import arrow from "../../assets/Images/arrow_left.png";
import eye from "../../assets/Images/visibility-2.png";

const ResetPassword = () => {
  return (
    <div className=" p-7.5 rounded-2xl flex flex-col gap-8">
      <div className="flex items-center">
        <img src={arrow} alt="" />
        <h2>Reset Password</h2>
      </div>

      <form action="" className="w-full flex flex-col gap-6 items-start">
        <div className="w-full flex flex-col gap-2 items-start">
          <label htmlFor="password">Password</label>
          <div className="relative w-full">
            <input
              type="password"
              placeholder="Password"
              className="w-full border border-gray-300 rounded-lg pl-4 pr-12 py-3 text-sm focus:outline-none"
            />
            <img
              src={eye}
              alt="icon"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5"
            />
          </div>
        </div>
        {/* ======== ====*/}
        <div className="w-full flex flex-col gap-2 items-start">
          <label htmlFor="new-password">New Password</label>
          <div className="relative w-full">
            <input
              type="new-password"
              placeholder="New password"
              className="w-full border border-gray-300 rounded-lg pl-4 pr-12 py-3 text-sm focus:outline-none"
            />

            <img
              src={eye}
              alt="icon"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5"
            />
          </div>
        </div>

        {/* ================ */}
        <div className="w-full flex flex-col gap-2 items-start">
          <label htmlFor="new-password">Comfirm Password</label>
          <div className="relative w-full">
            <input
              type="new-password"
              placeholder="Comfirm password"
              className="w-full border border-gray-300 rounded-lg pl-4 pr-12 py-3 text-sm focus:outline-none"
            />

            <img
              src={eye}
              alt="icon"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5"
            />
          </div>
        </div>

        <div className="mt-3 px-4 w-full ">
          <button
            type="submit"
            className="h-12 w-full bg-[#FBBF24] text-white rounded-lg font-semibold text-base "
          >
            Rset Password
          </button>
        </div>
      </form>
    </div>
  );
};

export default ResetPassword;
