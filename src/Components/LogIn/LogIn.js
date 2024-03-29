import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import "./Login.css";
import { BsGoogle, BsFacebook } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { supabase } from "../../Supabase/Supabase.config";

const LogIn = () => {
  return (
    <div
      style={{ backgroundColor: "#edf3ff", width: "100%", minHeight: "80vh" }}
      className="p-5"
    >
      <div className="bg-white login-form  p-3 rounded">
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
          <button
            style={{ backgroundColor: "#9b1fe9", color: "white" }}
            className="container-fluid fw-bold btn"
            type="submit"
          >
            Log In
          </button>
          <p className="fw-bold text-center my-3">
            Don't have an account?{" "}
            <Link style={{ color: "#9b1fe9" }} to="/signUp">
              Signup
            </Link>{" "}
          </p>
          <div className="text-center fs-4">
            <span className="me-4">
              <BsGoogle></BsGoogle>
            </span>
            <span className="me-4">
              <BsFacebook></BsFacebook>
            </span>
            <span className="me-4 fs-3">
              <AiFillGithub></AiFillGithub>
            </span>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default LogIn;
