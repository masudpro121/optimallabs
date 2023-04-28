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
      <div className="mt-2 mb-2">
        <div className="d-flex gap-3  navLink">
          <p onClick={()=>window.open('/#airdrop','_self')}>Airdrop</p>
          <p onClick={()=>window.open('/#about_us','_self')}>About Us</p>
          <p onClick={()=>window.open('/#token_economics','_self')}>Token Economics</p>
        </div>
        <div className="d-flex gap-3 mt-3">
        <div className='icon' onClick={()=>window.open('https://binance.com/username', '_blank')}><SiBinance /></div>
            <div className='icon' onClick={()=>window.open('https://twitter.com/username', '_blank')}><FaTwitter /></div>
            <div className='icon' onClick={()=>window.open('https://telegram.com/username', '_blank')}><BsTelegram /></div>
        </div>
      </div>
    </div>
  );
}
