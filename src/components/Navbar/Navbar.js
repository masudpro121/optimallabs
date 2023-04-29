import React from "react";
import { SiBinance } from "react-icons/si";
import { FaTwitter } from "react-icons/fa";
import { BsTelegram } from "react-icons/bs";
import "./navbar.css";
import Logo from '../../img/logo.png'
export default function Navbar() {
  return (
    <div className=" mynav">
      <div className="logo">
        <img  src={Logo} alt="" />
        <h5>SpaceDoge</h5>
      </div>
      <div className="navLink">
        <p onClick={() => window.open("/#airdrop", "_self")}>Airdrop</p>
        <p onClick={() => window.open("/#about_us", "_self")}>About Us</p>
        <p onClick={() => window.open("/#token_economics", "_self")}>
          Token Economics
        </p>
      </div>
      <div className="d-flex gap-2">
        <div
          className="icon"
          onClick={() => window.open("https://binance.com/username", "_blank")}
        >
          <SiBinance />
        </div>
        <div
          className="icon"
          onClick={() => window.open("https://twitter.com/SpaceDogeAI", "_blank")}
        >
          <FaTwitter />
        </div>
        <div
          className="icon"
          onClick={() => window.open("https://telegram.com/username", "_blank")}
        >
          <BsTelegram />
        </div>
        <button>Buy Now</button>
        <button style={{ marginLeft: "10px" }}>Connect Now</button>
      </div>
    </div>
  );
}
