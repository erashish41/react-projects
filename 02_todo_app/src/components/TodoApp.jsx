import { useState } from "react";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { TodoDateTime } from "./TodoDateTime";


export const TodoApp = ( ) => {

    const [task, setTask] = useState([]);
    // this task state will get the data from inputValue and display the data
    // task is array of an object


    const handleFormSubmit = (inputValue) => {    
        const {id, content, checked } = inputValue;

        // if the inputValue is empty then  return (means dont store the data)
        if(!inputValue) return;

        // it will check that the inputValue is already in task array or not
        // if(task.includes(inputValue)) return;
        const ifTodoContentMatched = task.find(
            (currTask) => currTask.content === content      // currTask means (id, content, checked)
        );
        if(ifTodoContentMatched) return;

        // this means hold the value of prevTask for a minute and add new value in inputValue
        // it is used to prevent the previous value and add the new value in inputValue
        // if both key and values are same is JS object we can write only once
        setTask((prevTask) => [...prevTask, {id:id, content:content, checked:checked}])
    };



    // handle handleDeleteToDo funtion
    const handleDeleteToDo =(value) => {
    
        // we use !== because filter always return the true value
        const updatedTask = task.filter((currTask)=> currTask.content !== value )
        setTask(updatedTask)
    }

    // handle handleClearTodoData 
    const handleClearTodoData = () => {
        setTask([])
    };

    //todo handleCheckedTodo functionality
    const handleCheckedTodo = (content) => {
        const updatedTask = task.map((currTask) => {
            if(currTask.content === content){
                return {...currTask, checked: !currTask.checked}
            }else{
                return currTask
            }
        });
        setTask(updatedTask);
    }
   

    return(
        <section className="todo-container">
            <header>
                <h1>ToDo List</h1>
                <TodoDateTime />
            </header>
            <TodoForm  onAddTodo={handleFormSubmit} />
            <section className="myUnOrderList">
                <ul>
                    {
                        task.map((currTask, index) => {
                            return (
                            <TodoList key={currTask.id}
                            data= {currTask.content} 
                            checked = {currTask.checked}
                            onHandleDeleteTodo = {handleDeleteToDo}
                            onHandleCheckedTodo = {handleCheckedTodo}
                            />
                            )
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