import React from 'react';
import '../style/cards.css';

const Card_details = (props) => {
    console.log(props.product.title);
  return (
    <article className='article_cards'>
            
        <img src={props.product.cover} alt='location'/>
        <div className='layer_cards'>
            <p className='p_cards'>{props.product.title}</p>
        </div>

    </article> 

  )
}

export default Card_details