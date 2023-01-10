import starColors from "../assets/pleine.png";
import starWhite from "../assets/vide.png";
import '../style/rate.css';
import React from "react";

function Rate({product}) {  
  console.log({product}); 
   
    const stars = [1, 2, 3, 4, 5];

  
    return (

      
      <div className="rating">
      {stars.map((level) =>
     
      product.rating >= level ? (
          <img className="starColors" src={starColors} alt=""/>
      ) : (
          <img className="starWhite" src={starWhite} alt=""/>
     ) )}
    </div>
    );


}

export default Rate;