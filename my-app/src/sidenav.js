import React from 'react';
import { Link}  from "react-router-dom";
import logo from './icons/crown logo.svg';
import discover_logo from './icons/Union.svg';
import profile_logo from './icons/Profile icon.svg';
import yas_logo from './icons/yas icon.svg';
import settings_logo from './icons/Gear Icon.svg';
import main_logo from "./icons/Word Logo.svg";

import lady_gaga from "./icons/Ellipse 15.svg";
import ariana from "./icons/ariana.svg";
import beyonce from "./icons/beyonce.svg";
import cardi_b from "./icons/cardi_b.svg";
import nicki_minaj from "./icons/Nicki_minaj.svg";


const SideNav = (props) => {
    return (
        <div className="sidenav">
            <div className="main-logo"><img src={main_logo} alt="main" /></div>
             <div className='pages'>
             <Link to="/">
                <div className="titlediv">
                    <div className="icon-image"><img src={logo} alt="Home" /></div>
                    <a href="#section">Home</a>
                </div>
            </Link>
            <Link to="/discover">
                <div className="titlediv">
                    <div className="icon-image"><img src={discover_logo} alt="Discover" /></div>
                    <a href="#section">Discover</a>
                </div>
            </Link>
            <Link to="/profile">
                <div className="titlediv">
                    <div className="icon-image"><img src={profile_logo} alt="Profile" /></div>
                    <a href="#section">Profile</a>
                </div>
            </Link>
            <Link to ="/youryasses">
                <div className="titlediv">
                    <div className="icon-image"><img src={yas_logo} alt="Discover" /></div>
                    <a href="#section">Your Yasses</a>
                </div>
            </Link>
                <div className="titlediv">
                    <div className="icon-image"><img src={settings_logo} alt="Discover" /></div>
                    <a href="#section">Settings</a>
                </div>

             </div>
             <div className='groups' >
                <div className="titlegroups">
                    Your Groups
                </div>
                <div class="white-box">
                    <div className = 'artist-name'>
                        Lady Gaga
                    </div>
                    <div className = 'group-name'>
                        Little Monsters
                    </div>
                    <div className="artist-image"><img src={lady_gaga} alt="Discover" /></div>
                    <div className= "badge">
                        3
                    </div>
                </div>
                <div class="white-box">
                    <div className = 'artist-name'>
                        Ariana Grande
                    </div>
                    <div className = 'group-name'>
                        Arianators
                    </div>
                    <div className="artist-image"><img src={ariana} alt="Discover" /></div>
                    <div className= "badge">
                        5
                    </div>
                </div>
                <div class="white-box">
                    <div className = 'artist-name'>
                        Beyonce
                    </div>
                    <div className = 'group-name'>
                        Beehive
                    </div>
                    <div className="artist-image"><img src={beyonce} alt="Discover" /></div>
                    <div className= "badge">
                        8
                    </div>
                </div>
                <div class="white-box">
                    <div className = 'artist-name'>
                        Cardi B
                    </div>
                    <div className = 'group-name'>
                        Bardi Gang
                    </div>
                    <div className="artist-image"><img src={cardi_b} alt="Discover" /></div>
                    <div className= "badge">
                        2
                    </div>
                
                </div>
                <div class="white-box">
                    <div className = 'artist-name'>
                        Nicki Minaj
                    </div>
                    <div className = 'group-name'>
                        Barbs
                    </div>
                    <div className="artist-image"><img src={nicki_minaj} alt="Discover" /></div>
                    <div className= "badge">
                        1
                    </div>
                
                </div>
                
             </div>
               
        </div>
    );
};
export default SideNav;