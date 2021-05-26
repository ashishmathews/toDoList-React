import React, { useState } from "react";
import ToDoItem from "./ToDoItem"

function App() {
  const [item, updateItem] = useState("")
  const [list, updateList] = useState([])
  function handleChange(event) {
    const { value } = event.target
    updateItem(value)
  }
  function handleSubmit(event) {
    if (item == "") {
      document.getElementById("error-message").classList.remove("success-message")
      document.getElementById("error-message").classList.add("error-message")
      document.getElementById("error-message").innerHTML = "Please enter a task first"
    } else {
      updateList(prevValue => [...prevValue, item])
      updateItem("")
      document.getElementById("error-message").classList.remove("error-message")
      document.getElementById("error-message").classList.add("success-message")
      document.getElementById("error-message").innerHTML = "Added"
    }}


  function deleteItem (id) {
     updateList(prevArray => {
      return prevArray.filter((element, index) => {
        return index!==0;
      }) 
    })
  }
   
   
  // function deleteItem(id) {
  //   updateList(prevArray => {
  //     return prevArray.filter((item, index)=>{
  //       return index !==id
  //     })
  //   })
  // }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>

      <div className="form">
        <p id="error-message"></p>
        <input type="text" name="newItem" value={item} onChange={handleChange} required />
        <button onClick={handleSubmit}>
          <span>Add</span>
        </button>
      </div>

      <div>
        <ul>
        {list.map((toDoItem, index) => (  <ToDoItem
            key={index}
            id={index}
            toDoItem={toDoItem}
            onChecked={deleteItem}
          />))}
        
        </ul>

      </div>
    </div>
  );
}

export default App;
