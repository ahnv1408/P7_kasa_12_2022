import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import '../style/logement.css';
import Header from '../components/Header';
import Caroussel from '../components/Caroussel';
import productsList from '../products/products.json';
import Header from "../components/Header";

function Logement () {
    const urlParams = useParams();
    console.log(urlParams);
    return (
        <Header />
    )
}

export default Logement;