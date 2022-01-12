import React from "react";

// components
import AppBar from "./AppBar";
import DashBoard from "./DashBoard";

const Home = ({ setSearch }) => {
  return (
    <>
      <AppBar />
      <DashBoard setSearch={setSearch} />
    </>
  );
};

export default Home;
