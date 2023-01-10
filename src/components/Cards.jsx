import React from 'react';
import '../style/cards.css';
import Card from './Card';


function Cards(props) {
    console.log(props.productsList[0].id);
    return (
        <section className='cards'>{
            props.productsList.map((product) =>
            <Card product={product}/>
        )
        }</section>
    )
}
export default Cards;

