import React from 'react';
import { useEffect } from "react";


import { getDatabase, set, ref} from "firebase/database";
import database from "./firebase";

import PostContainer from "./postContainer";

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
  // useEffect(() => {
  //   generateHTML();
  // }, []);
  


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

  function submitComment(e) {
    var myself = e.target;
    var sibling = myself.previousElementSibling;
    console.log(sibling.value);
    set(ref(database, 'testcomments/'), {
      comment: sibling.value,
    });
    // var parent = document.getElementById(myself.id).parentElement;
    // if(parent.style.backgroundColor === "white") {
    //   //make it dark, show commentsBox
    //   myself.src = yasses_dark;
    //   parent.style.backgroundColor = "#FF8E8E";
    // } else {
    //   myself.src = yasses_light;
    //   parent.style.backgroundColor = "white";
    // }
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

  // function generateHTML() {
  //   var feed = document.getElementById('feed');
    
  //   //repetitive part
  //   var postContainer = document.createElement("div");
  //   postContainer.classList.add("post-container");

  //   var post = document.createElement("div");
  //   post.classList.add("remix-post");  //type 
  //   post.classList.add("post");
  //   post.setAttribute("id", "post-1");

  //   var leftBar = document.createElement("div");
  //   leftBar.classList.add("left-bar");

  //   var artistPic = document.createElement("div");
  //   artistPic.classList.add("artist-pic");

  //   var artistContent = document.createElement("img");
  //   artistContent.classList.add("artist-content");
  //   artistContent.setAttribute("src", {lady_gaga});
  //   artistContent.setAttribute("alt", "lady_gaga");

  //   artistPic.appendChild(artistContent);
  //   leftBar.appendChild(artistPic);

  //   var typeIndicator = document.createElement("div");
  //   typeIndicator.classList.add("type-indicator");

  //   var typeImage = document.createElement("img");
  //   typeImage.classList.add("type-image");
  //   typeImage.setAttribute("src", {audio_post});
  //   typeImage.setAttribute("alt", "audio_post");

  //   typeIndicator.appendChild(typeImage);
  //   leftBar.appendChild(typeIndicator);
  //   post.appendChild(leftBar);

  //   var mainContent = document.createElement("div");
  //   mainContent.classList.add("main-content");
  //   mainContent.setAttribute("id", "main-1");

  //   var remixParent = document.createElement("div");
  //   remixParent.classList.add("remix-parent");

  //   var remixContent = document.createElement("div");
  //   remixContent.classList.add("remix-content");

  //   var remixImage = document.createElement("div");
  //   remixImage.classList.add("remix-image");

  //   var audioImage = document.createElement("img");
  //   audioImage.classList.add("audio-image");
  //   audioImage.setAttribute("src", {gaga_image});
  //   audioImage.setAttribute("alt", "gaga_image");

  //   remixImage.appendChild(audioImage);
  //   remixContent.appendChild(remixImage);

  //   var remixInfo = document.createElement("div");
  //   remixInfo.classList.add("remix-info");

  //   var remixName = document.createElement("div");
  //   remixName.classList.add("remix-name");
  //   remixName.classList.add("text-content");
  //   remixName.setAttribute("innerHTML", "bad romance - breakcore edit");

  //   remixInfo.appendChild(remixName);

  //   var remixAudio = document.createElement("audio");
  //   remixAudio.classList.add("remix-audio"); //may have "controls" issues
  //   remixAudio.setAttribute("innerHTML", "Your browser does not support the audio element.");

  //   var source = document.createElement("source");
  //   source.setAttribute("src", "horse.mp3");
  //   source.setAttribute("type", "audio/mpeg");

  //   remixAudio.appendChild(source);
  //   remixInfo.appendChild(remixAudio);
  //   remixContent.appendChild(remixInfo);
  //   remixParent.appendChild(remixContent);

  //   var remixCaption = document.createElement("div");
  //   remixCaption.classList.add("remix-caption");
  //   remixCaption.classList.add("textContent");
  //   remixCaption.setAttribute("innerHTML", "Hope you like this edit!");

  //   remixParent.appendChild(remixCaption);
  //   mainContent.appendChild(remixParent);

  //   var rightBar = document.createElement("div");
  //   rightBar.classList.add("right-bar");
  //   rightBar.setAttribute("id", "right-1");

  //   var posterProfile = document.createElement("div");
  //   posterProfile.classList.add("poster-profile");
  //   posterProfile.classList.add("right-box");
  //   posterProfile.classList.add("top"); //will have to be different
  //   posterProfile.setAttribute("id", "profile-2");

  //   var profile = document.createElement("img");
  //   profile.classList.add("box-content");
  //   profile.setAttribute("id", "profile-1");
  //   profile.setAttribute("src", {anime_dude});
  //   profile.setAttribute("alt", "anime_dude");

  //   profile.addEventListener("click", () => {
  //     toggleProfile();
  //   });

  //   posterProfile.appendChild(profile);
  //   rightBar.appendChild(posterProfile);

  //   var rightFiller = document.createElement("div");
  //   rightFiller.classList.add("right-filler");

  //   rightBar.appendChild(rightFiller);

  //   var download = document.createElement("div");
  //   download.classList.add("download");
  //   download.classList.add("right-box");
  //   download.classList.add("center");
  //   download.setAttribute("id", "download-2");

  //   download.addEventListener("click", () => {
  //     toggleDownload();
  //   });

  //   var download1 = document.createElement("img");
  //   download1.classList.add("box-content");
  //   download1.setAttribute("id", "download-1");
  //   download1.setAttribute("src", {download_light});
  //   download1.setAttribute("alt", "download_light");

  //   download.appendChild(download1);
  //   rightBar.appendChild(download);

  //   var yasses = document.createElement("div");
  //   yasses.classList.add("yasses");
  //   yasses.classList.add("right-box");
  //   yasses.classList.add("center");
  //   yasses.setAttribute("id", "yasses-2");

  //   var yasses1 = document.createElement("img");
  //   yasses1.classList.add("box-content");
  //   yasses1.setAttribute("id", "yasses-1");
  //   yasses1.setAttribute("src", {yasses_light});
  //   yasses1.setAttribute("alt", "yasses_light");

  //   yasses1.addEventListener("click", () => {
  //     toggleYasses();
  //   });

  //   yasses.appendChild(yasses1);
  //   rightBar.appendChild(yasses);

  //   var comments = document.createElement("div");
  //   comments.classList.add("comments");
  //   comments.classList.add("right-box");
  //   comments.classList.add("bottom");
  //   comments.setAttribute("id", "comments-2");

  //   comments.addEventListener("click", () => {
  //     toggleComments();
  //   });

  //   var comments1 = document.createElement("img");
  //   comments1.classList.add("box-content");
  //   comments1.setAttribute("id", "comments-1");
  //   comments1.setAttribute("src", {comments_light});
  //   comments1.setAttribute("alt", "comments_light");

  //   comments.appendChild(comments1);
  //   rightBar.appendChild(comments);
  //   mainContent.appendChild(rightBar);
  //   post.appendChild(mainContent);

  //   postContainer.appendChild(post);
  //   feed.appendChild(postContainer);

  // }

  

  

    return (
      <div className="feed">
          <header className="App-header">
              <p>
              WeStan
              </p>
          </header>
        {/* <div className="post-container"> */}
           <PostContainer />
        {/* </div> */}
        {/* <div className="post-container">
          <div id="post-2" className="text-post post">
            <div className="left-bar">
              <div className="artist-pic">
                <img className="artist-content" src={ariana} alt="ariana"></img>
              </div>
              <div className="type-indicator">
                <img className="type-image" src={text_post} alt="text_post"></img>
              </div>
            </div>
            <div id="main-2" className="main-content">
              <div className="text-content">
                I just feel like Ariana Grande is god idk
              </div>
              <div id="right-2" className="right-bar">
                <div id="profile-4" className="poster-profile right-box top">
                  <img id="profile-3" className="box-content" src={devil_man} alt="devil_man" onClick={toggleProfile}></img>
                </div>
                <div className="right-filler"></div>
                <div id="yasses-4" className="yasses right-box center">
                  <img id="yasses-3" className="box-content" src={yasses_light} alt="yasses_light" onClick={toggleYasses}></img>
                </div>
                <div id="comments-4" className="comments right-box bottom">
                  <img id="comments-3" className="box-content" src={comments_light} alt="comments_light" onClick={toggleComments}></img>
                </div>
              </div>
            </div>
            <div id="profile-name-2" className="profile-expand triangle-left">
              <div className="inner-triangle"></div>
              <div className="profile-element download-box">
                <div className="profile-info text-content">devil_man</div>
                <div className="report-profile text-content">Report Post?</div>
              </div>
            </div>
          </div>
          <div id="comments-box-2" className="comments-wrapper">
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
                <input className="comment-input" type="text" defaultValue="Write a comment"></input>
                <button onClick={submitComment}>Submit</button>
              </div>
            </div>
          </div>
        </div> */}
        {/* <div className="post-container">
          <div id="post-3" className="image-post post">
            <div className="left-bar">
              <div className="artist-pic">
                <img className="artist-content" src={beyonce} alt="beyonce"></img>
              </div>
              <div className="type-indicator">
                <img className="type-image" src={image_post} alt="image_post"></img>
              </div>
            </div>
            <div id="main-3" className="main-content">
              <div className="image-parent">
                <img alt="beyonce tour flyer" src={beyonce_tour} className="image-content"></img>
                <div className="image-caption text-content">
                  WHO ELSE IS GOING OMGGGGG
                </div>
              </div>
              <div id="right-3" className="right-bar">
                <div id="profile-6" className="poster-profile right-box top">
                  <img id="profile-5" className="box-content" src={daphne_frvr} alt="daphne_frvr" onClick={toggleProfile}></img>
                </div>
                <div className="right-filler"></div>
                <div id="download-4" className="download right-box center">
                  <img id="download-3" className="box-content" src={download_light} alt="download_light" onClick={toggleDownload}></img>
                </div>
                <div id="yasses-6" className="yasses right-box center">
                  <img id="yasses-5" className="box-content" src={yasses_light} alt="yasses_light" onClick={toggleYasses}></img>
                </div>
                <div id="comments-6" className="comments right-box bottom">
                  <img id="comments-5" className="box-content" src={comments_light} alt="comments_light" onClick={toggleComments}></img>
                </div>
              </div>
            </div>
            <div id="beyonce-tour-download-box" className="triangle-left">
              <div className="inner-triangle"></div>
              <div className="download-box">
                <div className="download-element">
                  <div className="file-info text-content">beyonce-tour.png - 32.5 MB</div>
                  <div className="download-button type-indicator"></div>
                </div>
              </div>
            </div>
            <div id="profile-name-3" className="profile-expand triangle-left">
              <div className="inner-triangle"></div>
              <div className="profile-element download-box">
                <div className="profile-info text-content">daphnefrvr</div>
                <div className="report-profile text-content">Report Post?</div>
              </div>
            </div>
          </div>
          <div id="comments-box-3" className="comments-wrapper">
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
        </div> */}
      </div>
        );
    }
    
    export default Homepage;