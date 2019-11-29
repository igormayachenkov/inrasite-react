import React from 'react';
import People from './People';
import './App.css';

global.API_URL = 'http://localhost:8080/api'; // DEVELOPMENT
//global.API_URL = "http://http://192.168.21.41/api"; // PRODUCTION

function App() {
  return (
    <div>
      <People />
    </div>
  );
}

export default App;
