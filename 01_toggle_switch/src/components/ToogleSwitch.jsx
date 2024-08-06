import { useState } from 'react'
import './ToogleSwitch.css'


export const ToogleSwitch = () => {

    const [isOn, setIsOn] = useState(false)

    const handleToggleSwitch = () => {
        setIsOn(!isOn);
    }
    // handleToggleSwitch is a function that toggles the state of isOn between true and false. When called, 
    // it inverts the current value of isOn. (from on to off and vise versa)
 
    const buttonIsOnOff = isOn ? "on" : "off";
    return (
        <div className='toggle-switch'  style={{backgroundColor: isOn ? "#4caf50" : "#f44336"}}
         onClick={handleToggleSwitch}>
            <div className= {`switch ${buttonIsOnOff}`} >
                <span className='switch-state'>{buttonIsOnOff}</span>
            </div>
        </div>
    )
}