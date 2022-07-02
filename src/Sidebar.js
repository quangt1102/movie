import React,{useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch, faUser, faBookmark } from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css';
// import {STATE} from './Navbar';
function Sidebar(){
  
  const [isactive,setactive] = useState(false);
  const isact = () =>{
    if(isactive)
      setactive(false);
    else
      setactive(true);
  }
    return(
    <div>
        <div onChange={isact} className={`sidebar${isactive ? ' active':''}`}>
        {
          [faSearch, faHome, faUser, faBookmark].map((icon) => (
            <FontAwesomeIcon onClick={isact} icon={icon} className={`left-menu-icon${isactive ? ' active':''}`} />
          ))
        }
      </div>
    </div>
        
    );
}
export default Sidebar;