import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Desc from '../components/Desc';
import '../style/description.css';


function Description({product}) {
        console.log(product.equipments);
    const [ visible, setVisible ] = useState (false);
    const display=() => {
        setVisible(!visible);
    }
    return (
        <>
    <div className="collapses">   
        <Desc product={product}/>      
            <section className="collapse_style_equi">
                <div className="collapse_title_log">                                              
                    <h2 className="title_log">Equipements</h2>                                               
                                        
                    <p className="icon" onClick={display}>{visible?<FontAwesomeIcon icon={faChevronUp} />:<FontAwesomeIcon icon={faChevronDown} />}</p>
                     
                </div>
                <div className="collapse_description_log">
                    <ul className="list_equipment">
                        {product.equipments.map((equip =>                        
                            visible &&<li className="info_description_log_equip">{equip}</li>
                        ))}
                    </ul>
                </div>
            </section>
    </div>
    </>
    )
}

export default Description;