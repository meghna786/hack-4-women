import React from "react";

const NavBar : React.FC=()=>{
      return(
            <div>
      <nav className="topnav">
            <div className="leftnav">
                  <a className="active" href="#home">khadi</a>
            </div>
            <div className="rightnav">
                  <a href="#search">Home</a>
                  <a href="#about">Recruiters Dashboard</a>
                  <a href="#search">LogIn</a>
                  <a href="#about">SignUp</a>
            </div>
      </nav>
            </div>
      );
};

export default NavBar;