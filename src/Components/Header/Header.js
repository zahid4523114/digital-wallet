import React from "react";
import WalletModal from "../ConnectWalletModal/WalletModal";
import logo1 from "../../images/Arbitrum-logo.png";
import logo2 from "../../images/Avalanche-AVAX-The-Giving-Block.png";
import logo3 from "../../images/Binance_Logo.svg.png";
import logo4 from "../../images/ethicon.webp";
import logo5 from "../../images/Fantom-logo.png";
import logo6 from "../../images/Y88JAze.png";
import logo7 from "../../images/ChainLogo.png";
import logo8 from "../../images/polygon.png";
import { HiOutlineUserCircle } from "react-icons/hi";

const Header = () => {
  return (
    <div>
      <nav class="navbar bg-light">
        <div class="container-fluid d-flex flex-lg-row flex-md-row  flex-column justify-content-between align-items-center">
          <h2 class="navbar-brand fs-3 fw-bold text-primary">Faucets</h2>

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
            <div className="ms-lg-4 my-3">
              <HiOutlineUserCircle className="fs-1 text-secondary"></HiOutlineUserCircle>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
