import React from "react";
import { useParams } from "react-router-dom";
import '../style/logement.css';
import Header from '../components/Header';
import Tags from "../components/Tags";
import Rate from "../components/Rate";
import Host from "../components/Host";
import Footer from "../components/Footer";
import Description from "../components/Description";
import productsList from "../products/products.json";
import Caroussel from '../components/Caroussel/Caroussel';


function Logement () {
    const { id } = useParams();
    console.log(id);  
     const product = productsList.find((p) =>  {return (":" + p.id) === (id);
    });

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
            <div className="description">
                <Description product={product}/>
            </div>
            <Footer/>
        </>
      
    )
}
export default Logement;