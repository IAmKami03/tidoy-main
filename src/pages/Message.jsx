import React, { useState } from "react";
import arrow from "../assets/Images/arrow_left.png";
import Search from "../assets/Images/search.png";
import Adalline from "../assets/Images/Avatars Base.png";
import Verified from "../assets/Images/verified.png";
import Putri from "../assets/Images/avatertwo.png";
import Gilbert from "../assets/Images/Avatars Base3.png";
import { useNavigate } from "react-router-dom";

const messagesData = [
  {
    id: 1,
    name: "ADMIN",
    avatar: Adalline,
    verified: true,
    date: "Today",
    // message: "Hi, Yes the room is available, so can...",
    // unread: 1,
  },
  // {
  //   id: 2,
  //   name: "Raisa Putri",
  //   avatar: Putri,
  //   verified: true,
  //   // date: "4/4/24",
  //   // message: "How is it going?",
  //   // unread: 1,
  // },
  // {
  //   id: 3,
  //   name: "Gilbert Ozora",
  //   avatar: Gilbert,
  //   verified: true,
  //   // date: "7/4/24",
  //   // message: "Okay,thanks!",
  //   // unread: 0,
  // },
];

const Message = () => {
  const [search, setSearch] = useState("");

  // Filter messages by name or message content
  const filteredMessages = messagesData.filter(
    (msg) =>
      msg.name.toLowerCase().includes(search.toLowerCase()) ||
      msg.message.toLowerCase().includes(search.toLowerCase())
  );

  const navigate = useNavigate();

  return (
    <div className="relative ml-[-25px] max-w-md rounded-lg  mx-w-[375px] mr-[10px]">
      <div className="p-3 relative">
        <div className="relative flex items-center ml-[25px] ">
          <img onClick={() => navigate("/home")} src={arrow} className="relative p-[20px] pl-[5px] cursor-pointer" alt="Back" />
          <div className="relative">
            <input
              type="text"
              className="relative w-[303px] h-[48px] rounded-full py-2 pr-4 pl-3 text-[16px] border border-[#A6A9AC]"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <img
              src={Search}
              className="absolute right-0 top-0 p-[15px]"
              alt="Search"
            />
          </div>
        </div>
        {filteredMessages.map((msg) => (
          <div
            onClick={() => navigate(`/typing/${msg.id}`)}
            key={msg.id}
            className="p-4 border-b border-[#EDF1F5]"
          >
            
            <div className="flex p-3 gap-3 mb-2 rounded-lg w-[343px]">
              <img
                src={msg.avatar}
                className="w-[48px] h-[48px] rounded-full object-cover"
                alt={msg.name}
              />
              <div className="flex-1 min-w-0 -ml-1">
                <div className="flex justify-between items-start w-full">
                  <div className="flex items-center gap-1 max-w-[80%]">
                    <h1 className="font-bold text-[#2D2E2E] text-[16px] leading-[24px] tracking-tighter">
                      {msg.name}
                    </h1>
                    {msg.verified && (
                      <img
                        src={Verified}
                        className="w-[16px] h-[16px]"
                        alt="Verified"
                      />
                    )}
                  </div>
                  <span className="text-[10px] text-[#2D2E2E] font-normal leading-[14px] mr-[-30px]">
                    {msg.date}
                  </span>
                </div>
                <div className="flex justify-between items-center mt-1">
                  <p className="text-[12px] leading-[16px] text-[#747677]">
                    {msg.message}
                  </p>
                  {msg.unread > 0 && (
                    <span className="text-[12px] text-[#0167FF] bg-[#CCE1FF] font-normal leading-[16px] rounded-full w-[21px] h-[20px] flex items-center justify-center ml-2 mr-[-30px]">
                      {msg.unread}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
        {filteredMessages.length === 0 && (
          <div className="p-4 text-center text-[#747677]">
            No messages found.
          </div>
        )}
      </div>
    </div>
  );
};

export default Message;
