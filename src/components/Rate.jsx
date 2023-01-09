import starColors from "../assets/pleine.png";
import starWhite from "../assets/vide.png";
import '../style/rate.css';
import { ReactComponent as Star } from '../assets/vide.svg';
import React from "react";

function Rate({product}) {  
  console.log({product}); 
   
    const stars = [1, 2, 3, 4, 5];
    // return (
    //     <div className="rating">
    //         {props.productsList.map((product) => {
    //             stars.map((level) => 
                
    //                 <Star fill={level <= product.rating ? "#ff6060" : "#f7f7f7"}></Star>
                
    //             )
    //         })}
    //     </div>
    // )
  
    return (
      // <div className="rating">
      //   {stars.map((level) =>
      //   props.productsList.map((product) =>
      //   product.rating >= level ? (
      //       <img className="starColors" src={starColors} alt=""/>
      //   ) : (
      //       <img className="starWhite" src={starWhite} alt=""/>
      //  ) ))}
      // </div>
      
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