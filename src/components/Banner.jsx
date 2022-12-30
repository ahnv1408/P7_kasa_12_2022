import React from 'react';
import '../style/header.css';
import background from '../assets/IMG_1_.webp';

function Banner() {
    return (
        <article>
            <img src={background} alt='paysage' className='paysage'/>
            <p className='p_paysage'>Chez vous, partout et ailleurs</p>
         </article>
    )

}

export default Banner;
