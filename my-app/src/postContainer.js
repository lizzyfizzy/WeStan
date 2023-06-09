import React from 'react';

import { getDatabase, set, push, ref, child, get } from "firebase/database";
import database from "./firebase";

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


function toggleDownload(e) {
  var myself = e.target;
  var parent = document.getElementById(myself.id).parentElement;
  var grandparent = document.getElementById(parent.id).parentElement;
  var ggrandparent = document.getElementById(grandparent.id).parentElement;
  var downloadBox = document.getElementById(ggrandparent.id).nextSibling;
  if (document.getElementById(downloadBox.id).style.display === "none") {
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
  if (!target.className.includes("profile-expand")) {
    target = document.getElementById(target.id).nextSibling;
  }
  if (document.getElementById(target.id).style.display === "none") {
    target.style.display = "block";
  } else {
    target.style.display = "none";
  }
}

function toggleYasses(e) {
  var myself = e.target;
  var parent = document.getElementById(myself.id).parentElement;
  if (parent.style.backgroundColor === "white") {
    //make it dark, show commentsBox
    myself.src = yasses_dark;
    parent.style.backgroundColor = "#FF8E8E";
  } else {
    myself.src = yasses_light;
    parent.style.backgroundColor = "white";
  }
}

function submitComment(e, index) {
  var myself = e.target;
  var sibling = myself.previousElementSibling;

  const postListRef = ref(database, 'posts/' + index.index + '/comments');
  const newPostRef = push(postListRef);
  set(newPostRef, {
    comment: sibling.value,
    profileImage: "daphne_frvr",
  });
  alert("Thanks! Your comment is awaiting moderation.");
  sibling.value = "Write a comment"

}

function toggleComments(e) {
  var myself = e.target;
  var parent = document.getElementById(myself.id).parentElement;
  var grandparent = document.getElementById(parent.id).parentElement;
  var ggrandparent = document.getElementById(grandparent.id).parentElement;
  var gggrandparent = document.getElementById(ggrandparent.id).parentElement;
  var commentsBox = document.getElementById(gggrandparent.id).nextSibling;
  if (document.getElementById(commentsBox.id).style.display === "none") {
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

const images = {

  "logo": logo,
  "discover_logo": discover_logo,
  "profile_logo": profile_logo,
  "yas_logo": yas_logo,
  "settings_logo": settings_logo,
  "main_logo": main_logo,
  "audio_post": audio_post,
  "image_post": image_post,
  "text_post": text_post,
  "comments_light": comments_light,
  "yasses_light": yasses_light,
  "download_light": download_light,
  "download_dark": download_dark,
  "comments_dark": comments_dark,
  "yasses_dark": yasses_dark,

  "beyonce_tour": beyonce_tour,
  "gaga_image": gaga_image,

  "anime_dude": anime_dude,
  "blue_frog": blue_frog,
  "daphne_frvr": daphne_frvr,
  "devil_man": devil_man,

  "lady_gaga": lady_gaga,
  "ariana": ariana,
  "beyonce": beyonce,
  "cardi_b": cardi_b,
  "nicki_minaj": nicki_minaj,
}

class PostContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      posts: [],
    };
  }

  componentDidMount() {
    const dbRef = ref(getDatabase());
    get(child(dbRef, `posts/`)).then((snapshot) => {
      if (snapshot.exists()) {
        this.setState({ posts: snapshot.val() });
        this.setState({ loaded: true });
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
  }

  render() {
    return (
      <div className="post-container">
        {this.state.posts.map((post, index) => {
          if (post.type === "remix") {
            return (
              <div key={post.type}>
                <div id="post-1" className="remix-post post">
                  <div className="left-bar">
                    <div className="artist-pic">
                      <img className="artist-content" src={images[post.artistContentSrc]} alt={post.artistContentSrc}></img>
                    </div>
                    <div className="type-indicator">
                      <img className="type-image" src={audio_post} alt="audio_post"></img>
                    </div>
                  </div>
                  <div id="main-1" className="main-content">
                    <div className="remix-parent">
                      <div className="remix-content">
                        <div className="remix-image"> {/*phase out*/}
                          <img className="audio-image" src={images[post.audioImageSrc]} alt={post.audioImageSrc}></img>
                        </div>
                        <div className="remix-info">
                          <div className="remix-name text-content">
                            {post.remixName}
                          </div>
                          {/* <audio className="remix-audio"></audio> */}
                          <audio controls className="remix-audio">
                            <source src={post.audioSrc} type="audio/mpeg" />
                            Your browser does not support the audio element.
                          </audio>
                        </div>
                      </div>
                      <div className="remix-caption text-content">
                        {post.remixCaption}
                      </div>
                    </div>
                    <div id="right-1" className="right-bar">
                      <div id="profile-2" className="poster-profile right-box top">
                        <img id="profile-1" onClick={toggleProfile} className="box-content" src={images[post.profileImageSrc]} alt={post.profileImageSrc}></img>
                      </div>
                      <div className="right-filler"></div>
                      <div id="download-2" onClick={toggleDownload} className="download right-box center">
                        <img id="download-1" className="box-content" src={download_light} alt="download_light"></img>
                      </div>
                      <div id="yasses-2" className="yasses right-box center">
                        <img id="yasses-1" className="box-content" src={yasses_light} alt="yasses_light" onClick={toggleYasses}></img>
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
                    {post.comments ? Object.keys(post.comments).map((comment, i) => {
                      return (<div className="single-comment" key={i}>
                        <div className="commenter-profile right-box">
                          <img className="box-content" src={images[post.comments[comment].profileImage]} alt={post.comments[comment].profileImage}></img>
                        </div>
                        <div className="comment-text text-content">
                          {post.comments[comment].comment}
                        </div>
                      </div>)
                    }) : null}
                    <div className="write-comment">
                      <div className="my-profile right-box">
                        <img className="box-content" src={daphne_frvr} alt="daphne_frvr"></img>
                      </div>
                      <input className="comment-input" type="text" defaultValue="Write a comment"></input>
                      <button onClick={(e) => { 
                        submitComment(e, { index });

                        }}>Submit</button>
                    </div>
                  </div>
                </div>
              </div>)
          } else if (post.type === "text") {
            return (
              <div key={post.type}>
                <div id="post-2" className="text-post post">
                  <div className="left-bar">
                    <div className="artist-pic">
                      <img className="artist-content" src={images[post.artistContentSrc]} alt={post.artistContentSrc}></img>
                    </div>
                    <div className="type-indicator">
                      <img className="type-image" src={text_post} alt="text_post"></img>
                    </div>
                  </div>
                  <div id="main-2" className="main-content">
                    <div className="text-content">
                      {post.textContent}
                    </div>
                    <div id="right-2" className="right-bar">
                      <div id="profile-4" className="poster-profile right-box top">
                        <img id="profile-3" className="box-content" src={images[post.profileImage]} alt={post.profileImage} onClick={toggleProfile}></img>
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
                    {post.comments ? Object.keys(post.comments).map((comment, i) => {
                      return (<div className="single-comment" key={i}>
                        <div className="commenter-profile right-box">
                          <img className="box-content" src={images[post.comments[comment].profileImage]} alt={post.comments[comment].profileImage}></img>
                        </div>
                        <div className="comment-text text-content">
                          {post.comments[comment].comment}
                        </div>
                      </div>)
                    }) : null}
                    <div className="write-comment">
                      <div className="my-profile right-box">
                        <img className="box-content" src={daphne_frvr} alt="daphne_frvr"></img>
                      </div>
                      <input className="comment-input" type="text" defaultValue="Write a comment"></input>
                      <button onClick={(e) => { submitComment(e, { index }) }}>Submit</button>
                    </div>
                  </div>
                </div>
              </div>)
          } else if (post.type === "image") {
            return (
              <div key={post.type}>
                <div id="post-3" className="image-post post">
                  <div className="left-bar">
                    <div className="artist-pic">
                      <img className="artist-content" src={images[post.artistContent]} alt={post.artistContent}></img>
                    </div>
                    <div className="type-indicator">
                      <img className="type-image" src={image_post} alt="image_post"></img>
                    </div>
                  </div>
                  <div id="main-3" className="main-content">
                    <div className="image-parent">
                      <img alt="beyonce tour flyer" src={images[post.imageSrc]} className="image-content"></img>
                      <div className="image-caption text-content">
                        {post.textContent}
                      </div>
                    </div>
                    <div id="right-3" className="right-bar">
                      <div id="profile-6" className="poster-profile right-box top">
                        <img id="profile-5" className="box-content" src={images[post.profileImage]} alt={post.profileImage} onClick={toggleProfile}></img>
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
                    {post.comments ? Object.keys(post.comments).map((comment, i) => {
                      return (<div className="single-comment" key={i}>
                        <div className="commenter-profile right-box">
                          <img className="box-content" src={images[post.comments[comment].profileImage]} alt={post.comments[comment].profileImage}></img>
                        </div>
                        <div className="comment-text text-content">
                          {post.comments[comment].comment}
                        </div>
                      </div>)
                    }) : null}
                    <div className="write-comment">
                      <div className="my-profile right-box">
                        <img className="box-content" src={daphne_frvr} alt="daphne_frvr"></img>
                      </div>
                      <input className="comment-input" type="text" defaultValue="Write a comment"></input>
                      <button onClick={(e) => { submitComment(e, { index }) }}>Submit</button>
                    </div>
                  </div>
                </div>
              </div>)
          }
          return null
        }
        )}
      </div>
    )
  }
}

export default PostContainer;