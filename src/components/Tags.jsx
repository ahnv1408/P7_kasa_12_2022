import '../style/tags.css';

function Tags(props) {
    const productsList = props.productsList;
    return(
        <ul className='tags'>
            {
                productsList.map((product) =>
                <li className='tag' key={product.tags}>{product.tags}</li> )
            }
        </ul>
    )
}

export default Tags;