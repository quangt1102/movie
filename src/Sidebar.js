import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch, faUser, faBookmark } from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css'
function Sidebar(){
    return(
    <div>
        <div className="sidebar">
        {
          [faSearch, faHome, faUser, faBookmark].map((icon) => (
            <FontAwesomeIcon icon={icon} className='left-menu-icon' />
          ))
        }
      </div>
    </div>
        
    );
}
export default Sidebar;