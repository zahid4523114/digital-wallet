import React, { useState } from "react";
import { AiFillWarning } from "react-icons/ai";
import Table from "../Table/Table";
import TestTable from "../Table/TestTable";
import ReCAPTCHA from "react-google-recaptcha";
import "./Home.css";

const Home = () => {
  const [changeTable, setChangeTable] = useState(true);

  function onChange(value) {
    console.log("Captcha value:", value);
  }

  return (
    <section style={{ backgroundColor: "#edf3ff" }} className="overflow-auto">
      <div
        style={{ backgroundColor: "#9b1fe9", fontSize: "15px" }}
        className=" text-white p-4 text-center"
      >
        Notice Here
      </div>
      {/* home content */}
      <div className="m-lg-5 m-3 w-auto">
        <h1 style={{ color: "#9b1fe9" }} className="fw-3 fs-2  fw-bold">
          Request testnet LINK
        </h1>
        <p className=" text-secondary ">
          Get testnet LINK for an account on one of the supported blockchain{" "}
          testnets so you can <br /> create and test your own oracle and
          Chainlinked smart contract
        </p>
      </div>
      {/*  */}
      <section className="bg-white p-3 m-lg-5 m-3 ">
        <p style={{ backgroundColor: "#EEF2FE" }} className="p-2">
          <AiFillWarning
            style={{ color: "#9b1fe9" }}
            className=" me-1 fs-5 "
          ></AiFillWarning>{" "}
          Your wallet is connected to{" "}
          <span className="fw-bold">Ethereum Kovan</span> , so you are
          requesting <span className="fw-bold">Ethereum Kovan</span> Link/ETH.
        </p>
        <form className=" form-inputs">
          <label
            style={{ color: "#9b1fe9", fontSize: "15px" }}
            className="fw-bold d-block"
          >
            Wallet Address
          </label>
          <input className="w-100" placeholder="Wallet Address" type="text" />

          <label
            style={{ color: "#9b1fe9", fontSize: "15px" }}
            className="fw-bold  d-block mt-2"
          >
            Request Type
          </label>
          <div className="w-100 d-flex  justify-content-between align-items-center">
            <input
              disabled
              className="w-50"
              placeholder="20 Test Link"
              type="text"
            />
            <input
              disabled
              className="w-50 ms-3"
              placeholder="0.5 ETH"
              type="text"
            />
          </div>
          <div className="CAPTCHA mt-3">
            <ReCAPTCHA
              sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
              onChange={onChange}
            />
          </div>
        </form>
        <button
          style={{ backgroundColor: "#9b1fe9", color: "white" }}
          className="btn  mt-3"
        >
          Send Request
        </button>

        {/* request history */}
        <div className="mt-5">
          <h5 style={{ fontSize: "16px" }} className="fw-bold ">
            Request History
          </h5>
          <div>
            <button
              style={{
                backgroundColor: changeTable ? "#0000FF" : "#F5F7FD",
                color: changeTable ? "white" : "black",
              }}
              onClick={() => setChangeTable(true)}
              className="btn me-lg-3 me-0 my-lg-0 my-3"
            >
              ETH Transaction History
            </button>
            <button
              style={{
                backgroundColor: changeTable ? "#F5F7FD" : "#0000FF",
                color: changeTable ? "black" : "white",
              }}
              onClick={() => setChangeTable(false)}
              className="btn"
            >
              TestLink Transaction History
            </button>
          </div>
        </div>
        {/* wallet table */}
        {changeTable ? <Table></Table> : <TestTable></TestTable>}
      </section>
    </section>
  );
};

export default Home;
