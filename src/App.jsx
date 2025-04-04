import { useState } from "react";

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
                <ul className="lists">
                    <li>
                        <input type="checkbox" /> 
                        <label> Mind Map </label>
                        <button type="button" className="btnDelete">Delete</button>
                    </li>
                    <li>
                        <input type="checkbox" /> 
                        <label> Frank Jr </label>
                        <button type="button" className="btnDelete">Delete</button>
                    </li>
                    <li>
                        <input type="checkbox" /> 
                        <label> John Max Well </label>
                        <button type="button" className="btnDelete">Delete</button>
                    </li>
                </ul>
            </div>
        
        </div>
    </>
    
  );
}

export default App;