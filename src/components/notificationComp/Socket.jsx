import React from "react";
import React, { useEffect } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:5000");

const Socket = () => {
  useEffect(() => {
    // Listen for incoming messages
    socket.on("receive_message", (msg) => {
      console.log("Received:", msg);
    });

    // Listen for edited messages
    socket.on("message_edited", (msg) => {
      console.log("Message edited:", msg);
    });

    // Listen for deleted messages
    socket.on("message_deleted", ({ messageId }) => {
      console.log("Message deleted:", messageId);
    });

    return () => {
      socket.off("receive_message");
      socket.off("message_edited");
      socket.off("message_deleted");
    };
  }, []);

  const sendMessage = () => {
    // Example emit: send a new message
    socket.emit("send_message", {
      sender: "User1",
      receiver: "User2",
      text: "Hello!",
    });
  };

  const editMessage = (messageId, newContent) => {
    socket.emit("edit_message", {
      messageId,
      newContent,
      sender: "User1",
      receiver: "User2",
    });
  };

  const deleteMessage = (messageId) => {
    socket.emit("delete_message", {
      messageId,
      sender: "User1",
      receiver: "User2",
    });
  };

  return (
    <div>
      <button onClick={sendMessage}>Send Message</button>
      <button onClick={() => editMessage("someMessageId", "Updated text")}>
        Edit Message
      </button>
      <button onClick={() => deleteMessage("someMessageId")}>
        Delete Message
      </button>
    </div>
  );
};

export default Socket;
