import React from "react";
import { Link } from "react-router-dom";
import WalletModal from "../ConnectWalletModal/WalletModal";
import DropDown from "../DropDown/DropDown";

const Header = () => {
  return (
    <div>
      <nav class="navbar bg-white p-3">
        <div class="container-fluid d-flex flex-lg-row flex-md-row  flex-column justify-content-between align-items-center">
          <Link
            to="/home"
            style={{ color: "#9b1fe9" }}
            class="navbar-brand fs-3 fw-bold "
          >
            Faucets
          </Link>

          <div className="d-flex flex-lg-row flex-md-row  flex-column  justify-content-between align-items-center">
            <div>
              <form class="" role="search">
                <select
                  class="form-select w-75 mx-auto mb-lg-0 mb-3"
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
              </form>
            </div>
            <WalletModal></WalletModal>
            <DropDown></DropDown>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
