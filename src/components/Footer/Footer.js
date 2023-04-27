import React from "react";
import { SiBinance } from "react-icons/si";
import { FaTwitter } from "react-icons/fa";
import { BsTelegram } from "react-icons/bs";
import "./footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="d-flex gap-5 align-items-center">
        <h5>SpaceDoge</h5>
        <p>Piercing the veil, kindling the unknown flame of BNBChain.</p>
      </div>
      <div>
        <div className="d-flex gap-3">
          <p>Airdrop</p>
          <p>About Us</p>
          <p>Token Economics</p>
        </div>
        <div className="d-flex gap-3 mt-2">
            <div className='icon'><SiBinance /></div>
            <div className='icon'><FaTwitter /></div>
            <div className='icon'><BsTelegram /></div>
        </div>
      </div>
    </div>
  );
}
