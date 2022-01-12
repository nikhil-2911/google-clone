import React, { useState, useEffect } from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";
import { MdClear } from "react-icons/md";

const AppBar = ({ setSearch, searchTerm }) => {
  const [input, setInput] = useState(searchTerm);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (/^[a-zA-Z0-9].*/.test(input) || /^[a-zA-Z0-9]+" ".*/.test(input)) {
      setSearch(input);
    }
  };
  useEffect(() => {
    setInput(searchTerm);
  }, [searchTerm]);
  return (
    <>
      <Navbar className="mt-2">
        <Container fluid>
          <Navbar.Brand href="/">
            <img
              className="mx-3"
              src="https://cdn2.downdetector.com/static/uploads/logo/Google-new_19.png"
              alt="google-logo"
              style={{ height: "30px" }}
            />
          </Navbar.Brand>
          <div
            id="form"
            className="col-md-5 p-2 border d-flex justify-content-between"
          >
            <form onSubmit={handleSubmit} className="d-flex w-100">
              <div className="form-group mx-2">
                <input
                  id="input"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  size="70"
                  type="text"
                  className="form-control"
                />
              </div>
              {input ? (
                <MdClear
                  onClick={(e) => setInput("")}
                  className="my-auto me-2"
                  size={25}
                />
              ) : null}
              <BsFillMicFill
                className="my-auto ms-1"
                style={{ cursor: "pointer" }}
                size={24}
              />
              <AiOutlineSearch
                onClick={handleSubmit}
                className="my-auto ms-1"
                style={{ cursor: "pointer" }}
                size={25}
              />
            </form>
          </div>
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
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
