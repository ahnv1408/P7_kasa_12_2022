import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import up from '../assets/up.webp';

// import down from '../assets/down.webp';


function Collapses(props) {
    console.log(props.collapseInformation[0]);
    const [ visible, setVisible ] = useState (false);
    const display=() => {
        setVisible(!visible);
    }

    return (
        <div className="collapse">
            {
                props.collapseInformation.map((info) => 
                <>
                    <section>
                        <div className="title">                                              
                            <h2>{info.title}</h2>                                               
                                                
                            <p onClick={display}>{visible?<FontAwesomeIcon icon={faChevronUp} />:<FontAwesomeIcon icon={faChevronDown} />}</p>
                             
                        </div>
                        <div className="description">
                            {visible && <p>{info.description}</p>}
                        </div>
                    </section>
                </>
                )
            }
        </div>
    )
    // return (
    //     <div className="collapse">
    //         {
    //             props.collapseInformation.map((info) => 
    //             <>
    //                 <section>
    //                     <div className="title">                                              
    //                         <h2>{info.title}</h2>
                                                  
    //                             <img className="up" src={up} onClick={display} alt=""/>
                             
    //                     </div>
    //                     <div className="description">
    //                         {visible && <p>{info.description}</p>}
    //                     </div>
    //                 </section>
    //             </>
    //             )
    //         }
    //     </div>
    // )
}

export default Collapses;
    









