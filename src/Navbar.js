
import React,{useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCaretDown,faMoon,faSun} from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

const Navbar=(props)=>{
  
  const [isactive,setactive] = useState(false);
  const isact = () =>{
    if(isactive)
      setactive(false);
    else{
      setactive(true);
    }
  }

  return(
        <div className="navbar">
            <div onChange={isact} className={`navbar-container${isactive ? ' active':""}`}>
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
                <div onChange={isact} className={`toggle${isactive ? ' active':""}`}>
                  <FontAwesomeIcon icon={faMoon} className='toggle-icon'/>
                  <FontAwesomeIcon icon={faSun} className='toggle-icon'/>
                  <div onClick={isact} className={`toggle-ball${isactive ? ' active':""}`}></div>
                  
                </div>
              </div>
            </div>
        </div>
    );
    
}

// export var STATE= Navbar.props.isactive;
export default Navbar;
