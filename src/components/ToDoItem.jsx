import React, { useState } from "react";

function ToDoItem(props) {

    function handleClick() {

    }
    return (
        <li onClick={() => {
            props.onChecked(props.id)
        }}>{props.toDoItem}</li>
    )

}



// function ToDoItem (props) {
//     const [isDone, setIsDone] = useState(false)
//     function handleClick (){
//         setIsDone(!isDone);
//     }
//     return(
//     <ul >
//     {props.list.map(element =>  <li onClick={handleClick} style={{textDecoration:isDone ? "line-through": "none"}} >{element}</li>)}
//   </ul>
//     )
// }

export default ToDoItem;