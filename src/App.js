import './App.css';
import React from 'react';
import Alert from './Component/Alert';
// import Login_Y from './Component/Login_Y';
// import About from './Component/About';
import Navbar from './Component/Navbar';

import Rotator from './Component/Rotator';
import Sign_in from './Component/Sign_in';
import Login_Y from './Component/Login_Y';
// import { Switch, Route , BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <>
    <Alert/>
    <Navbar/>
    {/* <Rotator/>  */}
    <Sign_in/>
    
    </>
  );
}

export default App;
