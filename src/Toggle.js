// import {useState} from 'react';
// function handleClick({props,items}){
//   props.classList.toggle('active');
//   items.array.forEach(element => {
//     element.classList.toggle('active');
//   });
// }
export default function Toggle({ball,items}){

// ball.addEventListener("onclick",() =>handleClick({ball,items}));
ball.addEventListener("onclick",()=> {
  ball.classList.toggle('active');
  items.forEach(item =>{
    item.classList.toggle('active');
  })
})
}