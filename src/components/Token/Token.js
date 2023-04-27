import React from "react";
import "./token.css";
import TokenAnalysis from "../../img/token-analysis.png"
export default function Token() {
  return (
    <div className="token">
      <div>
        <div>
          <h2 className="primary">Token Economics</h2>
          <p>Token Supply: 100 000 000 000</p>
        </div>
        <div className="marketing">
          <p>10% Marketing</p>
          <p>20% LP + Staking Rewards</p>
          <p>20% LP + Staking Rewards</p>
        </div>
      </div>
      <div className="imgCont">
          <img src={TokenAnalysis} alt="" />
      </div>
    </div>
  );
}
