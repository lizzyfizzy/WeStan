import React from 'react';

import link from './icons/link.svg';
import dropdown from './icons/dropdown-arrow.svg';
import beyonce_tour from "./images/beyonce-tour.png"

function Profile() {
    return (
        <div className='feed'>
            <div className='post-container'>
                <div className='header-image'>
                    <img src={beyonce_tour}/>
                </div>
                <div className='profile-plate'>
                    <div className='follow-button'>
                        <div className='button-text'>
                            Follow
                        </div>
                    </div>
                    <div className='user-profile-image'></div>
                    <div className='profile-details'>
                        <div className='title-card'>
                            <div className='title'>daphnefrvr</div>
                            <div className='profile-text'>"stan twitter whom ?"</div>'
                        </div>
                        <div className='stats'>
                            <div className='stat-column'>
                                <div className='profile-text'>Joined 2023</div>
                                <div className='profile-text'>Active 2 days ago</div>
                                <div className='profile-text'><img src={link} alt="Discover" style={{marginRight: '5px'}} />Links</div>
                            </div>
                            <div className='stat-column'>
                                <div className='profile-text'>344 followers</div>
                                <div className='profile-text'>Following 48 users</div>
                                <div className='profile-text'>In 32 groups</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='section-header'>
                    <div className='title'>
                        Spotlight
                    </div>
                    <div className='edit-button'>
                        <div className='button-text'>
                            Edit
                        </div>
                    </div>
                </div>
                <div className="remix-post post">
            <div className="left-bar">
              <div className="artist-post-image">
              </div>
              <div className="type-indicator"></div>
            </div>
            <div className="main-content">
              <div className="remix-parent">
                <div className="remix-content">
                  <div className="remix-image"></div>
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
                <div className="poster-profile right-box top"></div>
                <div className="right-filler"></div>
                <div className="download right-box center"></div>
                <div className="yasses right-box center"></div>
                <div className="comments right-box bottom"></div>
              </div>
            </div>
            
          </div>
                <div className='section-header'>
                    <div className='title'>
                        Recent Posts
                    </div>
                    <div className='edit-button'>
                        <div className='button-text'>
                            <img src={dropdown} alt="Discover" style={{marginRight: '5px'}} />All Posts
                        </div>
                    </div>
                </div>
                <div className="post-container">
                    <div className="text-post post">
                        <div className="left-bar">
                        <div className="artist-post-image">

                        </div>
                        <div className="type-indicator"></div>
                        </div>
                        <div className="main-content">
                        <div className="text-content">
                            I just feel like Ariana Grande is god idk
                        </div>
                        <div className="right-bar">
                            <div className="poster-profile right-box top"></div>
                            <div className="right-filler"></div>
                            <div className="yasses right-box center"></div>
                            <div className="comments right-box bottom"></div>
                        </div>
                        </div>
                    </div>
                    
                    </div>
            </div>
        </div>
        
        
    );}
    export default Profile;