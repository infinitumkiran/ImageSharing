import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import HeroSection from './Components/HeroSection';
function App() {
  return (
    <>
    <Router>
      <NavBar></NavBar>
      <HeroSection></HeroSection>
    </Router>
  </>
  );
}

export default App; 