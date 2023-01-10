// import React, { useState } from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
// import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Collapse from './Collapse';
import '../style/collapses.css';

function Collapses(props) {
    
    // const [ visible, setVisible ] = useState (false);
    // const display=() => {
    //     setVisible(!visible);
    // }

    return (
        <div className="collapse">
            {
                props.collapseInformation.map((info) => 

                <Collapse info={info}/>
                // <>
                //     <section>
                //         <div className="collapse_title" >                                              
                //             <h2 className="title">{info.title}</h2>                                            
                                          
                //             <p onClick={display} className="icon" >{visible?<FontAwesomeIcon icon={faChevronUp} />:<FontAwesomeIcon icon={faChevronDown} />}</p>
                             
                //         </div>
                //         <div className="collapse_description">
                //             {visible && <p className="info_description">{info.description}</p>}
                //         </div>
                //     </section>
                // </>
                )
            }
        </div>
    )
}

export default Collapses;
    









