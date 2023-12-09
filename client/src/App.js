import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Registration from './Registration';
import Profile1 from './Senior';
import Dether from './Dether';

import Home from './Home';

import Mreg from './M-Registration';
import Master from './Master';
import Mview from './Mview';

import Assreg from './A-Registration';
import Associate from './Associate';
import Aview from './Aview';

import Jreg from './J-Registration';
import Junior from './Junior';
import Jview from './Jview';
import './App.css'; // Import your CSS file

/*Authors Details:
Dether John J. Olaguir
BSIT 2B
detherjohnolaguir@gmail.com
detherjohnjolaguir@asscat.edu.ph
deathjohnz123@gmail.com
09105330662*/

const App = () => {
  return (
    <Router>
      <div>
        <nav className="navbr">
          <img
            alt="logo"
            src="https://scontent.fcgy1-1.fna.fbcdn.net/v/t1.15752-9/400408151_1401536127449871_5508112298068762489_n.png?stp=dst-png_p1080x2048&_nc_cat=102&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeGELG5s49fAdjNDpfpeWVZYV_2IWxVXH6dX_YhbFVcfp255dRTfvjsuCAaFkYfjHG8KaskJc7BkGTMhJ5M86dAl&_nc_ohc=e4UlEvw2A7YAX-jWchp&_nc_ht=scontent.fcgy1-1.fna&oh=03_AdQfaZb-1yRReo6yY9Lo2R9l9P3EAJpQSUgGy2rPCA8dOQ&oe=6599B3E0"
          ></img>
          <h1>Webmaster Club</h1>
          </nav>
        <nav className="navbar">
        <Link class="balay" to="/Home">
            <img class="balay" src="https://www.gifs.cc/home/yellow-chrome-blink-home.gif" alt="Home"/>
            </Link>
          <div className="navbar-links">
            <div className="dropdown">
              <span className="dropdown-button">Registration</span>
              <div className="dropdown-content">
              <Link to="/M-Registration">Master Registration</Link>
                <Link to="/registration">Senior Registration</Link>
                <Link to="/A-Registration">Associate Registration</Link>
                <Link to="/J-Registration">Junior Registration</Link>
              </div>
            </div>
            <div className="dropdown">
              <span className="dropdown-button">Ranks</span>
              <div className="dropdown-content">
                <Link to="/Master">Master Programmer</Link>
                <Link to="/Senior">Senior Programmer</Link>
                <Link to="/Associate">Associate Programmer</Link>
                <Link to="/Junior">Junior Programmer</Link>
              </div>
            </div>
          </div>
        </nav>
            
  
        <Route path="/registration" component={Registration} />
        <Route path="/Senior" component={Profile1} />
        <Route path="/dether/:profileId" component={Dether} />
  
        <Route path="/M-Registration" component={Mreg} />
        <Route path="/Master" component={Master} />
        <Route path="/Jit/:profileId" component={Mview} />
  
        <Route path="/A-Registration" component={Assreg} />
        <Route path="/Associate" component={Associate} />
        <Route path="/Associates/:profileId" component={Aview} />
  
        <Route path="/J-Registration" component={Jreg} />
        <Route path="/Junior" component={Junior} />
        <Route path="/Juniors/:profileId" component={Jview} />

        <Route path="/Home" component={Home} />
      </div>
    </Router>
  );
};

export default App;
