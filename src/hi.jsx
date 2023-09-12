import React, { Component } from 'react'
import './hi.css';

const Hi =()=>{
  const name1= "Satyam";
  const marks= 99.99;
  function display(){
    alert("welcome to react");
  }
  
  
  return(
    
    <div id='main_div'>
      <h2 style={{color:"blue"}}>Enjoy React: {name1}</h2>
      <h2 id='margin'>Marks of {name1} is {marks}</h2>
      <div>{display()}</div>
    </div>
    
  );
  
}
export default Hi;





