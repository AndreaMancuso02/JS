import { useState } from "react";
import Form from "./Form"

function ToDoList(){

    const [todo, setTodo] = useState([
        {
            todo: "",
            data: ""
        }
    ]);

    const addTodo = (newTodo) =>{
    setTodo([...todo, newTodo]);
  }

    return(
        <>
        <Form addTodo={addTodo}></Form>
        </>
    )
}

export default ToDoList