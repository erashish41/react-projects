import { useEffect, useState } from "react"

export const RandomColorChange = () => {

    const [typeofColor, setTypeofColor] = useState("hex");
    const [color, setColor] = useState("#000000");

    function randomUtilityColor (length){
        return Math.floor(Math.random() * length)
    }

    // for HEX colors
    const handleCreateRandomHEXcolor = () => {
        let hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
        let hexColor = "#";

        // A for loop runs 6 times (to generate a 6-character HEX code).
        for(let i = 0; i< 6; i++){
            hexColor += hex[randomUtilityColor(hex.length)]
        }
        setColor(hexColor);
    }

    // for RGB color
    const handleCreateRandomRGBcolor = () => {
        let r = randomUtilityColor(256);
        let g = randomUtilityColor(256);
        let b = randomUtilityColor(256);

        setColor(`rgb(${r}, ${g}, ${b})`)
    }

    useEffect(() => {
        if(typeofColor === "rgb") handleCreateRandomRGBcolor();
        else handleCreateRandomHEXcolor();
    },[typeofColor])
    // The array [typeofColor] tells React to re-run the effect only when typeofColor changes, 
    // ensuring that the color type is handled appropriately.
    return (
        <div style={{
            width: "100vw",
            height: "100vh",
            background: color
        }}>
            <button onClick={() => setTypeofColor("hex")}>Create Hex color</button>
            <button onClick={() => setTypeofColor("rgb")}>Create Rgb color</button>
            <button onClick={typeofColor === "hex" 
            ? handleCreateRandomHEXcolor 
            : handleCreateRandomRGBcolor}>Generate Random color
            </button>

            <div style={{
                marginTop: "50px",
                color: "#fff",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "60px",
                flexDirection: "column",
                gap: "20px"
            }}>
                <h3>{typeofColor === "rgb" ? "RGB color" : "HEX color"}</h3>
                <h1>{color}</h1>
            </div>
        </div>
    )
}