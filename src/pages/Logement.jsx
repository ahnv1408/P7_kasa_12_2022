import React from "react";
import { useParams } from "react-router-dom";
import '../style/logement.css';
import NotFound from '../pages/NotFound'
import Header from '../components/Header';
import Tags from "../components/Tags";
import Rate from "../components/Rate";
import Host from "../components/Host";
import productsList from "../products/products.json";
import Caroussel from '../components/Caroussel/Caroussel';



function Logement () {

    const { id } = useParams();
    console.log(id);
    // let chaine = id.toString();
    // console.log(chaine);
    // let id1 = parseInt(chaine.substring(1, 9));

    // let myFunc = num => Number(num);
      
    // var intArr = Array.from(String(id), myFunc);
    // for (let index = 1; index < intArr.length; index++) {
    //     const element = intArr[index];
    //     console.log(element);
    // }
   
 
    const product = productsList.find((p) =>  {console.log(":" + p.id); return (":" + p.id) == (id);
    });

    console.log(product);


    return (
        
        <>         
         
       
            <Header />           
             {/* <Caroussel product={product}/>     */}
            <div className="tags_host_rate">
                <div className="tags">
                    <Tags product={product}/>
                </div>
                <div className="host_rate">
                    <Host product={product}/>            
                    <Rate product={product}/> 
                </div>
            </div>

            </>
      
    )
}
export default Logement;