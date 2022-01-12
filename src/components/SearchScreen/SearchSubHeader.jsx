import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const SearchSubHeader = () => {
  return (
    <>
      <Container>
        <Navbar>
          <Nav>
            <Nav.Link>All</Nav.Link>
            <Nav.Link className="ms-3">News</Nav.Link>
            <Nav.Link className="ms-3">Maps</Nav.Link>
            <Nav.Link className="ms-3">Images</Nav.Link>
            <Nav.Link className="ms-3">Videos</Nav.Link>
            <Nav.Link className="ms-3">More</Nav.Link>
          </Nav>
        </Navbar>
      </Container>
      <hr className="mt-0" />
    </>
  );
};

export default SearchSubHeader;
