import { useState, useEffect } from 'react';
import '../css/App.css';
import Form from './Form';
import TodoList from './TodoList';

function App() {

  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect( ()=>{
    filterTodos();
  }, [todos,status] );

  const filterTodos = ()=> {
    switch(status){
      case "completed":      
        setFilteredTodos( todos.filter( (todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos( todos.filter( (todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos( todos );
        break;
    }
  };

  return (

    <div className="App">    
      <header>
        <h1>My Todo List</h1>        
      </header>
      <Form inputText={inputText} setInputText={setInputText} todos={todos} setTodos={setTodos} setStatus={setStatus}/>
      <TodoList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos} />
    </div>
  );
}

export default App;
