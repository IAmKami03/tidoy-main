import React, { useEffect, useState } from "react";

import FilterButtons from "../components/searchComp/FilterButtons";
import SearchBooking from "../components/searchComp/SearchBooking";
import SearchResult from "../components/searchComp/SearchResult";
import Search from "../components/searchComp/Search";
import { useLocation, useNavigate } from "react-router-dom";

const Filter = () => {
  // const location = useLocation();
  // const navigate = useNavigate();

  const [screen, setScreen] = useState("search");
  // const [from, setFrom] = useState(null);

  // useEffect(() => {
  //   if (location.state?.screen) {
  //     setScreen(location.state.screen);
  //   }
  //   if (location.state?.from) {
  //     setFrom(location.state.from);
  //   }
  // }, [location]);

  // const goBack = () => {
  //   navigate("/home", { state: { screen: from } });
  // };

  return (
    <div className="p-4 w-full mt-[24px]">
      {screen === "search" && <Search setScreen={setScreen} />}
      {screen === "filter" && <FilterButtons setScreen={setScreen} />}
      {screen === "result" && <SearchResult setScreen={setScreen} />}
      {screen === "booking" && <SearchBooking setScreen={setScreen} />}
    </div>
  );
};

export default Filter;
