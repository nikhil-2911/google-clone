import "./App.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

//component
import Home from "./components/HomeScreen/Home";
import SearchScreen from "./components/SearchScreen/SearchScreen";
import { searchData } from "./api/googleSearch";

const App = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [googleData, setGoogleData] = useState({});
  const setSearch = async (term) => {
    setSearchTerm(term);
    const data = await searchData(term);
    // console.log(data);
    setGoogleData(data);
    navigate("/search");
  };
  return (
    <>
      <Routes>
        <Route path="/" element={<Home setSearch={setSearch} />} />
        {searchTerm !== "" ? (
          <Route
            path="/search"
            element={
              <SearchScreen
                setSearch={setSearch}
                searchTerm={searchTerm}
                googleData={googleData}
              />
            }
          />
        ) : null}
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
