import React from "react";
import Container from "../Container/Container";
import './Header.css'
import './logo.png'


function Header () {
 return (
  <div>
      <div className="Nav-div">
        {/* <img className="Nav-title" src="https://mw3.wsj.net/mw5/content/logos/mw_logo_social.png" alt='logo'></img> */}
          <nav className="Nav-title">Stock Series</nav>
      </div>
   <Container />
   </div>
 )
}

export default Header