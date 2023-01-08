import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Collapses from '../components/Collapses';
import collapseInformation from '../collapse/collapse.json';
import productsList from '../products/products.json';
import background_apropos from '../assets/Background(2).png';
import '../style/apropos.css';

function Apropos() {
  return (
    <>
        <Header/>
        <img className='background_apropos' src={background_apropos} alt='background a propose'/>
        
        <Collapses collapseInformation={collapseInformation} />
        <Footer />
    </>
  )
}

export default Apropos;