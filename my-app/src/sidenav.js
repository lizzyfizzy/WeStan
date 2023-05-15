import React from 'react';
import logo from './icons/crown logo.svg';
import discover_logo from './icons/Union.svg';
import profile_logo from './icons/Profile icon.svg';
import yas_logo from './icons/yas icon.svg';
import settings_logo from './icons/Gear Icon.svg';
import main_logo from "./icons/Word Logo.svg";


const SideNav = (props) => {
    return (
        <div className="sidenav">
            <div className="main-logo"><img src={main_logo} alt="Home" /></div>

             <div className='pages'>
                
                
                <div className="titlediv">
                    <div className="icon-image"><img src={logo} alt="Home" /></div>
                    <a href="#section">Home</a>
                </div>
                <div className="titlediv">
                    <div className="icon-image"><img src={discover_logo} alt="Discover" /></div>
                    <a href="#section">Discover</a>
                </div>
                <div className="titlediv">
                    <div className="icon-image"><img src={profile_logo} alt="Discover" /></div>
                    <a href="#section">Profile</a>
                </div>
                <div className="titlediv">
                    <div className="icon-image"><img src={yas_logo} alt="Discover" /></div>
                    <a href="#section">Your Yasses</a>
                </div>
                <div className="titlediv">
                    <div className="icon-image"><img src={settings_logo} alt="Discover" /></div>
                    <a href="#section">Settings</a>
                </div>

             </div>
             <div className='groups' style = {{color: 'white',borderBottom: '2px solid white', width: '100%', marginBottom: '1rem'}} >
                Your Groups
                
             </div>
               
        </div>
    );
};
export default SideNav;