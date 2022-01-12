import React from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { BsFillGrid3X3GapFill } from "react-icons/bs";

const AppBar = () => {
  return (
    <>
      <Navbar>
        <Container fluid>
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#gmail">Gmail</Nav.Link>
            <Nav.Link href="#images">Images</Nav.Link>
            <Nav.Link href="#grid" className="px-3">
              <BsFillGrid3X3GapFill size={23} />
            </Nav.Link>
          </Nav>
          <Button variant="primary" className="px-4">
            Sign in
          </Button>
        </Container>
      </Navbar>
    </>
  );
};

export default AppBar;
