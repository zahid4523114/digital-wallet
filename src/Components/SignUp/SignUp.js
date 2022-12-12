import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { BsGoogle, BsFacebook, BsInstagram } from "react-icons/bs";

const SignUp = () => {
  return (
    <div
      style={{ backgroundColor: "#edf3ff", width: "100", height: "100vh" }}
      className="d-flex align-items-center "
    >
      <div className="bg-white mx-auto w-50 p-3 rounded">
        <h1 className="text-center">Sign Up</h1>
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
          <button
            style={{ backgroundColor: "#9b1fe9", color: "white" }}
            className="container-fluid fw-bold btn"
            type="submit"
          >
            Sign Up
          </button>
          <p className="fw-bold text-center my-3">
            Don't have an account?{" "}
            <Link style={{ color: "#9b1fe9" }} to="/logIn">
              Log In
            </Link>{" "}
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

export default SignUp;
