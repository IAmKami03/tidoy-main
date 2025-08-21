import Raisa from "../assets/Images/avatertwo.png";
// client/src/components/Typing.jsx
import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import io from "socket.io-client";
import Arrow from "../assets/Images/chevron_right.png";
// import Adalline from "../images/Avatars Base.png";
import Verified from "../assets/Images/Vector (1).png";
import phone from "../assets/Images/Icons.png";
import Booking from "../assets/Images/Image.png";
import star from "../assets/Images/star.png";
import { IoMdSend } from "react-icons/io";
import {
  MdOutlineFilePresent,
  MdOutlineCameraAlt,
  MdOutlineKeyboardVoice,
} from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";

const socket = io("http://localhost:5000"); // update URL if backend differs

const userMap = {
  1: { name: "Raisa Putri", avatar: Raisa },
};

const TypingRaisa = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  // persistent client identity
  let clientId = localStorage.getItem("clientId");
  if (!clientId) {
    clientId =
      "user_" + Date.now() + "_" + Math.random().toString(36).slice(2, 7);
    localStorage.setItem("clientId", clientId);
  }

  const currentUser = localStorage.getItem("username") || "You";
  const chatUserKey = id || "1";
  const chatUser = userMap[chatUserKey]?.name || "Raisa Putri";
  const chatAvatar = userMap[chatUserKey]?.avatar || Raisa;

  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState("");
  const [menuOpenFor, setMenuOpenFor] = useState(null);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
  const fileInputRef = useRef(null);

  const getTimeNow = () => {
    const now = new Date();
    return now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  const normalizeServerMessage = (m) => {
    return {
      _id: m._id || m.id || null,
      id:
        m._id ||
        m.id ||
        "tmp_" + Date.now() + "_" + Math.random().toString(36).slice(2, 7),
      sender: m.sender || m.senderId || currentUser,
      receiver: m.receiver || m.receiverId || chatUser,
      content: m.content ?? m.text ?? "",
      time: m.createdAt
        ? new Date(m.createdAt).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })
        : m.time || getTimeNow(),
      type: m.type || "text",
      fileUrl: m.fileUrl || null,
    };
  };

  // fetch messages
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await fetch(
          `http://localhost:5000/api/messages/${encodeURIComponent(
            currentUser
          )}/${encodeURIComponent(chatUser)}`
        );
        const data = await res.json();
        const norm = (data || []).map(normalizeServerMessage);
        setMessages(norm);
        socket.emit("join_room", { sender: currentUser, receiver: chatUser });
      } catch (err) {
        console.error("fetch messages err:", err);
      }
    };
    fetchMessages();
    socket.emit("join_room", { sender: currentUser, receiver: chatUser });
  }, [chatUser, currentUser]);

  // socket listeners
  useEffect(() => {
    socket.on("receive_message", (msg) => {
      const norm = normalizeServerMessage(msg);
      setMessages((prev) => {
        if (norm._id && prev.some((p) => p._id === norm._id)) return prev;
        const tempIndex = prev.findIndex(
          (p) =>
            !p._id && p.content === norm.content && p.sender === norm.sender
        );
        if (tempIndex !== -1) {
          const copy = [...prev];
          copy[tempIndex] = norm;
          return copy;
        }
        return [...prev, norm];
      });
    });

    socket.on("message_edited", (updated) => {
      const norm = normalizeServerMessage(updated);
      setMessages((prev) =>
        prev.map((m) =>
          m._id === norm._id
            ? { ...m, content: norm.content, time: norm.time }
            : m
        )
      );
    });

    socket.on("message_deleted", ({ messageId }) => {
      setMessages((prev) =>
        prev.filter((m) => m._id !== messageId && m.id !== messageId)
      );
    });

    return () => {
      socket.off("receive_message");
      socket.off("message_edited");
      socket.off("message_deleted");
    };
  }, [chatUser]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = () => {
    if (!input.trim()) return;
    const payload = {
      sender: currentUser,
      receiver: chatUser,
      senderId: clientId,
      receiverId: chatUser,
      content: input,
      text: input,
      type: "text",
    };

    const temp = normalizeServerMessage({
      id: "tmp_" + Date.now() + "_" + Math.random().toString(36).slice(2, 7),
      sender: payload.sender,
      receiver: payload.receiver,
      content: payload.content,
      time: getTimeNow(),
      type: payload.type,
    });
    setMessages((prev) => [...prev, temp]);

    socket.emit("send_message", payload);
    setInput("");
  };

  const startEditing = (msg) => {
    if (msg.sender !== currentUser) return;
    setEditingId(msg._id || msg.id);
    setEditingText(msg.content);
    setMenuOpenFor(null);
  };

  const confirmEdit = (msgId) => {
    if (!editingText.trim()) return;
    setMessages((prev) =>
      prev.map((m) =>
        m._id === msgId || m.id === msgId ? { ...m, content: editingText } : m
      )
    );
    socket.emit("edit_message", {
      messageId: msgId,
      newContent: editingText,
      sender: currentUser,
      receiver: chatUser,
    });
    setEditingId(null);
    setEditingText("");
  };

  const deleteMessage = (msg) => {
    if (msg.sender !== currentUser) return;
    const idToDelete = msg._id || msg.id;
    setMessages((prev) =>
      prev.filter((m) => !(m._id === idToDelete || m.id === idToDelete))
    );
    socket.emit("delete_message", {
      messageId: idToDelete,
      sender: currentUser,
      receiver: chatUser,
    });
    setMenuOpenFor(null);
  };

  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const fileUrl = URL.createObjectURL(file);
    const payload = {
      sender: currentUser,
      receiver: chatUser,
      senderId: clientId,
      receiverId: chatUser,
      content: file.name,
      text: file.name,
      fileUrl,
      type: file.type.startsWith("image/") ? "image" : "file",
    };
    const temp = normalizeServerMessage({
      id: "tmp_" + Date.now() + "_" + Math.random().toString(36).slice(2, 7),
      sender: payload.sender,
      receiver: payload.receiver,
      content: payload.content,
      fileUrl,
      type: payload.type,
      time: getTimeNow(),
    });
    setMessages((prev) => [...prev, temp]);
    socket.emit("send_message", payload);
    e.target.value = null;
  };

  return (
    <div className="flex flex-col items-center pb-20 mt-[-20px]">
      {/* Header */}
      <div className="w-[375px]">
        <div className="flex items-center p-4 justify-between h-[72px]">
          <img
            src={Arrow}
            className="w-[24px] h-[24px] mr-1"
            onClick={() => navigate("/message")}
            alt="Back"
            style={{ cursor: "pointer" }}
          />
          <div className="flex p-1 gap-3 mb-2 rounded-lg w-[343px]">
            <img
              src={chatAvatar}
              className="w-[30px] h-[30px] rounded-full object-cover mt-[10px]"
              alt={chatUser}
            />
            <div className="flex-1">
              <div className="flex justify-between items-center w-full">
                <div className="flex items-center gap-1">
                  <h1 className="font-bold text-[#2D2E2E] text-[16px] leading-[24px]">
                    {chatUser}
                  </h1>
                  <img src={Verified} className="w-4 h-4" alt="Verified" />
                </div>
              </div>
              <div className="flex items-start justify-between mt-1">
                <p className="text-[12px] leading-[16px] text-gray-600 max-w-[70%]">
                  Property Owner
                </p>
                <img
                  src={phone}
                  className="w-[30px] h-[30px] mt-[-18px] ml-auto mr-[-10px]"
                  alt="phone"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Card */}
      <div className="w-full max-w-[375px] px-4 mt-2 border-[#EDF1F5] p-4">
        <div className="flex items-start w-full h-[102px] border border-[#EDF1F5] rounded-lg ml-[-30px]">
          <img
            src={Booking}
            className="w-[82px] h-[102px] object-cover rounded-l-lg"
            alt="booking"
          />
          <div className="flex-1 p-3 h-full flex flex-col justify-between">
            <div>
              <h3 className="font-bold text-[12px] leading-[16px] text-[#2D2E2E]">
                Villa Family Resort Dago Pakar
              </h3>
              <p className="text-[10px] text-[#A6A9AC] leading-[14px] mt-1">
                Dago Pakar, Bandung
              </p>
            </div>
            <div className="flex items-center gap-1.5">
              <img src={star} className="w-3 h-3" alt="star" />
              <p className="text-[10px] text-[#747677] leading-[14px]">
                4.8 (21 Reviews)
              </p>
            </div>
            <p className="text-[14px] font-bold leading-[20px] text-[#2D2E2E]">
              $152
              <span className="text-[10px] text-[#A6A9AC] ml-0.5">/night</span>
            </p>
          </div>
        </div>
      </div>

      {/* Messages list */}
      <div className="w-full max-w-[375px] px-4 mt-4 space-y-4">
        {messages.map((m) => {
          const msgKey = m._id || m.id;
          const isMe = m.sender === currentUser;
          return (
            <div
              key={msgKey}
              className={`flex ${
                isMe ? "justify-end mr-[-32px]" : "justify-start ml-[-30px]"
              }`}
            >
              <div
                className={`relative p-3 max-w-[242px] flex flex-col ${
                  isMe
                    ? "bg-[#0167FF] text-white rounded-tl-[12px] rounded-tr-[12px] rounded-bl-[12px]"
                    : "bg-[#DCE0E4] text-black rounded-tl-[12px] rounded-tr-[12px] rounded-br-[12px]"
                }`}
              >
                {editingId === (m._id || m.id) ? (
                  <div>
                    <input
                      className="w-full rounded px-2 py-1 text-black"
                      value={editingText}
                      onChange={(e) => setEditingText(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") confirmEdit(m._id || m.id);
                      }}
                    />
                    <div className="flex justify-end gap-2 mt-2">
                      <button
                        className="text-sm px-2 py-1 bg-white text-black rounded"
                        onClick={() => {
                          setEditingId(null);
                          setEditingText("");
                        }}
                      >
                        Cancel
                      </button>
                      <button
                        className="text-sm px-2 py-1 bg-[#0167FF] text-white rounded"
                        onClick={() => confirmEdit(m._id || m.id)}
                      >
                        Save
                      </button>
                    </div>
                  </div>
                ) : (
                  <>
                    {m.type === "text" && (
                      <p className="text-[14px] leading-[20px] font-light break-words">
                        {m.content}
                      </p>
                    )}
                    {m.type === "image" && (
                      <img
                        src={m.fileUrl}
                        alt={m.content}
                        className="max-w-[200px] h-auto rounded-lg"
                      />
                    )}
                    {m.type === "file" && (
                      <a
                        href={m.fileUrl}
                        download
                        className="text-blue-500 underline break-words"
                      >
                        {m.content}
                      </a>
                    )}
                    <div
                      className={`flex ${
                        isMe ? "justify-end" : "justify-start"
                      }`}
                    >
                      <span className="text-[10px] text-[#ffff]">
                        {m.time}
                      </span>
                    </div>
                  </>
                )}

                {isMe && editingId !== (m._id || m.id) && (
                  <button
                    className="absolute top-1 right-1"
                    onClick={(e) => {
                      e.stopPropagation();
                      setMenuOpenFor(
                        menuOpenFor === (m._id || m.id) ? null : m._id || m.id
                      );
                    }}
                  >
                    <BsThreeDotsVertical
                      className={isMe ? "text-white" : "text-black"}
                    />
                  </button>
                )}

                {menuOpenFor === (m._id || m.id) && (
                  <div className="absolute right-0 top-8 bg-white border border-gray-200 rounded-lg shadow-lg z-50 w-28">
                    <div className="py-1">
                      <button
                        className="w-full text-left px-4 py-2 text-sm text-blue-500 hover:bg-gray-100"
                        onClick={(e) => {
                          e.stopPropagation();
                          startEditing(m);
                        }}
                      >
                        Edit
                      </button>
                      <button
                        className="w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-gray-100"
                        onClick={(e) => {
                          e.stopPropagation();
                          if (confirm("Delete this message?")) deleteMessage(m);
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
        <div ref={messagesEndRef} />
      </div>

      {/* Input area */}
      <div className="fixed bottom-0 left-0 right-0 p-4 ml-[-15px]">
        <div className="max-w-[375px] mx-auto w-full px-4">
          <input
            ref={fileInputRef}
            type="file"
            className="hidden"
            onChange={handleFileUpload}
            accept="image/*,.pdf,.doc,.docx"
          />
          {!isKeyboardOpen ? (
            <div className="flex items-center gap-[16px] w-full">
              <MdOutlineFilePresent
                className="ml-[10px] w-[34px] h-[34px] cursor-pointer"
                onClick={() => fileInputRef.current?.click()}
              />
              <input
                type="text"
                ref={inputRef}
                placeholder="Type message"
                className="w-[205px] border border-[#EDF1F5] rounded-xl px-4 py-2 focus:outline-none text-[16px] text-black bg-[#DCE0E4]"
                value={input}
                onFocus={() => setIsKeyboardOpen(true)}
                onBlur={() => setIsKeyboardOpen(false)}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              />
              <MdOutlineCameraAlt className="ml-[15px] w-[34px] h-[34px]" />
              <MdOutlineKeyboardVoice className="mr-[-15px] w-[34px] h-[34px]" />
            </div>
          ) : (
            <div className="flex items-center gap-2 w-full">
              <input
                type="text"
                ref={inputRef}
                placeholder="Type message"
                className="flex-1 border border-[#EDF1F5] rounded-xl px-4 py-2 focus:outline-none text-[16px] text-black bg-[#DCE0E4] w-full"
                value={input}
                onBlur={() => setIsKeyboardOpen(false)}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              />
              <IoMdSend
                onClick={sendMessage}
                className="mr-[-15px] bg-[#0167FF] text-white rounded-full p-2 w-10 h-10 cursor-pointer"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TypingRaisa;
