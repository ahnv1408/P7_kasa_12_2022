import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import '../style/description.css';


function Description({product}) {
        
    const [ visible, setVisible ] = useState (false);
    const display=() => {
        setVisible(!visible);
    }
    return (
    <div className="collapses">          
        <>
            <section className="collapse_style_des">
                <div className="collapse_title_log">                                              
                    <h2 className="title_log">Description</h2>                                               
                                        
                    <p className="icon" onClick={display}>{visible?<FontAwesomeIcon icon={faChevronUp} />:<FontAwesomeIcon icon={faChevronDown} />}</p>
                     
                </div>
                <div className="collapse_description_log">
                    <div className="list_description">
                    {visible && <p className="info_description_log">{product.description}</p>}
                    </div>
                </div>
            </section>
            <section className="collapse_style_equi">
                <div className="collapse_title_log">                                              
                    <h2 className="title_log">Equipements</h2>                                               
                                        
                    <p className="icon" onClick={display}>{visible?<FontAwesomeIcon icon={faChevronUp} />:<FontAwesomeIcon icon={faChevronDown} />}</p>
                     
                </div>
                <div className="collapse_description_log">
                    <ul className="list_equipment">
                        {visible && <li className="info_description_log">{product.equipments[0]}</li>}
                        {visible && <li className="info_description_log">{product.equipments[1]}</li>}
                        {visible && <li className="info_description_log">{product.equipments[3]}</li>}
                        {visible && <li className="info_description_log">{product.equipments[4]}</li>}
                        {visible && <li className="info_description_log">{product.equipments[5]}</li>}
                    </ul>
                </div>
            </section>
        </>       
    
</div>
    )
}

export default Description;