function Todo(props) {

    return (
        <>
            <li>
                <input type="checkbox"  id={props.id} defaultChecked={props.completed} /> 
                <label htmlFor={props.id}> {props.name} </label>
                <button type="button" className="btnDelete">Delete</button>
            </li>
        

        </>
    );
    
}

export default Todo;