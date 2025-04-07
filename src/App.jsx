// import { useState } from "react";
import Todo from "./components/toDo";
import Form from "./components/Form";
import FilterBtn from "./components/FilterButton";




function App(props) { 

    function addTask(name) {
       alert(name);
        
    }
    
   
    const taskList = props.tasks?.map((task) => (
        <Todo name={task.name} id={task.id}  completed={task.completed} key={task.id} />
    ));

    const FilterBTN = props.filter?.map((btn) => (
        <FilterBtn type={btn.type} id={btn.id} phrase={btn.phrase} key={btn.id} />
    ));
      
    


  return (
    <>
        <div className="root">
            <div className="titre">
                <h1>To DO list, {props.subject} </h1>
            </div>
            <div className="form">
               <Form addTask={addTask}  />
                
            </div> 
            <div className="bouton" id="btn-group-all" aria-pressed="true">
                {FilterBTN}
            </div>
            
            
            
            <div className="taskss">
                <h1>Tasks remaing </h1>
                <ul className="lists" role="list" aria-labelledby="list-heading">
                    
                    {taskList}
                    
                </ul>
            </div>
        
        </div>
    </>
    
  );
}

export default App;