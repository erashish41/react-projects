import { useState } from "react";
import { MdCheck, MdDeleteForever } from "react-icons/md";


export const Extra = () => {

    const [inputValue, setInputValue] = useState("");
    const [task, setTask] = useState([]);
    // this task state will get the data from inputValue and display the data
    const [dataTime, setDateTime] = useState("");


    // we will get the value from user and will update it on setInputValue
    const handleInputChange = (value) => {
        setInputValue(value)
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();


        if( !inputValue) return;
        // if the inputValue is empty then  return (means dont store the data)
    
        setTask((prevTask) => [...prevTask, inputValue])
        // it is used to prevent the previous value and add the new value in inputValue
        setInputValue("");
        // after adding the value it will again empty the folder
    }

    // todo Date and Time
   
    
    const interval = setInterval(()=>{
        const now = new Date();
        const formattedDate = now.toLocaleDateString();
        const formattedTime = now.toLocaleTimeString();

        setDateTime(`${formattedDate} - ${formattedTime}`)
    }, 1000);

  

    return (
        <section className="todo-container">
            <header>
                <h1>ToDo List</h1>
                <h2 className="date-time">{dataTime}</h2>
            </header>
            <section className="form">
                <form onSubmit={handleFormSubmit}>
                    <div>
                        <input type= "text" className="todo-input"  autoComplete="off"
                            value={inputValue} onChange={(event)=> {handleInputChange(event.target.value)}}></input> 
                    </div>
                    <div>
                        <button type="submit">Add item</button>
                    </div>
                </form>
            </section>
            <section className="myUnOrdList">
                <ul>
                    {
                        task.map((currTask, index) => {
                            return(
                                <li key = {index} className="todo-item">
                                    <span>{currTask}</span>
                                    <button className="delete"><MdCheck /></button>
                                    <button><MdDeleteForever /></button>
                                </li>
                            )
                        })
                    }
                </ul>
            </section>
        </section>
    )
}