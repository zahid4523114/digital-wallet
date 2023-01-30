import React from "react";
import { Link } from "react-router-dom";
import WalletModal from "../ConnectWalletModal/WalletModal";
import DropDown from "../DropDown/DropDown";
import "./Header.css";

const Header = () => {
  return (
    // <div>
    //   <nav class="navbar bg-white p-3 border-bottom">
    //     <div class="container-fluid d-flex justify-content-between align-items-center">
    //       {/* logo */}
    //       <div>
    //         <Link
    //           to="/home"
    //           style={{ color: "#9b1fe9" }}
    //           class="text-decoration-none fs-3 fw-bold "
    //         >
    //           Faucets
    //         </Link>
    //       </div>

    //       <div className=" d-flex justify-content-between align-items-center">
    //         {/* select options */}
    //         <div class="">
    //           <select
    //             class="form-select w-75"
    //             id="floatingSelect"
    //             aria-label="Floating label select example"
    //           >
    //             <option value="1">Arbitrum Rinkeby</option>
    //             <option value="2"> Avalanche Fuji</option>
    //             <option value="3"> BNB Chain Testnet</option>
    //             <option selected value="4">
    //               Ethereum Rinkeby
    //             </option>
    //             <option value="5"> Fantom Testnet</option>
    //             <option value="6"> Harmony Testnet</option>
    //             <option value="7"> POA Network Sokol</option>
    //             <option value="8"> Polygon Mumbai</option>
    //           </select>
    //         </div>

    //         {/* wallet modal */}
    //         <div>
    //           <WalletModal></WalletModal>
    //         </div>

    //         {/* dropdown */}
    //         <div>
    //           <DropDown></DropDown>
    //         </div>
    //       </div>
    //     </div>
    //   </nav>
    // </div>
    <div>
      <nav class="navbar d-flex justify-content-between align-items-center bg-light p-3">
        <div>
          <Link
            to="/home"
            style={{ color: "#9b1fe9" }}
            class="text-decoration-none fs-3 fw-bold "
          >
            Faucets
          </Link>
        </div>

        <div className="d-flex align-items-center">
          <div class="network-set me-3">
            <select
              class="form-select"
              id="floatingSelect"
              aria-label="Floating label select example"
            >
              <option value="1">Arbitrum Rinkeby</option>
              <option value="2"> Avalanche Fuji</option>
              <option value="3"> BNB Chain Testnet</option>
              <option selected value="4">
                Ethereum Rinkeby
              </option>
              <option value="5"> Fantom Testnet</option>
              <option value="6"> Harmony Testnet</option>
              <option value="7"> POA Network Sokol</option>
              <option value="8"> Polygon Mumbai</option>
            </select>
          </div>

          {/* wallet modal */}
          <div className="ms-3">
            <WalletModal></WalletModal>
          </div>

          {/* dropdown */}
          <div className="ms-3">
            <DropDown></DropDown>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
