
import { ReactComponent as Left} from "./left.svg";
import { ReactComponent as Right} from "./right.svg";
// import Carousel from "react-elastic-carousel";
// import { Carousel } from 'react-responsive-carousel';
import { useParams } from "react-router-dom";
import React,{useState, useEffect} from "react";
import axios from "axios";
import "../../style/caroussel.css";


export default function Caroussel({product}) {


     const [slide, setSlide] = useState(0)
    //  const arrayLenght = props.productsList.flatMap(el => el.pictures).length;
    const arrayLenght = product.flatMap(el => el.pictures).length;
     console.log(arrayLenght);
  
     function prevSlide() {
       let newSlide = slide === 0 ? arrayLenght - 1 : slide - 1;
       setSlide(newSlide);
     }
     function nextSlide() {
       let newSlide = slide === arrayLenght - 1 ? 0 : slide + 1;
       setSlide(newSlide);
     }
     return (
       <section className="caroussel_container">
         <div className="caroussel_navigation">
           <Left className="prev" onClick={() => {prevSlide()}} />
           <Right className="next" onClick={() => {nextSlide()}} />
         </div>
         {product.map((ele) => {
           return (
             <img src={ele.picture} alt="" />
           )
         })}
         <div className="caroussel_text">{slide + 1}/{arrayLenght}</div>
       </section>
    ) }


  //  className={i === slide ? "visible_img" : "hide_img"}


    










    // const productsList = props.productsList;
    // console.log(productsList);
    // const urlParams = useParams();
    // console.log(urlParams);
    // const productsData = productsList.filter((product) => product.id === urlParams.id);
    //     // Définir l'index du premier slide à 0
    // const [current, setCurrent] = useState(0);
    // const arrayLength = productsList.map((product) => product.pictures.length);

    //     // Sert à repartir au premier slide quand on arrive au dernier
    // const nextSlide = () => {
    //     setCurrent(current === arrayLength - 1 ? 0 : current + 1);
    // };
    //     // Sert à repartir au dernier slide quand on est au premier
    // const prevSlide = () => {
    //     setCurrent(current === 0 ? arrayLength - 1 : current - 1);
    // };


    // return (
    //     <>
    //         {
    //             productsData && productsData.map((location, index, id) => (
    //                 <div className="pictures" key={`${index}-${id}`}>
    //                     <div className="slides">
    //                         {location.pictures.map((picture, index) => (
    //                             <div className={index === current ? "slide actif" : "slide"} key={index}>
    //                                 { index === current && (
    //                                     <img className="slide_img" src={picture} alt={location.title} key={`${index}-${id}`}/>
    //                                 )}
    //                             </div>
    //                         ))}
    //                     </div>

    //                     <img className={arrayLength > 1 ? "left" : "hide"} src={left} alt="left" key={`${index}-${id}-left`} onClick={prevSlide}/>
    //                     <img className={arrayLength > 1 ? "right" : "hide"} src={right} alt="right" key={`${index}-${id}-right`} onClick={nextSlide}/>

    //                     <div className="page">
    //                         {current + 1}/{arrayLength}
    //                     </div>

    //                 </div>
    //             ))
    //         }
    //     </>
    // );
