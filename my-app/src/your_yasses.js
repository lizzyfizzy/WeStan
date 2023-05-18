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

function YourYasses() {
    function toggleDownload(e) {
      var myself = e.target;
      var parent = document.getElementById(myself.id).parentElement;
      var grandparent = document.getElementById(parent.id).parentElement;
      var ggrandparent = document.getElementById(grandparent.id).parentElement;
      var downloadBox = document.getElementById(ggrandparent.id).nextSibling;
      if(document.getElementById(downloadBox.id).style.display === "none") {
        //make it dark, show downloadBox
        myself.src = download_dark;
        parent.style.backgroundColor = "#FF8E8E";
        downloadBox.style.display = "block";
      } else {
        myself.src = download_light;
        parent.style.backgroundColor = "white";
        downloadBox.style.display = "none";
      }
    }
  
    function toggleProfile(e) {
      var myself = e.target;
      var parent = document.getElementById(myself.id).parentElement;
      var grandparent = document.getElementById(parent.id).parentElement;
      var ggrandparent = document.getElementById(grandparent.id).parentElement;
      var target = document.getElementById(ggrandparent.id).nextSibling;
      if(!target.className.includes("profile-expand")) {
        target = document.getElementById(target.id).nextSibling;
      }
      if(document.getElementById(target.id).style.display === "none") {
        target.style.display = "block";
      } else {
        target.style.display = "none";
      }
    }
  
    function toggleYasses(e) {
      var myself = e.target;
      var parent = document.getElementById(myself.id).parentElement;
      if(parent.style.backgroundColor === "white") {
        //make it dark, show commentsBox
        myself.src = yasses_dark;
        parent.style.backgroundColor = "#FF8E8E";
      } else {
        myself.src = yasses_light;
        parent.style.backgroundColor = "white";
      }
    }
  
    function toggleComments(e) {
      var myself = e.target;
      var parent = document.getElementById(myself.id).parentElement;
      console.log(parent.id);
      var grandparent = document.getElementById(parent.id).parentElement;
      var ggrandparent = document.getElementById(grandparent.id).parentElement;
      var gggrandparent = document.getElementById(ggrandparent.id).parentElement;
      var commentsBox = document.getElementById(gggrandparent.id).nextSibling;
      console.log(commentsBox.id);
      if(document.getElementById(commentsBox.id).style.display === "none") {
        //make it dark, show commentsBox
        myself.src = comments_dark;
        parent.style.backgroundColor = "#FF8E8E";
        commentsBox.style.display = "block";
      } else {
        myself.src = comments_light;
        parent.style.backgroundColor = "white";
        commentsBox.style.display = "none";
      }
    }
    return (
        <div className="feed">
            <header className="App-header">
                <p>
                Your Yasses
                </p>
            </header>
            <div className="post-container">
          <div id="post-1" className="remix-post post">
            <div className="left-bar">
              <div className="artist-pic">
                <img className="artist-content" src={lady_gaga} alt="lady_gaga"></img>
              </div>
              <div className="type-indicator">
                <img className="type-image" src={audio_post} alt="audio_post"></img>
              </div>
            </div>
            <div id="main-1" className="main-content">
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
              <div id="right-1" className="right-bar">
                <div id="profile-2" className="poster-profile right-box top">
                  <img id="profile-1" onClick={toggleProfile} className="box-content" src={anime_dude} alt="anime_dude"></img>
                </div>
                <div className="right-filler"></div>
                <div id="download-2" onClick={toggleDownload} className="download right-box center">
                  <img id="download-1" className="box-content" src={download_light} alt="download_light"></img>
                </div>
                <div id="yasses-2" className="yasses right-box center">
                  <img id="yasses-1"  className="box-content" src={yasses_light} alt="yasses_light" onClick={toggleYasses}></img>
                </div>
                <div id="comments-2" onClick={toggleComments} className="comments right-box bottom">
                  <img id="comments-1" className="box-content" src={comments_light} alt="comments_light"></img>
                </div>
              </div>
            </div>
            <div id="bad-romance-download-box" className="triangle-left">
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
            <div id="profile-name-1" className="profile-expand triangle-left">
              <div className="inner-triangle"></div>
              <div className="profile-element download-box">
                <div className="profile-info text-content">anime_dude</div>
                <div className="report-profile text-content">Report Post?</div>
              </div>
            </div>
          </div>
          <div id="comment-box-1" className="comments-wrapper">
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
    );}
    export default YourYasses;