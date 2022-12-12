import React, { useState } from "react";
import { VscWarning } from "react-icons/vsc";
import Table from "../Table/Table";
import TestTable from "../Table/TestTable";
import ReCAPTCHA from "react-google-recaptcha";

const Home = () => {
  const [changeTable, setChangeTable] = useState(true);
  function onChange(value) {
    console.log("Captcha value:", value);
  }
  return (
    <section style={{ backgroundColor: "#edf3ff" }} className="overflow-auto">
      <div
        style={{ backgroundColor: "#9b1fe9" }}
        className=" text-white fw-bold p-4 fs-5 text-center"
      >
        Notice Here
      </div>
      {/* home content */}
      <div className="m-lg-5 m-3 w-auto">
        <h1 style={{ color: "#9b1fe9" }} className="fw-3  fw-bold">
          Request testnet LINK
        </h1>
        <p className="fw-bold text-secondary ">
          Get testnet LINK for an account on one of the supported blockchain{" "}
          testnets so you can <br /> create and test your own oracle and
          Chainlinked smart contract
        </p>
      </div>
      {/*  */}
      <section className="bg-white p-3 m-lg-5 m-3 ">
        <p className="fw-bold bg-light rounded p-3">
          <VscWarning className="text-danger me-1 fs-5 "></VscWarning> Your
          wallet is connected to Ethereum Kovan, so you are requesting Ethereum
          Kovan Link/ETH.
        </p>
        <div>
          <label style={{ color: "#9b1fe9" }} className="fw-bold fs-5 d-block">
            Wallet Address
          </label>
          <input className="" placeholder="Wallet Address" type="text" />

          <label
            style={{ color: "#9b1fe9" }}
            className="fw-bold fs-5 d-block mt-2"
          >
            Request Type
          </label>
          <div>
            <input
              disabled
              className=""
              placeholder="20 Test Link"
              type="text"
            />
            <input
              disabled
              className="ms-lg-2 mt-lg-0 mt-3 mb-3"
              placeholder="0.5 ETH"
              type="text"
            />
          </div>
          <div className="CAPTCHA">
            <ReCAPTCHA
              sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
              onChange={onChange}
            />
          </div>
        </div>
        <button
          style={{ backgroundColor: "#9b1fe9", color: "white" }}
          className="btn  mt-3 fw-bold"
        >
          Send Request
        </button>

        {/* request history */}
        <div className="mt-5">
          <h5 className="fw-bold ">Request History</h5>
          <div>
            <button
              onClick={() => setChangeTable(true)}
              className="btn btn-primary me-lg-3 me-0 my-lg-0 my-3 text-white"
            >
              ETH Transaction History
            </button>
            <button
              onClick={() => setChangeTable(false)}
              className="btn btn-primary  text-white"
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
