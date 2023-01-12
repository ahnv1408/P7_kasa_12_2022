import React from "react";
import { useParams } from "react-router-dom";
import '../style/logement.css';
import Header from '../components/Header';
import Tags from "../components/Tags";
import Rate from "../components/Rate";
import Host from "../components/Host";
import Footer from "../components/Footer";
import Collapses from "../components/Collapses";
import NotFound from "../pages/NotFound";
import productsList from "../products/products.json";
import Caroussel from '../components/Caroussel/Caroussel';
import '../style/collapses.css';
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';



function Logement () {
    const [ visible, setVisible ] = useState (false);
    const display=() => {
        setVisible(!visible);
    }
    const { id } = useParams();
    console.log(id);  
     const product = productsList.find((p) =>  {return (":" + p.id) === (id);
    });
    if (!product) return <NotFound />;

    console.log(product);



    return (
        <>    
            <Header />           
             <Caroussel product={product}/>    
            <div className="tags_host_rate">
                <div className="tags">
                    <Tags product={product}/>
                </div>
                <div className="host_rate">
                    <Host product={product}/>            
                    <Rate product={product}/> 
                </div>
            </div>
            <Collapses product={product}/>          
            <Footer/>
        </>
      
    )
}
export default Logement;

             /* <div className="description">
                <Description product={product}/>
            </div> */