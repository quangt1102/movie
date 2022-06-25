
import React from "react";
function movieitem(props){
    return(
    <div className='movie-list-item'>
    <img src={require('./img/'+props+'.jpg')} alt='' className='movie-list-item-img'/>
    <p className='movie-list-item-desc'>
      Reprehenderit cupidatat eiusmod occaecat aute.
    </p>
    <button className='movie-list-item-button'>Watch</button>
  </div>)
  }
export default movieitem;