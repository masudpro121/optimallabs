import React from "react";
import "./hero.css";

import Video from '../../video/bg.mp4'
export default function Hero() {
  return (
    <div className="hero-outer">
      <video autoPlay={true} muted loop id="myVideo">
        <source src={Video} type="video/mp4" />
      </video>
      <div className="hero py-5">
      <div className=" pb-2">
        <h2>The token that’s all about</h2>
      </div>
      <div className="mb-3">
        <h2 className="space">Space Doge</h2>
        <p>
          It shoulders the important task of revitalizing BNBChain MEME Coin.
        </p>
      </div>
        <div className="hexagonal">
          <div className="inner">
          <p style={{fontSize:'25px'}}>You get <span style={{color:'#ACF10E'}}>SIDOGE now</span></p>
          <p className="mt-2 mb-2" style={{fontSize:'15px', color:'#73A095'}}>
            Airdrop Alert! We're airdropping a total of 70,000,000,000 <span style={{color:'#ACF10E'}}>$SIDOGE </span>
            tokens for addresses holding .bnb domains. Claim your share now as
            unclaimed tokens will be burnt in 28 days.
          </p>
          <button className="burned">28 days will be burned</button>
          <div className="claim">
            <p>Claimed</p>
            <p>70 000 000 000</p>
          </div>
          <div className="didnt">
            <button>You didn't connect the wallet</button>
            <button>You didn't connect the wallet</button>
          </div>
          </div>
        </div>
    </div>
    </div>
  );
}
