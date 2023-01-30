import React from "react";
import { FaWallet } from "react-icons/fa";
import logo1 from "../../images/jing.fm-foxes-clipart-706780.png";
import logo2 from "../../images/WalletConnect-Logo.png";

const WalletModal = () => {
  return (
    <div>
      <div
        style={{ color: "#9b1fe9", border: "2px solid #9b1fe9" }}
        type=""
        class=" d-flex align-items-center rounded p-1 fw-bold "
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <FaWallet></FaWallet>{" "}
        <span className="ms-1 d-lg-block d-none">Connect Wallet</span>
      </div>
      {/* <!-- Modal --> */}
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5 fw-bold" id="exampleModalLabel">
                Connect your wallet
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body d-flex justify-content-between m-3 text-center">
              <div className="bg-light p-2 rounded ">
                <img className="w-50" src={logo1} alt="" />
                <h5 className="fw-bold text-primary">Meta Mask</h5>
              </div>
              <div className="bg-light p-2 rounded ">
                <img className="w-50" src={logo2} alt="" />
                <h5 className="fw-bold text-primary">Wallet Connect</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletModal;
