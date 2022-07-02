import React, { useState } from "react";
import './Container.css';
import Movielist from "./Movielist";
function Container() {
  const [isactive,setactive]=useState(false);
  const isact = () => {
    if(isactive === true)
      setactive(false);
    else
      setactive(true);
  }
  return (
    <div onClick={isact} className={`container${isactive ? ' active':''}`}>
      <div className='content-container'>
        <div className='featured-content'>
          <img className='featured-title' src='img/f-t-1.png' alt='' />
          <p className='featured-desc'>
            Aliqua amet nulla voluptate et tempor nisi sunt. Qui enim commodo duis ut aute cupidatat magna cillum sit sit mollit cillum. Amet dolor amet commodo nisi ut adipisicing. Nostrud excepteur qui elit qui. Cillum nostrud esse qui amet ut incididunt elit aliquip elit esse nisi.
          </p>
          <button className='featured-button'>WATCH</button>
        </div>
        <Movielist />
        <div class="featured-content1">
          <img class="featured-title" src="img/f-t-2.png" alt=""/>
          <p class="featured-desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto illo dolor
                    deserunt nam assumenda ipsa eligendi dolore, ipsum id fugiat quo enim impedit, laboriosam omnis
                    minima voluptatibus incidunt. Accusamus, provident.</p>
          <button class="featured-button">WATCH</button>
        </div>
        <Movielist />
      </div>
    </div>
  );
}
export default Container;