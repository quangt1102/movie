import React,{useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
function Movielist(){
  const [isactive,setactive]= useState(false);
  const isact = () => {
    if(isactive === true)
      setactive(false);
    else
      setactive(true);
  }
    var aitem = [{ item: '1', title: 'Her' },
  { item: '2', title: 'Star Wars' },
  { item: '3', title: 'Storm' },
  { item: '4', title: '1917' },
  { item: '5', title: 'Avengers' },
  { item: '6', title: 'Her' },
  { item: '7', title: 'Her' }];
  var bitem = [{ item: '8', title: 'Her' },
  { item: '9', title: 'Star Wars' },
  { item: '10', title: 'Storm' },
  { item: '11', title: '1917' },
  { item: '12', title: 'Avengers' },
  { item: '1', title: 'Her' },
  { item: '1', title: 'Her' }];
  // const arrows = document.querySelectorAll(".arrow");
  // const movieLists = document.querySelectorAll(".movie-list");
  // arrows.forEach((arrow, i) => {
  //   const itemNumber = movieLists[i].querySelectorAll("img").length;
  //   let clickCounter = 0;
  //   arrow.addEventListener("click", () => {
  //     const ratio = Math.floor(window.innerWidth / 270);
  //     clickCounter++;
  //     if (itemNumber - (4 + clickCounter) + (4 - ratio) >= 0) {
  //       movieLists[i].style.transform = `translateX(${
  //         movieLists[i].computedStyleMap().get("transform")[0].x.value - 300
  //       }px)`;
  //     } else {
  //       movieLists[i].style.transform = "translateX(0)";
  //       clickCounter = 0;
  //     }
  //   });
  
  //   console.log(Math.floor(window.innerWidth / 270));
  // });
  
  return(
    <div>
        <div className='movie-list-container'>
          <h1 onChange={isact} className={`movie-list-title${isactive ? ' active':''}`}>NEW RELEASES</h1>
          <div className='movie-list-wrapper'>
            <div className='movie-list'>
              {
                aitem.map((abc) => (
                  <div className='movie-list-item'>
                    <img src={`img/${abc.item}.jpg`} alt='' className='movie-list-item-img' />
                    <span className="movie-list-item-title">{abc.title}</span>
                    <p className='movie-list-item-desc'>
                      Reprehenderit cupidatat eiusmod occaecat aute.
                    </p>
                    <button className='movie-list-item-button'></button>
                  </div>
                ))
              }
            </div>
            <FontAwesomeIcon icon={faChevronRight} className='arrow' />
          </div>
        </div>

        <div className='movie-list-container'>
        <h1 onChange={isact} className={`movie-list-title${isactive ? ' active':''}`}>NEW RELEASES</h1>
          <div className='movie-list-wrapper'>
            <div className='movie-list'>
              {
                bitem.map((abc) => (
                  <div className='movie-list-item'>
                    <img src={`img/${abc.item}.jpg`} alt='' className='movie-list-item-img' />
                    <span className="movie-list-item-title">{abc.title}</span>
                    <p className='movie-list-item-desc'>
                      Reprehenderit cupidatat eiusmod occaecat aute.
                    </p>
                    <button className='movie-list-item-button'></button>
                  </div>
                ))
              }
            </div>
            <FontAwesomeIcon icon={faChevronRight} className='arrow' />
          </div>
        </div>
    </div>
    );
}
export default Movielist;