import '../style/host.css';
import React from 'react';

function Host({host}) {
    // const host = props.host;
    return (
        <>
        <div className="host">            
            <p className='name'>{host.name}</p>
            <img src={host.picture} alt={host.name} className="host_picture"/>            
        </div>
        </>
    );
}

export default Host;


