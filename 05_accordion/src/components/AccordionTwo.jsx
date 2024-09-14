import { useEffect, useState } from "react";
import data from "./data.json";
import { FAQTwo } from "./FAQTwo";
import "../App.css"

export const AccordionTwo = () => {

    const [info, setInfo] = useState([]);
    const [activeId, setActiveId] = useState(false);

    useEffect(() => {
        setInfo(data);
        console.log(data);
        
    },[])

    const handleToggleButton = (id) => {
        setActiveId((prev) => (prev === id ? false : id));
    }

    return(
        <>
            <h1>The Accordion with Show and Close button</h1>
            <ul className="section-accordion">
                {
                    info && info.length > 0
                    ? (info.map((currElm)=> {
                        return (
                            <FAQTwo 
                                key={currElm.id} 
                                currData={currElm}
                                onToggle={() => handleToggleButton(currElm.id)}
                                isActive= {activeId === currElm.id}
                                />
                        )
                    }))
                    : (<div>No data found !</div>)
                }
            </ul>
        </>
    )
}