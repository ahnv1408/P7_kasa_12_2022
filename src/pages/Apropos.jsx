import React from 'react';
import Header from '../components/Header';
import productsList from '../products/products.json';
// import Collapse from '../components/Collapse';
import background_apropos from '../assets/Background(2).png';
import '../style/apropos.css';

function Apropos() {
  return (
    <>
        <Header/>
        <img className='background_apropos' src={background_apropos} alt='background a propose'/>
        <ul className='tags'>
            {
                productsList.map((product) =>
                <li className='tag' key={product.tags}>{product.tags}</li> )
            }
        </ul>
    </>
  )
}

export default Apropos;