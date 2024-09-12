import { useState } from "react"

export const RandomColorChange = () => {

    const [typeofColor, setTypeofColor] = useState("hex");
    const [color, setColor] = useState("#000000");

    function randomUtilityColor (length){
        return Math.floor(Math.random() * length)
    }

    // for HEX colors
    const handleCreateRandomHEXcolor = () => {
        const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E"];
        const hexColor = "#";

        for(let i = 0; i< 6; i++){
            hexColor += hex[randomUtilityColor(hex.length)]
        }
        setColor(hexColor);
    }

    return (
        <div>
            <button onClick={() => setTypeofColor("hex")}>Create Hex color</button>
            <button onClick={() => setTypeofColor("rgb")}>Create Rgb color</button>
            <button onClick={typeofColor === "hex" 
            ? handleCreateRandomHEXcolor 
            : handleCreateRandomRGBcolor}>Generate Random color</button>
        </div>
    )
}