import { useState } from 'react'
import './ToggleSwitch.css'
import { IoIosSwitch } from "react-icons/io";



export const ToggleSwitch = () => {

    const [isOn, setIsOn] = useState(false)

    const handleToggleSwitch = () => {
        setIsOn(!isOn);
    }
    // handleToggleSwitch is a function that toggles the state of isOn between true and false. When called, 
    // it inverts the current value of isOn. (from on to off and vise versa)
 
    const buttonIsOnOff = isOn ? "on" : "off";
    const toggleBGColor = {backgroundColor: isOn ? "#4caf50" : ""};
    return (
        <>
        {/* h1 is for react icon only, if we want we have to import from react icons */}
            {/* <h1 style={{color: "#000", textAlign: "center" }}>
                Toggle Switch <IoIosSwitch  style={{backgroundColor: isOn ? "#4caf50" : "#f44336"}} />
            </h1> */}
            <div className='toggle-switch'  style={{backgroundColor: isOn ? "#4caf50" : "#f44336"}}
            onClick={handleToggleSwitch}>
                <div className= {`switch ${buttonIsOnOff}`} >
                    <span className='switch-state'>{buttonIsOnOff}</span>
                </div>
            </div>
        </>
    )
}