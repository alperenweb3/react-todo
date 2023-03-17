import { useState } from "react";
import "./App.css";

function App() {

  const [todo, setTodo] = useState("");

  //function addTodo(e){
    //const newTodo = "add ToDo";
    //setTodo((prevTodo)=>[newTodo, ...prevTodo]);
    //console.log(e);
    //setTodo(e.target.value);
  //}

  function handleInput(e){
    console.log(e);
    setTodo(e.target.value);
  }
  function handleAddToDo(){
    var a = document.querySelector(".todo-text");
    a.innerText = todo;
  }

  return (
    <div className="todo">
      <div className="todo__wrapper">
        <div className="todo__add-container">
          <h1>Hi! I'm ToDo List created by Alperen Özkan</h1>
          <input
            type="text"
            name="text"
            autoComplete="off"
            className="todo__input"
            onChange={handleInput}
          />
          <button type="submit" onClick={handleAddToDo} className="todo__btn">Add</button>
        </div>
        <div className="todos">
          <h3 className="todo-text">Tasks</h3>
        </div>
      </div>
    </div>
  );
}

export default App;
