import { useEffect, useState } from "react";

export const TodoDateTime = () => {

    const [dateTime, setDateTime] = useState("");

    //  todo Data and Time
    useEffect(() => {
        const interval =  setInterval(() => {
            const now = new Date();
            const formattedDate = now.toLocaleDateString();
            const formattedTime = now.toLocaleTimeString();

            setDateTime(`${formattedDate} - ${formattedTime}`)
        }, 1000);

        return () => clearInterval(interval)
    }, [])


    return (
        <h2 className="data-time">{dateTime}</h2>
    )
}