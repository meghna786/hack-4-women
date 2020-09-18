import React from 'react';
import './App.scss';
import Landing from "./components/landing/landing";
import Navbar from "./components/navbar/navbar";
import Section1 from "./components/section1/section1";
import Section2 from "./components/section2/section2";


function App() {  
  return (
    <div className="App">
      <Navbar/>
      <Section1/>
      <Section2/>
      <Landing/>
    </div>
  );
}

export default App;
