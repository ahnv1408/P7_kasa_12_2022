import Collapse from './Collapse';
import '../style/description.css';
import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

function Desc({product}) {

    const [ visible, setVisible ] = useState (false);
    const display=() => {
        setVisible(!visible);
    }

    return(
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
    )
}

export default Desc;