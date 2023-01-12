import Collapse from './Collapse';

import '../style/collapses.css';
import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';


function Collapses(props) {
    const [ visible, setVisible ] = useState (false);
    const display=() => {
        setVisible(!visible);
    }

    console.log(props.product);
    console.log(props.collapseInformation);

    
    return (

        <div className="collapse">
            <div>
            {                
                props.collapseInformation?.map((info) =>                             
                 <Collapse info={info}/>
                ) 
                
            } 
            </div>
            <div>              
        
                
                <Collapse prod={props.product}/>
            
            </div>                         
             
          
          
            
                    {/* <section className="collapse_style_des">
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
                                {product.equipments.map((equip =>                        
                                    visible &&<li className="info_description_log_equip">{equip}</li>
                                ))}
                            </ul>
                        </div>
                    </section> */}
        </div>
                    
        )
        
}

export default Collapses;
    









