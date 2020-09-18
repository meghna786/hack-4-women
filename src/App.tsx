import React from 'react';
import './App.scss';
import Landing from "./components/landing/landing";
import Navbar from "./components/navbar/navbar";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Landing/>
    </div>
  );
}

export default App;
