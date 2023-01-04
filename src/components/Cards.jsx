import React from 'react';
import '../style/cards.css';
import { Link } from "react-router-dom";

function Cards(props) {
    const productsList = props.productsList;
    return (
        <section className='cards'>{
            productsList.map((product) =>
            <>
                <Link to= {`/products/${product.id}`} key= {product.id} className='card'>
                    <article className='article_cards'>
                        <img src={product.cover} alt='location'/>
                        <div className='layer_cards'>
                            <p className='p_cards'>{product.title}</p>
                        </div>
                    </article>
                </Link>
            </>
        )}</section>
    )
}
export default Cards;

