import {useState} from "react";
import data from "./data.json";

// an Accordion is a web design element that's a vertically stacked set of interactive headings that 
//  users can click to reveal or hide content. 
const Accordion = () => {

    const [select, setSelect] = useState(null);

    const handleSingleSelection = (getcurrentid) =>{
        setSelect(getcurrentid);
        
    }

    return (
        <div className= "wrapper">
            <div className= "accordion">
                {
                    data && data.length > 0 ? 
                    data.map((currItem) => (<div className="item" key={currItem.id}>
                        <div onClick={() => handleSingleSelection(currItem.id)} className="title">
                            <h3>{currItem.question}</h3>
                            <span>+</span>
                        </div>
                        {
                            select === currItem.id ? 
                            <div className="content">
                                {currItem.answer}
                            </div> : null
                        }
                     </div>
                     ))
                     : (<div>No data found</div>
                )}
            </div>
        </div>
    )
}

export default Accordion;