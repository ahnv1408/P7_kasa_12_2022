import React from 'react';
import Card_details from './Card_details';
import { Link } from "react-router-dom";

const Card = (props) => {
    console.log(props.product.title);
  return (
    <>
    <Link to= {`/products/${props.product.id}`}>          
        <Card_details product={props.product}/>
    </Link>               
    </>
  )
}

export default Card