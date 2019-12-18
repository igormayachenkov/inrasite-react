import React from 'react';
import './App.css';
import { NavLink, Route, Redirect } from 'react-router-dom';
import Home from './Home';
import People from './People';
import Devices from './Devices';
import Normatives from './Normatives';
import Gallery from './Gallery';

//global.API_URL = 'http://localhost:8080'; // DEVELOPMENT
global.API_URL = "https://site.hiq.ru"; // PRODUCTION

function App() {
  return (
    <div>
      <nav>
      <NavLink to="/home" activeClassName='active'>Home</NavLink>
      <NavLink to="/people" activeClassName='active'>People</NavLink>
      <NavLink to="/devices" activeClassName='active'>Devices</NavLink>
      <NavLink to="/normatives" activeClassName='active'>Normatives</NavLink>
      <NavLink to="/history" activeClassName='active'>History</NavLink>
      </nav>
      <div>
      <Route path="/home" component={Home} />
      <Route path="/people" component={People} />
      <Route path="/devices" component={Devices} />
      <Route path="/normatives" component={Normatives} />
      <Route path="/history" component={Gallery} />
      <Route exact path="/">
          {<Redirect to="/home"/>}
      </Route>
      </div>
    </div>
  );
}

export default App;
