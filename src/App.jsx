import { useState } from "react";

function App(props) { 


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
        
        </div>
    </>
    
  );
}

export default App;