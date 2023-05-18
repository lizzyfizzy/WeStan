import SideNav from './sidenav';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Homepage from "./homepage";
import Profile from "./profilepage";
import YourYasses from './your_yasses';
import Discover from './discover';

function App() {
  return (
    <div className="App">
      
      <Router>
        <Routes>
          <Route exact path="/" element={<div><SideNav/><Homepage/></div>} />
          <Route path="/discover" element={<div><SideNav/><Discover/></div>} />
          <Route path="/profile" element={<div><SideNav/><Profile/></div>} />
          <Route path="/youryasses" element={<div><SideNav/><YourYasses/></div>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
