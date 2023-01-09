import '../style/tags.css';
import React,{useState, useEffect} from "react";
import axios from "axios";

function Tags({product}) {
    console.log({product});
    return (
        <div className="tags">      
           
            <>
            <h1 className="lodgment_name">{product.title}</h1>
            <p className="lodgment_location">{product.location}</p>
            <ul className='list_tags'>
                <li className="lodgment_tag" key={product.tags}>{product.tags}</li>           
            </ul>
            </>        
    </div>
    )
 
}

export default Tags;

