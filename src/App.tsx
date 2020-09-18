import React from "react";
import './App.scss';
import Landing from "./components/landing/landing";
import NavBar from "./components/navbar/navbar";

function App() {
    return (
        <div className="App">
            <NavBar/>
            <Landing/>
        </div>
    );
}

export default App;
