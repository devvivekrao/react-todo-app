import React from "react";
import {v4 as uuidv4} from "uuid";

function Form( { inputText, setInputText, todos , setTodos, setStatus } ){

    const getInputText = (event) =>{        
        setInputText(event.target.value);
    };
    const submitTodo = (event) =>{
        event.preventDefault();
        if( inputText === ''){
            alert('Todo list can\'t be empty');
        }
        else{
            setTodos([
                ...todos,
                {
                    id: uuidv4(),
                    text: inputText,
                    completed: false
                }
            ]);
            setInputText("");
        }
    };
    const setStatusHandler = (event) =>{
        setStatus(event.target.value);
    };
    
    return (
       <form>
           <input onChange={getInputText} value={inputText} type="text" className="todo-input" />
            <button onClick={submitTodo} type="submit" className="todo-button" > 
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={setStatusHandler} name="todos" id="" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
       </form>       
    );
}

export default Form;