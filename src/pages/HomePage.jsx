import React, { useState } from "react";
import FullScreen from "../components/homeComp/FullScreen";
import BasedOnLocation from "../components/homeComp/BasedOnLocation";
// import ShowAll from "../components/homeComp/ShowAll";
import FeatureDestination from "../components/homeComp/FeatureDestination";
import View from "../components/homeComp/View";
import ViewFeat from "../components/common/ViewFeat";
import MapComponent from "../components/homeComp/MapComponent";

const HomePage = () => {
  const [screen, setScreen] = useState("full");

  return (
    <div className="">
      {screen === "full" && <FullScreen setScreen={setScreen} />}
      {screen === "location" && <MapComponent setScreen={setScreen} />}
      {/* {screen === "showAll" && <ShowAll setScreen={setScreen} />} */}
      {screen === "feature" && <FeatureDestination setScreen={setScreen} />}
      {screen === "view" && <View setScreen={setScreen} />}
      {screen === "viewFeat" && <ViewFeat setScreen={setScreen} />}{" "}
    </div>
  );
};

export default HomePage;
