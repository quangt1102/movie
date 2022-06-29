import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCaretDown,faMoon,faSun} from '@fortawesome/free-solid-svg-icons';
import './Navbar.css'
function navbar(){
  //TOGGLE

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
  ".container,.movie-list-title,.navbar-container,.sidebar,.left-menu-icon,.toggle"
);

ball.addEventListener("click", () => {
  items.forEach((item) => {
    item.classList.toggle("active");
  });
  ball.classList.toggle("active");
});
    return(
        <div className="navbar">
            <div className="navbar-container">
              <div className="logo-container">
                <h1 className="logo">Phimmoi</h1>
              </div>
              <div className="menu-container">
                <ul className="menu-list">
                    <li className="menu-list-item active">Home</li>
                    {
                    ['Movies','Series','Popular','Trends'].map((mii)=>(
                      <li className='menu-list-item'>{mii}</li>
                    ))
                    }
                </ul>
              </div>
              <div className="profile-container">
                <img className="profile-picture" src='img/profile.jpg' alt="" />
                <div className="profile-text-container">
                  <span className="profile-text">Profile</span>
                  <FontAwesomeIcon icon={faCaretDown} />
                </div>
                <div className="toggle">
                  <FontAwesomeIcon icon={faMoon} className='toggle-icon'/>
                  <FontAwesomeIcon icon={faSun} className='toggle-icon'/>
                  <div className="toggle-ball"></div>
                </div>
              </div>
            </div>
        </div>
    );
}
export default navbar;