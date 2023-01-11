import '../style/description.css';
import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

function Equipments({equip}) {

    const [ visible, setVisible ] = useState (false);
    const display=() => {
        setVisible(!visible);
    }

    return (
        // <section className="collapse_style_equi">
        // <div className="collapse_title_log">                                              
        //     <h2 className="title_log">Equipements</h2>                                               
                                
        //     <p className="icon" onClick={display}>{visible?<FontAwesomeIcon icon={faChevronUp} />:<FontAwesomeIcon icon={faChevronDown} />}</p>
             
        // </div>
        <div className="collapse_description_log">
            <ul className="list_equipment">
                                     
                   { visible &&<li className="info_description_log_equip">{equip}</li>}
               
            </ul>
        </div>
    // </section>
    )
}

export default Equipments;