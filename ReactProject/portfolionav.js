import React, { useState } from 'react';
import './portfolionav.css';
import profile from './profile.jpeg'
import { FaFacebookF } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import {MdDarkMode} from "react-icons/md";
import {IoSunnyOutline} from "react-icons/io5";
const Navbar = () => {
    const[isDarkMode,setDarkMode]=useState(false);
    const toggleDarkmode=()=>{
        setDarkMode(!isDarkMode);
    };
    return ( 
        <div className={isDarkMode ? 'dark-mode':'light-mode'}>
        <div className='portfolio'>
            <nav>
                <img src={profile}/><hr color='transparent'/>
                <ul>
                <li>HOME</li>
                <li>ABOUT</li>
                <li>RESUME</li>
                <li>PORTFOLIOS</li>
                <li>BLOGS</li>
                <li>CONTACTS</li>
                </ul>
            </nav>
            <main>
                <button type="submit" id="btn" onClick={toggleDarkmode}>{isDarkMode ? <MdDarkMode className='icons'/>:<IoSunnyOutline className='icons'/>}</button>
                <h1>Hi, I am <span>Muskanjali</span> </h1>
                <p>I am a Front End Developer. I can provide clean code and pixel perfect design.I also make website more & more interactive with web animations.</p>
                <p><FaFacebookF className='icon' /><FiTwitter className='icon' /><FaLinkedinIn  className='icon'/></p>
            </main>
        </div>
        </div>
     );
}
 
export default Navbar;