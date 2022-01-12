import "./DashBoard.css";
import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";
import { MdClear } from "react-icons/md";

const DashBoard = ({ setSearch }) => {
  const [input, setInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (/^[a-zA-Z0-9].*/.test(input) || /^[a-zA-Z0-9]+" ".*/.test(input)) {
      setSearch(input);
    }
  };
  return (
    <>
      <Container fluid>
        <div className="row">
          <div
            className="col-md-12 d-flex flex-column"
            style={{ marginTop: "150px" }}
          >
            <img
              src="https://cdn2.downdetector.com/static/uploads/logo/Google-new_19.png"
              alt="google-img"
              className="mx-auto my-3"
              style={{ height: "100px" }}
            />
            <div
              id="form"
              className="col-md-5 p-2 mx-auto border d-flex justify-content-between"
            >
              <form onSubmit={handleSubmit} className="d-flex w-100">
                <AiOutlineSearch
                  onClick={handleSubmit}
                  style={{ cursor: "pointer" }}
                  className="my-auto ms-2"
                  size={25}
                />
                <div className="form-group mx-2">
                  <input
                    id="input"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    size="80"
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
                  style={{ cursor: "pointer" }}
                  className="my-auto me-2"
                  size={24}
                />
              </form>
            </div>
            <div className="mx-auto my-4">
              <Button
                onClick={handleSubmit}
                variant="light"
                className="custom-btn mx-4"
              >
                Google Search
              </Button>
              <Button variant="light" className="custom-btn">
                I'm Feeling Lucky
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default DashBoard;
