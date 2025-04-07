import { useState } from "react";

function Form(props) {
    const [name, setname] = useState("");

    function handleChange(event) {
        setname(event.target.value);
        console.log(event.target.value);
        
        
      }
   

    function handeleSubmit(events) {
        events.preventDefault();
        props.addTask(name);
        setname("");
        
        
    }
    
  return (
    <form onSubmit={handeleSubmit} >
        <input type="text" placeholder="Ajouter une tâche" className="input" autoComplete="off" value={name} onChange={handleChange} />
        <button className="btn">Add</button>
    </form>
  );
    
}

export default Form;