import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { BsGoogle, BsFacebook, BsInstagram } from "react-icons/bs";

const LogIn = () => {
  return (
    <div
      style={{ backgroundColor: "#edf3ff", width: "100", height: "100vh" }}
      className="d-flex align-items-center "
    >
      <div className="bg-white mx-auto w-50 p-3 rounded">
        <h1 className="text-center">Log In</h1>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              className="border-0 border-bottom"
              placeholder="Enter email"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              className="border-0 border-bottom"
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          <Button
            className="container-fluid fw-bold"
            variant="primary"
            type="submit"
          >
            Log In
          </Button>
          <p className="fw-bold text-center my-3">
            Don't have an account? <Link to="/signUp">Signup</Link>{" "}
          </p>
          <div className="text-center fs-4">
            <span className="me-4">
              <BsGoogle></BsGoogle>
            </span>
            <span className="me-4">
              <BsFacebook></BsFacebook>
            </span>
            <span className="me-4">
              <BsInstagram></BsInstagram>
            </span>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default LogIn;
