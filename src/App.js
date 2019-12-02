import React from 'react';
import './App.css';
import { NavLink, Route, Redirect } from 'react-router-dom';
import Home from './Home';
import People from './People';

//global.API_URL = 'http://localhost:8080/api'; // DEVELOPMENT
global.API_URL = "http://192.168.21.41/api"; // PRODUCTION

function App() {
  return (
    <div>
      <nav>
      <NavLink exact to="/home" activeClassName='active'>Home</NavLink>
      <NavLink to="/people" activeClassName='active'>People</NavLink>
      </nav>
      <div>
      <Redirect from="/" exact to="/home" />
      <Route path="/home" component={Home} />
      <Route path="/people" component={People} />
      </div>
    </div>
  );
}

export default App;
