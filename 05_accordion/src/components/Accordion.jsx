import {useState} from "react";
import data from "./data.json";

// an Accordion is a web design element that's a vertically stacked set of interactive headings that 
//  users can click to reveal or hide content. 
const Accordion = () => {

    const [singleSelect, setSingleSelect] = useState(null);
    const [enableMultiSelect, setEnableMultiSelect] = useState(false);
    const [multiple, setMultiple] = useState([]);

    const handleSingleSelected = (getCurrentId) => {
        setSingleSelect(getCurrentId === singleSelect ? null : getCurrentId);
    }

    const handleMultiSelected = (getCurrentId) => {
        let copyMulti = [...multiple];
        const findIndexOfCurrentId = copyMulti.indexOf(getCurrentId);   
        console.log(findIndexOfCurrentId);
        
        if(findIndexOfCurrentId === -1) copyMulti.push(getCurrentId);
        else copyMulti.splice(findIndexOfCurrentId, 1);

        setMultiple(singleSelect, multiple);
    }

    // console.log(getCurrentId);
    

    return (
        <div className= "acc-wrapper">
            <button onClick={() => setEnableMultiSelect(!enableMultiSelect)} >Enable MultiSelected</button>
            <div className="accordion" >
                {
                    data && data.length > 0 ?
                    data.map((currElem) => (<div className="item" key={currElem.id}>
                    
                        <div onClick={ enableMultiSelect 
                            ? ()=> handleMultiSelected(currElem.id) 
                            : ()=> handleSingleSelected(currElem.id)} 
                            className="title">
                            <h3>{currElem.question}</h3>
                            <span>+</span>
                        </div>

                        <div>
                            {   enableMultiSelect ? 
                                multiple.indexOf(currElem.id) !== -1 && (
                                    <div className="acc-content">{currElem.answer}</div>
                                ) :
                                singleSelect === currElem.id && (
                                    <div className="acc-content">{currElem.answer}</div>
                                )
                            }
                            {/* {
                                singleSelect === currElem.id ||
                                 multiple.indexOf(currElem.id) !== -1 
                                ? <div className="content"> {currElem.answer}</div>
                                : null
                            } */}
                        </div>
                    </div>)) : 
                    (<div> No Data found!</div>)
                }
            </div>
        </div>
    )
}

export default Accordion;

// data && data.length > 0 ? — This checks if data exists and has at least one element.
//  If the condition is true, it proceeds to the next block; if false, it shows a fallback message.

// currElem represents each object in data.