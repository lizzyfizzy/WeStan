import React from 'react';

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

function Homepage() {
    return (
        <div className="feed">
            <header className="App-header">
                <p>
                WeStan
                </p>
            </header>
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
            <div className="triangle-left">
              <div className="inner-triangle"></div>
              <div className="download-box">
                <div className="download-element">
                  <div className="file-info text-content">badromancebreakcore.wav - 32.5 MB</div>
                  <div className="download-button type-indicator"></div>
                </div>
                <div className="download-element">
                  <div className="file-info text-content">badromanceAcapella.wav - 28.2 MB</div>
                  <div className="download-button type-indicator"></div>
                </div>
              </div>
            </div>
            <div className="profile-expand triangle-left">
              <div className="inner-triangle"></div>
              <div className="profile-element download-box">
                <div className="profile-info text-content">daphnefrvr</div>
                <div className="report-profile text-content">Report Post?</div>
              </div>
            </div>
          </div>
          <div className="comments-wrapper">
            <div className="comments-arrow"></div>
            <div className="comments-container">
              <div className="write-comment">
                <div className="my-profile right-box">
                  <img className="box-content" src={daphne_frvr} alt="daphne_frvr"></img>
                </div>
                <input className="comment-input" type="text" value="Write a comment"></input>
              </div>
            </div>
          </div>
        </div>
        <div className="post-container">
          <div className="text-post post">
            <div className="left-bar">
              <div className="artist-pic">
                <img className="artist-content" src={ariana} alt="ariana"></img>
              </div>
              <div className="type-indicator">
                <img className="type-image" src={text_post} alt="text_post"></img>
              </div>
            </div>
            <div className="main-content">
              <div className="text-content">
                I just feel like Ariana Grande is god idk
              </div>
              <div className="right-bar">
                <div className="poster-profile right-box top">
                  <img className="box-content" src={devil_man} alt="devil_man"></img>
                </div>
                <div className="right-filler"></div>
                <div className="yasses right-box center">
                  <img className="box-content" src={yasses_light} alt="yasses_light"></img>
                </div>
                <div className="comments right-box bottom">
                  <img className="box-content" src={comments_dark} alt="comments_dark"></img>
                </div>
              </div>
            </div>
          </div>
          <div className="comments-wrapper">
            <div className="comments-arrow"></div>
            <div className="comments-container">
              <div className="single-comment">
                <div className="commenter-profile right-box">
                  <img className="box-content" src={blue_frog} alt="blue_frog"></img>
                </div>
                <div className="comment-text text-content">
                  idk i think ur right!!!
                </div>
              </div>
              <div className="write-comment">
                <div className="my-profile right-box">
                  <img className="box-content" src={daphne_frvr} alt="daphne_frvr"></img>
                </div>
                <input className="comment-input" type="text" value="Write a comment"></input>
              </div>
            </div>
          </div>
        </div>
        <div className="post-container">
          <div className="image-post post">
            <div className="left-bar">
              <div className="artist-pic">
                <img className="artist-content" src={beyonce} alt="beyonce"></img>
              </div>
              <div className="type-indicator">
                <img className="type-image" src={image_post} alt="image_post"></img>
              </div>
            </div>
            <div className="main-content">
              <div className="image-parent">
                <img alt="beyonce tour flyer" src={beyonce_tour} className="image-content"></img>
                <div className="image-caption text-content">
                  WHO ELSE IS GOING OMGGGGG
                </div>
              </div>
              
              <div className="right-bar">
                <div className="poster-profile right-box top">
                  <img className="box-content" src={daphne_frvr} alt="daphne_frvr"></img>
                </div>
                <div className="right-filler"></div>
                <div className="download right-box center">
                  <img className="box-content" src={download_light} alt="download_light"></img>
                </div>
                <div className="yasses right-box center">
                  <img className="box-content" src={yasses_dark} alt="yasses_dark"></img>
                </div>
                <div className="comments right-box bottom">
                  <img className="box-content" src={comments_light} alt="comments_light"></img>
                </div>
              </div>
            </div>
          </div>
          <div className="comments-wrapper">
            <div className="comments-arrow"></div>
            <div className="comments-container">
              <div className="write-comment">
                <div className="my-profile right-box">
                  <img className="box-content" src={daphne_frvr} alt="daphne_frvr"></img>
                </div>
                <input className="comment-input" type="text" value="Write a comment"></input>
              </div>
            </div>
          </div>
        </div>
      </div>

        );
    }
    
    export default Homepage;