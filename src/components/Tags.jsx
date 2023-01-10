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
                <div className='tag_container'>
                    {product.tags.map((tag) =>
                 
                    <span className='lodgment_tag'>{tag.tags}</span>
                    
                    )}
                       
                    
                </div>
                
                
                
                
                
                 {/* <ul className='list_tags'>
                    <li className="lodgment_tag" key={product.tags}>{product.tags[0]}</li>           
                    <li className="lodgment_tag" key={product.tags}>{product.tags[1]}</li>           
                    <li className="lodgment_tag" key={product.tags}>{product.tags[2]}</li>           
                    <li className="lodgment_tag" key={product.tags}>{product.tags[3]}</li>           
                </ul>  */}
              
            </>        
    </div>
    )
 
}

export default Tags;

