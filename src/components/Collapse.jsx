import React, { useState } from "react";
import '../collapse/collapse.json';
import up from '../assets/up.webp';
import down from '../assets/down.webp';

function Collapse({ title, description }) {
    // const collapseList = props.collapseList;
    const [ visible, setVisible ] = useState (false);

    return (
        <>
            <div className="collapse_title">
                <h2>{title}</h2>
                <img src={up} onClick={(event) => {
                    event.preventDefault()
                    setVisible(!visible)
                }}/>
            </div>
        </>
    )
}

    // return  active ?(
    //     <div className= {false ? "collapse" + false : "collapse"}>
    //         <h2>{props.title}</h2>
    //         <img onClick={() => setActive(false)} classname="up" src={up} alt="up"/>
    //     </div>
    // ) : (
    //     <div className= "collapse">
    //         <h2>{props.title}</h2>
    //         <img onClick={() => setActive(true)} classname="down" src={down} alt="down"/>
    //     </div>
    // )
            // <div className="collapse_container">{
            //     collapseList.map((collapse) =>
            //     <div onClick={toggleState} className="collapse_">
            //         <h2>{collapse.title}</h2>
            //     </div>                
            // )}</div>


    //         <div onClick={toggleState} className="collapse_container">
    //             <h3>{props.title}</h3>
    //             <img className={toggle ? "up fleche" : "up"} src={up} alt="up"/>
    //         </div>
    //         <div className={toggle ? "down fleche" : "down"}>
    //             <p aria-hidden={toggle ? "true" : "false"}>{props.description}</p>
    //         </div>
    // )


export default Collapse;