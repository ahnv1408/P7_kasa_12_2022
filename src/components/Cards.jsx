import React from 'react';
import '../style/cards.css';
import { NavLink } from "react-router-dom";

function Cards(props) {
    const productsList = props.productsList;
    return (
        <article className='cards'>{
            productsList.map((product) =>
            <>
                <NavLink to= {`products/${product.id}`} key= {product.id} className={({ isActive }) => (isActive ? "activeLink" : undefined)}>
                    <img src={product.cover} alt='location'/>
                    <div>
                        <p className='p_cards'>{product.title}</p>
                    </div>
                </NavLink>
            </>
        )}</article>
    )
}
export default Cards;

