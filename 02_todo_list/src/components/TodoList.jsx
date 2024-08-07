import { useState } from "react";
import { MdCheck, MdDeleteForever } from "react-icons/md";


export const TodoList = ( ) => {

    const [inputValue, setInputValue] = useState("");
    const [task, setTask] = useState([])


    // in this handleInputChange the value is passed in it and got the value by setInputValue 
    //  in inputValue (current data)
    const handleInputChange =(value) => {
        setInputValue(value)
    };


    //  this handleFormSubmit is used to prevent the data and to prevent the default behavior of data
    const handleFormSubmit = (event) => {
        event.preventDefault();
    

    // this means input value is empty then return dont store data
        if(!inputValue) return;

    // it will check that the inputValue is already in task array or not
       if(task.includes(inputValue)) return;

        // this means hold the value of prevTask for a minute and add new value in inputValue
        setTask((prevTask) => [...prevTask, inputValue])
        
    
        setInputValue("");
    }


    return(
        <section className="todo-container">
            <header>ToDo List</header>
            <section className="form">
                <form onSubmit={handleFormSubmit}>
                    <div>
                        <input type="text" className="todo-input" autoComplete="off" 
                            value={inputValue} onChange={(event) => handleInputChange(event.target.value)}>
                        </input>

                    </div>
                    <div>
                        <button type="submit" className="todo-btn">Add task</button>
                    </div>
                </form>
                <section className="myUnOrderList">
                    <ul>
                        {
                            task.map((currTask, input) => {
                                return <li key={input} className="todo-item">
                                    <span>{currTask}</span>
                                    <button className="check-btn"><MdCheck />
                                    </button>
                                    <button className="delete-btn"><MdDeleteForever />
                                    </button>
                                </li>
                            })
                        }
                    </ul>
                </section>
            </section>
        </section>
    )
}