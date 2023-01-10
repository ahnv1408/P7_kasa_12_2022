
import { ReactComponent as Left} from "./left.svg";
import { ReactComponent as Right} from "./right.svg";
// import Carousel from "react-elastic-carousel";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel as _Carousel } from 'react-responsive-carousel';
import { useParams } from "react-router-dom";
import React,{useState, useEffect} from "react";
import axios from "axios";
import "../../style/caroussel.css";
import { Slide } from "react-slideshow-image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';


export default function Caroussel({product}) {

     const [slide, setSlide] = useState(0)
    //  const arrayLenght = props.productsList.flatMap(el => el.pictures).length;
    
    const array = product.pictures;
    // const arrayLenght = array.map((el) => el.pictures.lenght);
  
    // console.log(lenght);
    // console.log(arrayLenght);
    // const arrayLenght = array.flatMap((el) => { console.log(el); return el;});

 
    //  function prevSlide() {
    //    let newSlide = slide === 0 ? arrayLenght - 1 : slide - 1;
    //    setSlide(newSlide);
    //  }
    //  function nextSlide() {
    //    let newSlide = slide === arrayLenght - 1 ? 0 : slide + 1;
    //    setSlide(newSlide);
    //  }

     return (
      <div className="carousel">
      <div
        className="caroussel_img"
        style={{ backgroundImage: `url(${array[slide]})` }}
      >
        <div className="icons_situation">
          <div>
            <FontAwesomeIcon icon={faChevronLeft} className="left"
            onClick={() => {
              slide > 0 && setSlide(slide - 1);
            }} />
          </div>        
          <div>
            <FontAwesomeIcon icon={faChevronRight} className="right"
            onClick={() => {
              slide < array.length - 1 && setSlide(slide + 1);
            }}/>
          </div>
        </div>
      </div>
    </div>
     )
}


   //        <section className="caroussel_container">
      //    <div className="caroussel_navigation">
      //      <Left className="prev" onClick={() => {prevSlide()}} />
      //      <Right className="next" onClick={() => {nextSlide()}} />
      //    </div>
      //    {array.map((ele,index) => {
      //      return (
      //        <img src={ele} alt="" className={index === setSlide ? "slide_img" : "hide_img"}/>
      //      )
      //    })}
      //    <div className="caroussel_text">{slide + 1}/{array.lenght}</div>
      //  </section>


      

      


      //   <section className="caroussel_container">
      //    <div className="caroussel_navigation">
      //    <img src={ele} alt="" /> 
      //      <Left className="prev" onClick={() => {prevSlide()}} />
      //      <Right className="next" onClick={() => {nextSlide()}} />
      //    </div>      
           
                       
         
      //    <div className="caroussel_text">{slide + 1}/{arrayLenght}</div>
      //  </section>





     
      //   <Carousel showArrows={true} onChange={onChange} onClickItem={onClickItem} onClickThumb={onClickThumb}>
      //   <div>
      //       <img src={ele} />
      //       <p className="legend">Legend 1</p>
      //   </div>
      // </Carousel>
      

      //  <section className="caroussel_container">
      //    <div className="caroussel_navigation">
      //      <Left className="prev" onClick={() => {prevSlide()}} />
      //      <Right className="next" onClick={() => {nextSlide()}} />
      //    </div>
      //    {array.map((ele) => {
      //      return (
      //        <img src={ele} alt="" />
      //      )
      //    })}
      //    <div className="caroussel_text">{slide + 1}/{arrayLenght}</div>
      //  </section>
     


  //  className={i === slide ? "visible_img" : "hide_img"}


    














      
