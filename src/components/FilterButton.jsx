function FilterBtn(props) {

    const show = "Show";
    const task = "Tasks";

  return (
    <>
        <button type={props.type} id={props.id}> {show} {props.phrase} {task} </button>
    </>
               
                
  );
    
}

export default FilterBtn