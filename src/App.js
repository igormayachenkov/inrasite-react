import React from 'react';
import './App.css';
import { NavLink, Route, Redirect } from 'react-router-dom';
import Home from './Home';
import People from './People';
import Devices from './Devices';

global.API_URL = 'http://localhost:8080/api'; // DEVELOPMENT
//global.API_URL = "http://192.168.21.41/api"; // PRODUCTION

function App() {
  return (
    <div>
      <nav>
      <NavLink to="/home" activeClassName='active'>Home</NavLink>
      <NavLink to="/people" activeClassName='active'>People</NavLink>
      <NavLink to="/devices" activeClassName='active'>Devices</NavLink>
      </nav>
      <div>
      <Route path="/home" component={Home} />
      <Route path="/people" component={People} />
      <Route path="/devices" component={Devices} />
      <Route exact path="/">
          {<Redirect to="/home"/>}
      </Route>
      </div>
    </div>
  );
}

export default App;
