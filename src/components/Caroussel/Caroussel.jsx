
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
            {/* <Left style={{ fontSize: 30 }} /> */}
          </div>
          {/* <div className="center">
            <h1>{images[currImg].title}</h1>
            <p>{images[currImg].subtitle}</p>
          </div> */}
          <div>
            <FontAwesomeIcon icon={faChevronRight} className="right"
            onClick={() => {
              slide < array.length - 1 && setSlide(slide + 1);
            }}/>
            {/* <Right style={{ fontSize: 30 }} /> */}
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

      
