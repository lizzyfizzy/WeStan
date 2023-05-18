import React from 'react';
import Ariana from './icons/ariana.svg'
import Beyonce from './icons/beyonce.svg'
import Will from './images/profile_pics/blue_frog.svg'
import Devil from './images/profile_pics/devil_man.svg'
import Anime from './images/profile_pics/anime_dude.svg'
import Dropdown from './icons/dropdown-arrow.svg'

import logo from './icons/crown logo.svg';
import discover_logo from './icons/Union.svg';
import profile_logo from './icons/Profile icon.svg';
import yas_logo from './icons/yas icon.svg';
import settings_logo from './icons/Gear Icon.svg';
import main_logo from "./icons/Word Logo.svg";
import audio_post from "./icons/audio_post.svg";
import image_post from "./icons/image_post.svg";
import text_post from "./icons/text_post.svg";
import comments_light from "./icons/comments_light.svg";
import yasses_light from "./icons/yasses_light.svg";
import download_light from "./icons/download_light.svg";
import download_dark from "./icons/download_dark.svg";
import comments_dark from "./icons/comments_dark.svg";
import yasses_dark from "./icons/yasses_dark.svg";

import beyonce_tour from "./images/beyonce-tour.png"
import gaga_image from "./images/gaga_image.svg"

import anime_dude from "./images/profile_pics/anime_dude.svg"
import blue_frog from "./images/profile_pics/blue_frog.svg"
import daphne_frvr from "./images/profile_pics/daphne_frvr.svg"
import devil_man from "./images/profile_pics/devil_man.svg"

import lady_gaga from "./icons/Ellipse 15.svg";
import ariana from "./icons/ariana.svg";
import beyonce from "./icons/beyonce.svg";
import cardi_b from "./icons/cardi_b.svg";
import nicki_minaj from "./icons/Nicki_minaj.svg";

function Discover() {
    return (
        <div className='feed'>
            <div className='discover-recommendations'>
                <div className='discover-column'>
                    <div className='section-header'>
                        <div className='title'>
                            Groups For You
                        </div>
                    </div>
                    <div className='group-recommendation'>
                        
                        <div className='group-rec-header'>
                            <div className='group-rec-img'><img className='fill-img' src={Ariana} /></div>
                            <div className='title-card'>
                                <div className='title'>Ariana Grande</div>
                                <div className='profile-text'>Arianators</div>
                            </div>
                        </div>
                        <div className='stats'>
                            <div className='stat-column'>
                                <div className='profile-text'>10,450 members</div>
                                <div className='profile-text'>59 posts today</div>
                            </div>
                            <div className='stat-column'>
                                <div className='profile-text'>353 online now</div>
                                <div className='profile-text'>Ranked #3</div>
                            </div>
                        </div>
                        <div className='followed-by-bar'>
                            <div className='following-profiles'>
                                <div style={{width: 30, height: 30, borderRadius: '2px'}}>
                                    <img src={Will} />
                                </div>
                                <div style={{width: 35, height: 35, borderRadius: '2px'}}>
                                    <img src={Devil} />
                                </div>
                                <div style={{width: 40, height: 40, borderRadius: '2px'}}>
                                    <img src={Anime} />
                                </div>
                                <div className='profile-text' style={{marginLeft: 10, width: 100}}>You have 4 friends in this group</div>
                            </div>
                            <div className='join-button'>
                                <div className='button-text'>
                                    Join
                                </div>
                            </div>  
                        </div>
                    </div>
                    
                    <div className='group-recommendation'>
                        
                        <div className='group-rec-header'>
                            <div className='group-rec-img'><img className='fill-img' src={Beyonce} /></div>
                            <div className='title-card'>
                                <div className='title'>Beyonce</div>
                                <div className='profile-text'>Beyhive</div>
                            </div>
                        </div>
                        <div className='stats'>
                            <div className='stat-column'>
                                <div className='profile-text'>12,450 members</div>
                                <div className='profile-text'>102 posts today</div>
                            </div>
                            <div className='stat-column'>
                                <div className='profile-text'>508 online now</div>
                                <div className='profile-text'>Ranked #1</div>
                            </div>
                        </div>
                        <div className='followed-by-bar'>
                            <div className='following-profiles'>
                                <div style={{width: 30, height: 30, borderRadius: '2px'}}>
                                    <img src={Will} />
                                </div>
                                <div style={{width: 35, height: 35, borderRadius: '2px'}}>
                                    <img src={Devil} />
                                </div>
                                <div style={{width: 40, height: 40, borderRadius: '2px'}}>
                                    <img src={Anime} />
                                </div>
                                <div className='profile-text' style={{marginLeft: 10, width: 100}}>You have 3 friends in this group</div>
                            </div>
                            <div className='join-button'>
                                <div className='button-text'>
                                    Join
                                </div>
                            </div>  
                        </div>
                    </div>

                    
                </div>
                <div className='discover-column'>
                <div className='section-header'>
                        <div className='title'>
                            Trending Groups
                        </div>
                    </div>
                    <div className='group-recommendation'>
                        
                        <div className='group-rec-header'>
                            <div className='group-rec-img'><img className='fill-img' src={Ariana} /></div>
                            <div className='title-card'>
                                <div className='title'>Ariana Grande</div>
                                <div className='profile-text'>Arianators</div>
                            </div>
                        </div>
                        <div className='stats'>
                            <div className='stat-column'>
                                <div className='profile-text'>10,450 members</div>
                                <div className='profile-text'>59 posts today</div>
                            </div>
                            <div className='stat-column'>
                                <div className='profile-text'>353 online now</div>
                                <div className='profile-text'>Ranked #3</div>
                            </div>
                        </div>
                        <div className='followed-by-bar'>
                            <div className='following-profiles'>
                                <div style={{width: 30, height: 30, borderRadius: '2px'}}>
                                    <img src={Will} />
                                </div>
                                <div style={{width: 35, height: 35, borderRadius: '2px'}}>
                                    <img src={Devil} />
                                </div>
                                <div style={{width: 40, height: 40, borderRadius: '2px'}}>
                                    <img src={Anime} />
                                </div>
                                <div className='profile-text' style={{marginLeft: 10, width: 100}}>You have 4 friends in this group</div>
                            </div>
                            <div className='join-button'>
                                <div className='button-text'>
                                    Join
                                </div>
                            </div>  
                        </div>
                    </div>
                    
                    <div className='group-recommendation'>
                        
                        <div className='group-rec-header'>
                            <div className='group-rec-img'><img className='fill-img' src={Beyonce} /></div>
                            <div className='title-card'>
                                <div className='title'>Beyonce</div>
                                <div className='profile-text'>Beyhive</div>
                            </div>
                        </div>
                        <div className='stats'>
                            <div className='stat-column'>
                                <div className='profile-text'>12,450 members</div>
                                <div className='profile-text'>102 posts today</div>
                            </div>
                            <div className='stat-column'>
                                <div className='profile-text'>508 online now</div>
                                <div className='profile-text'>Ranked #1</div>
                            </div>
                        </div>
                        <div className='followed-by-bar'>
                            <div className='following-profiles'>
                                <div style={{width: 30, height: 30, borderRadius: '2px'}}>
                                    <img src={Will} />
                                </div>
                                <div style={{width: 35, height: 35, borderRadius: '2px'}}>
                                    <img src={Devil} />
                                </div>
                                <div style={{width: 40, height: 40, borderRadius: '2px'}}>
                                    <img src={Anime} />
                                </div>
                                <div className='profile-text' style={{marginLeft: 10, width: 100}}>You have 3 friends in this group</div>
                            </div>
                            <div className='join-button'>
                                <div className='button-text'>
                                    Join
                                </div>
                            </div>  
                        </div>
                    </div>
                </div>
            </div>
            <div className='post-container'>
                <div className='section-header'>
                    <div className='title'>
                        Trending Posts
                    </div>
                    <div className='edit-button'>
                        <div className='button-text'>
                            <img src={Dropdown} alt="Discover" style={{marginRight: '5px'}} />All Posts
                        </div>
                    </div>
                </div>
                <div className="post-container">
                <div className="post-container">
                <div className="remix-post post">
                <div className="left-bar">
              <div className="artist-pic">
                <img className="artist-content" src={lady_gaga} alt="lady_gaga"></img>
              </div>
              <div className="type-indicator">
                <img className="type-image" src={audio_post} alt="audio_post"></img>
              </div>
            </div>
            <div className="main-content">
              <div className="remix-parent">
                <div className="remix-content">
                  <div className="remix-image"> {/*phase out*/}
                    <img className="audio-image" src={gaga_image} alt="gaga_image"></img>
                  </div>
                  <div className="remix-info">
                    <div className="remix-name text-content">
                      bad romance - breakcore edit
                    </div>
                    {/* <audio className="remix-audio"></audio> */}
                    <audio controls className="remix-audio">
                      <source src="horse.mp3" type="audio/mpeg" />
                    Your browser does not support the audio element.
                    </audio>
                  </div>
                </div>
                <div className="remix-caption text-content">
                  Hope you like this edit!
                </div>
              </div>
              <div className="right-bar">
                <div className="poster-profile right-box top">
                  <img className="box-content" src={anime_dude} alt="anime_dude"></img>
                </div>
                <div className="right-filler"></div>
                <div className="download right-box center">
                  <img className="box-content" src={download_dark} alt="download_dark"></img>
                </div>
                <div className="yasses right-box center">
                  <img className="box-content" src={yasses_light} alt="yasses_light"></img>
                </div>
                <div className="comments right-box bottom">
                  <img className="box-content" src={comments_light} alt="comments_light"></img>
                </div>
              </div>
            </div>
            
          </div>
        </div>
                    
                    </div>
            </div>
            
        </div>
    );}
    export default Discover;