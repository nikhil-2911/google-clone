import React from "react";
import { Container } from "react-bootstrap";

// components
import Data from "./Data";

const SearchData = ({ googleData }) => {
  return (
    <>
      <Container className="mt-0">
        <p style={{ fontSize: "14px", color: "gray" }}>
          About {googleData?.searchInformation.formattedTotalResults} results (
          {googleData?.searchInformation.formattedSearchTime} seconds)
        </p>
        {googleData.items.map((data, id) => (
          <Data data={data} key={id} />
        ))}
      </Container>
    </>
  );
};

export default SearchData;
