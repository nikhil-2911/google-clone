import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";

// components
import SearchHeader from "./SearchHeader";
import SearchSubHeader from "./SearchSubHeader";
import SearchData from "./SearchData";

const SearchScreen = ({ setSearch, searchTerm, googleData }) => {
  const navigate = useNavigate();
  console.log(googleData);
  useEffect(() => {
    if (searchTerm === "") {
      navigate("/");
    }
  }, [searchTerm]);
  return (
    <>
      <Container fluid>
        <SearchHeader setSearch={setSearch} searchTerm={searchTerm} />
        <SearchSubHeader />
        <SearchData googleData={googleData} />
      </Container>
    </>
  );
};

export default SearchScreen;
