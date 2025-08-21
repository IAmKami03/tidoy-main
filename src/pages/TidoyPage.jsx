import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import bgImage from "../assets/Images/tidoy-bg.png";
import moon from "../assets/Images/Moon.png";
import tidoy from "../assets/Images/Tidoy.png";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";

const TidoyPage = () => {
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          navigate("/carousel");
          return 100;
        }
        return prev + 4;
      });
    }, 20);

    return () => clearInterval(interval);
  }, [navigate]);

  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        width: "100%",
      }}
      className="w-[375px] mx-auto h-screen flex flex-col items-center justify-center"
    >
      <div className="flex items-center mb-10">
        <img src={moon} alt="Moon" />
        <img src={tidoy} alt="Tidoy" className="w-[95.47px] h-[35.57px] ml-2" />
      </div>

      <div className="w-[32px] h-[32px]">
        <CircularProgressbar
          value={progress}
          strokeWidth={15}
          styles={buildStyles({
            textColor: "#FFF",
            pathColor: "#FFF",
            trailColor: "#FFDCA8",
            textSize: "transparent",
          })}
        />
      </div>
    </div>
  );
};

export default TidoyPage;
