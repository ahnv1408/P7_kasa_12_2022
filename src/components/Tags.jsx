import '../style/tags.css';


function Tags({product}) {
    console.log(product.tags);
    return (
        <div className="tags">    
            <>
              
                <h1 className="lodgment_name">{product.title}</h1>
                <p className="lodgment_location">{product.location}</p>
                <div className='tag_container'>
                    {product.tags.map((el) =>
                   
                    <span className='lodgment_tag'>{el}</span>
                       
                    )}   
                    </div>                    
                                   
              
            </>        
    </div>
    )
 
}

export default Tags;

 

