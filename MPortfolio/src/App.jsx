// import { useState } from 'react';
import React from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
// import './App.css';
import backgroundImage from '../images/computerKeyboard.jpg';
import LandingPage from './components/LandingPage';

const divStyle = {
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  height: '100vh',
};

const App = () => {
  return (
    <div style={divStyle}>
      <LandingPage />;
    </div>
  );
};


export default App;
