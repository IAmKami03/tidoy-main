import React, { useState } from "react";
import NotificationComp from "../components/notificationComp/NotificationComp";
// import Message from "../components/notificationComp/Message";
import RoomChat from "../components/notificationComp/RoomChat";
import Typing from "./Typing";
import TypingGilbert from "./TypingGilbert";
import TypingRaisa from "./TypingRaisa";

const Notification = () => {
  const [screen, setScreen] = useState("notify");
  return (
    <div>
      {screen === "notify" && <NotificationComp setScreen={setScreen} />}
      {/* {screen === "message" && <Message setScreen={setScreen} />} */}
      {screen === "chat" && <RoomChat setScreen={setScreen} />}
      {/* {screen === "typing" && <Typing setScreen={setScreen} />}
      {screen === "gilbert" && <TypingGilbert setScreen={setScreen} />}
      {screen === "raisa" && <TypingRaisa setScreen={setScreen} />} */}
    </div>
  );
};

export default Notification;
