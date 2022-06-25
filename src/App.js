//module to render
import React from 'react'
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {solid} from '@fortawesome/fontawesome-svg-core/import.macro';

function App() {
  return(
    <div>
        <div className="navbar">
            <div className="navbar-container">
              <div className="logo-container">
                <h1 className="logo">Phimmoi</h1>
              </div>
              <div className="menu-container">
                <ul className="menu-list">
                  <li className="menu-list-item active">Home</li>
                  <li className="menu-list-item">Movies</li>
                  <li className="menu-list-item">Series</li>
                  <li className="menu-list-item">Popular</li>
                  <li className="menu-list-item">Trends</li>
                </ul>
              </div>
              <div className="profile-container">
                <img className="profile-picture" src={require('./img/profile.jpg')} alt="" />
                <div className="profile-text-container">
                  <span className="profile-text">Profile</span>
                </div>
              </div>
            </div>
        </div>
        <div className="sidebar">
        <FontAwesomeIcon icon={solid('search')} className='left-menu-icon' />
        <FontAwesomeIcon icon={solid('house')} className='left-menu-icon' />
        <FontAwesomeIcon icon={solid('user')} className='left-menu-icon' />
        <FontAwesomeIcon icon={solid('bookmark')} className='left-menu-icon' />
        </div>
        <div className="container">
          <div className='content-container'>
              <div className='featured-content'>
                <img className='featured-title' src={require('./img/f-t-1.png')} alt=''/>
                <p className='featured-desc'>
                  Aliqua amet nulla voluptate et tempor nisi sunt. Qui enim commodo duis ut aute cupidatat magna cillum sit sit mollit cillum. Amet dolor amet commodo nisi ut adipisicing. Nostrud excepteur qui elit qui. Cillum nostrud esse qui amet ut incididunt elit aliquip elit esse nisi.
                </p>
                <button className='featured-button'>WATCH</button>
              </div>
              <div className='movie-list-container'>
                <h1 className='movie-list-title'>NEW RELEASES</h1>
                <div className='movie-list-wrapper'>
                  <div className='movie-list'>
                    <div className='movie-list-item'>
                      <img src={require('./img/1.jpg')} alt='' className='movie-list-item-img'/>
                      <p className='movie-list-item-desc'>
                        Reprehenderit cupidatat eiusmod occaecat aute.
                      </p>
                      <button className='movie-list-item-button'></button>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
    </div>
    );
}

export default App;
