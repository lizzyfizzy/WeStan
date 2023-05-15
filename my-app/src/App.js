import SideNav from './sidenav';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          WeStan
        </p>
      </header>
      <div className="feed">
        <div className="post-container">
          <div className="remix-post post">
            <div className="left-bar">
              <div className="artist-image">
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
                <div className="right-box"></div>
                <input className="comment-input" type="text" value="Write a comment"></input>
              </div>
            </div>
          </div>
        </div>
        <div className="post-container">
          <div className="text-post post">
            <div className="left-bar">
              <div className="artist-image">

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
          <div className="comments-wrapper">
            <div className="comments-arrow"></div>
            <div className="comments-container">
              <div className="single-comment">
                <div className="right-box"></div>
                <div className="comment-text text-content">
                  idk i think ur right!!!
                </div>
              </div>
              <div className="write-comment">
                <div className="right-box"></div>
                <input className="comment-input" type="text" value="Write a comment"></input>
              </div>
            </div>
          </div>
        </div>
        <div className="post-container">
          <div className="image-post post">
            <div className="left-bar">
              <div className="artist-image">
              </div>
              <div className="type-indicator"></div>
            </div>
            <div className="main-content">
              <div className="image-parent">
                <img alt="beyonce tour flyer" src="./beyonce-tour.png" className="image-content"></img>
                <div className="image-caption text-content">
                  WHO ELSE IS GOING OMGGGGG
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
          <div className="comments-wrapper">
            <div className="comments-arrow"></div>
            <div className="comments-container">
              <div className="write-comment">
                <div className="right-box"></div>
                <input className="comment-input" type="text" value="Write a comment"></input>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
