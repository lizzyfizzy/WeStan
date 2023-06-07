import SideNav from './sidenav';
import './App.css';
import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect
} from "react-router-dom";
import Homepage from "./homepage";
import Profile from "./profilepage";
import YourYasses from './your_yasses';
import Discover from './discover';
import NewProfile from './new_profile';

function App() {
  const [loggedIn, setloggedIn] = useState(false);

  if(loggedIn === false){
    return(
      <div className='App'>
        <Router>
          <Routes>
            <Route path="*" element = {<div><SideNav/><NewProfile setloggedIn={setloggedIn}/></div>} />
          </Routes>
      </Router>
      </div>
    )
  }



  return (
    <div className="App">
      
      <Router>
        <Routes>
          <Route exact path="/" element={<div><SideNav/><Homepage/></div>} />
          <Route exact path="/newprofile" element = {<div><SideNav/><NewProfile setloggedIn={setloggedIn}/></div>} />
          <Route path="/discover" element={<div><SideNav/><Discover/></div>} />
          <Route path="/profile" element={<div><SideNav/><Profile/></div>} />
          <Route path="/youryasses" element={<div><SideNav/><YourYasses/></div>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
