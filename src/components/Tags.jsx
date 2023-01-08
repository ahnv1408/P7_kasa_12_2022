import '../style/tags.css';
import React,{useState, useEffect} from "react";
import axios from "axios";

function Tags(props) {
    console.log(props.productsList[0].tags);
    return (
        <div className="tags">
            {
                props.productsList.map((product) =>
                <>
                <h1 className="lodgment_name">{product.title}</h1>
                <p className="lodgment_location">{product.location}</p>
                <ul>
                    <li className="lodgment_tag" key={product.tags}>{product.tags}</li>           
                </ul>
                </>)
            }
        </div>
    )
    // const tags = props.tags;
    // return(
    //     <ul className='tags'>
    //         {
    //             tags.map((tag) =>
    //             <li className='tag' key={tag.tags}>{tag.tags}</li> )
    //         }
    //     </ul>
    // )
}

export default Tags;

        
        // <ul className='tags'>
        //     {
        //         productsList.map((product) =>
        //         <li className='tag' key={product.tags}>{product.tags}</li> )
        //     }
        // </ul>