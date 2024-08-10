import { useEffect } from "react";
import { useState } from "react";
import { MdCheck, MdDeleteForever } from "react-icons/md";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";


export const TodoApp = ( ) => {

    const [task, setTask] = useState([]);
    // this task state will get the data from inputValue and display the data


    const handleFormSubmit = (inputValue) => {    

        // if the inputValue is empty then  return (means dont store the data)
        if(!inputValue) return;

        // it will check that the inputValue is already in task array or not
        if(task.includes(inputValue)) return;

        // this means hold the value of prevTask for a minute and add new value in inputValue
        // it is used to prevent the previous value and add the new value in inputValue
        setTask((prevTask) => [...prevTask, inputValue])
    };


    //  todo Data and Time
   
    

    // handle handleDeleteToDo funtion
    const handleDeleteToDo =(value) => {
        console.log(task);
        console.log(value);
    
        // we use !== because filter always return the true value
        const updatedTask = task.filter((currTask)=> currTask !== value )
        setTask(updatedTask)
    }

    // handle handleClearTodoData 
    const handleClearTodoData = () => {
        setTask([])
    }
   

    return(
        <section className="todo-container">
            <header>
                <h1>ToDo List</h1>
            </header>
            <TodoForm  onAddTodo={handleFormSubmit} />
            <section className="myUnOrderList">
                <ul>
                    {
                        task.map((currTask, index) => {
                            return <TodoList key={index} data= {currTask} onHandleDeleteTodo = {handleDeleteToDo}/>
                         })
                     }
                 </ul>
            </section>
            <section>
                <button className="clear-btn" onClick={handleClearTodoData}>Clear all</button>
            </section>
        </section>
    )
}