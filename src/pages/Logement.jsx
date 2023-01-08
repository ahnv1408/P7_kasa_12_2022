import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import '../style/logement.css';
import NotFound from '../pages/NotFound'
import Header from '../components/Header';
import Tags from "../components/Tags";
import Rate from "../components/Rate";
import Host from "../components/Host";
import Caroussel from '../components/Caroussel/Caroussel';
import productsList from '../products/products.json';
import {useState, useEffect} from "react";
import axios from "axios";


function Logement () {
    // const { productId } = useParams();
    // const product = productsList.find((product) => product.id === productId);
    // const { title, location, pictures, rating, host, equipments, description } = product;
   
   
   
//     const [product, setProduct] = useState([]);
//     const url = 'http://localhost:3000/products/products.json'
//     useEffect(()=>{
//         axios.get(`${url}`)
//         .then(response => setProduct(response.data))
//         .catch(err => console.log(err))
//       },[]);
//    const lodgmentId = window.location.pathname.substring(10);
//    const lodgment = product.find((item) => item.id === lodgmentId);
//    if(!lodgment) return <NotFound/>

    return (
        <>
            <Header />
       





            {/* <section>
                <Caroussel props={pictures}/>
                <div className="info">
                    <h1>{title}</h1>
                </div>
            </section> */}





           
            <Caroussel productsList={productsList}/>
        
            
            <Host productsList={productsList}/>
            <Tags productsList={productsList}/>
            <Rate productsList={productsList} />
        </>
    )
}
export default Logement;