import { useState } from "react";
import Todo from "./components/toDo";

function App(props) { 
    const show = "Show";
    const task = "Tasks";


  return (
    <>
        <div className="root">
            <div className="titre">
                <h1>To DO list, {props.subject} </h1>
            </div>
            <form action="post">
                <input type="text" placeholder="Ajouter une tâche" className="input" />
                <button className="btn">Add</button>
            </form>
            <div className="bouton" id="btn-group-all" aria-pressed="true">
                <button type="button" id="showAll"> {show} All {task} </button>
                <button type="button" id="showActive"> {show} Active {task} </button>
                <button type="button" id="showCompleted"> {show} Completed {task} </button>
            </div>
            <div className="taskss">
                <h1>Tasks remaing </h1>
                <ul className="lists" role="list" aria-labelledby="list-heading">
                    <Todo name="John Max Well" id="todo-0"  completed />
                    <Todo name="Frank Jr" id="todo-1"  />
                    <Todo name="Mind Map" id="todo-2"  />
        
                </ul>
            </div>
        
        </div>
    </>
    
  );
}

export default App;