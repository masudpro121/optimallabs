import React from 'react'
import {SiBinance} from 'react-icons/si'
import {FaTwitter} from 'react-icons/fa'
import {BsTelegram} from 'react-icons/bs'
import "./navbar.css"
export default function Navbar() {
  return (
    <div className="d-flex justify-content-between align-items-center mynav">
        <div className='logo'><h5>SpaceDoge</h5></div>
        <div className='d-flex align-items-center gap-3'>
            <p>Airdrop</p>
            <p>About Us</p>
            <p>Token Economics</p>
        </div>
        <div className='d-flex gap-2'>
            <div className='icon'><SiBinance /></div>
            <div className='icon'><FaTwitter /></div>
            <div className='icon'><BsTelegram /></div>
            <button>Buy Now</button>
            <button style={{marginLeft:'10px'}}>Connect Now</button>
        </div>
    </div>
  )
}
