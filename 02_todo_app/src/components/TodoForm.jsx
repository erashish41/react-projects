import { useState } from "react";

export const TodoForm = ({onAddTodo}) => {

    const [inputValue, setInputValue] = useState("");

     // in this handleInputChange the value is passed in it and got the value by setInputValue 
    //  in inputValue (current data)
    // we will get the value from user and will update it on setInputValue
    const handleInputChange =(value) => {
        setInputValue(value)
    };

// Child to Parent call 
    const handleFormSubmit = (event) => {
        event.preventDefault();
        onAddTodo(inputValue);
        setInputValue("");
    }


    return (
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
        </section>
    )
}