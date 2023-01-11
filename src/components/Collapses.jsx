import Collapse from './Collapse';
import '../style/collapses.css';

function Collapses(props) {
    return (
        <div className="collapse">
            {
                props.collapseInformation.map((info) => 
                <Collapse info={info}/>
                )
            }
        </div>
    )
}

export default Collapses;
    









